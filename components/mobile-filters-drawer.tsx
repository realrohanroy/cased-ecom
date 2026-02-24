'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ProductFilters from '@/components/product-filters';

interface MobileFiltersDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedColors: string[];
  setSelectedColors: (colors: string[]) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export function MobileFiltersDrawer({
  isOpen,
  onClose,
  selectedColors,
  setSelectedColors,
  sortBy,
  setSortBy,
}: MobileFiltersDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-0 bottom-0 w-64 bg-white z-50 overflow-y-auto border-r border-gray-200"
          >
            {/* Header */}
            <div className="sticky top-0 border-b border-gray-200 bg-white px-4 py-3 flex items-center justify-between">
              <h2 className="font-bold text-black">Filters</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <X size={20} className="text-black" />
              </motion.button>
            </div>

            {/* Filters Content */}
            <div className="p-4">
              <ProductFilters
                selectedColors={selectedColors}
                setSelectedColors={setSelectedColors}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
