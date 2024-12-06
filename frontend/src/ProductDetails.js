import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
    const { id } = useParams(); // Get the product ID from the URL
    const navigate = useNavigate(); // For navigation (e.g., back to the product list)
    const [product, setProduct] = useState(null); // State for product details

    useEffect(() => {
        // Fetch product details by ID
        fetch(`http://localhost/baumarkt-app/backend/api/products.php?id=${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Product not found");
                }
                return response.json();
            })
            .then((data) => setProduct(data))
            .catch((error) => console.error("Error fetching product:", error));
    }, [id]);

    if (!product) {
        return <p>Loading...</p>; // Show loading while fetching data
    }

    return (
        <div>
            <button onClick={() => navigate(-1)}>Zurück</button>
            <h1>{product.name}</h1>
            <img
                src={`assets/images/${product.image}`}
                alt={product.name}
                style={{ width: "300px", height: "300px", objectFit: "cover" }}
            />
            <p>Kategorie: {product.category}</p>
            <p>Preis: {product.price}€</p>
            <p>Verfügbarkeit: {product.availability}</p>
            <p
                style={{
                    color: product.online_verfügbar === "ja" ? "green" : "red",
                }}
            >
                {product.online_verfügbar === "ja"
                    ? "Online verfügbar"
                    : "Online nicht verfügbar"}
            </p>
            {product.discount > 0 && <p>Rabatt: {product.discount}%</p>}
        </div>
    );
}

export default ProductDetails;
