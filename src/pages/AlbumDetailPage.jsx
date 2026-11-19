import { useState } from "react";
import { Link, useParams } from "react-router";

const AlbumDetailPage = ({ albums, onAddToCart }) => {
    const { albumId } = useParams();
    const [qty, setQty] = useState(1);

    const album = albums.find((p) => p.id === albumId);

    if (!album) {
        return (
            <div className="detail-error">
                <h2>Product Not Found</h2>
                <Link className="btn btn-secondary" to="/">
                    Return
                </Link>
            </div>
        );
    }

    return (
        <div className="detail-container">
            <nav className="breadcrumb">
                <Link to="/">Catalog</Link> &gt; <span>{album.title}</span>
            </nav>

            <div className="detail-grid">
                <img src={album.image} alt={album.title} className="detail-img" />

                <div className="detail-info">
                    <span className="album-category">{album.genre}</span>
                    <h1 className="detail-title">{album.title}</h1>
                    <p className="detail-price">${album.price.toFixed(2)}</p>
                    <p className="detail-desc">{album.description}</p>
                    <div className="stock-tag">
                        {album.stock > 0 ? 
                            `In Stock, ${album.stock} units available` :
                            "Out of Stock"}
                    </div>

                    <div className="detail-actions">
                        <div className="qty-input-group">
                            <label htmlFor="detail-qty">Quantity: </label>
                            <input
                                type="number"
                                id="detail-qty"
                                min="1"
                                max={album.stock}
                                value={qty}
                                onChange={(e) => 
                                    setQty(Math.max(1, parseInt(e.target.value, 10) || 1))
                                }
                            />
                        </div>
                        <button
                            className="btn btn-primary"
                            type="button"
                            disabled={album.stock === 0}
                            onClick={() => onAddToCart(album, qty)}
                        >
                            Add {qty} to cart
                        </button>
                    </div>
                </div>
                <div className="detail-info">
                    <h2 className="detail-header">Record Specifications</h2>
                    <ul className="detail-list">
                        <li>Catalog: {album.specs.catalogNumber}</li>
                        <li>Weight: {album.specs.weight}</li>
                        <li>Speed: {album.specs.speed}</li>
                        <li>Label: {album.specs.label}</li>
                    </ul>
                </div>
                <div className="detail-info">
                    <h2 className="detail-header">Included Tracks</h2>
                    <ul className="detail-list">
                        {album.tracklist.map((track) => (
                            <li key={track}>{track}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AlbumDetailPage;