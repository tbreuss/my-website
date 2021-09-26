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
        if (is_null($detail)) {
            Flight::json([], 404);
            exit;
        }
        if ($detail['format'] === 'markdown') {
            $detail['content'] = (new Parsedown)->text($detail['content']);
        }
        $detail['created_at'] = DateHelper::formatMysqlDate($detail['created_at']);
        $detail['updated_at'] = DateHelper::formatMysqlDate($detail['updated_at']);
        Flight::json($detail);
    }

    public static function actionLatest()
    {
        $latest = ArticleModel::fetchLatest();
        if (is_null($latest)) {
            Flight::json([], 404);
            exit;
        }
        if ($latest['format'] === 'markdown') {
            $latest['content'] = (new Parsedown)->text($latest['content']);
        }
        $latest['created_at'] = DateHelper::formatMysqlDate($latest['created_at']);
        $latest['updated_at'] = DateHelper::formatMysqlDate($latest['updated_at']);
        Flight::json($latest);
    }
}
