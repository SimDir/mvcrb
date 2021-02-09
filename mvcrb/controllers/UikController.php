<?php


namespace mvcrb;

defined('ROOT') OR die('No direct script access.');

class UikController extends Controller {

    public function __construct() {
        parent::__construct();
    }
    public function IndexAction2() {
        ini_set('max_execution_time', 9000);
        $users = new UikModel();

        $userArr = $users->GetUser();

        foreach ($userArr as $key => $value) {
            $params = array(
                'geocode' => 'ульяновск область'.$value["address"], // адрес
                'format' => 'json', // формат ответа
                'results' => 1, // количество выводимых результатов
                'apikey' => '03c49f9d-a19a-402e-9ce8-e0d145f7dcde', // ваш api key
            );
            $response = json_decode(file_get_contents('https://geocode-maps.yandex.ru/1.x/?' . http_build_query($params, '', '&')),true);

            $Address = $response["response"]["GeoObjectCollection"]["featureMember"][0]["GeoObject"]["metaDataProperty"]["GeocoderMetaData"]["Address"];
//            dd($Address);
            $param['firstname']=$value['name'];
            $param['middlename']=$value['patronim'];
            $param['lastname']=$value['firstnam'];
            
            $param['address']=$Address['formatted'];
            $param['birthday']=date("Y-m-d H:i:s", strtotime($value['birthday']));
            $param['phone']=$value['phone'];
            $param['email']=$value['email'];
            

//            $final = date("Y-m-d H:i:s", strtotime($value['datagolos']));
//            dd($final);
            $param['golosdate']=date("Y-m-d H:i:s", strtotime($value['datagolos']));
            
//            dd($param);
            $users->CreateFormatedUser($param);
//            return $Address;

        }
        return $response["response"]["GeoObjectCollection"];
    }
    public function UikAction() {
        ini_set('max_execution_time', 9000);
        $users = new UikModel();

        $userArr = $users->GetUik();

        foreach ($userArr as $key => $value) {
//            dd($value);
            echo $key;
            $params = array(
                'geocode' => 'ульяновск область, ' . $value["gorod"].', '. $value["ul"].', '. $value["home"].' ', // адрес
                'format' => 'json', // формат ответа
                'results' => 1, // количество выводимых результатов
                'apikey' => '7fe449f3-7200-4f9b-a9f8-aca7d57fdb4d', // ваш api key
            );
            $response = json_decode(file_get_contents('https://geocode-maps.yandex.ru/1.x/?' . http_build_query($params, '', '&')), true);

            $Address = $response["response"]["GeoObjectCollection"]["featureMember"][0]["GeoObject"]["metaDataProperty"]["GeocoderMetaData"]["Address"];
//            dd($Address);
            $param['numberuik'] = $value['uiknam'];
//            $param['middlename'] = $value['patronim'];
//            $param['lastname'] = $value['firstnam'];
//
            $param['address'] = $Address['formatted'];
//            $param['birthday'] = date("Y-m-d H:i:s", strtotime($value['birthday']));
//            $param['phone'] = $value['phone'];
//            $param['email'] = $value['email'];


//            $final = date("Y-m-d H:i:s", strtotime($value['datagolos']));
//            dd($final);
//            $param['golosdate'] = date("Y-m-d H:i:s", strtotime($value['datagolos']));

//            dd($param);
            $users->CreateFormatedUik($param);
//            return $Address;
        }
        return $response["response"]["GeoObjectCollection"];
    }
    public function UnionAction() {
        ini_set('max_execution_time', 9000);
        $users = new UikModel();
        return $users->Union();
    }
    public function NewuserAction() {
//        ini_set('max_execution_time', 9000);
        $users = new UikModel();
//        $geocoder = new \OpenCage\Geocoder\Geocoder('c25e838999f24fe0abcd0382cab45c03');
        
//        $userArr = $users->GetNewUser();
        restart:
        echo 'Запускаю выполнение скрипта! '. ' <br>' . PHP_EOL;
        $lid = (int)$users->GetNewUseLastId()[0]['id'];
//        dd($lid);
        $tmr = 0;
        for ($i = $lid+1; $i <= $users->GetNewUseCount(); $i++) {
            $tmr++;
            $value = $users->GetNewUser($i);
//            $result = $geocoder->geocode($userArr["address"]);
            $params = array(
                'geocode' => 'ульяновская область ' . $value["address"], // адрес
                'format' => 'json', // формат ответа
                'results' => 1, // количество выводимых результатов f4461f6a-fe82-472c-9b94-721427cb023c
                'apikey' => '9cf899fd-f7b5-4e33-b3bd-f8b8cc7ef955', // ваш api key f4461f6a-fe82-472c-9b94-721427cb023c
            );
            usleep(1000);
            $YaMapRet = @file_get_contents('https://geocode-maps.yandex.ru/1.x/?' . http_build_query($params, '', '&'));
  
            if($YaMapRet === FALSE){
                $latErr = error_get_last();
                $Respheader = $http_response_header;
                echo 'Не удалось преобразовать адресс ' . $value["address"] . ' <br>' . PHP_EOL;
                echo 'Апи ключь яндекса. доступ запрещен! <br>' . PHP_EOL;
//                sleep(5);
//                goto restart;
                dd($Respheader);
                echo 'Не удалось преобразовать адресс ' . $value["address"] . ' <br>' . PHP_EOL;
                continue;
            }
            $response = json_decode($YaMapRet, true);

//            dd($response);
            
            $Address = $response["response"]["GeoObjectCollection"]["featureMember"][0]["GeoObject"]["metaDataProperty"]["GeocoderMetaData"]["Address"];
//            dd($Address);
            $param['firstname'] = $value['firstname'];
            $param['middlename'] = $value['middlename'];
            $param['lastname'] = $value['lastname'];

            if(isset($Address['formatted'])){
                $param['address'] = $Address['formatted'];
            }else{
                $param['address'] = 'Адресс определен не верно '.$value["address"];
//                continue;
            }
            
            $param['birthday'] = date("Y-m-d H:i:s", strtotime($value['birthday']));
            $param['phone'] = $value['phone'];
//            $param['email'] = $value['email'];


            $users->CreateFormatedNewUser($param);
            //echo 'Удалось преобразовать адресс ' . $value["address"] .' В '.$param['address']. ' <br>' . PHP_EOL;
            
            if($tmr>=1000){
                $tmr=1;
                echo 'Записал 1000 значениий! последний записанный '. $i . ' <br>' . PHP_EOL;
            }
        }
        die();
//        foreach ($userArr as $value) {
//            $params = array(
//                'geocode' => 'ульяновск область' . $value["address"], // адрес
//                'format' => 'json', // формат ответа
//                'results' => 1, // количество выводимых результатов
//                'apikey' => '7fe449f3-7200-4f9b-a9f8-aca7d57fdb4d', // ваш api key
//            );
//            $response = json_decode(file_get_contents('https://geocode-maps.yandex.ru/1.x/?' . http_build_query($params, '', '&')), true);


//            return $Address;
//        }
        return $response["response"]["GeoObjectCollection"];
    }

    
    public function ExeluserAction() {
//        ini_set('max_execution_time', 9000);
        setlocale(LC_ALL, 'ru_RU', 'ru_RU.UTF-8', 'ru', 'russian');
        $users = new UikModel();
//        $geocoder = new \OpenCage\Geocoder\Geocoder('c25e838999f24fe0abcd0382cab45c03');
//        $userArr = $users->GetNewUser();
        restart:
        echo 'Запускаю выполнение скрипта exel! ' . ' <br>' . PHP_EOL;
        $lid = (int) $users->GetExelUseLastId()[0]['id'];
        
        $tmr = 0;
        $excnt = 67202;//$users->GetExelUseCount();
//        dd($excnt);//$lid +
        
        $spreadsheet = new \PhpOffice\PhpSpreadsheet\Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'Имя');
        $sheet->setCellValue('B1', 'Отчество');
        $sheet->setCellValue('C1', 'Фамилия');
        $sheet->setCellValue('D1', 'Адресс');
        $sheet->setCellValue('E1', 'Дата рождения');
        $sheet->setCellValue('F1', 'Телефон');
        $sheet->setCellValue('G1', 'УИК');
//        $sheet->setCellValue('H1', '');
 
