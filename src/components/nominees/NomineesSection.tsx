import React from 'react';
import { OFFICIAL_NOMINEES, NOMINEES_STATUS } from '../../data/nominees';
import { ShieldCheck, Bell, Award, UserCheck } from 'lucide-react';

export const NomineesSection: React.FC = () => {
  const hasNominees = OFFICIAL_NOMINEES.length > 0;

  return (
    <section id="nominees" className="py-20 bg-white border-b border-[#D9D3C8]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#6F1D2E]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6F1D2E]">
              Official Shortlist
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#1D1D1B] tracking-tight">
            NOMINEES ARCHITECTURE
          </h2>

          <p className="mt-3 text-base text-[#4A3528] font-display italic">
            Celebrating candidates vetted across documented achievements and community service.
          </p>
        </div>

        {hasNominees ? (
          /* Render official nominees once supplied */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFICIAL_NOMINEES.map((nominee) => (
              <div
                key={nominee.id}
                className="p-6 bg-[#FAF9F5] border border-[#D9D3C8] rounded-xl text-left space-y-4 shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#E9E3D8] flex items-center justify-center font-serif text-lg font-bold text-[#6F1D2E]">
                    {nominee.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#1D1D1B]">{nominee.name}</h4>
                    <span className="text-xs text-[#4A3528]">{nominee.titleOrRole}</span>
                  </div>
                </div>
                <p className="text-xs text-[#1D1D1B]/80 leading-relaxed font-sans">
                  {nominee.shortAchievement}
                </p>
              </div>
            ))}
          </div>
        ) : (
          /* Tasteful official placeholder per instructions */
          <div
            id="nominees-placeholder"
            className="p-8 sm:p-12 bg-[#FAF9F5] border-2 border-dashed border-[#D9D3C8] rounded-2xl text-center max-w-4xl mx-auto space-y-5"
          >
            <div className="w-16 h-16 rounded-full bg-white border border-[#D9D3C8] text-[#6F1D2E] flex items-center justify-center mx-auto shadow-xs">
              <UserCheck className="w-8 h-8 text-[#B08A45]" />
            </div>

            <div className="space-y-2 max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F1D2E]">
                Official Committee Verification
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1B] font-semibold">
                {NOMINEES_STATUS.statusNotice}
              </h3>
              <p className="text-sm text-[#4A3528]/85 font-sans leading-relaxed">
                The Masala Award Committee is currently reviewing formal dossiers and verification evidence for all 8 award sectors. The official shortlist will be announced directly through Visit Kambata Tour &amp; Event Organization press briefings and festival channels.
              </p>
            </div>

            <div className="pt-4 border-t border-[#D9D3C8]/70 flex flex-wrap items-center justify-center gap-6 text-xs text-[#4A3528] font-sans">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#536B55]" />
                <span>Documented Field Verification Underway</span>
              </div>
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-[#B08A45]" />
                <span>Visit Kambata Official Press Portal</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
