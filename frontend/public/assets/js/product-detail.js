document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const apiUrl = `${window.location.origin}/baumarkt-app/backend/api/products.php?id=${productId}`;
    
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

    if (!productId) {
        productTitle.innerText = "Produkt-ID fehlt!";
        return;
    }

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
            productImage.src = `assets/images/${product.image}`;
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
            window.location.href = "index.php";
        });
    }

    // Quantity control
    window.decreaseQuantity = function () {
        const quantityInput = document.getElementById("quantity");
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    };

    window.increaseQuantity = function () {
        const quantityInput = document.getElementById("quantity");
        let currentValue = parseInt(quantityInput.value);
        const maxValue = parseInt(quantityInput.max);
        if (currentValue < maxValue) {
            quantityInput.value = currentValue + 1;
        }
    };

    window.updateQuantity = function () {
        const quantityInput = document.getElementById("quantity");
        if (parseInt(quantityInput.value) > parseInt(quantityInput.max)) {
            quantityInput.value = quantityInput.max;
        } else if (parseInt(quantityInput.value) < parseInt(quantityInput.min)) {
            quantityInput.value = quantityInput.min;
        }
    };
});
