<?php

require('../../database/database.php');
require('../../controllers/jobController.php');

header("content-type: application/json");


$obj = new JobController(new Database);


echo $obj->disable($_GET['id']);
