<?php

require 'vendor/autoload.php';

use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;
$capsule->addConnection([
    'driver' => 'pgsql',
    'host' => env('DB_HOST', '127.0.0.1'),
    'port' => env('DB_PORT', 5432),
    'database' => env('DB_DATABASE', 'first_aid_db'),
    'username' => env('DB_USERNAME', 'postgres'),
    'password' => env('DB_PASSWORD', ''),
    'charset' => 'utf8',
    'prefix' => '',
]);
$capsule->setAsGlobal();
$capsule->bootEloquent();

$schema = $capsule::connection()->getSchemaBuilder();
$tables = $schema->getAllTables();

foreach ($tables as $table) {
    echo $table . "\n";
}
?>