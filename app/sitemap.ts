import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://smartlearning.pk';

  const routes = [
    '',
    '/about',
    '/paper-generation',
    '/student-management',
    '/attendance-management',
    '/team',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
    '/refund',
    '/sla',
  ];

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
