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
        $this->View->title = ':-)';
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
        $tempPage = explode('_', $page);
//        dd($tempPage);
        $page=$tempPage[0];
        $page=ucfirst(strtolower($page));
        $title = '';
        switch ($page) {
            case 'digitalAgensy_team.html';
                $title = 'Наша дружная комманда залог нашего успешного благородного дела';
                break;
            case 'BusinessCooperation.html';
                $title = 'Сотрудничесво с партнерами из Европы России и Китая';
                break;
            case 'Products.html';
                $title = 'Продукты';
                break;
            case 'Colutions.html';
                $title = 'Решения';
                break;
            case 'Colutions';
                $title = 'Наши решения';
                break;
            case 'NewCenter.html';
                $title = 'Новости';
                break;
            case 'digitalAgency.html';
                $title = 'Создаем и улучшаем цифровые продукты';
                break;
            case 'Digitalagensy';
                $title = 'Создаем и улучшаем цифровые продукты';
                break;
            default:
                if(!empty($tempPage[1])){
                    $title = $tempPage[1];     
                }else{
                    $title = $page;     
                }
                 
        }
        return ucfirst(strtolower($title));
    }

}
