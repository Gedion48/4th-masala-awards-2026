import React from 'react';
import { motion } from 'motion/react';
import { SITE_CONFIG } from '../../data/site';
import { Award } from 'lucide-react';

export const WhyMasalaAwards: React.FC = () => {
  return (
    <section id="why-awards" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#D9D3C8]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Eyebrow & Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#6F1D2E]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6F1D2E]">
              Core Purpose &amp; Mission
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1D1D1B] tracking-tight">
            WHY MASALA AWARDS
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A3528] font-display italic leading-relaxed border-l-2 border-[#B08A45] pl-4">
            An institutional commitment to honoring service, inspiring youth, and elevating the shared destiny of the Kambata community.
          </p>
        </div>

        {/* Sophisticated Numbered Editorial Layout (2 columns or 3 alternating editorial blocks) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {SITE_CONFIG.purposes.map((item, index) => (
            <motion.div
              key={item.number}
              id={`purpose-item-${item.number}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-white border border-[#D9D3C8] rounded-xl p-7 flex flex-col justify-between hover:border-[#B08A45] transition-all duration-300 shadow-xs hover:shadow-sm"
            >
              {/* Subtle top indicator */}
              <div className="flex items-baseline justify-between border-b border-[#D9D3C8]/70 pb-4 mb-5">
                <span className="font-serif text-3xl sm:text-4xl font-light text-[#6F1D2E] tracking-tight group-hover:text-[#B08A45] transition-colors">
                  {item.number}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#4A3528]/60">
                  Mandate
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3 flex-1 text-left">
                <h3 className="font-serif text-xl sm:text-2xl text-[#1D1D1B] font-medium leading-snug group-hover:text-[#6F1D2E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#1D1D1B]/75 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {/* Subtle bottom detail */}
              <div className="mt-6 pt-3 border-t border-[#D9D3C8]/40 flex items-center justify-between text-[11px] text-[#4A3528]/60">
                <span className="italic">Kambata Community Merit</span>
                <Award className="w-3.5 h-3.5 text-[#B08A45] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-14 p-6 sm:p-8 bg-white border border-[#D9D3C8] rounded-xl text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B08A45]">
              Institutional Integrity
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-semibold text-[#1D1D1B]">
              Excellence Measured by Community Uplift
            </h4>
            <p className="text-sm text-[#4A3528]/85 font-sans leading-relaxed">
              Every award conferred represents hundreds of hours of committee deliberation, documented field verification, and community consultation.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#evaluation"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#4A3528] hover:bg-[#1D1D1B] rounded-md transition-colors shadow-xs"
            >
              <span>View Evaluation System</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
