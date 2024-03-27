
<?php

require('../database/database.php');
require('../controllers/userController.php');
require('../helper/validateUserData.php');



$obj = new UserController(new Database);


print_r($obj->insert(new ValidateUserData($_POST)));
