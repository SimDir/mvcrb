<?php
namespace mvcrb;
defined('ROOT') OR die('No direct script access.');

/**
 * Description of IndexController
 *
 * @author ivan kolotilkin
 */

class IndexController extends Controller{

    public function IndexAction() {
//        $x1 = 100;
//        $x2 = 12;
//        $x3 = $x2/$x1*100;
//        $x4= 100-$x3;
//        dd($x4);
//        $this->View->title = 'Главная';
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
        $FinDir = TEMPLATE_DIR.'IndexController'.DS.'staticpage';
        $testFile = mvcrb::SearchFile($page, $FinDir);
        if(!file_exists($testFile)){
            mvcrb::Redirect(ERROR_URL);
        }else{
            $testFile = str_ireplace(TEMPLATE_DIR.'IndexController'.DS,'',$testFile);
        }
        $this->View->content = $this->View->execute($testFile);
        $this->View->content = $this->View->execute('pages.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }
    public function ErorAction($err=0) {
        $this->View->title ='Не найдено!';
        $this->View->content = $err;
        $this->View->content = $this->View->execute('error.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }
    private function SetTitle($page) {
        $tempPage = explode('_', $page);
//        dd($tempPage);
        $page=$tempPage[0];
        if (!empty($tempPage[1])) {
            $page = $tempPage[1];
        } else {
            $page = $page;
        }
        $page=ucfirst(strtolower($page));
        $title = '';
        switch ($page) {
            case 'Team.html';
                $title = 'Наша дружная комманда залог нашего успешного благородного дела';
                break;
            case 'Achievements.html';
                $title = 'Достижения нашей команды';
                break;
            case 'Contacts.html';
                $title = 'Свяжитесь с нами любым из удобных вам способов';
                break;
            case 'Files.html';
                $title = 'Центр загрузки файлов';
                break;
            case 'Businesscooperation.html';
                $title = 'Сотрудничесво с партнерами из России';
                break;
            case 'International.html';
                $title = 'Международное сотрудничесво Европа Китай';
                break;
            case 'Products.html';
                $title = 'Продукты';
                break;
            case 'Colutions.html';
                $title = 'Решения';
                break;
            case 'Promotion.html';
                $title = 'Комплексное продвижение и сопровождение';
                break;
            case 'Crm.html';
                $title = 'Автоматизация вашего бизнеса';
                break;
            case 'Newcenter.html';
                $title = 'Новости';
                break;
            case 'Promotionandsupport.html';
                $title = 'Продвижение вашего продукта в социальных сетях';
                break;
            case 'Controlsystems.html';
                $title = 'Отдел продаж';
                break;
            case 'Controlsystems';
                $title = 'Отдел продаж дополнительные ресурсы';
                break;
            case 'Promotionandsupport';
                $title = 'Комплексные решения';
                break;
            case 'Video.html';
                $title = 'Видио материалы';
                break;
            case 'Developments.html';
                $title = 'Важные события';
                break;
            case 'Digitalagency.html';
                $title = 'Создаем и улучшаем цифровые продукты';
                break;

            default:
                if(!empty($tempPage[1])){
                    $title = $tempPage[1];     
                }else{
                    $title = $page;    
                    
                }
                 
        }
        $title=ucfirst($title);
//        dd($title);
        return $title;
    }

}
