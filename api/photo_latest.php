<?php

require_once './db.php';

$config = require 'config/main.php';

DB::init($config['db']);

$latest = find_latest();

header('Content-Type: application/json');
echo json_encode($latest);
exit;

/**
 * @return array
 * @throws Exception
 */
function find_latest()
{
    $sql = "
        SELECT id, extension, name, DATE_FORMAT(photodate, '%d.%m.%Y') as date
        FROM foto         
        WHERE deleted IS NULL
        AND panorama = 0      
        ORDER BY photodate DESC
        LIMIT 1
    ";
    $photo = DB::query($sql)->fetch();
    return $photo;
}
