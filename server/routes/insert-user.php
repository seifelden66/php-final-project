
<?php

require('../database/database.php');
require('../controllers/UserController.php');
require('../helper/ValidateUserData.php');



$obj = new UserController(new Database);


print_r($obj->insert(new ValidateUserData($_POST)));
