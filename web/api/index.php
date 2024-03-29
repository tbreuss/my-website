<?php

use app\components\DB;
use app\controllers\ArticleController;
use app\controllers\PageController;
use app\controllers\PhotoController;
use flight\Engine;

define('ROOT_DIR', dirname(__DIR__, 2));

ini_set('display_errors', 0);
ini_set('error_log', ROOT_DIR . '/runtime/log/error.log');
setlocale (LC_ALL, 'de_DE');

// vendor autoload
require ROOT_DIR . '/vendor/autoload.php';

// init database
$config = require ROOT_DIR . '/backend/config/main.php';
DB::init($config['db']);

$app = new Engine();

#$app->set('flight.base_url', '/api');
$app->set('flight.log_errors', true);

$app->map('error', function(Throwable $ex) use ($app) {
    $app->response()
        ->clear()
        ->status(500)
        ->send();
});

$app->map('notFound', function() use ($app) {
    $app->response()
        ->clear()
        ->status(404)
        ->send();
});

$app->route('GET /articles/latest', [ArticleController::class, 'actionLatest']);
$app->route('GET /articles/@slug', [ArticleController::class, 'actionDetail']);
$app->route('GET /articles', [ArticleController::class, 'actionList']);
$app->route('GET /pages/@slug', [PageController::class, 'actionDetail']);
$app->route('GET /photos/latest', [PhotoController::class, 'actionLatest']);
$app->route('GET /photos', [PhotoController::class, 'actionList']);

$app->start();
