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
        return $this->View->execute('inc' . DS . $lng. 'header.html');
    }

    public function SliderAction() {
        return $this->View->execute('inc' . DS . 'slider.html');
    }

    public function FooterAction() {
        return $this->View->execute('inc' . DS . 'footer.html');
    }

    public function PageAction($page) {
        $Pages = new PageModel();
        $PRet = $Pages->GetPage($page);
//        if($PRet){
////            dd($PRet);
//            $this->View->content = $this->View->Code($PRet['content']);
//            $this->View->title = $PRet['title'];
//            $this->View->content = $this->View->execute('pages.html');
//            return $this->View->execute('index.html', TEMPLATE_DIR);
//        }

        $FinDir = TEMPLATE_DIR . 'IndexController' . DS . 'staticpage';
        $testFile = mvcrb::SearchFile($page, $FinDir);
        $tempFile = $testFile;
        if ($testFile) {
            $testFile = str_ireplace(TEMPLATE_DIR . 'IndexController' . DS, '', $testFile);
        } else {
//            dd($testFile);
            return mvcrb::Redirect(ERROR_URL);
        }
        $this->View->content = $this->View->execute($testFile);

        if (!$PRet) {

            $Data['name'] = $page;
            $Data['type'] = 'notpublic';
            $Data['author'] = 'Agatech auto script';
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
