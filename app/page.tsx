'use client';

import { useState } from 'react';
import Header from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { FeaturedCases } from '@/components/featured-cases';

import { WhyOurCases } from '@/components/why-our-cases';
import { StorePersonality } from '@/components/store-personality';
import { StoreInfo } from '@/components/store-info';
import { InstagramFeed } from '@/components/instagram-feed';
import { Footer } from '@/components/footer';

const SLIDE_COLORS = [
  'bg-gradient-to-br from-yellow-200 via-yellow-100 to-amber-100',
  'bg-gradient-to-br from-emerald-200 via-green-100 to-teal-100',
  'bg-gradient-to-br from-pink-200 via-rose-100 to-red-100',
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideColor = SLIDE_COLORS[currentSlide];

  return (
    <>
      <Header slideColor={slideColor} />
      <main className="overflow-hidden">
        <HeroSection onSlideChange={setCurrentSlide} />
        <FeaturedCases />

        <InstagramFeed />
        <StoreInfo />
        <WhyOurCases />
        <StorePersonality />
        <Footer />
      </main>
    </>
  );
}
