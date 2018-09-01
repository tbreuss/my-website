<?php

require './db.php';

DB::init();


$config = require 'config/dev.php';
DB::init($config['db']);

$all = find_all();

header('Content-Type: application/json');
echo json_encode($all);
exit;



function find_all()
{
    $sql = "
        SELECT id, extension, name, photodate
        FROM foto         
        WHERE deleted IS NULL
        AND type=0
        ORDER BY photodate DESC;
    ";
    $photos = DB::query($sql)->fetchAll();
    return $photos;
}
