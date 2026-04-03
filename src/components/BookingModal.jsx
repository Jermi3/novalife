'use client';

import { useState, useEffect } from 'react';

export default function BookingModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [status, setStatus] = useState('idle');
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    function handleChange(e) {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!formData.email) return;

        setStatus('loading');
        setErrorMsg('');

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, source: 'booking_modal' }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setStatus('success');
        } catch (err) {
            setStatus('error');
            setErrorMsg(err.message);
        }
    }

    function handleClose() {
        onClose();
        setTimeout(() => {
            setStatus('idle');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setErrorMsg('');
        }, 300);
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={handleClose}
            />

            <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-fadeInUp">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
                >
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="bg-gradient-to-r from-emerald-600 to-lime-500 px-8 py-6">
                    <h3 className="text-2xl font-bold text-white">Book Your Free Consultation</h3>
                    <p className="text-emerald-100 mt-1">No commitment. No sales pitch. Just a real plan.</p>
                </div>

                <div className="p-8">
                    {status === 'success' ? (
                        <div className="text-center py-6">
                            <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">You&apos;re All Set!</h4>
                            <p className="text-gray-600 mb-6">Coach Larry will personally reach out within 24 hours to schedule your consultation.</p>
                            <button
                                onClick={handleClose}
                                className="btn-gradient text-white px-6 py-3 rounded-full font-semibold"
                            >
                                Got It
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="booking-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input id="booking-name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Juan Dela Cruz" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" />
                            </div>
                            <div>
                                <label htmlFor="booking-email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input id="booking-email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" />
                            </div>
                            <div>
                                <label htmlFor="booking-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input id="booking-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+63 917 123 4567" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" />
                            </div>
                            <div>
                                <label htmlFor="booking-message" className="block text-sm font-medium text-gray-700 mb-1">What&apos;s your biggest challenge right now?</label>
                                <textarea id="booking-message" name="message" value={formData.message} onChange={handleChange} placeholder="e.g. I've tried multiple diets but can't keep the weight off..." rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none" />
                            </div>

                            {status === 'error' && (
                                <p className="text-red-600 text-sm bg-red-50 px-4 py-2 rounded-lg">{errorMsg}</p>
                            )}

                            <p className="text-gray-500 text-sm text-center">Our programs range from ₱5,000–₱60,000/month depending on your goals.</p>

                            <button type="submit" disabled={status === 'loading'} className="w-full btn-gradient text-white py-4 rounded-full font-semibold text-lg disabled:opacity-70 disabled:cursor-not-allowed">
                                {status === 'loading' ? 'Submitting...' : 'Book My Free Consultation'}
                            </button>

                            <p className="text-center text-sm text-gray-500">100% free. No credit card required.</p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
