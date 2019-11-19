<?php
namespace mvcrb;
defined('ROOT') OR die('No direct script access.');

/**
 * Description of IndexController
 *
 * @author ivan kolotilkin
 */

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
        $this->View->title = $this->SetTitle($page);

        $this->View->content = $this->View->execute('staticpage'.DS.$page);
        $this->View->content = $this->View->execute('pages.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }

    private function SetTitle($page) {
        $title = '';
        switch ($page) {
            case 'BusinessCooperation.html';
                $title = 'Сотрудничесво с партнерами из Европы России и китая';
                break;
            case 'Products.html';
                $title = 'Продукты';
                break;
            case 'Colutions.html';
                $title = 'Решения';
                break;
            case 'NewCenter.html';
                $title = 'Новости';
                break;
            case 'digitalAgency.html';
                $title = 'Создаем и улучшаем цифровые продукты';
                break;
            default:
                $title = $page;      
        }
        return ucfirst(strtolower($title));
    }

}
