<?php
$host = 'localhost';
$db = 'd0421c0b';
$user = 'd0421c0b';
$pass = 'kmkNLsGs3D6sSCeeuT2a';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // No output or schema execution here
} catch (PDOException $e) {
    die("Database error: " . $e->getMessage());
}
?>
