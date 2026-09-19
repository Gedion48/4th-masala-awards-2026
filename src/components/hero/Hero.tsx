import React from "react";
import { motion } from "motion/react";
import { ASSETS } from "../../data/assets";
import {
  ChevronRight,
  Sparkles,
  MapPin,
  ShieldCheck,
  Compass,
} from "lucide-react";

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#FAF9F5] border-b border-[#D9D3C8]/70"
    >
      {/* Subtle decorative background tint and editorial grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#D9D3C8_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: Ceremonial Editorial Typography (7 cols on large screens) */}
          <motion.div
            id="hero-typography-panel"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left space-y-6"
          >
            {/* Top metadata pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#6F1D2E]/10 border border-[#6F1D2E]/25 text-[#6F1D2E] text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#B08A45]" />
                Official Awards Portal
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#FAF9F5] border border-[#D9D3C8] text-[#4A3528] text-xs font-medium tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5 text-[#536B55]" />
                Visit Kambata Tour & Event Org.
              </span>
            </div>

            {/* Main Editorial Ceremony Display Headline */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light italic text-[#B08A45] tracking-tight">
                  4th Edition
                </span>
                <span className="h-px flex-1 bg-[#D9D3C8] max-w-[120px]" />
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#4A3528]/80 font-bold">
                  Kambata Heritage
                </span>
              </div>

              <h1 className="font-serif tracking-tight text-[#1D1D1B] leading-[0.94] text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
                <span className="block font-normal text-[#1D1D1B]">MASALA</span>
                <span className="block font-bold text-[#6F1D2E] italic">
                  AWARDS
                </span>
                <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1B]/90 font-light mt-1 tracking-widest">
                  2026
                </span>
              </h1>
            </div>

            {/* Subtitle / Theme */}
            <p className="font-display italic text-2xl sm:text-3xl text-[#4A3528] leading-snug font-normal max-w-2xl border-l-2 border-[#B08A45] pl-4 py-1">
              “Celebrating Contribution, Service &amp; Excellence in the Kambata
              Community”
            </p>

            {/* Organizer Credential Note */}
            <p className="text-base text-[#1D1D1B]/80 font-sans leading-relaxed max-w-xl">
              An official annual initiative organized by{" "}
              <strong className="text-[#1D1D1B] font-semibold">
                Visit Kambata Tour &amp; Event Organization
              </strong>{" "}
              to honor distinguished leadership, community service, and
              outstanding achievement across the Kambata highlands and the
              global diaspora.
            </p>

            {/* Call to Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="hero-explore-awards-btn"
                onClick={() => scrollToSection("categories")}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#6F1D2E] hover:bg-[#591624] rounded-md transition-all shadow-sm hover:shadow"
              >
                <span>Explore the Awards</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                id="hero-discover-categories-btn"
                onClick={() => scrollToSection("categories")}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-[#1D1D1B] bg-white border border-[#D9D3C8] hover:border-[#B08A45] hover:text-[#6F1D2E] rounded-md transition-all shadow-xs"
              >
                <Compass className="w-4 h-4 text-[#B08A45]" />
                <span>Discover the Categories</span>
              </button>
            </div>

            {/* Editorial Footer Strip */}
            <div className="pt-4 border-t border-[#D9D3C8]/70 flex flex-wrap items-center justify-between gap-4 text-xs text-[#4A3528]/80 font-sans">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#6F1D2E]" />
                <span>Kambata Zone &amp; Mount Ambericho</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#536B55]" />
                <span>Official Evaluation &amp; Festival Ceremony</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Authentic Editorial Landscape Frame (5 cols) */}
          <motion.div
            id="hero-image-panel"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Elegant double-border frame */}
            <div className="relative p-3 bg-white border border-[#D9D3C8] rounded-xl shadow-[0_12px_32px_rgba(74,53,40,0.06)]">
              {/* Decorative corner accents */}
              <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#B08A45]" />
              <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#B08A45]" />
              <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#B08A45]" />
              <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#B08A45]" />

              <div className="relative overflow-hidden rounded-lg aspect-[4/3] lg:aspect-[5/6] bg-[#E9E3D8]">
                <img
                  id="hero-landscape-image"
                  src={ASSETS.heroLandscape}
                  alt="Mount Ambericho with the historic 777 steps stairway ascending the green ridge in Kambata, Ethiopia"
                  className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle vignette gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1B]/80 via-transparent to-black/10" />

                {/* Floating caption at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#B08A45] animate-pulse" />
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#E9E3D8]">
                      MountHambericho • 777 Steps
                    </span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold leading-snug">
                    Mount Hambericho Summit Ridge
                  </h3>
                  <p className="text-xs text-white/80 font-sans mt-0.5 line-clamp-2">
                    The iconic 777-step mountain staircase and sacred highland
                    cradle uniting the Kambata community in pride, tourism, and
                    renewal.
                  </p>
                </div>
              </div>

              {/* Ceremonial Seal Badge */}
              <div className="mt-3 py-2 px-3 bg-[#FAF9F5] border border-[#D9D3C8] rounded-md flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#6F1D2E] text-white flex items-center justify-center font-serif text-xs font-bold">
                    4th
                  </div>
                  <div className="text-left">
                    <span className="block text-[11px] font-bold text-[#1D1D1B] uppercase tracking-wider">
                      Official 2026 Edition
                    </span>
                    <span className="block text-[10px] text-[#4A3528]/80">
                      Visit Kambata Tour &amp; Event Org.
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#B08A45] uppercase">
                  MASALA • 2026
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
