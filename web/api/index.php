<?php

require dirname(__DIR__, 2) . '/vendor/autoload.php';

use app\components\DB;
use app\controllers\ArticleController;
use app\controllers\PageController;
use app\controllers\PhotoController;
use flight\Engine;

// init database
$config = require dirname(__DIR__, 2) . '/backend/config/main.php';
DB::init($config['db']);

$app = new Engine();

#$app->set('flight.base_url', '/api');
#$app->set('flight.log_errors', true);

$app->map('error', function(Throwable $ex) use ($app) {
    $app->response()
        ->clear()
        ->status(500)
        ->write($ex->getTraceAsString())
        ->send();
    //echo $ex->getTraceAsString();
});

$app->map('notFound', function() use ($app) {
    $app->response()
        ->clear()
        ->status(404)
        ->send();
});

$app->route('GET /article/@slug', [ArticleController::class, 'actionDetail']);
$app->route('GET /article', [ArticleController::class, 'actionList']);
$app->route('GET /page/@slug', [PageController::class, 'actionDetail']);
$app->route('GET /photo/latest', [PhotoController::class, 'actionLatest']);
$app->route('GET /photo', [PhotoController::class, 'actionList']);

$app->start();
