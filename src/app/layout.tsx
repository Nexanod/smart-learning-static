import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Smart Learning - Modern Education Management System | AI-Powered Paper Generation",
  description: "Smart Learning modernizes education with AI-powered paper generation, student management, and attendance tracking. Complete B2B education platform with customizable subdomains for schools.",
  keywords: [
    "education management system",
    "AI paper generation",
    "student management software",
    "attendance management",
    "online exam system",
    "school management software",
    "B2B education platform",
    "digital learning",
    "automated paper generation",
    "education technology",
    "smart learning platform",
    "result management system"
  ],
  authors: [{ name: "Smart Learning Team" }],
  openGraph: {
    title: "Smart Learning - Modern Education Management System",
    description: "Modernize your institution with AI-powered paper generation, student management, and intelligent automation.",
    type: "website",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-1761231526372.png",
        width: 1200,
        height: 630,
        alt: "Smart Learning Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Learning - Modern Education Management System",
    description: "AI-powered education platform for modern institutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}