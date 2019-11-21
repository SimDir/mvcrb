<?php
namespace mvcrb;
defined('ROOT') OR die('No direct script access.');
/**
 * Description of UserController
 *  
 * @author ivan kolotilkin
 */

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
    public function UserAction() {
        $this->View->admincontent = $this->View->execute('users.html');
        $this->View->content = $this->View->execute('index.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }
    public function GetuserlistAction() {
        return $this->User->GetList(json_decode($this->REQUEST));
    }
    public function AdduserAction() {
        $PostData = json_decode($this->REQUEST);
        if($this->User->ChekMail($PostData->email)){
            $errors[] = 'Пользователь с таким Email уже существует!';
        }
        if($this->User->ChekUserLogin($PostData->login)){
            $errors[] = 'Пользователь с таким логином уже существует!';
        }
        if(isset($errors)){
            return ['Errors'=>$errors];
        }
        return ['id'=>$this->User->CreateUser($PostData->email, $PostData->password, $PostData->login,$PostData->role,$PostData->firstname,$PostData->lastname,$PostData->phone)];
    }
    public function PagesAction() {
        $this->View->admincontent = $this->View->execute('pages.html');
        $this->View->content = $this->View->execute('index.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }

    public function CalcAction() {
        $this->View->admincontent = $this->View->execute('calc.html');
        $this->View->content = $this->View->execute('index.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }

}
