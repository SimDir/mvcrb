<?php defined('ROOT') OR die('No direct script access.');

/**
 * Description of IndexController
 *
 * @author ivan kolotilkin
 */
namespace mvcrb;
class IndexController extends Controller{

    public function IndexAction() {
        $this->View->content ='Привет мир';
        return $this->View->execute('index.html');
    }
    
    public function headerAction() {
        
        return $this->View->execute('header.html');
    }

}
