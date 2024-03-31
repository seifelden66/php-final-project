<?php

class DashboardController
{
    private $db;
    private $session;


    public function __construct(Database $database)
    {
        $this->db = $database;
    }

    // NOTE - get all job related to organization
    public function index($token)
    {
        // Check if organization is logged in
        if (!$this->db->getTokenNumber($token)) {
            http_response_code(400);
            return json_encode(['message' => 'somthing wrong']);
        }
        $id = $this->db->getTokenNumber($token);

        // this query to return all Jobs specific to the organization and the number of applicants for each job
        $this->db->query("SELECT jobs.*, COUNT(app.job_id) as count FROM jobs LEFT JOIN applications app on jobs.id = app.job_id WHERE organization_id = $id GROUP BY jobs.id");
        $jobs = $this->db->selectAll();
        return json_encode($jobs);
    }

    //NOTE - get all users whos applay on application
    public function usersWhoApplyOnApplication($job_id)
    {
        $this->db->query("SELECT app.id, applicant_id, job_id, cv_url,status, user.id, name, email, country, experience, education, education  FROM applications app JOIN applicants user
        ON app.applicant_id = user.id WHERE job_id = $job_id");
        $applicant = $this->db->selectAll();
        return json_encode($applicant);
    }

    // *NOTE - user insert function 
    public function insert(ValidateUserData $data)
    {
        // *NOTE -  validate data using helper method checkdata 
        if (isset($data->checkData()['error'])) {
            http_response_code(400);   // bad request , user insert faild data
            return json_encode($data->checkData());  // return faild messages to user
        }

        // encrypt password
        $userData = $data->checkData();
        $newPassword = password_hash($userData['password'], PASSWORD_DEFAULT);
        $userData['password'] = $newPassword;

        // NOTE - check if email is already exist
        if (array_key_exists('email', $userData)) {
            $email = $userData['email'];
            $this->db->query("SELECT id FROM organizations WHERE email = '$email'");
            $this->db->select();
            if ($this->db->count() > 0) {
                http_response_code(400); // bad request , user insert faild data
                return json_encode([
                    'email' => 'email is alredy exists',
                ]);
            }
        }

        // get array keys as a string 
        $rows = implode(',', array_keys($userData));

        $values = '';
        foreach ($userData as $value) {
            $values .= '?,';
        }
        $values = rtrim($values, ',');

        $this->db->query("INSERT INTO organizations ($rows) VALUES ($values) ");


        $i = 1;
        foreach ($userData as $value) {
            $this->db->bind($i++, $value);
        }

        $this->db->execute();
        $lastId = $this->db->last_id();

        $token = uniqid() . time();
        $this->db->setTokenNumber($token, date('Y-m-d H:i:s'), $lastId);
        return json_encode(['token' => $token]);
    }
}
