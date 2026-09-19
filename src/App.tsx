import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { MasalaIntro } from './components/about/MasalaIntro';
import { MasalaWeekSection } from './components/masala-week/MasalaWeekSection';
import { AboutVisitKambata } from './components/about/AboutVisitKambata';
import { WhyMasalaAwards } from './components/awards/WhyMasalaAwards';
import { EvaluationSystem } from './components/evaluation/EvaluationSystem';
import { CategoryExplorer } from './components/categories/CategoryExplorer';
import { NomineesSection } from './components/nominees/NomineesSection';
import { WinnersSection } from './components/winners/WinnersSection';
import { CulturalHeritageSection } from './components/cultural/CulturalHeritageSection';
import { TransparencySection } from './components/transparency/TransparencySection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { CeremonyPresentationMode } from './components/ceremony/CeremonyPresentationMode';

export default function App() {
  const [isCeremonyModeOpen, setIsCeremonyModeOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['home', 'about', 'masala-week', 'why-awards', 'evaluation', 'categories', 'ceremony', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 160;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1D1D1B] font-sans selection:bg-[#6F1D2E] selection:text-white flex flex-col">
      {/* Fixed Navigation Bar */}
      <Navbar
        onOpenCeremonyMode={() => setIsCeremonyModeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Masala New Year & Awards Origins */}
        <MasalaIntro />

        {/* 3. Masala Week: Purpose, Objectives & Major Events */}
        <MasalaWeekSection />

        {/* 4. About Visit Kambata Tour & Event Organization */}
        <AboutVisitKambata />

        {/* 4. Why Masala Awards (6 Official Mandates) */}
        <WhyMasalaAwards />

        {/* 5. How Awards Are Evaluated (20% Public + 80% Committee = 100%) */}
        <EvaluationSystem />

        {/* 6. Award Categories Explorer (8 Sectors with exact criteria) */}
        <CategoryExplorer />

        {/* 7. Official Nominees Architecture & Status */}
        <NomineesSection />

        {/* 8. Stage Reveal & Winners Architecture */}
        <WinnersSection onOpenCeremonyMode={() => setIsCeremonyModeOpen(true)} />

        {/* 9. Authentic Landscape & Cultural Storytelling */}
        <CulturalHeritageSection />

        {/* 10. Transparency: Awards with Purpose */}
        <TransparencySection />

        {/* 11. Contact Visit Kambata Secretariat */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Dedicated 16:9 LED Screen / Stage Presentation Mode */}
      <CeremonyPresentationMode
        isOpen={isCeremonyModeOpen}
        onClose={() => setIsCeremonyModeOpen(false)}
      />
    </div>
  );
}
