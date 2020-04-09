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
    public function ErorAction($err = 0) {
        $this->View->title = 'Не найдено!';
        $this->View->content = $err;
        $this->View->content = $this->View->execute('error.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }

}
