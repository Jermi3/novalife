import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service",
  description:
    "NovaLife Wellness Terms of Service — the terms and conditions governing your use of our services.",
};

export default function TermsOfService() {
  return (
    <>
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl btn-gradient flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">NovaLife</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="bg-gray-950 text-gray-300 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Terms of Service
          </h1>
          <p className="text-gray-500 mb-10">
            Last updated: April 3, 2026
          </p>

          <div className="space-y-8 text-gray-400 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the NovaLife Wellness website and services,
                you agree to be bound by these Terms of Service. If you do not
                agree to these terms, please do not use our services. These terms
                constitute a legally binding agreement between you and NovaLife
                Wellness.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                2. Description of Services
              </h2>
              <p className="mb-3">
                NovaLife Wellness provides health, fitness, and wellness coaching
                services, including but not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Personalized nutrition coaching led by a Registered
                  Nutritionist-Dietitian (RND).
                </li>
                <li>
                  Performance training and workout programming.
                </li>
                <li>
                  Longevity architecture and recovery protocols.
                </li>
                <li>
                  Executive and corporate wellness programs.
                </li>
                <li>
                  Habit engineering and lifestyle optimization consultations.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                3. Not Medical Advice
              </h2>
              <p>
                The information and services provided by NovaLife Wellness are for
                general wellness and educational purposes only.{" "}
                <strong className="text-gray-300">
                  Our services are not a substitute for professional medical
                  advice, diagnosis, or treatment.
                </strong>{" "}
                Always consult your physician or qualified healthcare provider
                before starting any new fitness, nutrition, or wellness program,
                especially if you have pre-existing health conditions. NovaLife
                Wellness is not liable for any health outcomes resulting from the
                application of information or recommendations provided.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                4. User Responsibilities
              </h2>
              <p className="mb-3">By using our services, you agree to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Provide accurate and complete information during registration,
                  consultations, and assessments.
                </li>
                <li>
                  Disclose any relevant medical conditions, allergies, injuries,
                  or medications that may affect your participation.
                </li>
                <li>
                  Follow program guidelines responsibly and within your physical
                  capabilities.
                </li>
                <li>
                  Not share, redistribute, or reproduce any coaching materials,
                  plans, or proprietary content without written consent.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                5. Payments & Refunds
              </h2>
              <p>
                Payment terms, pricing, and refund policies are communicated at
                the time of enrollment or purchase. All fees are due as specified
                in your coaching agreement. Refund requests will be evaluated on a
                case-by-case basis. NovaLife Wellness reserves the right to modify
                pricing at any time, with advance notice to active clients.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                6. Intellectual Property
              </h2>
              <p>
                All content on the NovaLife Wellness website — including text,
                graphics, logos, images, training programs, nutrition plans, and
                proprietary methodologies — is the intellectual property of
                NovaLife Wellness and is protected by applicable copyright and
                intellectual property laws. You may not copy, modify, distribute,
                or use any content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                7. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by Philippine law, NovaLife
                Wellness and its coaches, employees, and affiliates shall not be
                liable for any indirect, incidental, special, or consequential
                damages arising from your use of our services or website. Our
                total liability shall not exceed the amount you paid for the
                specific service giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                8. Termination
              </h2>
              <p>
                We reserve the right to suspend or terminate your access to our
                services if you violate these terms, engage in harmful behavior,
                or misuse our platform. You may discontinue your use of our
                services at any time by contacting us directly.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                9. Governing Law
              </h2>
              <p>
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the Republic of the Philippines. Any
                disputes arising from these terms shall be resolved through the
                appropriate courts in the Philippines.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                10. Changes to These Terms
              </h2>
              <p>
                NovaLife Wellness may revise these Terms of Service at any time.
                Updated terms will be posted on this page with a revised
                &ldquo;Last updated&rdquo; date. Continued use of our services
                after changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                11. Contact Us
              </h2>
              <p>
                For questions or concerns about these Terms of Service, please
                contact us at{" "}
                <a
                  href="mailto:novalifewellnessco@gmail.com"
                  className="text-emerald-400 hover:underline"
                >
                  novalifewellnessco@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
