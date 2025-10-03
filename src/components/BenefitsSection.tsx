'use client';

import * as React from 'react';
import {
  GraduationCap,
  MonitorSmartphone,
  ListChecks,
  ChartColumnBig,
  PanelsTopLeft,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Cpu,
  Zap,
  Target,
  Rocket,
  Brain,
  Globe,
  Lightbulb,
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
  const [hoveredBenefit, setHoveredBenefit] = React.useState<string | null>(
    null,
  );
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      aria-labelledby='benefits-heading'
      className={cx(
        'w-full bg-gradient-to-b from-secondary/30 via-education-green/5 to-background transform-3d perspective-2000',
        'rounded-none',
        'text-foreground',
        className,
      )}
    >
      {/* Advanced Background Elements */}
      <div className='absolute inset-0 bg-3d-gradient' />

      {/* Floating Educational Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-education-green/20 to-education-orange/20 rounded-full blur-3xl animate-float-3d card-3d translate-z-50' />
        <div
          className='absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-education-cyan/20 to-education-blue/20 rounded-full blur-2xl animate-float-3d card-3d translate-z-45'
          style={{ animationDelay: '1s' }}
        />
        <div
          className='absolute bottom-20 left-1/3 w-28 h-28 bg-gradient-to-br from-education-purple/20 to-education-pink/20 rounded-full blur-3xl animate-float-3d card-3d translate-z-40'
          style={{ animationDelay: '2s' }}
        />
        <div
          className='absolute bottom-40 right-1/3 w-20 h-20 bg-gradient-to-br from-education-indigo/20 to-education-blue/20 rounded-full blur-2xl animate-float-3d card-3d translate-z-35'
          style={{ animationDelay: '3s' }}
        />

        {/* Smart Learning Particles */}
        <div className='absolute top-1/4 left-1/4 w-3 h-3 bg-education-green rounded-full animate-pulse-3d card-3d translate-z-60' />
        <div
          className='absolute top-1/3 right-1/4 w-2 h-2 bg-education-orange rounded-full animate-pulse-3d card-3d translate-z-55'
          style={{ animationDelay: '0.5s' }}
        />
        <div
          className='absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-education-cyan rounded-full animate-pulse-3d card-3d translate-z-50'
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className='absolute bottom-1/4 right-1/2 w-1.5 h-1.5 bg-education-purple rounded-full animate-pulse-3d card-3d translate-z-45'
          style={{ animationDelay: '2.5s' }}
        />
      </div>

      <div className='relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8'>
        <header
          className={`w-full max-w-3xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <div className='inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-education-green/20 via-education-orange/20 to-education-cyan/20 px-6 py-3 border-2 border-education-green/30 backdrop-blur-md relative overflow-hidden card-3d translate-z-30 animate-float-3d'>
            <div className='absolute inset-0 bg-gradient-to-r from-education-green/10 via-education-orange/10 to-education-cyan/10 animate-pulse' />
            <div className='relative flex items-center gap-3'>
              <div className='relative'>
                <Brain className='h-5 w-5 text-education-green animate-pulse' />
                <div className='absolute inset-0 h-5 w-5 rounded-full border border-education-green/50 animate-ping' />
              </div>
              <span className='text-sm font-bold bg-gradient-to-r from-education-green to-education-orange bg-clip-text text-transparent'>
                Smart Learning Benefits
              </span>
              <div className='flex gap-1'>
                <div className='h-2 w-2 rounded-full bg-education-green animate-ping card-3d translate-z-10' />
                <div className='h-2 w-2 rounded-full bg-education-orange animate-ping delay-150 card-3d translate-z-15' />
                <div className='h-2 w-2 rounded-full bg-education-cyan animate-ping delay-300 card-3d translate-z-20' />
              </div>
              <div className='absolute -right-2 -top-2 w-3 h-3 bg-gradient-to-r from-education-green to-education-cyan rounded-full animate-pulse-3d' />
            </div>
          </div>
          <h2
            id='benefits-heading'
            className='mt-4 text-xl sm:text-2xl md:text-3xl font-extrabold font-display tracking-tight bg-gradient-to-r from-education-green via-education-orange to-education-cyan bg-clip-text text-transparent translate-z-40 animate-tilt-3d'
          >
            {heading}
          </h2>
          <p className='mt-3 text-sm sm:text-base text-muted-foreground max-w-xl translate-z-30 animate-tilt-3d'>
            {subheading}
          </p>
        </header>

        <div
          className={`mt-8 space-y-6 sm:space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          {items.map((item, idx) => {
            const Icon = item.icon ?? MonitorSmartphone;
            const isEven = idx % 2 === 1;
            const isHovered = hoveredBenefit === item.id;

            return (
              <article
                key={item.id}
                className={cx(
                  'group relative isolate overflow-hidden',
                  'rounded-2xl border-2 border-border/60 bg-gradient-to-br from-card via-card to-card/90',
                  'transition-all duration-700',
                  'hover:shadow-3d-xl hover:-translate-y-4 cursor-pointer card-3d translate-z-15',
                  isHovered
                    ? 'ring-4 ring-education-green/50 shadow-3d-xl scale-110 translate-z-40'
                    : 'hover:scale-105',
                )}
                aria-labelledby={`${item.id}-title`}
                onMouseEnter={() => setHoveredBenefit(item.id)}
                onMouseLeave={() => setHoveredBenefit(null)}
                style={{
                  animationDelay: `${idx * 200}ms`,
                }}
              >
                {/* Smart accent gradient edge */}
                <div
                  aria-hidden='true'
                  className={cx(
                    'pointer-events-none absolute inset-y-0 w-2',
                    isEven ? 'right-0' : 'left-0',
                    'bg-gradient-to-b from-education-green via-education-orange to-education-cyan opacity-80',
                    isHovered ? 'opacity-100 w-3 shadow-lg' : '',
                    'transition-all duration-500',
                  )}
                />

                {/* Smart hover overlay */}
                {isHovered && (
                  <div className='absolute inset-0 bg-gradient-to-br from-education-green/10 via-education-orange/5 to-education-cyan/10 pointer-events-none' />
                )}

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
                    <div className='flex items-start gap-4'>
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border transition-all duration-500 ${
                          isHovered
                            ? 'bg-gradient-to-br from-education-purple to-education-pink text-white shadow-lg scale-110'
                            : 'bg-gradient-to-br from-education-green/20 to-education-orange/20'
                        }`}
                      >
                        <Icon
                          aria-hidden='true'
                          className={`h-6 w-6 transition-all duration-500 ${
                            isHovered
                              ? 'text-white animate-pulse'
                              : 'text-education-green'
                          }`}
                        />
                      </div>
                      <div className='min-w-0 flex-1'>
                        <h3
                          id={`${item.id}-title`}
                          className={`text-lg sm:text-xl font-semibold leading-snug transition-colors duration-300 ${
                            isHovered
                              ? 'text-education-purple'
                              : 'text-foreground'
                          }`}
                        >
                          {item.title}
                          {isHovered && (
                            <ArrowRight className='inline-block ml-2 h-4 w-4 text-education-purple animate-bounce' />
                          )}
                        </h3>
                        <p className='mt-2 text-sm sm:text-base text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300'>
                          {item.description}
                        </p>

                        {/* Mini progress motif */}
                        <div className='mt-4 sm:mt-5' aria-hidden='true'>
                          <div className='flex items-center gap-2'>
                            <span className='inline-flex h-2 flex-1 rounded-full bg-gradient-to-r from-education-green/20 to-education-orange/20'>
                              <span className='block h-full w-1/2 rounded-full bg-gradient-to-r from-education-green to-education-orange transition-all duration-700 group-hover:w-2/3' />
                            </span>
                            <span className='inline-flex h-2 flex-1 rounded-full bg-gradient-to-r from-education-purple/20 to-education-pink/20'>
                              <span className='block h-full w-1/3 rounded-full bg-gradient-to-r from-education-purple to-education-pink transition-all duration-700 group-hover:w-1/2' />
                            </span>
                            <span className='inline-flex h-2 flex-[0.75] rounded-full bg-gradient-to-r from-education-cyan/20 to-education-blue/20'>
                              <span className='block h-full w-1/4 rounded-full bg-gradient-to-r from-education-cyan to-education-blue transition-all duration-700 group-hover:w-2/5' />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Subtle callout */}
                    <div className='mt-5 rounded-[12px] border border-education-green/30 bg-gradient-to-r from-education-green/10 to-education-orange/10 px-4 py-3'>
                      <p className='text-xs sm:text-sm text-education-green font-medium'>
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

        {/* Smart call to action */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <div className='inline-flex items-center gap-6 rounded-2xl bg-gradient-to-r from-education-green/20 via-education-orange/20 to-education-cyan/20 px-10 py-8 border-2 border-education-green/30 shadow-2xl backdrop-blur-md relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-education-green/10 via-education-orange/10 to-education-cyan/10 animate-pulse' />
            <div className='relative flex items-center gap-6'>
              <div className='flex items-center gap-3'>
                <CheckCircle className='h-7 w-7 text-education-green animate-pulse' />
                <Cpu className='h-6 w-6 text-education-orange animate-spin' />
              </div>
              <div className='text-left'>
                <h3 className='text-xl font-bold text-education-indigo'>
                  Ready to revolutionize education?
                </h3>
                <p className='text-base text-education-green font-semibold mt-1'>
                  Join thousands of schools using Smart Learning AI
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <Rocket className='h-6 w-6 text-education-cyan animate-bounce' />
                <ArrowRight className='h-6 w-6 text-education-orange animate-bounce' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
