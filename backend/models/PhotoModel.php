<?php

namespace app\models;

use app\components\DB;

class PhotoModel
{
    /**
     * @return array
     */
    public static function fetchAll(): array
    {
        $sql = "
            SELECT id, extension, name, DATE_FORMAT(photodate, '%d.%m.%Y') as date
            FROM foto         
            WHERE deleted IS NULL
            AND panorama = 0      
            ORDER BY photodate DESC;
        ";
        return DB::query($sql)->fetchAll();
    }

    /**
     * @return array
     */
    public static function fetchLatest(): array
    {
        $sql = "
            SELECT id, extension, name, DATE_FORMAT(photodate, '%d.%m.%Y') as date
            FROM foto         
            WHERE deleted IS NULL
            AND panorama = 0      
            ORDER BY photodate DESC
            LIMIT 1
        ";
        return DB::query($sql)->fetch();
    }
}
