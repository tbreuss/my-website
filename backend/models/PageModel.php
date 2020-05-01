<?php

namespace app\models;

use app\components\DB;

class PageModel
{
    /**
     * @param string $slug
     * @return array|null
     */
    public static function fetchOne(string $slug): ?array
    {
        $sql = "
            SELECT *
            FROM page
            WHERE 1
            AND slug = :slug;
        ";
        $row = DB::query($sql, ['slug' => $slug])->fetch();
        return $row ? $row : null;
    }
}
