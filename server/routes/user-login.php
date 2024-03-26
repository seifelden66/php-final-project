
<?php

require('../database/database.php');
require('../controllers/userController.php');
require('../helper/validateUserData.php');

header("content-type: application/json");  // tell the client the response will be json data


$obj = new UserController(new Database);


echo $obj->login(new ValidateUserData($_POST));

// header("content-type: application/json");