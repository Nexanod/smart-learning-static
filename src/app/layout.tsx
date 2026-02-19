import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Smart Learning — Education Infrastructure',
  description:
    'AI-powered management systems for institutions. Paper generation, student lifecycle management, attendance tracking, and analytics.',
  keywords:
    'education technology, AI learning, paper generation, student management, attendance tracking, analytics',
  authors: [{ name: 'Smart Learning Team' }],
  openGraph: {
    title: 'Smart Learning — Education Infrastructure',
    description:
      'AI-powered management systems for institutions that refuse to accept the status quo.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
