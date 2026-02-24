'use client';

import { motion } from 'framer-motion';
import { Heart, Smartphone, MessageCircle, Truck, Store } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Handpicked Designs',
    description: 'We select covers customers love.',
  },
  {
    icon: Smartphone,
    title: 'Perfect iPhone Fit',
    description: 'Every case checked for proper fit.',
  },
  {
    icon: MessageCircle,
    title: 'Quick WhatsApp Support',
    description: 'Get instant help before ordering.',
  },
  {
    icon: Truck,
    title: 'Pan India Delivery',
    description: 'Fast shipping across India.',
  },
  {
    icon: Store,
    title: 'Visit Our Store',
    description: 'Shop in person or order online.',
  },
];

export function WhyOurCases() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-10 sm:mb-12 text-center sm:text-left"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-3 text-balance tracking-tighter">
            Why Shop With Us
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl text-balance font-medium mx-auto sm:mx-0">
            Your trusted retail partner for premium accessories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
                whileHover={{ y: -6 }}
              >
                <motion.div 
                  className="p-6 sm:p-8 rounded-2xl border border-border/60 bg-card transition-all duration-300 h-full flex flex-col items-center text-center"
                  whileHover={{
                    boxShadow: '0 16px 32px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  {/* Icon background circle */}
                  <motion.div 
                    className="mb-6 p-4 rounded-full bg-secondary transition-all duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    <Icon className="w-8 h-8 text-accent transition-colors duration-200" />
                  </motion.div>

                  <h3 className="text-lg font-black text-foreground mb-3 tracking-tight">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground text-balance leading-relaxed flex-grow font-medium">
                    {benefit.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
