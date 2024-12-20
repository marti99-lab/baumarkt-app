<?php
// Prüft, ob ein Benutzer eingeloggt ist
function isUserLoggedIn() {
    return isset($_SESSION['user_id']);
}

// Holt den aktuell eingeloggten Benutzer
function getLoggedInUser() {
    return $_SESSION['user_id'] ?? null;
}

// Loggt den Benutzer aus
function logoutUser() {
    session_unset();
    session_destroy();
    redirect('login.php');
}
?>
