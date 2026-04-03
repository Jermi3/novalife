'use client';

import { useState } from 'react';
import { useBooking } from './BookingProvider';

const testimonials = [
    {
        name: 'Sarah Mitchell',
        role: 'Lost 30 lbs in 6 months',
        image: null,
        quote: "I'd tried every diet, every app, every quick fix out there. Nothing stuck. When I started working with this system, everything clicked — the nutrition was built for me, the workouts made sense, and the recovery protocols tied it all together. I finally stopped guessing and started seeing real results.",
        rating: 5,
    },
    {
        name: 'Marcus Chen',
        role: 'Executive, Tech Industry',
        image: null,
        quote: "As a CEO, I don't have time for trial and error. I'd spent thousands on personal trainers and wellness programs separately — none of it connected. This was the first time someone gave me one complete plan that actually fit my schedule and my goals. Down 25 lbs and my energy is through the roof.",
        rating: 5,
    },
    {
        name: 'Emily Rodriguez',
        role: 'Busy Professional & Mom',
        image: null,
        quote: "I was so frustrated. I'd done the gym memberships, the meal kits, even tried different wellness programs on my own. Nothing worked because nothing was coordinated. Having one coach handle all three pillars changed everything. I finally feel like myself again.",
        rating: 5,
    },
];

export default function Testimonials() {
    const { openBooking } = useBooking();
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="testimonials" className="py-16 sm:py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="blob w-48 sm:w-96 h-48 sm:h-96 bg-lime-50 -bottom-24 sm:-bottom-48 -left-24 sm:-left-48"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
                    <span className="inline-block bg-emerald-100 text-emerald-700 font-semibold text-xs sm:text-sm uppercase tracking-wider px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-3 sm:mb-4">
                        Real Results
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 sm:mt-3 mb-4 sm:mb-6">
                        They Were Where{' '}
                        <span className="gradient-text">You Are Now</span>
                    </h2>
                    <p className="text-base sm:text-xl text-gray-600">
                        Real transformations from real people who stopped guessing and started following the complete system.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.name}
                            className={`bg-gradient-to-br from-white to-emerald-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg border border-emerald-100 card-hover animate-fadeInUp`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Quote icon */}
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full btn-gradient flex items-center justify-center mb-4 sm:mb-6">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-3 sm:mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 italic">"{testimonial.quote}"</p>

                            {/* Author */}
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-400 to-lime-400 flex items-center justify-center text-white font-bold text-base sm:text-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                                    <p className="text-xs sm:text-sm text-emerald-600">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-10 sm:mt-16">
                    <button
                        onClick={() => openBooking()}
                        className="btn-gradient text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center gap-2 hover:gap-3 transition-all w-full sm:w-auto justify-center"
                    >
                        Start Your Transformation
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                    <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4">
                        Join 500+ clients who found what actually works
                    </p>
                </div>
            </div>
        </section>
    );
}
