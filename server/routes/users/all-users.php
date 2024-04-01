
<?php

require('../../database/database.php');
require('../../controllers/userController.php');

header("content-type: application/json");  // tell the client the response will be json data
header('Access-Control-Allow-Origin: *');
// header("Access-Control-Allow-Credentials: true");
$obj = new UserController(new Database);
echo $obj->getAllUsers();
