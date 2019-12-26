<?php

namespace mvcrb;

defined('ROOT') OR die('No direct script access.');

/**
 * Description of HelpController
 *
 * @author Ivan P Kolotilkin
 */
class LessonsController extends Controller{
    public function IndexAction() {
//        $this->View->title = 'Главная';
        $btr24dir = TEMPLATE_DIR.'help24'.DS;
//        $this->View->content = $this->View->execute('nav.html', $btr24dir);
        return $this->View->execute('index.htm', TEMPLATE_DIR.'help24'.DS);
    }
    public function PageAction() {
        $css = end(func_get_args()).'.htm';
        $path = TEMPLATE_DIR . 'help24';
        $testFile = mvcrb::SearchFile($css, $path);
        if (file_exists($testFile)) {
            return file_get_contents($testFile);
        }else {
            header("HTTP/1.0 404 Not Found");
        }
        
    }
    public function ScriptAction() {
        $css = end(func_get_args()).'.js';
        $path = TEMPLATE_DIR . 'help24';
        $testFile = mvcrb::SearchFile($css, $path);
        if (file_exists($testFile)) {
            $FileTipe = mime_content_type($testFile);
            header("Content-Type: $FileTipe");
            return file_get_contents($testFile);
        } else {
            header("HTTP/1.0 404 Not Found");
            return 'LessonsController HTTP/1.0 404 js Not Found '.$css;
        }
    }
    public function StyleAction() {
        $css = end(func_get_args()).'.css';
        $path = TEMPLATE_DIR . 'help24';
        $testFile = mvcrb::SearchFile($css, $path);
        if(file_exists($testFile)){
            header("Content-type: text/css; charset: UTF-8");
            return file_get_contents($testFile); 
        } else {
            header("HTTP/1.0 404 Not Found");
            return 'LessonsController HTTP/1.0 404 css Not Found '.$css;
        }
    }
    public function ImagesAction() {
        $css = end(func_get_args()).'.png';
        $path = TEMPLATE_DIR . 'help24';
        $testFile = mvcrb::SearchFile($css, $path);
        if (file_exists($testFile)) {
            $FileTipe = mime_content_type($path);
            header("Content-Type: $FileTipe");
            return file_get_contents($testFile);
        } else {
            header("HTTP/1.0 404 Not Found");
            return 'LessonsController HTTP/1.0 404 css Not Found ' . $css;
        }
    }

}
