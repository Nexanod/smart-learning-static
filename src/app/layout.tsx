import type { Metadata } from 'next';

import { Geist, Geist_Mono } from 'next/font/google';
import { Toaster } from 'sonner';

import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title:
    'Smart Learning - Transform Education with AI-Powered Digital Learning',
  description:
    'Eliminate physical labor and embrace AI-powered workflows that make teaching and learning frictionless. Smart Learning brings modern, trusted digital systems to every classroom.',
  keywords:
    'education technology, AI learning, digital classroom, smart education, online learning, educational software',
  authors: [{ name: 'Smart Learning Team' }],
  openGraph: {
    title:
      'Smart Learning - Transform Education with AI-Powered Digital Learning',
    description:
      'Eliminate physical labor and embrace AI-powered workflows that make teaching and learning frictionless.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Smart Learning - Transform Education with AI-Powered Digital Learning',
    description:
      'Eliminate physical labor and embrace AI-powered workflows that make teaching and learning frictionless.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src='https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js'
          strategy='afterInteractive'
          data-target-origin='*'
          data-message-type='ROUTE_CHANGE'
          data-include-search-params='true'
          data-only-in-iframe='true'
          data-debug='true'
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <Toaster position='top-right' expand={true} richColors closeButton />
      </body>
    </html>
  );
}
