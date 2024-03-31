<?php

class UserController
{

    private $db;
    public function __construct(Database $database)
    {
        $this->db = $database;
    }


    // *NOTE - get all users data function 
    public function getAllUsers()
    {
        $this->db->query("SELECT * FROM applicants");
        $users = $this->db->selectAll();
        return json_encode($users);
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
            $this->db->query("SELECT id FROM applicants WHERE email = '$email'");
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

        $this->db->query("INSERT INTO applicants ($rows) VALUES ($values) ");


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

    // *NOTE - login for user and orgnization
    public function login(ValidateUserData $data)
    {
        // return json_encode($data->userData);
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

                $token = uniqid() . time();
                $this->db->setTokenNumber($token, date('Y-m-d H:i:s'), $user['id']);
                return json_encode(['token' => $token]);
            } else {
                // Invalid email or password
                http_response_code(400);
                return json_encode([
                    'error' => 'Invalid email or password',
                ]);
            }
        }

        if ($data->userData['loginas'] == "organization") {
            $this->db->query("SELECT id, password FROM organizations WHERE email = '$email'");
            $organization = $this->db->select();


            if ($organization && password_verify($password, $organization['password'])) {
                // create session for user 
                $token = uniqid() . time();
                $this->db->setTokenNumber($token, date('Y-m-d H:i:s'), $organization['id']);
                return json_encode(['token' => $token]);
            } else {
                // Invalid email or password
                http_response_code(400);
                return json_encode([
                    'error' => 'Invalid email or password',
                ]);
            }
        }
    }
    //NOTE - user profile 
    public function profile($token)
    {
        if (!$this->db->getTokenNumber($token)) {
            http_response_code(400);
            return json_encode(['message' => 'somthing wrong']);
        }
        $id = $this->db->getTokenNumber($token);
        $this->db->query("SELECT * FROM applicants WHERE id = $id");
        $user = $this->db->select();
        unset($user['password']);
        return json_encode($user);
    }
}
