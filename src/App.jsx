import { useState } from 'react'
import { Route, Routes } from 'react-router';

import { ALBUMS } from "./data/albums.js";
import './App.css'
import Navbar from "./components/Navbar";
import CatalogPage from './pages/CatalogPage';
import CartDrawer from './components/CartDrawer.jsx';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCount = 10;

  const handleAddToCart = (product, quantity = 1) => {
    const quantityToAdd = Math.max(
      1, 
      Math.min(Number(quantity) || 1, 
      product.stock
    ));

    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);

      if (!existingItem) {
        return [...currentCart, { ...product, quantity: quantityToAdd }];
      }

      return currentCart.map((item) => 
        item.id == product.id
          ? {
            ...item,
            quantity: Math.min(item.stock, item.quantity + quantityToAdd),
          }
          : item,
      );
    });
  };

  const handleUpdateQuantity = (productId, change) => {
    setCart((currentCart) => currentCart.map((item) => {
      if (item.id !== productId) return item;

      const updateQuantity = Math.min(item.stock, item.quantity + change);

      return { ...item, quantity: updateQuantity };
    }).filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId),
    );
  };

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
