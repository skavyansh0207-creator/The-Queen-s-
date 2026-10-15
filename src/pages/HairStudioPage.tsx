import React from 'react';
import { Scissors, Check, Sparkles, Calendar, Clock, ShieldCheck, HeartHandshake, MessageCircle, Phone, Wand2 } from 'lucide-react';
import { SALON_SERVICES, SalonService, SALON_INFO } from '../data/salonData';
import { PageId } from '../components/HeaderNav';

interface HairStudioPageProps {
  selectedServices: SalonService[];
  onToggleService: (service: SalonService) => void;
  onNavigate: (page: PageId) => void;
}

export const HairStudioPage: React.FC<HairStudioPageProps> = ({
  selectedServices,
  onToggleService,
  onNavigate,
}) => {
  const isSelected = (id: string) => selectedServices.some((s) => s.id === id);

  // Filter hair styling & care services
  const hairServices = SALON_SERVICES.filter((s) => s.category === 'hair');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Title */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-rose-700">
          {SALON_INFO.name} · Hair Studio &amp; Extension Lounge
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-rose-950 mt-1">
          Hair Studio: Extensions, Blow Dry, Family Cuts &amp; Care
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
          Master-level hair artistry located at {SALON_INFO.address.full}. 
          Expertise in signature blow dry styling, 100% natural Remy hair extensions, precision family haircuts for women, men and children, 
          keratin smoothing protein treatments, and seamless online salon booking.
        </p>
      </div>

      {/* Featured Banner: Extensions + Blow Dry + Spa */}
      <div className="bg-gradient-to-r from-rose-950 via-rose-900 to-amber-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-400 text-stone-950 text-[10px] font-bold uppercase tracking-wider">
              Signature Transformation Combo
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Remy Hair Extensions + Blow Dry + Keratin Hair Spa
            </h2>
            <p className="text-xs sm:text-sm text-rose-100 max-w-xl leading-relaxed">
              Complete hair transformation by {SALON_INFO.name} stylists: 100% natural Remy volume hair extensions, 
              volumizing blowout styling, and an intensive keratin bond-repair hair spa to keep your locks glossy and luscious.
            </p>
            <div className="flex items-center gap-4 text-xs text-rose-200 pt-1 font-mono">
              <span>Duration: ~2.5 Hours</span>
              <span>·</span>
              <span>100% Human Remy Hair</span>
            </div>
          </div>

          <div className="text-left md:text-right shrink-0">
            <span className="text-xs uppercase text-rose-300 block">All-Inclusive Combo</span>
            <span className="font-mono text-3xl font-bold text-white block mb-3">
              ₹5,999
            </span>
            <button
              onClick={() => {
                const ext = SALON_SERVICES.find((s) => s.id === 'hair-extensions');
                if (ext && !isSelected(ext.id)) {
                  onToggleService(ext);
                }
                const blow = SALON_SERVICES.find((s) => s.id === 'blow-dry');
                if (blow && !isSelected(blow.id)) {
                  onToggleService(blow);
                }
                onNavigate('booking');
              }}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-bold rounded-lg shadow-sm transition-colors"
            >
              Book This Combo
            </button>
          </div>
        </div>
      </div>

      {/* Specialty Highlights: Blow Dry, Extensions & Keratin */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-xl border border-rose-100 shadow-2xs space-y-2">
          <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center font-bold">
            <Wand2 className="w-4 h-4" />
          </div>
          <h3 className="font-serif text-base font-bold text-stone-900">
            Blow Dry &amp; Blowout Artistry
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Hollywood curls, sleek straight mirrors, and bouncy curtain bangs designed for high humidity resistance.
          </p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-rose-100 shadow-2xs space-y-2">
          <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <h3 className="font-serif text-base font-bold text-stone-900">
            100% Remy Hair Extensions
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Ethically sourced human Remy hair for instantaneous length, thickness, and natural blend with your hair.
          </p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-rose-100 shadow-2xs space-y-2">
          <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center font-bold">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <h3 className="font-serif text-base font-bold text-stone-900">
            Keratin &amp; Color Protection
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Deep protein infusion that eliminates 95% of frizz, sealing cuticles and boosting dimensional color glow.
          </p>
        </div>
      </div>

      {/* Hair Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hairServices.map((service) => {
          const selected = isSelected(service.id);
          return (
            <div
              key={service.id}
              className={`p-5 bg-white rounded-xl border flex flex-col justify-between transition-all ${
                selected ? 'border-rose-500 ring-1 ring-rose-500 bg-rose-50/20' : 'border-stone-200 hover:border-rose-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    {service.duration}
                  </span>
                  {service.popular && (
                    <span className="text-rose-700 font-bold text-[11px] bg-rose-50 px-2 py-0.5 rounded">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">
                  {service.name}
                </h3>
                <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                <span className="font-mono text-base font-bold text-stone-900">
                  ₹{service.price.toLocaleString('en-IN')}
                </span>

                <button
                  onClick={() => onToggleService(service)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    selected
                      ? 'bg-rose-800 text-white'
                      : 'bg-stone-100 text-stone-800 hover:bg-rose-100 hover:text-rose-900'
                  }`}
                >
                  {selected ? 'Added to Booking' : '+ Add Service'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hair Extensions & Direct WhatsApp Note */}
      <div className="p-6 bg-stone-900 text-white rounded-2xl border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-bold text-base text-amber-300">
            Free Hair Extension Shade &amp; Length Consultation:
          </h4>
          <p className="text-xs text-stone-300 max-w-xl">
            We provide exact shade-matching for 100% human Remy hair extensions in Sector 28 D, Chandigarh (Near Pal Dhaba). 
            Send pictures of your hair to our stylists on WhatsApp for an instant consultation!
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={SALON_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat ({SALON_INFO.phone})</span>
          </a>
          <a
            href={`tel:${SALON_INFO.phone}`}
            className="px-3.5 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-lg transition-colors"
          >
            Call Salon
          </a>
        </div>
      </div>
    </div>
  );
};
