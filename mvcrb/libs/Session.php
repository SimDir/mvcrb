<?php

namespace mvcrb;

defined('ROOT') OR die('No direct script access.');
/*
 * клас для работы с сессиями
 * он настолько простой что нечего тут даже и пояснять.
 * 
 */


class Session {

    /**
     * Determine if session has started.
     *
     * @var boolean
     */
    private static $sessionStarted = false;
    public static $sessionName = '';
    /**
     * if session has not started, start sessions
     */
    private static function SecSessionStart() {
        $SessionsDir = SITE_DIR . 'usersessions';
//        ini_set("session.gc_probability", 30); /* Можно настроить на 100%, если у вас там нет никакого медленного кода */
//        ini_set("session.gc_divisor", 100);
//        ini_set("session.gc_maxlifetime", 3600); /* Время жизни сессии в секундах (то самое, которое передается в функцию gc) */
        session_save_path($SessionsDir);
//session_name(SESSION_PREFIX);
//        session_name(self::$sessionName);
//        session_id(self::$sessionName);
        // Forces sessions to only use cookies.
        if (ini_set('session.use_only_cookies', 1) === FALSE) {
            //header("Location: ../error.php?err=Could not initiate a safe session (ini_set)");
            exit('SecSessionStart(): Could not initiate a safe session (ini_set)');
        }
        // Gets current cookies params.
        $cookieParams = session_get_cookie_params();
        session_set_cookie_params($cookieParams["lifetime"], $cookieParams["path"], $cookieParams["domain"], false);
        
//$handler = new FileSessionHandler();
//        session_set_save_handler(
//                array($handler, 'open'),
//                array($handler, 'close'),
//                array($handler, 'read'),
//                array($handler, 'write'),
//                array($handler, 'destroy'),
//                array($handler, 'gc')
//        );
        session_start();            // Start the PHP session 
        //session_regenerate_id();    // regenerated the session, delete the old one. 
        
        $BrowserHesh = false;//self::get('BrowserHesh');
        if($BrowserHesh){
            
            $browser = mvcrb::BrouserHash();
//            dd($browser.' '.$BrowserHesh);
            if($browser!==$BrowserHesh){
    //            dd($browser.' '.$BrowserHesh);
//                self::Destroy();
            }
        }
    }

    public static function init() {
        if (!self::$sessionStarted) {
//            session_start();
            self::$sessionName = mvcrb::BrouserHash();
            self::SecSessionStart();
            self::$sessionStarted = true;
        }
        return self::$sessionStarted;
    }

    /**
     * Add value to a session.
     *
     * @param string $key name the data to save
     * @param string|bool $value the data to save
     */
    public static function set($key, $value = false) {
//        dd($key);
        if (is_array($key) && $value === false) {
            foreach ($key as $name => $value) {
                $_SESSION[$name] = $value;
            }
        } else {
            $_SESSION[$key] = $value;
        }
    }

    /**
     * Extract item from session then delete from the session, finally return the item.
     *
     * @param  string $key item to extract
     * @return mixed|null
     */
    public static function pull($key) {
        if (isset($_SESSION[$key])) {
            $value = $_SESSION[$key];
            unset($_SESSION[$key]);
            return $value;
        }
        return null;
    }

    /**
     * Get item from session
     *
     * @param  string $key item to look for in session
     * @param  boolean $secondkey if used then use as a second key
     * @return mixed|null
     */
    public static function get($key, $secondkey = false) {
        if ($secondkey == true) {
            if (isset($_SESSION[$key][$secondkey])) {
                return $_SESSION[$key][$secondkey];
            }
        } else {
            if (isset($_SESSION[$key])) {
                return $_SESSION[$key];
            }
        }
        return null;
    }

    /**
     * id
     *
     * @return string with the session id.
     */
    public static function id() {
        return session_id();
    }

    /**
     * Regenerate session_id.
     *
     * @return string session_id
     */
    public static function regenerate() {
        session_regenerate_id(true);
        return session_id();
    }

    /**
     * Return the session array.
     *
     * @return array of session indexes
     */
    public static function display() {
        return $_SESSION;
    }

    /**
     * Empties and destroys the session.
     *
     * @param  string $key - session name to destroy
     * @param  boolean $prefix - if set to true clear all sessions for current SESSION_PREFIX
     */
    public static function destroy($key = '', $prefix = false) {
        /** only run if session has started */
        if (self::$sessionStarted == true) {
            // get session parameters 
            $params = session_get_cookie_params();

            // Delete the actual cookie. 
            setcookie(session_name(), '', time() - 42000, $params["path"], $params["domain"], $params["secure"], $params["httponly"]);
            /** if key is empty and $prefix is false */
            if ($key == '' && $prefix == false) {
                session_unset();
                session_destroy();
            } elseif ($prefix == true) {
                /** clear all session for set SESSION_PREFIX */
                foreach ($_SESSION as $key => $value) {
//                    if (strpos($key, self::$sessionName) === 0) {
                        unset($_SESSION[$key]);
//                    }
                }
            } else {
                /** clear specified session key */
                unset($_SESSION[$key]);
            }
        }
    }

    public static function DestroyAll() {
        if (self::$sessionStarted) {
//            session_unset();
//            session_destroy();
//            session_start();
//            session_regenerate_id(true);
            session_unset();
            session_destroy();
            session_write_close();
//            setcookie(session_name(), '', 0, '/');

            session_abort();
        }
    }

    /**
     * Display a one time message, then clear if from the session.
     *
     * @param  string $sessionName default session name
     * @return string
     */
    public static function message($sessionName = 'success') {
        $msg = Session::pull($sessionName);
        if (!empty($msg)) {
            return "<div class='alert alert-success alert-dismissable'>
                    <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button>
                    <h4><i class='fa fa-check'></i> " . $msg . "</h4>
                  </div>";
        } else {
            return null;
        }
    }

}
