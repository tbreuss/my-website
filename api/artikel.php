<?php

require_once './db.php';

DB::init();

$config = require 'config/main.php';
DB::init($config['db']);

$slug = filter_input(INPUT_GET, 'slug', FILTER_SANITIZE_STRING);
$slug = preg_replace('/[^a-z0-9_-]/', '', $slug);

if (empty($slug)) {
    $data = find_all();
} else {
    $data = find_one($slug);
    if (!empty($data)) {
        $data['created_at'] = format_mysqldate($data['created_at']);
        $data['updated_at'] = format_mysqldate($data['updated_at']);
    }
}

header('Content-Type: application/json');
echo json_encode($data);
exit;

/**
 * @return array
 * @throws Exception
 */
function find_all()
{
    $sql = "
        SELECT *
        FROM article         
        WHERE 1
        ORDER BY created_at DESC;
    ";
    $photos = DB::query($sql)->fetchAll();
    return $photos;
}

function find_one($slug)
{
    $sql = "
        SELECT *
        FROM article       
        WHERE 1
        AND slug = :slug;        
    ";
    return DB::query($sql, ['slug' => $slug])->fetch();
}

function format_mysqldate($mysqldate)
{
    if (empty($mysqldate)) {
        return '';
    }
    $phpdate = strtotime($mysqldate);
    return strftime('%e. %B %G', $phpdate);
}
