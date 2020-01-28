<?php

namespace mvcrb;

defined('ROOT') OR die('No direct script access.');

/**
 * Description of UserController
 *  
 * @author ivan kolotilkin
 */
class AdminController extends Controller {
        public function __construct() {
        parent::__construct();
        $this->User = new UserModel();
        if ($this->User->GetCurrentUser()['role'] < 900) {

            if ($this->POST) {
                if (!headers_sent()) {
                    header("HTTP/1.1 403 Forbidden");
                    header("Status: 403 Forbidden");
                }
                die('Forbidden: Asses denide');
            } else {
                Session::set('UserRedirect', mvcrb::$URI);
                return mvcrb::Redirect('/user');
            }
        }
        $this->View->AddCss('/css/adminstyle.css');
        $this->View->title = 'Админка';
    }

    public function IndexAction() {
        
        $this->View->admincontent = $this->View->execute('main.html');
        $this->View->content = $this->View->execute('AdminWraper.html');
        return $this->View->execute('index.html', TEMPLATE_DIR);
    }
}
