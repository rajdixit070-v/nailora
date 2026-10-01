export const BRAND = {
  name: 'Nailora',
  tagline: 'ART AT YOUR FINGERTIPS',
  mission: 'Empowering creativity through premium nail products and artistic expression.',
  phone: '+1 (800) 482-NAIL',
  email: 'concierge@nailora.com',
  address: 'SOHO Design District, New York, NY 10012',
  instagram: 'https://instagram.com',
  tiktok: 'https://tiktok.com',
  youtube: 'https://youtube.com',
  pinterest: 'https://pinterest.com',
};

export const NAV_LINKS = [
  { name: 'Home', href: '#home', id: 'home' },
  { 
    name: 'Shop', 
    href: '#shop', 
    id: 'shop',
    hasDropdown: true,
    dropdownItems: [
      { name: 'All Products', href: '#shop' },
      { name: 'Color Collections', href: '#categories' },
      { name: 'Professional Tools', href: '#categories' },
      { name: 'Nail Accessories & Charms', href: '#categories' },
      { name: 'Luxury Press-On Sets', href: '#categories' },
      { name: 'Curated Bundles & Sets', href: '#bento' },
    ]
  },
  { name: 'Collections', href: '#categories', id: 'categories' },
  { name: 'Tutorials', href: '#tutorials', id: 'tutorials' },
  { name: 'About Us', href: '#about', id: 'about' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export const TRUST_PILLARS = [
  {
    id: 1,
    icon: 'leaf',
    title: 'Premium Quality',
    subtitle: 'Salon grade products',
    description: 'High-pigment formulas engineered for 21+ days of chip-resistant, glass-like shine.'
  },
  {
    id: 2,
    icon: 'heart',
    title: 'Cruelty Free',
    subtitle: 'Beauty with kindness',
    description: '100% vegan, Leaping Bunny certified, ethical sourcing with no animal testing ever.'
  },
  {
    id: 3,
    icon: 'shield',
    title: 'Secure Payments',
    subtitle: 'Safe & trusted checkout',
    description: '256-bit encrypted transactions with Apple Pay, Google Pay, and major cards.'
  },
  {
    id: 4,
    icon: 'globe',
    title: 'Worldwide Shipping',
    subtitle: 'Delivering beauty globally',
    description: 'Carbon-neutral tracked priority delivery to over 75 countries worldwide.'
  },
];

export const CATEGORIES = [
  {
    id: 'color-collections',
    title: 'Color Collections',
    actionText: 'SHOP NOW →',
    image: '/images/cat_color_collections.jpg',
    highResImage: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=85',
    itemCount: '48 Lacquer Shades',
    description: 'Ultra-pigmented gel polishes, velvet cat-eyes, and glossy crème formulations.'
  },
  {
    id: 'professional-tools',
    title: 'Professional Tools',
    actionText: 'SHOP NOW →',
    image: '/images/cat_professional_tools.jpg',
    highResImage: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=85',
    itemCount: '32 Precision Tools',
    description: 'Kolinsky sable liner brushes, dual-ended dotters, and surgical steel implements.'
  },
  {
    id: 'nail-accessories',
    title: 'Nail Accessories',
    actionText: 'SHOP NOW →',
    image: '/images/cat_nail_accessories.jpg',
    highResImage: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=85',
    itemCount: '120+ Charms & Gems',
    description: 'Baroque pearls, 3D golden butterfly charms, aurora chrome powders, and crystals.'
  },
  {
    id: 'press-on-designs',
    title: 'Press-On Designs',
    actionText: 'SHOP NOW →',
    image: '/images/cat_press_on.jpg',
    highResImage: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=85',
    itemCount: '24 Reusable Sets',
    description: 'Hand-painted reusable salon-grade press-on nails tailored for flawless 10-minute wear.'
  },
];

export const BENTO_ITEMS = [
  {
    id: 'tutorial-split',
    type: 'split',
    left: {
      title: 'Learn. Create. Inspire.',
      description: 'Step-by-step tutorials from professional artists.',
      buttonText: 'EXPLORE TUTORIALS',
      action: 'open_tutorials',
    },
    right: {
      image: '/images/bento_tutorial.jpg',
      highResImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=85',
      alt: 'Nail artist hand painting delicate botanical details on client fingernail'
    }
  },
  {
    id: 'trending-styles',
    type: 'card',
    title: 'Trending Styles',
    description: 'Stay ahead with the latest nail art trends.',
    actionText: 'DISCOVER NOW →',
    image: '/images/bento_trending.jpg',
    highResImage: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=700&q=85',
    tag: 'Trending 2026',
    alt: 'Delicate floral micro-french manicure with gold rings'
  },
  {
    id: 'bundles-save',
    type: 'card',
    title: 'Bundles & Save',
    description: 'Curated bundles for every nail lover.',
    actionText: 'SHOP BUNDLES →',
    image: '/images/bento_bundles.jpg',
    highResImage: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=700&q=85',
    tag: 'Save up to 30%',
    alt: 'Luxury unboxing of Nailora polish bottles and tools'
  }
];

export const UGC_LOOKS = [
  {
    id: 1,
    image: '/images/look1.jpg',
    highResImage: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=85',
    artist: '@seraphina_nails',
    style: 'Velvet Emerald & Gold Leaf',
    products: ['Pine Noir Gel Lacquer', '24K Liquid Gold Foil'],
    likes: '1.4k'
  },
  {
    id: 2,
    image: '/images/look2.jpg',
    highResImage: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=85',
    artist: '@botanical_claws',
    style: 'Hand-painted Sage Daisy',
    products: ['Sage Mist Lacquer', 'Detailer Liner #00'],
    likes: '2.8k'
  },
  {
    id: 3,
    image: '/images/look3.jpg',
    highResImage: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=85',
    artist: '@atelier_manicure',
    style: 'Olive Flora Press-On',
    products: ['Heirloom Botanical Set', 'Pro Nail Bond Adhesive'],
    likes: '984'
  },
  {
    id: 4,
    image: '/images/look4.jpg',
    highResImage: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=600&q=85',
    artist: '@glaze_couture',
    style: 'Syrup Jelly Blush & Glaze',
    products: ['Petal Dew Syrup Gel', 'Glass Mirror Top Coat'],
    likes: '3.1k'
  },
  {
    id: 5,
    image: '/images/look5.jpg',
    highResImage: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=600&q=85',
    artist: '@elena_atelier',
    style: 'Nude Bridal & Micro Chrome',
    products: ['Linen Silk Lacquer', 'Champagne Pearl Chrome'],
    likes: '1.9k'
  }
];

export const FEATURED_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Artisan Gel Lacquer — Forest Noir',
    category: 'color-collections',
    price: 18.00,
    rating: 4.9,
    reviews: 124,
    colorHex: '#1E3B30',
    image: '/images/cat_color_collections.jpg',
    highResImage: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=85',
    badge: 'Best Seller',
    description: 'Deep forest green gel lacquer formulated with diamond powder for intense pigment and 21-day chip-free shine.'
  },
  {
    id: 'prod-2',
    name: 'Artisan Gel Lacquer — Terracotta Sun',
    category: 'color-collections',
    price: 18.00,
    rating: 4.8,
    reviews: 98,
    colorHex: '#AF5C40',
    image: '/images/cat_color_collections.jpg',
    highResImage: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=85',
    badge: 'Staff Pick',
    description: 'Warm burnt clay coral infused with micro-shimmer that mirrors golden hour light.'
  },
  {
    id: 'prod-3',
    name: 'Pro Nail Art Kolinsky Sable Brush Set',
    category: 'professional-tools',
    price: 34.00,
    rating: 5.0,
    reviews: 215,
    image: '/images/cat_professional_tools.jpg',
    highResImage: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=600&q=85',
    badge: 'Salon Grade',
    description: 'Set of 5 ultra-fine precision liner and detailer brushes with balanced ergonomic handles.'
  },
  {
    id: 'prod-4',
    name: 'Celestial Butterfly & Pearl Charm Dish',
    category: 'nail-accessories',
    price: 22.00,
    rating: 4.9,
    reviews: 87,
    image: '/images/cat_nail_accessories.jpg',
    highResImage: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=85',
    badge: 'Trending',
    description: 'Over 120 pieces of curated 18K gold-plated charms, baroque freshwater pearls, and faceted rhinestones.'
  },
  {
    id: 'prod-5',
    name: 'Botanical Bloom Luxury Reusable Press-On Set',
    category: 'press-on-designs',
    price: 28.00,
    rating: 4.9,
    reviews: 164,
    image: '/images/cat_press_on.jpg',
    highResImage: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=85',
    badge: 'Hand-Crafted',
    description: 'Custom-painted botanical florals on soft almond nails with dual adhesive tabs and waterproof bond.'
  },
  {
    id: 'prod-6',
    name: 'The Master Artisan Trio Kit',
    category: 'color-collections',
    price: 48.00,
    originalPrice: 58.00,
    rating: 5.0,
    reviews: 73,
    image: '/images/bento_bundles.jpg',
    highResImage: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=85',
    badge: 'Save $10',
    description: 'Our top three editorial shades paired with high-gloss glass top coat and cuticle elixir.'
  }
];

