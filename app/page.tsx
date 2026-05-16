'use client';
import { usePostHog } from '@posthog/react';
import { Zap, Lock, Hexagon, Activity, Users, Globe, Plus } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import CustomCursor from '@/components/CustomCursor';
import DemoModal from '@/components/DemoModal';
import GrainOverlay from '@/components/GrainOverlay';
import Navbar from '@/components/Navbar';
// PricingSection unused
import RevealObserver from '@/components/RevealObserver';
import SiteFooter from '@/components/SiteFooter';

function TextScramble({ phrases }: { phrases: string[] }) {
  // maxWidth was unused
  const ref = useRef<HTMLSpanElement>(null);
  const measurerRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  const animIdRef = useRef<number>(null);
  const counterRef = useRef(0);

  useEffect(() => {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    const el = ref.current;
    if (!el) return;

    const calculateMaxWidth = () => {
      if (measurerRef.current) {
        let max = 0;
        phrases.forEach(p => {
          if (measurerRef.current) {
            measurerRef.current.innerText = p;
            max = Math.max(max, measurerRef.current.offsetWidth);
          }
        });
      }
    };

    // Ensure font is loaded before measuring
    if ('fonts' in document) {
      document.fonts.ready.then(calculateMaxWidth);
    } else {
      calculateMaxWidth();
    }

    const scramble = (newText: string) => {
      if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      const oldText = el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const queue: {
        from: string;
        to: string;
        start: number;
        end: number;
        char?: string;
      }[] = [];

      for (let i = 0; i < length; i++) {
        queue.push({
          from: oldText[i] || '',
          to: newText[i] || '',
          start: Math.floor(Math.random() * 40),
          end: Math.floor(Math.random() * 40) + Math.floor(Math.random() * 40),
        });
      }

      let frame = 0;
      const update = () => {
        let output = '';
        let complete = 0;
        for (let i = 0; i < queue.length; i++) {
          const q = queue[i];
          if (frame >= q.end) {
            complete++;
            output += q.to;
          } else if (frame >= q.start) {
            if (!q.char || Math.random() < 0.28)
              q.char = chars[Math.floor(Math.random() * chars.length)];
            output += `<span class="text-[#cc5500]">${q.char}</span>`;
          } else {
            output += q.from;
          }
        }
        el.innerHTML = output;

        if (complete < queue.length) {
          animIdRef.current = requestAnimationFrame(update);
          frame++;
        } else {
          timeoutRef.current = setTimeout(() => {
            counterRef.current = (counterRef.current + 1) % phrases.length;
            scramble(phrases[counterRef.current]);
          }, 3500);
        }
      };
      update();
    };

    const initialTimeout = setTimeout(() => {
      counterRef.current = (counterRef.current + 1) % phrases.length;
      scramble(phrases[counterRef.current]);
    }, 4000);

    return () => {
      clearTimeout(initialTimeout);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
    };
  }, [phrases]);

  return (
    <span className='inline-block relative text-left align-baseline w-fit z-0'>
      <span
        ref={ref}
        className='text-outline italic block overflow-hidden whitespace-nowrap pb-6 px-4'
      >
        {phrases[0]}
      </span>
      {/* Hidden measurer to calculate width of phrases */}
      <span
        ref={measurerRef}
        className='text-outline italic absolute opacity-0 pointer-events-none whitespace-nowrap pb-6'
        aria-hidden='true'
      >
        {phrases[0]}
      </span>
    </span>
  );
}

