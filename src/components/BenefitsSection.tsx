'use client';

import * as React from 'react';
import {
  GraduationCap,
  MonitorSmartphone,
  ListChecks,
  ChartColumnBig,
  PanelsTopLeft,
} from 'lucide-react';

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export type BenefitItem = {
  id: string;
  title: string;
  description: string;
  before: string;
  after: string;
  metricLabel?: string;
  metricValue?: string;
  icon?: IconType;
};

export interface BenefitsSectionProps {
  className?: string;
  items?: BenefitItem[];
  heading?: string;
  subheading?: string;
}

const defaultItems: BenefitItem[] = [
  {
    id: 'paperwork',
    title: 'Eliminate Physical Paperwork',
    description:
      'Digitize forms, submissions, and approvals. Replace printers and binders with structured, searchable records your team can access instantly.',
    before: 'Stacks of forms, lost copies, manual filing',
    after: 'Secure e-forms with instant routing and archiving',
    metricLabel: 'Reduction in paperwork',
    metricValue: '90%',
    icon: ListChecks,
  },
  {
    id: 'admin-burden',
    title: 'Reduce Administrative Burden',
    description:
      'Automate routine tasks like attendance, scheduling, and reminders so staff can focus on students, not spreadsheets.',
    before: 'Manual data entry and follow-ups',
    after: 'Automated workflows and smart reminders',
    metricLabel: 'Time saved on admin',
    metricValue: '40–60%',
    icon: PanelsTopLeft,
  },
  {
    id: 'engagement',
    title: 'Enhance Student Engagement',
    description:
      'Deliver interactive content and feedback loops that meet students where they are—on mobile and web—keeping learning active and personal.',
    before: 'Static PDFs and one-way lectures',
    after: 'Interactive modules and instant feedback',
    metricLabel: 'Increase in participation',
    metricValue: '2×',
    icon: MonitorSmartphone,
  },
  {
    id: 'realtime-tracking',
    title: 'Real-time Progress Tracking',
    description:
      'View up-to-the-minute dashboards across classes and cohorts. Identify trends early and intervene with confidence.',
    before: 'Delayed reports and manual grading',
    after: 'Live dashboards and auto-scoring',
    metricLabel: 'Faster grading cycles',
    metricValue: '50%',
    icon: ChartColumnBig,
  },
];

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ');
}

