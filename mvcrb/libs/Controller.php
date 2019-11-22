<?php
namespace mvcrb;

defined('ROOT') OR die('No direct script access.');
/**
 * Description of Controller
 *
 * @author Ivan Kolotilkin
 */

abstract class Controller{
    public $GET=FALSE;
    public $POST=FALSE;
    public $REQUEST_METHOD=FALSE;
    public $REQUEST=null;
    public $View;
    //public $language;
    public function __construct(){
        $this->REQUEST_METHOD = filter_input(INPUT_SERVER, 'REQUEST_METHOD', FILTER_SANITIZE_ENCODED);
        switch ($this->REQUEST_METHOD) {
            case 'GET':
                $this->GET=TRUE;
                break;
            case 'POST':
                $this->REQUEST = file_get_contents('php://input');
                $this->POST=TRUE;
                break;
        }
        $this->View = new View(end(explode('\\', get_class($this))));
//        if (($list = strtolower($_SERVER['HTTP_ACCEPT_LANGUAGE']))) {
//            if (preg_match_all('/([a-z]{1,8}(?:-[a-z]{1,8})?)(?:;q=([0-9.]+))?/', $list, $list)) {
//                $this->language = array_combine($list[1], $list[2]);
//                foreach ($this->language as $n => $v)
//                    $this->language[$n] = $v ? $v : 1;
//                arsort($this->language, SORT_NUMERIC);
//            }
//        } else
//            $this->language = array();
        return $this;
    }


}
