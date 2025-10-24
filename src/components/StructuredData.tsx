export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Smart Learning',
    description:
      'Modern education management system with AI-powered paper generation, student management, and attendance tracking.',
    url: 'https://yourdomain.com',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-1761231526372.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'Customer Service',
      email: 'info@smartlearning.com',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://www.linkedin.com/company/smartlearning',
      'https://twitter.com/smartlearning',
      'https://www.facebook.com/smartlearning',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Education Street',
      addressLocality: 'Tech City',
      addressRegion: 'TC',
      postalCode: '12345',
      addressCountry: 'US',
    },
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Smart Learning',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '99.00',
      priceCurrency: 'USD',
      priceValidUntil: '2025-12-31',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
    description:
      'AI-powered education management platform for modern institutions',
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
}
