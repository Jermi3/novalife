'use client';

export default function CTA() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-500 to-lime-500"></div>
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Limited Spots Available
                </div>

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    Ready to Transform{' '}
                    <span className="text-emerald-100">Your Life?</span>
                </h2>

                {/* Subheadline */}
                <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
                    Take the first step towards a healthier, stronger you. Book a free consultation with our expert coaches today.
                </p>

                {/* CTA Form */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/20 transition-all"
                    />
                    <button className="px-8 py-4 rounded-full bg-white text-emerald-600 font-semibold hover:bg-emerald-100 transition-colors shadow-lg hover:shadow-xl">
                        Get Started Free
                    </button>
                </div>

                {/* Trust signals */}
                <div className="mt-10 flex flex-wrap justify-center gap-8 text-white/80">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Free Consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>No Credit Card Required</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Cancel Anytime</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
