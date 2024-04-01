<?php



header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS');
header('Content-Type: application/json');

// Handle other HTTP methods
require('../../database/database.php');
require('../../controllers/applicationController.php');


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS');
header('Content-Type: application/json');

$data = file_get_contents("php://input");
$user = json_decode($data, true);


$obj = new ApplicationController(new Database);

$data = file_get_contents("php://input");
$user = json_decode($data, true);

echo $obj->status($user);
