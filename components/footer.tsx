'use client';

import { motion } from 'framer-motion';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Cased.</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Premium iPhone cases designed for those who refuse to blend in.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-background/70 hover:text-background transition-colors">
                  All Cases
                </Link>
              </li>
              <li>
                <Link href="/products?sort=newest" className="text-background/70 hover:text-background transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/products?sort=highest-rated" className="text-background/70 hover:text-background transition-colors">
                  Trending
                </Link>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Sale
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Ordering */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">How to Order</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-background/70 hover:text-background transition-colors">
                  Browse Catalog
                </Link>
              </li>
              <li>
                <a href="https://wa.me/919619617221?text=Hi! I'd like to order." target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">
                  Order on WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://www.instagram.com/mohit.accessories.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>Instagram</span>
              </a>
              <a
                href="https://wa.me/919619617221?text=Hi!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors group"
              >
                <MessageCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://maps.app.goo.gl/wSb2T2D7Wy2mk6L89"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors group"
              >
                <MapPin className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>Visit us</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/70">
          <p>&copy; 2024 Cased. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
