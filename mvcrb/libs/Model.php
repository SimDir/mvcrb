<?php defined('ROOT') OR die('No direct script access.');
/**
 * Description of Model
 *
 * @author ivank
 */
namespace mvcrb;
use RedBeanPHP\Facade as R;
class Model extends R{
    public function __construct() {
        $IncFile = CONFIG_DIR . 'DBase.php';
        
        if(file_exists($IncFile)){
            $Config = include_once($IncFile);
            
            $host = $Config['db_host'];
            $port = $Config['db_port'];
            $dbname = $Config['db_name'];
            $login = $Config['db_login'];
            $pass = $Config['db_pass'];
        } else {
            $Config['db_driver'] = 'SQLite';
            //throw new Exception(__METHOD__ . " ошибка бaзы данных. неудалось найти фаил конфигурации $IncFile");
        }
//        var_dump($Config);

        
        switch ($Config['db_driver']) {
            case "MariaDB":
                $this->setup( "mysql:host=$host;dbname=$dbname",$login, $pass );
                break;
            case "PostgreSQL":
                $this->setup( "pgsql:host=$host;dbname=$dbname",$login, $pass );
                break;
            case "SQLite":
                $this->setup( 'sqlite:'.APP.'database.db' );
                break;
            case "CUBRID":
                $this->setup( "cubrid:host=$host;port=$port;dbname=$dbname",$login,$pass );
                break;
        }
        
        
        if(!$this->testConnection()){
//            $this->fancyDebug( TRUE );
            throw new Exception(__METHOD__ . " ошибка бaзы данных $host:$port. неудалось установить соединение c БД $dbname");
        }
        return $this;
    }
    public function __destruct() {
        $this->close();
    }
}
