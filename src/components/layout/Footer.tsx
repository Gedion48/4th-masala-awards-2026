import React from "react";
import { VisitKembataLogo } from "../common/VisitKembataLogo";
import { SITE_CONFIG } from "../../data/site";
import { Sparkles, Shield, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="bg-white border-t border-[#D9D3C8] text-[#1D1D1B] relative"
    >
      {/* Subtle cultural textile-inspired line/pattern at top */}
      <div className="tibeb-border" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#D9D3C8]/80 items-start">
          {/* Col 1: Brand & Logo (6 cols) */}
          <div className="md:col-span-6 space-y-4 text-left">
            <VisitKembataLogo size="lg" />

            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-[#1D1D1B] tracking-tight">
                {SITE_CONFIG.eventName}
              </h3>
              <p className="font-display italic text-base text-[#6F1D2E]">
                “{SITE_CONFIG.tagline}”
              </p>
            </div>

            <p className="text-xs text-[#4A3528] font-sans leading-relaxed max-w-md">
              Organized by{" "}
              <strong className="text-[#1D1D1B]">
                {SITE_CONFIG.organizer}
              </strong>
              . Dedicated to promoting Kambata culture, tourism destinations,
              talents, and community initiatives across southern Ethiopia and
              the worldwide diaspora.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FAF9F5] border border-[#D9D3C8] text-[11px] text-[#4A3528]">
              <Shield className="w-3.5 h-3.5 text-[#536B55]" />
              <span>
                Official Cultural Awards Portal &amp; Presentation Platform
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#B08A45]">
              Ceremony Sections
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#4A3528] font-sans">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#6F1D2E] transition-colors"
                >
                  Home &amp; Hero Overview
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#6F1D2E] transition-colors"
                >
                  About Masala &amp; Visit Kambata
                </a>
              </li>
              <li>
                <a
                  href="#masala-week"
                  className="hover:text-[#6F1D2E] transition-colors"
                >
                  Masala Week &amp; Major Events
                </a>
              </li>
              <li>
                <a
                  href="#why-awards"
                  className="hover:text-[#6F1D2E] transition-colors"
                >
                  Why Masala Awards (6 Purposes)
                </a>
              </li>
              <li>
                <a
                  href="#evaluation"
                  className="hover:text-[#6F1D2E] transition-colors"
                >
                  How Awards Are Evaluated (20% + 80%)
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  className="hover:text-[#6F1D2E] transition-colors"
                >
                  Award Categories Explorer
                </a>
              </li>
              <li>
                <a
                  href="#ceremony"
                  className="hover:text-[#6F1D2E] transition-colors"
                >
                  Ceremony &amp; Winners Stage
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#6F1D2E] transition-colors"
                >
                  Secretariat &amp; Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Principles & Integrity (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#B08A45]">
              Institutional Notice
            </h4>
            <p className="text-xs text-[#4A3528]/90 font-sans leading-relaxed">
              The Masala Awards are an official merit-based honor. Popularity or
              social-media following alone does not determine the award.
            </p>
            <div className="pt-2">
              <span className="font-mono text-[11px] font-bold text-[#6F1D2E] block">
                2026 FESTIVAL EDITION
              </span>
              <span className="text-[11px] text-[#4A3528]/80 block">
                Durame &amp; Mount Hambericho
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A3528]/80 font-sans">
          <div className="text-center sm:text-left space-y-0.5">
            <p>
              &copy; {new Date().getFullYear()} {SITE_CONFIG.organizer}. All
              rights reserved.
            </p>
            <p className="text-[11px] text-[#4A3528]/60">
              Official Website &amp; Projection System for the 4th Masala
              Awards.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-[#D9D3C8] hover:border-[#6F1D2E] hover:text-[#6F1D2E] text-xs font-semibold transition-colors"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
