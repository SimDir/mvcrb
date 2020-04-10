<?php

namespace mvcrb;

defined('ROOT') OR die('No direct script access.');

/**
 * Description of ErrorController
 *
 * @author mvcrb
 */
class PromoController extends Controller{

    //put your code here
    public function IndexAction($page = 0) {
        
        $FinDir = TEMPLATE_DIR . 'IndexController'.DS.'staticpage'.DS.'promo';
        $testFile = mvcrb::SearchFile($page, $FinDir);
//        $Content='';
        if ($testFile) {
//            $Content= file_get_contents($testFile);
            $testFile = str_ireplace(TEMPLATE_DIR . 'IndexController' . DS, '', $testFile);
        } else {
            return mvcrb::Redirect(ERROR_URL);
        }
        $this->View->content = $this->View->execute($testFile,TEMPLATE_DIR.'IndexController'.DS);
//        $this->View->content = $this->View->execute('pages.html',TEMPLATE_DIR.'IndexController'.DS);
//        $this->View->content = $Content;
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }

}
