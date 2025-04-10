import React from 'react';
import { ShoppingCart, Search, Menu, Heart } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProductGrid />
      </main>
    </div>
  );
}

export default App;