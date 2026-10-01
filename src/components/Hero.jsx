import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BotanicalSprig, CornerBranch, HandArtArch } from './Icons';

export default function Hero({ onShopClick }) {
  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-cream-50 pt-3 pb-8 sm:pt-6 sm:pb-12 md:pb-16 lg:pb-20"
    >
      {/* Top right decorative olive foliage branch from image */}
      <div className="pointer-events-none absolute right-0 top-0 hidden md:block opacity-85 select-none z-10">
        <CornerBranch className="w-36 h-36 lg:w-48 lg:h-48 text-forest-700/80" />
      </div>

      <div className="mx-auto max-w-7xl px-3.5 xs:px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-12 lg:gap-8">
          
          {/* Main Text, Headline & Shop Now CTA Button (order-1 on mobile so user immediately sees headline) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-left order-1 md:order-2 md:col-span-5 lg:col-span-4 flex flex-col justify-center lg:px-2 pt-2 md:pt-0"
          >
            {/* Eyebrow text matching reference image */}
            <span className="text-[9.5px] xs:text-[11px] sm:text-xs font-semibold tracking-[0.2em] xs:tracking-[0.22em] text-ink-muted uppercase">
              HANDCRAFTED. STYLISH. UNIQUELY YOU.
            </span>

            {/* Main Headline: "Your Nails, Your Canvas." */}
            <h1 className="mt-2 sm:mt-3 font-serif text-[28px] xs:text-[34px] sm:text-4xl md:text-5xl lg:text-[56px] text-forest-900 leading-[1.08] tracking-tight">
              <span className="block">Your Nails,</span>
              <span className="block mt-0.5">
                Your <span className="font-serif italic font-normal text-terracotta-600">Canvas.</span>
              </span>
            </h1>

            {/* Botanical Leaf Sprig vector flourish between heading and description */}
            <div className="my-2.5 sm:my-4 flex items-center">
              <BotanicalSprig className="w-18 sm:w-24 h-4 sm:h-5 text-forest-700/70" />
            </div>

            {/* Subtitle description matching reference */}
            <p className="text-xs xs:text-sm text-ink-muted leading-relaxed max-w-sm">
              Premium nail products, artistic designs and everything you need to express you.
            </p>

            {/* CTA Button matching reference: Forest Green "SHOP NOW →" */}
            <div className="mt-5 sm:mt-7 flex items-center gap-3">
              <a
                href="#categories"
                onClick={(e) => {
                  if (onShopClick) {
                    e.preventDefault();
                    onShopClick();
                  }
                }}
                className="w-full xs:w-auto btn-forest group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-md text-xs sm:text-sm font-semibold tracking-wider text-white shadow-md hover:shadow-forest transition-all"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Salon Nail Artist Image (order-2 on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="order-2 md:order-1 md:col-span-4 lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md md:max-w-none overflow-hidden rounded-2xl shadow-soft border border-cream-300 group">
              <picture>
                <source 
                  srcSet="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=85" 
                  media="(min-width: 640px)" 
                />
                <img
                  src="/images/hero_artist.jpg"
                  alt="Professional nail artist in salon carefully sculpting and painting client nails"
                  className="w-full h-[220px] xs:h-[260px] sm:h-[340px] md:h-[400px] lg:h-[450px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/images/hero_artist.jpg";
                  }}
                />
              </picture>
              
              {/* Subtle gradient overlay at bottom edge */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/20 via-transparent to-transparent pointer-events-none" />

              {/* Floating Salon Tag */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 xs:px-3 py-1.5 rounded-lg border border-cream-200/80 shadow-xs flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-terracotta-600" />
                <span className="text-[10px] xs:text-[11px] font-medium text-forest-900 tracking-wide">
                  Master Nail Technicians
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Terracotta Arched Linework Hand Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="hidden md:flex order-3 md:col-span-3 lg:col-span-3 justify-center lg:justify-end items-end relative"
          >
            <div className="w-36 sm:w-44 lg:w-48 xl:w-52">
              <HandArtArch 
                variant="hero" 
                className="w-full h-auto aspect-[3/5]" 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
