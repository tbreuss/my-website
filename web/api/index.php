<?php

use app\components\DB;
use app\controllers\ArticleController;
use app\controllers\PageController;
use app\controllers\PhotoController;

define('ROOT_DIR', dirname(__DIR__, 2));

ini_set('display_errors', 0);
ini_set('error_log', ROOT_DIR . '/runtime/log/error.log');
ini_set('error_reporting', E_ERROR);

setlocale (LC_ALL, 'de_DE');

// vendor autoload
require ROOT_DIR . '/vendor/autoload.php';

// init database
$config = require ROOT_DIR . '/backend/config/main.php';
DB::init($config['db']);

#$app->set('flight.base_url', '/api');
Flight::set('flight.log_errors', true);

Flight::map('error', function() {
    Flight::jsonHalt(['message' => 'An error occurred'], 500);
});

Flight::map('notFound', function() {
    Flight::jsonHalt(['message' => 'Route not found'], 404);
});

Flight::route('GET /articles/latest', [ArticleController::class, 'actionLatest']);
Flight::route('GET /articles/@slug', [ArticleController::class, 'actionDetail']);
Flight::route('GET /articles', [ArticleController::class, 'actionList']);
Flight::route('GET /pages/@slug', [PageController::class, 'actionDetail']);
Flight::route('GET /photos/latest', [PhotoController::class, 'actionLatest']);
Flight::route('GET /photos', [PhotoController::class, 'actionList']);

Flight::start();
