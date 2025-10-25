<?php

return [
    'db' => [
        'dsn' => 'sqlite:' . dirname(__DIR__, 2) . '/database/my-website.sqlite3',
    ],
    'imap' => [
        'mailbox' => '{***:110/pop3/novalidate-cert}INBOX',
        'username' => '***',
        'password' => '***'
    ]
];
