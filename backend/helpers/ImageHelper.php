<?php

namespace app\helpers;

use Gumlet\ImageResize;
use Throwable;

class ImageHelper
{
    /**
     * @param int $maxWidth
     * @param int $maxHeight
     * @param int $id
     * @param string $extension
     * @return bool
     */
    public static function createThumbnail($maxWidth, $maxHeight, $id, $extension): bool
    {
        $original = sprintf('%s/web/assets/media/%d.%s', dirname(__DIR__, 2), $id, $extension);
        $thumbnail = sprintf('%s/web/assets/media/thumbs/%d.%s', dirname(__DIR__, 2), $id, $extension);

        if (!is_file($original)) {
            // do nothing
            return false;
        }

        if (!is_file($thumbnail) || filemtime($thumbnail) < (time() - (60 * 60 * 24 * 7 * 52))) { //86400 = 1 Woche
            try {
                $image = new ImageResize($original);
                $image->resizeToBestFit($maxWidth, $maxHeight);
                $image->save($thumbnail, null, 90);
                return true;
            } catch (Throwable $t) {
                return false;
            }
        }
        return false;
    }

}
