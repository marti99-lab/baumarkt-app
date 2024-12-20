<?php
require_once '../config/includes.php';

if (isUserLoggedIn()) {
    redirect('index.html');
}

?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrierung</title>
    <link rel="stylesheet" href="assets/css/reg-styles.css">
    <script defer src="assets/js/register.js"></script>
</head>
<body>
    <?php include '../includes/header.php'; ?>
    <main>
        <section id="register-section">
            <h2>Erstellen Sie ein Konto</h2>
            <form id="register-form">
                <input type="text" id="username" name="username" placeholder="Benutzername" required>
                <input type="email" id="email" name="email" placeholder="E-Mail" required>
                <input type="password" id="password" name="password" placeholder="Passwort" required>
                <button type="submit">Registrieren</button>
            </form>
            <div id="message"></div>
            <p>Haben Sie schon ein Konto? <a href="login.php">Hier anmelden</a>.</p>
        </section>
    </main>
    <?php include '../includes/footer.php'; ?>
</body>
</html>
