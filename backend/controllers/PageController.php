<?php

namespace app\controllers;

use app\models\PageModel;
use Flight;

class PageController
{
    public static function actionDetail(string $slug)
    {
        $detail = PageModel::fetchOne($slug);
        Flight::json($detail);
    }
}
