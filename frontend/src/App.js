import React, { useState, useEffect } from "react";

function App() {
    const [products, setProducts] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [discounts, setDiscounts] = useState([]);

    // Fetch products from the backend
    useEffect(() => {
        fetch("http://localhost/backend/api/products.php")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                return response.json();
            })
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    // Fetch wishlist (mock for now)
    useEffect(() => {
        setWishlist([
            { id: 1, name: "Bohrmaschine", category: "Werkzeuge" },
            { id: 2, name: "Schraubenzieher", category: "Werkzeuge" },
        ]);
    }, []);

    // Fetch discounts (mock for now)
    useEffect(() => {
        setDiscounts([
            { id: 1, name: "Hochdruckreiniger", price: "120.00", discount: 20 },
            { id: 2, name: "Holzschutzmittel", price: "30.00", discount: 15 },
        ]);
    }, []);

    return (
        <div>
            <header>
                <h1>Fix & Fertig Baumarkt</h1>
                <nav>
                    <ul>
                        <li><a href="#produkte">Produkte</a></li>
                        <li><a href="#wunschliste">Wunschliste</a></li>
                        <li><a href="#rabatte">Rabattaktionen</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="produkte">
                    <h2>Produkte</h2>
                    {products.length > 0 ? (
                        <ul>
                            {products.map((product) => (
                                <li key={product.id}>
                                    <strong>{product.name}</strong> - {product.price}€<br />
                                    Kategorie: {product.category} | Verfügbarkeit: {product.availability} | Rabatt: {product.discount}%
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Produkte werden geladen...</p>
                    )}
                </section>
                <section id="wunschliste">
                    <h2>Wunschliste</h2>
                    {wishlist.length > 0 ? (
                        <ul>
                            {wishlist.map((item) => (
                                <li key={item.id}>
                                    {item.name} ({item.category})
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Wunschliste ist leer.</p>
                    )}
                </section>
                <section id="rabatte">
                    <h2>Rabattaktionen</h2>
                    {discounts.length > 0 ? (
                        <ul>
                            {discounts.map((item) => (
                                <li key={item.id}>
                                    {item.name} - {item.price}€ (-{item.discount}%)
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Keine Rabattaktionen verfügbar.</p>
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;
