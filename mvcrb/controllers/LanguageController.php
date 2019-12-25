<?php

namespace mvcrb;

defined('ROOT') OR die('No direct script access.');

/**
 * Description of LanguageController
 *
 * @author Ivan P Kolotilkin
 */
class LanguageController {
    public function __construct() {
        Session::init();
    }
    public function EnAction() {
        
        Session::set('language', 'en');
        return mvcrb::Redirect('/');
    }
    public function RuAction() {
        Session::set('language', null);
        return mvcrb::Redirect('/');
    }
}
