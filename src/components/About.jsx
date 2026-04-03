'use client';

import { useBooking } from './BookingProvider';

const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Clients Transformed' },
    { number: 'RND', label: 'Licensed' },
    { number: '98%', label: 'Client Satisfaction' },
];

const values = [
    {
        icon: (
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Licensed RND',
        description: 'Not just certified — registered and licensed. Your nutrition plan is built by a medical nutrition professional.',
    },
    {
        icon: (
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: '10+ Years Coaching',
        description: 'A decade of real-world experience training clients from all walks of life. Not theory — proven results.',
    },
    {
        icon: (
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'Complete System',
        description: 'The only coach who integrates clinical nutrition, performance training, recovery science, habit engineering, and longevity protocols into one structured system.',
    },
];

export default function About() {
    const { openBooking } = useBooking();
    return (
        <section id="about" className="py-16 sm:py-24 bg-gradient-to-b from-emerald-50 to-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left - Image/Visual */}
                    <div className="relative animate-fadeInLeft">
                        <div className="relative">
                            <div className="w-full aspect-[3/4] sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden relative">
                                <img
                                    src="/about-coach.png"
                                    alt="Coach Larry Novales, RND"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* Experience badge */}
                            <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 glass rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
                                <p className="text-2xl sm:text-4xl font-bold gradient-text">10+</p>
                                <p className="text-gray-600 font-medium text-sm sm:text-base">Years of Coaching</p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="animate-fadeInRight">
                        <span className="inline-block bg-emerald-100 text-emerald-700 font-semibold text-xs sm:text-sm uppercase tracking-wider px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-3 sm:mb-4">
                            Meet Your Coach
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 sm:mt-3 mb-2 sm:mb-3">
                            Larry Novales,{' '}
                            <span className="gradient-text">RND</span>
                        </h2>
                        <p className="text-base sm:text-lg text-emerald-600 font-medium mb-4 sm:mb-6">
                            Registered Nutritionist-Dietitian | ISSA Master Trainer | 10+ Years Coaching Experience
                        </p>
                        {/* Short bio for mobile, full bio for desktop */}
                        <p className="text-base text-gray-600 mb-5 sm:hidden">
                            A licensed RND and ISSA Master Trainer who built a complete system — integrating nutrition, training, recovery, and longevity — that has transformed over 500 clients.
                        </p>
                        <p className="hidden sm:block sm:text-lg text-gray-600 mb-8">
                            Coach Larry isn't just a gym trainer. He's not just a nutritionist. He's a rare combination
                            of licensed Registered Nutritionist-Dietitian and ISSA Master Trainer with over a decade of
                            hands-on coaching experience — someone who understands that real transformation doesn't come
                            from one piece of the puzzle. That's why he built a complete system that integrates clinical
                            nutrition, performance training, recovery science, and longevity protocols into one cohesive
                            program. Over 500 clients have trusted his approach and transformed their health because of it.
                        </p>

                        {/* Trust Points - compact on mobile, expanded on desktop */}
                        <div className="flex flex-wrap gap-2 mb-5 sm:hidden">
                            {values.map((value) => (
                                <div key={value.title} className="flex items-center gap-2 bg-emerald-50 rounded-full px-3 py-1.5">
                                    <div className="w-5 h-5 text-emerald-600 flex-shrink-0">
                                        {value.icon}
                                    </div>
                                    <span className="text-sm font-medium text-gray-800">{value.title}</span>
                                </div>
                            ))}
                        </div>
                        <div className="hidden sm:block space-y-6 mb-8">
                            {values.map((value) => (
                                <div key={value.title} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                                        {value.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{value.title}</h4>
                                        <p className="text-base text-gray-600">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <button
                            onClick={() => openBooking()}
                            className="btn-gradient text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center gap-2 hover:gap-3 transition-all w-full sm:w-auto justify-center"
                        >
                            Work With Coach Larry
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="text-center p-4 sm:p-6 rounded-2xl bg-white shadow-lg border border-gray-100 animate-fadeInUp"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <p className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-1 sm:mb-2">{stat.number}</p>
                            <p className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
