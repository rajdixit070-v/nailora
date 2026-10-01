import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { NailoraLogo } from './Icons';
import { NAV_LINKS } from '../data';

export default function Navbar({ 
  onOpenCart, 
  onOpenSearch, 
  onOpenAccount, 
  cartCount = 2,
  onNavigateCategory
}) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Handle escape key to close menu & dropdown
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setShopDropdown(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll spy, scroll detection and top progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((scrollY / docHeight) * 100);
      }

      // Section spy
      const sections = ['home', 'categories', 'tutorials', 'about', 'contact'];
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href, id) => {
    setOpen(false);
    setShopDropdown(false);
    if (id) setActiveSection(id);
  };

  return (
    <>
      {/* Top 2px Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-terracotta-600 z-50 origin-left transition-transform duration-75"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-300/80 py-2.5 sm:py-3'
            : 'bg-cream-50/90 backdrop-blur-sm border-b border-cream-200/60 py-3.5 sm:py-4'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 xs:px-4 sm:px-6 lg:px-8">
          {/* Brand Logo matching reference */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="hover:opacity-95 transition-opacity shrink-0"
          >
            <NailoraLogo />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden items-center gap-6 lg:gap-9 text-xs font-medium tracking-wide text-ink lg:flex"
            aria-label="Desktop Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setShopDropdown(true)}
                    onMouseLeave={() => setShopDropdown(false)}
                  >
                    <a
                      href={link.href}
                      className={`inline-flex items-center gap-1 py-1.5 transition-colors duration-200 hover:text-forest-800 ${
                        isActive ? 'text-forest-800 font-semibold' : 'text-ink/80'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${shopDropdown ? 'rotate-180' : ''}`} />
                    </a>

                    {/* Animated Dropdown Menu */}
                    {shopDropdown && (
                      <div className="absolute top-full left-0 w-56 rounded-xl bg-white/95 backdrop-blur-md p-2 shadow-card-hover border border-cream-300 animate-slideDown z-50">
                        {link.dropdownItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => {
                              setShopDropdown(false);
                              if (onNavigateCategory) onNavigateCategory(subItem.name);
                            }}
                            className="block rounded-lg px-3 py-2 text-xs text-ink/85 hover:bg-cream-100 hover:text-forest-800 transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href, link.id)}
                  className={`relative py-1.5 transition-colors duration-200 hover:text-forest-800 ${
                    isActive ? 'text-forest-800 font-semibold' : 'text-ink/80'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-forest-800 animate-fadeIn" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons matching reference (Search, User, Cart with "2" badge) */}
          <div className="flex items-center gap-1 xs:gap-2.5 sm:gap-4 text-ink">
            {/* Search Button */}
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search shades and tutorials"
              className="p-2 hover:text-forest-800 transition-colors rounded-full hover:bg-cream-200/50"
            >
              <Search className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.8} />
            </button>

            {/* User Account Button */}
            <button
              type="button"
              onClick={onOpenAccount}
              aria-label="Account & VIP Club"
              className="p-2 hover:text-forest-800 transition-colors rounded-full hover:bg-cream-200/50"
            >
              <User className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.8} />
            </button>

            {/* Shopping Cart Button with exact "2" badge */}
            <button
              type="button"
              onClick={onOpenCart}
              aria-label="Shopping Bag"
              className="relative p-2 hover:text-forest-800 transition-colors rounded-full hover:bg-cream-200/50 group"
            >
              <ShoppingBag className="w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform duration-200 group-hover:scale-105" strokeWidth={1.8} />
              {cartCount > 0 && (
                <span className="absolute 0.5 top-0.5 right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-forest-800 text-[10px] font-semibold text-white shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 hover:text-forest-800 transition-colors rounded-full hover:bg-cream-200/50"
              aria-label={open ? 'Close Menu' : 'Open Navigation Menu'}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with backdrop lock */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-ink/40 backdrop-blur-xs transition-opacity" 
            onClick={() => setOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed top-0 right-0 bottom-0 w-72 max-w-[85vw] bg-cream-50 shadow-2xl p-6 flex flex-col justify-between border-l border-cream-300 animate-slideDown">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-cream-300">
                <NailoraLogo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="p-1 rounded-full text-ink hover:text-terracotta-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <div key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => handleNavClick(link.href, link.id)}
                      className="block py-2 text-sm font-medium text-ink hover:text-forest-800 transition-colors"
                    >
                      {link.name}
                    </a>
                    {link.hasDropdown && (
                      <div className="pl-3 py-1 flex flex-col gap-1.5 border-l border-cream-300 text-xs text-ink-muted">
                        {link.dropdownItems.slice(1, 5).map(sub => (
                          <a 
                            key={sub.name} 
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="hover:text-forest-800 py-0.5"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Bottom info in mobile drawer */}
            <div className="pt-6 border-t border-cream-300">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onOpenCart();
                }}
                className="w-full btn-forest text-xs py-2.5 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>View Bag ({cartCount})</span>
              </button>
              <p className="text-[11px] text-ink-muted text-center mt-3">
                Free standard shipping on orders over $50
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
