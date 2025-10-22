<?php

namespace app\components;

use PDO;
use PDOStatement;

class DB
{
    protected static $options = [];
    protected static $instance = null;
    protected static $queryLog = [];

    private function __construct()
    {
    }

    private function __clone()
    {
    }

    public static function init(array $options = [])
    {
        self::$options = array_replace_recursive([
            'host' => 'localhost',
            'dbname' => '',
            'username' => '',
            'passwd' => '',
            'port' => '3306',
            'charset' => 'UTF8',
            'pdo' => [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => true
            ]
        ], $options);
    }

    /**
     * @return PDO
     */
    public static function instance(): PDO
    {
        if (self::$instance === null) {
            $dsn = sprintf('mysql:host=%s;port=%s;dbname=%s;charset=%s',
                self::$options['host'],
                self::$options['port'],
                self::$options['dbname'],
                self::$options['charset']
            );
            self::$instance = new PDO($dsn, self::$options['username'], self::$options['passwd'], self::$options['pdo']);
        }
        return self::$instance;
    }

    /**
     * @param string $statement
     * @param array $namedParams
     * @return int
     */
    public static function exec(string $statement, array $namedParams = []): int
    {
        if (empty($namedParams)) {
            self::$queryLog[] = $statement;
            return self::instance()->exec($statement);
        }
        self::handleNamedParams($statement, $namedParams);
        $stmt = self::instance()->prepare($statement);
        self::bindValues($stmt, $namedParams);
        $stmt->execute();
        self::logQuery($stmt);
        return $stmt->rowCount();
    }

    /**
     * @param string $statement
     * @param array $namedParams
     * @param int $mode
     * @return PDOStatement
     */
    public static function query(string $statement, array $namedParams = [], int $mode = PDO::FETCH_ASSOC): PDOStatement
    {
        if (empty($namedParams)) {
            self::$queryLog[] = $statement;
            return self::instance()->query($statement, $mode);
        }
        self::handleNamedParams($statement, $namedParams);
        $stmt = self::instance()->prepare($statement);
        self::bindValues($stmt, $namedParams);
        $stmt->execute();
        self::logQuery($stmt);
        return $stmt;
    }

    public static function prepare(string $statement, array $driver_options = array()): PDOStatement
    {
        return self::instance()->prepare($statement, $driver_options);
    }

    public static function beginTransaction(): bool
    {
        return self::instance()->beginTransaction();
    }

    public static function commit(): bool
    {
        return self::instance()->commit();
    }

    public static function errorCode(): mixed
    {
        return self::instance()->errorCode();
    }

    public static function errorInfo(): array
    {
        return self::instance()->errorInfo();
    }

    public static function getAttribute(string $attribute): mixed
    {
        return self::instance()->getAttribute($attribute);
    }

    public static function getAvailableDrivers(): array
    {
        return self::instance()->getAvailableDrivers();
    }

    public static function inTransaction(): bool
    {
        return self::instance()->inTransaction();
    }

    public static function lastInsertId(string $name = NULL): string
    {
        return self::instance()->lastInsertId($name);
    }

    public static function quote(string $string, int $parameter_type = PDO::PARAM_STR): string
    {
        return self::instance()->quote($string, $parameter_type);
    }

    public static function rollBack(): bool
    {
        return self::instance()->rollBack();
    }

    public static function setAttribute(int $attribute, mixed $value): bool
    {
        return self::instance()->setAttribute($attribute, $value);
    }

    private static function logQuery(PDOStatement $stmt)
    {
        ob_start();
        $stmt->debugDumpParams();
        $debug = ob_get_clean();

        $pos = strpos($debug, 'Sent SQL: ');
        if ($pos !== false) {
            $debug = substr($debug, $pos + 10);
            $pos = strpos($debug, 'Params: ');
            if ($pos !== false) {
                $debug = substr($debug, 0, $pos);
            }
        }

        self::$queryLog[] = $debug;
    }

    public static function getQueries(): array
    {
        return self::$queryLog;
    }

    public static function getLastQuery(): string
    {
        return end(self::$queryLog);
    }

    private static function handleNamedParams(string &$statement, array &$namedParams)
    {
        $newParams = [];
        $inStatement = [];
        foreach ($namedParams as $key => $value) {
            if (!is_array($value)) {
                continue;
            }
            $key = ltrim($key, ':');
            $in = [];
            foreach ($value as $i => $item) {
                $newKey = ":" . $key . "_" . $i;
                $in[] = $newKey;
                $newParams[$newKey] = $item;
            }
            $inStatement[':'.$key] = implode(',', $in);
            unset($namedParams[$key]);
        }

        $statement = str_replace(array_keys($inStatement), array_values($inStatement), $statement);
        $namedParams = array_merge($namedParams, $newParams);
    }

    private static function bindValues(PDOStatement $stmt, array $namedParams)
    {
        foreach ($namedParams as $key => $mixed) {
            if (is_int($mixed)) {
                $stmt->bindValue($key, $mixed, PDO::PARAM_INT);
            } elseif (is_bool($mixed)) {
                $stmt->bindValue($key, $mixed, PDO::PARAM_BOOL);
            } elseif (is_null($mixed)) {
                $stmt->bindValue($key, $mixed, PDO::PARAM_NULL);
            } else {
                $stmt->bindValue($key, $mixed, PDO::PARAM_STR);
            }
        }
    }

}
