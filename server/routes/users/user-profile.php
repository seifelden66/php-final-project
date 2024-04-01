<?php


require('../../database/database.php');
require('../../controllers/userController.php');


header('content-type: application/json');
header('Access-Control-Allow-Origin: *');

$obj = new UserController(new Database);


echo $obj->profile($_GET['token']);
