import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Sparkles, MapPin, MessageCircle, Star, Crown } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export type PageId = 'home' | 'services' | 'hair' | 'bridal' | 'booking' | 'contact';

interface HeaderNavProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  selectedServicesCount: number;
}

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services & Pricing' },
  { id: 'hair', label: 'Hair & Extensions' },
  { id: 'bridal', label: 'Wellness & Bridal' },
  { id: 'booking', label: 'Book Online' },
  { id: 'contact', label: 'Contact & Map' },
];

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentPage,
  onNavigate,
  selectedServicesCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-2xs">
      {/* Top Notification Strip */}
      <div className="bg-rose-950 text-rose-100 text-xs px-4 py-1.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className="w-3.5 h-3.5 text-amber-300" />
            <span className="font-semibold text-rose-300">{SALON_INFO.name}</span>
            <span className="hidden sm:inline text-rose-200">· Near Pal Dhaba, Sector 28 D, Chandigarh</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-300 font-medium flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
              <span>Rated {SALON_INFO.rating}★ ({SALON_INFO.totalReviews} reviews)</span>
            </span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <a href={`tel:${SALON_INFO.phone}`} className="hover:text-rose-300 hidden sm:flex items-center gap-1 font-mono font-medium">
              <Phone className="w-3 h-3 text-rose-400" />
              <span>{SALON_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18 gap-4">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left shrink-0 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-900 via-rose-950 to-amber-950 text-amber-300 flex items-center justify-center shadow-xs group-hover:from-rose-800 transition-colors border border-amber-400/30">
              <Crown className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-rose-950 block leading-tight">
                {SALON_INFO.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-rose-700 font-semibold">
                {SALON_INFO.type} · Sector 28 D, Chandigarh
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  currentPage === item.id
                    ? 'bg-rose-100 text-rose-900 shadow-2xs font-bold'
                    : 'text-stone-600 hover:text-rose-900 hover:bg-rose-50/70'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-900 bg-rose-50 hover:bg-rose-100 border border-rose-200/60 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-rose-700" />
              <span>{SALON_INFO.phone}</span>
            </a>

            <button
              onClick={() => handleNavClick('booking')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-rose-800 hover:bg-rose-900 rounded-lg shadow-xs transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
              {selectedServicesCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-white text-rose-900 text-[10px] font-bold flex items-center justify-center ml-0.5">
                  {selectedServicesCount}
                </span>
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-rose-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-rose-100 px-4 py-3 space-y-1 shadow-lg animate-in fade-in duration-150">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                currentPage === item.id
                  ? 'bg-rose-100 text-rose-900 font-bold'
                  : 'text-stone-700 hover:bg-rose-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-rose-100 flex gap-2">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="flex-1 py-2 text-center text-xs font-semibold bg-rose-50 text-rose-900 rounded-lg"
            >
              Call {SALON_INFO.phone}
            </a>
            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 text-center text-xs font-semibold bg-emerald-700 text-white rounded-lg flex items-center justify-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
