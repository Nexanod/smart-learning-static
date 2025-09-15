'use client';

import * as React from 'react';
import {
  Lightbulb,
  LibraryBig,
  LayoutGrid,
  LaptopMinimal,
  WifiPen,
  TabletSmartphone,
  Library,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type FeatureItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features?: FeatureItem[];
  className?: string;
}

const defaultFeatures: FeatureItem[] = [
  {
    id: 'ai-curriculum',
    title: 'AI-Powered Curriculum',
    description:
      'Adaptive learning paths personalize content and pace, guiding every learner toward mastery.',
    icon: Lightbulb,
  },
  {
    id: 'paperless-admin',
    title: 'Paperless Administration',
    description:
      'Digitize forms, attendance, and approvals to streamline workflows and reduce overhead.',
    icon: TabletSmartphone,
  },
  {
    id: 'smart-analytics',
    title: 'Smart Analytics',
    description:
      'Real-time dashboards surface trends and insights to inform decisions and improve outcomes.',
    icon: LayoutGrid,
  },
  {
    id: 'virtual-classrooms',
    title: 'Virtual Classrooms',
    description:
      'Engaging live sessions, recordings, and collaboration tools keep every class connected.',
    icon: LaptopMinimal,
  },
  {
    id: 'automated-grading',
    title: 'Automated Grading',
    description:
      'Instant feedback and rubric-based evaluation accelerate assessment cycles with consistency.',
    icon: WifiPen,
  },
  {
    id: 'digital-library',
    title: 'Digital Resource Library',
    description:
      'Curate and share multimedia resources, lesson plans, and references in one organized hub.',
    icon: LibraryBig,
  },
];

export default function FeaturesSection({
  title = 'Transform Education with Smart Technology',
  subtitle = 'Modern capabilities that elevate teaching, learning, and administration.',
  features = defaultFeatures,
  className,
}: FeaturesSectionProps) {
  return (
    <section
      aria-labelledby='features-heading'
      className={['w-full bg-background', className].filter(Boolean).join(' ')}
    >
      <div className='w-full max-w-7xl mx-auto px-6 py-16 sm:py-20'>
        <div className='mx-auto max-w-3xl text-center space-y-4'>
          <h2
            id='features-heading'
            className='text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight'
          >
            {title}
          </h2>
          <p className='text-muted-foreground text-base sm:text-lg'>
            {subtitle}
          </p>
        </div>

        <div
          className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'
          role='list'
          aria-label='Smart Learning features'
        >
          {features.map(feature => {
            const Icon = feature.icon ?? Library;
            return (
              <Card
                key={feature.id}
                role='listitem'
                className='bg-card border-border/80 shadow-sm hover:shadow-md transition-shadow duration-200'
              >
                <CardHeader className='flex flex-row items-start gap-4'>
                  <div
                    aria-hidden='true'
                    className='shrink-0 rounded-xl bg-accent text-foreground/90 ring-1 ring-border p-2.5'
                  >
                    <Icon className='h-6 w-6' />
                  </div>
                  <CardTitle className='text-base sm:text-lg leading-tight'>
                    <span className='block break-words'>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className='pt-0'>
                  <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
