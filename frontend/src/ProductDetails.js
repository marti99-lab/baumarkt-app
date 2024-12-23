document.addEventListener("DOMContentLoaded", () => {
    // Get product ID from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    if (!id) {
        document.body.innerHTML = "<p>Produkt-ID fehlt.</p>";
        return;
    }

    // Dynamically determine the base URL relative to the app's root directory
    const pathParts = window.location.pathname.split('/');
    const appBase = pathParts.slice(0, pathParts.indexOf('baumarkt-app') + 1).join('/');
    const baseUrl = `${window.location.origin}${appBase}`;

    // Construct the dynamic API URL
    const apiUrl = `${baseUrl}/backend/api/products.php?id=${id}`;

    console.log("Fetching product details from:", apiUrl); // Debugging

    // Fetch product details by ID
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Produkt nicht gefunden");
            }
            return response.json();
        })
        .then((product) => {
            // Display product details
            const productDetails = `
                <button onclick="history.back()">Zurück</button>
                <h1>${product.name}</h1>
                <img 
                    src="${baseUrl}/frontend/public/assets/images/${product.image}" 
                    alt="${product.name}" 
                    style="width: 300px; height: 300px; object-fit: cover;"
                />
                <p>Kategorie: ${product.category}</p>
                <p>Preis: ${product.price}€</p>
                <p>Verfügbarkeit: ${product.availability}</p>
                <p style="color: ${product.online_verfügbar === "ja" ? "green" : "red"}">
                    ${product.online_verfügbar === "ja" ? "Online verfügbar" : "Online nicht verfügbar"}
                </p>
                ${product.discount > 0 ? `<p>Rabatt: ${product.discount}%</p>` : ""}
            `;
            document.body.innerHTML = productDetails;
        })
        .catch((error) => {
            console.error("Error fetching product:", error);
            document.body.innerHTML = `<p>Fehler beim Laden des Produkts: ${error.message}</p>`;
        });
});
