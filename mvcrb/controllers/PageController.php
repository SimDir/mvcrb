<?php

namespace mvcrb;

defined('ROOT') OR die('No direct script access.');

/**
 * Description of PageController
 *
 * @author ivan p kolotilkin
 */
class PageController extends Controller {
    public function IndexAction() {
        $this->View->TplDir=TEMPLATE_DIR.'IndexController'.DS;
        $this->View->content = $this->View->execute('pages.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }

    public function TestAction() {
        $vdl = $this->model;
        $tmp = $vdl->Dell(899);
        dd($tmp);
    }
    public function PageAction($page) {
        $this->View->TplDir=TEMPLATE_DIR.'IndexController'.DS;
        $Pages = $this->GetModel('Page');
        $PRet = $Pages->GetPage($page);
        $User = $this->GetModel('User');
        $curUser = $User->GetCurrentUser();
        if ($curUser['role'] >= 300) {
            $this->view->VarSetArray($curUser);
            $this->View->pageid = $PRet['id'];
            $this->View->adminpanel = $this->View->execute('AdminBar.html',TEMPLATE_DIR.'AdminController'.DS);
        }
        if($PRet["type"]!=='notpublic'){

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
        if (file_exists($tempFile)) {
            $date1=$PRet["editdatetime"];
            $date2=date('Y-m-d H:i:s', filectime($tempFile));
            $result=(strtotime($date1)< strtotime($date2));
            if($result and $PRet){
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

    public function EditAction($id) {
        $User = new UserModel();
        if ($User->GetCurrentUser()['role'] < 300) {
            return mvcrb::Redirect('/error/404');
        }
        $Page = new PageModel();
        $p = $Page->GetPage($id);
        $this->View->apikey = '2vf7bxyhwhgjglrd05fapr353yk2xhegpnqdxgnhdk78rsie';
        $this->View->EditorText = $p['content'];
        $this->View->id = $p['id'];
        $this->View->content = $this->View->execute('Editor.html', TEMPLATE_DIR . 'AdminController' . DS);
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }
    public function SaveAction($param=null) {
        $User = new UserModel();
        $curUser=$User->GetCurrentUser();
        if ($curUser['role'] < 300) {
            return ['acces_denide'];
        }
        $postdata=json_decode($this->REQUEST,true);
        $Data['author'] = $curUser['login'];
        $Data['type'] = 'page';
        $Data['content'] = htmlspecialchars_decode($postdata['PageContent'],ENT_HTML5);
        $Pages = new PageModel();
        
        return $Pages->Edit($Data,(int)$postdata['PageId']);;
    }

}
