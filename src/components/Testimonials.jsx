'use client';

import { useState } from 'react';

const testimonials = [
    {
        name: 'Sarah Mitchell',
        role: 'Lost 30 lbs in 6 months',
        image: null,
        quote: "NovaLife completely transformed my approach to fitness. The personalized nutrition plan and consistent coaching helped me achieve results I never thought possible. I've never felt more energetic and confident!",
        rating: 5,
    },
    {
        name: 'Marcus Chen',
        role: 'Marathon Runner',
        image: null,
        quote: "As an athlete, I needed a program that could push me to the next level. The coaches at NovaLife understood my goals and created a training plan that helped me shave 20 minutes off my marathon time.",
        rating: 5,
    },
    {
        name: 'Emily Rodriguez',
        role: 'Busy Professional',
        image: null,
        quote: "Between work and family, I thought I had no time for fitness. NovaLife's online program fits perfectly into my schedule. The quick, effective workouts and meal prep guidance have been life-changing.",
        rating: 5,
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="blob w-96 h-96 bg-lime-50 -bottom-48 -left-48"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                        Real People,{' '}
                        <span className="gradient-text">Real Results</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Don't just take our word for it. Here's what our clients have to say about their transformation journey.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.name}
                            className={`bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-8 shadow-lg border border-emerald-100 card-hover animate-fadeInUp`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Quote icon */}
                            <div className="w-12 h-12 rounded-full btn-gradient flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-lime-400 flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-emerald-600">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
