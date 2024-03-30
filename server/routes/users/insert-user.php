
<?php

require('../../database/database.php');
require('../../controllers/userController.php');
require('../../helper/validateUserData.php');

header('content-type: application/json');

$obj = new UserController(new Database);


echo $obj->insert(new ValidateUserData($_POST));
