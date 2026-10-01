import React, { useState } from 'react';
import { X, User, Crown, Gift, Package, ShieldCheck } from 'lucide-react';

export default function AccountDrawer({ open, onClose }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!open) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed backdrop */}
      <div 
        className="fixed inset-0 bg-ink/50 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-0 xs:pl-8 sm:pl-10">
        <div className="w-screen max-w-full xs:max-w-sm bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="px-4 xs:px-5 py-3.5 xs:py-4 border-b border-cream-300 flex items-center justify-between bg-cream-50">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-forest-800" />
              <h3 className="font-serif text-base font-semibold text-forest-900">
                Nailora Salon Atelier
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-full text-ink hover:text-terracotta-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5">
            {isLoggedIn ? (
              <div className="space-y-6">
                {/* User Card */}
                <div className="rounded-xl bg-forest-800 text-white p-4 shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-forest-700 flex items-center justify-center font-serif text-lg text-cream-100 border border-forest-600">
                      JS
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Jessica Sterling</h4>
                      <div className="flex items-center gap-1 text-[11px] text-terracotta-300">
                        <Crown className="w-3 h-3 fill-current" />
                        <span>Diamond VIP Tier</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-forest-700/80 flex justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-cream-300/80 block">Points Balance</span>
                      <span className="text-base font-bold text-cream-50">450 pts ($45 off)</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-cream-300/80 block">Member Status</span>
                      <span className="text-xs font-semibold text-terracotta-300">Active</span>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-cream-200 hover:bg-cream-50 cursor-pointer">
                    <Package className="w-4 h-4 text-forest-800" />
                    <span className="font-medium text-forest-900">Track Recent Orders</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-cream-200 hover:bg-cream-50 cursor-pointer">
                    <Gift className="w-4 h-4 text-terracotta-600" />
                    <span className="font-medium text-forest-900">Redeem VIP Rewards</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full text-xs text-ink-muted hover:text-red-600 pt-4"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-cream-200 text-forest-800 flex items-center justify-center mx-auto mb-2">
                    <Crown className="w-6 h-6 text-terracotta-600" />
                  </div>
                  <h4 className="font-serif text-lg text-forest-900">Sign in to Nailora</h4>
                  <p className="text-xs text-ink-muted mt-1">
                    Access artist discounts, track orders, and redeem beauty rewards.
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-forest-900 mb-1">
                      Email address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="artist@example.com"
                      className="w-full rounded-md border border-cream-300 px-3 py-2 text-xs outline-none focus:border-terracotta-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-forest-900 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-md border border-cream-300 px-3 py-2 text-xs outline-none focus:border-terracotta-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-forest text-xs py-2.5 rounded-md mt-2"
                  >
                    Sign In
                  </button>
                </form>

                <div className="mt-6 pt-4 border-t border-cream-200 text-center">
                  <p className="text-xs text-ink-muted">
                    New to Nailora? <span className="font-semibold text-terracotta-600 cursor-pointer" onClick={() => setIsLoggedIn(true)}>Create Account</span>
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-cream-200 bg-cream-50 text-[10px] text-ink-muted flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-forest-700" />
            <span>Nailora Secure Member Portal</span>
          </div>

        </div>
      </div>
    </div>
  );
}
