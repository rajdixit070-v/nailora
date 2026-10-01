import React from 'react';

// Nailora Flower sprig icon
export function FloralSprig({ className = "w-6 h-6", color = "#1E3B30", accent = "#AF5C40" }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Central stem */}
      <path d="M10 26C13 22 17 17 21 8" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      {/* Little branch leaves */}
      <path d="M13 22C11 20 10 18 11 16C13 16 14.5 18 15 20" stroke={color} strokeWidth="1.4" strokeLinecap="round" fill={color} fillOpacity="0.15" />
      <path d="M16 17C18 15 20 15 21 17C21 19 19 20 17 19" stroke={color} strokeWidth="1.4" strokeLinecap="round" fill={color} fillOpacity="0.15" />
      {/* Little blossom flower head */}
      <circle cx="21" cy="8" r="3" fill={accent} />
      <circle cx="18" cy="6" r="2.2" fill={accent} fillOpacity="0.85" />
      <circle cx="24" cy="7" r="2" fill={accent} fillOpacity="0.85" />
      <circle cx="22" cy="11" r="2" fill={accent} fillOpacity="0.85" />
      <circle cx="21" cy="8" r="1.2" fill="#FAF7F2" />
    </svg>
  );
}

// Brand Logo Component with exact typography & flower sprig from image
export function NailoraLogo({ variant = "default", className = "" }) {
  const isDark = variant === "light";
  return (
    <div className={`flex items-center gap-1.5 xs:gap-2 select-none ${className}`}>
      <div className="flex flex-col">
        <div className="flex items-center gap-1 xs:gap-1.5">
          <span className={`font-serif text-xl xs:text-2xl sm:text-[30px] lg:text-[32px] tracking-tight leading-none ${isDark ? 'text-cream-50' : 'text-forest-800'}`}>
            Nailora
          </span>
          <FloralSprig 
            className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 -mt-1 shrink-0" 
            color={isDark ? '#E2D5C3' : '#1E3B30'} 
            accent={isDark ? '#E4BAA6' : '#AF5C40'} 
          />
        </div>
        <span className={`text-[6.5px] xs:text-[7.5px] sm:text-[8px] font-medium tracking-[0.2em] xs:tracking-[0.24em] uppercase mt-0.5 ${isDark ? 'text-cream-300/80' : 'text-ink-muted'}`}>
          Art at your fingertips
        </span>
      </div>
    </div>
  );
}

