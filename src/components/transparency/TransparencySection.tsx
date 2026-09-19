import React from 'react';
import { SITE_CONFIG } from '../../data/site';
import { ShieldCheck, FileSearch, CheckCircle, Scale } from 'lucide-react';

export const TransparencySection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-[#D9D3C8]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#6F1D2E]/10 border border-[#6F1D2E]/25 text-[#6F1D2E] text-xs font-bold uppercase tracking-[0.2em]">
            <ShieldCheck className="w-4 h-4 text-[#B08A45]" />
            <span>Ethical Governance &amp; Standards</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1D1D1B] tracking-tight">
            {SITE_CONFIG.transparency.title.toUpperCase()}
          </h2>

          <p className="font-display italic text-xl sm:text-2xl text-[#4A3528] leading-relaxed max-w-2xl mx-auto">
            “{SITE_CONFIG.transparency.statement}”
          </p>

          {/* Core Mandate Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4">
            {[
              { label: 'Real Contribution', icon: CheckCircle },
              { label: 'Measurable Impact', icon: Scale },
              { label: 'Commitment', icon: ShieldCheck },
              { label: 'Professionalism', icon: CheckCircle },
              { label: 'Community Service', icon: FileSearch },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 bg-[#FAF9F5] border border-[#D9D3C8] rounded-xl text-center space-y-1.5"
                >
                  <IconComp className="w-4 h-4 text-[#6F1D2E] mx-auto" />
                  <span className="text-xs font-semibold text-[#1D1D1B] block font-serif">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Official Verification Clause */}
          <div className="p-6 bg-[#FAF9F5] border border-[#D9D3C8] rounded-xl text-left flex items-start gap-4 mt-6">
            <FileSearch className="w-5 h-5 text-[#B08A45] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1D1D1B] block font-sans">
                Evidence Verification Protocol
              </span>
              <p className="text-sm text-[#4A3528] font-sans leading-relaxed">
                {SITE_CONFIG.transparency.evidencePolicy}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
