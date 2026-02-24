'use client';

import React from "react"

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useState } from 'react';

interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  vibe: string;
  rating: number;
  reviewCount: number;
}

const relatedProductsData: RelatedProduct[] = [
  {
    id: 'warm-terracotta',
    name: 'Warm Terracotta',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80',
    vibe: 'Warm',
    rating: 4.6,
    reviewCount: 189,
  },
  {
    id: 'cool-glacier',
    name: 'Cool Glacier',
    price: 36.99,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf115e51c?w=500&q=80',
    vibe: 'Cool',
    rating: 4.9,
    reviewCount: 312,
  },
  {
    id: 'premium-cosmic',
    name: 'Premium Cosmic',
    price: 38.99,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&q=80',
    vibe: 'Cosmic',
    rating: 4.7,
    reviewCount: 256,
  },
  {
    id: 'natural-sage',
    name: 'Natural Sage',
    price: 33.99,
    image: 'https://images.unsplash.com/photo-1609269585626-81f2f9b0df42?w=500&q=80',
    vibe: 'Natural',
    rating: 4.5,
    reviewCount: 178,
  },
];

interface RelatedProductsProps {
  currentProductId: string;
  vibe: string;
}

export function RelatedProducts({ currentProductId, vibe }: RelatedProductsProps) {
  const [wishlisted, setWishlisted] = useState<Record<string, boolean>>({});

  const filteredProducts = relatedProductsData.filter(
    (product) => product.id !== currentProductId && product.vibe !== vibe
  );

  const toggleWishlist = (productId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setWishlisted((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <motion.div
      className="mt-16 border-t border-border pt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="mb-8 text-2xl font-bold text-foreground">You Might Also Like</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href={`/products/${product.id}`}>
              <motion.div
                className="group cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-xl bg-secondary">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Wishlist Button */}
                  <motion.button
                    onClick={(e) => toggleWishlist(product.id, e)}
                    className={`absolute right-3 top-3 rounded-full p-2 backdrop-blur transition-all ${
                      wishlisted[product.id]
                        ? 'bg-primary/20 text-primary'
                        : 'bg-background/50 text-foreground hover:bg-background/80'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart
                      size={18}
                      fill={wishlisted[product.id] ? 'currentColor' : 'none'}
                    />
                  </motion.button>

                  {/* Vibe Badge */}
                  <div className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                    {product.vibe}
                  </div>
                </div>

                {/* Product Info */}
                <div className="mt-4">
                  <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="text-xs">
                          {i < Math.floor(product.rating) ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
                  </div>

                  {/* Price */}
                  <p className="mt-3 text-lg font-bold text-foreground">${product.price}</p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* View All Products */}
      <div className="mt-12 text-center">
        <Link href="/products">
          <motion.button
            className="rounded-lg bg-secondary px-8 py-4 font-semibold text-foreground transition-colors hover:bg-muted"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
