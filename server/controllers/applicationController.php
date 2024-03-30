<?php

class ApplicationController
{
    private $db;
    public function __construct(Database $database)
    {
        $this->db = $database;
    }
    // NOTE - function user applay on job
    function applay($data)
    {
        // get token number for user to get id for him and story 
        session_start();
        if (isset($_SESSION[$data['tokenNumber']])) {
            $id = $_SESSION[$data['tokenNumber']];
        } else {
            return json_encode(['message' => 'somthing is wrong']);
        }
        $job_id = $data['job_id'];
        // cheack if user already applay for this job if he alreayd applay return 
        $this->db->query("SELECT id from applications WHERE job_id = $job_id AND applicant_id = $id");
        $user = $this->db->select();
        if ($user) {
            http_response_code(400);
            return json_encode(['message' => 'You have already applied for this job']);
        } else {
            // cheak if job is open or close (0 refer to close and 1 refer to open)
            $this->db->query("SELECT id, is_open FROM jobs WHERE id = $job_id");
            $job = $this->db->select();
            if ($job['is_open'] == 0) {
                http_response_code(400);
                return json_encode(['message' => 'Opps this job has been stopped']);
            }
        }
        //  applay on job for user if he is already dont applay
        $this->db->query("INSERT INTO applications (job_id, applicant_id, cv_url, created_at) VALUES (?, ?, ?, ?)");
        $this->db->bind(1, $job_id);
        $this->db->bind(2, $id);
        $this->db->bind(3, $data['cv_url']);
        $this->db->bind(4, date('Y-m-d'));
        $this->db->execute();
        return json_encode(['message' => 'success insert']);
    }

    // NOTE - organization (change status for users who applay on job)

    public function status($data)
    {
        $status = $data['status'];
        $job_id = $data['job_id'];
        $applicant_id = $data['applicant_id'];
        $this->db->query("UPDATE applications SET status = '$status' WHERE job_id = $job_id AND applicant_id = $applicant_id");
        $this->db->execute();
        return json_encode(['message' => 'Success']);
    }
}
