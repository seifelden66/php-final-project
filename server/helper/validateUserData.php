
<?php

class ValidateUserData
{
    public $userData;
    public $failedData = [];

    public function __construct($userData)
    {
        $this->userData = $userData;
    }

    /** 
     * Check functions and make sure they don't return wrong data, otherwise they return user data
     * 
     * @return array
     */

    public function checkData()
    {
        $this->validatePassword($this->userData['password']);
        $this->validateEmail($this->userData['email']);
        $this->validateImage();
        $this->validateUserName();
        $this->validateCountry();
        if (count($this->failedData) > 0) {
            return ['error' => $this->failedData];
        }
        return $this->userData;
    }
    // *NOTE -  password and email patterns
    const PASSWORD_PATTERN = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/';
    const EMAIL_PATTERN = '/^\S+@\S+\.\S+$/';
    const GENERAL_PATTERN  = '/^[a-zA-Z][a-zA-Z\s]{1,19}$/';

    // *NOTE -  function validate password if password correct return new hashing password , otherwise return failed message
    public function validatePassword($password)
    {
        if (!preg_match(self::PASSWORD_PATTERN, $password)) {
            return $this->failedData['password'] = "Please insert correct password like [2908kAls]";
        }
    }
    // *NOTE -  function validate email if email is faild, return faild message
    public function validateEmail($email)
    {
        if (!preg_match(self::EMAIL_PATTERN, $email)) {
            return $this->failedData['email'] = "Please insert correct email";
        }
    }
    // *NOTE -  function validate email user image
    public function validateImage()
    {
        $fileType = explode('/', $_FILES['profile_picture']['type'])[0];  // type of filef
        if ($fileType != 'image') {
            return $this->failedData['profile_picture'] = "Please choose correct file";
        }
        $new_name = uniqid();
        move_uploaded_file($_FILES['profile_picture']['tmp_name'], '/var/www/html/php/php-final-project/server/public/images/' . $new_name);
        $this->userData['profile_picture'] = $new_name;
    }

    // *NOTE - function validate user name
    public function validateUserName()
    {
        if (!preg_match(self::GENERAL_PATTERN, $this->userData['username'])) {
            return $this->failedData['username'] = "Please insert correct username";
        }
    }

    // *NOTE - function validate user country
    public function validateCountry()
    {
        if (!preg_match(self::GENERAL_PATTERN, $this->userData['country'])) {
            return $this->failedData['country'] = "Please insert correct country";
        }
    }
}
