<?php
require_once '../config/db.php'; // Datenbankverbindung einbinden

header('Content-Type: text/plain; charset=utf-8'); // Textantwort

try {
    // Nur POST-Anfragen erlauben
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405); // 405 = Method Not Allowed
        echo 'Nur POST-Anfragen sind erlaubt.';
        exit;
    }

    // Eingehende Daten auslesen
    $username = trim($_POST['username'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $password = trim($_POST['password'] ?? '');

    // Eingaben validieren
    if (empty($username) || empty($email) || empty($password)) {
        http_response_code(400); // 400 = Bad Request
        echo 'Alle Felder sind erforderlich.';
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo 'Ungültige E-Mail-Adresse.';
        exit;
    }

    // Passwort hashen
    $passwordHash = password_hash($password, PASSWORD_BCRYPT);

    // Benutzer in die Datenbank einfügen
    $stmt = $pdo->prepare('INSERT INTO users (username, email, password_hash) VALUES (:username, :email, :password_hash)');
    $stmt->execute([
        ':username' => $username,
        ':email' => $email,
        ':password_hash' => $passwordHash,
    ]);

    http_response_code(201); // 201 = Created
    echo 'Registrierung erfolgreich.';
} catch (PDOException $e) {
    // Fehler bei Duplikaten (z. B. Benutzername oder E-Mail existiert bereits)
    if ($e->errorInfo[1] === 1062) {
        http_response_code(409); // 409 = Conflict
        echo 'Benutzername oder E-Mail existiert bereits.';
    } else {
        http_response_code(500); // 500 = Internal Server Error
        echo 'Datenbankfehler: ' . $e->getMessage();
    }
} catch (Exception $e) {
    http_response_code(500); // 500 = Internal Server Error
    echo 'Allgemeiner Fehler: ' . $e->getMessage();
}
?>

