<?php

namespace app\controllers;

use app\helpers\DateHelper;
use app\models\ArticleModel;
use Flight;
use Parsedown;

class ArticleController
{
    public static function actionList()
    {
        $list = ArticleModel::fetchAll();
        Flight::json($list);
    }

    public static function actionDetail(string $slug)
    {
        $detail = ArticleModel::fetchOne($slug);
        if (!empty($detail)) {
            if ($detail['format'] === 'markdown') {
                $detail['content'] = (new Parsedown)->text($detail['content']);
            }
            $detail['created_at'] = DateHelper::formatMysqlDate($detail['created_at']);
            $detail['updated_at'] = DateHelper::formatMysqlDate($detail['updated_at']);
        }
        Flight::json($detail);
    }
}
