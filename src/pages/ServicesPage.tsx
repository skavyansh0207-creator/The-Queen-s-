import React, { useState } from 'react';
import { Search, Clock, Check, Plus, ArrowRight, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { SALON_SERVICES, SalonService, SALON_INFO } from '../data/salonData';
import { PageId } from '../components/HeaderNav';

interface ServicesPageProps {
  selectedServices: SalonService[];
  onToggleService: (service: SalonService) => void;
  onNavigate: (page: PageId) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'brows', label: 'Eyebrows & Lashes' },
  { id: 'hair', label: 'Hair Styling & Care' },
  { id: 'skin', label: 'Skin & Waxing' },
  { id: 'wellness', label: 'Relaxing Massage' },
  { id: 'bridal', label: 'Wedding & Bridal' },
];

export const ServicesPage: React.FC<ServicesPageProps> = ({
  selectedServices,
  onToggleService,
  onNavigate,
}) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = SALON_SERVICES.filter((svc) => {
    const matchCat = activeCategory === 'all' || svc.category === activeCategory;
    const matchQuery =
      svc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      svc.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchQuery;
  });

  const isSelected = (id: string) => selectedServices.some((s) => s.id === id);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Page Title */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-rose-100 pb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-700">
            {SALON_INFO.name} · Rate Card &amp; Menu
          </span>
          <h1 className="font-serif text-3xl font-bold text-rose-950 mt-1">
            Services &amp; Pricing
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            {SALON_INFO.address.full}. Transparent pricing with zero hidden fees.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search Eyebrows, Blow dry, Waxing..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-rose-200 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeCategory === cat.id
                ? 'bg-rose-900 text-white shadow-2xs font-bold'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Floating Selected Services Bar */}
      {selectedServices.length > 0 && (
        <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between gap-3 text-xs shadow-2xs">
          <div className="text-rose-900 font-semibold">
            {selectedServices.length} service{selectedServices.length > 1 ? 's' : ''} selected
            {' '}(Total: ₹{selectedServices.reduce((a, b) => a + b.price, 0).toLocaleString('en-IN')})
          </div>
          <button
            onClick={() => onNavigate('booking')}
            className="px-3.5 py-1.5 bg-rose-800 text-white font-semibold rounded-lg hover:bg-rose-900 transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            <span>Proceed to Booking</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((service) => {
          const selected = isSelected(service.id);
          return (
            <div
              key={service.id}
              className={`p-4 sm:p-5 bg-white rounded-xl border transition-all flex flex-col justify-between ${
                selected
                  ? 'border-rose-500 ring-1 ring-rose-500 bg-rose-50/20'
                  : 'border-stone-200 hover:border-rose-200 hover:shadow-2xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1">
                  <span className="uppercase font-bold tracking-wider text-rose-700">
                    {service.category === 'brows' ? "Eyebrows & Lashes" :
                     service.category === 'hair' ? "Hair Styling & Care" :
                     service.category === 'skin' ? "Skin & Waxing" :
                     service.category === 'wellness' ? "Relaxing Massage" : "Wedding & Bridal"}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-stone-400" />
                    {service.duration}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-base font-bold text-stone-900 mb-1">
                    {service.name}
                  </h3>
                  {service.popular && (
                    <span className="text-[10px] bg-rose-100 text-rose-900 px-2 py-0.5 rounded-full font-bold shrink-0">
                      Popular
                    </span>
                  )}
                </div>

                <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                <span className="font-mono text-base font-bold text-stone-900 tabular-nums">
                  ₹{service.price.toLocaleString('en-IN')}
                </span>

                <button
                  onClick={() => onToggleService(service)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 ${
                    selected
                      ? 'bg-rose-800 text-white hover:bg-rose-900'
                      : 'bg-stone-100 text-stone-800 hover:bg-rose-50 hover:text-rose-900'
                  }`}
                >
                  {selected ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Selected</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Slot</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Consultation Banner */}
      <div className="p-5 bg-gradient-to-r from-rose-50 via-white to-amber-50/50 rounded-2xl border border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="text-center sm:text-left">
          <span className="font-bold text-stone-900 block text-sm">
            Need a personalized beauty or styling consultation?
          </span>
          <p className="text-stone-600">
            Chat with our experts at {SALON_INFO.name} on WhatsApp for questions regarding brows, lashes, hair extensions, family cuts, waxing, or bridal services.
          </p>
        </div>
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={SALON_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg transition-colors flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp ({SALON_INFO.phone})</span>
          </a>
          <a
            href={`tel:${SALON_INFO.phone}`}
            className="px-3.5 py-2 bg-white text-rose-900 border border-rose-300 font-semibold rounded-lg hover:bg-rose-50 transition-colors flex items-center gap-1"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call</span>
          </a>
        </div>
      </div>
    </div>
  );
};
