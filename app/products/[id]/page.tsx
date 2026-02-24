'use client';

import { useState } from 'react';
import { ArrowLeft, Heart, Share2, Check } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductGallery } from '@/components/product-gallery';
import { ProductDetails } from '@/components/product-details';
import { RelatedProducts } from '@/components/related-products';

// Mock product data - in a real app, this would come from a database or API
const products: Record<number, any> = {
  1: {
    id: 1,
    name: 'Midnight Marble',
    price: 34.99,
    originalPrice: 44.99,
    rating: 4.8,
    reviewCount: 342,
    vibe: 'Sleek',
    description:
      'Sleek black and white marble finish. Perfect for those who want to make a sophisticated statement. The Midnight Marble case combines premium materials with timeless elegance.',
    details: [
      'Durable polycarbonate and TPU construction',
      'Wireless charging compatible',
      'Precise cutouts for all ports and speakers',
      'Drop tested up to 12 feet',
      'Scratch and fingerprint resistant finish',
      'Military-grade protection',
    ],
    colors: ['Black & White'],
    iphoneModels: ['iPhone 15 Pro', 'iPhone 15', 'iPhone 14 Pro', 'iPhone 14'],
    images: [
      'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=800&q=80',
      'https://images.unsplash.com/photo-1609269585626-81f2f9b0df42?w=800&q=80',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80',
      'https://images.unsplash.com/photo-1610945415295-d9bbf115e51c?w=800&q=80',
    ],
    inStock: true,
    stock: 34,
  },
  2: {
    id: 2,
    name: 'Sunset Gradient',
    price: 34.99,
    originalPrice: 44.99,
    rating: 4.9,
    reviewCount: 521,
    vibe: 'Warm',
    description:
      'Beautiful sunset gradient with warm orange and pink tones. This case feels inviting and expressive while maintaining premium protection.',
    details: [
      'Soft-touch matte finish',
      'Sustainable material options',
      'Heat-resistant coating',
      'Anti-slip grip',
      'Eco-friendly packaging',
      'Lifetime warranty',
    ],
    colors: ['Orange & Pink'],
    iphoneModels: ['iPhone 15 Pro', 'iPhone 15', 'iPhone 14 Pro', 'iPhone 14'],
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80',
      'https://images.unsplash.com/photo-1609269585626-81f2f9b0df42?w=800&q=80',
      'https://images.unsplash.com/photo-1610945415295-d9bbf115e51c?w=800&q=80',
    ],
    inStock: true,
    stock: 28,
  },
  3: {
    id: 3,
    name: 'Ocean Wave',
    price: 34.99,
    originalPrice: 44.99,
    rating: 4.7,
    reviewCount: 289,
    vibe: 'Cool',
    description: 'Cool blue and teal tones that bring ocean vibes to your phone. Modern, fresh, and undeniably sophisticated.',
    details: [
      'Gradient finish design',
      'Premium tempered glass back',
      'Aluminum frame',
      'Advanced impact absorption',
      'Water-resistant coating',
      'Premium packaging included',
    ],
    colors: ['Blue & Teal'],
    iphoneModels: ['iPhone 15 Pro', 'iPhone 15', 'iPhone 14 Pro', 'iPhone 14'],
    images: [
      'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800&q=80',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80',
      'https://images.unsplash.com/photo-1609269585626-81f2f9b0df42?w=800&q=80',
      'https://images.unsplash.com/photo-1610945415295-d9bbf115e51c?w=800&q=80',
    ],
    inStock: true,
    stock: 45,
  },
  4: {
    id: 4,
    name: 'Forest Green',
    price: 34.99,
    originalPrice: 44.99,
    rating: 4.6,
    reviewCount: 198,
    vibe: 'Natural',
    description: 'Natural green tones inspired by nature. Earthy, calming, and perfectly on-brand.',
    details: [
      'Natural rubber materials',
      'Eco-friendly production',
      'Biodegradable packaging',
      'Drop tested up to 10 feet',
      'Anti-slip texture',
      'Sustainable sourcing',
    ],
    colors: ['Green'],
    iphoneModels: ['iPhone 15 Pro', 'iPhone 15', 'iPhone 14 Pro', 'iPhone 14'],
    images: [
      'https://images.unsplash.com/photo-1595225476933-018e04f9b53f?w=800&q=80',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80',
      'https://images.unsplash.com/photo-1609269585626-81f2f9b0df42?w=800&q=80',
      'https://images.unsplash.com/photo-1610945415295-d9bbf115e51c?w=800&q=80',
    ],
    inStock: true,
    stock: 22,
  },
  5: {
    id: 5,
    name: 'Rose Gold Blush',
    price: 36.99,
    originalPrice: 46.99,
    rating: 4.9,
    reviewCount: 412,
    vibe: 'Elegant',
    description: 'Luxurious rose gold finish with a soft blush tone. Elegant and timeless.',
    details: [
      'Premium rose gold coating',
      'Crystal-grade clarity',
      'Anti-glare technology',
      'Drop tested up to 15 feet',
      'Luxury packaging',
      'VIP customer support',
    ],
    colors: ['Rose Gold'],
    iphoneModels: ['iPhone 15 Pro', 'iPhone 15', 'iPhone 14 Pro', 'iPhone 14'],
    images: [
      'https://images.unsplash.com/photo-1511295426395-b1e99c2f7f79?w=800&q=80',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80',
      'https://images.unsplash.com/photo-1609269585626-81f2f9b0df42?w=800&q=80',
      'https://images.unsplash.com/photo-1610945415295-d9bbf115e51c?w=800&q=80',
    ],
    inStock: true,
    stock: 31,
  },
  6: {
    id: 6,
    name: 'Purple Haze',
    price: 34.99,
    originalPrice: 44.99,
    rating: 4.8,
    reviewCount: 267,
    vibe: 'Cosmic',
    description: 'Vibrant purple cosmic design. Mystical, bold, and totally unique.',
    details: [
      'Cosmic gradient design',
      'Holographic accents',
      'Premium vegan leather',
      'Drop tested up to 12 feet',
      'Cosmic packaging design',
      'Limited edition run',
    ],
    colors: ['Purple'],
    iphoneModels: ['iPhone 15 Pro', 'iPhone 15', 'iPhone 14 Pro', 'iPhone 14'],
    images: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80',
      'https://images.unsplash.com/photo-1609269585626-81f2f9b0df42?w=800&q=80',
      'https://images.unsplash.com/photo-1610945415295-d9bbf115e51c?w=800&q=80',
    ],
    inStock: true,
    stock: 19,
  },
  7: {
    id: 7,
    name: 'Leather Classic',
    price: 44.99,
    originalPrice: 54.99,
    rating: 5.0,
    reviewCount: 589,
    vibe: 'Premium',
    description: 'Premium leather with classic design. Timeless elegance meets modern protection.',
    details: [
      'Genuine premium leather',
      'Italian crafted leather',
      'Handstitched edges',
      'Drop tested up to 20 feet',
      'Lifetime leather warranty',
      'Premium luxury packaging',
    ],
    colors: ['Brown'],
    iphoneModels: ['iPhone 15 Pro', 'iPhone 15', 'iPhone 14 Pro', 'iPhone 14'],
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80',
      'https://images.unsplash.com/photo-1609269585626-81f2f9b0df42?w=800&q=80',
      'https://images.unsplash.com/photo-1610945415295-d9bbf115e51c?w=800&q=80',
    ],
    inStock: true,
    stock: 15,
  },
  8: {
    id: 8,
    name: 'Clear Crystal',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.5,
    reviewCount: 156,
    vibe: 'Minimalist',
    description: 'Crystal clear design that shows off your phone while protecting it. Minimalist and modern.',
    details: [
      'Optical-grade transparent material',
      'UV-resistant clarity',
      'Yellowing-resistant coating',
      'Drop tested up to 10 feet',
      'Minimalist design',
      'Perfect transparency',
    ],
    colors: ['Clear'],
    iphoneModels: ['iPhone 15 Pro', 'iPhone 15', 'iPhone 14 Pro', 'iPhone 14'],
    images: [
      'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=800&q=80',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80',
      'https://images.unsplash.com/photo-1609269585626-81f2f9b0df42?w=800&q=80',
      'https://images.unsplash.com/photo-1610945415295-d9bbf115e51c?w=800&q=80',
    ],
    inStock: true,
    stock: 52,
  },
};

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = parseInt(params.id, 10);
  const product = products[productId];
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedModel, setSelectedModel] = useState(product.iphoneModels[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background py-20">
        <Header />
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-2xl font-bold text-foreground">Product not found</h1>
          <Link href="/products" className="mt-6 inline-block text-primary hover:underline">
            Back to products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-background via-background to-secondary relative overflow-hidden">
      <Header />
      {/* Background Elements - Digital Wallpaper Aesthetic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Abstract blurred shapes */}
        <div 
          className="absolute -top-32 -left-20 opacity-40"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(ellipse at 30% 40%, #00d4ff 0%, transparent 70%)',
            borderRadius: '45% 55% 52% 48% / 48% 45% 55% 52%',
            filter: 'blur(60px)',
          }}
        ></div>
        <div 
          className="absolute top-1/4 right-1/3 opacity-35"
          style={{
            width: '350px',
            height: '350px',
            background: 'radial-gradient(ellipse at 35% 45%, #a77dff 0%, transparent 65%)',
            borderRadius: '40% 60% 45% 55% / 55% 40% 60% 45%',
            filter: 'blur(70px)',
          }}
        ></div>
        <div 
          className="absolute -bottom-20 -right-32 opacity-40"
          style={{
            width: '420px',
            height: '420px',
            background: 'radial-gradient(ellipse at 25% 35%, #00d4ff 0%, transparent 68%)',
            borderRadius: '50% 50% 45% 55% / 48% 52% 48% 52%',
            filter: 'blur(75px)',
          }}
        ></div>
        <div 
          className="absolute top-1/3 -right-24 opacity-30"
          style={{
            width: '300px',
            height: '300px',
            background: 'radial-gradient(ellipse at 40% 50%, #ffa500 0%, transparent 70%)',
            borderRadius: '35% 65% 50% 50% / 50% 50% 50% 50%',
            filter: 'blur(65px)',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Breadcrumb */}
        <nav className="border-b border-border/40 px-4 py-3 backdrop-blur-sm bg-background/50">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground uppercase tracking-tight"
              >
                <ArrowLeft size={16} />
                Back to Products
              </Link>
            </motion.div>
          </div>
        </nav>

        {/* Product Section */}
        <section className="px-4 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <motion.div 
              className="grid gap-8 lg:gap-12 lg:grid-cols-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Gallery */}
              <ProductGallery images={product.images} productName={product.name} />

              {/* Details */}
              <ProductDetails
                product={product}
                selectedColor={selectedColor}
                selectedModel={selectedModel}
                quantity={quantity}
                isWishlisted={isWishlisted}
                onColorChange={setSelectedColor}
                onModelChange={setSelectedModel}
                onQuantityChange={setQuantity}
                onWishlist={() => setIsWishlisted(!isWishlisted)}
              />
            </motion.div>
            <div>
              <h2 className="text-lg font-black text-foreground tracking-tight">Built Different</h2>
              <ul className="mt-4 space-y-3">
                {product.details.map((detail: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={20} className="mt-0.5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <RelatedProducts
          currentProductId={product.id}
          vibe={product.vibe}
        />
      </div>
      <Footer />
    </div>
  );
}
