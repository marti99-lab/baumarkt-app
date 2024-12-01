<?php
require_once '../config/db.php';

function fetchProducts() {
    global $pdo;
    $stmt = $pdo->query("SELECT * FROM products");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}
?>
