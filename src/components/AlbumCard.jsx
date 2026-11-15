import { Link } from "react-router";

const AlbumCard = ({ album, onAddToCart }) => {
    if (!album) return null;

    return (
        <article className="album-card">
            <Link className="album-img-link" to={`/albums/${album.id}`}>
                <img
                    className="album-image"
                    src={album.image}
                    alt={album.title}
                    loading="lazy"
                />
            </Link>
            <div className="album-body">
                <span className="album-category">
                    {album.category}
                </span>
                <h3 className="album-title">
                    <Link to={`/albums/${album.id}`}>{album.title}</Link>
                </h3>
                <p className="album-price">
                    $ {typeof album.price === "number" ? album.price.toFixed(2) : "Contact For Price"}
                </p>
                <button 
                    className="btn btn-secondary btn-block"
                    type="button"
                    onClick={() => onAddToCart(album)}
                >
                    Add to Cart
                </button>
            </div>
        </article>
    )
}

export default AlbumCard;