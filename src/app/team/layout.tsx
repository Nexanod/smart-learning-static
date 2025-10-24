import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Meet the Smart Learning Leadership',
  description:
    'Meet the passionate team of educators, technologists, and innovators behind Smart Learning. Learn about our mission to transform education through technology.',
  keywords: [
    'smart learning team',
    'education technology team',
    'edtech founders',
    'education software team',
    'smart learning leadership',
  ],
  openGraph: {
    title: 'Our Team - Smart Learning',
    description:
      "Meet the minds behind Smart Learning's innovative education platform.",
    type: 'website',
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
