<?php
require_once '../config/db.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $username = trim($data['username'] ?? '');
    $password = trim($data['password'] ?? '');

    if (empty($username) || empty($password)) {
        http_response_code(400);
        echo json_encode(['message' => 'Benutzername und Passwort erforderlich.']);
        exit;
    }

    try {
        // Benutzer abrufen
        $stmt = $pdo->prepare('SELECT id, password_hash FROM users WHERE username = :username');
        $stmt->execute([':username' => $username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password_hash'])) {
            $_SESSION['user_id'] = $user['id'];
            http_response_code(200);
            echo json_encode(['message' => 'Login erfolgreich.']);
        } else {
            http_response_code(401);
            echo json_encode(['message' => 'Ungültige Anmeldedaten.']);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['message' => 'Datenbankfehler: ' . $e->getMessage()]);
    }
}
?>
