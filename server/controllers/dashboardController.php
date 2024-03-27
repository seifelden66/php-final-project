<?php

class JobDashboardController
{
    private $db;

    public function __construct(Database $database)
    {
        $this->db = $database;
    }
    public function index()
    {

        $this->db->query("SELECT * FROM jobs");
        $jobs = $this->db->selectAll();
        return json_encode($jobs);
    }

    public function create()
    {
        $jobData = $_POST; 
        $this->db->query("INSERT INTO jobs (title, description, salary) VALUES (?, ?, ?)");
        $this->db->bind(1, $jobData['title']);
        $this->db->bind(2, $jobData['description']);
        $this->db->bind(3, $jobData['salary']);
        $this->db->execute();

        return json_encode(['message' => 'Job created successfully']);
    }

    
    public function delete($id)
    {
        $this->db->query("DELETE FROM jobs WHERE id = ?");
        $this->db->bind(1, $id);
        $this->db->execute();

        return json_encode(['message' => "Job with ID $id deleted successfully"]);
    }
}

?>
