import React from 'react';
import { Phone, MapPin, ArrowUp, Star, MessageCircle, Crown } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { PageId } from './HeaderNav';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-rose-950 text-rose-100 pt-12 pb-20 lg:pb-12 border-t border-rose-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-rose-900/80">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-900 to-amber-950 text-amber-300 flex items-center justify-center border border-amber-400/40">
                <Crown className="w-4 h-4 text-amber-300" />
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-tight">
                {SALON_INFO.name}
              </span>
            </div>
            <p className="text-xs text-rose-200 leading-relaxed">
              Premier {SALON_INFO.type} in Sector 28 D, Chandigarh (Near Pal Dhaba). 
              Master artists and certified aestheticians specializing in Eyebrows &amp; Lashes, Permanent makeup, 
              Blow dry styling, 100% Remy hair extensions, Precision family haircuts, Acne treatments, Brazilian waxing, Body waxing, 
              Tanning &amp; de-tan polish, Relaxing therapeutic massages, and bespoke Wedding event preparations.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-amber-300">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>Rated {SALON_INFO.rating}★ ({SALON_INFO.totalReviews} Google Reviews)</span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-300">
              Explore Pages
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => handleNav('home')}
                className="text-left text-rose-200 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNav('services')}
                className="text-left text-rose-200 hover:text-white transition-colors"
              >
                Services &amp; Pricing
              </button>
              <button
                onClick={() => handleNav('hair')}
                className="text-left text-rose-200 hover:text-white transition-colors"
              >
                Hair &amp; Extensions
              </button>
              <button
                onClick={() => handleNav('bridal')}
                className="text-left text-rose-200 hover:text-white transition-colors"
              >
                Wellness &amp; Bridal
              </button>
              <button
                onClick={() => handleNav('booking')}
                className="text-left text-rose-200 hover:text-white transition-colors"
              >
                Book Online
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="text-left text-rose-200 hover:text-white transition-colors"
              >
                Contact &amp; Location
              </button>
            </div>
          </div>

          {/* Contact & Address */}
          <div className="space-y-2 text-xs text-rose-200">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-300">
              Salon Location
            </h4>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>
                {SALON_INFO.address.shop}, {SALON_INFO.address.area}, {SALON_INFO.address.city} - {SALON_INFO.address.pincode}
              </span>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <Phone className="w-4 h-4 text-rose-400 shrink-0" />
              <a href={`tel:${SALON_INFO.phone}`} className="hover:text-white font-mono font-bold text-white text-sm">
                {SALON_INFO.phone}
              </a>
              <span className="text-rose-400">·</span>
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
            <div className="pt-1 text-rose-300">
              Timings: {SALON_INFO.timings}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-rose-300">
          <div>
            &copy; {new Date().getFullYear()} {SALON_INFO.name}. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg bg-rose-900 hover:bg-rose-800 text-rose-200 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
