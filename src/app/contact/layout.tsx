import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch with Smart Learning Team',
  description:
    "Have questions about Smart Learning? Contact our team for demos, support, or sales inquiries. We're here to help transform your institution's education management.",
  keywords: [
    'contact smart learning',
    'education software support',
    'school software demo',
    'education platform contact',
    'smart learning support',
  ],
  openGraph: {
    title: 'Contact Us - Smart Learning',
    description: 'Get in touch with our team for demos, support, or inquiries.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
