import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { BENTO_ITEMS } from '../data';

export default function BentoPromo({ onOpenTutorials, onShopBundles, onDiscoverTrending }) {
  const [splitCard, trendingCard, bundlesCard] = BENTO_ITEMS;

  return (
    <section id="bento" className="bg-cream-50 pb-10 sm:pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-3.5 xs:px-5 sm:px-6 lg:px-8">
        
        {/* Bento Grid layout matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-5 lg:gap-6">
          
          {/* 1. Split Card: "Learn. Create. Inspire." */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
            className="md:col-span-6 lg:col-span-5 rounded-xl overflow-hidden border border-forest-900/40 shadow-soft flex flex-row min-h-[175px] xs:min-h-[190px] sm:min-h-[220px]"
          >
            {/* Left Dark Forest Panel */}
            <div className="w-7/12 bg-forest-800 p-3 xs:p-4 sm:p-6 flex flex-col justify-between text-white">
              <div>
                <h3 className="font-serif text-base xs:text-lg sm:text-2xl font-normal leading-tight text-cream-50">
                  Learn. Create. <br />Inspire.
                </h3>
                <p className="mt-1 xs:mt-1.5 sm:mt-2 text-[10px] xs:text-[11px] sm:text-xs text-cream-200/80 leading-snug xs:leading-relaxed">
                  {splitCard.left.description}
                </p>
              </div>

              <div className="mt-2.5 xs:mt-4">
                <button
                  type="button"
                  onClick={onOpenTutorials}
                  className="btn-outline-white inline-flex items-center gap-1 xs:gap-1.5 text-[9px] xs:text-[10px] sm:text-[11px] px-2.5 xs:px-3.5 py-1.5 xs:py-2 rounded-md font-semibold tracking-wider uppercase transition-all hover:bg-white hover:text-forest-800"
                >
                  <Play className="w-2.5 h-2.5 xs:w-3 xs:h-3 fill-current" />
                  <span>{splitCard.left.buttonText}</span>
                </button>
              </div>
            </div>

            {/* Right Photo Area */}
            <div className="w-5/12 relative bg-cream-200 overflow-hidden group">
              <picture>
                <source srcSet={splitCard.right.highResImage} media="(min-width: 640px)" />
                <img
                  src={splitCard.right.image}
                  alt={splitCard.right.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = splitCard.right.image;
                  }}
                />
              </picture>
              <div className="absolute inset-0 bg-forest-950/10 pointer-events-none" />
            </div>
          </motion.div>

          {/* 2. Trending Styles Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="md:col-span-3 lg:col-span-3.5 rounded-xl bg-cream-200/85 border border-cream-300/80 p-4 sm:p-5 flex flex-col justify-between shadow-soft hover:shadow-card-hover transition-all duration-300 group cursor-pointer"
            onClick={onDiscoverTrending}
          >
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-base sm:text-lg text-forest-900 leading-snug group-hover:text-terracotta-700 transition-colors">
                  {trendingCard.title}
                </h3>
              </div>
              <p className="mt-1 text-[11px] sm:text-xs text-ink-muted leading-relaxed">
                {trendingCard.description}
              </p>
            </div>

            <div className="my-3 relative w-full h-24 sm:h-28 overflow-hidden rounded-lg bg-cream-100">
              <picture>
                <source srcSet={trendingCard.highResImage} media="(min-width: 640px)" />
                <img
                  src={trendingCard.image}
                  alt={trendingCard.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
                  onError={(e) => {
                    e.currentTarget.src = trendingCard.image;
                  }}
                />
              </picture>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-forest-800 group-hover:text-terracotta-600 transition-colors">
              <span>{trendingCard.actionText}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </motion.div>

          {/* 3. Bundles & Save Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="md:col-span-3 lg:col-span-3.5 rounded-xl bg-cream-200/85 border border-cream-300/80 p-4 sm:p-5 flex flex-col justify-between shadow-soft hover:shadow-card-hover transition-all duration-300 group cursor-pointer"
            onClick={onShopBundles}
          >
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-base sm:text-lg text-forest-900 leading-snug group-hover:text-terracotta-700 transition-colors">
                  {bundlesCard.title}
                </h3>
              </div>
              <p className="mt-1 text-[11px] sm:text-xs text-ink-muted leading-relaxed">
                {bundlesCard.description}
              </p>
            </div>

            <div className="my-3 relative w-full h-24 sm:h-28 overflow-hidden rounded-lg bg-cream-100">
              <picture>
                <source srcSet={bundlesCard.highResImage} media="(min-width: 640px)" />
                <img
                  src={bundlesCard.image}
                  alt={bundlesCard.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
                  onError={(e) => {
                    e.currentTarget.src = bundlesCard.image;
                  }}
                />
              </picture>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-forest-800 group-hover:text-terracotta-600 transition-colors">
              <span>{bundlesCard.actionText}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
