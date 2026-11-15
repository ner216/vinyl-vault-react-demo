import { useState } from "react";
import AlbumCard from "../components/AlbumCard.jsx";

function CatalogPage({ albums = [], onAddToCart }) {
    const catagories = ["All", "Jazz", "Electronic", "Rock", "Classical"];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = 
        selectedCategory === "All" 
        ? albums
        : albums.filter((album) => album.category === selectedCategory);

    return (
        <div className="catalog-container">
            <header className="catalog-hero">
                <h1>Most Popular Retro Music</h1>
                <p>Keep listening to the medium you know</p>
            </header>
            <div className="filter-bar">
                {catagories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        className={`filter-pill ${selectedCategory === category ? "active" : ""}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="product-grid">
                {filteredProducts.map((album) => (
                    <AlbumCard
                        key={album.id}
                        product={album}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        </div>
    )
}

export default CatalogPage;