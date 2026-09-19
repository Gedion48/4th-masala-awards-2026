import React from "react";
import { SITE_CONFIG } from "../../data/site";
import { ASSETS } from "../../data/assets";
import {
  Sparkles,
  Crown,
  Trophy,
  Footprints,
  Globe2,
  GraduationCap,
  ShieldCheck,
  Landmark,
  Compass,
  ArrowRight,
} from "lucide-react";

export const MasalaWeekSection: React.FC = () => {
  const { masalaWeek } = SITE_CONFIG;

  const eventIcons: Record<string, React.ReactNode> = {
    "miss-kambata": <Crown className="w-5 h-5 text-[#B08A45]" />,
    "masala-awards": <Trophy className="w-5 h-5 text-[#B08A45]" />,
    "masalaa-great-run": <Footprints className="w-5 h-5 text-[#B08A45]" />,
  };

  const eventImages: Record<string, string> = {
    "miss-kambata": ASSETS.missKambataPageant,
    "masala-awards": ASSETS.masalaCulturalDance,
    "masalaa-great-run": ASSETS.amberichoMountain,
  };

  const objectiveIcons = [
    <Landmark className="w-4 h-4 text-[#6F1D2E]" key="1" />,
    <GraduationCap className="w-4 h-4 text-[#6F1D2E]" key="2" />,
    <Globe2 className="w-4 h-4 text-[#6F1D2E]" key="3" />,
    <Sparkles className="w-4 h-4 text-[#B08A45]" key="4" />,
    <Compass className="w-4 h-4 text-[#6F1D2E]" key="5" />,
  ];

  const scrollToCategories = () => {
    const el = document.getElementById("categories");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="masala-week"
      className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#D9D3C8]/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Pre-header & Title */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#6F1D2E]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6F1D2E]">
              Kambata New Year Festival
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1D1D1B] tracking-tight">
            MASALA WEEK
          </h2>
          <p className="mt-2 font-serif italic text-2xl sm:text-3xl text-[#B08A45]">
            Purpose &amp; Objectives
          </p>

          <p className="mt-5 text-base sm:text-lg text-[#1D1D1B]/85 font-sans leading-relaxed">
            {masalaWeek.purposeLead}
          </p>
          <p className="mt-3 text-sm sm:text-base text-[#4A3528] font-sans leading-relaxed">
            {masalaWeek.purposeBody}
          </p>
        </div>

        {/* UNESCO Recognition Special Feature Banner */}
        <div className="mb-16 p-6 sm:p-8 bg-white border border-[#D9D3C8] rounded-2xl shadow-xs text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#B08A45]/5 rounded-bl-full pointer-events-none" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#6F1D2E]/10 text-[#6F1D2E] text-[11px] font-bold uppercase tracking-wider">
                  <Globe2 className="w-3.5 h-3.5 text-[#6F1D2E]" />
                  Global Heritage Vision
                </span>
                <span className="text-xs font-mono text-[#B08A45] font-semibold">
                  Intangible Cultural Heritage
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1D1D1B]">
                Aspiration for UNESCO Recognition of Mesala
              </h3>
              <p className="text-xs sm:text-sm text-[#4A3528] font-sans leading-relaxed">
                A cornerstone mandate of Masala Week is the comprehensive
                documentation, national registration, and scholarly archiving of
                Kambata New Year traditions, rituals, and seasonal social
                institutions to support the long-term international inscription
                of Mesala as UNESCO Intangible Cultural Heritage.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 px-4 py-2.5 bg-[#FAF9F5] border border-[#D9D3C8] rounded-xl">
              <ShieldCheck className="w-5 h-5 text-[#536B55]" />
              <div className="text-left">
                <span className="block text-[11px] font-bold uppercase text-[#1D1D1B] tracking-wider">
                  Cultural Documentation
                </span>
                <span className="block text-[10px] text-[#4A3528]">
                  Visit Kambata Tour &amp; Event Org.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Key Objectives Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 text-left">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#B08A45] tracking-widest block">
                Official Strategic Framework
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1D1D1B]">
                Key Objectives of Masala Week
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {masalaWeek.keyObjectives.map((obj, index) => (
              <div
                key={obj.number}
                className={`p-6 bg-white border border-[#D9D3C8] rounded-xl flex flex-col justify-between hover:border-[#B08A45] transition-all shadow-2xs ${
                  index === 3
                    ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-[#FAF9F5]"
                    : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#6F1D2E]/10 text-[#6F1D2E]">
                      Objective {obj.number}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FAF9F5] border border-[#D9D3C8] flex items-center justify-center">
                      {objectiveIcons[index]}
                    </div>
                  </div>

                  <h4 className="font-serif text-base font-semibold text-[#1D1D1B] mb-2">
                    {obj.highlight}
                  </h4>

                  <p className="text-sm text-[#4A3528] font-sans leading-relaxed">
                    {obj.text}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#D9D3C8]/50 flex items-center justify-between text-[11px] text-[#4A3528]/80 font-mono">
                  <span>Pillar {obj.number}</span>
                  <span className="text-[#6F1D2E] font-medium">
                    Masala Initiative
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Major Events of Masala Week */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 text-left gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#6F1D2E] tracking-widest block mb-1">
                Festival Program
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#1D1D1B]">
                Major Events
              </h3>
              <p className="text-sm text-[#4A3528] mt-1 font-sans">
                Three flagship initiatives bringing together culture, tourism,
                youth, talent, sports, and community participation.
              </p>
            </div>
            <span className="text-xs font-mono text-[#B08A45] tracking-wider uppercase font-semibold">
              Visit Kambata Official Calendar
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {masalaWeek.majorEvents.map((event) => {
              const img = eventImages[event.id];
              return (
                <div
                  key={event.id}
                  className="bg-white border border-[#D9D3C8] rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
                >
                  {/* Event Visual Photo */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#E9E3D8]">
                    {img && (
                      <img
                        src={img}
                        alt={event.name}
                        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1B]/80 via-transparent to-transparent" />

                    {/* Badge top left */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#1D1D1B]/80 backdrop-blur-sm text-white text-[10px] font-mono uppercase tracking-wider font-semibold border border-white/20">
                        {eventIcons[event.id]}
                        {event.badge}
                      </span>
                    </div>

                    {/* Bottom overlay title */}
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h4 className="font-serif text-lg sm:text-xl font-semibold leading-snug">
                        {event.name}
                      </h4>
                      <p className="text-xs text-[#E9E3D8] font-sans font-light">
                        {event.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-xs sm:text-sm text-[#4A3528] font-sans leading-relaxed">
                      {event.description}
                    </p>

                    <div className="pt-4 border-t border-[#D9D3C8]/70 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-[#6F1D2E] font-medium">
                        {event.pillar}
                      </span>

                      {event.id === "masala-awards" ? (
                        <button
                          onClick={scrollToCategories}
                          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#6F1D2E] hover:text-[#591624]"
                        >
                          <span>Explore Categories</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <span className="text-[10px] font-mono uppercase text-[#B08A45] tracking-wider font-semibold">
                          Masala Week Program
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
