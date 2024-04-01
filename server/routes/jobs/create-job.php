
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
require('../../controllers/jobController.php');
require('../../helper/validateUserData.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS');
header('Content-Type: application/json');

$data = file_get_contents("php://input");
$job = json_decode($data, true);

$obj = new JobController(new Database);
echo $obj->create($job);
