<?php

use app\components\DB;

require dirname(__DIR__, 2) . '/vendor/autoload.php';

$config = require dirname(__DIR__, 2) . '/backend/config/main.php';
DB::init($config['db']);

function create_part_array($structure, $prefix = "")
{
    //print_r($structure);
    $part_array = [];
    if (sizeof($structure->parts) > 0) {    // There some sub parts
        foreach ($structure->parts as $count => $part) {
            add_part_to_array($part, $prefix . ($count + 1), $part_array);
        }
    } else {    // Email does not have a seperate mime attachment for text
        $part_array[] = array('part_number' => $prefix . '1', 'part_object' => $structure);
    }
    return $part_array;
}

// Sub function for create_part_array(). Only called by create_part_array() and itself.
function add_part_to_array($obj, $partno, & $part_array)
{
    $part_array[] = array('part_number' => $partno, 'part_object' => $obj);
    if ($obj->type == 2) { // Check to see if the part is an attached email message, as in the RFC-822 type
        //print_r($obj);
        if (sizeof($obj->parts) > 0) {    // Check to see if the email has parts
            foreach ($obj->parts as $count => $part) {
                // Iterate here again to compensate for the broken way that imap_fetchbody() handles attachments
                if (sizeof($part->parts) > 0) {
                    foreach ($part->parts as $count2 => $part2) {
                        add_part_to_array($part2, $partno . "." . ($count2 + 1), $part_array);
                    }
                } else {    // Attached email does not have a seperate mime attachment for text
                    $part_array[] = array('part_number' => $partno . '.' . ($count + 1), 'part_object' => $obj);
                }
            }
        } else {    // Not sure if this is possible
            $part_array[] = array('part_number' => $partno . '.1', 'part_object' => $obj);
        }
    } else {    // If there are more sub-parts, expand them out.
        if (sizeof($obj->parts) > 0) {
            foreach ($obj->parts as $count => $p) {
                add_part_to_array($p, $partno . "." . ($count + 1), $part_array);
            }
        }
    }
}

function main($config)
{
    $mbox = imap_open(
        $config['imap']['mailbox'],
        $config['imap']['username'],
        $config['imap']['password']
    );

    $numMsg = imap_num_msg($mbox);

    for ($num = 1; $num <= $numMsg; $num++) {

        $structure = imap_fetchstructure($mbox, $num, 0);
        $header = imap_header($mbox, $num);

        $parts = create_part_array($structure);

        #echo"<pre>";print_r($parts);echo"</pre>";

        foreach ($parts AS $part) {

            if (in_array($part['part_object']->subtype, array('JPG', 'JPEG', 'PNG'))) {
                $data = imap_fetchbody($mbox, $num, $part['part_number']);

                $encoded = '';
                switch ($part['part_object']->encoding) {
                    case 0: $encoded = $data; // 7BIT
                        break;
                    case 1: $encoded = $data; // 8BIT
                        break;
                    case 2: $encoded = $data; // BINARY
                        break;
                    case 3: $encoded = imap_base64($data); // BASE64
                        break;
                    case 4: $encoded = quoted_printable_decode($data); // QUOTED_PRINTABLE
                        break;
                    case 5: $encoded = $data; // OTHER
                        break;
                }

                $name = '';
                $headerParts = imap_mime_header_decode($header->subject);
                if (!empty($headerParts)) {
                    foreach ($headerParts AS $headerPart) {
                        $name .= $headerPart->text;
                    }
                    if ($headerPart->charset == 'iso-8859-1') {
                        $name = utf8_encode($name);
                    }
                }

                $date = date('Y-m-d');

                $pos = strpos($name, '|');
                if ($pos !== false) {
                    $parts = explode('|', $name);
                    $tmpDate = trim(array_shift($parts));
                    if (strpos($tmpDate, '.') !== false) {
                        list($day, $month, $year) = explode('.', $tmpDate);
                        if (checkdate($month, $day, $year)) {
                            $date = sprintf('%04d-%02d-%02d', $year, $month, $day);
                        }
                    }
                    $name = trim(implode('|', $parts));
                }

                $extension = strtolower($part['part_object']->subtype);

                $params = [
                    'name' => $name,
                    'photodate' => $date,
                    'extension' => $extension,
                    'created' => date('Y-m-d H:i:s'),
                    'modified' => date('Y-m-d H:i:s'),
                ];

                DB::query('
                  INSERT INTO foto (name, photodate, extension, created, modified)
                  VALUES (:name, :photodate, :extension, :created, :modified)
                ', $params);

                $id = DB::lastInsertId();

                if ($id > 0) {
                    $filepath = sprintf('%s/web/assets/media/%s.%s', dirname(__DIR__, 2), $id, $extension);
                    if (file_put_contents($filepath, $encoded) === false) {
                        throw new Exception(sprintf('File %s could not be written', $filepath));
                    }
                }
            }
        }

        imap_delete($mbox, $num);
    }

    if ($numMsg > 0) {
        imap_expunge($mbox);
    }

    imap_close($mbox);
}

main($config);
