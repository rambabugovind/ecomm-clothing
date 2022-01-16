import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  // return <HomePage />;
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route
        path="*"
        element={
          <main>
            <p>Oops! There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
