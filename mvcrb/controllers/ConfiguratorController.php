<?php

namespace mvcrb;

defined('ROOT') OR die('No direct script access.');

/**
 * Description of ConfiguratorController
 *
 * @author ivan kolotilkin
 */
class ConfiguratorController extends Controller {

    public function IndexAction() {
        $this->View->title = 'Конфигуратор заказа';
        $User = new UserModel();
        $this->View->VarSetArray($User->GetCurrentUser());
        $this->View->content = $this->View->execute('configurator.html');
//        $this->View->content = $this->View->execute('wrapper.html');
        
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }

    public function AdminAction() {
        $User = new UserModel();
        if ($User->GetCurrentUser()['role'] < 200) {
//            die('Asses denide');
            Session::set('UserRedirect', mvcrb::$URI);
            return mvcrb::Redirect('/user');
        }
        $this->View->content = $this->View->execute('admin.html');
        $this->View->content = $this->View->execute('wrapper.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }

    public function AddAction() {
        $PostData = json_decode($this->REQUEST);

        $Data['uid'] = $PostData->UID;
        $Data['ordersum'] = $PostData->OrderSum;
        $Data['sitetyp'] = $PostData->SiteTyp;
        $Data['enginetyp'] = $PostData->EngineTyp;
        $Data['orderparam'] = json_encode($PostData->OrderParam);

        $model = new ConfiguratorModel();
        return $model->Add($Data);
    }

    public function GetAction() {
        $User = new UserModel();
        if ($User->GetCurrentUser()['role'] < 200) {
            return 'Asses denide';
        }
        $model = new ConfiguratorModel();
        return $model->GetList();
    }

    public function WebhookAction($param = 0) {
        $PostData = json_decode($this->REQUEST,true);
        
        $queryUrl = 'https://agatech73.bitrix24.ru/rest/250/nfygbgftk5skkez5/crm.lead.add.json';

        $queryData = http_build_query(array('fields' => array("TITLE" => 'Конфигуратор - '.$PostData['UserData']['name'],
                "NAME" => $PostData['UserData']['name'],
                "LAST_NAME" => $PostData['UserData']['name'],
                "STATUS_ID" => "NEW",
                "OPENED" => "Y",
//                "ASSIGNED_BY_ID" => 1,
                "CREATED_BY_ID"=>250,
                "OPPORTUNITY" => $PostData['OrderSum'],
                "COMMENTS" => json_encode($PostData['OrderParam']),
                "UF_CRM_1576841134415"=>$PostData['UID'],
                "PHONE" => array(array("VALUE" => $PostData['UserData']['tel'], "VALUE_TYPE" => "WORK")),
                "EMAIL" => array(array("VALUE" => $PostData['UserData']['email'], "VALUE_TYPE" => "WORK")),),
            'params' => array("REGISTER_SONET_EVENT" => "Y")));
        
        $curl = curl_init();
        curl_setopt_array($curl, array(CURLOPT_SSL_VERIFYPEER => 0, CURLOPT_POST => 1, CURLOPT_HEADER => 0, CURLOPT_RETURNTRANSFER => 1, CURLOPT_URL => $queryUrl, CURLOPT_POSTFIELDS => $queryData,));
        $result = curl_exec($curl);
        curl_close($curl);
        
        $Data['uid'] = $PostData["UID"];
        $Data['ordersum'] = $PostData["OrderSum"];
        $Data['sitetyp'] = $PostData["SiteTyp"];
        $Data['enginetyp'] = $PostData["EngineTyp"];
        $Data['orderparam'] = json_encode($PostData["OrderParam"]);
        $model = new ConfiguratorModel();
        $retParam = $model->Add($Data);
        return ["WH_RET"=>$result,"MDL_Ret"=>$retParam];
    }

}
