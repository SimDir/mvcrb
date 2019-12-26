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

    public function PageAction($page) {
        $Pages = $this->GetModel('Page');

        $PRet = $Pages->GetPage($page);
        $User = $this->GetModel('User');
        $curUser = $User->GetCurrentUser();
        if ($curUser['role'] >= 300) {
            $this->view->VarSetArray($curUser);
            $this->View->pageid = $PRet['id'];
            $this->View->adminpanel = $this->View->execute('AdminBar.html',TEMPLATE_DIR.'AdminController'.DS);
        }
        if($PRet["type"]!=='notpublic' and $PRet){

//            dd($PRet);
            $this->View->content = $this->View->Code($PRet['content']);
            $this->View->title = $PRet['title'];
            $this->View->content = $this->View->execute('pages.html');
            return $this->View->execute('index.html', TEMPLATE_DIR);
        }

        $FinDir = TEMPLATE_DIR . 'IndexController' . DS . 'staticpage';
        $testFile = mvcrb::SearchFile($page, $FinDir);
        $tempFile = $testFile;
        if ($testFile) {
            $testFile = str_ireplace(TEMPLATE_DIR . 'IndexController' . DS, '', $testFile);
        } else {
//            dd($testFile);
            return $this->ErorAction(404);
        }
        $this->View->content = $this->View->execute($testFile);
        if (file_exists($tempFile)and $PRet) {
            $date1=$PRet["editdatetime"];
            $date2=date('Y-m-d H:i:s', filectime($tempFile));
            $result=(strtotime($date1)< strtotime($date2));
            if($result){
                $Data['name'] = $page;
                $Data['type'] = 'notpublic';
                $Data['author'] = 'mvcrb framework auto edit script';
                $Data['title'] = $this->View->title;
                $Data['content'] = file_get_contents($tempFile);
                $Pages->Edit($Data,$PRet['id']);
//                dd($result);
            }

        }
        if (!$PRet) {

            $Data['name'] = $page;
            $Data['type'] = 'notpublic';
            $Data['author'] = 'mvcrb framework auto add script';
            $Data['title'] = $this->View->title;
            $Data['content'] = file_get_contents($tempFile);

            $Pages->Add($Data);
        }

        
        $this->View->content = $this->View->execute('pages.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }

    public function ErorAction($err = 0) {
        $this->View->title = 'Не найдено!';
        $this->View->content = $err;
        $this->View->content = $this->View->execute('error.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }

}