export default function BenefitsSection({
  className,
  items = defaultItems,
  heading = 'From Traditional to Digital—Tangible Gains',
  subheading = 'Smart Learning modernizes education systems with measurable improvements in efficiency, engagement, and insight.',
}: BenefitsSectionProps) {
  return (
    <section
      aria-labelledby='benefits-heading'
      className={cx(
        'w-full bg-background',
        'rounded-none',
        'text-foreground',
        className,
      )}
    >
      <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8'>
        <header className='w-full max-w-3xl'>
          <div className='inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 border border-border'>
            <GraduationCap
              className='h-4 w-4 text-chart-3'
              aria-hidden='true'
            />
            <span className='text-xs font-medium tracking-wide text-muted-foreground'>
              Benefits
            </span>
          </div>
          <h2
            id='benefits-heading'
            className='mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold font-display tracking-tight'
          >
            {heading}
          </h2>
          <p className='mt-3 text-sm sm:text-base text-muted-foreground'>
            {subheading}
          </p>
        </header>

        <div className='mt-8 space-y-6 sm:space-y-8'>
          {items.map((item, idx) => {
            const Icon = item.icon ?? MonitorSmartphone;
            const isEven = idx % 2 === 1;

            return (
              <article
                key={item.id}
                className={cx(
                  'group relative isolate overflow-hidden',
                  'rounded-[var(--radius)] border border-border bg-card',
                  'transition-all duration-300',
                  'hover:shadow-sm hover:-translate-y-0.5',
                )}
                aria-labelledby={`${item.id}-title`}
              >
                {/* Accent gradient edge */}
                <div
                  aria-hidden='true'
                  className={cx(
                    'pointer-events-none absolute inset-y-0 w-1',
                    isEven ? 'right-0' : 'left-0',
                    'bg-gradient-to-b from-chart-3 via-chart-2 to-chart-5 opacity-70',
                  )}
                />

                <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 p-5 sm:p-6 md:p-7'>
                  {/* Visual: Before/After card */}
                  <div
                    className={cx(
                      'md:col-span-5',
                      isEven ? 'md:order-last' : 'md:order-none',
                    )}
                  >
                    <div
                      role='group'
                      aria-label={`Before and after comparison for ${item.title}`}
                      className={cx(
                        'relative rounded-[calc(var(--radius)-4px)] border border-border',
                        'bg-secondary/60',
                      )}
                    >
                      {/* Decorative grid dots */}
                      <div
                        aria-hidden='true'
                        className='absolute inset-0 opacity-40'
                        style={{
                          backgroundImage:
                            'radial-gradient(currentColor 1px, transparent 1px)',
                          backgroundSize: '14px 14px',
                          color: 'var(--color-border)',
                          maskImage:
                            'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.9))',
                        }}
                      />
                      <div className='relative grid grid-cols-2'>
                        <div className='p-4 sm:p-5 border-r border-border min-w-0'>
                          <div className='inline-flex items-center gap-2'>
                            <span className='text-[10px] font-semibold uppercase tracking-wider text-muted-foreground'>
                              Before
                            </span>
                          </div>
                          <p className='mt-1.5 text-sm text-foreground/90 break-words'>
                            {item.before}
                          </p>
                        </div>
                        <div className='p-4 sm:p-5 min-w-0'>
                          <div className='inline-flex items-center gap-2'>
                            <span className='text-[10px] font-semibold uppercase tracking-wider text-foreground'>
                              After
                            </span>
                            <span className='inline-flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 border border-border'>
                              <span className='h-1.5 w-1.5 rounded-full bg-chart-2' />
                              <span className='text-[10px] font-medium text-foreground'>
                                Improved
                              </span>
                            </span>
                          </div>
                          <p className='mt-1.5 text-sm text-foreground break-words'>
                            {item.after}
                          </p>

                          {item.metricLabel && item.metricValue ? (
                            <div className='mt-4 flex flex-wrap items-center gap-2'>
                              <div className='inline-flex items-center gap-2 rounded-[12px] border border-border bg-card px-3 py-1.5'>
                                <span className='text-xs text-muted-foreground'>
                                  {item.metricLabel}
                                </span>
                                <span className='text-sm font-semibold text-foreground'>
                                  {item.metricValue}
                                </span>
                              </div>
                              <div className='inline-flex items-center gap-1 rounded-[12px] bg-brand-soft px-2.5 py-1 border border-border'>
                                <span className='h-1.5 w-1.5 rounded-full bg-chart-3' />
                                <span className='text-xs font-medium text-foreground'>
                                  Verified
                                </span>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Textual content */}
                  <div className='md:col-span-7 min-w-0'>
                    <div className='flex items-start gap-3'>
                      <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary'>
                        <Icon
                          aria-hidden='true'
                          className='h-5 w-5 text-chart-3'
                        />
                      </div>
                      <div className='min-w-0'>
                        <h3
                          id={`${item.id}-title`}
                          className='text-lg sm:text-xl font-semibold leading-snug'
                        >
                          {item.title}
                        </h3>
                        <p className='mt-2 text-sm sm:text-base text-muted-foreground'>
                          {item.description}
                        </p>

                        {/* Mini progress motif */}
                        <div className='mt-4 sm:mt-5' aria-hidden='true'>
                          <div className='flex items-center gap-2'>
                            <span className='inline-flex h-1.5 flex-1 rounded-full bg-border'>
                              <span className='block h-full w-1/2 rounded-full bg-chart-2 transition-all duration-700 group-hover:w-2/3' />
                            </span>
                            <span className='inline-flex h-1.5 flex-1 rounded-full bg-border'>
                              <span className='block h-full w-1/3 rounded-full bg-chart-3 transition-all duration-700 group-hover:w-1/2' />
                            </span>
                            <span className='inline-flex h-1.5 flex-[0.75] rounded-full bg-border'>
                              <span className='block h-full w-1/4 rounded-full bg-chart-5 transition-all duration-700 group-hover:w-2/5' />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Subtle callout */}
                    <div className='mt-5 rounded-[12px] border border-border bg-secondary/60 px-4 py-3'>
                      <p className='text-xs sm:text-sm text-muted-foreground'>
                        Transition impact: smoother operations, clearer
                        insights, and a better learning experience—without
                        adding workload.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
