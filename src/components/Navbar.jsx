import React from "react";
import { Link } from "react-router";

const Navbar = ({ cartCount, onOpenCart }) => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand-logo" to="/">
          <img src="/favicon.png" alt="brand logo" className="brand-logo-img"/> Vinyl Vault
        </Link>
        <nav className="nav-actions">
          <Link className="nav-link" to="/">
            Catalog
          </Link>
          <button
            type="button"
            className="btn-cart-badge"
            onClick={onOpenCart}
            aria-label={`Shipping cart with ${cartCount} items`}
          >
            Cart
            {cartCount > 0 && <span className="badge-pill">{cartCount}</span>}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;