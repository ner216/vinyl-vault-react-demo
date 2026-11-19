import { useState } from 'react'
import { Route, Routes } from 'react-router';

import { ALBUMS } from "./data/albums.js";
import './styles.css'
import Navbar from "./components/Navbar";
import CatalogPage from './pages/CatalogPage';
import CartDrawer from './components/CartDrawer.jsx';
import AlbumDetailPage from './pages/AlbumDetailPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (album, quantity = 1) => {
    const quantityToAdd = Math.max(
      1, 
      Math.min(Number(quantity) || 1, 
      album.stock
    ));

    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === album.id);

      if (!existingItem) {
        return [...currentCart, { ...album, quantity: quantityToAdd }];
      }

      return currentCart.map((item) => 
        item.id == album.id
          ? {
            ...item,
            quantity: Math.min(item.stock, item.quantity + quantityToAdd),
          }
          : item,
      );
    });
  };

  const handleUpdateQuantity = (albumId, change) => {
    setCart((currentCart) => currentCart.map((item) => {
      if (item.id !== albumId) return item;

      const updateQuantity = Math.min(item.stock, item.quantity + change);

      return { ...item, quantity: updateQuantity };
    }).filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (albumId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== albumId),
    );
  };

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <>
      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)}/>
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <CatalogPage albums={ALBUMS} onAddToCart={handleAddToCart}/>
            }
          />
          <Route
            path="/albums/:albumId"
            element={
              <AlbumDetailPage
                albums={ALBUMS}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <CheckoutPage
                cart={cart}
                onClearCart={() => setCart([])}
              />
            }
          />
        </Routes>
      </main>
      <CartDrawer
        isOpen={isCartOpen}
        cart={cart}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
      />
    </>
  )
}

export default App
