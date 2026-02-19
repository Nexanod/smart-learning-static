'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';
import CustomCursor from '@/components/CustomCursor';
import GrainOverlay from '@/components/GrainOverlay';
import PricingSection from '@/components/PricingSection';
import RevealObserver from '@/components/RevealObserver';
import DemoModal from '@/components/DemoModal';

function TextScramble({ phrases }: { phrases: string[] }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    let frame = 0;
    let counter = 0;
    let animId: number;
    const el = ref.current;
    if (!el) return;

    const scramble = (newText: string) => {
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
      frame = 0;
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
          animId = requestAnimationFrame(update);
          frame++;
        } else {
          setTimeout(() => {
            counter = (counter + 1) % phrases.length;
            scramble(phrases[counter]);
          }, 3000);
        }
      };
      update();
    };
    const t = setTimeout(() => scramble(phrases[0]), 2000);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(animId);
    };
  }, [phrases]);
  return (
    <span ref={ref} className='text-outline italic'>
      Rebuilt
    </span>
  );
}

function Accordion() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(open === i ? null : i);
  const modules = [
    {
      num: '01',
      title: 'Paper Generation',
      sub: 'AI-POWERED • TEMPLATE BASED',
      desc: 'Transform exam creation from hours to seconds. Our AI analyzes curriculum patterns, difficulty distributions, and learning objectives to generate balanced, standards-compliant examination papers.',
      tags: ['Auto-grading ready', 'Multiple formats', 'Question banks'],
      bg: 'bg-[#cc5500]',
    },
    {
      num: '02',
      title: 'Student Management',
      sub: 'LIFECYCLE • COMMUNICATION • PORTALS',
      desc: 'Complete student lifecycle management from admission to alumni. Integrated SMS/WhatsApp notifications, customizable parent portals, and document management.',
      tags: ['Bulk messaging', 'Document vault', 'Fee tracking'],
      bg: 'bg-stone-800',
    },
    {
      num: '03',
      title: 'Attendance Tracking',
      sub: 'REAL-TIME • BIOMETRIC • ANALYTICS',
      desc: 'Modern attendance infrastructure with biometric integration, geofencing capabilities, and predictive absence analytics.',
      tags: ['Fingerprint', 'RFID cards', 'Mobile check-in'],
      bg: 'bg-stone-600',
    },
    {
      num: '04',
      title: 'Result Management',
      sub: 'PROCESSING • ANALYTICS • REPORTING',
      desc: 'Comprehensive result processing with automated report card generation, parent notifications, and deep performance analytics.',
      tags: ['Auto-calculation', 'Grade books', 'Transcripts'],
      bg: 'bg-stone-400',
    },
  ];
  return (
    <div className='lg:col-span-8 space-y-4'>
      {modules.map((m, i) => (
        <div
          key={i}
          className='group border-2 border-stone-900 bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer hover-target'
          onClick={() => toggle(i)}
        >
          <div className='p-6 flex justify-between items-center'>
            <div className='flex items-center space-x-4'>
              <div
                className={`w-12 h-12 ${m.bg} text-white flex items-center justify-center font-mono font-bold text-xl`}
              >
                {m.num}
              </div>
              <div>
                <h3 className='font-display text-2xl font-bold group-hover:translate-x-2 transition-transform'>
                  {m.title}
                </h3>
                <p className='font-mono text-xs text-stone-500 mt-1'>{m.sub}</p>
              </div>
            </div>
            <div
              className='transition-transform duration-300'
              style={{
                transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
              }}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <line x1='12' y1='5' x2='12' y2='19' />
                <line x1='5' y1='12' x2='19' y2='12' />
              </svg>
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
    icon: <path d='M13 2L3 14h9l-1 8 10-12h-9l1-8z' />,
    title: 'Instant Generation',
    desc: 'Generate examination papers in under 30 seconds with AI-optimized question distribution and difficulty balancing.',
  },
  {
    icon: (
      <>
        <rect x='3' y='11' width='18' height='11' rx='2' ry='2' />
        <path d='M7 11V7a5 5 0 0 1 10 0v4' />
      </>
    ),
    title: 'Bank-Grade Security',
    desc: 'End-to-end encryption, role-based access control, and comprehensive audit trails for all sensitive data.',
  },
  {
    icon: (
      <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' />
    ),
    title: 'Modular Architecture',
    desc: 'Deploy only what you need. Each module functions independently with clean API integration points.',
  },
  {
    icon: <polyline points='22 12 18 12 15 21 9 3 6 12 2 12' />,
    title: 'Predictive Analytics',
    desc: 'Identify at-risk students, predict attendance patterns, and optimize resource allocation with machine learning.',
  },
  {
    icon: (
      <>
        <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />
        <circle cx='9' cy='7' r='4' />
        <path d='M23 21v-2a4 4 0 0 0-3-3.87' />
        <path d='M16 3.13a4 4 0 0 1 0 7.75' />
      </>
    ),
    title: 'Multi-Tenant',
    desc: 'Manage multiple campuses, departments, or institutions from a single dashboard with complete data isolation.',
  },
  {
    icon: (
      <>
        <circle cx='12' cy='12' r='10' />
        <line x1='2' y1='12' x2='22' y2='12' />
        <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />
      </>
    ),
    title: 'Global Access',
    desc: 'Cloud-native infrastructure with 99.99% uptime SLA. Access from anywhere, on any device, in any timezone.',
  },
];

export default function HomePage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <main className='min-h-screen'>
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      <RevealObserver />

      {/* Hero */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'>
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
              <div className='font-mono text-sm text-[#cc5500] tracking-widest uppercase reveal-up'>
                Education Infrastructure // v2.4
              </div>
              <h1
                className='font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight reveal-up'
                style={{ transitionDelay: '0.1s' }}
              >
                Education
                <br />
                <TextScramble
                  phrases={['Rebuilt', 'Reimagined', 'Redefined', 'Optimized']}
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
                <Link
                  href='/contact'
                  className='brutal-border px-8 py-4 bg-stone-900 text-white font-mono text-sm tracking-wider hover-target no-underline'
                >
                  Get Free Trial
                </Link>
                <button
                  onClick={() => setIsDemoOpen(true)}
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
              <div className='relative'>
                <div className='absolute -inset-4 bg-[#cc5500] rounded-sm rotate-3' />
                <div className='relative brutal-border bg-stone-100 p-6 aspect-[4/5] overflow-hidden'>
                  <div className='absolute inset-0 grid-lines opacity-30' />
                  <div className='relative h-full flex flex-col justify-between'>
                    <div className='flex justify-between items-start'>
                      <div className='font-mono text-xs'>SYS.STATUS</div>
                      <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                    </div>
                    <div className='space-y-4'>
                      <div className='h-px bg-stone-900 w-full' />
                      <div className='font-display text-4xl font-bold'>94%</div>
                      <div className='font-mono text-xs text-stone-500'>
                        EFFICIENCY RATING
                      </div>
                    </div>
                    <div className='space-y-2'>
                      <div className='flex justify-between font-mono text-xs'>
                        <span>Paper Gen</span>
                        <span className='text-[#cc5500]'>ACTIVE</span>
                      </div>
                      <div className='h-1 bg-stone-200'>
                        <div className='h-full bg-[#cc5500] w-3/4' />
                      </div>
                      <div className='flex justify-between font-mono text-xs'>
                        <span>Attendance</span>
                        <span className='text-[#cc5500]'>TRACKING</span>
                      </div>
                      <div className='h-1 bg-stone-200'>
                        <div className='h-full bg-stone-900 w-full' />
                      </div>
                    </div>
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
            <h2 className='font-display text-5xl md:text-6xl font-bold max-w-3xl text-stone-50'>
              Built for institutions that demand more
            </h2>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-800'>
            {features.map((f, i) => (
              <div
                key={i}
                className='bg-stone-900 p-8 group hover:bg-stone-800 transition-colors reveal-up hover-target'
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <div className='w-12 h-12 border border-stone-700 flex items-center justify-center mb-6 group-hover:border-[#cc5500] transition-colors'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    className='text-[#cc5500]'
                  >
                    {f.icon}
                  </svg>
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
              <div className='font-display text-8xl font-bold text-outline mb-4'>
                500+
              </div>
              <p className='font-mono text-sm tracking-widest text-stone-600'>
                INSTITUTIONS TRUST SMART LEARNING
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
            >
              Schedule Demo
            </Link>
            <button
              onClick={() =>
                document
                  .getElementById('pricing')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className='px-8 py-4 border-2 border-white font-mono text-sm tracking-wider hover:bg-white hover:text-[#cc5500] transition-colors hover-target'
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <div id='pricing'>
        <PricingSection />
      </div>

      <SiteFooter />
    </main>
  );
}
