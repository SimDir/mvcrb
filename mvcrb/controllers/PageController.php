<?php

namespace mvcrb;

defined('ROOT') OR die('No direct script access.');

/**
 * Description of PageController
 *
 * @author ivan p kolotilkin
 */
class PageController extends Controller {
    public function IndexAction($category='',$page='') {
        $this->View->title = 'Все страници';
        $this->View->PageArr = $this->GetModel('Page')->GetAllPage($category);
//        dd($vdl);
        $this->View->content = $this->View->execute('PageAll.html');
        $this->View->content = $this->View->execute('pages.html',TEMPLATE_DIR.'IndexController'.DS);
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }
    public function PageAction($page, $category=null) {
//        dd($page);
        $this->View->TplDir=TEMPLATE_DIR.'IndexController'.DS;
        $FinDir = TEMPLATE_DIR . 'IndexController' . DS . 'staticpage';
        $testFile = mvcrb::SearchFile($page, $FinDir);
        if ($testFile) {
            $testFile = str_ireplace(TEMPLATE_DIR . 'IndexController' . DS, '', $testFile);
        } else {
            return mvcrb::Redirect(ERROR_URL);
        }
        $this->View->content = $this->View->execute($testFile,TEMPLATE_DIR.'IndexController'.DS);
        $this->View->content = $this->View->execute('pages.html',TEMPLATE_DIR.'IndexController'.DS);
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }

    public function EditAction($id=0) {
        $User = new UserModel();
        if ($User->GetCurrentUser()['role'] < 300) {
            return mvcrb::Redirect('/error/404');
        }
        $Page = new PageModel();
        $p = $Page->GetPage($id);
        $this->View->apikey = '2vf7bxyhwhgjglrd05fapr353yk2xhegpnqdxgnhdk78rsie';
        $this->View->EditorText = $p['content'];
        $this->View->id = $p['id'];
        $this->View->name = $p['name'];
        $this->View->content = $this->View->execute('Editor.html', TEMPLATE_DIR . 'AdminController' . DS);
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }
    public function SaveAction($param=null) {
        $User = new UserModel();
        $curUser=$User->GetCurrentUser();
        if ($curUser['role'] < 300) {
            return ['error'=> 'acces denide'];
        }
        $postdata=json_decode($this->REQUEST,true);
        $Data['author'] = $curUser['login'];
        $Data['type'] = 'page';
        $Data['content'] = htmlspecialchars_decode($postdata['PageContent'],ENT_HTML5);
        $Pages = new PageModel();
        
        return $Pages->Edit($Data,(int)$postdata['PageId']);
    }
    public function AdminAction($param=null) {
        $this->View->content = $this->View->execute('Admin.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }
    public function NewsAction($categiry=null,$name=null) {
        $Pages = new PageModel();

        if($categiry){
          $AllNews = $Pages->GetAllNews();
//        dd($name);
        }
        $this->View->AllNews = $Pages->GetAllNews();
        $this->View->content = $this->View->content = $this->View->execute('NewCenter.html');
        
        $this->View->content = $this->View->execute('pages.html',TEMPLATE_DIR.'IndexController'.DS);
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }
    

}
