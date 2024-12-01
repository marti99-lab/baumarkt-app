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
            .then((data) => {
                setProducts(data);
                const discounted = data.filter((product) => product.discount > 0);
                setDiscounts(discounted);
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    // Add to wishlist
    const addToWishlist = (product) => {
        if (!wishlist.find((item) => item.id === product.id)) {
            setWishlist([...wishlist, product]);
        }
    };

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
                        <div id="product-list">
                            {products.map((product) => (
                                <div className="product-card" key={product.id}>
                                    <h3>{product.name}</h3>
                                    <p>Kategorie: {product.category}</p>
                                    <p>Preis: {product.price}€</p>
                                    <p>Verfügbarkeit: {product.availability}</p>
                                    {product.discount > 0 && <p>Rabatt: {product.discount}%</p>}
                                    <button onClick={() => addToWishlist(product)}>
                                        Zur Wunschliste hinzufügen
                                    </button>
                                </div>
                            ))}
                        </div>
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
                                    <strong>{item.name}</strong> - {item.price}€ (-{item.discount}%)
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Keine aktuellen Rabattaktionen verfügbar.</p>
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;
