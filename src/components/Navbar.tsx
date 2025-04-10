import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, Heart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              className="sm:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="text-2xl font-bold text-gray-900">ShopStyle</div>
          </div>

          <div className="hidden sm:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Shop</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Categories</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Search className="h-6 w-6 text-gray-700" />
            </button>
            <button className="p-2">
              <Heart className="h-6 w-6 text-gray-700" />
            </button>
            <button className="p-2 relative">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              <span className="absolute top-0 right-0 h-5 w-5 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Home</a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Shop</a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Categories</a>
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;