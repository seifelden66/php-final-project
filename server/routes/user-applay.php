<?php

require('../database/database.php');
require('../controllers/applicationController.php');

header("content-type: application/json");

$obj = new ApplicationController(new Database);

echo $obj->applay($_POST);
