import ProductDetails from "./ProductDetails";

function App() {
    const [products, setProducts] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [discounts, setDiscounts] = useState([]);
    const [filter, setFilter] = useState(""); // Filter state

    // Fetch products from the backend
    useEffect(() => {
        fetch("/backend/api/products.php")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
                setDiscounts(data.filter((product) => product.discount > 0));
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    // Add a product to the wishlist
    const addToWishlist = (product) => {
        if (!wishlist.find((item) => item.id === product.id)) {
            const updatedWishlist = [...wishlist, product];
            setWishlist(updatedWishlist);
        }
    };

    // Filter products by category or name
    const filteredProducts = products.filter(
        (product) =>
            filter === "" ||
            product.category.toLowerCase().includes(filter.toLowerCase()) ||
            product.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Router>
            <Routes>
                {/* Home route for product list */}
                <Route
                    path="/"
                    element={
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
                                {/* Produkte Section */}
                                <section id="produkte">
                                    <h2>Produkte</h2>
                                    <input
                                        type="text"
                                        placeholder="Filter by category or name"
                                        value={filter}
                                        onChange={(e) => setFilter(e.target.value)}
                                    />
                                    {filteredProducts.length > 0 ? (
                                        <div className="product-list">
                                            {filteredProducts.map((product) => (
                                                <Link
                                                    to={`/product/${product.id}`}
                                                    key={product.id}
                                                    state={product}
                                                    style={{ textDecoration: "none", color: "inherit" }}
                                                >
                                                    <div className="product-card">
                                                        <img
                                                            src={`assets/images/${product.image}`}
                                                            alt={product.name}
                                                            className="product-image"
                                                        />
                                                        <h3>{product.name}</h3>
                                                        <p>Kategorie: {product.category}</p>
                                                        <p>Preis: {product.price}€</p>
                                                        <p
                                                            style={{
                                                                color: product.online_verfügbar === "ja" ? "green" : "red",
                                                            }}
                                                        >
                                                            {product.online_verfügbar === "ja"
                                                                ? "Online verfügbar"
                                                                : "Online nicht verfügbar"}
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        <p>Keine Produkte gefunden.</p>
                                    )}
                                </section>

                                {/* Wunschliste Section */}
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

                                {/* Rabattaktionen Section */}
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
                    }
                />

                {/* Product Detail Page */}
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </Router>
    );
}

export default App;



