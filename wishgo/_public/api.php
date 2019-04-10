<?php

$dates = ['2018/05/15', '2018/05/16', '2018/05/17', '2018/05/18', '2018/05/19', ];

$room_id = 5; // (int)$_GET['rid'];
$check_in_day = '2018/05/15'; // $_GET['chkin'] - make sure it's a date :)

echo json_encode($dates, true);
