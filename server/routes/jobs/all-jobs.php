
<?php

require('../../database/database.php');
require('../../controllers/jobController.php');

header("content-type: application/json");
header('Access-Control-Allow-Origin: *');

$obj = new JobController(new Database);


echo $obj->allJob();
