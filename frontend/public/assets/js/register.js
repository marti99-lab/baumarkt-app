document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const messageDiv = document.getElementById('message');

    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Verhindere standardmäßiges Verhalten

        const formData = new FormData(registerForm);

        try {
            const response = await fetch('/baumarkt-app/backend/api/register_api.php', {
                method: 'POST',
                body: formData,
            });

            const result = await response.text();
            console.log('Antwort:', result);

            if (response.ok) {
                messageDiv.textContent = result;
                messageDiv.style.color = 'green';
                registerForm.reset();
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


