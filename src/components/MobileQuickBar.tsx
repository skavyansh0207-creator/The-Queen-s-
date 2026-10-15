import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
  selectedServicesCount: number;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onOpenBooking,
  selectedServicesCount,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-rose-950/95 backdrop-blur-md border-t border-rose-900 px-3 py-2 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Quick Call */}
        <a
          href={`tel:${SALON_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 bg-rose-900 hover:bg-rose-800 text-rose-100 rounded-lg text-xs font-semibold transition-colors"
          title="Direct Phone Call"
        >
          <Phone className="w-3.5 h-3.5 text-rose-300" />
          <span>Call</span>
        </a>

        {/* Quick WhatsApp */}
        <a
          href={SALON_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Quick Booking Trigger */}
        <button
          onClick={onOpenBooking}
          className="flex-[1.3] flex items-center justify-center gap-1.5 py-2 px-3 bg-rose-500 hover:bg-rose-400 text-white rounded-lg text-xs font-bold shadow-sm transition-colors"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Slot</span>
          {selectedServicesCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-white text-rose-950 text-[10px] font-bold flex items-center justify-center">
              {selectedServicesCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
