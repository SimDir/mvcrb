# mvcRB - Model View Controller **Rus Beard**

## Используйте `Git` для установки

Запустите терминал и выполните следующие `Git` команды для установки:
```
git clone https://github.com/SimDir/mvcrb.git
```
или если у вас есть доступ по **ssh**
```
git clone git@github.com:SimDir/mvcrb.git
```
Далее перейдите в каталог с только что склонированным проектом
```
cd mvcrb
```
Далее установите бибилиотеки зависимостей используемые в проекте
```
composer install
```


В каталоге с проектом имеется каталог с конфигурационными файлами, настройте свой проект в соответствии с описанием в этих файлах

**Примерная реализация шаблонизатора**
*хочу упростить работу верстальщиков и фронт разработчиков, по максимальному хочу освободить HTML от PHP кода что бы не запутывать работу с шаблонам*

команды шаблонзатора оборачиваются в специальный тег <{тут_команда_шаблонизатора}> 


в контроллере делаем так 

`$this->View->ЛюбоеИмяПеременной = 'Значение переменной';`

далее в HTML шаблоне:
тег 

`<{ ЛюбоеИмяПеременной }>` - так мы вставляем переменную которую передал шаблонзатору.

```
$this->View->title = 'Админка';

а в шаблоне

<title><{ title }></title>
```

Так же имеются дополнительные команды шаблонизатора

например если нужно к странице подключить скрпт:
то делаем так 
```
<{ addjs(/public/js/header.js) }>
```
команда `addjs()` в скобках указывается путь до скрипта. ВНИМАНИЕ!!! Путь без кавычек. скрипт подключится к странице перед закрывающмся тегом </body> основной HTML странице


то же самое но для CSS стилей
```
<{ Addcss(/public/css/style.css) }>
```
команда `Addcss()` сответсвенно подключит стиль. подключиться между теками `<head> </head>`

шаблонзатор так же может задать титл странице

эта команда установит титл странице 
```
<{ Title(MVC Rus Deard - клевый фреймворк с пасьянсом и куртизанками) }>
```

продолжение следует....