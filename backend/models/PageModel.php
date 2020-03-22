<?php

namespace app\models;

use app\components\DB;

class PageModel
{
    /**
     * @param string $slug
     * @return array
     */
    public static function fetchOne(string $slug): array
    {
        $sql = "
            SELECT *
            FROM page       
            WHERE 1
            AND slug = :slug;        
        ";
        return DB::query($sql, ['slug' => $slug])->fetch();
    }
}
