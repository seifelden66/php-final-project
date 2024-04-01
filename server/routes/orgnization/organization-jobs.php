<?php

require('../database/database.php');
require('../controllers/dashboardController.php');

header("Content-Type: application/json");

$obj = new DashboardController(new Database);

echo $obj->index($_GET['orgToken']);