export const INITIAL_CART_ITEMS = [
  {
    id: 'prod-1',
    name: 'Artisan Gel Lacquer — Forest Noir',
    price: 18.00,
    quantity: 1,
    image: '/images/cat_color_collections.jpg',
    shade: 'Forest Noir (#1E3B30)',
  },
  {
    id: 'prod-5',
    name: 'Botanical Bloom Luxury Press-On Set',
    price: 28.00,
    quantity: 1,
    image: '/images/cat_press_on.jpg',
    shade: 'Handcrafted Almond / Medium',
  }
];

export const TUTORIALS = [
  {
    id: 1,
    title: 'Mastering Fine Botanical Line Work',
    instructor: 'Chloe Vance, Senior Nailora Artisan',
    duration: '8 min masterclass',
    level: 'Intermediate',
    steps: [
      'Prep natural nail plate with dehydration buffer.',
      'Apply thin base coat and cure for 30s under LED lamp.',
      'Use 00 Kolinsky Liner with Forest Noir to trace stems with light featherweight pressure.',
      'Dot Terracotta Sun for flower centers with micro-stylus.',
      'Lock with Glass Mirror Top Coat and cure for 60s.'
    ]
  },
  {
    id: 2,
    title: 'Flawless 10-Minute Press-On Application',
    instructor: 'Elena Rostova, Celebrity Nail Artist',
    duration: '5 min masterclass',
    level: 'Beginner Friendly',
    steps: [
      'Push back cuticles and gently buff nail surface for grip.',
      'Wipe with alcohol prep pad to eliminate natural oils.',
      'Select matching nail sizes (err on smaller if between sizes).',
      'Apply bond resin to center of nail at 45 degree angle.',
      'Press firmly from cuticle to tip for 25 seconds.'
    ]
  },
  {
    id: 3,
    title: 'Syrup Jelly & Glazed Mirror Pigment Tutorial',
    instructor: 'Aria Chen, Tokyo Art Director',
    duration: '12 min masterclass',
    level: 'All Levels',
    steps: [
      'Layer Petal Dew Syrup Gel in two sheer coats.',
      'Apply non-wipe top coat and cure 30s.',
      'Burnish Champagne Pearl chrome powder with silicone applicator.',
      'Seal edges meticulously to prevent chrome lifting.'
    ]
  }
];
