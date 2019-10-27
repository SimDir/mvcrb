<?php
//header ("Content-Type: text/html; charset=utf-8");
define('TIME_START', microtime(true));// для подсчета времени работы скрипта
define('USE_MEM', memory_get_usage()); // тоже самое только для используемой памяти сервера
if (version_compare(phpversion(), '7.1.0', '<') == true) {
    die('на сервере версия PHP меньше 7.1 продолжить невозможно. обновите версию PHP');
}

define('DS', DIRECTORY_SEPARATOR); // разделитель для путей к файлам
define('ROOT', dirname(__FILE__)); // защита всех файлов приложения от прямого доступа к ним
define('SITE_DIR', realpath(dirname(__FILE__)) . DS); // путь к корневой папке сайта getcwd()
define('APP', SITE_DIR . 'mvcrb' . DS); // путь к приложению
//define('TEMPLATE_DIR', SITE_DIR . 'portal' . DS . 'dist' . DS); // путь до файлов до шаблонами
define('TEMPLATE_DIR', SITE_DIR . 'Front' . DS);

define('CONFIG_DIR', SITE_DIR . 'Config' . DS); // папка с конфигами

define ('WRITE_LOG', TRUE); // вести логирование работы или нет
require_once SITE_DIR.'vendor'.DS.'autoload.php'; // подключаем композер
require_once APP . 'mvcrb.php';
mvcrb\mvcrb::Run();

//$request = filter_input(INPUT_SERVER, 'REQUEST_METHOD', FILTER_SANITIZE_ENCODED);
//$requestBody = file_get_contents('php://input');
//var_dump($requestBody);