<header>
    <h1>Ihr Fix & Fertig Baumarkt</h1>
    <nav>
        <ul>
            <li><a href="index.php#produkte">Produkte</a></li>
            <li><a href="index.php#rabatte">Rabattaktionen</a></li>
            <?php if (isset($_SESSION['user_id'])): ?>
                <li><a href="../backend/api/logout.php">Logout</a></li>
            <?php else: ?>
                <li><a href="register.html">Register</a></li>
                <li><a href="login.html">Login</a></li>
            <?php endif; ?>
            <li><a href="https://learn-it-bonn.de/">Zurück zur Hauptseite</a></li>
        </ul>
    </nav>
</header>
