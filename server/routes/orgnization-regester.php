<?php

// echo 'kdalkfkl';
require('../database/database.php');
require('../controllers/dashboardController.php');
require('../helper/validateUserData.php');

header("content-type: application/json");  // tell the client the response will be json data

$obj = new JobDashboardController (new Database);

echo $obj->insert(new ValidateUserData ($_POST));