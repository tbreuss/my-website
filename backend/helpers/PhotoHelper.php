<?php

namespace app\helpers;

use PhpThumbFactory;

class PhotoHelper
{
    /**
     * @param integer $maxWidth
     * @param integer $maxHeight
     * @param integer $id
     * @param string $extension
     * @return string
     * @throws Exception
     * @throws \Exception
     */
    public static function createThumbnail($maxWidth, $maxHeight, $id, $extension)
    {
        $original = sprintf('%s/web/assets/media/%d.%s', dirname(__DIR__, 2), $id, $extension);
        $thumbnail = sprintf('%s/web/assets/media/thumbs/%d.%s', dirname(__DIR__, 2), $id, $extension);

        if (!is_file($original)) {
            // do nothing
            return;
        }

        if (!is_file($thumbnail) || filemtime($thumbnail) < (time() - (60 * 60 * 24 * 7 * 52))) { //86400 = 1 Woche
            $options = array('resizeUp' => false, 'jpegQuality' => 90);
            $phpThumb = PhpThumbFactory::create($original, $options);
            $phpThumb->resize($maxWidth, $maxHeight);
            $phpThumb->save($thumbnail);
        }

    }

}
