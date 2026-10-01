import React, { useState } from 'react';
import { X, Camera, UploadCloud, CheckCircle2, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function ShareLookModal({ open, onClose, onSubmittedLook }) {
  const [handle, setHandle] = useState('');
  const [styleName, setStyleName] = useState('');
  const [productsUsed, setProductsUsed] = useState('Forest Noir Gel Lacquer, Pro Sable Liner #00');
  const [previewUrl, setPreviewUrl] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#AF5C40', '#1E3B30', '#EDE4D6']
      });
    } catch {}

    if (onSubmittedLook) {
      onSubmittedLook({
        handle: handle.startsWith('@') ? handle : `@${handle || 'nail_lover'}`,
        style: styleName || 'Artisan Gel Manicure',
        preview: previewUrl || '/images/look1.jpg'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-ink/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden border border-cream-300 z-10 animate-scaleUp max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="px-4 xs:px-6 py-3.5 xs:py-4 border-b border-cream-300 bg-cream-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 xs:w-5 xs:h-5 text-terracotta-600" />
            <div>
              <h3 className="font-serif text-base xs:text-lg font-semibold text-forest-900 leading-tight">
                Share Your Look
              </h3>
              <p className="text-[10px] xs:text-[11px] text-ink-muted">
                Tag #NailoraArt to be featured in our official gallery
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-cream-200 text-ink transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 xs:p-6">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-forest-100 flex items-center justify-center text-forest-800 mb-4 animate-scaleUp">
                <CheckCircle2 className="w-10 h-10 text-forest-800" />
              </div>
              <h4 className="font-serif text-2xl text-forest-900">
                Your Look is Submitted!
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-ink-muted max-w-xs">
                Thank you for inspiring the community. Your photo will appear in the #NailoraArt gallery shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-forest text-xs mt-6"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Photo Upload Area */}
              <div>
                <label className="block text-xs font-semibold text-forest-900 mb-1.5">
                  Upload Manicure Photo:
                </label>
                <label className="flex flex-col items-center justify-center border-2 border-dashed border-cream-300 rounded-xl p-6 bg-cream-50 hover:bg-cream-100 transition-colors cursor-pointer group">
                  {previewUrl ? (
                    <img 
                      src={previewUrl} 
                      alt="Preview" 
                      className="h-36 w-36 object-cover rounded-lg shadow-sm" 
                    />
                  ) : (
                    <>
                      <div className="h-12 w-12 rounded-full bg-cream-200 text-forest-800 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <UploadCloud className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium text-forest-900">
                        Click to select an image from your device
                      </span>
                      <span className="text-[10px] text-ink-muted mt-0.5">
                        JPG, PNG, or HEIC up to 10MB
                      </span>
                    </>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Instagram Handle */}
              <div>
                <label className="block text-xs font-semibold text-forest-900 mb-1">
                  Your Instagram / TikTok Handle:
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-ink-light font-medium">@</span>
                  <input
                    type="text"
                    required
                    value={handle.replace('@', '')}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="yourhandle"
                    className="w-full rounded-md border border-cream-300 pl-7 pr-3 py-2 text-xs outline-none focus:border-terracotta-500"
                  />
                </div>
              </div>

              {/* Look Style Name */}
              <div>
                <label className="block text-xs font-semibold text-forest-900 mb-1">
                  Style or Technique Name:
                </label>
                <input
                  type="text"
                  required
                  value={styleName}
                  onChange={(e) => setStyleName(e.target.value)}
                  placeholder="e.g. Velvet Botanical Ombre"
                  className="w-full rounded-md border border-cream-300 px-3 py-2 text-xs outline-none focus:border-terracotta-500"
                />
              </div>

              {/* Products used */}
              <div>
                <label className="block text-xs font-semibold text-forest-900 mb-1">
                  Nailora Products Used:
                </label>
                <input
                  type="text"
                  value={productsUsed}
                  onChange={(e) => setProductsUsed(e.target.value)}
                  className="w-full rounded-md border border-cream-300 px-3 py-2 text-xs outline-none focus:border-terracotta-500"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-terracotta text-xs py-3 rounded-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Submit to #NailoraArt Feed</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
