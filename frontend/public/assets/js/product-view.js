document.addEventListener("DOMContentLoaded", () => {
    // Get product ID from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (!productId) {
        document.getElementById("product-title").innerText = "Produkt-ID fehlt!";
        return;
    }

    // Dynamically determine the base URL relative to the app's root directory
    const pathParts = window.location.pathname.split('/');
    const appBase = pathParts.slice(0, pathParts.indexOf('baumarkt-app') + 1).join('/');
    const baseUrl = `${window.location.origin}${appBase}`;
    const apiUrl = `${baseUrl}/backend/api/products.php?id=${productId}`;

    // DOM elements
    const productTitle = document.getElementById("product-title");
    const productImage = document.getElementById("product-image");
    const productCategory = document.getElementById("product-category");
    const productDescription = document.getElementById("product-description");
    const availability = document.getElementById("availability");
    const deliveryTime = document.getElementById("delivery-time");
    const shippingInfo = document.getElementById("shipping-info");
    const discountInfo = document.getElementById("discount-info");
    const additionalText = document.getElementById("additional-text");

    // Fetch product details from API
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Produkt nicht gefunden");
            }
            return response.json();
        })
        .then((product) => {
            // Populate product details dynamically
            productTitle.innerText = product.name;
            productImage.src = `${baseUrl}/frontend/public/assets/images/${product.image}`;
            productImage.alt = product.name;
            productCategory.innerText = product.category;
            productDescription.innerText = `Kategorie: ${product.category}`;
            availability.innerText = `Verfügbarkeit: ${product.availability}`;
            deliveryTime.innerText = "Lieferzeit ca.: 3-4 Wochen"; // Static info
            shippingInfo.innerText = "Versandkostenfrei"; // Static info

            if (product.discount > 0) {
                discountInfo.innerText = `Rabatt: ${product.discount}%`;
            } else {
                discountInfo.style.display = "none";
            }

            // Additional description
            additionalText.innerText = product.beschreibung || "Keine weiteren Informationen verfügbar.";
        })
        .catch((error) => {
            productTitle.innerText = `Fehler: ${error.message}`;
            additionalText.innerText = "Bitte versuchen Sie es später erneut.";
            productImage.style.display = "none";
        });

    // Back button functionality
    const backButton = document.getElementById("back-button");
    if (backButton) {
        backButton.addEventListener("click", () => {
            window.history.back();
        });
    }

    // Quantity control functions
    window.decreaseQuantity = function () {
        const quantityInput = document.getElementById("quantity");
        let currentValue = parseInt(quantityInput.value, 10);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    };

    window.increaseQuantity = function () {
        const quantityInput = document.getElementById("quantity");
        let currentValue = parseInt(quantityInput.value, 10);
        const maxValue = parseInt(quantityInput.max, 10);
        if (currentValue < maxValue) {
            quantityInput.value = currentValue + 1;
        }
    };

    window.updateQuantity = function () {
        const quantityInput = document.getElementById("quantity");
        const maxValue = parseInt(quantityInput.max, 10);
        const minValue = parseInt(quantityInput.min, 10);
        const currentValue = parseInt(quantityInput.value, 10);

        if (currentValue > maxValue) {
            quantityInput.value = maxValue;
        } else if (currentValue < minValue) {
            quantityInput.value = minValue;
        }
    };
});
