import React from 'react';
import { motion } from 'motion/react';
import { EVALUATION_SYSTEM } from '../../data/evaluation';
import { ShieldCheck, Users, FileCheck, Award, TrendingUp, AlertCircle, Scale } from 'lucide-react';

export const EvaluationSystem: React.FC = () => {
  return (
    <section id="evaluation" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#D9D3C8]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Eyebrow */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#6F1D2E]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6F1D2E]">
              Rigorous Official Methodology
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1D1D1B] tracking-tight">
            {EVALUATION_SYSTEM.title.toUpperCase()}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A3528] font-display italic leading-relaxed">
            {EVALUATION_SYSTEM.subtitle}
          </p>
        </div>

        {/* VISUALLY POWERFUL FORMULA CARD: 20% + 80% = 100% */}
        <motion.div
          id="evaluation-formula-panel"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border-2 border-[#D9D3C8] rounded-2xl p-8 sm:p-12 shadow-[0_8px_30px_rgba(74,53,40,0.05)] relative overflow-hidden"
        >
          {/* Subtle corner golden emblem watermark */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#FAF9F5] border border-[#D9D3C8]/60 pointer-events-none flex items-center justify-center opacity-40">
            <Scale className="w-24 h-24 text-[#B08A45]" />
          </div>

          {/* Core Formula Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-center">
            
            {/* 20% Public Vote */}
            <div className="md:col-span-4 p-6 sm:p-8 bg-[#FAF9F5] border border-[#D9D3C8] rounded-xl flex flex-col items-center justify-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#536B55]">
                Community Voice
              </span>
              <span className="font-serif text-6xl sm:text-7xl lg:text-8xl font-light text-[#536B55] tracking-tight">
                20%
              </span>
              <span className="font-serif text-lg sm:text-xl font-semibold text-[#1D1D1B] tracking-wide">
                PUBLIC VOTE
              </span>
              <p className="text-xs text-[#4A3528]/80 max-w-xs font-sans mt-2">
                Provides broad community engagement, local endorsement, and civic participation across Kambata.
              </p>
            </div>

            {/* Plus sign */}
            <div className="md:col-span-1 flex items-center justify-center py-2 md:py-0">
              <span className="font-serif text-4xl text-[#B08A45] font-light select-none">
                +
              </span>
            </div>

            {/* 80% Committee Evaluation */}
            <div className="md:col-span-4 p-6 sm:p-8 bg-[#FAF9F5] border-2 border-[#6F1D2E]/40 rounded-xl flex flex-col items-center justify-center space-y-2 relative shadow-xs">
              <div className="absolute -top-3.5 bg-[#6F1D2E] text-white px-3 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest">
                Decisive Weight
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F1D2E]">
                Independent Evaluation
              </span>
              <span className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold text-[#6F1D2E] tracking-tight">
                80%
              </span>
              <span className="font-serif text-lg sm:text-xl font-semibold text-[#1D1D1B] tracking-wide">
                MASALA AWARD COMMITTEE
              </span>
              <p className="text-xs text-[#4A3528]/80 max-w-xs font-sans mt-2">
                Rigorous evaluation based on verifiable achievements, community impact, ethics, and sustainability.
              </p>
            </div>

            {/* Equals sign */}
            <div className="md:col-span-1 flex items-center justify-center py-2 md:py-0">
              <span className="font-serif text-4xl text-[#B08A45] font-light select-none">
                =
              </span>
            </div>

            {/* 100% Final Result */}
            <div className="md:col-span-2 p-6 sm:p-7 bg-[#1D1D1B] text-white rounded-xl flex flex-col items-center justify-center space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B08A45]">
                Conferred Honor
              </span>
              <span className="font-serif text-4xl sm:text-5xl font-light text-white tracking-tight">
                100%
              </span>
              <span className="font-serif text-sm sm:text-base font-medium text-[#E9E3D8] tracking-wider uppercase">
                FINAL RESULT
              </span>
            </div>
          </div>

          {/* Visual Percentage Distribution Bar */}
          <div className="mt-8 pt-6 border-t border-[#D9D3C8]">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider mb-2">
              <span className="text-[#536B55]">Public Participation (20%)</span>
              <span className="text-[#6F1D2E]">Committee Merit &amp; Field Verification (80%)</span>
            </div>
            <div className="w-full h-3.5 bg-[#FAF9F5] rounded-full overflow-hidden border border-[#D9D3C8] flex">
              <div className="w-[20%] bg-[#536B55]" title="Public Vote: 20%" />
              <div className="w-[80%] bg-[#6F1D2E]" title="Committee Scrutiny: 80%" />
            </div>
          </div>

          {/* PROMINENT PRINCIPLE: Popularity alone does not determine the award */}
          <div className="mt-8 p-5 bg-[#FAF9F5] border-l-4 border-[#6F1D2E] rounded-r-lg text-left">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#6F1D2E] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6F1D2E] block">
                  Official Award Principle
                </span>
                <p className="font-serif text-lg sm:text-xl font-semibold text-[#1D1D1B] leading-snug">
                  “{EVALUATION_SYSTEM.primaryPrinciple}”
                </p>
                <p className="text-xs sm:text-sm text-[#4A3528] font-sans leading-relaxed pt-1">
                  Public voting provides community participation, while the Masala Award Committee evaluates nominees based on documented achievements, community impact, professionalism, sustainability, and contribution to the Kambata community.
                </p>
              </div>
            </div>
          </div>

          {/* Explicit Information-Only / Non-Voting Guard Notice */}
          <div className="mt-4 p-3 bg-white border border-[#D9D3C8] rounded-md flex items-center gap-2 text-xs text-[#4A3528]/80">
            <span className="w-2 h-2 rounded-full bg-[#B08A45]" />
            <span className="font-semibold text-[#1D1D1B]">Informational Methodology Only:</span>
            <span>This website serves as the official informational and archival portal for the awards. There are no online voting or payment modules.</span>
          </div>

        </motion.div>

        {/* Committee Evaluation Pillars */}
        <div className="mt-14 text-left">
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-4 h-4 text-[#6F1D2E]" />
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D1D1B]">
              Five Pillars of Committee Evaluation
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {EVALUATION_SYSTEM.committeeEvaluationPillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="p-5 bg-white border border-[#D9D3C8] rounded-xl flex flex-col justify-between hover:border-[#B08A45] transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#B08A45] block mb-2">
                    PILLAR 0{i + 1}
                  </span>
                  <h4 className="font-serif text-base font-semibold text-[#1D1D1B] leading-snug mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#4A3528]/85 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
