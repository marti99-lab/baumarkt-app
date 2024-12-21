<?php
$host = 'localhost';
$db = 'd0421c0b';
$user = 'd0421c0b';
$pass = 'kmkNLsGs3D6sSCeeuT2a';

try {
    $conn = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database error: " . $e->getMessage());
}
?>
