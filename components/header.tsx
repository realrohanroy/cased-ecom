'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Search, Menu, User, ShoppingCart } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const ANNOUNCEMENTS = [
  { text: 'Browse Our Catalog - Order on WhatsApp', link: 'EXPLORE', href: '/products' },
  { text: 'Same Day Dispatch Available', link: 'PAN INDIA DELIVERY', href: '/products' },
  { text: 'Premium Quality Covers for All Phones', link: 'SHOP NOW', href: '/products' },
  { text: 'Visit Our Store - or Order Online', link: 'CONTACT US', href: '#contact' },
];

interface HeaderProps {
  slideColor?: string;
}

export default function Header({ slideColor }: HeaderProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  
  // Determine header background and text colors
  const textColor = isHome ? 'text-black' : 'text-black';
  const hoverColor = isHome ? 'hover:bg-black/5' : 'hover:bg-gray-100';
  
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const announcementInterval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 3000);

    return () => clearInterval(announcementInterval);
  }, []);
  
  const content = (
    <>
      {/* Announcement Bar - Home Page Only */}
      {isHome && (
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 py-3 px-4 h-11 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentAnnouncement}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center text-white text-xs sm:text-sm font-semibold"
            >
              {ANNOUNCEMENTS[currentAnnouncement].text} |{' '}
              <a
                href={ANNOUNCEMENTS[currentAnnouncement].href}
                className="font-bold underline cursor-pointer hover:opacity-80 transition-opacity"
              >
                {ANNOUNCEMENTS[currentAnnouncement].link}
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* Main Header */}
      <header className={`transition-all duration-300 ${isHome ? 'bg-transparent' : 'sticky top-0 left-0 right-0 z-40 bg-white border-b border-gray-200'}`}>
        <div className="w-full px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Left - Menu & Search */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-1.5 rounded transition-colors ${textColor} ${hoverColor}`}
              >
                <Menu size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-1.5 rounded transition-colors ${textColor} ${hoverColor}`}
              >
                <Search size={20} />
              </motion.button>
            </div>

            {/* Center - Logo */}
            <Link
              href="/"
              className={`text-xl sm:text-2xl font-bold transition-opacity hover:opacity-70 ${textColor}`}
            >
              Cased.
            </Link>

            {/* Right - Profile & Cart */}
            <div className="flex items-center gap-2 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-1.5 rounded transition-colors ${textColor} ${hoverColor}`}
              >
                <User size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-1.5 relative rounded transition-colors ${textColor} ${hoverColor}`}
              >
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </header>
    </>
  );

  return isHome ? (
    <div className="absolute top-0 left-0 right-0 z-50">
      {content}
    </div>
  ) : (
    content
  );
}
