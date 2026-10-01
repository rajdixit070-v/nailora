import React from 'react';
import { X, Heart, Sparkles, ShoppingBag } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function LookDetailModal({ look, onClose, onShopLook }) {
  if (!look) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-ink/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden border border-cream-300 z-10 animate-scaleUp max-h-[92vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 hover:bg-white text-ink transition-colors z-20 shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-[4/3] xs:aspect-square w-full bg-cream-100 max-h-[48vh] overflow-hidden">
          <picture>
            <source srcSet={look.highResImage} media="(min-width: 640px)" />
            <img
              src={look.image}
              alt={look.style}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = look.image;
              }}
            />
          </picture>
        </div>

        <div className="p-4 xs:p-5 bg-cream-50 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-forest-900">
                <InstagramIcon className="w-4 h-4 text-terracotta-600" />
                <span>{look.artist}</span>
              </span>
              <span className="flex items-center gap-1 text-xs text-ink-muted">
                <Heart className="w-3.5 h-3.5 text-terracotta-600 fill-current" />
                <span>{look.likes} likes</span>
              </span>
            </div>

            <h3 className="font-serif text-xl text-forest-900 mt-2">
              {look.style}
            </h3>

            <div className="mt-3">
              <span className="text-[11px] font-semibold text-terracotta-600 uppercase tracking-wider block mb-1">
                Products Used to Create This Look:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {look.products.map((prod, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 rounded-md bg-white border border-cream-200 px-2.5 py-1 text-xs text-ink"
                  >
                    <Sparkles className="w-3 h-3 text-forest-700" />
                    <span>{prod}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-cream-200 flex gap-3">
            <button
              type="button"
              onClick={() => {
                if (onShopLook) onShopLook(look);
                onClose();
              }}
              className="flex-1 btn-forest text-xs py-2.5 rounded-md flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shop Products in This Look</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
