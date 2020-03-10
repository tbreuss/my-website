<?php

$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_STRING);
$pageFile = sprintf('pages/%s.html', $id);

header('Content-Type: application/json');

if (is_file($pageFile)) {
    echo json_encode(['html' => file_get_contents($pageFile)]);
} else {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
}
