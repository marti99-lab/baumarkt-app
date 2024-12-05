document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = window.location.origin; // Dynamically gets the base URL
    const apiUrl = `${baseUrl}/baumarkt-app/backend/api/products.php`;
    const categoryButtons = document.querySelectorAll(".category-button");
    const productList = document.getElementById("product-list");

    // Function to fetch and display products
    function fetchProducts(category = "Werkzeuge") {
        fetch(`${apiUrl}?category=${encodeURIComponent(category)}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((products) => {
                productList.innerHTML = ""; // Clear previous products
                products.forEach((product) => {
                    const productCard = document.createElement("div");
                    productCard.className = "product-card";
                    productCard.innerHTML = `
                        <img src="assets/images/${product.image}" alt="${product.name}" class="product-image">
                        <h4>${product.name}</h4>
                        <p>Preis: ${product.price}€</p>
                        <p>Verfügbarkeit: ${product.availability}</p>
                        ${
                            product.discount > 0
                                ? `<p>Rabatt: ${product.discount}%</p>`
                                : ""
                        }
                    `;
                    productList.appendChild(productCard);
                });
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                productList.innerHTML = `<p>Fehler beim Laden der Produkte: ${error.message}</p>`;
            });
    }

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
    fetchProducts("Werkzeuge");
});
