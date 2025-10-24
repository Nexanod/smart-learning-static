import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us - Smart Learning's Mission & Story | Education Innovation",
  description:
    "Learn about Smart Learning's mission to transform education through technology. Discover our story, values, and commitment to modernizing educational institutions worldwide.",
  keywords: [
    'about smart learning',
    'education technology company',
    'smart learning mission',
    'education innovation',
    'edtech company story',
    'digital education platform',
    'education transformation',
    'smart learning values',
  ],
  openGraph: {
    title: 'About Smart Learning | Our Mission & Story',
    description:
      'Transforming education through technology. Learn about our journey and mission.',
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
