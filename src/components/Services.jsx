'use client';

import { useBooking } from './BookingProvider';

const pillars = [
    {
        icon: (
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C9 2 6.5 4 6 7c-.5 3 1 5 1 7 0 1.5-.5 3-1 4h12c-.5-1-1-2.5-1-4 0-2 1.5-4 1-7-.5-3-3-5-6-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21c.5.5 1.2 1 2 1s1.5-.5 2-1" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2V1M8 3L7 2M16 3l1-1" />
            </svg>
        ),
        title: 'Nutrition (RND-Led)',
        description:
            'Evidence-based meal planning, metabolic assessment, and body composition optimization — designed by a Registered Nutritionist-Dietitian, not a generic coach.',
        features: ['RND-Designed Plans', 'Metabolic Assessment', 'Body Comp Optimization'],
    },
    {
        icon: (
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h12" />
                <circle cx="4" cy="12" r="2" strokeWidth={2} />
                <circle cx="20" cy="12" r="2" strokeWidth={2} />
                <rect x="8" y="9" width="3" height="6" rx="0.5" strokeWidth={2} />
                <rect x="13" y="10" width="3" height="4" rx="0.5" strokeWidth={2} />
            </svg>
        ),
        title: 'Performance Training',
        description:
            'Strength and conditioning protocols built for real-life performance. Progressive, structured, and designed for busy professionals — not random gym sessions.',
        features: ['Progressive Programming', 'Corrective Exercise', 'Time-Efficient Sessions'],
    },
    {
        icon: (
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
        ),
        title: 'Recovery',
        description:
            'Sleep optimization, stress management, and recovery protocols. Because what you do between sessions matters as much as the sessions themselves.',
        features: ['Sleep Optimization', 'Stress Management', 'HRV Monitoring'],
    },
    {
        icon: (
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: 'Habit Engineering',
        description:
            'Behavioral systems, routine design, and accountability structures. We don\'t just tell you what to do — we rewire how you operate.',
        features: ['Routine Design', 'Accountability Systems', 'Identity-Based Coaching'],
    },
    {
        icon: (
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8M8 15h3M13 15h3" />
            </svg>
        ),
        title: 'Longevity Integration',
        description:
            'VO2 max training, muscle mass preservation, guided peptide protocols, and biological age optimization. This isn\'t just fitness — it\'s longevity architecture.',
        features: ['Guided Peptide Protocols', 'VO2 Max Training', 'Biological Age Optimization'],
    },
];

export default function Services() {
    const { openBooking } = useBooking();
    return (
        <section id="services" className="py-16 sm:py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="blob w-48 sm:w-96 h-48 sm:h-96 bg-emerald-50 -top-24 sm:-top-48 -right-24 sm:-right-48"></div>
            <div className="blob w-36 sm:w-72 h-36 sm:h-72 bg-emerald-50/50 -bottom-18 sm:-bottom-36 -left-18 sm:-left-36"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
                    <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 border border-emerald-100">
                        The NovaLife System
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 sm:mt-3 mb-4 sm:mb-6">
                        Five Pillars. One System.{' '}
                        <span className="gradient-text">Built for Longevity.</span>
                    </h2>
                    <p className="text-base sm:text-xl text-gray-600">
                        We don&apos;t sell programs. We build systems. Each pillar works together to
                        create sustainable transformation — guided by a Registered
                        Nutritionist-Dietitian and ISSA Master Trainer.
                    </p>
                </div>

                {/* Pillars Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                    {pillars.slice(0, 3).map((pillar, index) => (
                        <div
                            key={pillar.title}
                            className="bg-white rounded-2xl p-5 sm:p-8 shadow-lg border border-gray-100 card-hover animate-fadeInUp"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl btn-gradient flex items-center justify-center text-white mb-4 sm:mb-6">
                                {pillar.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{pillar.title}</h3>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{pillar.description}</p>

                            {/* Features */}
                            <ul className="space-y-2 sm:space-y-3">
                                {pillar.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Learn More Link */}
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 text-emerald-600 font-semibold mt-4 sm:mt-6 hover:gap-3 transition-all text-sm sm:text-base"
                            >
                                Learn More
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Bottom row - centered */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-8 mt-4 sm:mt-8 max-w-3xl mx-auto">
                    {pillars.slice(3).map((pillar, index) => (
                        <div
                            key={pillar.title}
                            className="bg-white rounded-2xl p-5 sm:p-8 shadow-lg border border-gray-100 card-hover animate-fadeInUp"
                            style={{ animationDelay: `${(index + 3) * 150}ms` }}
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl btn-gradient flex items-center justify-center text-white mb-4 sm:mb-6">
                                {pillar.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{pillar.title}</h3>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{pillar.description}</p>

                            {/* Features */}
                            <ul className="space-y-2 sm:space-y-3">
                                {pillar.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Learn More Link */}
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 text-emerald-600 font-semibold mt-4 sm:mt-6 hover:gap-3 transition-all text-sm sm:text-base"
                            >
                                Learn More
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Connecting Message + CTA */}
                <div className="text-center mt-10 sm:mt-16 animate-fadeInUp" style={{ animationDelay: '750ms' }}>
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                        Each pillar is powerful on its own.{' '}
                        <span className="gradient-text">Together, they&apos;re a system that transforms your life.</span>
                    </p>
                    <button
                        onClick={() => openBooking()}
                        className="btn-gradient text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
                    >
                        Book Your Free Consultation
                    </button>
                </div>
            </div>
        </section>
    );
}
