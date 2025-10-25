# My Website

This is the code for my personal website <https://tebe.ch> which is built with Mithril.js and FlightPHP.

- <https://mithril.js.org>
- <http://flightphp.com>

The design is heavily inspired by:

- <https://bradleyrosenfeld.com>

## Install

    git clone https://github.com/tbreuss/my-website.git
    cd my-website
    npm install
    composer install

## Add Database

Create a SQLite database with the following schema.

~~~sqlite
CREATE TABLE "article" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "format" TEXT NULL  ,
    "title" VARCHAR(100) NULL  ,
    "slug" VARCHAR(50) NULL  ,
    "abstract" TEXT NULL  ,
    "content" TEXT NULL  ,
    "reading_time" INTEGER NULL  ,
    "created_at" DATETIME NULL  ,
    "updated_at" DATETIME NULL
);

CREATE TABLE "photo" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "type" TINYINT NOT NULL DEFAULT '0' ,
    "name" VARCHAR(500) NOT NULL DEFAULT '' ,
    "description" VARCHAR(500) NULL  ,
    "photodate" DATE NULL  ,
    "abstract" VARCHAR(500) NOT NULL DEFAULT '' ,
    "extension" VARCHAR(10) NULL  ,
    "panorama" TINYINT NOT NULL DEFAULT '0' ,
    "loop" TINYINT NOT NULL DEFAULT '0' ,
    "counter" INTEGER NOT NULL DEFAULT '0' ,
    "opened" DATETIME NULL  ,
    "deleted" DATETIME NULL  ,
    "created" DATETIME NULL  ,
    "modified" DATETIME NULL
);

CREATE TABLE "page" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "format" TEXT NULL  ,
    "title" VARCHAR(100) NULL  ,
    "slug" VARCHAR(50) NULL  ,
    "content" TEXT NULL  ,
    "created_at" DATETIME NULL  ,
    "updated_at" DATETIME NULL
);
~~~

## Add Configuration

Copy `backend/config/example.php` to `backend/config/main.php` and edit settings

## Run
    
Frontend

    npm run start

Backend
    
    php -S localhost:9999 -t web/

Open <http://localhost:9999> in your browser.
