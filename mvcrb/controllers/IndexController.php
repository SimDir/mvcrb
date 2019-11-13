<?php defined('ROOT') OR die('No direct script access.');

/**
 * Description of IndexController
 *
 * @author ivan kolotilkin
 */
namespace mvcrb;
use Faker;
class IndexController extends Controller{

    public function IndexAction() {
        $faker = Faker\Factory::create('Ru_RU');
        $this->View->title = $faker->words(3,true);
        $this->View->content = $this->View->execute('calc/calc.html');
        return $this->View->execute('index.html');
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
