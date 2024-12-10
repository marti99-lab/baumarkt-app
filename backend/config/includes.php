<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Datenbankverbindung einbinden
require_once 'db.php';

// Authentifizierungsfunktionen
require_once '../includes/auth.php';

// Funktion zur einfachen Weiterleitung
function redirect($url) {
    header("Location: $url");
    exit;
}

// Prüfen, ob die Anfrage eine API-Anfrage ist
function isApiRequest() {
    return strpos($_SERVER['REQUEST_URI'], '/api/') !== false;
}

?>
