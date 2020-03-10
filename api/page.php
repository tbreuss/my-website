<?php

$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_STRING);
$id = preg_replace('/[^a-z]/', '', $id);

$pageFile = sprintf('pages/%s.html', $id);

if (!is_file($pageFile)) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
    exit;
}

header('Content-Type: application/json');
echo json_encode(['html' => file_get_contents($pageFile)]);
