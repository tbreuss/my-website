# My Website

This is the code for my personal website <https://tebe.ch> which is built with Mithril.js and FlightPHP.

- <https://mithril.js.org>
- <http://flightphp.com>
- <https://github.com/tbreuss/local-dev>

The design is heavily inspired by:

- <https://bradleyrosenfeld.com>

## Install

    git clone https://github.com/tbreuss/my-website.git
    cd my-website
    npm install
    composer install

## Add Database

Create a MySQL database with the following schema.

~~~sql
CREATE TABLE `article` (
`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
`format` enum('html','markdown') DEFAULT NULL,
`title` varchar(100) DEFAULT NULL,
`slug` varchar(50) DEFAULT NULL,
`abstract` tinytext,
`content` text,
`reading_time` int(11) DEFAULT NULL,
`created_at` datetime DEFAULT NULL,
`updated_at` datetime DEFAULT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `photo` (
`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
`type` tinyint(3) unsigned NOT NULL DEFAULT '0',
`name` varchar(500) NOT NULL DEFAULT '',
`description` varchar(500) DEFAULT NULL,
`photodate` date DEFAULT NULL,
`abstract` varchar(500) NOT NULL DEFAULT '',
`extension` varchar(10) DEFAULT NULL,
`panorama` tinyint(1) unsigned NOT NULL DEFAULT '0',
`loop` tinyint(1) unsigned NOT NULL DEFAULT '0',
`counter` int(11) unsigned NOT NULL DEFAULT '0',
`opened` timestamp NULL DEFAULT NULL,
`deleted` timestamp NULL DEFAULT NULL,
`created` timestamp NULL DEFAULT NULL,
`modified` timestamp NULL DEFAULT NULL,
PRIMARY KEY (`id`),
KEY `name` (`name`(255)),
KEY `counter` (`counter`),
KEY `created` (`created`),
KEY `modified` (`modified`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `page` (
`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
`format` enum('html','markdown') DEFAULT NULL,
`title` varchar(100) DEFAULT NULL,
`slug` varchar(50) DEFAULT NULL,
`content` text,
`created_at` datetime DEFAULT NULL,
`updated_at` datetime DEFAULT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
~~~

## Add Configuration

Copy `backend/config/example.php` to `backend/config/main.php` and edit settings

## Run
    
JS

    npm run start

PHP
    
    php -S localhost:9999 -t web/
