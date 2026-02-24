'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { openWhatsAppChat } from '@/lib/whatsapp';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    vibe: string;
    color: string;
    rating: number;
    reviews: number;
    inStock: boolean;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Link href={`/products/${product.id}`}>
      <motion.div
        whileHover={{ 
          y: -6,
          boxShadow: '0 16px 32px rgba(0, 0, 0, 0.08)'
        }}
        transition={{ duration: 0.25 }}
        className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 cursor-pointer"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-100">
          <motion.img
            src={product.image}
            alt={product.name}
            onLoad={() => setIsImageLoaded(true)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.25 }}
            className={`aspect-square w-full object-cover ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Skeleton Loader */}
          {!isImageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-200" />
          )}

          {/* Wishlist Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute right-2 top-2 rounded-full bg-white p-1.5 shadow-sm transition-all hover:shadow-md"
          >
            <Heart
              size={16}
              className={`${
                isWishlisted
                  ? 'fill-red-500 text-red-500'
                  : 'text-gray-600'
              }`}
            />
          </motion.button>

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <p className="text-sm font-bold text-white">Out of Stock</p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col p-3 sm:p-4">
          {/* Title and Color */}
          <div className="mb-2">
            <h3 className="text-sm sm:text-base font-bold text-black line-clamp-1">
              {product.name}
            </h3>
            <p className="text-xs text-gray-600 mt-0.5">{product.color}</p>
          </div>

          {/* Rating */}
          {product.reviews > 0 && (
            <div className="flex items-center gap-1 mb-2">
              <div className="flex gap-0.5">
                {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
                  <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs text-gray-600">({product.reviews})</span>
            </div>
          )}

          {/* Price and CTA */}
          <div className="flex items-end justify-between gap-2 mt-auto">
            <span className="text-lg sm:text-xl font-black text-black">
              ₹{product.price.toFixed(0)}
            </span>
            <motion.button
              whileHover={product.inStock ? { scale: 1.05 } : {}}
              whileTap={product.inStock ? { scale: 0.95 } : {}}
              onClick={(e) => {
                e.preventDefault();
                if (product.inStock) {
                  openWhatsAppChat({
                    productName: product.name,
                    color: product.color,
                  });
                }
              }}
              disabled={!product.inStock}
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-bold flex items-center gap-1 disabled:opacity-50 transition-colors"
            >
              <MessageCircle size={14} />
              <span className="hidden sm:inline">Order</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
