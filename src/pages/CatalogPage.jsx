import { useState } from "react";
import AlbumCard from "../components/AlbumCard.jsx";

function CatalogPage({ albums = [], onAddToCart }) {
    const genres = ["All", "Jazz", "Electronic", "Rock", "Classical"];
    const [selectedGenre, setSelectedGenre] = useState("All");

    const filteredAlbums = 
        selectedGenre === "All" 
        ? albums
        : albums.filter((album) => album.genre === selectedGenre);

    return (
        <div className="catalog-container">
            <div className="hero-wrapper">
                <header className="catalog-hero">
                    <h1>Most Popular Retro Music</h1>
                    <p>Keep listening to the medium you know</p>
                </header>
                <div className="filter-row">
                    {genres.map((genre) => (
                        <button
                            key={genre}
                            type="button"
                            className={`filter-pill ${selectedGenre === genre ? "active" : ""}`}
                            onClick={() => setSelectedGenre(genre)}
                        >
                            {genre}
                        </button>
                    ))}
                </div>
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