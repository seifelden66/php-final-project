<?php

require('../../database/database.php');
require('../../controllers/jobController.php');
require('../../helper/validateUserData.php');

header("content-type: application/json");

$obj = new JobController(new Database);


echo $obj->create($_POST);
