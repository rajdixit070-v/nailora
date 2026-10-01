import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({ 
  open, 
  onClose, 
  items, 
  onUpdateQty, 
  onRemoveItem,
  onClearCart
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [checkingOut, setCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!open) return null;

  const FREE_SHIPPING_THRESHOLD = 50.00;
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 5.95;
  const total = Math.max(0, subtotal - discountAmount + shipping);
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progressPercent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const applyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'NAILORA15') {
      setDiscountPercent(15);
      setPromoMessage('15% VIP Discount Applied!');
    } else if (promoCode.trim().toUpperCase() === 'CANVAS') {
      setDiscountPercent(20);
      setPromoMessage('20% Artist Discount Applied!');
    } else {
      setPromoMessage('Invalid promo code. Try NAILORA15');
      setDiscountPercent(0);
    }
  };

  const handleCheckout = () => {
    setCheckingOut(true);
    setTimeout(() => {
      setCheckingOut(false);
      setOrderComplete(true);
      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#AF5C40', '#1E3B30', '#EDE4D6', '#D49479']
        });
      } catch {}
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed backdrop */}
      <div 
        className="fixed inset-0 bg-ink/50 backdrop-blur-xs transition-opacity duration-300" 
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-0 xs:pl-8 sm:pl-10">
        <div className="w-screen max-w-full xs:max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="px-4 xs:px-5 py-3.5 xs:py-4 border-b border-cream-300 flex items-center justify-between bg-cream-50">
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-base xs:text-lg font-semibold text-forest-900">
                Your Shopping Bag
              </h2>
              <span className="rounded-full bg-forest-800 text-white text-[11px] font-bold px-2 py-0.5">
                {items.reduce((sum, i) => sum + i.quantity, 0)}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full text-ink hover:text-terracotta-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            
            {orderComplete ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-forest-100 flex items-center justify-center text-forest-800 mb-4 animate-scaleUp">
                  <CheckCircle2 className="w-10 h-10 text-forest-800" />
                </div>
                <h3 className="font-serif text-2xl text-forest-900">
                  Thank You for Your Order!
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-ink-muted max-w-xs">
                  Your Nailora artisan package is being prepared with care in our NYC salon studio. Tracking number sent to your email.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setOrderComplete(false);
                    if (onClearCart) onClearCart();
                    onClose();
                  }}
                  className="btn-forest text-xs mt-6"
                >
                  Continue Exploring
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="py-16 text-center">
                <p className="font-serif text-lg text-ink">Your bag is currently empty.</p>
                <p className="text-xs text-ink-muted mt-1">Discover our shades and press-on designs to begin.</p>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-forest text-xs mt-4"
                >
                  Explore Collections
                </button>
              </div>
            ) : (
              <>
                {/* Free Shipping Progress bar */}
                <div className="rounded-lg bg-cream-100 p-3 border border-cream-200">
                  <div className="flex items-center justify-between text-xs text-forest-900 font-medium">
                    {amountToFreeShipping > 0 ? (
                      <span>Add <strong>${amountToFreeShipping.toFixed(2)}</strong> for FREE Shipping</span>
                    ) : (
                      <span className="text-forest-700 flex items-center gap-1 font-semibold">
                        <Sparkles className="w-3.5 h-3.5 text-terracotta-600" />
                        Unlocked FREE Worldwide Shipping!
                      </span>
                    )}
                    <span className="text-[11px] text-ink-muted">{Math.round(progressPercent)}%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full bg-cream-300 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-terracotta-600 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Items List */}
                <div className="divide-y divide-cream-200">
                  {items.map((item) => (
                    <div key={item.id} className="py-3 flex gap-3.5 items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-md object-cover bg-cream-100 border border-cream-300 shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-medium text-forest-900 truncate">
                          {item.name}
                        </h4>
                        {item.shade && (
                          <p className="text-[11px] text-ink-muted truncate mt-0.5">
                            {item.shade}
                          </p>
                        )}
                        <span className="text-xs font-bold text-forest-900 block mt-1">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>

                      {/* Quantity adjuster */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center border border-cream-300 rounded-md bg-cream-50">
                          <button
                            type="button"
                            onClick={() => onUpdateQty(item.id, Math.max(1, item.quantity - 1))}
                            className="p-1 hover:text-terracotta-600 text-ink-muted"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-semibold text-ink">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                            className="p-1 hover:text-forest-800 text-ink-muted"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1.5 text-ink-light hover:text-red-600 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Code input */}
                <form onSubmit={applyPromo} className="pt-2 flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo code (e.g. NAILORA15)"
                    className="flex-1 rounded-md border border-cream-300 px-3 py-1.5 text-xs outline-none uppercase placeholder:normal-case focus:border-terracotta-500"
                  />
                  <button
                    type="submit"
                    className="rounded-md bg-cream-300 hover:bg-cream-400 px-3 py-1.5 text-xs font-medium text-forest-900 transition-colors"
                  >
                    Apply
                  </button>
                </form>
                {promoMessage && (
                  <p className={`text-[11px] ${discountPercent > 0 ? 'text-forest-700' : 'text-red-500'}`}>
                    {promoMessage}
                  </p>
                )}
              </>
            )}

          </div>

          {/* Footer Subtotal & Checkout */}
          {!orderComplete && items.length > 0 && (
            <div className="p-5 border-t border-cream-300 bg-cream-50 space-y-3">
              <div className="space-y-1.5 text-xs text-ink">
                <div className="flex justify-between">
                  <span className="text-ink-muted">Subtotal</span>
                  <span className="font-semibold text-forest-900">${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-terracotta-600">
                    <span>VIP Discount ({discountPercent}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-ink-muted">Estimated Shipping</span>
                  <span className="font-semibold text-forest-900">
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-forest-900 pt-2 border-t border-cream-300">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                disabled={checkingOut}
                className="w-full btn-forest text-xs py-3 rounded-md flex items-center justify-center gap-2"
              >
                <span>{checkingOut ? 'Securing Order...' : 'Proceed to Checkout'}</span>
                {!checkingOut && <ArrowRight className="w-4 h-4" />}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-ink-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-forest-700" />
                <span>256-Bit SSL Encrypted & 30-Day Happiness Guarantee</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
