'use client';

import { motion } from 'framer-motion';
import { MapPin, Truck, MessageCircle } from 'lucide-react';

export function StoreInfo() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary py-10 sm:py-14" id="contact">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6 text-center"
        >
          <h2 className="text-lg sm:text-xl font-bold text-muted-foreground uppercase tracking-widest">
            Visit or Order With Confidence
          </h2>
        </motion.div>

        {/* Compact Container */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 rounded-2xl border border-border/60 bg-card p-4 sm:p-5 shadow-sm"
        >
          {/* Location */}
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <MapPin size={22} />
            </div>
            <div className="text-sm font-semibold text-foreground flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              Store in Chandrapur
              <span className="text-[10px] uppercase font-black tracking-wider text-green-700 bg-green-100 px-2 py-0.5 rounded-full w-fit">
                Open Today
              </span>
            </div>
          </div>

          <div className="hidden sm:block h-8 w-px bg-border/60"></div>

          {/* Delivery */}
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-100 p-2 text-blue-600">
              <Truck size={22} />
            </div>
            <div className="text-sm font-semibold text-foreground">
              Pan India Delivery
            </div>
          </div>

          <div className="hidden md:block h-8 w-px bg-border/60"></div>

          {/* WhatsApp / Emphasis */}
          <a
            href="https://wa.me/919619617221"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-50 hover:bg-green-100 border border-green-200 transition-colors px-4 py-2 rounded-xl group w-full sm:w-auto mt-2 sm:mt-0 justify-center"
          >
            <div className="rounded-full bg-green-500 p-1.5 text-white shadow-sm group-hover:scale-110 transition-transform">
              <MessageCircle size={18} className="fill-current" />
            </div>
            <span className="text-sm font-bold text-green-800">
              WhatsApp Ordering
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
