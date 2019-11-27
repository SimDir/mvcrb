<?php
namespace mvcrb;
defined('ROOT') OR die('No direct script access.');

/**
 * Description of ConfiguratorController
 *
 * @author ivan kolotilkin
 */

class ConfiguratorController extends Controller{
    public function __construct() {
        parent::__construct();
        $this->View->title = 'Конфигуратор заказа';

    }

    public function IndexAction() {

        $this->View->content = $this->View->execute('configurator.html');
        $this->View->content = $this->View->execute('wrapper.html');
        return $this->View->execute('index.html',TEMPLATE_DIR);
    }    
    
    public function AdminAction() {
        $User = new UserModel();
        if($User->GetCurrentUser()['role']<200){
//            die('Asses denide');
            Session::set('UrerRedirect', '/configurator/admin');
            return mvcrb::Redirect('/user');
        }
        $this->View->content = $this->View->execute('admin.html');
        $this->View->content = $this->View->execute('wrapper.html');
        return $this->View->execute('index.html',TEMPLATE_DIR);
    } 
}
