import React from "react";
import { ASSETS } from "../../data/assets";
import { SITE_CONFIG } from "../../data/site";
import { Mountain, Compass, Sparkles, Feather } from "lucide-react";

export const CulturalHeritageSection: React.FC = () => {
  return (
    <section
      id="heritage"
      className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#D9D3C8]/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#6F1D2E]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6F1D2E]">
              Authentic Visual Storytelling
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1D1D1B] tracking-tight">
            LANDSCAPE, CULTURE &amp; COMMUNITY
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A3528] font-display italic leading-relaxed">
            The enduring natural majesty and communal traditions that give
            meaning to the Masala celebration.
          </p>
        </div>

        {/* Editorial Photo Story Grid: Mountain 777 Steps & Ajora Twin Falls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Main Landscape Feature 1: Mount Ambericho & 777 Steps (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#D9D3C8] rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-[#E9E3D8]">
              <img
                src={ASSETS.amberichoMountain}
                alt="Mount Hambericho with the iconic 777 steps ascending the misty mountain ridge in Kambata"
                className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1B]/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Mountain className="w-4 h-4 text-[#B08A45]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E9E3D8]">
                    Sacred Landmark &amp; The 777 Steps
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold">
                  Mount Hambericho &amp; The Summit Ridge
                </h3>
              </div>
            </div>

            <div className="pt-5 px-2 text-left space-y-2">
              <p className="text-sm text-[#1D1D1B]/85 font-sans leading-relaxed">
                Rising majestically above the Kambata highlands, Mount Ambericho
                is renowned for its historic 777-step outdoor stone stairway
                ascending the crest into the clouds. As the spiritual and
                cultural cradle of Kambata civic assembly, it represents
                enduring fortitude, unity, and heritage tourism.
              </p>
              <div className="flex items-center justify-between text-xs text-[#4A3528]/80 pt-2 border-t border-[#D9D3C8]/60">
                <span className="font-serif italic">
                  Iconic 777 Steps • Highlands Topography
                </span>
                <span className="font-mono text-[11px] text-[#B08A45] font-semibold">
                  Visit Kambata Destination
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Features (5 cols): Ajora Twin Falls & Mesala Cultural Celebration */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Ajora Twin Falls Card */}
            <div className="bg-white border border-[#D9D3C8] rounded-2xl p-4 sm:p-5 flex-1 flex flex-col justify-between shadow-xs">
              <div className="relative overflow-hidden rounded-xl aspect-[16/9] bg-[#E9E3D8]">
                <img
                  src={ASSETS.ajoraTwinFalls}
                  alt="Ajora Twin Falls plunging side-by-side into a deep lush canyon gorge in Kambata"
                  className="w-full h-full object-cover object-center transform hover:scale-[1.03] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1B]/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Compass className="w-3.5 h-3.5 text-[#B08A45]" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#E9E3D8]">
                      Eco-Tourism Wonder
                    </span>
                  </div>
                  <span className="font-serif text-base sm:text-lg font-semibold block">
                    Ajora Twin Falls
                  </span>
                </div>
              </div>
              <div className="pt-3 text-left">
                <p className="text-xs text-[#1D1D1B]/80 font-sans leading-relaxed">
                  The legendary twin waterfalls plunging dramatically into the
                  canyon gorge, surrounded by lush flora and morning mist — a
                  premier destination promoted by Visit Kambata.
                </p>
              </div>
            </div>

            {/* Cultural Dancers & Mesala Fellowship Card */}
            <div className="bg-white border border-[#D9D3C8] rounded-2xl p-4 sm:p-5 flex-1 flex flex-col justify-between shadow-xs">
              <div className="relative overflow-hidden rounded-xl aspect-[16/9] bg-[#E9E3D8]">
                <img
                  src={ASSETS.masalaCulturalDance}
                  alt="Mesala New Year celebration dance with elders in traditional woven hats, robes, and drums"
                  className="w-full h-full object-cover object-center transform hover:scale-[1.03] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1B]/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#B08A45]" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#E9E3D8]">
                      Living Heritage
                    </span>
                  </div>
                  <span className="font-serif text-base sm:text-lg font-semibold block">
                    Mesala New Year Celebration
                  </span>
                </div>
              </div>
              <div className="pt-3 text-left">
                <p className="text-xs text-[#1D1D1B]/80 font-sans leading-relaxed">
                  Kambata elders and youth singing, drumming, and performing
                  ceremonial dances in handwoven attire with traditional hats
                  and staff emblems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cultural Narrative Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {SITE_CONFIG.culturalThemes.map((theme, i) => (
            <div
              key={theme.title}
              className="p-6 bg-white border border-[#D9D3C8] rounded-xl flex flex-col justify-between hover:border-[#B08A45] transition-colors shadow-2xs"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#B08A45] uppercase">
                  Heritage 0{i + 1}
                </span>
                <h4 className="font-serif text-base font-semibold text-[#1D1D1B] leading-snug">
                  {theme.title}
                </h4>
                <p className="text-xs font-medium text-[#6F1D2E]">
                  {theme.subtitle}
                </p>
                <p className="text-xs text-[#4A3528]/85 leading-relaxed font-sans pt-1">
                  {theme.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
