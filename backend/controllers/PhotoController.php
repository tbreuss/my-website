<?php

namespace app\controllers;

use app\helpers\PhotoHelper;
use app\models\PhotoModel;
use Flight;

class PhotoController
{
    public static function actionList()
    {
        $list = PhotoModel::fetchAll();
        foreach ($list as $photo) {
            PhotoHelper::createThumbnail(800, 800, $photo['id'], $photo['extension']);
        }
        Flight::json($list);
    }

    public static function actionLatest()
    {
        $latest = PhotoModel::fetchLatest();
        Flight::json($latest);
    }
}
