<?php
/*
 * MVCRB CLI 
 */
define('DS', DIRECTORY_SEPARATOR); // разделитель для путей к файлам
define('SITE_DIR', realpath(dirname(__FILE__)) . DS); // путь к корневой папке сайта getcwd()
define('APP', SITE_DIR . 'mvcrb' . DS); // путь к приложению

    if ($argc != 2 || in_array($argv[1], array('--help', '-help', '-h', '-?'))) {
        ?>

        Это консольный PHP-скрипт, предназначенный для быстрого прототипирования.

        Использование:
        <?php echo $argv[0]; ?> <option>

        <option> Опции  --help, -help, -h или -? покажут текущую справочную информацию.
            CreateController - создат контроллер. запустив с данным параметром вам будет предложено создать контроллер. следуйте инструкциям.

            <?php
            die();
    } 

    if($argv[1]==='CreateController'){
        $Controller = readline("Введите имя создаваемого контроллера: ");
        $Controller = ucfirst($Controller).'Controller';
        
            echo APP;
        }else{
            echo "Введенная команда не распознона! введите --help, -help, -h, или -? что бы вывести справочную информацию.".$argv[1];
        }
    

    
    