        $Rows=1;
        for ($i = 1; $i <= $excnt; $i++) {
            $tmr++;
            
            $value = $users->GetExelUser($i);
            
            $FindingUser = $users->GetTestExelUser($value);
            
//            dd($FindingUser);
            
            if($FindingUser){
//                dd($value);
                continue;
            }
            $Rows++;
//            dd($value);
            $param['firstname'] = $value['firstname'];
            $param['middlename'] = $value['middlename'];
            $param['lastname'] = $value['lastname'];
            
            $param['address'] =  $value["address"];

//
            $param['birthday'] = date("d F Y", strtotime($value['birthday']));
////            $param['birthday'] = strftime("%d %B %Y", strtotime($value['birthday']));
            $param['phone'] = $value['phone'];
            $param['numberuik'] = $value['numberuik'];
//            dd($param);
            $sheet->setCellValueByColumnAndRow(1, $Rows, $param["firstname"]);
            $sheet->setCellValueByColumnAndRow(2, $Rows, $param["middlename"]);
            $sheet->setCellValueByColumnAndRow(3, $Rows, $param["lastname"]);
            $sheet->setCellValueByColumnAndRow(4, $Rows, $param["address"]);
            $sheet->setCellValueByColumnAndRow(5, $Rows, $param["birthday"]);
            $sheet->setCellValueByColumnAndRow(6, $Rows, $param["phone"]);
            $sheet->setCellValueByColumnAndRow(7, $Rows, 'Отсутствует');//$param["numberuik"]
//            $sheet->setCellValueByColumnAndRow(8, $Rows, $param["email"]);
//            $users->CreateFormatedNewUser($param);
            //echo 'Удалось преобразовать адресс ' . $value["address"] .' В '.$param['address']. ' <br>' . PHP_EOL;

//            if ($tmr >= 1000) {
//                $tmr = 1;
//                echo 'Записал 1000 значениий! последний записанный ' . $i . ' <br>' . PHP_EOL;
//            }
        }
        
