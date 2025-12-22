'use client';

const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Clients' },
    { number: '15+', label: 'Expert Coaches' },
    { number: '98%', label: 'Success Rate' },
];

const values = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Science-Backed Methods',
        description: 'Our programs are built on the latest research in fitness, nutrition, and longevity science.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'Personalized Approach',
        description: 'No cookie-cutter programs. Every plan is tailored to your unique body and goals.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Long-Term Results',
        description: 'We focus on sustainable lifestyle changes, not quick fixes that fade away.',
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-gradient-to-b from-emerald-50 to-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Image/Visual */}
                    <div className="relative animate-fadeInLeft">
                        <div className="relative">
                            {/* About coach image */}
                            <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden relative">
                                <img
                                    src="/about-coach.png"
                                    alt="Wellness coach"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>

                            {/* Experience badge */}
                            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 shadow-xl">
                                <p className="text-4xl font-bold gradient-text">10+</p>
                                <p className="text-gray-600 font-medium">Years of Excellence</p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="animate-fadeInRight">
                        <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                            Your Partner in{' '}
                            <span className="gradient-text">Lifelong Wellness</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            At NovaLife Wellness, we believe that everyone deserves to live their healthiest, most vibrant life.
                            Our team of certified coaches combines cutting-edge science with compassionate guidance to help you
                            transform not just your body, but your entire relationship with health and fitness.
                        </p>

                        {/* Values */}
                        <div className="space-y-6 mb-8">
                            {values.map((value) => (
                                <div key={value.title} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                                        {value.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{value.title}</h4>
                                        <p className="text-gray-600">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            className="btn-gradient text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 hover:gap-3 transition-all"
                        >
                            Start Your Journey
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="text-center p-6 rounded-2xl bg-white shadow-lg border border-gray-100 animate-fadeInUp"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</p>
                            <p className="text-gray-600 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
