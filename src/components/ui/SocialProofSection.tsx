'use client';

import React, { useState, useEffect } from 'react';
import {
  University,
  GraduationCap,
  Landmark,
  Library,
  LibraryBig,
  Lectern,
  School,
  UserCheck,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type Logo = {
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export interface SocialProofSectionProps {
  className?: string;
  style?: React.CSSProperties;
  heading?: string;
  logos?: Logo[];
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
  stat?: string;
  layout?: 'compact' | 'comfortable';
}

const defaultLogos: Logo[] = [
  { name: 'Northbridge University', Icon: University },
  { name: 'Westview School District', Icon: School },
  { name: 'Grand Lakes College', Icon: GraduationCap },
  { name: 'Horizon State University', Icon: Landmark },
  { name: 'Summit Unified Schools', Icon: Library },
  { name: 'Riverside Institute', Icon: Lectern },
  { name: 'Pioneer Technical College', Icon: LibraryBig },
  { name: 'Evergreen Public Schools', Icon: School },
];

function LogoBadge({ name, Icon }: Logo) {
  return (
    <div className='group relative isolate flex items-center justify-center rounded-lg border border-border bg-card/60 px-4 py-3 transition-colors hover:bg-card focus-within:bg-card'>
      <div className='flex min-w-0 items-center gap-3'>
        <Icon
          aria-hidden='true'
          className='h-5 w-5 shrink-0 text-foreground/70 transition-transform duration-200 group-hover:scale-105'
        />
        <span className='min-w-0 truncate text-sm font-medium text-foreground/80'>
          {name}
        </span>
      </div>
      <span className='pointer-events-none absolute inset-0 rounded-lg ring-0 ring-ring/0 transition focus-within:ring-2' />
    </div>
  );
}

export default function SocialProofSection({
  className,
  style,
  heading = 'Trusted by Leading Educational Institutions',
  logos = defaultLogos,
  testimonial = {
    quote:
      'Smart Learning helps our district deliver personalized instruction at scale while reducing administrative workload.',
    author: 'Dr. Amelia Hart',
    role: 'Superintendent, Summit Unified Schools',
  },
  stat = 'Empowering 500+ schools and 2M+ learners',
  layout = 'comfortable',
}: SocialProofSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const spacing = layout === 'compact' ? 'py-8' : 'py-12';
  const gridGap = layout === 'compact' ? 'gap-3 sm:gap-4' : 'gap-4 sm:gap-6';

  return (
    <section
      className={cn(
        'w-full rounded-xl border border-border bg-gradient-to-br from-secondary to-secondary/80 shadow-lg',
        spacing,
        className,
      )}
      style={style}
      aria-label='Institutional social proof'
    >
      <div className='container w-full max-w-full'>
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-education-cyan/30 bg-gradient-to-r from-education-cyan/20 via-education-blue/20 to-education-purple/20 px-4 py-2 backdrop-blur-sm'>
            <TrendingUp
              aria-hidden='true'
              className='h-4 w-4 text-education-cyan animate-pulse'
            />
            <span className='text-sm font-medium text-education-cyan'>
              {stat}
            </span>
          </div>
          <h2 className='mx-auto max-w-2xl text-balance text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-education-cyan via-education-blue to-education-purple bg-clip-text text-transparent'>
            {heading}
          </h2>
          {testimonial?.quote ? (
            <p className='mx-auto mt-3 max-w-2xl text-pretty text-sm text-muted-foreground sm:text-base'>
              “{testimonial.quote}”
              {testimonial.author ? (
                <>
                  {' '}
                  <span className='block pt-2 text-xs font-medium text-foreground/70'>
                    — {testimonial.author}
                    {testimonial.role ? (
                      <span className='text-muted-foreground'>
                        , {testimonial.role}
                      </span>
                    ) : null}
                  </span>
                </>
              ) : null}
            </p>
          ) : null}
        </div>

        <div
          className={cn(
            'mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 transition-all duration-1000 delay-300',
            gridGap,
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          )}
          role='list'
          aria-label='Partner institutions'
        >
          {logos.slice(0, 8).map((logo, index) => {
            const isHovered = hoveredLogo === logo.name;
            return (
              <div
                key={logo.name}
                role='listitem'
                className={`relative transition-all duration-500 hover:scale-105 ${
                  isHovered ? 'z-10' : ''
                }`}
                aria-label={logo.name}
                onMouseEnter={() => setHoveredLogo(logo.name)}
                onMouseLeave={() => setHoveredLogo(null)}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`group relative isolate flex items-center justify-center rounded-lg border border-border bg-gradient-to-r from-education-blue/10 to-education-purple/10 px-4 py-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-education-blue/20 hover:to-education-purple/20 hover:shadow-lg ${
                    isHovered ? 'shadow-xl ring-2 ring-education-purple/50' : ''
                  }`}
                >
                  <div className='flex min-w-0 items-center gap-3'>
                    <logo.Icon
                      aria-hidden='true'
                      className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                        isHovered
                          ? 'text-education-purple scale-110'
                          : 'text-education-blue'
                      }`}
                    />
                    <span
                      className={`min-w-0 truncate text-sm font-medium transition-colors duration-300 ${
                        isHovered
                          ? 'text-education-purple'
                          : 'text-education-indigo'
                      }`}
                    >
                      {logo.name}
                    </span>
                  </div>
                  {isHovered && (
                    <div className='absolute inset-0 bg-gradient-to-br from-education-purple/10 to-education-pink/10 rounded-lg' />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className='mx-auto mt-8 flex w-full max-w-3xl items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-card/40 px-3 py-2 text-xs text-muted-foreground'>
          <ShieldCheck aria-hidden='true' className='h-4 w-4 shrink-0' />
          <p className='min-w-0 text-center'>
            Logos displayed in monochrome for consistency. Actual partner marks
            remain the property of their respective institutions.
          </p>
        </div>
      </div>
    </section>
  );
}
