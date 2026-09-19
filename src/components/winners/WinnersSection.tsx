import React from 'react';
import { OFFICIAL_WINNERS, WINNERS_STATUS } from '../../data/winners';
import { Trophy, Sparkles, Calendar, Monitor } from 'lucide-react';

interface WinnersSectionProps {
  onOpenCeremonyMode: () => void;
}

export const WinnersSection: React.FC<WinnersSectionProps> = ({ onOpenCeremonyMode }) => {
  const hasWinners = OFFICIAL_WINNERS.length > 0;

  return (
    <section id="ceremony" className="py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#D9D3C8]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#6F1D2E]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6F1D2E]">
              Ceremony &amp; Conferred Honors
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#1D1D1B] tracking-tight">
            AWARD REVEAL &amp; WINNERS
          </h2>

          <p className="mt-3 text-base text-[#4A3528] font-display italic">
            Conferred on stage before the Kambata community during the Masala festival.
          </p>
        </div>

        {hasWinners ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFICIAL_WINNERS.map((winner) => (
              <div
                key={winner.id}
                className="p-6 bg-white border border-[#D9D3C8] rounded-xl text-left space-y-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#6F1D2E] text-white flex items-center justify-center font-serif text-lg font-bold">
                    <Trophy className="w-6 h-6 text-[#B08A45]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#1D1D1B]">{winner.winnerName}</h4>
                    <span className="text-xs text-[#6F1D2E] font-medium">{winner.citationTitle}</span>
                  </div>
                </div>
                <p className="text-xs text-[#1D1D1B]/80 leading-relaxed font-sans">
                  {winner.citationText}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div
            id="winners-placeholder"
            className="p-8 sm:p-14 bg-white border border-[#D9D3C8] rounded-2xl text-center max-w-4xl mx-auto space-y-6 shadow-[0_8px_30px_rgba(74,53,40,0.04)]"
          >
            <div className="w-16 h-16 rounded-full bg-[#FAF9F5] border border-[#D9D3C8] text-[#B08A45] flex items-center justify-center mx-auto shadow-xs">
              <Trophy className="w-8 h-8" />
            </div>

            <div className="space-y-3 max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F1D2E]">
                Stage Reveal Protocol
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1B] font-semibold leading-snug">
                {WINNERS_STATUS.statusNotice}
              </h3>
              <p className="text-sm text-[#4A3528]/85 font-sans leading-relaxed">
                The sealed envelopes containing the final determinations of the Masala Award Committee will be opened live on the festival stage in front of the community, invited dignitaries, and cultural delegations.
              </p>
            </div>

            {/* Launch Ceremony Screen action button */}
            <div className="pt-2">
              <button
                id="launch-ceremony-screen-btn"
                onClick={onOpenCeremonyMode}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#1D1D1B] hover:bg-[#6F1D2E] rounded-md transition-all shadow-md"
              >
                <Monitor className="w-4 h-4 text-[#B08A45]" />
                <span>Launch Stage Presentation Mode (16:9 LED)</span>
                <Sparkles className="w-4 h-4 text-[#B08A45]" />
              </button>
            </div>

            <div className="pt-5 border-t border-[#D9D3C8]/70 flex flex-wrap items-center justify-center gap-6 text-xs text-[#4A3528] font-sans">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#6F1D2E]" />
                <span>Masala 2026 Festival Main Stage</span>
              </div>
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-[#536B55]" />
                <span>Designed for 1920×1080 Stage LED Display</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
