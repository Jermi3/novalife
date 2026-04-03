import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy",
  description:
    "NovaLife Wellness Privacy Policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-10">
            Last updated: April 3, 2026
          </p>

          <div className="space-y-8 text-gray-400 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                When you interact with NovaLife Wellness, we may collect the
                following information:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-gray-300">Personal Information:</strong>{" "}
                  Name, email address, phone number, and other contact details you
                  provide through our forms or booking system.
                </li>
                <li>
                  <strong className="text-gray-300">Health & Wellness Data:</strong>{" "}
                  Information you voluntarily share during consultations, including
                  health goals, dietary preferences, fitness history, and lifestyle
                  habits.
                </li>
                <li>
                  <strong className="text-gray-300">Usage Data:</strong>{" "}
                  Information about how you interact with our website, including
                  pages visited, time spent, and referring sources.
                </li>
                <li>
                  <strong className="text-gray-300">Device Information:</strong>{" "}
                  Browser type, operating system, and IP address collected
                  automatically when you visit our site.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                2. How We Use Your Information
              </h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Provide, personalize, and improve our coaching and wellness
                  services.
                </li>
                <li>
                  Communicate with you about appointments, programs, and updates.
                </li>
                <li>
                  Develop customized nutrition, training, and recovery plans
                  tailored to your goals.
                </li>
                <li>
                  Analyze website usage to improve our platform and user
                  experience.
                </li>
                <li>
                  Comply with legal obligations under Philippine law, including
                  the Data Privacy Act of 2012 (Republic Act No. 10173).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                3. Data Protection & Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to
                protect your personal data against unauthorized access, alteration,
                disclosure, or destruction. Your health-related information is
                treated with the highest level of confidentiality. We use
                industry-standard encryption and secure storage practices to
                safeguard your data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                4. Sharing of Information
              </h2>
              <p className="mb-3">
                We do not sell, trade, or rent your personal information to third
                parties. We may share your data only in the following
                circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-gray-300">Service Providers:</strong>{" "}
                  Trusted third-party tools that help us operate our website and
                  deliver services (e.g., hosting, email, and analytics
                  providers). These providers are bound by confidentiality
                  agreements.
                </li>
                <li>
                  <strong className="text-gray-300">Legal Requirements:</strong>{" "}
                  When required by law, regulation, or legal process under
                  Philippine jurisdiction.
                </li>
                <li>
                  <strong className="text-gray-300">With Your Consent:</strong>{" "}
                  When you explicitly authorize us to share your information.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                5. Your Rights Under the Data Privacy Act
              </h2>
              <p className="mb-3">
                Under the Philippine Data Privacy Act of 2012, you have the right
                to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Be informed about how your personal data is being processed.
                </li>
                <li>Access your personal data held by NovaLife Wellness.</li>
                <li>
                  Object to or withdraw consent for the processing of your data.
                </li>
                <li>Request correction or erasure of inaccurate data.</li>
                <li>
                  Lodge a complaint with the National Privacy Commission if you
                  believe your rights have been violated.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                6. Cookies & Tracking
              </h2>
              <p>
                Our website may use cookies and similar technologies to enhance
                your browsing experience and gather analytics data. You can manage
                your cookie preferences through your browser settings. Disabling
                cookies may limit some features of our site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                7. Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as necessary
                to fulfill the purposes described in this policy, or as required
                by law. When your data is no longer needed, we will securely delete
                or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                8. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will
                be posted on this page with a revised &ldquo;Last updated&rdquo;
                date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                9. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or wish to
                exercise your data rights, please contact us at{" "}
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
