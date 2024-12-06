document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = window.location.origin; // Dynamically gets the base URL
    const apiUrl = `${baseUrl}/baumarkt-app/backend/api/products.php`;
    const categoryButtons = document.querySelectorAll(".category-button");
    const productList = document.getElementById("product-list");
    const rabattModal = document.getElementById("rabatt-modal");
    const rabattList = document.getElementById("rabatt-list");
    const closeButton = document.querySelector(".close-button");
    const rabattLink = document.getElementById("rabatt-link");

    // Function to fetch and display products
    function fetchProducts(category = "Werkzeuge") {
        fetch(`${apiUrl}?category=${encodeURIComponent(category)}`)
            .then((response) => response.json())
            .then((products) => {
                productList.innerHTML = ""; // Clear previous products
                products.forEach((product) => {
                    const productCard = document.createElement("div");
                    productCard.className = "product-card";
                    productCard.innerHTML = `
                        <img src="assets/images/${product.image}" alt="${product.name}" class="product-image" />
                        <h4>${product.name}</h4>
                        <p>Kategorie: ${product.category}</p>
                        <p>Preis: ${product.price}€</p>
                        <p>Verfügbarkeit: ${product.availability}</p>
                        <p style="color: ${product.online_verfügbar === "ja" ? "green" : "red"}">
                            ${product.online_verfügbar === "ja" ? "Online verfügbar" : "Online nicht verfügbar"}
                        </p>
                    `;

                    productCard.addEventListener("click", () => {
                        window.location.href = `${baseUrl}/baumarkt-app/frontend/public/product-detail.html?id=${product.id}`;
                    });

                    productList.appendChild(productCard);
                });
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                productList.innerHTML = `<p>Fehler beim Laden der Produkte: ${error.message}</p>`;
            });
    }

    // Show modal for Rabattaktionen
    rabattLink.addEventListener("click", (event) => {
        event.preventDefault();

        fetch(apiUrl)
            .then((response) => response.json())
            .then((products) => {
                const discountedProducts = products.filter((product) => product.discount > 20);
                rabattList.innerHTML = ""; // Clear previous list

                if (discountedProducts.length > 0) {
                    discountedProducts.forEach((product) => {
                        const productElement = document.createElement("div");
                        productElement.style.display = "flex";
                        productElement.style.alignItems = "center";
                        productElement.style.marginBottom = "10px";

                        productElement.innerHTML = `
                            <img src="assets/images/${product.image}" alt="${product.name}" style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px;">
                            <a href="product-detail.html?id=${product.id}" style="text-decoration: none; color: #0069d9;">
                                ${product.name}
                            </a>
                        `;
                        rabattList.appendChild(productElement);
                    });
                } else {
                    rabattList.innerHTML = `<p>Keine Produkte mit über 20% Rabatt gefunden.</p>`;
                }

                rabattModal.style.display = "block";
            })
            .catch((error) => {
                rabattList.innerHTML = `<p>Fehler beim Laden der Rabattaktionen: ${error.message}</p>`;
            });
    });

    // Close modal functionality
    closeButton.addEventListener("click", () => {
        rabattModal.style.display = "none";
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", (event) => {
        if (event.target === rabattModal) {
            rabattModal.style.display = "none";
        }
    });

    // Add event listeners to category buttons
    categoryButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            categoryButtons.forEach((btn) => btn.classList.remove("active"));

            // Add active class to the clicked button
            button.classList.add("active");

            // Fetch products for the selected category
            const category = button.getAttribute("data-category");
            fetchProducts(category);
        });
    });

    // Fetch products for default category on page load
    fetchProducts();
});

