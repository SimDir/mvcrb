<?php defined('ROOT') OR die('No direct script access.');

/**
 * Description of IndexController
 *
 * @author ivan kolotilkin
 */
namespace mvcrb;
use Faker;
class IndexController extends Controller{
    public function __construct() {
        parent::__construct();
        $this->View->SetWivePath(TEMPLATE_DIR . 'IndexController' . DS);
        $this->View->title = 'Агротех :-)';
        $this->View->AddCss('https://fonts.googleapis.com/css?family=Ubuntu:300,400,700&display=swap');
    }

    public function IndexAction() {
        $faker = Faker\Factory::create('Ru_RU');
        $this->View->title = $faker->words(3,true);
        $this->View->content = $this->View->execute('main.html');
        return $this->View->execute('index.html',TEMPLATE_DIR);
    }
    
    public function headerAction() {
        return $this->View->execute('slider.html');
    }
    public function SliderAction() {
        return $this->View->execute('header.html');
    }
    public function PageAction($param1,$param2=null) {
        $incFile = '';
        $incDir = TEMPLATE_DIR.'IndexController'.DS.'include'.DS;
        if($param2){
            $incFile = $param1.'/'.$param2.'.html';
        } else {
            $incFile = $param1.'.html';
        }
        return $this->View->execute($incFile,$incDir);
    }
    public function MenuAction() {
        $user = new User();
        $faker = Faker\Factory::create();
        
//        $user->CreateUser( $faker->email, $faker->password,$faker->lastName);
        
        return $this->View->execute('navbar.html');
    }
}
