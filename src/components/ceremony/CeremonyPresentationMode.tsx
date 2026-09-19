import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AWARD_CATEGORIES } from '../../data/categories';
import { OFFICIAL_NOMINEES } from '../../data/nominees';
import { OFFICIAL_WINNERS } from '../../data/winners';
import { AwardCategory } from '../../data/types';
import {
  Maximize,
  Minimize,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Trophy,
  RotateCcw,
  Eye,
  EyeOff,
  Shield,
  Layers,
} from 'lucide-react';

interface CeremonyPresentationModeProps {
  isOpen: boolean;
  onClose: () => void;
}

type PresentationStep = 'cover' | 'category' | 'nominees' | 'suspense' | 'winner';

export const CeremonyPresentationMode: React.FC<CeremonyPresentationModeProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState<number>(0);
  const [step, setStep] = useState<PresentationStep>('cover');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);

  const activeCategory: AwardCategory = AWARD_CATEGORIES[currentCategoryIndex] || AWARD_CATEGORIES[0];

  // Check if there are official nominees or winners for the active category
  const categoryNominees = OFFICIAL_NOMINEES.filter(
    (n) => n.categoryId === activeCategory.id
  );
  const categoryWinner = OFFICIAL_WINNERS.find(
    (w) => w.categoryId === activeCategory.id
  );

  // Fullscreen toggle handler
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const handleNext = useCallback(() => {
    if (step === 'cover') setStep('category');
    else if (step === 'category') setStep('nominees');
    else if (step === 'nominees') setStep('suspense');
    else if (step === 'suspense') setStep('winner');
    else if (step === 'winner') {
      // Go to next category cover/category
      if (currentCategoryIndex < AWARD_CATEGORIES.length - 1) {
        setCurrentCategoryIndex((prev) => prev + 1);
        setStep('category');
      } else {
        setStep('cover');
      }
    }
  }, [step, currentCategoryIndex]);

  const handlePrev = useCallback(() => {
    if (step === 'winner') setStep('suspense');
    else if (step === 'suspense') setStep('nominees');
    else if (step === 'nominees') setStep('category');
    else if (step === 'category') {
      if (currentCategoryIndex > 0) {
        setCurrentCategoryIndex((prev) => prev - 1);
        setStep('winner');
      } else {
        setStep('cover');
      }
    } else if (step === 'cover') {
      // already at start
    }
  }, [step, currentCategoryIndex]);

  const handleReveal = () => {
    setStep('winner');
  };

  const handleReset = () => {
    setStep('cover');
    setCurrentCategoryIndex(0);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key.toLowerCase() === 'r') {
        handleReveal();
      } else if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      } else if (e.key.toLowerCase() === 'h') {
        setShowControls((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="ceremony-presentation-overlay"
      className="fixed inset-0 z-[9999] bg-[#0C0F0D] text-[#FAF9F5] flex flex-col justify-between overflow-hidden select-none font-sans"
    >
      {/* Subtle top ambient gradient and cultural accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(176,138,69,0.12)_0%,_rgba(12,15,13,0.98)_70%)] pointer-events-none" />
      
      {/* Top Ceremony Stage Banner */}
      <header className="relative z-10 w-full px-8 py-5 border-b border-[#2A312B] flex items-center justify-between bg-[#0C0F0D]/80 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <img
            src="/visit-kembata-logo-dark.svg"
            alt="Visit Kambata Logo"
            className="h-9 w-auto"
            referrerPolicy="no-referrer"
          />
          <div className="h-6 w-px bg-[#353E37]" />
          <div>
            <span className="font-serif text-sm tracking-wider uppercase text-[#B08A45] font-semibold block">
              4th MASALA AWARDS 2026
            </span>
            <span className="text-[10px] tracking-widest text-[#A0AAA2] uppercase">
              Official Stage Ceremony • 16:9 Presentation Mode
            </span>
          </div>
        </div>

        {/* Current Category Indicator */}
        <div className="hidden md:flex items-center gap-2">
          {AWARD_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => {
                setCurrentCategoryIndex(idx);
                setStep('category');
              }}
              title={cat.name}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                idx === currentCategoryIndex
                  ? 'bg-[#6F1D2E] text-white font-bold border border-[#B08A45]'
                  : 'bg-[#181E19] text-[#7E8B81] hover:text-white border border-[#263028]'
              }`}
            >
              {cat.code}
            </button>
          ))}
        </div>

        {/* Presentation Controls Quick Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowControls(!showControls)}
            className="p-2 text-[#A0AAA2] hover:text-white rounded hover:bg-[#1A211B] transition-colors"
            title={showControls ? 'Hide Controls (H)' : 'Show Controls (H)'}
          >
            {showControls ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 text-[#A0AAA2] hover:text-white rounded hover:bg-[#1A211B] transition-colors"
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            className="p-2 text-[#E9E3D8] hover:text-white bg-[#6F1D2E]/80 hover:bg-[#6F1D2E] rounded transition-colors"
            title="Exit Presentation (ESC)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* CENTER STAGE CANVAS (Designed for 1920x1080 display) */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-6 sm:p-12 text-center">
        <AnimatePresence mode="wait">
          
          {/* 1. COVER SLIDE */}
          {step === 'cover' && (
            <motion.div
              key="slide-cover"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B08A45]/40 bg-[#161D17]/80 text-[#B08A45] text-xs uppercase tracking-[0.3em] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Visit Kambata Tour &amp; Event Organization</span>
              </div>

              <div className="space-y-3">
                <span className="font-serif text-3xl sm:text-4xl text-[#B08A45] font-light italic tracking-wider block">
                  The 4th Annual
                </span>
                <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-none">
                  MASALA AWARDS
                </h1>
                <span className="font-serif text-4xl sm:text-6xl text-[#E9E3D8]/90 font-light tracking-[0.2em] block pt-2">
                  2026
                </span>
              </div>

              <p className="font-display italic text-2xl sm:text-3xl lg:text-4xl text-[#D9D3C8] max-w-3xl mx-auto leading-snug">
                “Celebrating Contribution, Service &amp; Excellence in the Kambata Community”
              </p>

              <div className="pt-6">
                <button
                  onClick={() => setStep('category')}
                  className="px-8 py-3.5 bg-[#6F1D2E] hover:bg-[#832236] text-white text-sm font-bold uppercase tracking-[0.2em] rounded-md transition-all shadow-lg border border-[#B08A45]/40"
                >
                  Begin Ceremony Presentation
                </button>
              </div>
            </motion.div>
          )}

          {/* 2. CATEGORY SLIDE */}
          {step === 'category' && (
            <motion.div
              key={`slide-cat-${activeCategory.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl space-y-8"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-[#B08A45]" />
                <span className="font-mono text-sm sm:text-base font-bold text-[#B08A45] uppercase tracking-[0.3em]">
                  AWARD SECTOR {activeCategory.code} OF 08
                </span>
                <span className="h-px w-12 bg-[#B08A45]" />
              </div>

              <div className="space-y-3">
                <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white font-medium tracking-tight leading-tight">
                  {activeCategory.name}
                </h2>
                <span className="text-base sm:text-xl font-medium tracking-wider text-[#A0AAA2] uppercase block">
                  {activeCategory.sector}
                </span>
              </div>

              <p className="font-display italic text-xl sm:text-2xl text-[#E9E3D8] max-w-2xl mx-auto leading-relaxed border-t border-b border-[#2A312B] py-4">
                {activeCategory.shortDescription}
              </p>

              {/* Criteria Pills preview */}
              <div className="flex flex-wrap justify-center gap-2.5 pt-2 max-w-3xl mx-auto">
                {activeCategory.criteria.map((c, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded bg-[#181E19] border border-[#2B352D] text-xs text-[#CCD5CF]"
                  >
                    {c.label} ({c.weight}%)
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* 3. NOMINEES SLIDE */}
          {step === 'nominees' && (
            <motion.div
              key={`slide-nom-${activeCategory.id}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl space-y-8"
            >
              <div className="space-y-1">
                <span className="font-mono text-xs text-[#B08A45] uppercase tracking-[0.25em]">
                  Sector {activeCategory.code} • {activeCategory.name}
                </span>
                <h2 className="font-serif text-4xl sm:text-6xl text-white font-semibold tracking-tight">
                  OFFICIAL NOMINEES
                </h2>
              </div>

              {categoryNominees.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {categoryNominees.map((nom) => (
                    <div
                      key={nom.id}
                      className="p-6 rounded-xl bg-[#181E19] border border-[#2B352D] text-left space-y-2"
                    >
                      <h3 className="font-serif text-2xl font-bold text-white">{nom.name}</h3>
                      <p className="text-xs text-[#B08A45] font-medium">{nom.titleOrRole}</p>
                      <p className="text-xs text-[#A0AAA2]">{nom.shortAchievement}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-10 rounded-2xl bg-[#141A15] border border-[#2B352D] max-w-2xl mx-auto space-y-4">
                  <Shield className="w-12 h-12 text-[#B08A45] mx-auto opacity-80" />
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                    Verified Shortlist Dossier
                  </h3>
                  <p className="text-sm text-[#A0AAA2] leading-relaxed font-sans">
                    Official nominee dossiers evaluated by the Masala Award Committee across documented achievements and community service.
                  </p>
                  <span className="inline-block px-4 py-1.5 rounded bg-[#6F1D2E]/40 border border-[#6F1D2E] text-xs font-semibold text-[#E9E3D8]">
                    Committee Sealed Determination
                  </span>
                </div>
              )}
            </motion.div>
          )}

          {/* 4. SUSPENSE SLIDE: "AND THE AWARD GOES TO..." */}
          {step === 'suspense' && (
            <motion.div
              key="slide-suspense"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl space-y-8"
            >
              <span className="font-mono text-xs sm:text-sm text-[#B08A45] uppercase tracking-[0.3em]">
                {activeCategory.name}
              </span>

              <div className="py-8">
                <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white font-light italic tracking-wider leading-tight">
                  “And the Award goes to...”
                </h2>
              </div>

              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#B08A45] animate-ping" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#A0AAA2]">
                  Unsealing Official Committee Determination
                </span>
              </div>
            </motion.div>
          )}

          {/* 5. WINNER REVEAL SLIDE (CINEMATIC, READABLE FROM DISTANCE) */}
          {step === 'winner' && (
            <motion.div
              key={`slide-winner-${activeCategory.id}`}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl space-y-8 text-center"
            >
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#6F1D2E] border border-[#B08A45] text-white text-xs font-bold uppercase tracking-[0.25em]">
                <Trophy className="w-4 h-4 text-[#B08A45]" />
                <span>Winner Announcement • Masala Awards 2026</span>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-sm sm:text-base font-bold text-[#B08A45] uppercase tracking-[0.25em] block">
                  {activeCategory.name}
                </span>

                {/* WINNER NAME: Very large, ceremonial serif */}
                <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight">
                  {categoryWinner ? categoryWinner.winnerName : '[Winner Announced on Stage]'}
                </h2>
              </div>

              {/* Achievement / Recognition text */}
              <div className="max-w-2xl mx-auto p-6 rounded-xl bg-[#141A15] border border-[#2B352D] space-y-2">
                <span className="text-xs uppercase font-bold tracking-wider text-[#B08A45] block">
                  {categoryWinner ? categoryWinner.citationTitle : 'Official Committee Citation'}
                </span>
                <p className="font-display italic text-lg sm:text-2xl text-[#E9E3D8] leading-relaxed">
                  {categoryWinner
                    ? `“${categoryWinner.citationText}”`
                    : '“Conferred in recognition of outstanding contribution, exemplary leadership, and lasting service to the Kambata community.”'}
                </p>
              </div>

              <div className="flex items-center justify-center gap-6 text-xs text-[#A0AAA2] font-mono">
                <span>SECTOR {activeCategory.code}</span>
                <span>•</span>
                <span>4th MASALA AWARDS</span>
                <span>•</span>
                <span>VISIT KAMBATA</span>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* DISCREET BOTTOM PRESENTATION CONTROLS (Hidden or visible via toggle) */}
      {showControls && (
        <footer className="relative z-10 w-full px-8 py-4 border-t border-[#2A312B] bg-[#0C0F0D]/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
          
          {/* Left: Step navigation status */}
          <div className="flex items-center gap-3 text-xs text-[#A0AAA2]">
            <span className="font-mono text-[#B08A45] font-bold">
              {step.toUpperCase()}
            </span>
            <span>•</span>
            <span>
              Category {currentCategoryIndex + 1} of {AWARD_CATEGORIES.length}
            </span>
            <span>•</span>
            <span className="hidden sm:inline text-[#7E8B81]">
              Shortcuts: Space/Arrows (Navigate) | R (Reveal) | F (Fullscreen) | H (Hide UI)
            </span>
          </div>

          {/* Center: Stage Control Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="inline-flex items-center gap-1 px-4 py-2 bg-[#181E19] hover:bg-[#252E27] text-white text-xs font-semibold rounded border border-[#2B352D] transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            {step !== 'winner' && (
              <button
                onClick={handleReveal}
                className="inline-flex items-center gap-1.5 px-5 py-2 bg-[#B08A45] hover:bg-[#C2994E] text-[#1D1D1B] text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm"
              >
                <Trophy className="w-3.5 h-3.5" />
                <span>Reveal Winner</span>
              </button>
            )}

            <button
              onClick={handleNext}
              className="inline-flex items-center gap-1 px-5 py-2 bg-[#6F1D2E] hover:bg-[#832236] text-white text-xs font-bold uppercase tracking-wider rounded border border-[#B08A45]/30 transition-colors"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleReset}
              className="p-2 text-[#A0AAA2] hover:text-white rounded hover:bg-[#1A211B] transition-colors"
              title="Reset Presentation to Title"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right: Exit action */}
          <div>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs text-[#E9E3D8] hover:text-white border border-[#2A312B] hover:border-[#6F1D2E] rounded transition-colors"
            >
              Exit Presentation
            </button>
          </div>

        </footer>
      )}
    </div>
  );
};
