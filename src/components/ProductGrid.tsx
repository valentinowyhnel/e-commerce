import React from 'react';
import { Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    name: 'Denim Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    name: 'Leather Sneakers',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    name: 'Summer Dress',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 5,
    name: 'Casual Backpack',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 6,
    name: 'Sunglasses',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
];

const ProductGrid = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-w-4 aspect-h-5 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] object-cover object-center group-hover:opacity-75 transition-opacity"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">${product.price}</p>
              </div>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;