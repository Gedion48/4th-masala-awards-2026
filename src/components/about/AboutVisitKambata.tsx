import React from "react";
import { motion } from "motion/react";
import { ASSETS } from "../../data/assets";
import { SITE_CONFIG } from "../../data/site";
import { Eye, Users, Landmark, Award } from "lucide-react";

export const AboutVisitKambata: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#D9D3C8]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[#B08A45]" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B08A45]">
            Organizing Institution
          </span>
          <span className="h-px flex-1 max-w-[80px] bg-[#D9D3C8]" />
        </div>

        {/* Header Block: Title & Motto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-baseline">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1D1D1B] tracking-tight">
              VISIT KAMBATA
            </h2>
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#6F1D2E] mt-1.5">
              Tour &amp; Event Organization
            </p>
          </div>

          <div className="lg:col-span-6">
            <p className="font-display italic text-2xl sm:text-3xl text-[#4A3528] leading-snug border-l-2 border-[#6F1D2E] pl-4">
              “{SITE_CONFIG.organizerMotto}”
            </p>
          </div>
        </div>

        {/* Editorial Layout: Photo Left + Official Text & Pillars Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Authentic Photograph / Traditional Craftsmanship */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="p-3 bg-[#FAF9F5] border border-[#D9D3C8] rounded-xl shadow-xs">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-[#E9E3D8]">
                <img
                  src={ASSETS.weavingHeritage}
                  alt="Authentic traditional Ethiopian and Kambata handwoven textile with intricate geometric border patterns"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1B]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#B08A45] block">
                    Heritage &amp; Identity
                  </span>
                  <span className="font-serif text-sm sm:text-base font-semibold">
                    Centuries of Artisan Craftsmanship &amp; Culture
                  </span>
                </div>
              </div>

              {/* Official Organization badge underneath photo */}
              <div className="mt-3 p-3 bg-white border border-[#D9D3C8] rounded-lg flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#1D1D1B] block">
                    Visit Kambata Tour &amp; Events
                  </span>
                  <span className="text-[10px] text-[#4A3528]/80 block">
                    Dedicated to Kambata heritage &amp; community
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-[#6F1D2E]">
                  EST. ANNUAL
                </span>
              </div>
            </div>
          </motion.div>

          {/* Official Description & Action Areas */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4 text-base text-[#1D1D1B]/85 font-sans leading-relaxed">
              <p className="text-lg text-[#1D1D1B] font-medium leading-relaxed">
                Visit Kambata Tour &amp; Event Organization is a Kambata-focused
                tourism and events organization dedicated to promoting Kambata
                culture, heritage, tourism destinations, talents, and community
                initiatives.
              </p>
              <p className="text-sm text-[#4A3528] leading-relaxed">
                Through media, tourism promotion, cultural programs,
                competitions, and community-centered events, Visit Kambata works
                to create greater visibility, opportunities, and pride for the
                Kambata community.
              </p>
            </div>

            {/* 4 Core Pillars of Impact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#FAF9F5] border border-[#D9D3C8] rounded-lg">
                <div className="flex items-center gap-2.5 text-[#6F1D2E] mb-1.5">
                  <Landmark className="w-4 h-4" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1B]">
                    Heritage &amp; Culture
                  </h4>
                </div>
                <p className="text-xs text-[#4A3528]/85 leading-relaxed">
                  Documenting and preserving ancestral traditions, oral
                  histories, and living festivals.
                </p>
              </div>

              <div className="p-4 bg-[#FAF9F5] border border-[#D9D3C8] rounded-lg">
                <div className="flex items-center gap-2.5 text-[#536B55] mb-1.5">
                  <Eye className="w-4 h-4" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1B]">
                    Tourism Visibility
                  </h4>
                </div>
                <p className="text-xs text-[#4A3528]/85 leading-relaxed">
                  Promoting Mount Hambericho, Ajora Falls, eco-trails, and
                  hospitality destinations.
                </p>
              </div>

              <div className="p-4 bg-[#FAF9F5] border border-[#D9D3C8] rounded-lg">
                <div className="flex items-center gap-2.5 text-[#B08A45] mb-1.5">
                  <Award className="w-4 h-4" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1B]">
                    Talent &amp; Awards
                  </h4>
                </div>
                <p className="text-xs text-[#4A3528]/85 leading-relaxed">
                  Staging the Masala Awards to spotlight leaders, youth,
                  innovators, and educators.
                </p>
              </div>

              <div className="p-4 bg-[#FAF9F5] border border-[#D9D3C8] rounded-lg">
                <div className="flex items-center gap-2.5 text-[#4A3528] mb-1.5">
                  <Users className="w-4 h-4" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1B]">
                    Community Unity
                  </h4>
                </div>
                <p className="text-xs text-[#4A3528]/85 leading-relaxed">
                  Bridging diaspora communities with homeland initiatives to
                  stimulate investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
