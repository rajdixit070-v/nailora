import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ShieldCheck, Globe } from 'lucide-react';
import { TRUST_PILLARS } from '../data';

export default function TrustBar() {
  const getIcon = (type) => {
    switch (type) {
      case 'leaf':
        return <Sparkles className="w-4 h-4 text-forest-800" strokeWidth={1.8} />;
      case 'heart':
        return <Heart className="w-4 h-4 text-forest-800" strokeWidth={1.8} />;
      case 'shield':
        return <ShieldCheck className="w-4 h-4 text-forest-800" strokeWidth={1.8} />;
      case 'globe':
        return <Globe className="w-4 h-4 text-forest-800" strokeWidth={1.8} />;
      default:
        return <Sparkles className="w-4 h-4 text-forest-800" strokeWidth={1.8} />;
    }
  };

  return (
    <section className="bg-cream-200/70 border-y border-cream-300/80 py-5 sm:py-6">
      <div className="mx-auto max-w-7xl px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 xs:gap-3.5 sm:gap-6 lg:gap-8">
          {TRUST_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="flex items-center gap-2 xs:gap-3 sm:gap-3.5 group"
            >
              {/* Circular badge container */}
              <div className="flex h-8 w-8 xs:h-9 xs:w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-forest-800/25 bg-white/70 transition-all duration-300 group-hover:bg-white group-hover:scale-105 group-hover:border-forest-800 shadow-xs">
                {getIcon(pillar.icon)}
              </div>

              {/* Title & subtitle */}
              <div className="min-w-0">
                <h4 className="text-[11px] xs:text-xs sm:text-sm font-semibold text-forest-900 tracking-tight leading-snug">
                  {pillar.title}
                </h4>
                <p className="text-[9.5px] xs:text-[10.5px] sm:text-xs text-ink-muted leading-tight mt-0.5 truncate">
                  {pillar.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
