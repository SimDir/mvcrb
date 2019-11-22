<?php 
namespace mvcrb;
defined('ROOT') OR die('No direct script access.');

/**
 * Description of IndexController
 *
 * @author ivan kolotilkin
 */

use Faker;
class IndexController extends Controller{

    public function IndexAction() {
        $faker = Faker\Factory::create('Ru_RU');
        $View=&$this->View;
        $View->title = $faker->words(3,true);
        $View->content = $_SERVER['HTTP_USER_AGENT'];
        return $View('index.html',TEMPLATE_DIR);
    }
    
    public function headerAction() {
        $faker = Faker\Factory::create('Ru_RU');
        $this->View->text = $faker->words(18,true);
        return $this->View->execute('header.html');
    }

    public function MenuAction() {
        $user = new User();
        $faker = Faker\Factory::create();
        
//        $user->CreateUser( $faker->email, $faker->password,$faker->lastName);
        
        return $this->View->execute('navbar.html');
    }
}
