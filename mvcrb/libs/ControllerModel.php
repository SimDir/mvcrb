<?php

namespace mvcrb;

defined('ROOT') OR die('No direct script access.');

/**
 * Description of ControllerModel
 *
 * @author Ivan Kolotilkin
 */


class ControllerModel extends Model {
    public $TableName;
    
    public function __construct($ModelName='') {
        parent::__construct();
        $this->TableName=$ModelName;

        return $this;
    }
    public function List($PostData = null) {
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
            $tempbean = $this->findAll($this->TableName , ' ORDER BY ' . $order['data'] . ' ' . $order['dir'] . ' LIMIT ' . $start . ', ' . $limit);
        } else {
            $tempbean = $this->findAll($this->TableName , ' LIMIT ' . $start . ', ' . $limit);
        }
//        dd($tempbean);
        if ($tempbean) {

            $List['data'] = $tempbean; //$this->exportAll($tempbean, TRUE);
            return $List;
        }
        return FALSE;
    }

    public function Dell(int $id = 0) {
        return $this->trash($this->load($this->TableName, $id));
    }
    public function Counts() {
        return parent::count($this->TableName);
    }

}
