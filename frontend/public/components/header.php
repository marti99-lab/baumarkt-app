<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle ?? "Baumarkt-App"; ?></title>
    <link rel="stylesheet" href="assets/css/styles.css">

    <?php if ($pageTitle === "Baumarkt-App"): ?>
        <script defer src="assets/js/scripts.js"></script>
    <?php elseif ($pageTitle === "Registrierung"): ?>
        <script defer src="assets/js/register.js"></script>
    <?php elseif ($pageTitle === "Login"): ?>
        <script defer src="assets/js/login.js"></script>
    <?php endif; ?>
</head>
<body>
    <header>
        <h1>Ihr Fix & Fertig Baumarkt – Lösungen für Haus & Garten!</h1>
        <nav>
            <ul>
                <li><a href="./#produkte">Produkte</a></li>
                <?php if ($pageTitle === "Baumarkt-App"): ?>
                    <li><a href="./#rabatte" id="rabatt-link">Rabattaktionen</a></li>
                <?php endif; ?>
                <li><a href="register-page.php">Register</a></li>
                <li><a href="https://learn-it-bonn.de/">Zurück zur Hauptseite</a></li>
            </ul>
        </nav>
    </header>

    <?php if ($pageTitle === "Baumarkt-App"): ?>
        <div id="rabatt-modal" class="modal">
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <h2>Tolle Rabattaktionen mit 25%!</h2>
                <div id="rabatt-list"></div>
            </div>
        </div>
    <?php endif; ?>
