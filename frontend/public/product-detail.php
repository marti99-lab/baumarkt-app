<?php
$pageTitle = "Produktdetails"; 
include "../../components/header.php";
include "../../components/footer.php";
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produktdetails</title>
    <link rel="stylesheet" href="assets/css/styles.css">
    <script defer src="assets/js/product-detail.js"></script>
</head>
<body>
    <header>
        <h1>Ihr Fix & Fertig Baumarkt – Lösungen für Haus & Garten!</h1>
        <nav>
            <ul>
                <li><a href="index.php#produkte">Produkte</a></li>
                <li><a href="index.php#rabatte">Rabattaktionen</a></li>
                <li><a href="index.php#register">Register (in Arbeit!)</a></li>
                <li><a href="https://learn-it-bonn.de/">Zurück zur Hauptseite</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <button id="back-button">Zurück</button>
        <section id="product-detail">
            <?php
            // Placeholder for dynamic product details
            echo '<!-- Product details will load here dynamically -->';
            ?>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Martin Rübner. All rights reserved.</p>
    </footer>
</body>
</html>
