<?php

namespace mvcrb;

defined('ROOT') OR die('No direct script access.');

/**
 * Description of LanguageController
 *
 * @author Ivan P Kolotilkin
 */
class MediacentrController extends Controller{

    public function IndexAction() {
        $Pages = new PageModel();

        if ($categiry) {
            $AllNews = $Pages->GetAllNews();
//        dd($name);
        }
        $this->View->AllNews = $Pages->GetAllNews();
        $this->View->content = $this->View->execute('NewCenter.html');

        $this->View->content = $this->View->execute('pages.html', TEMPLATE_DIR . 'IndexController' . DS);
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }
    public function NewsAction($news=null) {
        
    }
}
