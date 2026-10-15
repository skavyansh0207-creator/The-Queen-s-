import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, User, Phone, Check, Trash2, MessageCircle, MapPin, CheckCircle2, X, Plus } from 'lucide-react';
import { SALON_SERVICES, SalonService, SALON_INFO } from '../data/salonData';
import { PageId } from '../components/HeaderNav';

interface BookingPageProps {
  selectedServices: SalonService[];
  onToggleService: (service: SalonService) => void;
  onClearServices: () => void;
  onNavigate: (page: PageId) => void;
}

const TIME_SLOTS = [
  '10:30 AM',
  '11:30 AM',
  '12:30 PM',
  '02:00 PM',
  '03:30 PM',
  '04:30 PM',
  '05:30 PM',
  '06:30 PM',
  '07:30 PM'
];

export const BookingPage: React.FC<BookingPageProps> = ({
  selectedServices,
  onToggleService,
  onClearServices,
  onNavigate,
}) => {
  const [selectedDate, setSelectedDate] = useState(() => {
    return new Date().toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState('11:30 AM');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [confirmedToken, setConfirmedToken] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const subtotal = selectedServices.reduce((acc, s) => acc + s.price, 0);

  const validate = () => {
    if (selectedServices.length === 0) {
      setErrorMsg('Please select at least one treatment before booking.');
      return false;
    }
    if (!clientName.trim()) {
      setErrorMsg('Please enter your name.');
      return false;
    }
    const cleanDigits = clientPhone.replace(/\D/g, '');
    if (cleanDigits.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return false;
    }
    setErrorMsg('');
    return true;
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const token = 'QUEENS-' + Math.floor(1000 + Math.random() * 9000);
    const serviceList = selectedServices.map((s) => `- ${s.name} (₹${s.price})`).join('\n');

    const msg = encodeURIComponent(
      `Hi ${SALON_INFO.name}!\n` +
      `I want to book an appointment at your Sector 28 D Chandigarh salon (Near Pal Dhaba).\n\n` +
      `*Name:* ${clientName}\n` +
      `*Phone:* ${clientPhone}\n` +
      `*Date:* ${selectedDate}\n` +
      `*Time Slot:* ${selectedTime}\n\n` +
      `*Services:*\n${serviceList}\n\n` +
      `*Estimated Bill:* ₹${subtotal.toLocaleString('en-IN')}\n` +
      (clientNotes ? `*Special Requests:* ${clientNotes}\n` : '') +
      `\nPlease confirm my slot. Thank you!`
    );

    setConfirmedToken(token);
    window.open(`https://wa.me/919888547548?text=${msg}`, '_blank');
  };

  const handleWebBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const token = 'QUEENS-' + Math.floor(1000 + Math.random() * 9000);
    setConfirmedToken(token);
  };

  const handleReset = () => {
    setConfirmedToken(null);
    onClearServices();
    setClientName('');
    setClientPhone('');
    setClientNotes('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Header */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-rose-700">
          Instant Reservation · {SALON_INFO.name}
        </span>
        <h1 className="font-serif text-3xl font-bold text-rose-950 mt-1">
          Online Appointment Booking
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          Choose date, time slot, and treatments at {SALON_INFO.address.full}. Instant confirmation via WhatsApp ({SALON_INFO.phone}).
        </p>
      </div>

      {confirmedToken ? (
        /* Confirmation Card */
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-rose-200 text-center shadow-sm max-w-lg mx-auto space-y-5">
          <div className="w-12 h-12 bg-rose-100 text-rose-800 rounded-full flex items-center justify-center mx-auto">
            <Check className="w-6 h-6 stroke-[3]" />
          </div>

          <div>
            <span className="text-xs font-mono font-bold text-rose-700 uppercase">
              Booking Ref: {confirmedToken}
            </span>
            <h2 className="font-serif text-2xl font-bold text-rose-950 mt-1">
              Appointment Scheduled!
            </h2>
            <p className="text-xs text-stone-600 mt-1">
              Thank you, <strong>{clientName}</strong>. We look forward to welcoming you at {SALON_INFO.name}.
            </p>
          </div>

          <div className="bg-rose-50/70 p-4 rounded-xl text-left text-xs space-y-2 border border-rose-100">
            <div className="flex justify-between">
              <span className="text-stone-500">Date &amp; Time:</span>
              <span className="font-bold text-stone-900">{selectedDate} at {selectedTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Selected Services:</span>
              <span className="font-medium text-stone-900 text-right">
                {selectedServices.map((s) => s.name).join(', ')}
              </span>
            </div>
            <div className="flex justify-between pt-2 border-t border-rose-200">
              <span className="text-stone-700 font-bold">Estimated Bill:</span>
              <span className="font-bold text-rose-950 text-sm">₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="text-xs text-stone-600 flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-rose-700 shrink-0" />
            <span>{SALON_INFO.address.full}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="flex-1 py-2 text-xs font-semibold bg-rose-900 text-white rounded-lg hover:bg-rose-950 text-center"
            >
              Call Salon ({SALON_INFO.phone})
            </a>
            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 text-xs font-semibold bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 text-center flex items-center justify-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={handleReset}
              className="flex-1 py-2 text-xs font-semibold bg-stone-100 text-stone-800 rounded-lg hover:bg-stone-200"
            >
              Book Another
            </button>
          </div>
        </div>
      ) : (
        /* Booking Form */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Selected Services */}
          <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-stone-200 space-y-4 shadow-2xs">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-lg font-bold text-stone-900">
                Selected Services ({selectedServices.length})
              </h2>
              {selectedServices.length > 0 && (
                <button
                  type="button"
                  onClick={onClearServices}
                  className="text-xs text-rose-700 hover:text-rose-900"
                >
                  Clear All
                </button>
              )}
            </div>

            {selectedServices.length === 0 ? (
              <div className="p-4 bg-rose-50/50 rounded-xl border border-dashed border-rose-200 text-center">
                <p className="text-xs text-stone-600 mb-2">No services selected yet.</p>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-bold text-rose-800 underline"
                >
                  Browse Full Menu &amp; Prices &rarr;
                </button>
              </div>
            ) : (
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {selectedServices.map((s) => (
                  <div key={s.id} className="p-2.5 bg-stone-50 rounded-lg flex items-center justify-between text-xs">
                    <div>
                      <div className="font-medium text-stone-900">{s.name}</div>
                      <div className="text-[11px] text-stone-500">{s.duration}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-stone-900">₹{s.price}</span>
                      <button
                        type="button"
                        onClick={() => onToggleService(s)}
                        className="text-stone-400 hover:text-red-600 p-0.5"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Total */}
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-stone-700">Estimated Total:</span>
              <span className="font-mono font-bold text-rose-950 text-base">
                ₹{subtotal.toLocaleString('en-IN')}
              </span>
            </div>

            {/* Quick Add Suggestions */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-stone-500 uppercase block mb-1.5">
                Quick Add Popular:
              </span>
              <div className="flex flex-wrap gap-1">
                {SALON_SERVICES.filter((s) => s.popular && !selectedServices.some((x) => x.id === s.id)).slice(0, 4).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onToggleService(item)}
                    className="px-2 py-1 bg-rose-50 hover:bg-rose-100 text-rose-900 text-[11px] rounded transition-colors flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Date, Time & Details */}
          <form onSubmit={handleWhatsAppBooking} className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 space-y-4 shadow-2xs">
            {errorMsg && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Time Slot
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                >
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mehak Preet / Rohan"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 9888547548"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Special Requests or Notes (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Eyebrows style, Hair extension shade, Acne care, Wedding date..."
                value={clientNotes}
                onChange={(e) => setClientNotes(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
              />
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="submit"
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp ({SALON_INFO.phone})</span>
              </button>

              <button
                type="button"
                onClick={handleWebBooking}
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-rose-800 hover:bg-rose-900 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Confirm on Web</span>
              </button>
            </div>

            <div className="text-[11px] text-stone-500 text-center pt-1">
              Need immediate assistance? Call <a href={`tel:${SALON_INFO.phone}`} className="font-bold underline text-rose-800">{SALON_INFO.phone}</a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
