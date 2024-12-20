<?php $pageTitle = "Login"; include "components/header.php"; ?>
<main>
    <section id="login-section">
        <h2>Melden Sie sich an</h2>
        <form id="login-form">
            <input type="text" name="username" placeholder="Benutzername" required>
            <input type="password" name="password" placeholder="Passwort" required>
            <button type="submit">Anmelden</button>
        </form>
        <div id="message"></div>
        <p>Haben Sie noch kein Konto? <a href="register.php">Hier registrieren</a>.</p>
    </section>
</main>
<?php include "components/footer.php"; ?>

