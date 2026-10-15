/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeaderNav, PageId } from './components/HeaderNav';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { BridalPage } from './pages/BridalPage';
import { HairStudioPage } from './pages/HairStudioPage';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { SalonService, BridalPackage } from './data/salonData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServices, setSelectedServices] = useState<SalonService[]>([]);

  const handleToggleService = (service: SalonService) => {
    setSelectedServices((prev) => {
      const exists = prev.some((s) => s.id === service.id);
      if (exists) {
        return prev.filter((s) => s.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
  };

  const handleSelectBridalPackage = (pkg: BridalPackage) => {
    const bridalService: SalonService = {
      id: pkg.id,
      name: pkg.title,
      category: 'bridal',
      duration: pkg.duration,
      price: pkg.price,
      description: pkg.description,
    };

    setSelectedServices((prev) => {
      const filtered = prev.filter((s) => s.category !== 'bridal');
      return [...filtered, bridalService];
    });

    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearServices = () => {
    setSelectedServices([]);
  };

  const handleOpenBooking = () => {
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#faf7f8] text-[#1e1b1d] flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900">
      {/* 6-Page Navigation Bar */}
      <HeaderNav
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        selectedServicesCount={selectedServices.length}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={setCurrentPage} />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            selectedServices={selectedServices}
            onToggleService={handleToggleService}
            onNavigate={setCurrentPage}
          />
        )}

        {currentPage === 'bridal' && (
          <BridalPage
            onSelectBridalPackage={handleSelectBridalPackage}
            onNavigate={setCurrentPage}
          />
        )}

        {currentPage === 'hair' && (
          <HairStudioPage
            selectedServices={selectedServices}
            onToggleService={handleToggleService}
            onNavigate={setCurrentPage}
          />
        )}

        {currentPage === 'booking' && (
          <BookingPage
            selectedServices={selectedServices}
            onToggleService={handleToggleService}
            onClearServices={handleClearServices}
            onNavigate={setCurrentPage}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={setCurrentPage} />

      {/* Mobile Bottom Thumb Bar */}
      <MobileQuickBar
        onOpenBooking={handleOpenBooking}
        selectedServicesCount={selectedServices.length}
      />
    </div>
  );
}
