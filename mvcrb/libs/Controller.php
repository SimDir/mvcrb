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
        //злоебучий кастыль для евробайта. самый уебанский хостер который можно только изобрести.
        // пидорасы сэр
        $gclass = get_class($this);
        $varclass = explode("\\",$gclass );
        $vclass = end($varclass);
        $this->View = new View($vclass);
        
        return $this;
    }


}
