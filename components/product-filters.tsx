'use client';

import { motion } from 'framer-motion';
import { Check, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface ProductFiltersProps {
  selectedColors: string[];
  setSelectedColors: (colors: string[]) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const COLORS = ['Black & White', 'Orange & Pink', 'Blue & Teal', 'Green', 'Rose Gold', 'Purple', 'Brown', 'Clear'];

export default function ProductFilters({
  selectedColors,
  setSelectedColors,
  sortBy,
  setSortBy,
}: ProductFiltersProps) {
  const [expandedSections, setExpandedSections] = useState({
    sort: true,
    color: true,
  });

  const toggleSection = (section: 'sort' | 'color') => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleColorToggle = (color: string) => {
    setSelectedColors(
      selectedColors.includes(color)
        ? selectedColors.filter((c) => c !== color)
        : [...selectedColors, color]
    );
  };

  const hasActiveFilters = selectedColors.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="space-y-6"
    >
      {/* Sort */}
      <div className="space-y-3">
        <motion.button
          onClick={() => toggleSection('sort')}
          className="flex w-full items-center justify-between px-0 py-2 text-xs font-bold text-black tracking-wide uppercase hover:opacity-70 transition-opacity"
        >
          <span>Sort</span>
          <motion.div
            animate={{ rotate: expandedSections.sort ? 0 : -90 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={14} />
          </motion.div>
        </motion.button>
        <motion.div
          initial={false}
          animate={{
            height: expandedSections.sort ? 'auto' : 0,
            opacity: expandedSections.sort ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden space-y-1.5"
        >
          {[
            { value: 'newest', label: 'Newest' },
            { value: 'price-low', label: 'Price: Low to High' },
            { value: 'price-high', label: 'Price: High to Low' },
            { value: 'rating', label: 'Highest Rated' },
          ].map((option) => (
            <motion.button
              key={option.value}
              whileHover={{ x: 2 }}
              onClick={() => setSortBy(option.value)}
              className={`flex w-full items-center gap-2 rounded px-2 py-1.5 text-xs transition-all ${
                sortBy === option.value
                  ? 'bg-black text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div
                className={`h-3.5 w-3.5 rounded-sm border transition-all ${
                  sortBy === option.value
                    ? 'border-white bg-white'
                    : 'border-gray-300'
                }`}
              >
                {sortBy === option.value && (
                  <Check size={10} className="text-black" />
                )}
              </div>
              {option.label}
            </motion.button>
          ))}
        </motion.div>
      </div>

      <div className="border-t border-gray-200" />

      {/* Color Filter */}
      <div className="space-y-3">
        <motion.button
          onClick={() => toggleSection('color')}
          className="flex w-full items-center justify-between px-0 py-2 text-xs font-bold text-black tracking-wide uppercase hover:opacity-70 transition-opacity"
        >
          <span>Color</span>
          <motion.div
            animate={{ rotate: expandedSections.color ? 0 : -90 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={14} />
          </motion.div>
        </motion.button>
        <motion.div
          initial={false}
          animate={{
            height: expandedSections.color ? 'auto' : 0,
            opacity: expandedSections.color ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden space-y-1.5"
        >
          {COLORS.map((color) => (
            <motion.button
              key={color}
              whileHover={{ x: 2 }}
              onClick={() => handleColorToggle(color)}
              className={`flex w-full items-center gap-2 rounded px-2 py-1.5 text-xs transition-all ${
                selectedColors.includes(color)
                  ? 'bg-black text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div
                className={`h-3.5 w-3.5 rounded-sm border transition-all ${
                  selectedColors.includes(color)
                    ? 'border-white bg-white'
                    : 'border-gray-300'
                }`}
              >
                {selectedColors.includes(color) && (
                  <Check size={10} className="text-black" />
                )}
              </div>
              {color}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-t border-gray-200 pt-4"
        >
          <button
            onClick={() => setSelectedColors([])}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-black border border-black rounded hover:bg-black hover:text-white transition-colors"
          >
            <X size={14} />
            Clear
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
