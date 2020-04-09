<?php

namespace mvcrb;

defined('ROOT') OR die('No direct script access.');


class UikModel extends Model {
    
    public function __construct() {
            
        parent::__construct();

        $this->TableName = 'users';

    }
    public function GetUser() {
        return $this->findAll('users');
    }
    public function GetNewUseCount() {
        return $this->count('users');
    }
    public function GetNewUseLastId() {
        $cursor = $this->getAll('SELECT * from `fnewuser` ORDER BY `id` DESC LIMIT 1');
        return $cursor;
    }
    
    public function GetExelUseLastId() {
        $cursor = $this->getAll('SELECT * from `fuseruik` ORDER BY `id` DESC LIMIT 1');
        return $cursor;
    }
    public function GetExelUseCount() {
        return $this->count('fuseruik');
    }    
    public function GetExelUser($id) {
        return $this->load('fnewuser',$id)->export() ;
    }
    public function GetTestExelUser($TestData) {
        return $this->find('fuseruik',' firstname = :firstname AND middlename = :middlename AND lastname = :lastname ', [ ':firstname' => $TestData['firstname'],':middlename' => $TestData['middlename'],':lastname' => $TestData['lastname'] ]);
    }

    public function GetNewUser($id) {
        return $this->load('users',$id);
    }

    public function CreateFormatedUser($param=null) {
        $fuser = $this->Dispense('fuser');
        $fuser->import($param);
        return $this->store($fuser);
    }
    public function CreateFormatedNewUser($param = null) {
        $fuser = $this->Dispense('fnewuser');
        $fuser->import($param);
        return $this->store($fuser);
    }

    public function GetUik() {
        return $this->findAll('uiksid');
    }

    public function CreateFormatedUik($param=null) {
        $fuser = $this->Dispense('fuik');
        $fuser->import($param);
        return $this->store($fuser);
    }
    public function Union() {
        
//        $fusern->import($param);
//        return $this->store($fuser); SELECT * FROM `fuser` INNER JOIN `fuik` WHERE `fuser`.`address`=`fuik`.`address`
        $cursor = $this->getAll('SELECT * FROM `fnewuser` INNER JOIN `fuik` WHERE `fnewuser`.`address`=`fuik`.`address`');
//        dd($cursor);
        $tmr = 0;
        foreach ($cursor as $row) {
            $tmr++;
//            dd($row);
            $fusern = $this->Dispense('fuseruik');
            $fusern->firstname = $row["firstname"];
            $fusern->middlename = $row["middlename"];
            $fusern->lastname = $row["lastname"];
            
            $fusern->address = $row["address"];
            $fusern->birthday = $row["birthday"];
            
            $fusern->phone = $row["phone"];
//            $fusern->email = $row["email"];
//            $fusern->golosdate = $row["golosdate"];
            $fusern->numberuik = $row["numberuik"];
            $this->store($fusern);
            if($tmr>=1000){
                $tmr=1;
                
                echo 'сохраняю пользователя с ID='.$row["id"].'<br>'.PHP_EOL;
            }
            
        }

    }

}