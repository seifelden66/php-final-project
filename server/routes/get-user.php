
<?php

require('../database/database.php');
require('../controllers/UserController.php');



$obj = new UserController(new Database);


echo $obj->getAllUsers();
