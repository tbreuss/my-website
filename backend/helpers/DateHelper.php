<?php

namespace app\helpers;

class DateHelper
{
    /**
     * @param string $mysqldate
     * @return string
     */
    public static function formatMysqlDate($mysqldate)
    {
        if (empty($mysqldate)) {
            return '';
        }
        $phpdate = strtotime($mysqldate);
        return strftime('%e. %B %G', $phpdate);
    }
}
