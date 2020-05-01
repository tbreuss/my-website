<?php

namespace app\models;

use app\components\DB;

class ArticleModel
{
    /**
     * @return array
     */
    public static function fetchAll(): array
    {
        $sql = "
            SELECT *
            FROM article
            WHERE 1
            ORDER BY created_at DESC;
        ";
        return DB::query($sql)->fetchAll();
    }

    /**
     * @param string $slug
     * @return array|null
     */
    public static function fetchOne(string $slug): ?array
    {
        $sql = "
            SELECT *
            FROM article
            WHERE 1
            AND slug = :slug;
        ";
        $row = DB::query($sql, ['slug' => $slug])->fetch();
        return $row ? $row : null;
    }
}
