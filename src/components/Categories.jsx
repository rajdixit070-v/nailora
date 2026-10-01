import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data';

export default function Categories({ onSelectCategory }) {
  return (
    <section id="categories" className="bg-cream-50 py-10 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-3.5 xs:px-5 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-5 sm:mb-8">
          <div>
            <span className="text-[10px] xs:text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta-600">
              Curated Collections
            </span>
            <h2 className="mt-0.5 sm:mt-1 font-serif text-xl xs:text-2xl sm:text-3xl text-forest-900">
              Explore By Category
            </h2>
          </div>
          <span className="text-xs text-ink-muted hidden sm:block">
            High-performance artisan nail craft
          </span>
        </div>

        {/* 4 Cards Grid exactly matching reference image */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 xs:gap-3.5 sm:gap-5 lg:gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group flex flex-col justify-between rounded-xl bg-cream-200/85 border border-cream-300/80 p-2.5 xs:p-3 sm:p-4 transition-all duration-300 hover:shadow-card-hover hover:border-terracotta-500/40 hover:-translate-y-1.5 cursor-pointer"
              onClick={() => onSelectCategory && onSelectCategory(cat.id)}
            >
              {/* Product Category Image */}
              <div className="relative w-full aspect-[4/3.4] overflow-hidden rounded-lg bg-cream-100 mb-2.5 sm:mb-4">
                <picture>
                  <source srcSet={cat.highResImage} media="(min-width: 640px)" />
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
                    onError={(e) => {
                      e.currentTarget.src = cat.image;
                    }}
                  />
                </picture>

                {/* Subtle sheen highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/15 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Title & Shop Now link */}
              <div>
                <h3 className="font-serif text-xs xs:text-sm sm:text-base font-medium text-forest-900 leading-snug group-hover:text-terracotta-700 transition-colors">
                  {cat.title}
                </h3>
                
                <div className="mt-1.5 sm:mt-2 flex items-center gap-1.5 text-[9px] xs:text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-forest-800 group-hover:text-terracotta-600 transition-colors">
                  <span>SHOP NOW</span>
                  <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
