import React, { useState } from 'react';
import { X, Play, Clock, Sparkles, CheckCircle2, BookOpen } from 'lucide-react';
import { TUTORIALS } from '../data';

export default function TutorialModal({ open, onClose }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!open) return null;

  const currentTutorial = TUTORIALS[activeTab] || TUTORIALS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-ink/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl overflow-hidden border border-cream-300 z-10 animate-scaleUp max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-4 xs:px-6 py-3.5 xs:py-4 border-b border-cream-300 bg-cream-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 xs:w-5 xs:h-5 text-terracotta-600" />
            <div>
              <h3 className="font-serif text-base xs:text-lg font-semibold text-forest-900 leading-tight">
                Nailora Masterclass Academy
              </h3>
              <p className="text-[10px] xs:text-[11px] text-ink-muted">
                Step-by-step tutorials from professional salon artisans
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

        {/* Tutorial Tabs */}
        <div className="flex border-b border-cream-200 bg-cream-100/60 overflow-x-auto px-3 xs:px-6">
          {TUTORIALS.map((t, idx) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`py-3 px-4 text-xs font-medium border-b-2 whitespace-nowrap transition-colors ${
                activeTab === idx
                  ? 'border-forest-800 text-forest-900 font-semibold'
                  : 'border-transparent text-ink-muted hover:text-ink'
              }`}
            >
              {t.title}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Simulated Video Player Banner */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-forest-950 flex items-center justify-center group shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85"
              alt="Video tutorial cover"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent" />

            {/* Play Button */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-terracotta-600/90 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
              <span className="mt-3 text-xs font-semibold tracking-wider uppercase text-cream-50">
                Watch High-Definition Masterclass
              </span>
            </div>

            <div className="absolute bottom-3 left-4 flex items-center gap-3 text-[11px] text-cream-200">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {currentTutorial.duration}
              </span>
              <span>•</span>
              <span className="bg-forest-800/80 px-2 py-0.5 rounded text-[10px]">
                {currentTutorial.level}
              </span>
            </div>
          </div>

          {/* Instructor & Bio */}
          <div>
            <span className="text-[11px] font-semibold text-terracotta-600 uppercase tracking-wider">
              Instructor
            </span>
            <h4 className="font-serif text-lg text-forest-900">
              {currentTutorial.instructor}
            </h4>
          </div>

          {/* Step-by-Step Instructions */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-forest-900 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-terracotta-600" />
              <span>Step-by-Step Technique</span>
            </h5>

            <ol className="space-y-3">
              {currentTutorial.steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-ink/90 leading-relaxed bg-cream-50 p-3 rounded-lg border border-cream-200">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-800 text-[10px] font-bold text-white">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-cream-200 bg-cream-50 flex items-center justify-between">
          <span className="text-[11px] text-ink-muted">
            All nail art kits featured in tutorials are available in our shop.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="btn-forest text-xs py-2 px-5"
          >
            Close Masterclass
          </button>
        </div>

      </div>
    </div>
  );
}
