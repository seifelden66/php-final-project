
<?php

class JobController
{
    private $db;
    public function __construct(Database $database)
    {
        $this->db = $database;
    }

    public function getjob($id)
    {
    }
}
