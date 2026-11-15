import { useState } from "react";
import AlbumCard from "../components/AlbumCard.jsx";

function CatalogPage({ albums = [], onAddToCart }) {
    const categories = ["All", "Jazz", "Electronic", "Rock", "Classical"];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredAlbums = 
        selectedCategory === "All" 
        ? albums
        : albums.filter((album) => album.genre === selectedCategory);

    return (
        <div className="catalog-container">
            <header className="catalog-hero">
                <h1>Most Popular Retro Music</h1>
                <p>Keep listening to the medium you know</p>
            </header>
            <div className="filter-bar">
                {categories.map((category) => (
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
            <div className="album-grid">
                {filteredAlbums.map((album) => (
                    <AlbumCard
                        key={album.id}
                        album={album}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        </div>
    )
}

export default CatalogPage;