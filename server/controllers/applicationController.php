<?php

class ApplicationController
{
    private $db;
    public function __construct(Database $database)
    {
        $this->db = $database;
    }
    // NOTE - function user applay 
    function applay($data)
    {
        session_start();
        if (isset($_SESSION[$data['tokenNumber']])) {
            $id = $_SESSION[$data['tokenNumber']];
        } else {
            return json_encode(['message' => 'somthing is wrong']);
        }
        $this->db->query("INSERT INTO applications (job_id, applicant_id, cv_url, created_at) VALUES (?, ?, ?, ?)");
        $this->db->bind(1, $data['job_id']);
        $this->db->bind(2, $id);
        $this->db->bind(3, $data['cv_url']);
        $this->db->bind(4, date('Y-m-d'));
        $this->db->execute();
        return json_encode(['message' => 'success insert']);
    }
}
