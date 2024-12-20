<?php $pageTitle = "Registrierung"; include "components/header.php"; ?>
<main>
    <section id="register-section">
        <h2>Erstellen Sie ein Konto</h2>
        <form id="register-form">
            <input type="text" name="username" placeholder="Benutzername" required>
            <input type="email" name="email" placeholder="E-Mail" required>
            <input type="password" name="password" placeholder="Passwort" required>
            <button type="submit">Registrieren</button>
        </form>
        <div id="message"></div>
        <p>Haben Sie schon ein Konto? <a href="login.php">Hier anmelden</a>.</p>
    </section>
</main>
<?php include "components/footer.php"; ?>

