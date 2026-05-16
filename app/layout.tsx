import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';
import { CSPostHogProvider } from '@/components/PostHogProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://smartlearning.pk'),
  title: 'Smart Learning - Next-Gen Education Infrastructure',
  description:
    'AI-powered management systems for institutions that refuse to accept the status quo. Paper generation, student lifecycle, and analytics.',
  keywords: [
    'education',
    'AI',
    'paper generation',
    'student management',
    'school ERP',
  ],
  authors: [{ name: 'Smart Learning Team' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Smart Learning - Next-Gen Education Infrastructure',
    description:
      'AI-powered management systems for institutions that refuse to accept the status quo.',
    url: 'https://smartlearning.pk',
    siteName: 'Smart Learning',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Smart Learning Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Learning - Next-Gen Education Infrastructure',
    description:
      'AI-powered management systems for institutions that refuse to accept the status quo.',
    images: ['/logo.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        <CSPostHogProvider>{children}</CSPostHogProvider>
      </body>
    </html>
  );
}
