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
    
    public function PagesAction() {
        $this->View->admincontent = $this->View->execute('page.html');
        $this->View->content = $this->View->execute('AdminWraper.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }

    public function GetstaticpagelistAction($param = null) {
        $directory = new \RecursiveDirectoryIterator(mvcrb::Config()['App_Templates_Dir'].'IndexController'.DS.'staticpage');
        $iterator = new \RecursiveIteratorIterator($directory);
        $files = [];
        foreach ($iterator as $info) {
            if (is_file($info->getPathname())) {
                $files[] = basename($info->getPathname(), 'Controller.php');
            }
        }
        return $files;
    }
    public function GetstaticpageAction($param = null) {
        $PageName = json_decode($this->REQUEST,true)['PageName'];

        $pageInDir = mvcrb::Config()['App_Templates_Dir'].'IndexController'.DS.'staticpage';

        $PageFale = mvcrb::SearchFile($PageName, $pageInDir);
        if(file_exists($PageFale)){
            return ['PageContent'=> file_get_contents($PageFale)];
        }
        return ['error'];
    }
    
    public function SavestaticpageAction($param = null) {
        $PageName = json_decode($this->REQUEST, true)['PageName'];
        $PageContent = json_decode($this->REQUEST, true)['PageContent'];
        $pageInDir = mvcrb::Config()['App_Templates_Dir'] . 'IndexController' . DS . 'staticpage';

        $PageFale = mvcrb::SearchFile($PageName, $pageInDir);
        if (file_exists($PageFale)) {
            $sucsses=file_put_contents($PageFale, $PageContent);
            return ['sucsses' => $sucsses];
        }
        return ['error'];
    }
    
    public function ScreenAction($param) {

        $path = implode(DIRECTORY_SEPARATOR, func_get_args());
        $path = TEMPLATE_DIR.'IndexController'.DIRECTORY_SEPARATOR.'img'.DIRECTORY_SEPARATOR.$path ;
        if (file_exists($path)) {
            $FileTipe = mime_content_type($path);
            header("Content-Type: $FileTipe");
            return file_get_contents($path);
        }else {
            $path = TEMPLATE_DIR.'IndexController'.DIRECTORY_SEPARATOR.'img'.DIRECTORY_SEPARATOR.'nonseo.jpg';
            $FileTipe = mime_content_type($path);
            header("Content-Type: $FileTipe");
//            header("HTTP/1.0 404 Not Found");
            return file_get_contents($path);
        }

    }
    public function SavepagescreenAction() {
        $PageImg = json_decode($this->REQUEST, true);
        $data=$PageImg['data'];
        if (preg_match('/^data:image\/(\w+);base64,/', $data, $type)) {
            $data = substr($data, strpos($data, ',') + 1);
            $type = strtolower($type[1]); // jpg, png, gif

            if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
                throw new \Exception('invalid image type');
            }

            $data = base64_decode($data);

            if ($data === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('did not match data URI with image data');
        }
        $path = TEMPLATE_DIR.'IndexController'.DIRECTORY_SEPARATOR.'img'.DIRECTORY_SEPARATOR.$PageImg['name'] ;
        file_put_contents($path.".{$type}", $data);
    }
}
