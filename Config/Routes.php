<?php defined('ROOT') OR die('No direct script access.');
/**
 * регуляроное выражение применяется к индексу массива
 * сам массив должен иметь минимум два значения
 * 
 * по тпу "контроллер/метод[/параметр1/параметр2/параметр3/...]"
 * 
 * если роутр встретит запись по типу
 * 
 * 'sitemap' => 'main/sitemap' то выполнится МainController->SitemapAction()
 * или
 * 'sitemap/([0-9]+)/([0-9]+)' => 'main/sitemap/$1/$2' то выполнится МainController->SitemapAction(найденныйПраметр1 , найденныйПараметр2 )
 * 
 * ниже много разных прмеров
 * 
 */
return array(
    
    
//    '([0-9]+)' => 'main/index/$1',
//    'product/([0-9]+)' => 'main/product/0/$1',
//    'category/([0-9]+)' => 'main/category/$1',
//    'category/([0-9]+)/product/([0-9]+)' => 'main/product/$1/$2',
//    
    'im' => 'user/index/',
//    'cart/addAjax/([0-9]+)' => 'main/addAjax/$1',
//    'cart/delete/([0-9]+)' => 'main/delete/$1',
//    'cart/checkout' => 'main/checkout',
//    'sitemap' => 'main/sitemap',
//    '404' => 'main/eror404',
//    'index.php' => 'main/redirect',
    '\bpage\b/([0-9]+)' => 'page/page/$1',
    '\bpage\b/([-_a-z0-9]+).html' => 'page/page/$1',
//    '\bpage\b/([-_a-z0-9]+)' => 'site/sefurl/$1',
//    '^id' => 'main/index/$1',
    'forums' => 'index/forums/'
//    '\bmoney\b/' => 'site/money/',
//    'logout' => 'user/logout'
);
