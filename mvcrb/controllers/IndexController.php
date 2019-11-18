<?php defined('ROOT') OR die('No direct script access.');

/**
 * Description of IndexController
 *
 * @author ivan kolotilkin
 */
namespace mvcrb;
class IndexController extends Controller{
    public function __construct() {
        parent::__construct();
        $this->View->SetWivePath(TEMPLATE_DIR . 'IndexController' . DS);
        $this->View->title = 'Агротех :-)';
        $this->View->AddCss('https://fonts.googleapis.com/css?family=Ubuntu:300,400,700&display=swap');
    }

    public function IndexAction() {

        $this->View->title = 'Главная';
        $this->View->content = $this->View->execute('main.html');
        return $this->View->execute('index.html',TEMPLATE_DIR);
    }
    
    public function headerAction() {
        return $this->View->execute('inc'.DS.'header.html');
    }
    public function SliderAction() {
        return $this->View->execute('inc'.DS.'slider.html');
    }
    public function FooterAction() {
        return $this->View->execute('inc'.DS.'footer.html');
    }
    public function PageAction($page) {
        $this->View->title = 'Страница ' . $page;
//        var_dump($page);die();
        $this->View->content = $this->View->execute('staticpage'.DS.$page);
        $this->View->content = $this->View->execute('pages.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }
    public function PagefAction($param1,$param2=null) {
        $incFile = '';
        $incDir = TEMPLATE_DIR.'IndexController'.DS.'include'.DS;
        if($param2){
            $incFile = $param1.DS.$param2.'.html';
        } else {
            $incFile = $param1.'.html';
        }
        return $this->View->execute($incFile,$incDir);
    }

}
