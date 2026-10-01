import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { NewsletterLeaves } from './Icons';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSubmitted(true);

    // Fire celebratory confetti!
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#AF5C40', '#1E3B30', '#EDE4D6', '#D49479']
      });
    } catch {
      // ignore
    }
  };

  return (
    <section className="bg-cream-50 pb-10 sm:pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-3.5 xs:px-5 sm:px-6 lg:px-8">
        
        {/* Dark Forest Green Banner Container matching reference image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-xl bg-forest-800 px-4 py-6 xs:px-6 xs:py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-10 text-white shadow-forest"
        >
          {/* Botanical leaf foliage illustration on the left */}
          <div className="pointer-events-none absolute -left-4 top-1/2 -translate-y-1/2 opacity-35 select-none hidden sm:block">
            <NewsletterLeaves className="w-32 h-32 sm:w-40 sm:h-40 text-forest-300" />
          </div>

          <div className="relative z-10 grid grid-cols-1 items-center gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-8">
            
            {/* Left Text */}
            <div className="lg:col-span-6 sm:pl-10">
              <h3 className="font-serif text-lg xs:text-xl sm:text-2xl lg:text-3xl text-cream-50 font-normal leading-tight">
                Be the first to know
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-cream-200/80 leading-relaxed max-w-md">
                New collections, exclusive offers and nail inspo—straight to your inbox.
              </p>
            </div>

            {/* Right Input & Subscribe Form */}
            <div className="lg:col-span-6">
              {submitted ? (
                <div className="flex items-center gap-2.5 rounded-md bg-forest-900/80 border border-forest-600 px-4 py-3 text-cream-100">
                  <CheckCircle2 className="w-5 h-5 text-terracotta-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">
                    Welcome to the Nailora Circle! Check your inbox for a special 15% VIP code.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-2.5">
                  <div className="w-full relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-md border border-forest-600 bg-forest-900/60 px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-cream-50 placeholder:text-cream-300/50 outline-none transition focus:border-cream-300 focus:ring-1 focus:ring-cream-300"
                    />
                    {error && (
                      <span className="absolute -bottom-5 left-1 text-[10px] text-terracotta-300">
                        {error}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto shrink-0 rounded-md bg-terracotta-600 hover:bg-terracotta-700 text-white font-medium text-xs sm:text-sm tracking-wider uppercase px-6 py-2.5 sm:py-3 transition-all duration-200 shadow-sm active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <span>SUBSCRIBE</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
