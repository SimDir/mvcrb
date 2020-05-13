<?php

namespace mvcrb;

defined('ROOT') OR die('No direct script access.');

/**
 * Description of IndexController
 *
 * @author ivan kolotilkin
 */
class IndexController extends Controller {

    public function IndexAction() {
        $this->View->content = $this->View->execute('main.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }

    public function headerAction() {
        Session::init();
        $lng = Session::get('language');
        
        if(is_null($lng)){
            $lng='';
        }
        return $this->View->execute('inc' . DS . $lng . 'header.html');
    }

    public function SliderAction() {
        return $this->View->execute('inc' . DS . 'slider.html');
    }

    public function FooterAction() {
        Session::init();
        $lng = Session::get('language');
        
        if(is_null($lng)){
            $lng='';
        }
        return $this->View->execute('inc' . DS . $lng . 'footer.html');
    }
    public function ErorAction($err = 0) {
        $this->View->title = 'Не найдено!';
        $this->View->content = $err;
        $this->View->content = $this->View->execute('error.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }
    public function FeedbackAction() {
        if (!$this->POST)
            return ['Error' => "Only POST REQUEST"];

        $postdata = json_decode($this->REQUEST, true);

        $to = 'support@agatech.ru';
        $subject = 'Сообщение от Робота';
        $message = '<h4>Новое сообщение от пользователя <b>' . $postdata['fio'] . '</b> на сайте Агатечь.<br>Контактный телефон <b>' . $postdata['phone'] . '</b><br>' . PHP_EOL;
        $message .= 'оставил свой маил адрес почты <b>' . $postdata['email'] . '</b> и написал вот такое сообщение</h4>' . PHP_EOL . PHP_EOL . '<h5>' . $postdata['message'] . '</h5>';
        $headers = 'From: ' . $postdata['email'] . "\r\n" .
//                'Reply-To: admin@agatech.ru' . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

        $success = rr_mail($to, $subject, $message, $headers);
        if (!$success) {
            $success = error_get_last()['message'];
        }
        $this->B24Hook($postdata);
        rr_mail('komdir@agatech.ru', $subject, $message, $headers);
//        rr_mail('logic@xaker.ru', $subject, $message, $headers);
        return ['SendStatus' => $success, 'SendTO' => $to];
//        return $postdata;
    }
    
    private function B24Hook($param=[]) {
        
        $queryUrl = 'https://agatech73.bitrix24.ru/rest/250/nfygbgftk5skkez5/crm.lead.add.json';

        $queryData = http_build_query(array('fields' => array("TITLE" => 'ФОС и КВИЗ - ' . $param['fio'],
                "NAME" => $param['fio'],
                //"LAST_NAME" => $PostData['UserData']['name'],
                "STATUS_ID" => "NEW",
                "OPENED" => "Y",
                "ASSIGNED_BY_ID" => 354,
                "CREATED_BY_ID" => 354,
                //"OPPORTUNITY" => $PostData['OrderSum'],
                "COMMENTS" => $param['message'],
                //"UF_CRM_1576841134415" => $PostData['UID'],
                "PHONE" => array(array("VALUE" => $param['phone'], "VALUE_TYPE" => "WORK")),
                "EMAIL" => array(array("VALUE" => $param['email'], "VALUE_TYPE" => "WORK")),),
            'params' => array("REGISTER_SONET_EVENT" => "Y")));

        $curl = curl_init();
        curl_setopt_array($curl, array(CURLOPT_SSL_VERIFYPEER => 0, CURLOPT_POST => 1, CURLOPT_HEADER => 0, CURLOPT_RETURNTRANSFER => 1, CURLOPT_URL => $queryUrl, CURLOPT_POSTFIELDS => $queryData,));
        $result = curl_exec($curl);
        curl_close($curl);
        return ["curl_RET"=>$result];
    }

}
