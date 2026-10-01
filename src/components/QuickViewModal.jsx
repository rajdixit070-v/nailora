import React, { useState } from 'react';
import { X, Star, Check, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function QuickViewModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedFinish, setSelectedFinish] = useState('High Gloss');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-ink/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden border border-cream-300 z-10 animate-scaleUp max-h-[92vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1.5 rounded-full bg-cream-100 hover:bg-cream-200 text-ink transition-colors z-20 shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative bg-cream-100 p-4 xs:p-6 flex items-center justify-center">
            <picture>
              <source srcSet={product.highResImage} media="(min-width: 640px)" />
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 xs:h-56 sm:h-64 md:h-72 object-cover rounded-xl shadow-soft"
                onError={(e) => {
                  e.currentTarget.src = product.image;
                }}
              />
            </picture>
            {product.badge && (
              <span className="absolute top-4 left-4 rounded-md bg-forest-900/90 text-cream-50 text-[10px] font-semibold tracking-wider px-2.5 py-1 uppercase">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-4 xs:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-terracotta-600 mb-1.5">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-forest-900">{product.rating}</span>
                <span className="text-ink-muted">({product.reviews} reviews)</span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-forest-900 leading-snug">
                {product.name}
              </h3>

              <div className="mt-2 text-xl font-bold text-forest-900">
                ${product.price.toFixed(2)}
              </div>

              <p className="mt-3 text-xs text-ink-muted leading-relaxed">
                {product.description}
              </p>

              {/* Finish Selector */}
              <div className="mt-4">
                <span className="text-xs font-semibold text-forest-900 block mb-1.5">
                  Finish / Application:
                </span>
                <div className="flex gap-2">
                  {['High Gloss', 'Velvet Matte', 'Cat-Eye Syrup'].map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setSelectedFinish(f)}
                      className={`px-3 py-1 text-[11px] rounded-md border transition-all ${
                        selectedFinish === f
                          ? 'border-forest-800 bg-forest-800 text-white font-medium'
                          : 'border-cream-300 bg-cream-50 text-ink hover:bg-cream-100'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-6 pt-4 border-t border-cream-200">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-cream-300 rounded-md">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2.5 py-2 text-xs font-bold text-ink-muted hover:text-ink"
                  >
                    -
                  </button>
                  <span className="px-2 text-xs font-semibold text-forest-900">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2.5 py-2 text-xs font-bold text-ink-muted hover:text-ink"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onAddToCart({ ...product, quantity });
                    onClose();
                  }}
                  className="flex-1 btn-forest text-xs py-2.5 rounded-md flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag — ${(product.price * quantity).toFixed(2)}</span>
                </button>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-[10px] text-ink-muted justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-forest-700" />
                <span>Cruelty-Free • 10-Free Vegan Formula • Made in USA</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
