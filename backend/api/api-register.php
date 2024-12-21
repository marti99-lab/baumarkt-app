<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include_once '../config/db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Input sanitization and validation
    $username = htmlspecialchars(trim($_POST['username']));
    $email = htmlspecialchars(trim($_POST['email']));
    $password = trim($_POST['password']);

    if (empty($username) || empty($email) || empty($password)) {
        http_response_code(400);
        echo json_encode(["message" => "Bitte füllen Sie alle Felder aus."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["message" => "Ungültige E-Mail-Adresse."]);
        exit;
    }

    if (strlen($password) < 8) {
        http_response_code(400);
        echo json_encode(["message" => "Das Passwort muss mindestens 8 Zeichen lang sein."]);
        exit;
    }

    try {
        // Check if username or email already exists
        $query = "SELECT COUNT(*) FROM users WHERE username = ? OR email = ?";
        $stmt = $conn->prepare($query);
        $stmt->execute([$username, $email]);
        $exists = $stmt->fetchColumn();

        if ($exists > 0) {
            http_response_code(409);
            echo json_encode(["message" => "Benutzername oder E-Mail existiert bereits."]);
            exit;
        }

        // Hash password and insert into database
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
        $insertQuery = "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)";
        $insertStmt = $conn->prepare($insertQuery);
        $insertStmt->execute([$username, $email, $hashedPassword]);

        // Respond with success
        http_response_code(201);
        echo json_encode(["message" => "Erfolgreich registriert!"]);
        exit;
    } catch (PDOException $e) {
        error_log("Database error: " . $e->getMessage());
        http_response_code(500);
        echo json_encode(["message" => "Datenbankfehler."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed."]);
}
?>