// Botanical Leaf Sprig illustration between heading & description in Hero
export function BotanicalSprig({ className = "w-20 h-6 text-forest-800" }) {
  return (
    <svg viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M5 12C35 12 65 12 95 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5" />
      <path d="M50 12C45 8 40 7 36 9C34 11 36 13 42 12" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.3" />
      <path d="M50 12C55 8 60 7 64 9C66 11 64 13 58 12" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.3" />
      <path d="M50 12C46 16 42 17 38 15C36 13 38 11 44 12" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.3" />
      <path d="M50 12C54 16 58 17 62 15C64 13 62 11 56 12" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.3" />
      <circle cx="50" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

// Corner botanical branch for top right of hero
export function CornerBranch({ className = "w-44 h-44 text-forest-700" }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M150 10C120 30 80 70 50 140" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      {/* Branch 1 */}
      <path d="M125 35C105 32 95 40 102 52C108 55 118 48 125 35Z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
      <path d="M135 25C130 10 115 15 122 25Z" fill="currentColor" fillOpacity="0.5" stroke="currentColor" strokeWidth="1" />
      {/* Branch 2 */}
      <path d="M100 58C80 60 75 75 85 82C94 82 98 70 100 58Z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
      <path d="M110 50C118 40 130 45 124 58Z" fill="currentColor" fillOpacity="0.5" stroke="currentColor" strokeWidth="1" />
      {/* Branch 3 */}
      <path d="M75 92C55 98 52 112 62 118C70 118 73 105 75 92Z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
      <path d="M85 82C95 75 102 85 92 95Z" fill="currentColor" fillOpacity="0.5" stroke="currentColor" strokeWidth="1" />
      {/* Branch 4 */}
      <path d="M55 128C40 135 42 148 52 148C60 145 58 135 55 128Z" fill="currentColor" fillOpacity="0.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

// Hand Line Art in Terracotta Arch (Hero Right & Footer)
export function HandArtArch({ variant = "hero", className = "" }) {
  if (variant === "footer") {
    return (
      <div className={`relative flex items-center justify-center rounded-t-full border border-forest-600/60 bg-forest-900/60 p-4 ${className}`}>
        <svg viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-cream-200/70">
          {/* Subtle outer arch */}
          <path d="M10 150V50C10 27.9086 27.9086 10 50 10C72.0914 10 90 27.9086 90 50V150" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          {/* Delicate hand gesture */}
          <path d="M48 140V105C48 95 44 85 40 75C36 65 37 55 42 50C46 46 50 49 52 56C53 62 55 70 57 76" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M52 56C53 45 58 40 63 43C67 46 66 55 64 65C62 73 60 82 60 90" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M63 43C65 36 71 34 75 39C78 44 75 52 72 62C70 70 68 80 67 92" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M75 39C78 35 83 37 84 42C85 48 80 58 77 68" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          {/* Sparkles */}
          <path d="M25 40L27 45L32 47L27 49L25 54L23 49L18 47L23 45L25 40Z" fill="currentColor" opacity="0.8" />
          <path d="M78 115L79 118L82 119L79 120L78 123L77 120L74 119L77 118L78 115Z" fill="currentColor" opacity="0.8" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-t-[100px] sm:rounded-t-[140px] bg-terracotta-600 p-4 sm:p-6 shadow-terracotta ${className}`}>
      {/* Background radial soft aura */}
      <div className="absolute inset-0 bg-gradient-to-b from-terracotta-500/40 via-terracotta-600 to-terracotta-700/80 pointer-events-none" />
      
      {/* Arched border outline */}
      <div className="absolute inset-2 sm:inset-3 rounded-t-[90px] sm:rounded-t-[130px] border border-white/25 pointer-events-none" />

      {/* Hand line art in white/cream */}
      <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-full h-auto text-cream-50 filter drop-shadow-sm">
        {/* Arm and wrist */}
        <path d="M50 190C50 170 54 150 56 135C58 120 54 110 50 98C46 86 44 72 49 60C53 50 59 52 61 62C62 70 65 82 67 90" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        {/* Long index finger */}
        <path d="M60 60C62 46 68 38 74 42C79 46 78 58 75 70C73 80 71 92 71 102" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        {/* Middle finger with delicate nail */}
        <path d="M74 42C77 30 84 28 89 33C93 39 90 52 86 65C83 75 80 88 79 105" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        {/* Ring finger */}
        <path d="M89 33C92 28 98 30 100 37C102 44 97 56 93 68C90 78 88 92 86 110" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Pinky finger */}
        <path d="M100 45C103 44 107 48 107 55C106 63 101 75 98 88" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        {/* Thumb curving gently */}
        <path d="M50 120C40 115 32 105 32 94C32 85 38 80 43 85C48 90 50 102 52 110" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Polished fingernail accents */}
        <path d="M71 40C72 38 75 38 76 41" stroke="#FAF7F2" strokeWidth="2" strokeLinecap="round" />
        <path d="M85 30C86 28 89 28 90 31" stroke="#FAF7F2" strokeWidth="2" strokeLinecap="round" />
        <path d="M96 32C97 30 100 30 100 34" stroke="#FAF7F2" strokeWidth="2" strokeLinecap="round" />

        {/* Floating sparkles */}
        <path d="M22 45L24 50L29 52L24 54L22 59L20 54L15 52L20 50L22 45Z" fill="#FAF7F2" opacity="0.9" />
        <path d="M98 120L99 123L102 124L99 125L98 128L97 125L94 124L97 123L98 120Z" fill="#FAF7F2" opacity="0.9" />
        <circle cx="28" cy="80" r="1.5" fill="#FAF7F2" opacity="0.6" />
        <circle cx="104" cy="95" r="1.5" fill="#FAF7F2" opacity="0.6" />
      </svg>
    </div>
  );
}

// Instagram Icon
export function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

// Newsletter Botanical Leaves vector
export function NewsletterLeaves({ className = "w-32 h-32 text-forest-300" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 110C30 90 60 60 90 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7" />
      <path d="M40 85C30 75 28 65 35 68C42 71 44 80 40 85Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      <path d="M60 65C50 55 48 45 55 48C62 51 64 60 60 65Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      <path d="M80 45C70 35 68 25 75 28C82 31 84 40 80 45Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      <path d="M50 78C62 70 70 72 68 80C65 85 55 82 50 78Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      <path d="M70 58C82 50 90 52 88 60C85 65 75 62 70 58Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}


