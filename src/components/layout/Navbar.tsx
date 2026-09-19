import React, { useState, useEffect } from 'react';
import { VisitKembataLogo } from '../common/VisitKembataLogo';
import { Menu, X, Monitor, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenCeremonyMode: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCeremonyMode, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Masala Week', href: '#masala-week' },
    { label: 'Awards', href: '#why-awards' },
    { label: 'Categories', href: '#categories' },
    { label: 'Ceremony', href: '#ceremony' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#D9D3C8] shadow-[0_2px_12px_rgba(74,53,40,0.04)] py-3'
          : 'bg-[#FAF9F5]/80 backdrop-blur-sm border-b border-[#D9D3C8]/40 py-4.5'
      }`}
    >
      {/* Subtle top textile thread line */}
      <div className="tibeb-border absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <a
            id="nav-logo-link"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6F1D2E] rounded"
          >
            <VisitKembataLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 py-1 border-b-2 ${
                    isActive
                      ? 'text-[#6F1D2E] border-[#6F1D2E] font-semibold'
                      : 'text-[#1D1D1B]/80 hover:text-[#6F1D2E] border-transparent'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="nav-ceremony-mode-btn"
              onClick={onOpenCeremonyMode}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#1D1D1B] bg-white border border-[#D9D3C8] hover:border-[#B08A45] hover:text-[#6F1D2E] rounded-md transition-all shadow-xs"
              title="Launch full-screen stage presentation mode for 16:9 LED screens"
            >
              <Monitor className="w-3.5 h-3.5 text-[#B08A45]" />
              <span>Ceremony Screen</span>
            </button>

            <a
              id="nav-explore-awards-btn"
              href="#categories"
              onClick={(e) => handleNavClick(e, '#categories')}
              className="inline-flex items-center gap-1 px-4 py-2 text-xs font-bold tracking-wider uppercase text-white bg-[#6F1D2E] hover:bg-[#581523] active:bg-[#48111D] rounded-md transition-colors shadow-xs"
            >
              <span>Explore Awards</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-ceremony-btn"
              onClick={onOpenCeremonyMode}
              className="p-2 text-[#4A3528] hover:text-[#6F1D2E] border border-[#D9D3C8] rounded-md"
              aria-label="Open Ceremony Screen Mode"
            >
              <Monitor className="w-4 h-4 text-[#B08A45]" />
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1D1D1B] hover:text-[#6F1D2E] border border-[#D9D3C8] rounded-md transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden bg-[#FAF9F5] border-b border-[#D9D3C8] px-4 pt-3 pb-6 space-y-2.5 shadow-lg animate-in fade-in slide-in-from-top-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              id={`mobile-nav-${link.label.toLowerCase()}`}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3 py-2.5 rounded-md text-sm font-medium text-[#1D1D1B] hover:bg-[#E9E3D8]/50 hover:text-[#6F1D2E] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#D9D3C8] space-y-2">
            <button
              id="mobile-menu-ceremony-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCeremonyMode();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1D1D1B] bg-white border border-[#D9D3C8] rounded-md"
            >
              <Monitor className="w-4 h-4 text-[#B08A45]" />
              <span>Launch Ceremony Stage Presentation</span>
            </button>
            <a
              id="mobile-menu-explore-btn"
              href="#categories"
              onClick={(e) => handleNavClick(e, '#categories')}
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#6F1D2E] rounded-md"
            >
              <span>Explore Categories</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
