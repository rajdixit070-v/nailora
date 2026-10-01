import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Categories from './components/Categories';
import BentoPromo from './components/BentoPromo';
import LovedByArtists from './components/LovedByArtists';
import ProductCatalog from './components/ProductCatalog';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import TutorialModal from './components/TutorialModal';
import ShareLookModal from './components/ShareLookModal';
import LookDetailModal from './components/LookDetailModal';
import SearchModal from './components/SearchModal';
import AccountDrawer from './components/AccountDrawer';
import WhatsAppButton from './components/WhatsAppButton';
import ToastNotification from './components/ToastNotification';
import { INITIAL_CART_ITEMS, FEATURED_PRODUCTS } from './data';

export default function App() {
  // Cart state initialized with 2 items matching the reference image's "2" bag counter
  const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const [isShareLookOpen, setIsShareLookOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedLook, setSelectedLook] = useState(null);

  // Category filter state for shop section
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Toast notification state
  const [toast, setToast] = useState({ open: false, message: '' });

  const showToast = useCallback((message) => {
    setToast({ open: true, message });
  }, []);

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, open: false }));
  }, []);

  // Cart operations
  const handleAddToCart = useCallback((product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      const qtyToAdd = product.quantity || 1;

      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qtyToAdd }
            : item
        );
      } else {
        return [
          ...prevItems,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: qtyToAdd,
            image: product.image,
            shade: product.colorHex ? `Artisan Shade (${product.colorHex})` : 'Salon Exclusive',
          },
        ];
      }
    });

    showToast(`Added "${product.name}" to your bag!`);
  }, [showToast]);

  const handleUpdateQty = useCallback((id, newQty) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  }, []);

  const handleRemoveItem = useCallback((id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast('Item removed from bag');
  }, [showToast]);

  const handleClearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  // Category select scroll handler
  const handleSelectCategory = (catId) => {
    setCategoryFilter(catId);
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShopLook = (look) => {
    // Add first matching product
    const prod = FEATURED_PRODUCTS[0];
    handleAddToCart(prod);
    setIsCartOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-cream-50 text-ink font-sans selection:bg-terracotta-600 selection:text-white overflow-x-hidden">
      
      {/* 1. Header with brand logo, nav links, active section spy, and cart count */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        onNavigateCategory={(catName) => {
          const shopEl = document.getElementById('shop');
          if (shopEl) shopEl.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main>
        {/* 2. Hero Section: "Your Nails, Your Canvas." matching reference */}
        <Hero
          onShopClick={() => {
            const shopEl = document.getElementById('categories');
            if (shopEl) shopEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Trust & Value Proposition Bar: 4 Pillars */}
        <TrustBar />

        {/* 4. 4 Category Cards: Color Collections, Professional Tools, Accessories, Press-On */}
        <Categories onSelectCategory={handleSelectCategory} />

        {/* 5. Promotional Bento Grid: Tutorials Split, Trending Styles, Bundles & Save */}
        <BentoPromo
          onOpenTutorials={() => setIsTutorialOpen(true)}
          onDiscoverTrending={() => handleSelectCategory('press-on-designs')}
          onShopBundles={() => handleSelectCategory('color-collections')}
        />

        {/* 6. Interactive Featured Salon Formulations Shop Catalog */}
        <ProductCatalog
          selectedCategoryFilter={categoryFilter}
          onSelectCategoryFilter={setCategoryFilter}
          onAddToCart={handleAddToCart}
          onQuickView={setQuickViewProduct}
        />

        {/* 7. Loved by Nail Artists ♡ Community UGC Gallery + Terracotta #NailoraArt Card */}
        <LovedByArtists
          onSelectLook={setSelectedLook}
          onOpenShareLook={() => setIsShareLookOpen(true)}
        />

        {/* 8. Newsletter Email Subscription Banner */}
        <Newsletter />
      </main>

      {/* 9. Deep Forest Footer matching reference */}
      <Footer />

      {/* 10. Floating Interactive WhatsApp / VIP Stylist Concierge */}
      <WhatsAppButton />

      {/* 11. Shopping Bag Cart Slide-over Drawer */}
      <CartDrawer
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* 12. Quick View Product Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* 13. Video Tutorial Masterclass Modal */}
      <TutorialModal
        open={isTutorialOpen}
        onClose={() => setIsTutorialOpen(false)}
      />

      {/* 14. UGC #NailoraArt Share Look Modal */}
      <ShareLookModal
        open={isShareLookOpen}
        onClose={() => setIsShareLookOpen(false)}
        onSubmittedLook={(newLook) => {
          showToast(`Look "${newLook.style}" submitted for review!`);
        }}
      />

      {/* 15. Look Detail / Shop The Look Lightbox */}
      <LookDetailModal
        look={selectedLook}
        onClose={() => setSelectedLook(null)}
        onShopLook={handleShopLook}
      />

      {/* 16. Instant Product & Shade Search Modal */}
      <SearchModal
        open={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setQuickViewProduct(p)}
        onSelectCategory={handleSelectCategory}
      />

      {/* 17. VIP Atelier Account Drawer */}
      <AccountDrawer
        open={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />

      {/* 18. Floating Toast Notifications */}
      <ToastNotification
        open={toast.open}
        message={toast.message}
        onClose={hideToast}
        onOpenCart={() => {
          hideToast();
          setIsCartOpen(true);
        }}
      />

    </div>
  );
}
