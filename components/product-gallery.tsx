'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const goToPrevious = () => {
    setMainImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setMainImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <motion.div
        className="relative aspect-square w-full overflow-hidden rounded-2xl bg-secondary border border-border/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          key={mainImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full h-full"
        >
          <Image
            src={images[mainImageIndex] || "/placeholder.svg"}
            alt={`${productName} - View ${mainImageIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <motion.button
              onClick={goToPrevious}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 backdrop-blur-md shadow-md transition-shadow duration-200 hover:shadow-lg hover:bg-background"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} className="text-foreground" />
            </motion.button>
            <motion.button
              onClick={goToNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 backdrop-blur-md shadow-md transition-shadow duration-200 hover:shadow-lg hover:bg-background"
              aria-label="Next image"
            >
              <ChevronRight size={24} className="text-foreground" />
            </motion.button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 rounded-full bg-background/80 px-3 py-1.5 text-sm font-medium backdrop-blur">
            {mainImageIndex + 1} / {images.length}
          </div>
        )}
      </motion.div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setMainImageIndex(index)}
              className={`relative aspect-square overflow-hidden rounded-lg border transition-all duration-200 ${
                mainImageIndex === index
                  ? 'ring-2 ring-primary border-primary'
                  : 'border-border/40 opacity-60 hover:opacity-100'
              }`}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}
