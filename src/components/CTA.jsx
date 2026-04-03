'use client';

import { useState } from 'react';

export default function CTA() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        tried: '',
    });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState('');

    function handleChange(e) {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!formData.name || !formData.email) return;

        setStatus('loading');
        setErrorMsg('');

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, source: 'cta_final' }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', tried: '' });
        } catch (err) {
            setStatus('error');
            setErrorMsg(err.message);
        }
    }

    return (
        <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
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

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Limited Spots Available
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                    Your Transformation Starts With{' '}
                    <span className="text-emerald-100">One Conversation</span>
                </h2>

                {/* Subheadline */}
                <p className="text-base sm:text-xl text-emerald-100 mb-8 sm:mb-10 max-w-2xl mx-auto">
                    Book a free consultation with Coach Larry. No commitment. No sales pitch. Just an honest assessment and a real plan built for your body and your schedule.
                </p>

                {/* CTA Form */}
                {status === 'success' ? (
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-xl mx-auto">
                        <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-3 sm:mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">You&apos;re In!</h3>
                        <p className="text-sm sm:text-base text-emerald-100">Coach Larry will reach out to you shortly to schedule your free consultation.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto border border-white/20 shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                            {/* Name */}
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all text-sm sm:text-base"
                            />

                            {/* Email */}
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                                className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all text-sm sm:text-base"
                            />

                            {/* Phone — full width */}
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all md:col-span-2 text-sm sm:text-base"
                            />

                            {/* Textarea — full width */}
                            <textarea
                                name="tried"
                                value={formData.tried}
                                onChange={handleChange}
                                placeholder="What have you tried so far?"
                                rows={2}
                                className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all resize-none md:col-span-2 text-sm sm:text-base"
                            />
                        </div>

                        <p className="text-white/70 text-xs sm:text-sm text-center mt-3 sm:mt-4 mb-1 sm:mb-2">Our programs range from ₱5,000–₱60,000/month depending on your goals.</p>

                        {/* Submit button */}
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="mt-4 sm:mt-6 w-full px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-white text-emerald-600 font-bold text-base sm:text-lg hover:bg-emerald-100 transition-colors shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? 'Submitting...' : 'Book My Free Consultation'}
                        </button>
                    </form>
                )}

                {/* Error message */}
                {status === 'error' && (
                    <p className="mt-4 text-white/90 bg-red-500/30 inline-block px-4 py-2 rounded-full text-xs sm:text-sm">
                        {errorMsg}
                    </p>
                )}

                {/* Trust signals */}
                <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-8 text-white/80 text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Free Consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>No Commitment</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Personalized Plan</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
