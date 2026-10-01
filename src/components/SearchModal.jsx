import React, { useState } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { FEATURED_PRODUCTS, CATEGORIES, TUTORIALS } from '../data';

export default function SearchModal({ open, onClose, onSelectProduct, onSelectCategory }) {
  const [query, setQuery] = useState('');

  if (!open) return null;

  const filteredProducts = query.trim()
    ? FEATURED_PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredCategories = query.trim()
    ? CATEGORIES.filter(c => 
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-8 xs:pt-14 sm:pt-20 px-3 xs:px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-ink/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl rounded-2xl bg-white shadow-2xl overflow-hidden border border-cream-300 z-10 animate-slideDown max-h-[85vh] flex flex-col">
        {/* Search Input Bar */}
        <div className="p-3 xs:p-4 border-b border-cream-300 flex items-center gap-2.5 xs:gap-3 bg-cream-50">
          <Search className="w-5 h-5 text-forest-800 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search shades, Kolinsky brushes, charms, press-ons..."
            className="flex-1 bg-transparent text-sm text-ink placeholder:text-ink-light outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-xs text-ink-muted hover:text-ink px-1"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-ink hover:text-terracotta-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results / Suggestions */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query.trim() ? (
            <div>
              <span className="text-[10px] font-semibold text-ink-muted tracking-wider uppercase block mb-2">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {['Forest Noir', 'Press-On Almond', 'Terracotta Sun', 'Kolinsky Sable #00', 'Butterfly Charms', 'Glass Top Coat'].map(tag => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setQuery(tag)}
                    className="rounded-full bg-cream-100 hover:bg-cream-200 border border-cream-200 px-3 py-1 text-xs text-forest-900 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {filteredProducts.length === 0 && filteredCategories.length === 0 && (
                <div className="py-8 text-center text-xs text-ink-muted">
                  No direct matches for "{query}". Try "gel", "brush", or "press-on".
                </div>
              )}

              {filteredCategories.length > 0 && (
                <div>
                  <span className="text-[10px] font-semibold text-terracotta-600 tracking-wider uppercase block mb-2">
                    Categories
                  </span>
                  <div className="space-y-1.5">
                    {filteredCategories.map(cat => (
                      <div
                        key={cat.id}
                        onClick={() => {
                          onSelectCategory(cat.id);
                          onClose();
                        }}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-cream-100 cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <img src={cat.image} alt={cat.title} className="w-8 h-8 rounded object-cover" />
                          <span className="text-xs font-medium text-forest-900">{cat.title}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-forest-700" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredProducts.length > 0 && (
                <div>
                  <span className="text-[10px] font-semibold text-terracotta-600 tracking-wider uppercase block mb-2">
                    Products ({filteredProducts.length})
                  </span>
                  <div className="space-y-2">
                    {filteredProducts.map(prod => (
                      <div
                        key={prod.id}
                        onClick={() => {
                          onSelectProduct(prod);
                          onClose();
                        }}
                        className="flex items-center justify-between p-2.5 rounded-lg hover:bg-cream-100 cursor-pointer border border-cream-200"
                      >
                        <div className="flex items-center gap-3">
                          <img src={prod.image} alt={prod.name} className="w-10 h-10 rounded object-cover" />
                          <div>
                            <h4 className="text-xs font-semibold text-forest-900">{prod.name}</h4>
                            <span className="text-[11px] text-ink-muted">${prod.price.toFixed(2)}</span>
                          </div>
                        </div>
                        <span className="text-[11px] text-forest-800 font-medium">View →</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
