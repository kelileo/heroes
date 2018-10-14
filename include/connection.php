<?php
$host = 'localhost'; // адрес сервера 
$database = 'imagestore'; // имя базы данных
$user = 'root'; // имя пользователя
$password = 'y1O42nL6bl6z2f3r'; // пароль


// подключаемся к серверу
$link = mysqli_connect($host, $user, $password, $database);

mysql_select_db($db_database,$link) or die("Ошибка " . mysqli_error($link));
mysql_query("SET names cp1251"); //указать UTF-8 при переносе в интернет
?>
