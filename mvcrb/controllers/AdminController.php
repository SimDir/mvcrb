<?php

/**
 * Description of AdminController
 *  
 * @author ivan kolotilkin
 */
namespace mvcrb;
class AdminController extends Controller{
    private $User;
    public function __construct() {
        parent::__construct();
        $this->User = new UserModel();
        if($this->User->GetCountUser()['role']<900){
            //die('Asses denide');
        }
        $this->View->AddCss('/public/css/adminstyle.css');
        $this->View->SetWivePath(TEMPLATE_DIR.'AdminController'.DS);
        $this->View->title = 'Админка';
    }
    
    public function IndexAction() {
        $this->View->admincontent = $this->View->execute('main.html');
        $this->View->content = $this->View->execute('index.html');
        return $this->View->execute('index.html',TEMPLATE_DIR);
    }
    

}
