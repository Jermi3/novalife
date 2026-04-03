import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "NovaLife Wellness | Longevity & Performance Coaching Philippines",
    template: "%s | NovaLife Wellness",
  },
  description:
    "NovaLife Wellness is a system-based longevity coaching company in the Philippines. RND-led nutrition, performance training, recovery, habit engineering, and longevity protocols for executives and professionals.",
  keywords: [
    "longevity coaching Philippines",
    "nutrition coach Philippines",
    "executive wellness program",
    "fat loss and performance",
    "personal training Philippines",
    "registered nutritionist dietitian Philippines",
    "wellness coaching Manila",
    "fitness coach Philippines",
    "health optimization",
    "corporate wellness Philippines",
    "VO2 max training Philippines",
    "longevity architecture",
  ],
  authors: [{ name: "NovaLife Wellness" }],
  creator: "NovaLife Wellness",
  metadataBase: new URL("https://novalifewellness.com"),
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://novalifewellness.com",
    siteName: "NovaLife Wellness",
    title: "NovaLife Wellness | Longevity & Performance Coaching Philippines",
    description:
      "Premier longevity coaching, personalized nutrition, and executive wellness solutions. Transform your health with science-backed programs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaLife Wellness - Transform Your Life",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaLife Wellness | Longevity & Performance Coaching",
    description:
      "Premier longevity coaching and executive wellness solutions in the Philippines.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              name: "NovaLife Wellness",
              description:
                "Premier longevity coaching, personalized nutrition programs, and executive wellness solutions in the Philippines.",
              url: "https://novalifewellness.com",
              logo: "https://novalifewellness.com/logo.png",
              image: "https://novalifewellness.com/og-image.png",
              address: {
                "@type": "PostalAddress",
                addressCountry: "PH",
              },
              priceRange: "$$$",
              founder: {
                "@type": "Person",
                name: "Larry Novales",
                jobTitle: "Registered Nutritionist-Dietitian, ISSA Master Trainer",
              },
              serviceType: [
                "Longevity Coaching",
                "RND Nutrition Coaching",
                "Performance Training",
                "Recovery & Habit Engineering",
                "Executive Wellness",
                "Corporate Wellness",
              ],
              areaServed: {
                "@type": "Country",
                name: "Philippines",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
