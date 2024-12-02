<?php
header('Content-Type: application/json');
require_once '../config/db.php';

$category = $_GET['category'] ?? null;

try {
    if ($category) {
        $stmt = $pdo->prepare("SELECT * FROM products WHERE category = ?");
        $stmt->execute([$category]);
    } else {
        $stmt = $pdo->query("SELECT * FROM products");
    }
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Ensure valid JSON output
    echo json_encode($products);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to fetch products: ' . $e->getMessage()]);
}
?>

