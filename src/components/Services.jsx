'use client';

const services = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: 'Personal Training',
        description: 'One-on-one customized workout plans designed specifically for your body type, goals, and lifestyle.',
        features: ['Custom Workout Plans', 'Progress Tracking', 'Form Correction'],
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        title: 'Nutrition Coaching',
        description: 'Personalized meal plans and nutrition guidance to fuel your body for optimal performance and longevity.',
        features: ['Meal Planning', 'Macro Tracking', 'Supplement Guidance'],
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: 'Online Programs',
        description: 'Flexible online coaching programs that fit your schedule, accessible anywhere, anytime.',
        features: ['Video Workouts', '24/7 Support', 'Community Access'],
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="blob w-96 h-96 bg-emerald-50 -top-48 -right-48"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                        Programs Designed for{' '}
                        <span className="gradient-text">Your Success</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Choose from our comprehensive range of fitness and nutrition services tailored to help you achieve lasting results.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className={`bg-white rounded-3xl p-8 shadow-lg border border-gray-100 card-hover animate-fadeInUp`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl btn-gradient flex items-center justify-center text-white mb-6">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-6">{service.description}</p>

                            {/* Features */}
                            <ul className="space-y-3">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-gray-700">
                                        <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Learn More Link */}
                            <a href="#" className="inline-flex items-center gap-2 text-emerald-600 font-semibold mt-6 hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
