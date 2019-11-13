<?php defined('ROOT') OR die('No direct script access.');

/**
 * Description of UserModel
 *
 * @author ivank
 */
namespace mvcrb;
class CalcModel extends Model{
    private $TableName;
    public function __construct() {
        parent::__construct();
        $this->TableName = 'calc';
    }
    public function GetCount(){
        return $this->count($this->TableName);
    }

    


}
