<?php

require('../../database/database.php');
require('../../controllers/applicationController.php');

header("content-type: application/json");
header('Access-Control-Allow-Origin: *');
$obj = new ApplicationController(new Database);

echo $obj->status($_POST);
