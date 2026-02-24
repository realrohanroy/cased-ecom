'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/product-card';
import ProductFilters from '@/components/product-filters';
import { MobileFiltersDrawer } from '@/components/mobile-filters-drawer';
import Header from '@/components/header';
import Footer from '@/components/footer';

const PRODUCTS = [
  {
    id: 1,
    name: 'Midnight Marble',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=400&h=500&fit=crop',
    vibe: 'Sleek',
    color: 'Black & White',
    rating: 4.8,
    reviews: 342,
    inStock: true,
  },
  {
    id: 2,
    name: 'Sunset Gradient',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop',
    vibe: 'Warm',
    color: 'Orange & Pink',
    rating: 4.9,
    reviews: 521,
    inStock: true,
  },
  {
    id: 3,
    name: 'Ocean Wave',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=500&fit=crop',
    vibe: 'Cool',
    color: 'Blue & Teal',
    rating: 4.7,
    reviews: 289,
    inStock: true,
  },
  {
    id: 4,
    name: 'Forest Green',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1595225476395-b1e99c2f7f79?w=400&h=500&fit=crop',
    vibe: 'Natural',
    color: 'Green',
    rating: 4.6,
    reviews: 198,
    inStock: true,
  },
  {
    id: 5,
    name: 'Rose Gold Blush',
    price: 36.99,
    image: 'https://images.unsplash.com/photo-1511295426395-b7152f800fd1?w=400&h=500&fit=crop',
    vibe: 'Elegant',
    color: 'Rose Gold',
    rating: 4.9,
    reviews: 412,
    inStock: true,
  },
  {
    id: 6,
    name: 'Purple Haze',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=500&fit=crop',
    vibe: 'Cosmic',
    color: 'Purple',
    rating: 4.8,
    reviews: 267,
    inStock: true,
  },
  {
    id: 7,
    name: 'Leather Classic',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=500&fit=crop',
    vibe: 'Premium',
    color: 'Brown',
    rating: 5.0,
    reviews: 589,
    inStock: true,
  },
  {
    id: 8,
    name: 'Clear Crystal',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=400&h=500&fit=crop',
    vibe: 'Minimalist',
    color: 'Clear',
    rating: 4.5,
    reviews: 156,
    inStock: true,
  },
];

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState('newest');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const filteredProducts = PRODUCTS.filter((product) => {
    const colorMatch =
      selectedColors.length === 0 || selectedColors.includes(product.color);
    return colorMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="flex">
          {/* LEFT SIDEBAR - Desktop only */}
          <div className="hidden lg:block w-64 bg-white border-r border-gray-200 pt-6 px-4 h-screen sticky top-14 overflow-y-auto">
            {/* Branding Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-black text-black">All
                <br />
                Cases.</h2>
              <p className="text-xs text-gray-600 mt-1">8 styles. One vibe.</p>
            </div>

            {/* Filters */}
            <ProductFilters
              selectedColors={selectedColors}
              setSelectedColors={setSelectedColors}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>

          {/* MAIN CONTENT */}
          <div className="flex-1 w-full lg:w-auto">
            {/* Mobile Breadcrumbs & Header */}
            <div className="lg:hidden border-b border-gray-200 bg-white sticky top-14 z-30">
              <div className="px-3 py-3 text-xs text-gray-600 space-y-2">
                <div>All Products • Device • All Phones</div>
              </div>
            </div>

            {/* Category Header */}
            <div className="bg-pink-100 border-b border-pink-200 px-3 sm:px-6 lg:px-8 py-3 sm:py-4 sticky top-24 lg:top-14 z-20 flex items-center justify-between gap-4">
              <h1 className="text-lg sm:text-2xl font-bold text-black">
                All Cases
              </h1>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                <span className="text-xs font-bold text-black">Filter</span>
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>

            {/* Products Grid */}
            <div className="px-3 sm:px-6 lg:px-8 py-6">
              {sortedProducts.length > 0 ? (
                <motion.div
                  layout
                  className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
                >
                  {sortedProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.02 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex min-h-96 flex-col items-center justify-center text-center py-12"
                >
                  <p className="text-lg font-medium text-gray-900">
                    No cases found
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Try adjusting your filters to find what you're looking for
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Mobile Filters Drawer */}
      <MobileFiltersDrawer
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
        selectedColors={selectedColors}
        setSelectedColors={setSelectedColors}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
    </>
  );
}
