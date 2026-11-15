import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import CatalogPage from './pages/CatalogPage';
import { ALBUMS } from "./data/albums.js";
import { Route, Routes } from 'react-router';

function App() {
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
    </>
  )
}

export default App
