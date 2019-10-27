<?php

defined('ROOT') OR die('No direct script access.');
/**
 * Description of Controller
 *
 * @author Ivan Kolotilkin
 */
namespace mvcrb;
abstract class Controller{
    public $GET=FALSE;
    public $POST=FALSE;
    public $REQUEST_METHOD=FALSE;
    public $REQUEST;
    public function __construct(){
        $this->REQUEST_METHOD = filter_input(INPUT_SERVER, 'REQUEST_METHOD', FILTER_SANITIZE_ENCODED);
        switch ($this->REQUEST_METHOD) {
            case 'GET':
                $this->GET=TRUE;//Here Handle GET Request 
                break;
            case 'POST':
                $this->POST=TRUE;//Here Handle POST Request 
                break;
        }
        $this->REQUEST = file_get_contents('php://input');
        return $this;
    }


}
