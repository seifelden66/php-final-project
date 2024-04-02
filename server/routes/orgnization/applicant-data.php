<?php

require('../../database/database.php');
require('../../controllers/dashboardController.php');

header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');

$obj = new DashboardController(new Database);

echo $obj->usersWhoApplyOnApplication($_GET['id']);
