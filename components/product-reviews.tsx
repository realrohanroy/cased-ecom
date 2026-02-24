'use client';

import { motion } from 'framer-motion';

interface Review {
  id: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  helpful: number;
}

const mockReviews: Review[] = [
  {
    id: '1',
    author: 'Jordan M.',
    rating: 5,
    title: 'Best case I\'ve ever owned',
    content:
      'The build quality is incredible. Dropped my phone from about 4 feet and it was completely fine. Highly recommend!',
    date: '2 weeks ago',
    helpful: 124,
  },
  {
    id: '2',
    author: 'Alex K.',
    rating: 5,
    title: 'Perfect fit and protection',
    content:
      'The case fits my iPhone perfectly with no gaps. The matte finish is beautiful and doesn\'t attract fingerprints.',
    date: '1 month ago',
    helpful: 89,
  },
  {
    id: '3',
    author: 'Casey S.',
    rating: 4,
    title: 'Great quality, amazing design',
    content:
      'Love the aesthetic and the protection is solid. Only minor issue is it\'s a tiny bit bulky, but totally worth it.',
    date: '1 month ago',
    helpful: 56,
  },
];

interface ProductReviewsProps {
  rating: number;
  reviewCount: number;
  productName: string;
}

export function ProductReviews({ rating, reviewCount, productName }: ProductReviewsProps) {
  return (
    <motion.div
      className="mt-16 border-t border-border pt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Customer Reviews</h2>
          <p className="mt-2 text-muted-foreground">
            Rated {rating} out of 5 based on {reviewCount} reviews
          </p>
        </div>
        <motion.button
          className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Write a Review
        </motion.button>
      </div>

      {/* Rating Distribution */}
      <div className="mb-12 grid gap-4 md:grid-cols-5">
        {[5, 4, 3, 2, 1].map((stars) => {
          const percentage = stars === 5 ? 75 : stars === 4 ? 15 : stars === 3 ? 7 : stars === 2 ? 2 : 1;
          return (
            <motion.div
              key={stars}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: (5 - stars) * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-2 flex items-center justify-center gap-1">
                {Array.from({ length: stars }).map((_, i) => (
                  <span key={i} className="text-lg">
                    ★
                  </span>
                ))}
              </div>
              <div className="h-2 w-full rounded-full bg-secondary">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percentage}%` }}
                  transition={{ duration: 0.6, delay: (5 - stars) * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{percentage}%</p>
            </motion.div>
          );
        })}
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {mockReviews.map((review, index) => (
          <motion.div
            key={review.id}
            className="border-b border-border pb-6 last:border-b-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-sm">
                        {i < review.rating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">{review.title}</span>
                </div>
                <p className="mt-2 text-foreground">{review.content}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{review.author}</span>
                  <span>•</span>
                  <span>{review.date}</span>
                </div>
              </div>
              <motion.button
                className="flex-shrink-0 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Helpful ({review.helpful})
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-8 text-center">
        <motion.button
          className="rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-colors hover:bg-secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Load More Reviews
        </motion.button>
      </div>
    </motion.div>
  );
}
