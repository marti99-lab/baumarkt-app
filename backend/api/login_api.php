<?php
require_once '../config/db.php';
session_start();

header('Content-Type: text/plain; charset=utf-8');

try {
    // Nur POST-Anfragen erlauben
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405); // 405 = Method Not Allowed
        echo 'Nur POST-Anfragen sind erlaubt.';
        exit;
    }

    // Eingehende Daten auslesen
    $username = trim($_POST['username'] ?? '');
    $password = trim($_POST['password'] ?? '');

    // Eingaben validieren
    if (empty($username) || empty($password)) {
        http_response_code(400); // 400 = Bad Request
        echo 'Benutzername und Passwort erforderlich.';
        exit;
    }

    // Benutzer suchen
    $stmt = $pdo->prepare('SELECT id, password_hash FROM users WHERE username = :username');
    $stmt->execute([':username' => $username]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password_hash'])) {
        $_SESSION['user_id'] = $user['id'];
        http_response_code(200); // 200 = OK
        echo 'Login erfolgreich.';
    } else {
        http_response_code(401); // 401 = Unauthorized
        echo 'Ungültige Anmeldedaten.';
    }
} catch (PDOException $e) {
    http_response_code(500); // 500 = Internal Server Error
    echo 'Datenbankfehler: ' . $e->getMessage();
} catch (Exception $e) {
    http_response_code(500);
    echo 'Allgemeiner Fehler: ' . $e->getMessage();
}
?>
