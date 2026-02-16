import GoogleAnalytics from "@/hooks/GoogleAnalytics";
import "./globals.css";
import { WebVitals } from "@/hooks/WebVitals";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Script from "next/script";

// export const metadata = {
//   title: "Brixbiz",
//   description: "Creative Studio built for brick and mortar businesses",
// };
const siteUrl = "https://www.brixbiz.com";
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  name: "Brixbiz",
  url: siteUrl,
  logo: `${siteUrl}/assets/images/logo_alt1.png`,
  areaServed: [
    { "@type": "AdministrativeArea", name: "Queens" },
    { "@type": "City", name: "New York" },
  ],
  sameAs: [
    "https://www.linkedin.com/company/brixbiz-llc/",
    "https://www.instagram.com/brixbiz/",
    "https://www.youtube.com/channel/UCpBcnRCNcqyUZ96OlNZ8yOg",
  ],
  description:
    "Custom websites and ongoing web care for small businesses in Queens and NYC.",
};
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Brixbiz",
    template: "%s | Brixbiz",
  },
  description:
    "Custom websites and ongoing web care for small businesses in Queens and NYC.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Brixbiz",
    title: "Brixbiz",
    description:
      "Custom websites and ongoing web care for small businesses in Queens and NYC.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Brixbiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brixbiz",
    description:
      "Custom websites and ongoing web care for small businesses in Queens and NYC.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  const gaId1 = process.env.NEXT_PUBLIC_G_TAG_ID;
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Averia+Serif+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Epilogue:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Outfit:wght@100..900&family=Phudu:wght@300..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Averia+Serif+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Epilogue:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Outfit:wght@100..900&family=Phudu:wght@300..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Averia+Serif+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Epilogue:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Outfit:wght@100..900&family=Phudu:wght@300..900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Averia+Serif+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Epilogue:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Outfit:wght@100..900&family=Phudu:wght@300..900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Space+Grotesk:wght@300..700&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Wrapper>
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <HeaderOne />
              {children}
              <FooterOne />
            </div>
          </div>
        </Wrapper>

        {/* Google Analytics - @next/third-parties optimized - loads after hydration */}
        <GoogleAnalytics />
        {/* Core Web Vitals Tracking */}
        <WebVitals />
        <Script
          id="brixbiz-localbusiness-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </body>
    </html>
  );
}
