'use client';

import { useBooking } from './BookingProvider';

export default function Problem() {
    const { openBooking } = useBooking();
    const painPoints = [
        {
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Diet After Diet',
            description:
                "Keto, intermittent fasting, calorie counting — you've tried them all. Lost weight, gained it back. Every time. The cycle never ends because diets without structure don't last.",
        },
        {
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
            ),
            title: 'Gym Without Direction',
            description:
                "You show up, do random exercises, follow whatever program you found online. Weeks pass. No real progress. No accountability. No one adjusting the plan when it stops working.",
        },
        {
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            title: 'Peptides Without Guidance',
            description:
                "You started GLP-1s or peptides hoping for a breakthrough — but without proper nutrition and training alongside them, the results were temporary. The tool works, but only with the right system around it.",
        },
    ];

    return (
        <section id="problem" className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="blob w-40 sm:w-80 h-40 sm:h-80 bg-red-100 -top-20 sm:-top-40 -right-20 sm:-right-40 opacity-40"></div>
            <div className="blob w-32 sm:w-64 h-32 sm:h-64 bg-orange-100 bottom-20 -left-16 sm:-left-32 opacity-40"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-16 animate-fadeInUp">
                    <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
                        </svg>
                        The Real Problem
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Sound Familiar?
                    </h2>
                    <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        You&apos;re not lazy. You&apos;re not lacking willpower. You&apos;ve been trying to solve a multi-layered problem with one-dimensional solutions.
                    </p>
                </div>

                {/* Pain Cards */}
                <div className="grid md:grid-cols-3 gap-4 sm:gap-8 mb-10 sm:mb-16">
                    {painPoints.map((point, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fadeInUp"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-4 sm:mb-5">
                                {point.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{point.title}</h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{point.description}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom line + CTA */}
                <div className="text-center animate-fadeInUp" style={{ animationDelay: '450ms' }}>
                    <div className="bg-white rounded-2xl p-5 sm:p-8 max-w-3xl mx-auto shadow-sm border border-gray-100">
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium mb-4 sm:mb-6">
                            The problem was never your effort.{' '}
                            <span className="text-gray-900 font-bold">
                                It&apos;s that no one combined the pieces for you.
                            </span>
                        </p>
                        <button
                            onClick={() => openBooking()}
                            className="btn-gradient text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 w-full sm:w-auto justify-center"
                        >
                            Get the Complete System
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
