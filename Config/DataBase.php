<?php defined('ROOT') OR die('No direct script access.');
/**
 * возможные значения db_driver
 * 
 *      MariaDB
 *      PostgreSQL
 *      SQLite
 *      CUBRID
 * 
 * подробнее смотрите описание 
 * https://redbeanphp.com/index.php?p=/connection
 */
return array(
    'db_driver' => 'MariaDB',
    'db_host' => '127.0.0.1',
    'db_port' => '3306',
    
    'db_name' => 'mvcrb',
    'db_login' => 'root',
    'db_pass' => '',
);
