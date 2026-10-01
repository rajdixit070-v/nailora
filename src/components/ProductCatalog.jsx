import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingBag, Eye, Sparkles } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data';

export default function ProductCatalog({ 
  selectedCategoryFilter, 
  onSelectCategoryFilter,
  onAddToCart,
  onQuickView
}) {
  const [filter, setFilter] = useState(selectedCategoryFilter || 'all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'color-collections', label: 'Color Collections' },
    { id: 'professional-tools', label: 'Professional Tools' },
    { id: 'nail-accessories', label: 'Accessories' },
    { id: 'press-on-designs', label: 'Press-On Designs' },
  ];

  const filteredProducts = filter === 'all' 
    ? FEATURED_PRODUCTS 
    : FEATURED_PRODUCTS.filter(p => p.category === filter);

  return (
    <section id="shop" className="bg-cream-100/60 py-10 sm:py-16 border-y border-cream-300/80">
      <div className="mx-auto max-w-7xl px-3.5 xs:px-5 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <span className="text-[10px] xs:text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta-600 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Crafted Artistry</span>
          </span>
          <h2 className="mt-0.5 sm:mt-1 font-serif text-xl xs:text-2xl sm:text-3xl lg:text-4xl text-forest-900">
            Featured Salon Formulations
          </h2>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed px-2">
            Engineered for high-definition pigment, diamond-strength durability, and effortless brush control.
          </p>

          {/* Filter Pills */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 xs:gap-2">
            {categories.map((c) => {
              const active = filter === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setFilter(c.id);
                    if (onSelectCategoryFilter) onSelectCategoryFilter(c.id);
                  }}
                  className={`rounded-full px-3 xs:px-4 py-1.5 text-[11px] xs:text-xs font-medium tracking-wide transition-all ${
                    active
                      ? 'bg-forest-800 text-white shadow-xs'
                      : 'bg-cream-200/90 text-ink/80 hover:bg-cream-300 hover:text-forest-900'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3.5 xs:gap-4 sm:gap-6">
          <AnimatePresence>
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="group flex flex-col justify-between rounded-xl bg-white border border-cream-300 p-4 shadow-soft hover:shadow-card-hover transition-all duration-300"
              >
                <div>
                  {/* Image Container with Badges & Quick Action Buttons */}
                  <div className="relative aspect-[4/3.3] overflow-hidden rounded-lg bg-cream-100 mb-3.5">
                    <picture>
                      <source srcSet={product.highResImage} media="(min-width: 640px)" />
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = product.image;
                        }}
                      />
                    </picture>

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-2.5 left-2.5 rounded-md bg-forest-900/85 backdrop-blur-xs px-2.5 py-1 text-[10px] font-semibold tracking-wider text-cream-100 uppercase">
                        {product.badge}
                      </span>
                    )}

                    {/* Color Swatch Dot if Lacquer */}
                    {product.colorHex && (
                      <div 
                        className="absolute top-2.5 right-2.5 h-6 w-6 rounded-full border-2 border-white shadow-xs"
                        style={{ backgroundColor: product.colorHex }}
                        title="Shade preview"
                      />
                    )}

                    {/* Quick View Floating Button on Hover */}
                    <button
                      type="button"
                      onClick={() => onQuickView && onQuickView(product)}
                      className="absolute inset-0 m-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-forest-900 shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                      aria-label="Quick View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-[11px] text-terracotta-600 mb-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold text-forest-900 ml-1">{product.rating}</span>
                    <span className="text-ink-muted">({product.reviews})</span>
                  </div>

                  {/* Product Title */}
                  <h3 className="font-serif text-base text-forest-900 group-hover:text-terracotta-600 transition-colors leading-snug line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-xs text-ink-muted line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price & Add to Bag Button */}
                <div className="mt-4 pt-3 border-t border-cream-200 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-base font-bold text-forest-900">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-ink-muted line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => onAddToCart && onAddToCart(product)}
                    className="btn-forest text-[11px] py-2 px-3.5 flex items-center gap-1.5 rounded-md hover:bg-forest-900 transition-all active:scale-95"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
