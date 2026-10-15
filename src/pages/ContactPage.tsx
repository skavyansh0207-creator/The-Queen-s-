import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Star, ExternalLink, CheckCircle, ShieldCheck, Crown } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const ContactPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Header */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
          <Crown className="w-3.5 h-3.5 text-amber-600" />
          <span>{SALON_INFO.name} · Location &amp; Directions</span>
        </span>
        <h1 className="font-serif text-3xl font-bold text-rose-950 mt-1">
          Contact &amp; Studio Location
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          Visit {SALON_INFO.name} in Sector 28 D, Chandigarh (Near Pal Dhaba). Open 7 days a week for Women, Men &amp; Kids.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Contact Details Card */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-5">
          <h2 className="font-serif text-xl font-bold text-rose-950">
            Studio Information
          </h2>

          <div className="space-y-4 text-xs">
            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-stone-500 block">Phone &amp; Direct Appointments:</span>
                <a href={`tel:${SALON_INFO.phone}`} className="font-bold text-base text-stone-900 hover:text-rose-800 font-mono">
                  {SALON_INFO.phone}
                </a>
                <div className="mt-1">
                  <a
                    href={SALON_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 hover:bg-emerald-100 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp: {SALON_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-stone-500 block">Full Address:</span>
                <p className="font-bold text-stone-900 leading-relaxed text-sm">
                  {SALON_INFO.address.shop},<br />
                  {SALON_INFO.address.landmark},<br />
                  {SALON_INFO.address.area},<br />
                  {SALON_INFO.address.city} - {SALON_INFO.address.pincode}
                </p>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-stone-500 block">Opening Timings:</span>
                <p className="font-bold text-stone-900">{SALON_INFO.timings}</p>
                <span className="text-emerald-700 text-[11px] font-semibold">Open all 7 days for the whole family</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-start gap-3 pt-2 border-t border-stone-100">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <span className="text-stone-500 block">Verified Google Rating:</span>
                <p className="font-bold text-stone-900">
                  Rated {SALON_INFO.rating}★ ({SALON_INFO.totalReviews} Google Reviews)
                </p>
              </div>
            </div>
          </div>

          <a
            href={SALON_INFO.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 text-xs font-semibold text-white bg-rose-900 hover:bg-rose-950 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-2xs"
          >
            <Navigation className="w-4 h-4" />
            <span>Open SCO-154 Sector 28 D in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Landmarks & Parking Guide */}
        <div className="space-y-4">
          {/* Studio Image preview */}
          <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-xs relative">
            <img
              src={SALON_INFO.featureImage}
              alt="The Queen's: A Family Salon Studio in Sector 28 D Chandigarh"
              className="w-full h-48 object-cover object-center"
            />
            <div className="absolute bottom-2 left-2 bg-stone-950/80 backdrop-blur-md text-amber-200 text-[11px] font-semibold px-2.5 py-1 rounded flex items-center gap-1">
              <Crown className="w-3 h-3 text-amber-300" />
              <span>Sector 28 D Chandigarh Studio</span>
            </div>
          </div>

          <div className="bg-rose-50/70 p-5 rounded-2xl border border-rose-100 space-y-3">
            <h3 className="font-serif text-lg font-bold text-rose-950 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-700" />
              <span>How to Reach {SALON_INFO.name}</span>
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We are located at <strong>SCO-154, 2nd Floor, Near Pal Dhaba, Sector 28 D</strong> in Chandigarh.
            </p>
            <ul className="text-xs text-stone-600 space-y-1.5 pt-1">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                <span>Prime location in Sector 28 D market, directly adjacent to the iconic Pal Dhaba</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                <span>Ample and safe parking spaces right in front of the commercial block</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                <span>Private sanitary booths for Brazilian waxing, facials, therapeutic massage &amp; bridal prep</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 text-xs text-stone-600 space-y-2">
            <h4 className="font-bold text-stone-900">Appointments &amp; Walk-ins:</h4>
            <p>
              Walk-in clients are warmly welcomed throughout our working hours (10:00 AM – 8:30 PM). 
              For intensive services like permanent makeup, hair extensions, acne treatment programs, or royal wedding packages, booking in advance via WhatsApp (<a href={`tel:${SALON_INFO.phone}`} className="font-bold underline text-rose-800">{SALON_INFO.phone}</a>) is highly recommended.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
