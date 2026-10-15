import React from 'react';
import { Star, Phone, Calendar, ArrowRight, Sparkles, MapPin, CheckCircle, ShieldCheck, MessageCircle, Scissors, HeartHandshake, Award, Eye, Flame, Crown, Users } from 'lucide-react';
import { SALON_INFO, REVIEWS, SALON_SERVICES } from '../data/salonData';
import { PageId } from '../components/HeaderNav';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/70 via-white to-amber-50/30 border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-950 text-xs font-semibold shadow-2xs border border-rose-200/70">
                <Crown className="w-3.5 h-3.5 text-amber-600" />
                <div className="flex items-center text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                </div>
                <span>Rated {SALON_INFO.rating}★ ({SALON_INFO.totalReviews} Google reviews)</span>
                <span className="text-rose-400">·</span>
                <span className="text-rose-800">Sector 28 D, Chandigarh</span>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-bold text-amber-700 block flex items-center justify-center lg:justify-start gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  {SALON_INFO.type}
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-extrabold text-rose-950 tracking-tight leading-tight">
                  {SALON_INFO.name}
                </h1>
                <p className="text-rose-900/80 font-medium text-sm sm:text-base flex items-center justify-center lg:justify-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-700 shrink-0" />
                  <span>{SALON_INFO.address.full}</span>
                </p>
              </div>

              <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Welcome to Chandigarh&apos;s premier destination for royal family grooming and aesthetic luxury. 
                Specializing in precision <strong>Brows, Lashes &amp; Makeup</strong> (eyebrow threading &amp; beautification, eyelashes, permanent makeup), 
                master <strong>Hair Studio</strong> artistry (blow dry, 100% Remy hair extensions, precision family haircuts), 
                clinical <strong>Skincare &amp; Waxing</strong> (acne treatments, Brazilian waxing, body waxing, sun tanning de-tan), 
                and rejuvenating <strong>Bridal &amp; Wellness</strong> rituals (relaxing therapeutic massages &amp; complete wedding preparation).
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => onNavigate('booking')}
                  className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-rose-900 hover:bg-rose-950 rounded-lg shadow-sm transition-all flex items-center gap-2 hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Online Appointment</span>
                </button>

                <a
                  href={SALON_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {SALON_INFO.phone}</span>
                </a>

                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="px-4 py-3 text-xs sm:text-sm font-semibold text-rose-900 bg-white hover:bg-rose-50 border border-rose-200 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-rose-700" />
                  <span>Call {SALON_INFO.phone}</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 border-t border-rose-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-stone-600">
                <div className="bg-white/80 p-2.5 rounded-lg border border-rose-100/60 shadow-2xs">
                  <span className="font-bold text-rose-950 block">5.0 ★ Rating</span>
                  <span className="text-[11px] text-stone-500">379+ Google Reviews</span>
                </div>
                <div className="bg-white/80 p-2.5 rounded-lg border border-rose-100/60 shadow-2xs">
                  <span className="font-bold text-rose-950 block">Sector 28 D</span>
                  <span className="text-[11px] text-stone-500">SCO-154, Near Pal Dhaba</span>
                </div>
                <div className="bg-white/80 p-2.5 rounded-lg border border-rose-100/60 shadow-2xs">
                  <span className="font-bold text-rose-950 block">Open 7 Days</span>
                  <span className="text-[11px] text-stone-500">10:00 AM – 8:30 PM</span>
                </div>
                <div className="bg-white/80 p-2.5 rounded-lg border border-rose-100/60 shadow-2xs">
                  <span className="font-bold text-rose-950 block">Family Salon</span>
                  <span className="text-[11px] text-stone-500">Women, Men &amp; Kids</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-stone-900 group">
                <img
                  src={SALON_INFO.heroImage}
                  alt="The Queen's: A Family Salon - Luxury Family Salon & Beauty Studio Sector 28 D Chandigarh"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-transparent to-black/20" />
                
                {/* Floating badge over image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-rose-100 shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1">
                      <Crown className="w-3 h-3 text-amber-600" />
                      {SALON_INFO.type}
                    </span>
                    <h3 className="font-serif text-sm font-bold text-stone-900">
                      {SALON_INFO.name}
                    </h3>
                    <p className="text-[11px] text-stone-500">
                      SCO-154, 2nd Floor, Near Pal Dhaba, Sector 28 D
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      5.0★
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Feature Pillars */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-700 flex items-center gap-1">
              <Crown className="w-3.5 h-3.5 text-amber-600" />
              <span>Core Service Pillars</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-rose-950 mt-1">
              Featured Expertise at The Queen&apos;s
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Brows &amp; lashes, precision family hair styling &amp; Remy extensions, clinical skincare &amp; waxing, and royal bridal wellness.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-bold text-rose-800 hover:text-rose-950 flex items-center gap-1.5 shrink-0 self-start sm:self-auto bg-rose-50 px-3.5 py-2 rounded-lg border border-rose-200"
          >
            <span>View All Services &amp; Prices</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Pillar 1: Brows, Lashes & Makeup */}
          <div 
            onClick={() => onNavigate('services')}
            className="p-5 bg-white rounded-2xl border border-rose-100 hover:border-rose-300 hover:shadow-md cursor-pointer transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-800 flex items-center justify-center mb-3 group-hover:bg-rose-900 group-hover:text-amber-200 transition-colors">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block mb-1">
                Brows, Lashes &amp; Makeup
              </span>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                Brows &amp; Permanent Makeup
              </h3>
              <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                Signature <strong>Eyebrow threading</strong>, <strong>Eyebrow beautification</strong> &amp; tinting, lush <strong>Eyelashes</strong> extensions, and semi-permanent <strong>Permanent makeup</strong>.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">Eyebrow Threading</span>
                <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">Beautification</span>
                <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">Eyelash Ext.</span>
                <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">Permanent Makeup</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-rose-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Explore Brows &amp; Makeup &rarr;
            </span>
          </div>

          {/* Pillar 2: Hair Studio */}
          <div 
            onClick={() => onNavigate('hair')}
            className="p-5 bg-white rounded-2xl border border-rose-100 hover:border-rose-300 hover:shadow-md cursor-pointer transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-800 flex items-center justify-center mb-3 group-hover:bg-rose-900 group-hover:text-amber-200 transition-colors">
                <Scissors className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block mb-1">
                Hair Studio &amp; Extensions
              </span>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                Hair Studio &amp; Styling
              </h3>
              <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                Volumizing <strong>Blow dry</strong>, 100% natural <strong>Hair extensions</strong>, precision haircuts for the whole family, and keratin smoothing care.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-[10px] bg-rose-50 text-rose-900 px-2 py-0.5 rounded font-medium">Blow Dry</span>
                <span className="text-[10px] bg-rose-50 text-rose-900 px-2 py-0.5 rounded font-medium">Hair Extensions</span>
                <span className="text-[10px] bg-rose-50 text-rose-900 px-2 py-0.5 rounded font-medium">Family Haircuts</span>
                <span className="text-[10px] bg-rose-50 text-rose-900 px-2 py-0.5 rounded font-medium">Keratin Care</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-rose-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Hair Studio &rarr;
            </span>
          </div>

          {/* Pillar 3: Skincare & Waxing */}
          <div 
            onClick={() => onNavigate('services')}
            className="p-5 bg-white rounded-2xl border border-rose-100 hover:border-rose-300 hover:shadow-md cursor-pointer transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-800 flex items-center justify-center mb-3 group-hover:bg-rose-900 group-hover:text-amber-200 transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block mb-1">
                Dermal &amp; Waxing Care
              </span>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                Skincare &amp; Waxing
              </h3>
              <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                Targeted clinical <strong>Acne treatments</strong>, strip-less Italian Rica <strong>Brazilian waxing</strong>, full <strong>Body waxing</strong>, and sun <strong>Tanning</strong> de-tan polish.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">Acne Treatments</span>
                <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">Brazilian Waxing</span>
                <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">Body Waxing</span>
                <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">Tanning De-Tan</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-rose-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Skincare &amp; Waxing &rarr;
            </span>
          </div>

          {/* Pillar 4: Bridal & Wellness */}
          <div 
            onClick={() => onNavigate('bridal')}
            className="p-5 bg-white rounded-2xl border border-rose-100 hover:border-rose-300 hover:shadow-md cursor-pointer transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-800 flex items-center justify-center mb-3 group-hover:bg-rose-900 group-hover:text-amber-200 transition-colors">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block mb-1">
                Bridal &amp; Spa Lounge
              </span>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                Bridal &amp; Wellness
              </h3>
              <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                Therapeutic <strong>Relaxing massage</strong> rituals alongside comprehensive <strong>Wedding &amp; event preparation</strong> for brides, grooms, and bridal parties.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-[10px] bg-rose-50 text-rose-900 px-2 py-0.5 rounded font-medium">Relaxing Massage</span>
                <span className="text-[10px] bg-rose-50 text-rose-900 px-2 py-0.5 rounded font-medium">Wedding Prep</span>
                <span className="text-[10px] bg-rose-50 text-rose-900 px-2 py-0.5 rounded font-medium">Airbrush &amp; HD</span>
                <span className="text-[10px] bg-rose-50 text-rose-900 px-2 py-0.5 rounded font-medium">Online Booking</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-rose-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Bridal &amp; Wellness &rarr;
            </span>
          </div>
        </div>
      </section>

      {/* Gallery / Feature Image Showcase Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-rose-200/80 p-6 sm:p-8 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Feature Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-stone-100 group">
                <img
                  src={SALON_INFO.featureImage}
                  alt="The Queen's: A Family Salon Interior Sector 28 D Chandigarh"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-rose-950/85 backdrop-blur-md text-amber-200 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                  <Crown className="w-3 h-3 text-amber-300" />
                  <span>Royal Salon Interior</span>
                </div>
              </div>
            </div>

            {/* Description & Master Highlights */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
                  Excellence in Family Hair &amp; Beauty
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-rose-950">
                  A Royal Pampering Experience in Sector 28 D, Chandigarh
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Located at <strong>SCO-154, 2nd Floor, Near Pal Dhaba, Sector 28 D</strong>, 
                  <strong> {SALON_INFO.name}</strong> brings luxury, comfort, and professional artistry to women, men, and children. 
                  Whether you need bespoke eyebrow threading, volumizing blowouts, Remy hair extensions, clinical acne solutions, 
                  or a rejuvenating therapeutic body massage, our certified master stylists ensure royal results every single visit.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-100 space-y-1">
                  <span className="font-bold text-stone-900 block flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-rose-700" />
                    Brows &amp; Lashes
                  </span>
                  <p className="text-stone-500 text-[11px]">
                    Precision threading, beautification &amp; permanent cosmetic tattooing.
                  </p>
                </div>

                <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-100 space-y-1">
                  <span className="font-bold text-stone-900 block flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-rose-700" />
                    Hair &amp; Extensions
                  </span>
                  <p className="text-stone-500 text-[11px]">
                    Signature blow dry, 100% Remy hair extensions &amp; precision family haircuts.
                  </p>
                </div>

                <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-100 space-y-1">
                  <span className="font-bold text-stone-900 block flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-rose-700" />
                    Skin &amp; Rica Waxing
                  </span>
                  <p className="text-stone-500 text-[11px]">
                    Targeted acne clearing, Italian Rica Brazilian waxing &amp; de-tan polish.
                  </p>
                </div>

                <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-100 space-y-1">
                  <span className="font-bold text-stone-900 block flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-rose-700" />
                    Massage &amp; Wedding Prep
                  </span>
                  <p className="text-stone-500 text-[11px]">
                    Therapeutic relaxing massage &amp; high-definition bridal styling.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={SALON_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Booking ({SALON_INFO.phone})</span>
                </a>
                <button
                  onClick={() => onNavigate('booking')}
                  className="px-4 py-2.5 text-xs font-semibold text-rose-900 bg-rose-100 hover:bg-rose-200 rounded-lg transition-colors"
                >
                  Reserve Your Slot
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Reviews Section (379+ reviews, 5.0★) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-rose-50/70 rounded-3xl p-6 sm:p-8 border border-rose-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-1.5 text-amber-500 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
                <span className="text-xs font-bold text-stone-900 ml-1">
                  Rated {SALON_INFO.rating}★ ({SALON_INFO.totalReviews} Google reviews)
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-rose-950">
                Loved by Over 379+ Clients in Chandigarh
              </h3>
              <p className="text-xs text-stone-600 mt-0.5">
                Verified reviews from families visiting our Sector 28 D salon &amp; beauty studio.
              </p>
            </div>
            <button
              onClick={() => onNavigate('booking')}
              className="px-4 py-2.5 text-xs font-semibold bg-rose-900 text-white rounded-lg hover:bg-rose-950 transition-colors self-start sm:self-auto shrink-0 shadow-2xs"
            >
              Book Your Appointment
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REVIEWS.map((rev, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-rose-100 text-xs flex flex-col justify-between shadow-2xs">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-2">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-stone-700 italic mb-3 leading-relaxed">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-bold text-stone-900">{rev.name}</span>
                  <span className="text-[10px] text-rose-700 font-semibold bg-rose-50 px-1.5 py-0.5 rounded">
                    {rev.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address & Quick Booking Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs font-semibold text-rose-800">
              <MapPin className="w-4 h-4" />
              <span>Location: Sector 28 D, Chandigarh (Near Pal Dhaba)</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-stone-900">
              {SALON_INFO.address.full}
            </h4>
            <p className="text-xs text-stone-500">
              Timings: {SALON_INFO.timings} · Open All 7 Days for Men, Women &amp; Kids
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="px-4 py-2.5 text-xs font-semibold text-rose-900 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-rose-700" />
              <span>Call: {SALON_INFO.phone}</span>
            </a>
            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Booking</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors"
            >
              Directions &amp; Map
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
