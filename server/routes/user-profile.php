<?php

require('../database/database.php');
require('../controllers/UserController.php');

header('content-type: application/json');


$obj = new UserController(new Database);


echo $obj->profile($_GET['token']);
