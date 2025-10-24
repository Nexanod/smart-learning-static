import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Pricing Plans | Affordable Education Management Software - Smart Learning',
  description:
    'Transparent pricing for Smart Learning education management platform. Choose from Starter, Professional, or Enterprise plans. 14-day free trial included on all plans.',
  keywords: [
    'education software pricing',
    'school management pricing',
    'affordable education platform',
    'education software cost',
    'school software pricing',
    'education management pricing',
  ],
  openGraph: {
    title: 'Pricing Plans - Smart Learning',
    description:
      'Transparent pricing with plans for schools of all sizes. Start your free trial today.',
    type: 'website',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
