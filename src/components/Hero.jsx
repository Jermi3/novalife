'use client';

import Image from 'next/image';
import { useBooking } from './BookingProvider';

export default function Hero() {
    const { openBooking } = useBooking();
    return (
        <section className="hero-gradient min-h-screen pt-24 pb-16 relative overflow-hidden">
            {/* Background decorative blobs - hidden on mobile */}
            <div className="blob w-48 md:w-96 h-48 md:h-96 bg-emerald-200 top-20 -left-24 md:-left-48"></div>
            <div className="blob w-40 md:w-80 h-40 md:h-80 bg-lime-200 bottom-20 -right-20 md:-right-40"></div>
            <div className="blob w-32 md:w-64 h-32 md:h-64 bg-cyan-100 top-1/2 left-1/3 hidden md:block"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
                    {/* Left Content */}
                    <div className="animate-fadeInLeft">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                            For Executives Who've Tried Everything
                        </div>

                        {/* Headline */}
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                            Stop Guessing.
                            <br />
                            <span className="gradient-text">Start Transforming.</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl">
                            You've tried the diets, the gym memberships, even peptides — but nothing stuck. Because no one built you a complete system. Until now.
                        </p>

                        {/* CTA Button */}
                        <div className="flex flex-wrap gap-4 mb-8 sm:mb-12">
                            <button
                                onClick={() => openBooking()}
                                className="btn-gradient text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 w-full sm:w-auto justify-center"
                            >
                                Book Free Consultation
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 sm:gap-6">
                            <a href="https://instagram.com/novalifewellness" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                <span className="font-medium text-sm sm:text-base">Instagram</span>
                            </a>
                            <a href="https://facebook.com/novalifewellness" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                <span className="font-medium text-sm sm:text-base">Facebook</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="relative animate-fadeInRight">
                        {/* Main image container */}
                        <div className="relative z-10">
                            <div className="relative w-full aspect-[3/4] sm:aspect-square max-w-xs sm:max-w-lg mx-auto">
                                {/* Hero trainer image */}
                                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden">
                                    <Image
                                        src="/hero-trainer.png"
                                        alt="Larry Novales, RND - Nutritionist-Dietitian & ISSA Master Trainer"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                </div>

                                {/* Floating stats card */}
                                <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 glass rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl animate-float">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                                            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-lg sm:text-2xl font-bold text-gray-900">500+</p>
                                            <p className="text-xs sm:text-sm text-gray-500">Happy Clients</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating coach preview */}
                                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 glass rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-xl">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-emerald-400 to-lime-400"></div>
                                        <div>
                                            <p className="text-xs sm:text-sm font-semibold text-gray-900">Expert Coach</p>
                                            <p className="text-[10px] sm:text-xs text-gray-500">RND | 10+ Years</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative circle - hidden on mobile */}
                        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-dashed border-emerald-200 rounded-full opacity-50"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
