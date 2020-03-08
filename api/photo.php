<?php

require_once './db.php';
require_once('./3rdparty/phpthumb/ThumbLib.inc.php');

DB::init();

$config = require 'config/main.php';
DB::init($config['db']);

$all = find_all();

header('Content-Type: application/json');
echo json_encode($all);
exit;

/**
 * @return array
 * @throws Exception
 */
function find_all()
{
    $sql = "
        SELECT id, extension, name, DATE_FORMAT(photodate, '%d.%m.%Y') as date
        FROM foto         
        WHERE deleted IS NULL
        AND panorama = 0      
        ORDER BY photodate DESC;
    ";
    $photos = DB::query($sql)->fetchAll();

    foreach ($photos as $photo) {
        createThumbnail(800, 800, $photo['id'], $photo['extension']);
    }

    return $photos;
}

/**
 * @param integer $maxWidth
 * @param integer $maxHeight
 * @param integer $id
 * @param string $extension
 * @return string
 * @throws Exception
 */
function createThumbnail($maxWidth, $maxHeight, $id, $extension)
{
    $original  = sprintf('%s/assets/media/%d.%s', dirname(__DIR__), $id, $extension);
    $thumbnail = sprintf('%s/assets/media/thumbs/%d.%s', dirname(__DIR__), $id, $extension);

    if(!is_file($original)) {
        // do nothing
        return;
    }

    if(!is_file($thumbnail) || filemtime($thumbnail)<(time()-(60*60*24*7*52))) { //86400 = 1 Woche
        $options = array('resizeUp' => false, 'jpegQuality' => 90);
        $phpThumb = PhpThumbFactory::create($original, $options);
        $phpThumb->resize($maxWidth, $maxHeight);
        $phpThumb->save($thumbnail);
    }

}
