'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useBooking } from './BookingProvider';

export default function Header() {
  const { openBooking } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl btn-gradient flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-2xl font-bold gradient-text">NovaLife</span>
        </Link>

        {/* CTA Button */}
        <button
          onClick={() => openBooking()}
          className="btn-gradient text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
        >
          <span className="hidden sm:inline">Book Free Consultation</span>
          <span className="sm:hidden">Book Now</span>
        </button>
      </div>
    </header>
  );
}
