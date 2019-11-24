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
        if($this->User->GetCurrentUser()['role']<900){
//            die('Asses denide');
            //Session::set('UrerRedirect', '/admin');
            //return mvcrb::Redirect('/user');
        }
        $this->View->AddCss('/public/css/adminstyle.css');
        $this->View->title = 'Админка';

    }
    public function UpdateAction($param=null) {
        $FileName = null;
        foreach (glob(mvcrb::Config()['App_Controllers_Dir'] . '*Controller.php') as $file) {
            //$LastModified[] = filemtime($file); // массив файлов со временем изменения файла
            $FileName[] = $file; // массив всех файлов
        }
        dd($FileName);
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
    public function GetpagelistAction() {
        $page = new PageModel();
        return $page->GetList(json_decode($this->REQUEST));
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
    public function AddpageAction() {
        $PostData = json_decode($this->REQUEST);
        $page = new PageModel();
        return ['id'=>$page->Add($PostData)]; 
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
