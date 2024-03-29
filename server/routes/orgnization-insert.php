<?php


require('../database/database.php');
require('./controllers/dashboardController.php');
require('../helper/validateUserData.php');

$obj = new JobDashboardController (new Database);

echo $obj->insert(new ValidateUserData($_POST));
