'use client';

import { Heart, Share2, MessageCircle, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { openWhatsAppChat } from '@/lib/whatsapp';

interface Product {
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  vibe: string;
  colors: string[];
  iphoneModels: string[];
  inStock: boolean;
  stock: number;
}

interface ProductDetailsProps {
  product: Product;
  selectedColor: string;
  selectedModel: string;
  quantity: number;
  isWishlisted: boolean;
  onColorChange: (color: string) => void;
  onModelChange: (model: string) => void;
  onQuantityChange: (quantity: number) => void;
  onWishlist: () => void;
}

export function ProductDetails({
  product,
  selectedColor,
  selectedModel,
  quantity,
  isWishlisted,
  onColorChange,
  onModelChange,
  onQuantityChange,
  onWishlist,
}: ProductDetailsProps) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="flex flex-col justify-between">
      {/* Header */}
      <div>
        <motion.div 
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-foreground border border-border/50"
          whileHover={{ scale: 1.05 }}
        >
          <span className="h-2 w-2 rounded-full bg-primary" />
          {product.vibe}
        </motion.div>

        <h1 className="text-3xl font-black text-foreground lg:text-4xl tracking-tight">{product.name}</h1>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-3">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-base ${i < Math.floor(product.rating) ? '⭐' : '☆'}`}
              >
                {i < Math.floor(product.rating) ? '★' : '☆'}
              </span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-medium">
            {product.rating} · {product.reviewCount} reviews
          </span>
        </div>

        {/* Pricing */}
        <div className="mt-6 flex items-center gap-3">
          <span className="text-3xl font-black text-foreground">${product.price}</span>
          <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
          {discount > 0 && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
              -{discount}%
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className="mt-4">
          {product.inStock ? (
            <p className="flex items-center gap-2 text-sm text-green-600">
              <Check size={16} />
              In Stock ({product.stock} available)
            </p>
          ) : (
            <p className="text-sm text-destructive">Out of Stock</p>
          )}
        </div>
      </div>

      {/* Options */}
      <div className="my-8 space-y-6 border-y border-border py-8">
        {/* Color Selection */}
        <div>
          <label className="block text-sm font-semibold text-foreground">Color</label>
          <div className="mt-3 flex gap-3">
            {product.colors.map((color) => (
              <motion.button
                key={color}
                onClick={() => onColorChange(color)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  selectedColor === color
                    ? 'bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2 ring-offset-background'
                    : 'bg-secondary text-foreground hover:bg-muted'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {color}
              </motion.button>
            ))}
          </div>
        </div>

        {/* iPhone Model Selection */}
        <div>
          <label className="block text-sm font-semibold text-foreground">iPhone Model</label>
          <div className="mt-3 space-y-2">
            {product.iphoneModels.map((model) => (
              <motion.label
                key={model}
                className="flex items-center gap-3 rounded-lg border border-border p-3 cursor-pointer transition-all hover:bg-secondary"
                whileHover={{ x: 4 }}
              >
                <input
                  type="radio"
                  name="model"
                  value={model}
                  checked={selectedModel === model}
                  onChange={(e) => onModelChange(e.target.value)}
                  className="h-4 w-4 cursor-pointer"
                />
                <span className="text-sm font-medium text-foreground">{model}</span>
              </motion.label>
            ))}
          </div>
        </div>

        {/* Quantity Selection */}
        <div>
          <label className="block text-sm font-semibold text-foreground">Quantity</label>
          <div className="mt-3 flex items-center gap-3 rounded-full bg-secondary p-1 border border-border/50">
            <motion.button
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
              className="h-10 w-10 rounded-full text-foreground transition-all duration-200 hover:bg-muted/60"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.85 }}
            >
              −
            </motion.button>
            <span className="flex-1 text-center font-semibold text-foreground">{quantity}</span>
            <motion.button
              onClick={() => onQuantityChange(quantity + 1)}
              className="h-10 w-10 rounded-full text-foreground transition-all duration-200 hover:bg-muted/60"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.85 }}
            >
              +
            </motion.button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <motion.button
          onClick={() => {
            if (product.inStock) {
              openWhatsAppChat({
                productName: product.name,
                phoneModel: selectedModel,
                color: selectedColor,
                quantity: quantity,
              });
            }
          }}
          disabled={!product.inStock}
          className={`relative w-full rounded-full py-4 text-base font-semibold transition-all shadow-sm ${
            product.inStock
              ? 'bg-green-600 text-white hover:shadow-md hover:bg-green-700'
              : 'bg-muted text-muted-foreground cursor-not-allowed'
          }`}
          whileHover={product.inStock ? { scale: 1.02 } : {}}
          whileTap={product.inStock ? { scale: 0.95 } : {}}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-center gap-2">
            <MessageCircle size={20} />
            Order on WhatsApp
          </div>
        </motion.button>

        <div className="grid grid-cols-2 gap-3">
          <motion.button
            onClick={onWishlist}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full border py-3 transition-all shadow-sm duration-200 ${
              isWishlisted
                ? 'bg-primary/10 border-primary text-primary hover:shadow-md'
                : 'bg-background text-foreground hover:bg-secondary'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} className="mx-auto" />
          </motion.button>
          <motion.button
            className="rounded-full border border-border bg-background py-3 transition-all shadow-sm duration-200 hover:bg-secondary hover:shadow-md"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 size={20} className="mx-auto text-foreground" />
          </motion.button>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-6 space-y-2 text-sm text-muted-foreground">
        <p>✓ Free shipping on orders over $50</p>
        <p>✓ 30-day money-back guarantee</p>
        <p>✓ 1-year warranty included</p>
      </div>
    </div>
  );
}
