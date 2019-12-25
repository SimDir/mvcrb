<?php

namespace mvcrb;

defined('ROOT') OR die('No direct script access.');

/**
 * Description of PageController
 *
 * @author ivan p kolotilkin
 */
class PageController extends Controller {

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
