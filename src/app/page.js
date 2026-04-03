'use client';

import BookingProvider from '@/components/BookingProvider';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <BookingProvider>
      <main>
        <Header />
        <Hero />
        <Problem />
        <Services />
        <Testimonials />
        <About />
        <CTA />
        <Footer />
      </main>
    </BookingProvider>
  );
}
