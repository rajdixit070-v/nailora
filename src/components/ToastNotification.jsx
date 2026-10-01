import React, { useEffect } from 'react';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';

export default function ToastNotification({ message, open, onClose, onOpenCart }) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 z-50 animate-slideDown">
      <div className="flex items-center gap-3 rounded-xl bg-forest-900 text-white px-4 py-3 shadow-2xl border border-forest-700 max-w-sm">
        <CheckCircle2 className="w-5 h-5 text-terracotta-400 shrink-0" />
        <span className="text-xs font-medium text-cream-100 flex-1">
          {message}
        </span>
        {onOpenCart && (
          <button
            type="button"
            onClick={onOpenCart}
            className="text-[11px] font-semibold text-terracotta-300 hover:text-white underline underline-offset-2 ml-1"
          >
            View Bag
          </button>
        )}
        <button
          type="button"
          onClick={onClose}
          className="text-cream-400 hover:text-white p-0.5 ml-1"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
