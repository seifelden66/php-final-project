<?php


require('../database/database.php');
require('../controllers/userController.php');
require('../helper/validateUserData.php');
header("Content-Type: application/json");

$obj = new UserController(new Database);

// Assuming you receive user login data through POST request
$userData = $_POST;
// Assuming you have a class ValidateUserData that validates user data
$validator = new ValidateUserData($userData);

echo $obj->login($validator);
