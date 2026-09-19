import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../../data/assets';
import { SITE_CONFIG } from '../../data/site';
import { Calendar, HeartHandshake, Sparkles } from 'lucide-react';

export const MasalaIntro: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#D9D3C8]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[#6F1D2E]" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6F1D2E]">
            Cultural Heritage &amp; Origins
          </span>
          <span className="h-px flex-1 max-w-[80px] bg-[#D9D3C8]" />
        </div>

        {/* 1. Large Statement & Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-[#1D1D1B] tracking-tight">
              MASALA
            </h2>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#B08A45]">
              Kambata New Year Celebration
            </p>
          </div>

          <div className="lg:col-span-7">
            <blockquote className="font-display italic text-2xl sm:text-3xl lg:text-4xl text-[#4A3528] leading-tight font-normal">
              “{SITE_CONFIG.masalaIntro.headline}”
            </blockquote>
          </div>
        </div>

        {/* 2. Editorial Layout: Short Paragraphs + Authentic Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="p-6 bg-white border border-[#D9D3C8] rounded-xl shadow-xs space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl text-[#1D1D1B] font-semibold">
                An Ancestral Tradition of Renewal
              </h3>
              <p className="text-base text-[#1D1D1B]/80 leading-relaxed font-sans">
                {SITE_CONFIG.masalaIntro.lead}
              </p>
              <p className="text-sm text-[#4A3528]/90 leading-relaxed font-sans">
                {SITE_CONFIG.masalaIntro.body}
              </p>
            </div>

            {/* Cultural highlights row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#FAF9F5] border border-[#D9D3C8] rounded-lg">
                <div className="flex items-center gap-2 text-[#6F1D2E] mb-1">
                  <HeartHandshake className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Unity &amp; Peace</span>
                </div>
                <p className="text-xs text-[#1D1D1B]/75 leading-normal">
                  Fostering social cohesion, reconciliation, and mutual respect among communities.
                </p>
              </div>

              <div className="p-4 bg-[#FAF9F5] border border-[#D9D3C8] rounded-lg">
                <div className="flex items-center gap-2 text-[#536B55] mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Annual Tribute</span>
                </div>
                <p className="text-xs text-[#1D1D1B]/75 leading-normal">
                  An institutional award platform curated annually by Visit Kambata Tour &amp; Event Org.
                </p>
              </div>
            </div>
          </div>

          {/* Supporting Cultural Celebration Photograph */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative p-2.5 bg-white border border-[#D9D3C8] rounded-xl shadow-sm">
              <div className="relative overflow-hidden rounded-lg aspect-[16/10] bg-[#E9E3D8]">
                <img
                  src={ASSETS.masalaCelebration}
                  alt="Kambata community elders and youth in traditional celebration attire"
                  className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1B]/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#B08A45]" />
                    <span className="text-[11px] font-medium tracking-wide">
                      Community Elders &amp; Youth • Masala Season
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-3 px-2 flex items-center justify-between text-xs text-[#4A3528]/80">
                <span className="font-serif italic">Living Kambata Cultural Expression</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#B08A45]">Authentic Gathering</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