        $sheet->getColumnDimension('A')->setAutoSize(true);
        $sheet->getColumnDimension('B')->setAutoSize(true);
        $sheet->getColumnDimension('C')->setAutoSize(true);
        $sheet->getColumnDimension('D')->setAutoSize(true);
        $sheet->getColumnDimension('E')->setAutoSize(true);
        $sheet->getColumnDimension('F')->setAutoSize(true);
        $sheet->getColumnDimension('H')->setAutoSize(true);
        $writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($spreadsheet);
        $writer->save(SITE_DIR.'output_not_found.xlsx');
        die();
//        foreach ($userArr as $value) {
//            $params = array(
//                'geocode' => 'ульяновск область' . $value["address"], // адрес
//                'format' => 'json', // формат ответа
//                'results' => 1, // количество выводимых результатов
//                'apikey' => '7fe449f3-7200-4f9b-a9f8-aca7d57fdb4d', // ваш api key
//            );
//            $response = json_decode(file_get_contents('https://geocode-maps.yandex.ru/1.x/?' . http_build_query($params, '', '&')), true);
//            return $Address;
//        }
        return $response["response"]["GeoObjectCollection"];
    }

    public function usr($param) {
//        ini_set('max_execution_time', 90000);
        echo 'старуем';
        $users = new UikModel();
        $users->NewUserUik();
    }
}