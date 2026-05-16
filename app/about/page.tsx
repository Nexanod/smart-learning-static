'use client';
import Link from 'next/link';

import CustomCursor from '@/components/CustomCursor';
import GrainOverlay from '@/components/GrainOverlay';
import Navbar from '@/components/Navbar';
import RevealObserver from '@/components/RevealObserver';
import SiteFooter from '@/components/SiteFooter';

const values = [
  {
    title: 'Precision',
    desc: 'Every feature is crafted with meticulous attention to detail. No bloat, no filler — only tools that matter.',
  },
  {
    title: 'Transparency',
    desc: 'Open pricing, clear documentation, and honest communication. We believe trust is earned through clarity.',
  },
  {
    title: 'Innovation',
    desc: 'We push the boundaries of what education technology can do using AI, machine learning, and modern architecture.',
  },
  {
    title: 'Impact',
    desc: 'We measure success by the measurable improvements our platform brings to institutions and their students.',
  },
];

const milestones = [
  {
    year: '2019',
    event:
      'Founded with a mission to rebuild education infrastructure from the ground up.',
  },
  {
    year: '2020',
    event: 'Launched Paper Generation module. First 50 institutions onboarded.',
  },
  {
    year: '2021',
    event: 'Student Management and Attendance Tracking modules released.',
  },
  {
    year: '2022',
    event:
      'Crossed 200+ institutions. Introduced AI-powered question generation.',
  },
  {
    year: '2023',
    event:
      'Predictive Analytics module launched. Multi-tenant architecture deployed.',
  },
  {
    year: '2024',
    event:
      "IT'S LIVE NOW. Smart Learning is redefining education across the region.",
  },
];

// stats unused

export default function AboutPage() {
  return (
    <main className='min-h-screen'>
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      <RevealObserver />

      {/* Hero */}
      <section className='relative pt-40 pb-24 overflow-hidden'>
        <div className='blob bg-orange-300 w-80 h-80 top-20 -right-20' />
        <div className='max-w-7xl mx-auto px-6 relative z-10'>
          <div className='font-mono text-sm text-[#cc5500] tracking-widest mb-4 reveal-up'>
            ABOUT US
          </div>
          <h1
            className='font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight max-w-4xl reveal-up'
            style={{ transitionDelay: '0.1s' }}
          >
            We build the infrastructure
            <br />
            <span className='text-outline italic'>education deserves</span>
          </h1>
          <p
            className='text-xl text-stone-600 max-w-2xl mt-8 leading-relaxed font-light reveal-up'
            style={{ transitionDelay: '0.2s' }}
          >
            Smart Learning was born out of frustration with outdated systems
            that hold institutions back. We believe technology should empower
            educators, not burden them.
          </p>
        </div>
      </section>

      {/* Stats */}
      {/* <div className='border-y-2 border-stone-900'>
        <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4'>
          {stats.map((s, i) => (
            <div
              key={i}
              className={`p-8 text-center ${i < 3 ? 'border-r-2 border-stone-900' : ''}`}
            >
              <div className='font-display text-4xl md:text-5xl font-bold'>
                {s.value}
              </div>
              <div className='font-mono text-xs tracking-widest text-stone-500 mt-2'>
                {s.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Values */}
      <section className='py-32'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-12 gap-16'>
            <div className='lg:col-span-4 reveal-up'>
              <div className='font-mono text-sm text-[#cc5500] tracking-widest mb-4'>
                OUR VALUES
              </div>
              <h2 className='font-display text-5xl font-bold leading-tight'>
                What drives us forward
              </h2>
            </div>
            <div className='lg:col-span-8 grid md:grid-cols-2 gap-6'>
              {values.map((v, i) => (
                <div
                  key={i}
                  className='border-2 border-stone-900 p-8 hover:bg-stone-100 transition-colors reveal-up hover-target'
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className='font-mono text-xs text-[#cc5500] tracking-widest mb-3'>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className='font-display text-2xl font-bold mb-3'>
                    {v.title}
                  </h3>
                  <p className='text-stone-600 text-sm leading-relaxed'>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className='py-32 bg-stone-900 text-stone-50'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='text-center mb-20 reveal-up'>
            <div className='font-mono text-sm text-[#cc5500] tracking-widest mb-4'>
              TIMELINE
            </div>
            <h2 className='font-display text-5xl font-bold text-stone-50'>
              Our journey so far
            </h2>
          </div>
          <div className='space-y-12'>
            {milestones.map((m, i) => (
              <div
                key={i}
                className='flex gap-8 items-start reveal-up'
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className='font-mono text-[#cc5500] text-sm font-bold w-16 shrink-0 pt-1'>
                  {m.year}
                </div>
                <div className='w-3 h-3 border-2 border-[#cc5500] bg-stone-900 rounded-full mt-1.5 shrink-0' />
                <p className='text-stone-300 leading-relaxed'>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-32 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[#cc5500] -skew-y-3 origin-top-left' />
        <div className='max-w-4xl mx-auto px-6 relative z-10 text-center text-white'>
          <h2 className='font-display text-5xl md:text-6xl font-bold mb-6 reveal-up text-white'>
            Want to be part of the story?
          </h2>
          <p
            className='text-xl mb-12 opacity-90 font-light reveal-up'
            style={{ transitionDelay: '0.1s' }}
          >
            Experience the future of education with Smart Learning.
          </p>
          <Link
            href='/contact'
            className='brutal-border inline-block px-8 py-4 bg-stone-900 text-white font-mono text-sm tracking-wider hover-target no-underline reveal-up'
            style={{ transitionDelay: '0.2s' }}
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
