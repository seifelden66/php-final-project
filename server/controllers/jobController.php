
<?php

class JobController
{
    private $db;
    public function __construct(Database $database)
    {
        $this->db = $database;
    }

    //NOTE - all job 
    public function allJob()
    {
        $this->db->query("SELECT * FROM jobs");
        $jobs = $this->db->selectAll();
        return json_encode($jobs);
    }

    public function singleJob($id)
    {
        // $this->db->query("SELECT ");
        // return json_encode($id);
    }

    // NOTE - function create job 
    public function create($data)
    {
        if (!$this->db->getTokenNumber($data['token'])) {
            http_response_code(400);
            return json_encode(['message' => 'somthing wrong']);
        }
        $id = $this->db->getTokenNumber($data['token']);
        $data['organization_id'] = $id;
        unset($data['token']);

        $data['created_at'] = date('Y-m-d');
        $data['updated_at'] = date('Y-m-d');

        // get array keys as a string 
        $rows = implode(',', array_keys($data));

        $values = '';
        foreach ($data as $value) {
            $values .= '?,';
        }
        $values = rtrim($values, ',');
        // return json_encode($rows);
        $this->db->query("INSERT INTO jobs ($rows) VALUES ($values) ");

        $i = 1;
        foreach ($data as $value) {
            $this->db->bind($i++, $value);
        }

        $this->db->execute();
        return json_encode(['message' => 'insert success']);
    }

    // NOTE - function stop job
    public function disable($id)
    {
        $this->db->query("UPDATE jobs SET is_open = 0 WHERE id = $id");
        $this->db->execute();
        return json_encode(['message' => 'The job has been stopped successfully']);
    }

    //NOTE  - open the job again
    public function open($id)
    {
        $this->db->query("UPDATE jobs SET is_open = 1 WHERE id = $id");
        $this->db->execute();
        return json_encode(['message' => 'The job has been successfully activated again']);
    }
}
