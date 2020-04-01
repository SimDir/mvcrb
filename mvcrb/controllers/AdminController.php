<?php

namespace mvcrb;

defined('ROOT') OR die('No direct script access.');

/**
 * Description of UserController
 *  
 * @author ivan kolotilkin
 */
class AdminController extends Controller {
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
                Session::set('UserRedirect', mvcrb::$URI);
                return mvcrb::Redirect('/user/login');
            }
        }
        $this->View->AddCss('/css/admin.css');
//        $this->View->AddCss('/css/sidebar.css');
        $this->View->title = 'Админка';
    }

    public function IndexAction() {
        
        $this->View->admincontent = $this->View->execute('main.html');
        $this->View->content = $this->View->execute('AdminWraper.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }
    public function FmAction() {
        $this->View->admincontent = $this->View->execute('FlieM.html');
        $this->View->content = $this->View->execute('AdminWraper.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }
    public function UserAction($param = false) {
        if ($param) {
            $CollCom = mb_strtolower($param);
            $PostData = json_decode($this->REQUEST);
            switch ($CollCom) {
                case 'delete':
                    $UserID = json_decode($this->REQUEST, true)['UserID'];
                    return ['success' => true, 'id' => $this->User->DellUser($UserID)];
                    break;
                case 'edit':
                    return ['success' => true, 'id' => $this->User->EditUser($PostData->email, isset($PostData->password) ? $PostData->password : '', $PostData->login, $PostData->role, $PostData->firstname, $PostData->lastname, $PostData->phone, $PostData->id)];
                    break;
                case 'add':
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
                    break;
                case 'list':
                    return $this->User->GetList(json_decode($this->REQUEST));
                    break;
                case 'getexel':
                    return $this->User->GetExel();
                    break;
                case 'export':
                    $allowedFileType = ['application/vnd.ms-excel', 'text/xls', 'text/xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

                    if (in_array($_FILES["file"]["type"], $allowedFileType)) {

                        $targetPath = SITE_DIR . 'public' . DS . 'uploads' . DS . $_FILES['file']['name'];

                        if (move_uploaded_file($_FILES['file']['tmp_name'], $targetPath)) {
                            return $this->User->SetExel($targetPath);
                        }
                    }


                    break;
                default:
                    return [$CollCom];
            }
//            return $CollCom;
        }
        $this->View->admincontent = $this->View->execute('users.html');
        $this->View->content = $this->View->execute('AdminWraper.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }

}
