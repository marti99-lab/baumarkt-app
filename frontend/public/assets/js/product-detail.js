document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id"); // Get product ID from query params
    const apiUrl = `${window.location.origin}/baumarkt-app/backend/api/products.php?id=${productId}`;
    const productDetailSection = document.getElementById("product-detail");
    const backButton = document.getElementById("back-button");

    // If no product ID is provided, display an error
    if (!productId) {
        productDetailSection.innerHTML = `<p>Produkt-ID fehlt!</p>`;
        return;
    }

    // Fetch product details by ID
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Produkt nicht gefunden");
            }
            return response.json();
        })
        .then((product) => {
            // Render product details
            productDetailSection.innerHTML = `
                <h1>${product.name}</h1>
                <img
                    src="assets/images/${product.image}"
                    alt="${product.name}"
                    style="width: 300px; height: 300px; object-fit: cover; display: block; margin: 20px auto;"
                />
                <p><strong>Kategorie:</strong> ${product.category}</p>
                <p><strong>Preis:</strong> ${product.price}€</p>
                <p><strong>Verfügbarkeit:</strong> ${product.availability}</p>
                <p style="color: ${product.online_verfügbar === "ja" ? "green" : "red"}">
                    ${product.online_verfügbar === "ja" ? "Online verfügbar" : "Online nicht verfügbar"}
                </p>
                ${
                    product.discount > 0
                        ? `<p><strong>Rabatt:</strong> ${product.discount}%</p>`
                        : ""
                }
            `;
        })
        .catch((error) => {
            productDetailSection.innerHTML = `<p>Fehler: ${error.message}</p>`;
        });

    // Back button functionality
    backButton.addEventListener("click", () => {
        window.location.href = "index.html"; // Redirect to main page
    });
});
