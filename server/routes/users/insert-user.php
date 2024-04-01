<?php

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization');
    header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS');
    header('HTTP/1.1 200 OK');
    exit;
}

// Handle other HTTP methods
require('../../database/database.php');
require('../../controllers/userController.php');
require('../../helper/validateUserData.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS');
header('Content-Type: application/json');

$data = file_get_contents("php://input");
$user = json_decode($data, true);

$obj = new UserController(new Database);
echo $obj->insert(new ValidateUserData($user));
