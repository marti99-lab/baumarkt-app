<?php
$host = 'localhost';
$db = 'd0421c0b';
$user = 'd0421c0b';
$pass = 'kmkNLsGs3D6sSCeeuT2a';

try {
    $pdo = new PDO("mysql:host=$host", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully!";

    // Execute the schema.sql script
    $schema = file_get_contents('schema.sql');
    $pdo->exec($schema);
    echo "Database and tables created successfully!";
} catch (PDOException $e) {
    die("Database error: " . $e->getMessage());
}
?>