<?php
namespace mvcrb;
defined('ROOT') OR die('No direct script access.');

/**
 * Description of ConfiguratorController
 *
 * @author ivan kolotilkin
 */

class ConfiguratorController extends Controller{

    public function IndexAction() {
        $this->View->title = 'Конфигуратор заказа';
        $this->View->content = $this->View->execute('configurator.html');
        $this->View->content = $this->View->execute('wrapper.html');
        return $this->View->execute('index.html',TEMPLATE_DIR);
    }    
    
    public function AdminAction() {
        $User = new UserModel();
        if($User->GetCurrentUser()['role']<200){
//            die('Asses denide');
            Session::set('UrerRedirect', mvcrb::$URI);
            return mvcrb::Redirect('/user');
        }
        $this->View->content = $this->View->execute('admin.html');
        $this->View->content = $this->View->execute('wrapper.html');
        return $this->View->execute('index.html',TEMPLATE_DIR);
    } 
    public function AddAction() {
        $PostData = json_decode($this->REQUEST);
        
        $Data['uid']=$PostData->UID;
        $Data['ordersum']=$PostData->OrderSum;
        $Data['sitetyp']=$PostData->SiteTyp;
        $Data['enginetyp']=$PostData->EngineTyp;
        $Data['orderparam']=json_encode($PostData->OrderParam);
        
        $model = new ConfiguratorModel();
        return $model->Add($Data);
    }
    public function GetAction() {
        $User = new UserModel();
        if($User->GetCurrentUser()['role']<200){
            return 'Asses denide';
        }
        $model = new ConfiguratorModel();
        return $model->GetList();
    }
}