function Accordion() {
  const [open, setOpen] = useState<number | null>(null);
  const posthog = usePostHog();
  const toggle = (i: number) => {
    const isOpening = open !== i;
    setOpen(open === i ? null : i);
    if (isOpening) {
      posthog.capture('home_module_expanded', { module: modules[i].title });
    }
  };
  const modules = [
    {
      num: '01',
      title: 'Paper Generation',
      sub: 'AI-POWERED • TEMPLATE BASED',
      desc: 'Transform exam creation from hours to seconds. Our AI analyzes curriculum patterns, difficulty distributions, and learning objectives to generate balanced, standards-compliant examination papers.',
      tags: ['Auto-grading ready', 'Multiple formats', 'Question banks'],
      bg: 'bg-[#cc5500]',
      comingSoon: false,
    },
    {
      num: '02',
      title: 'Student Management',
      sub: 'LIFECYCLE • COMMUNICATION • PORTALS',
      desc: 'Complete student lifecycle management from admission to alumni. Integrated SMS/WhatsApp notifications, customizable parent portals, and document management.',
      tags: ['Bulk messaging', 'Document vault', 'Fee tracking'],
      bg: 'bg-stone-800',
      comingSoon: true,
    },
    {
      num: '03',
      title: 'Attendance Tracking',
      sub: 'REAL-TIME • BIOMETRIC • ANALYTICS',
      desc: 'Modern attendance infrastructure with biometric integration, geofencing capabilities, and predictive absence analytics.',
      tags: ['Fingerprint', 'RFID cards', 'Mobile check-in'],
      bg: 'bg-stone-600',
      comingSoon: true,
    },
    {
      num: '04',
      title: 'Result Management',
      sub: 'PROCESSING • ANALYTICS • REPORTING',
      desc: 'Comprehensive result processing with automated report card generation, parent notifications, and deep performance analytics.',
      tags: ['Auto-calculation', 'Grade books', 'Transcripts'],
      bg: 'bg-stone-400',
      comingSoon: true,
    },
  ];
  return (
    <div className='lg:col-span-8 space-y-4'>
      {modules.map((m, i) => (
        <div
          key={i}
          className='group border-2 border-stone-900 bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer hover-target'
          onClick={() => toggle(i)}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggle(i)}
          role='button'
          tabIndex={0}
        >
          <div className='p-6 flex justify-between items-center'>
            <div className='flex items-center space-x-4'>
              <div
                className={`w-12 h-12 ${m.bg} text-white flex items-center justify-center font-mono font-bold text-xl`}
              >
                {m.num}
              </div>
              <div>
                <div className='flex items-center gap-3'>
                  <h3 className='font-display text-2xl font-bold group-hover:translate-x-2 transition-transform'>
                    {m.title}
                  </h3>
                  {m.comingSoon && (
                    <span className='px-2 py-0.5 bg-stone-900 text-white font-mono text-[10px] tracking-widest uppercase'>
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className='font-mono text-xs text-stone-500 mt-1'>{m.sub}</p>
              </div>
            </div>
            <div
              className='transition-transform duration-300'
              style={{
                transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
              }}
            >
              <Plus size={24} />
            </div>
          </div>
          <div
            className={`accordion-content px-6 pb-6 ${open === i ? 'open' : ''}`}
          >
            <div className='pl-16 space-y-4'>
              <p className='text-stone-600'>{m.desc}</p>
              <div className='flex gap-2 flex-wrap'>
                {m.tags.map(t => (
                  <span
                    key={t}
                    className='px-3 py-1 border border-stone-300 text-xs font-mono'
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const features = [
  {
    icon: <Zap size={24} />,
    title: 'Instant Generation',
    desc: 'Generate examination papers in under 30 seconds with AI-optimized question distribution and difficulty balancing.',
  },
  {
    icon: <Lock size={24} />,
    title: 'Bank-Grade Security',
    desc: 'End-to-end encryption, role-based access control, and comprehensive audit trails for all sensitive data.',
  },
  {
    icon: <Hexagon size={24} />,
    title: 'Modular Architecture',
    desc: 'Deploy only what you need. Each module functions independently with clean API integration points.',
  },
  {
    icon: <Activity size={24} />,
    title: 'Predictive Analytics',
    desc: 'Identify at-risk students, predict attendance patterns, and optimize resource allocation with machine learning.',
  },
  {
    icon: <Users size={24} />,
    title: 'Multi-Tenant',
    desc: 'Manage multiple campuses, departments, or institutions from a single dashboard with complete data isolation.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Global Access',
    desc: 'Cloud-native infrastructure with 99.99% uptime SLA. Access from anywhere, on any device, in any timezone.',
  },
];

export default function HomePage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const posthog = usePostHog();
  const qrPattern = [
    true,
    false,
    true,
    false,
    false,
    true,
    false,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    true,
    true,
  ];

  useEffect(() => {
    posthog.capture('page_view', {
      page: 'home',
    });
  }, [posthog]);

  return (
    <main className='min-h-screen'>
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      <RevealObserver />

      {/* Hero */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-32'>
        <div className='blob bg-orange-300 w-96 h-96 top-20 -left-20' />
        <div
          className='blob bg-stone-300 w-80 h-80 bottom-20 right-10'
          style={{ animationDelay: '-5s' }}
        />
        <div
          className='blob bg-[#cc5500] w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          style={{ animationDelay: '-10s', opacity: 0.2 }}
        />
        <div className='max-w-7xl mx-auto px-6 relative z-10'>
          <div className='grid lg:grid-cols-12 gap-8 items-end'>
            <div className='lg:col-span-7 space-y-8'>
              <h1
                className='font-display text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] tracking-tight reveal-up m-0'
                style={{ transitionDelay: '0.1s' }}
              >
                <span className='pl-4'>Education</span>
                <br />
                <TextScramble
                  phrases={[
                    'Elevated',
                    'Redefined',
                    'Empowered',
                    'Enhanced',
                    'Modernized',
                  ]}
                />
              </h1>
              <p
                className='text-xl md:text-2xl text-stone-600 max-w-2xl leading-relaxed reveal-up font-light'
                style={{ transitionDelay: '0.2s' }}
              >
                AI-powered management systems for institutions that refuse to
                accept the status quo. Paper generation. Student lifecycle.
                Analytics.
              </p>
              <div
                className='flex flex-wrap gap-4 pt-4 reveal-up'
                style={{ transitionDelay: '0.3s' }}
              >
                <a
                  href='https://signup.smartlearning.pk'
                  className='brutal-border px-8 py-4 bg-[#cc5500] text-white font-mono text-sm tracking-wider hover-target no-underline'
                  onClick={() =>
                    posthog.capture('register_clicked', {
                      location: 'home_hero',
                    })
                  }
                >
                  Register
                </a>
                <button
                  onClick={() => {
                    setIsDemoOpen(true);
                    posthog.capture('demo_requested', {
                      buttonName: 'View Demo',
                      page: 'home',
                    });
                  }}
                  className='px-8 py-4 border-b-2 border-stone-900 font-mono text-sm tracking-wider hover:text-[#cc5500] transition-colors hover-target no-underline'
                >
                  View Demo →
                </button>
              </div>
            </div>
            <div
              className='lg:col-span-5 relative reveal-up'
              style={{ transitionDelay: '0.4s' }}
            >
              <div className='relative group'>
                <div className='absolute -inset-4 bg-[#cc5500] rounded-sm rotate-3 group-hover:rotate-1 transition-transform duration-500' />
                <div className='relative brutal-border bg-white p-8 aspect-[4/5] overflow-hidden flex flex-col shadow-[12px_12px_0_0_#000]'>
                  {/* Paper Texture Overlay */}
                  <div className='absolute inset-0 opacity-[0.03] pointer-events-none bg-[url("https://www.transparenttextures.com/patterns/paper-fibers.png")]' />

                  {/* Header Area */}
                  <div className='text-center border-b-2 border-stone-900 pb-4 mb-6 relative z-10'>
                    <div className='font-display font-black text-lg tracking-tighter uppercase mb-1'>
                      Smart Learning Academy
                    </div>
                    <div className='font-mono text-[10px] tracking-[0.2em] text-stone-500 uppercase'>
                      Annual Examination 2024-25
                    </div>
                  </div>

                  {/* Exam Info */}
                  <div className='grid grid-cols-2 gap-4 mb-8 relative z-10 font-mono text-[9px] uppercase tracking-wider'>
                    <div className='space-y-1'>
                      <div className='flex justify-between border-b border-stone-200 pb-1'>
                        <span className='text-stone-400'>Subject</span>
                        <span className='font-bold text-stone-900'>
                          Mathematics
                        </span>
                      </div>
                      <div className='flex justify-between border-b border-stone-200 pb-1'>
                        <span className='text-stone-400'>Time</span>
                        <span className='font-bold text-stone-900'>
                          03 Hours
                        </span>
                      </div>
                    </div>
                    <div className='space-y-1'>
                      <div className='flex justify-between border-b border-stone-200 pb-1'>
                        <span className='text-stone-400'>Grade</span>
                        <span className='font-bold text-stone-900'>XII-C</span>
                      </div>
                      <div className='flex justify-between border-b border-stone-200 pb-1'>
                        <span className='text-stone-400'>Marks</span>
                        <span className='font-bold text-stone-900'>100</span>
                      </div>
                    </div>
                  </div>

                  {/* Question Content */}
                  <div className='flex-1 space-y-6 relative z-10'>
                    {/* Section A */}
                    <div className='space-y-3'>
                      <div className='bg-stone-900 text-white px-2 py-0.5 inline-block font-mono text-[8px] uppercase tracking-widest'>
                        Section A: Objective
                      </div>
                      <div className='space-y-4'>
                        <div className='space-y-2'>
                          <div className='font-serif text-[11px] leading-tight text-stone-800'>
                            <span className='font-bold mr-2'>Q1.</span>
                            Which of the following represents the derivative of
                            f(x) = sin(x²)?
                          </div>
                          <div className='grid grid-cols-2 gap-2 pl-6 font-serif text-[10px] text-stone-600'>
                            <div className='flex items-center gap-2'>
                              <div className='w-2 h-2 border border-stone-400' />{' '}
                              a) 2x cos(x²)
                            </div>
                            <div className='flex items-center gap-2'>
                              <div className='w-2 h-2 border border-stone-400' />{' '}
                              b) cos(2x)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section B */}
                    <div className='space-y-3 pt-2 border-t border-dashed border-stone-300'>
                      <div className='bg-[#cc5500] text-white px-2 py-0.5 inline-block font-mono text-[8px] uppercase tracking-widest'>
                        Section B: Subjective
                      </div>
                      <div className='space-y-4'>
                        <div className='space-y-3'>
                          <div className='font-serif text-[11px] leading-tight text-stone-800'>
                            <span className='font-bold mr-2'>Q7.</span>
                            Prove that the sum of the squares of the first n
                            natural numbers is n(n+1)(2n+1)/6.
                          </div>
                          <div className='space-y-2 pl-6'>
                            <div className='w-full h-[1px] bg-stone-200' />
                            <div className='w-full h-[1px] bg-stone-200' />
                            <div className='w-3/4 h-[1px] bg-stone-200' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Approved Stamp */}
                  <div className='absolute bottom-24 right-4 rotate-[-15deg] border-4 border-[#cc5500]/20 text-[#cc5500]/20 px-4 py-1 font-display font-black text-2xl uppercase tracking-tighter select-none pointer-events-none opacity-40 z-20'>
                    Verified
                  </div>

                  {/* QR Code Placeholder */}
                  <div className='absolute bottom-6 left-8 w-12 h-12 brutal-border p-1 bg-white opacity-40'>
                    <div className='w-full h-full bg-stone-900 flex flex-wrap gap-[1px] p-[1px]'>
                      {qrPattern.map((isWhite, i) => (
                        <div
                          key={i}
                          className={`w-[20%] h-[20%] ${isWhite ? 'bg-white' : 'bg-stone-900'}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className='mt-auto pt-4 flex justify-end items-center border-t border-stone-200 font-mono text-[9px] text-stone-400 uppercase tracking-widest'>
                    Page 01 of 04
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs tracking-widest animate-bounce'>
          SCROLL
        </div>
      </section>

      {/* Marquee */}
      <div className='border-y-2 border-stone-900 bg-stone-900 text-stone-50 py-4 overflow-hidden'>
        <div className='marquee-container'>
          <div className='marquee-content font-mono text-sm tracking-widest'>
            AI-POWERED PAPER GENERATION • REAL-TIME ANALYTICS • STUDENT
            LIFECYCLE MANAGEMENT • BIOMETRIC ATTENDANCE • AUTOMATED REPORTING •
            AI-POWERED PAPER GENERATION • REAL-TIME ANALYTICS • STUDENT
            LIFECYCLE MANAGEMENT • BIOMETRIC ATTENDANCE • AUTOMATED REPORTING •
          </div>
        </div>
      </div>

      {/* Modules */}
      <section className='py-32 relative'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-12 gap-16'>
            <div className='lg:col-span-4 space-y-6 reveal-up'>
              <div className='font-mono text-sm text-[#cc5500] tracking-widest'>
                CORE MODULES
              </div>
              <h2 className='font-display text-5xl font-bold leading-tight'>
                Four pillars of modern education
              </h2>
              <p className='text-stone-600 leading-relaxed'>
                Each module functions independently or as part of the integrated
                ecosystem. Built for scale, designed for clarity.
              </p>
            </div>
            <Accordion />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className='py-32 bg-stone-900 text-stone-50 relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-1/2 h-full bg-[#cc5500] opacity-5 skew-x-12' />
        <div className='max-w-7xl mx-auto px-6 relative z-10'>
          <div className='mb-20 reveal-up'>
            <div className='font-mono text-sm text-[#cc5500] tracking-widest mb-4'>
              CAPABILITIES
            </div>
            <h2 className='font-display text-5xl md:text-6xl font-bold max-w-4xl text-stone-50'>
              What is the best school management software in Pakistan?
            </h2>
            <p className='text-xl text-stone-400 mt-6 max-w-3xl leading-relaxed'>
              Our software automates school administration by integrating
              attendance tracking, digital fee collection, and real-time result
              management in one secure platform. Build a smarter legacy for your
              institution.
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-800'>
            {features.map((f, i) => (
              <div
                key={i}
                className='bg-stone-900 p-8 group hover:bg-stone-800 transition-colors reveal-up hover-target'
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <div className='w-12 h-12 border border-stone-700 flex items-center justify-center mb-6 group-hover:border-[#cc5500] transition-colors text-[#cc5500]'>
                  {f.icon}
                </div>
                <h3 className='font-display text-xl font-bold mb-3 text-stone-50'>
                  {f.title}
                </h3>
                <p className='text-stone-400 text-sm leading-relaxed'>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className='py-0'>
        <div className='grid md:grid-cols-2'>
          <div className='relative h-96 md:h-[600px] overflow-hidden group'>
            <img
              src='https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80'
              alt='Classroom'
              className='w-full h-full object-cover duotone'
            />
            <div className='absolute inset-0 bg-[#cc5500] mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-500' />
            <div className='absolute bottom-6 left-6 bg-stone-50 p-4 brutal-border max-w-xs'>
              <p className='font-mono text-xs text-stone-500 mb-1'>LOCATION</p>
              <p className='font-display text-lg font-bold'>
                Modern Learning Environments
              </p>
            </div>
          </div>
          <div className='relative h-96 md:h-[600px] overflow-hidden bg-stone-200 flex items-center justify-center p-12'>
            <div className='absolute inset-0 grid-lines opacity-50' />
            <div className='relative z-10 text-center'>
              <div className='font-display text-7xl font-bold text-outline mb-4 leading-tight'>
                IT'S LIVE NOW
              </div>
              <p className='font-mono text-sm tracking-widest text-stone-600'>
                THE FUTURE OF EDUCATION IS HERE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-32 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[#cc5500] -skew-y-3 origin-top-left' />
        <div className='max-w-4xl mx-auto px-6 relative z-10 text-center text-white'>
          <h2 className='font-display text-5xl md:text-7xl font-bold mb-6 reveal-up text-white'>
            Ready to dismantle
            <br />
            the old system?
          </h2>
          <p
            className='text-xl mb-12 opacity-90 font-light reveal-up'
            style={{ transitionDelay: '0.1s' }}
          >
            Join the institutions that have already upgraded their
            infrastructure.
          </p>
          <div
            className='flex flex-col sm:flex-row gap-4 justify-center reveal-up'
            style={{ transitionDelay: '0.2s' }}
          >
            <Link
              href='/contact'
              className='brutal-border px-8 py-4 bg-stone-900 text-white font-mono text-sm tracking-wider hover:bg-white hover:text-stone-900 transition-colors hover-target no-underline'
              onClick={() =>
                posthog.capture('schedule_demo_clicked', {
                  location: 'home_cta',
                })
              }
            >
              Schedule Demo
            </Link>
            {/* <button
              onClick={() =>
                document
                  .getElementById('pricing')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className='px-8 py-4 border-2 border-white font-mono text-sm tracking-wider hover:bg-white hover:text-[#cc5500] transition-colors hover-target'
            >
              View Pricing
            </button> */}
          </div>
        </div>
      </section>

      {/* <div id='pricing'>
        <PricingSection />
      </div> */}

      <SiteFooter />
    </main>
  );
}
