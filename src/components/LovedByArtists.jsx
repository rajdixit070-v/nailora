import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { UGC_LOOKS } from '../data';

export default function LovedByArtists({ onSelectLook, onOpenShareLook }) {
  return (
    <section className="bg-cream-50 pb-12 sm:pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-3.5 xs:px-5 sm:px-6 lg:px-8">
        
        {/* Section Header matching reference */}
        <div className="text-center mb-5 sm:mb-8">
          <h2 className="font-serif text-xl xs:text-2xl sm:text-3xl lg:text-4xl text-forest-900 flex items-center justify-center gap-1.5 xs:gap-2">
            <span>Loved by Nail Artists</span>
            <span className="text-terracotta-600 select-none text-lg xs:text-xl sm:text-2xl">♡</span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-ink-muted">
            Real looks. Real love. Real Nailora.
          </p>
        </div>

        {/* 6-Item Grid matching reference: 5 photo cards + 1 terracotta #NailoraArt card */}
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-6 gap-2 xs:gap-2.5 sm:gap-3.5 lg:gap-4">
          
          {/* 5 Real Looks */}
          {UGC_LOOKS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-cream-200 border border-cream-300 shadow-soft cursor-pointer"
              onClick={() => onSelectLook && onSelectLook(item)}
            >
              <picture>
                <source srcSet={item.highResImage} media="(min-width: 640px)" />
                <img
                  src={item.image}
                  alt={item.style}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = item.image;
                  }}
                />
              </picture>

              {/* Hover overlay with artist info */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 sm:p-2.5 flex flex-col justify-end text-white">
                <span className="text-[9px] xs:text-[10px] font-medium tracking-wide text-cream-100 flex items-center gap-1">
                  <InstagramIcon className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-terracotta-400" />
                  <span className="truncate">{item.artist}</span>
                </span>
                <span className="text-[8.5px] xs:text-[9px] text-cream-300/80 truncate">
                  {item.style}
                </span>
              </div>
            </motion.div>
          ))}

          {/* 6th Card: Terracotta Solid "SHARE YOUR LOOK #NailoraArt" Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, delay: 0.25 }}
            onClick={onOpenShareLook}
            className="group relative aspect-square rounded-xl bg-terracotta-600 hover:bg-terracotta-700 p-2 xs:p-3 sm:p-4 flex flex-col items-center justify-center text-center text-white shadow-soft transition-all duration-300 hover:shadow-terracotta hover:-translate-y-1 cursor-pointer"
          >
            {/* Camera Icon in outline frame */}
            <div className="flex h-7 w-7 xs:h-8 xs:w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-white/40 bg-white/10 mb-1.5 transition-transform duration-300 group-hover:scale-110">
              <Camera className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white" strokeWidth={1.7} />
            </div>

            <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-bold tracking-[0.14em] uppercase text-white/95 leading-tight">
              SHARE YOUR LOOK
            </span>
            <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-serif italic text-cream-200 mt-0.5">
              #NailoraArt
            </span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
