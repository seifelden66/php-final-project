
<?php

require('../database/database.php');
require('../controllers/UserController.php');

header("content-type: application/json");  // tell the client the response will be json data


$obj = new UserController(new Database);


echo $obj->getAllUsers();
