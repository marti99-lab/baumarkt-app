<?php
// Include database configuration
require_once '../config/db.php';

header('Content-Type: application/json');

try {
    // Query to fetch all products
    $stmt = $pdo->query("SELECT * FROM products");
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($products) {
        // Output the products as JSON
        echo json_encode($products);
    } else {
        // Handle the case where no products are found
        echo json_encode(['message' => 'No products found in the database.']);
    }
} catch (PDOException $e) {
    // Output error message
    echo json_encode(['error' => 'Database query failed: ' . $e->getMessage()]);
}
?>
