'use client';

import { Instagram, ExternalLink } from 'lucide-react';

const INSTAGRAM_HANDLE = 'mohit.accessories.studio';
const INSTAGRAM_URL = 'https://www.instagram.com/mohit.accessories.studio/';

// Placeholder posts - in a real app, this would fetch from Instagram API
const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop',
    title: 'Summer Vibes Collection',
    caption: 'New gradient cases for the season',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=400&h=500&fit=crop',
    title: 'Marble Elegance',
    caption: 'Classic meets modern design',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=500&fit=crop',
    title: 'Ocean Inspired',
    caption: 'Cool tones for every style',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1595225476395-b1e99c2f7f79?w=400&h=500&fit=crop',
    title: 'Nature Collection',
    caption: 'Sustainable and stylish',
  },
];

export function InstagramFeed() {
  return (
    <section className="bg-secondary/30 border-y border-border/40 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
          From Instagram
        </h2>
        
        <a 
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-2 text-pink-600 transition-transform duration-200 group-hover:scale-105 active:scale-95">
            <Instagram size={28} className="stroke-[2.5]" />
            <span className="text-2xl sm:text-3xl font-black tracking-tight">
              @{INSTAGRAM_HANDLE}
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm sm:text-base font-medium mb-6">
            See our latest designs and reels on Instagram
          </p>
          
          <span className="inline-flex items-center gap-2 bg-foreground text-background font-bold text-sm px-6 py-2.5 rounded-full transition-transform duration-200 group-hover:scale-105 active:scale-95">
            Follow Us <ExternalLink size={16} />
          </span>
        </a>
      </div>
    </section>
  );
}
