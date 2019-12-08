<?php

namespace mvcrb;

defined('ROOT') OR die('No direct script access.');

/**
 * Description of UserController
 *  
 * @author ivan kolotilkin
 */
class AdminController extends Controller {

    private $User;

    public function __construct() {
        parent::__construct();
        $this->User = new UserModel();
        if ($this->User->GetCurrentUser()['role'] < 900) {

            if ($this->POST) {
                if (!headers_sent()) {
                    header("HTTP/1.1 403 Forbidden");
                    header("Status: 403 Forbidden");
                }
                die('Forbidden: Asses denide');
            } else {
                Session::set('UrerRedirect', mvcrb::$URI);
                return mvcrb::Redirect('/user');
            }
        }
        $this->View->AddCss('/public/css/adminstyle.css');
        $this->View->title = 'Админка';
    }

    public function UpdateAction($param = null) {
        $FileName = null;
        foreach (glob(mvcrb::Config()['App_Controllers_Dir'] . '*Controller.php') as $file) {
            //$LastModified[] = filemtime($file); // массив файлов со временем изменения файла
            $FileName[] = $file; // массив всех файлов
        }
        dd($FileName);
    }

    public function IndexAction() {
        $this->View->admincontent = $this->View->execute('main.html');
        $this->View->content = $this->View->execute('AdminWraper.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }

    public function EditorAction($Editor = 'tinymce', $id = 0) {
        $Page = new PageModel();
        $p = $Page->GetPage($id);

        $this->View->EditorText = $p['content'];
        $this->View->content = $this->View->execute('Editor.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }

    public function UserAction() {
        $this->View->admincontent = $this->View->execute('users.html');
        $this->View->content = $this->View->execute('AdminWraper.html');
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
        if ($this->User->ChekMail($PostData->email)) {
            $errors[] = 'Пользователь с таким Email уже существует!';
        }
        if ($this->User->ChekUserLogin($PostData->login)) {
            $errors[] = 'Пользователь с таким логином уже существует!';
        }
        if (isset($errors)) {
            return ['Errors' => $errors];
        }
        return ['success' => true, 'id' => $this->User->CreateUser($PostData->email, $PostData->password, $PostData->login, $PostData->role, $PostData->firstname, $PostData->lastname, $PostData->phone)];
    }

    public function EdituserAction() {
        $PostData = json_decode($this->REQUEST);
        return ['success' => true, 'id' => $this->User->EditUser($PostData->email, isset($PostData->password) ? $PostData->password : '', $PostData->login, $PostData->role, $PostData->firstname, $PostData->lastname, $PostData->phone, $PostData->id)];
    }

    public function AddpageAction() {
        $PostData = json_decode($this->REQUEST, true);
        $page = new PageModel();
        return ['success' => true, 'id' => $page->Add($PostData)];
    }

    public function PagesAction() {
//        $this->View->AddJs('https://cdn.ckeditor.com/ckeditor5/15.0.0/classic/ckeditor.js');

        $this->View->admincontent = $this->View->execute('pages.html');
        $this->View->content = $this->View->execute('AdminWraper.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }

    public function ConfiguratorAction() {
        $this->View->admincontent = $this->View->execute('Configurator.html');
        $this->View->content = $this->View->execute('AdminWraper.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }

    public function GetmenuAction() {
        $Data = [
            ['id' => '1', 'parent' => '0', 'name' => 'Главная', 'src' => '/admin', 'class' => 'fas fa-home'],
            ['id' => '2', 'parent' => '0', 'name' => 'Пользователи', 'src' => '/admin/user', 'class' => 'fas fa-users-cog'],
            ['id' => '3', 'parent' => '0', 'name' => 'Страницы', 'src' => '/admin/pages', 'class' => 'far fa-file'],
            ['id' => '4', 'parent' => '3', 'name' => 'wisiwing', 'src' => '/admin/editor/tinymce', 'class' => 'far fa-file'],
//            ['name'=>'Конфигуратор','src'=>'/admin/Configurator','class'=>'fas fa-calculator']
        ];
        return $Data;
    }

}
