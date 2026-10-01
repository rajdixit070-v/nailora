import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';

export default function WhatsAppButton() {
  const [openChat, setOpenChat] = useState(false);
  const [message, setMessage] = useState('Hi! I need help selecting shades and press-on sizes from Nailora.');

  const phone = '18004826245';
  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-4 right-3.5 xs:right-5 z-40 flex flex-col items-end">
      {/* Quick Concierge Chat Popover */}
      {openChat && (
        <div className="mb-3 w-[calc(100vw-2rem)] xs:w-80 max-w-sm rounded-2xl bg-white shadow-2xl border border-cream-300 overflow-hidden animate-slideDown text-ink">
          {/* Header */}
          <div className="bg-forest-800 p-3 xs:p-3.5 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="h-9 w-9 rounded-full bg-forest-700 flex items-center justify-center border border-forest-600">
                  <Sparkles className="w-4 h-4 text-terracotta-300" />
                </div>
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-forest-800" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-cream-50 leading-tight">Nailora VIP Concierge</h4>
                <p className="text-[10px] text-cream-200/80">Online • Typically replies instantly</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpenChat(false)}
              className="text-cream-200 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-3.5 bg-cream-50/70 text-xs space-y-2">
            <div className="bg-white p-2.5 rounded-lg rounded-tl-none border border-cream-200 shadow-xs max-w-[85%] text-ink/90 leading-relaxed">
              Hello darling! ✨ Need assistance choosing your shade match or bespoke press-on nail sizing?
            </div>
          </div>

          {/* Input & WhatsApp Action */}
          <div className="p-2.5 border-t border-cream-200 bg-white flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type message..."
              className="flex-1 bg-cream-100 rounded-md px-3 py-1.5 text-xs outline-none focus:ring-1 focus:ring-forest-800"
            />
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="h-8 w-8 rounded-md bg-forest-800 hover:bg-forest-900 text-white flex items-center justify-center transition-colors shadow-xs"
              title="Chat on WhatsApp"
            >
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        type="button"
        onClick={() => setOpenChat(!openChat)}
        aria-label="Contact Nailora Concierge"
        className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-forest-800 text-white shadow-forest hover:bg-forest-900 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-terracotta-500" />
        </span>

        {openChat ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6 fill-current" />
        )}

        {/* Floating Tooltip */}
        {!openChat && (
          <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-md bg-forest-950 px-2.5 py-1 text-[11px] font-medium text-cream-100 opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
            Nail Artist Concierge
          </span>
        )}
      </button>
    </div>
  );
}
