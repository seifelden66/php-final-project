
<?php

require('../../database/database.php');
require('../../controllers/dashboardController.php');

header("content-type: application/json");  // tell the client the response will be json data


$obj = new JobDashboardController(new Database);


echo $obj->index();

// require('../../database/database.php');