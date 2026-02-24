'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, Grid3x3 } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const STORE_WHATSAPP_NUMBER = '919619617221';
const STORE_PHONE_NUMBER = '+91 96196 17221';

export function StickyActionBar() {
  const [showCategories, setShowCategories] = useState(false);

  const categories = [
    { name: 'All Products', href: '/products' },
    { name: 'Transparent Cases', href: '/products?category=transparent' },
    { name: 'Designer Covers', href: '/products?category=designer' },
    { name: 'Rugged Protection', href: '/products?category=rugged' },
    { name: 'MagSafe Compatible', href: '/products?category=magsafe' },
    { name: 'Skins', href: '/products?category=skins' },
  ];

  return (
    <>
      {/* Categories Drawer */}
      {showCategories && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowCategories(false)}
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
        />
      )}

      <motion.div
        initial={false}
        animate={{
          bottom: showCategories ? '68px' : '-300px',
        }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 right-0 z-50 bg-white border-t border-border max-h-64 overflow-y-auto sm:hidden"
      >
        <div className="grid grid-cols-2 gap-2 p-4">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              onClick={() => setShowCategories(false)}
              className="px-4 py-3 text-sm font-semibold text-center border border-border rounded-lg hover:bg-secondary transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Sticky Action Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-lg sm:hidden"
      >
        <div className="flex items-center justify-around gap-2 px-4 py-3">
          {/* WhatsApp Chat */}
          <motion.a
            href={`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=Hi! I'd like to browse your product catalog.`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-1 flex-1 px-3 py-2 rounded-lg hover:bg-green-50 transition-colors"
          >
            <div className="bg-green-500 text-white p-2 rounded-full">
              <MessageCircle size={20} />
            </div>
            <span className="text-xs font-semibold text-gray-700">Chat</span>
          </motion.a>

          {/* Call Store */}
          <motion.a
            href={`tel:${STORE_PHONE_NUMBER}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-1 flex-1 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="bg-blue-500 text-white p-2 rounded-full">
              <Phone size={20} />
            </div>
            <span className="text-xs font-semibold text-gray-700">Call</span>
          </motion.a>

          {/* Categories Toggle */}
          <motion.button
            onClick={() => setShowCategories(!showCategories)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-1 flex-1 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="bg-gray-800 text-white p-2 rounded-full">
              <Grid3x3 size={20} />
            </div>
            <span className="text-xs font-semibold text-gray-700">Explore</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Padding for sticky bar */}
      <div className="h-20 sm:h-0" />
    </>
  );
}
