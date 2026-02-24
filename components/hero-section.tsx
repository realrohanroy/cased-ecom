'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  id: number;
  bgColor: string;
  headline: string;
  subheadline: string;
  headlineColor: string;
  bubbleColor: string;
  imageColor: string;
  mobileImage: string;
  desktopImage: string;
}

interface HeroSectionProps {
  onSlideChange?: (slideIndex: number) => void;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    bgColor: 'from-purple-100 via-pink-100 to-rose-100', // Matches the fruit cases background vibe
    headline: 'Textured Perfection',
    subheadline: 'Protect with personality',
    headlineColor: 'text-purple-900',
    bubbleColor: 'bg-white/40',
    imageColor: 'bg-transparent',
    mobileImage: '/hero1-mobile.webp',
    desktopImage: '/hero1-desktop.webp'
  },
  {
    id: 2,
    bgColor: 'from-blue-100 via-cyan-100 to-teal-100', // Matches the pastel textured cases
    headline: 'Delicious Designs',
    subheadline: 'Fresh picks for your phone',
    headlineColor: 'text-teal-900',
    bubbleColor: 'bg-white/40',
    imageColor: 'bg-transparent',
    mobileImage: '/hero2-mobile.webp',
    desktopImage: '/hero2-desktop.webp'
  },
  {
    id: 3,
    bgColor: 'from-gray-50 via-white to-gray-100', // Matches the clean magsafe accessories photo
    headline: 'Magsafe Accessories',
    subheadline: 'Enhance your experience',
    headlineColor: 'text-gray-900',
    bubbleColor: 'bg-black/5',
    imageColor: 'bg-transparent',
    mobileImage: '/hero3-mobile.webp',
    desktopImage: '/hero3-desktop.webp'
  },
];

export function HeroSection({ onSlideChange }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);



  useEffect(() => {
    onSlideChange?.(currentSlide);
  }, [currentSlide, onSlideChange]);

  const handleDotClick = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const dragEnd = e.changedTouches[0].clientX;
    const diff = dragStart - dragEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      } else {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
      }
    }
  };

  const slide = SLIDES[currentSlide];

  return (
    <>
      {/* ANNOUNCEMENT BAR REMOVED - Handled by Header.tsx */}

      {/* HERO SLIDESHOW */}
      <section
        className={`relative w-full bg-gradient-to-br ${slide.bgColor} overflow-hidden`}
        style={{ height: 'clamp(520px, 85vh, 820px)' }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0 flex flex-col"
          >
            {/* FULL-BLEED IMAGE CONTAINER - Full Height */}
            <div 
              className={`w-full h-full overflow-hidden ${slide.imageColor} relative`}
            >
              <picture>
                <source media="(max-width:768px)" srcSet={slide.mobileImage} type="image/webp" />
                <source srcSet={slide.desktopImage} type="image/webp" />
                <img 
                   src={slide.desktopImage} 
                   alt={slide.headline} 
                   className="w-full h-full object-cover object-center" 
                   loading={slide.id === 1 ? "eager" : "lazy"}
                   fetchPriority={slide.id === 1 ? "high" : "auto"}
                />
              </picture>
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Text Overlay (Bottom Aligned, Centered) */}
              <div className="absolute bottom-16 sm:bottom-24 left-0 right-0 p-6 flex flex-col items-center justify-end text-center z-20 h-full pointer-events-none">
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="font-black text-white drop-shadow-lg mb-2 sm:mb-4"
                  style={{ fontSize: 'clamp(2rem, 5vw + 1rem, 4rem)', lineHeight: 1.1 }}
                >
                  {slide.headline}
                </motion.h1>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white/90 font-medium drop-shadow-md max-w-2xl mx-auto"
                  style={{ fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.5rem)' }}
                >
                  {slide.subheadline}
                </motion.p>
              </div>
            </div>


          </motion.div>
        </AnimatePresence>

        {/* SLIDE INDICATOR DOTS */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {SLIDES.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white/90 h-2 w-6 rounded-full'
                  : 'bg-white/40 h-2 w-2 rounded-full hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>
      </section>

      {/* BRAND LOGO STRIP - Horizontal Scrolling */}
      <section className="bg-slate-50 py-8 overflow-hidden">
        <div className="relative flex items-center justify-center gap-12 px-4 whitespace-nowrap animate-scroll-horizontal">
          {['EVANGELION', 'KITTY BUNNY', 'DIESEL', 'COLLAB', 'DESIGNER', 'BRAND'].map(
            (brand, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm font-black text-slate-900 tracking-widest inline-block px-4 py-2 border border-slate-300 rounded-lg bg-white"
              >
                {brand}
              </span>
            )
          )}
          {/* Duplicate for seamless scroll */}
          {['EVANGELION', 'KITTY BUNNY', 'DIESEL', 'COLLAB', 'DESIGNER', 'BRAND'].map(
            (brand, index) => (
              <span
                key={`dup-${index}`}
                className="text-xs sm:text-sm font-black text-slate-900 tracking-widest inline-block px-4 py-2 border border-slate-300 rounded-lg bg-white"
              >
                {brand}
              </span>
            )
          )}
        </div>
      </section>
    </>
  );
}
