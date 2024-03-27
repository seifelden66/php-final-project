
<?php

require('../database/database.php');
require('../controllers/userController.php');



$obj = new UserController(new Database);


echo $obj->getAllUsers();
