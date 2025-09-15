'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MonitorPlay, GraduationCap, Brain } from 'lucide-react';
import { useId } from 'react';

export interface HeroSectionProps {
  className?: string;
  onStartTrial?: () => void;
  onWatchDemo?: () => void;
  imageSrc?: string;
  imageAlt?: string;
}

export default function HeroSection({
  className,
  onStartTrial,
  onWatchDemo,
  imageSrc = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop',
  imageAlt = 'Futuristic digital learning interface with AI and students using advanced tools',
}: HeroSectionProps) {
  const decorativeId = useId();

  return (
    <section aria-label='Smart Learning hero' className={className}>
      <div className='relative w-full overflow-hidden rounded-[var(--radius)] bg-background'>
        {/* Subtle geometric pattern background */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0'
        >
          <div className='absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/60 blur-3xl' />
          <div className='absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-soft/80 blur-3xl' />
          <svg
            className='absolute inset-0 h-full w-full opacity-[0.15]'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
          >
            <defs>
              <pattern
                id={`grid-${decorativeId}`}
                width='28'
                height='28'
                patternUnits='userSpaceOnUse'
              >
                <path
                  d='M28 0H0V28'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='0.75'
                />
              </pattern>
            </defs>
            <rect
              width='100%'
              height='100%'
              fill={`url(#grid-${decorativeId})`}
              className='text-border'
            />
          </svg>
        </div>

        <div className='relative z-10 px-6 py-12 sm:px-8 sm:py-16 md:py-20'>
          <div className='mx-auto max-w-6xl'>
            <div className='grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12'>
              {/* Copy */}
              <div className='w-full max-w-xl'>
                <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-foreground'>
                  <GraduationCap className='h-4 w-4' aria-hidden='true' />
                  Smart Learning Platform
                </div>

                <h1 className='text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl'>
                  Transform education with intelligent, fully digital learning
                </h1>

                <p className='mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg'>
                  Eliminate physical labor and embrace AI-powered workflows that
                  make teaching and learning frictionless. From content to
                  assessment, Smart Learning brings modern, trusted digital
                  systems to every classroom.
                </p>

                <div className='mt-8 flex flex-wrap items-center gap-3'>
                  <Button
                    aria-label='Start free trial'
                    onClick={onStartTrial}
                    className='h-11 rounded-[calc(var(--radius)-4px)] px-5'
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    aria-label='Watch product demo'
                    variant='secondary'
                    onClick={onWatchDemo}
                    className='h-11 rounded-[calc(var(--radius)-4px)] px-5'
                  >
                    <MonitorPlay className='mr-2 h-4 w-4' aria-hidden='true' />
                    Watch Demo
                  </Button>
                </div>

                {/* Micro trust indicators */}
                <div className='mt-6 flex items-center gap-4 text-xs text-muted-foreground'>
                  <div className='inline-flex items-center gap-1.5'>
                    <Brain className='h-3.5 w-3.5' aria-hidden='true' />
                    AI-assisted workflows
                  </div>
                  <div className='inline-flex items-center gap-1.5'>
                    <GraduationCap className='h-3.5 w-3.5' aria-hidden='true' />
                    Built for schools
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className='relative w-full'>
                <div className='relative isolate overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border'>
                  <div className='absolute inset-0'>
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      sizes='(max-width: 768px) 100vw, 600px'
                      className='object-cover'
                      priority
                    />
                  </div>

                  {/* Futuristic overlay elements */}
                  <div className='relative z-10 p-4 sm:p-6'>
                    <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent' />

                    <div className='relative mt-40 sm:mt-52'>
                      <div className='mx-auto grid max-w-md grid-cols-3 gap-3 rounded-xl bg-background/70 p-3 backdrop-blur-sm ring-1 ring-border'>
                        <div className='flex min-w-0 items-center gap-2 rounded-lg bg-secondary px-3 py-2'>
                          <GraduationCap
                            className='h-4 w-4 text-foreground'
                            aria-hidden='true'
                          />
                          <span className='truncate text-xs font-medium'>
                            Courses
                          </span>
                        </div>
                        <div className='flex min-w-0 items-center gap-2 rounded-lg bg-secondary px-3 py-2'>
                          <Brain
                            className='h-4 w-4 text-foreground'
                            aria-hidden='true'
                          />
                          <span className='truncate text-xs font-medium'>
                            Adaptive
                          </span>
                        </div>
                        <div className='flex min-w-0 items-center gap-2 rounded-lg bg-secondary px-3 py-2'>
                          <MonitorPlay
                            className='h-4 w-4 text-foreground'
                            aria-hidden='true'
                          />
                          <span className='truncate text-xs font-medium'>
                            Assess
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Soft vignette to ensure readability */}
                  <div
                    className='pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5'
                    aria-hidden='true'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
