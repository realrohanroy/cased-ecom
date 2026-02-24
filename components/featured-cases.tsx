'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Scalable architecture for adding featured collections easily
interface FeaturedCollectionItem {
  id: string;
  title: string;
  subtitle?: string;
  imageLabel: string;
  imageUrl: string;
  link: string;
  theme: {
    bg: string;
    text: string;
    buttonBg: string;
    buttonText: string;
    labelBg: string;
    labelText: string;
  };
}

const FEATURED_COLLECTIONS: FeaturedCollectionItem[] = [
  {
    id: 'everyday-protection',
    title: 'Everyday Protection with a Kick',
    imageLabel: '01',
    imageUrl: '/placeholder.jpg',
    link: '/products?category=protection',
    theme: {
      bg: 'bg-[#FCE154]', // Casetify Yellow
      text: 'text-black',
      buttonBg: 'bg-transparent border border-black',
      buttonText: 'text-black hover:bg-black hover:text-[#FCE154]',
      labelBg: 'bg-black',
      labelText: 'text-white',
    },
  },
  // {
  //   id: 'chromatic-forms',
  //   title: 'CHROMATIC: FORMS & HUES',
  //   subtitle: 'New Artist Collaboration',
  //   imageLabel: '02',
  //   imageUrl: '/placeholder.jpg',
  //   link: '/products?category=collab',
  //   theme: {
  //     bg: 'bg-[#2B5CA6]', // Casetify Blue
  //     text: 'text-white',
  //     buttonBg: 'bg-transparent border border-white',
  //     buttonText: 'text-white hover:bg-white hover:text-[#2B5CA6]',
  //     labelBg: 'bg-black',
  //     labelText: 'text-[#FCE154]', // Yellow text inside black label
  //   },
  // },
  {
    id: 'wear-your-phone',
    title: 'Wear Your Phone: Hands-Free with Straps & Charms',
    imageLabel: '02',
    imageUrl: '/placeholder.jpg',
    link: '/products?category=accessories',
    theme: {
      bg: 'bg-[#F9C3D3]', // Pinkish background
      text: 'text-black',
      buttonBg: 'bg-transparent border border-black',
      buttonText: 'text-black hover:bg-black hover:text-[#F9C3D3]',
      labelBg: 'bg-black',
      labelText: 'text-white',
    },
  },
  // {
  //   id: 'best-choice',
  //   title: 'The Best Choice for Everyday Protection',
  //   imageLabel: '03',
  //   imageUrl: '/placeholder.jpg',
  //   link: '/products?category=protection',
  //   theme: {
  //     bg: 'bg-[#27A768]', // Green background
  //     text: 'text-black',
  //     buttonBg: 'bg-transparent border border-black',
  //     buttonText: 'text-black hover:bg-black hover:text-[#27A768]',
  //     labelBg: 'bg-black',
  //     labelText: 'text-[#FCE154]',
  //   },
  // },
];

export function FeaturedCases() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tighter">
            Featured Collection
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {FEATURED_COLLECTIONS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <Link href={item.link} className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] bg-secondary overflow-hidden block">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </Link>
              
              {/* Content Section (Solid Color Bar) */}
              <div className={`p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 flex-grow transition-colors duration-300 ${item.theme.bg} ${item.theme.text}`}>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-[10px] font-black tracking-widest px-2.5 py-0.5 rounded-full ${item.theme.labelBg} ${item.theme.labelText}`}>
                      {item.imageLabel}
                    </span>
                    {item.subtitle && (
                      <span className="text-sm font-bold opacity-90 uppercase tracking-widest">{item.subtitle}</span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-balance leading-none mt-3">
                    {item.title}
                  </h3>
                </div>
                
                <div className="shrink-0 pt-2 sm:pt-0">
                  <Link href={item.link}>
                    <button className={`px-6 py-2.5 rounded-full font-bold text-sm transition-colors duration-200 ${item.theme.buttonBg} ${item.theme.buttonText}`}>
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
