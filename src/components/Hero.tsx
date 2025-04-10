import React from 'react';

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Shopping"
        />
        <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          New Season Arrivals
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
          Discover our latest collection of premium fashion items. From casual wear to elegant pieces,
          find your perfect style with us.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="inline-block bg-white py-3 px-8 border border-transparent rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;