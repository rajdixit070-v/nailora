import React from 'react';
import { ArrowUp } from 'lucide-react';
import { NailoraLogo, HandArtArch, InstagramIcon } from './Icons';
import { BRAND } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-950 text-cream-100 pt-10 sm:pt-16 pb-8 border-t border-forest-900">
      <div className="mx-auto max-w-7xl px-3.5 xs:px-5 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-forest-800/80">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col justify-between">
            <div>
              <NailoraLogo variant="light" />
              <p className="mt-3.5 sm:mt-4 text-xs sm:text-sm text-cream-300/80 leading-relaxed max-w-sm">
                Empowering creativity through premium nail products and artistic expression.
              </p>
            </div>

            {/* Social Media Links matching reference (Instagram, TikTok, YouTube, Pinterest) */}
            <div className="mt-5 sm:mt-6 flex items-center gap-3">
              {/* Instagram */}
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-900 text-cream-200 hover:bg-terracotta-600 hover:text-white transition-all shadow-xs"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>


              {/* TikTok */}
              <a
                href={BRAND.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-900 text-cream-200 hover:bg-terracotta-600 hover:text-white transition-all shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.97-4.5V8.65a8.21 8.21 0 0 0 4.8 1.54V6.75a4.78 4.78 0 0 1-1-.06z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={BRAND.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-900 text-cream-200 hover:bg-terracotta-600 hover:text-white transition-all shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href={BRAND.pinterest}
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-900 text-cream-200 hover:bg-terracotta-600 hover:text-white transition-all shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.365-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns matching reference */}
          <div className="md:col-span-6 lg:col-span-6 grid grid-cols-2 xs:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Shop Column */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold tracking-wider text-cream-50 uppercase">
                Shop
              </h4>
              <ul className="mt-3 sm:mt-4 space-y-2 text-[11px] sm:text-xs text-cream-300/80">
                <li><a href="#shop" className="hover:text-cream-50 transition-colors">All Products</a></li>
                <li><a href="#categories" className="hover:text-cream-50 transition-colors">Color Collections</a></li>
                <li><a href="#categories" className="hover:text-cream-50 transition-colors">Tools & Brushes</a></li>
                <li><a href="#categories" className="hover:text-cream-50 transition-colors">Accessories</a></li>
                <li><a href="#categories" className="hover:text-cream-50 transition-colors">Press-On Nails</a></li>
                <li><a href="#bento" className="hover:text-cream-50 transition-colors">Bundles & Sets</a></li>
              </ul>
            </div>

            {/* Help Column */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold tracking-wider text-cream-50 uppercase">
                Help
              </h4>
              <ul className="mt-3 sm:mt-4 space-y-2 text-[11px] sm:text-xs text-cream-300/80">
                <li><a href="#help" className="hover:text-cream-50 transition-colors">Track Your Order</a></li>
                <li><a href="#help" className="hover:text-cream-50 transition-colors">Shipping & Delivery</a></li>
                <li><a href="#help" className="hover:text-cream-50 transition-colors">Returns & Refunds</a></li>
                <li><a href="#help" className="hover:text-cream-50 transition-colors">FAQ</a></li>
                <li><a href="#help" className="hover:text-cream-50 transition-colors">Size Guide</a></li>
                <li><a href="#contact" className="hover:text-cream-50 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="col-span-2 xs:col-span-1">
              <h4 className="text-xs sm:text-sm font-semibold tracking-wider text-cream-50 uppercase">
                Company
              </h4>
              <ul className="mt-3 sm:mt-4 space-y-2 text-[11px] sm:text-xs text-cream-300/80">
                <li><a href="#about" className="hover:text-cream-50 transition-colors">About Us</a></li>
                <li><a href="#about" className="hover:text-cream-50 transition-colors">Our Artists</a></li>
                <li><a href="#affiliate" className="hover:text-cream-50 transition-colors">Become an Affiliate</a></li>
                <li><a href="#careers" className="hover:text-cream-50 transition-colors">Careers</a></li>
                <li><a href="#blog" className="hover:text-cream-50 transition-colors">Blog</a></li>
              </ul>
            </div>

          </div>

          {/* Right Arched Linework Hand Graphic matching reference */}
          <div className="md:col-span-2 lg:col-span-2 hidden md:flex justify-end items-center">
            <div className="w-24 sm:w-28 opacity-90">
              <HandArtArch variant="footer" className="w-full h-auto aspect-[3/4.8]" />
            </div>
          </div>

        </div>

        {/* Bottom Bar matching reference */}
        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] text-cream-400/70 text-center sm:text-left">
          <p>© 2025 Nailora. All rights reserved.</p>

          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#privacy" className="hover:text-cream-200 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#terms" className="hover:text-cream-200 transition-colors">Terms of Service</a>
            
            {/* Back to top smooth button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-forest-900 text-cream-300 hover:text-white hover:bg-forest-800 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

