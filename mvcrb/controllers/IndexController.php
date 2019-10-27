<?php defined('ROOT') OR die('No direct script access.');

/**
 * Description of IndexController
 *
 * @author ivank
 */
namespace mvcrb;
class IndexController extends Controller{

    public function IndexAction() {
        $mdl = new User();
        
        return 'Привет мир!';
    }
    

}
