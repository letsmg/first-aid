<?php

use Deflect\Argon2;

try {
    $password = 'mysecretpassword';
    $hash = Argon2::hash($password, [
        'memory' => 1024 * 1024, // 1GB
        'cost' => 31,
        'time' => 5,
    ]);

    echo "Argon2id hash generated successfully:\n";
    echo $hash . "\n";

} catch (\Exception $e) {
    echo "Error generating Argon2id hash: " . $e->getMessage() . "\n";
}
?>