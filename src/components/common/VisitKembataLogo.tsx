import React from 'react';

interface VisitKembataLogoProps {
  variant?: 'light' | 'dark' | 'badge';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const VisitKembataLogo: React.FC<VisitKembataLogoProps> = ({
  variant = 'light',
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const sizeClasses = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-20',
    xl: 'h-28 md:h-36',
  }[size];

  if (variant === 'badge') {
    return (
      <div
        id="visit-kembata-logo-badge"
        className={`inline-flex items-center gap-3.5 bg-[#0C0F0D] border border-[#2B302C] px-4 py-2.5 rounded-lg shadow-sm ${className}`}
      >
        <img
          src="/visit-kembata-logo-dark.svg"
          alt="Visit Kembata Official Logo"
          className="h-10 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
        {showSubtitle && (
          <div className="flex flex-col text-left">
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#B08A45]">
              Official Organizer
            </span>
            <span className="text-xs font-semibold text-[#E9E3D8] tracking-wide">
              Visit Kambata Tour & Events
            </span>
          </div>
        )}
      </div>
    );
  }

  const logoSrc = variant === 'dark' ? '/visit-kembata-logo-dark.svg' : '/visit-kembata-logo.svg';

  return (
    <div
      id="visit-kembata-logo"
      className={`inline-flex items-center gap-3 select-none ${className}`}
    >
      <div className={`relative ${sizeClasses} flex items-center`}>
        <img
          src={logoSrc}
          alt="Visit Kambata Official Logo"
          className="h-full w-auto object-contain max-h-full"
          referrerPolicy="no-referrer"
        />
      </div>
      {showSubtitle && (
        <div className="hidden sm:flex flex-col justify-center border-l border-[#D9D3C8]/60 pl-3 leading-tight">
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#6F1D2E]">
            4th Masala Awards
          </span>
          <span className="text-[10px] font-medium tracking-wider text-[#4A3528]/80">
            Visit Kambata • 2026
          </span>
        </div>
      )}
    </div>
  );
};
