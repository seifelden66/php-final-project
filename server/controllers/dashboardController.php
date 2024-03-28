<?php

class JobDashboardController
{
    private $db;

    public function __construct(Database $database)
    {
        $this->db = $database;
    }
    public function index()
    {

        $this->db->query("SELECT * FROM jobs");
        $jobs = $this->db->selectAll();
        return json_encode($jobs);
    }

    public function create()
    {
        $jobData = $_POST; 
        $this->db->query("INSERT INTO jobs (title, description, salary) VALUES (?, ?, ?)");
        $this->db->bind(1, $jobData['title']);
        $this->db->bind(2, $jobData['description']);
        $this->db->bind(3, $jobData['salary']);
        $this->db->execute();

        return json_encode(['message' => 'Job created successfully']);
    }

    
    public function delete($id)
    {
        $this->db->query("DELETE FROM jobs WHERE id = ?");
        $this->db->bind(1, $id);
        $this->db->execute();

        return json_encode(['message' => "Job with ID $id deleted successfully"]);
    }








    // *NOTE - user insert function 
    public function insert(ValidateUserData $data)
    {

        // *NOTE -  validate data using helper method checkdata 
        if (isset($data->checkData()['error'])) {
            http_response_code(400);   // bad request , user insert faild data
            return $data->checkData();  // return faild messages to user
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
        return json_encode([
            'success' => 'success insert',
        ]);
    }

    // *NOTE - login for user and orgnization
    public function login(ValidateUserData $data)
    {
        // use helper method to validate user data 
        $chekPassword = $data->validatePassword($data->userData['password']);
        $checkEmail = $data->validateEmail($data->userData['email']);
        if (count($data->failedData) > 0) {
            http_response_code(400);
            return json_encode($data->failedData);
        }
        // NOTE Check if (the user) is login as a user or as an organization, to see which table we will hit
        $email = $data->userData['email'];
        $password = $data->userData['password'];

        if ($data->userData['loginas'] == "user") {
            $this->db->query("SELECT id, password from applicants WHERE email = '$email'");
            $user = $this->db->select();


            if ($user && password_verify($password, $user['password'])) {
                // create session for user 
                session_start();
                $token = uniqid();
                $_SESSION[$token] = $user['id'];
                return json_encode(['token' => $token]);
            } else {
                // Invalid email or password
                return json_encode([
                    'error' => 'Invalid email or password',
                ]);
            }
        }
    }













}

?>
