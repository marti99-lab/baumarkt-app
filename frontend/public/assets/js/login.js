document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(loginForm);

        try {
            const response = await fetch('/baumarkt-app/backend/api/login_api.php', {
                method: 'POST',
                body: formData,
            });

            const result = await response.text();
            console.log('Antwort:', result);

            if (response.ok) {
                messageDiv.textContent = result;
                messageDiv.style.color = 'green';
                setTimeout(() => {
                    window.location.href = 'index.php'; // Weiterleitung nach Login
                }, 1000);
            } else {
                messageDiv.textContent = result;
                messageDiv.style.color = 'red';
            }
        } catch (error) {
            console.error('Fehler:', error);
            messageDiv.textContent = 'Fehler beim Senden der Anfrage.';
            messageDiv.style.color = 'red';
        }
    });
});
