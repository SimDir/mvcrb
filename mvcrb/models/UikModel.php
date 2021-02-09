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
    


    public function UserNormalize() {
        $cursor = $this->getCursor("SELECT * FROM `useraddr`");
//        dd($cursor);
        $tmr = 0;
        while ($row = $cursor->getNextItem()) {
            
            $fusern = $this->Dispense('normalizeuser');
            
            $fusern->firstname = $row["firstname"];
            $fusern->middlename = $row["middlename"];
            $fusern->lastname = $row["lastname"];
            $params = array(
                'geocode' => $row["address"], // адрес
                'format' => 'json', // формат ответа
                'results' => 1, // количество выводимых результатов f4461f6a-fe82-472c-9b94-721427cb023c
                'apikey' => '9cf899fd-f7b5-4e33-b3bd-f8b8cc7ef955', // ваш api key f4461f6a-fe82-472c-9b94-721427cb023c
            );
//            usleep(1000);
            $YaMapRet = @file_get_contents('https://geocode-maps.yandex.ru/1.x/?' . http_build_query($params, '', '&'));
            if ($YaMapRet === FALSE) {
                $latErr = error_get_last();
                $Respheader = $http_response_header;
                echo 'Не удалось преобразовать адресс ' . $value["address"] . ' <br>' . PHP_EOL;
                echo 'Апи ключь яндекса. доступ запрещен! <br>' . PHP_EOL;
//                sleep(5);
//                goto restart;
//                dd($Respheader);
                
                continue;
            }
            $response = json_decode($YaMapRet, true);
            $Address = $response["response"]["GeoObjectCollection"]["featureMember"][0]["GeoObject"]["metaDataProperty"]["GeocoderMetaData"]["Address"];
//            dd($Address);
            
            $fusern->address = $Address['formatted'];//$row["address"];
            $fusern->birthday = $row["birthday"];

            $fusern->phone = $row["phone"];
            $this->store($fusern);
        }


//        foreach ($cursor as $row) {
//            $tmr++;
////            dd($row);
//            $fusern = $this->Dispense('user');
//            
//            $fusern->firstname = $row["firstname"];
//            $fusern->middlename = $row["middlename"];
//            $fusern->lastname = $row["lastname"];
//
//            $fusern->address = "Ульяновская область, ".$row["address"];
//            $fusern->birthday = $row["birthday"];
//
//            $fusern->phone = $row["phone"];
////            $fusern->email = $row["email"];
////            $fusern->golosdate = $row["golosdate"];
////            $fusern->numberuik = $row["numberuik"];
//            $this->store($fusern);
//            if ($tmr >= 1000) {
//                $tmr = 1;
//
//                echo 'сохраняю пользователя с ID=' . $row["id"] . '<br>' . PHP_EOL;
//            }
//        }
    }
    public function GetUserNew($id) {
        return $this->find('useruikn', ' address = :address ', [':address'=>$id]);
    }

    public function NewUserUik() {
        //$cursor = $this->getCursor("SELECT * FROM `normalizeuser` INNER JOIN `fuik` WHERE `normalizeuser`.`address`=`fuik`.`address`");
//        dd($cursor);
        $cursor = $this->getCursor("SELECT * FROM `normalizeuser`");
        $spreadsheet = new \PhpOffice\PhpSpreadsheet\Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'Имя');
        $sheet->setCellValue('B1', 'Отчество');
        $sheet->setCellValue('C1', 'Фамилия');
        $sheet->setCellValue('D1', 'Адресс');
        $sheet->setCellValue('E1', 'Дата рождения');
        $sheet->setCellValue('F1', 'Телефон');
        $sheet->setCellValue('G1', 'УИК');
        $Rows=1;
        while ($row = $cursor->getNextItem()) {

            $FindingUser = $this->GetUserNew($row["address"]);
            
//            dd($row["address"]);
            
            if($FindingUser){
//                dd($value);
                continue;
            }
            $param['firstname'] = $row['firstname'];
            $param['middlename'] = $row['middlename'];
            $param['lastname'] = $row['lastname'];

            $param['address'] = $row["address"];

//
            $param['birthday'] = date("d F Y", strtotime($row['birthday']));
////            $param['birthday'] = strftime("%d %B %Y", strtotime($value['birthday']));
            $param['phone'] = $row['phone'];
            $param['numberuik'] = $row['numberuik'];
//            dd($param);
            $Rows++;
            $sheet->setCellValueByColumnAndRow(1, $Rows, $param["firstname"]);
            $sheet->setCellValueByColumnAndRow(2, $Rows, $param["middlename"]);
            $sheet->setCellValueByColumnAndRow(3, $Rows, $param["lastname"]);
            $sheet->setCellValueByColumnAndRow(4, $Rows, $param["address"]);
            $sheet->setCellValueByColumnAndRow(5, $Rows, $param["birthday"]);
            $sheet->setCellValueByColumnAndRow(6, $Rows, $param["phone"]);
            $sheet->setCellValueByColumnAndRow(7, $Rows, 'Не определен'); //$param["numberuik"]
        }
        
        $sheet->getColumnDimension('A')->setAutoSize(true);
        $sheet->getColumnDimension('B')->setAutoSize(true);
        $sheet->getColumnDimension('C')->setAutoSize(true);
        $sheet->getColumnDimension('D')->setAutoSize(true);
        $sheet->getColumnDimension('E')->setAutoSize(true);
        $sheet->getColumnDimension('F')->setAutoSize(true);
        $sheet->getColumnDimension('H')->setAutoSize(true);
        $writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($spreadsheet);
        $writer->save(SITE_DIR . 'user_not_uik.xlsx');
    }
}