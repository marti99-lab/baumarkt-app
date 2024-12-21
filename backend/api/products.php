<?php
header('Content-Type: application/json');
require_once '../config/db.php';

$category = $_GET['category'] ?? null;
$id = $_GET['id'] ?? null;

try {
    if ($id) {
        // Fetch a single product by ID
        $stmt = $conn->prepare("SELECT id, name, image, category, price, availability, discount, online_verfügbar FROM products WHERE id = ?");
        $stmt->execute([$id]);
        $product = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($product) {
            echo json_encode($product);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Product not found']);
        }
    } elseif ($category) {
        // Fetch products for the specified category
        $stmt = $conn->prepare("SELECT id, name, image, category, price, availability, discount, online_verfügbar FROM products WHERE category = ?");
        $stmt->execute([$category]);
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($products);
    } else {
        // Fetch all products
        $stmt = $conn->query("SELECT id, name, image, category, price, availability, discount, online_verfügbar FROM products");
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($products);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to fetch products: ' . $e->getMessage()]);
}
?>
