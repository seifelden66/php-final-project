
<?php

require('../../database/database.php');
require('../../controllers/userController.php');
require('../../helper/validateUserData.php');

header('content-type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");

$obj = new UserController(new Database);


echo $obj->insert(new ValidateUserData($_POST));
