<?php defined('ROOT') OR die('No direct script access.');

return array(

    '^error/([0-9]+)' => 'index/eror/$1',
    
    'index.html' => 'index/index/',
    'digitalagency/company.html' => 'page/page/company.html',
    'digitalagency/team.html' => 'page/page/team.html',
    'digitalagency/progress.html' => 'page/page/progress.html',
    'digitalagency/contacts.html' => 'page/page/contacts.html',
    'digitalagency/files.html' => 'page/page/files.html',
    'mediacenter/mediacenter.html' => 'page/page/mediacenter.html',
    'mediacenter/news/news.html' => 'page/page/news.html',
    'mediacenter/events/events.html' => 'page/page/events.html',
    'mediacenter/video/video.html' => 'page/page/video.html',
    'solutions/solutions.html' => 'page/page/solutions.html',
    'solutions/digital.html' => 'page/page/digital.html',
    'solutions/support.html' => 'page/page/support.html',
    'solutions/CRM.html' => 'page/page/s_CRM.html',
    'products/products.html' => 'page/page/products.html',
    'products/digitalagency/digitalagency.html' => 'page/page/digitalagency.html',
    'products/digitalagency/corporation.html' => 'page/page/corporation.html',
    'products/digitalagency/e_catalog.html' => 'page/page/e_catalog.html',
    'products/digitalagency/promo.html' => 'page/page/promo.html',
    'products/digitalagency/mobile.html' => 'page/page/mobile.html',
    'products/digitalagency/unique.html' => 'page/page/unique.html',
    'products/marketing/marketing.html' => 'page/page/marketing.html',
    'products/marketing/tech_support.html' => 'page/page/tech_support.html',
    'products/marketing/SMM.html' => 'page/page/SMM.html',
    'products/marketing/target.html' => 'page/page/target.html',
    'products/marketing/context.html' => 'page/page/context.html',
    'products/marketing/SEO.html' => 'page/page/SEO.html',
    'products/CRM/systems.html' => 'page/page/systems.html',
    'products/CRM/CRM.html' => 'page/page/CRM.html',
    'products/CRM/tasks.html' => 'page/page/tasks.html',
    'products/CRM/contactcenter.html' => 'page/page/contactcenter.html',
    'products/CRM/sites.html' => 'page/page/sites.html',
    'products/CRM/office.html' => 'page/page/office.html',
    'cooperation/cooperation.html' => 'page/page/cooperation.html',
    'cooperation/russia/russia.html' => 'page/page/russia.html',
    'cooperation/international/international.html' => 'page/page/international.html',

    'mediacenter/news/best_entrepreneur.html' => 'page/page/best_entrepreneur.html',
    'mediacenter/news/business_partner.html' => 'page/page/business_partner.html',
    'mediacenter/news/new_office.html' => 'page/page/new_office.html',
    'mediacenter/news/off_certificate.html' => 'page/page/off_certificate.html',
    'mediacenter/news/sales_territory.html' => 'page/page/sales_territory.html',
    'mediacenter/events/conference_bitrix24_rmh.html' => 'page/page/conference_bitrix24_rmh.html',
    'mediacenter/events/conference_bitrix24_skolkovo.html' => 'page/page/conference_bitrix24_skolkovo.html',
    'mediacenter/events/dot_boiling.html' => 'page/page/dot_boiling.html',
    'mediacenter/events/gadzhets_GTCOM.html' => 'page/page/gadzhets_GTCOM.html',
    'mediacenter/events/kipr_international_relations.html' => 'page/page/kipr_international_relations.html',
    'mediacenter/events/ICEM.html' => 'page/page/ICEM.html',
    
    '^page/([-_a-zA-Z0-9]+)/([-_a-zA-Z0-9]+.html)' => 'page/page/$2/$1',
    '^page/([-_a-zA-Z0-9]+.html)' => 'page/page/$1',
    '\bcss\b/([-_a-z0-9]+)' => 'res/css/$1',
    '\bjs\b/([-_a-z0-9]+)' => 'res/js/$1',

);
