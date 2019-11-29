<?php
namespace mvcrb;
defined('ROOT') OR die('No direct script access.');

/**
 * Description of UserModel
 *
 * @author ivank
 */

class ConfiguratorModel extends Model{
    private $TableName;
    public function __construct() {
        parent::__construct();
        $this->TableName = 'configurator';
    }
    public function GetCount(){
        return $this->count($this->TableName);
    }
    public function GetList($PostData = null) {
        $start = $PostData->start ? $PostData->start : 0;
        $limit = $PostData->limit ? $PostData->limit : 10;
        $List['count'] = $this->count($this->TableName);
        if (isset($PostData->data) && $PostData->data !== '') {
            $order['data'] = $PostData->data;
            $order['dir'] = $PostData->dir;
        } else {
            $order = null;
        }
        if (is_array($order)) {
            $tempbean = $this->findAll($this->TableName, 'ORDER BY ' . $order['data'] . ' ' . $order['dir'] . ' LIMIT ' . $start . ', ' . $limit);
        } else {
            $tempbean = $this->findAll($this->TableName, 'LIMIT ' . $start . ', ' . $limit);
        }
        if ($tempbean) {
            $List['data'] = $this->exportAll($tempbean, TRUE);
            return $List;
        }
        return FALSE;
    }
    public function Add($Data = null) {
        if (is_null($Data)) return false;
        $Table = $this->Dispense($this->TableName);
        $Table->import($Data);
        $Table->createdatetime = date('Y-m-d H:i:s');
        return $this->store($Table);
    }

}
