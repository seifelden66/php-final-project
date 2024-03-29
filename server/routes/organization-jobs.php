<?php

require('../../database/database.php');
require('../../controllers/dashboardController.php');

header("Content-Type: application/json");

$obj = new JobDashboardController(new Database);

echo $obj->index();
