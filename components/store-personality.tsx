'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export function StorePersonality() {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in browsing your latest phone case collection. Please share the catalog.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919999999999?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance leading-tight tracking-tight">
            Found a case you like? Order easily on WhatsApp.
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-balance leading-relaxed">
            Message us directly. Get instant assistance, check availability, and place your order within minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold text-lg hover:shadow-lg transition-shadow inline-block"
              >
                Browse All Cases
              </motion.button>
            </Link>
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold text-lg hover:shadow-lg transition-shadow inline-flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
