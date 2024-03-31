<?php

class Database
{
    public $conn;       // pdo connect
    public $prepare;    // pdo prepare

    public function __construct()
    {
        $this->connect();
    }
    // start function connect to database using pdo object
    public function connect()
    {
        try {
            $dns = "mysql:host=localhost;dbname=php_project;charset=utf8";
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            ];
            $this->conn = new PDO($dns, 'root', '', $options);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
    // end function connect

    //start function query
    public function query($sql)
    {
        $this->prepare = $this->conn->prepare($sql);
    }
    // end function query

    // start function bind
    public function bind($key, $value)
    {
        $this->prepare->bindParam($key, $value);
    }
    // end function bind

    public function execute()
    {
        $ex = $this->prepare->execute();
        return $ex ? true : false;
    }

    // select All function return all rows in table 
    public function selectAll()
    {
        $this->execute();
        return $this->prepare->fetchAll();
    }

    // select function return one row from table
    public function select()
    {
        $this->execute();
        return $this->prepare->fetch();
    }

    // count function return count row of table which have same value
    public function count()
    {
        return $this->prepare->rowCount();
    }

    // method return count number of all rows in table
    public function count_row($table)
    {
        $this->query("SELECT id FROM $table");
        $data = $this->selectAll();
        return $this->count();
    }
    // function last insert id 
    public function last_id()
    {
        return $this->conn->lastInsertId();
    }

    public function setTokenNumber($token, $expire_date, $id)
    {
        $this->query("INSERT INTO TokenNumbers (tokenNumber, expire_date, session_id) VALUES (?,?,?)");
        $this->bind(1, $token);
        $this->bind(2, $expire_date);
        $this->bind(3, $id);
        $this->execute();
    }
    public function getTokenNumber($token)
    {
        $this->query("SELECT id, session_id FROM TokenNumbers WHERE tokenNumber  = '$token'");
        $status = $this->select();
        if (!$status) {
            return false;
        }
        return $status['session_id'];
    }
}
