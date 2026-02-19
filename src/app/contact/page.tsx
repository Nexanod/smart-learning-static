'use client';

import { useState } from 'react';
import { SOCIAL_LINKS, CONTACT_INFO } from '@/constants/site';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';
import CustomCursor from '@/components/CustomCursor';
import GrainOverlay from '@/components/GrainOverlay';
import RevealObserver from '@/components/RevealObserver';
import { Check, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      institution: formData.get('institution') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('sent');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <main className='min-h-screen'>
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      <RevealObserver />

      {/* Hero */}
      <section className='relative pt-40 pb-24 overflow-hidden'>
        <div className='blob bg-orange-300 w-80 h-80 top-10 -left-20' />
        <div className='max-w-7xl mx-auto px-6 relative z-10'>
          <div className='font-mono text-sm text-[#cc5500] tracking-widest mb-4 reveal-up'>
            CONTACT US
          </div>
          <h1
            className='font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight max-w-3xl reveal-up'
            style={{ transitionDelay: '0.1s' }}
          >
            Let&apos;s build
            <br />
            <span className='text-outline italic'>together</span>
          </h1>
          <p
            className='text-xl text-stone-600 max-w-xl mt-8 leading-relaxed font-light reveal-up'
            style={{ transitionDelay: '0.2s' }}
          >
            Ready to transform your institution? Get in touch and we&apos;ll
            walk you through everything.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className='pb-32'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-12 gap-16'>
            {/* Form */}
            <div className='lg:col-span-7 reveal-up'>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='font-mono text-xs tracking-widest text-stone-500 mb-2 block'>
                      NAME
                    </label>
                    <input
                      name='name'
                      type='text'
                      required
                      className='w-full p-4 border-2 border-stone-900 bg-stone-50 font-mono text-sm focus:outline-none focus:border-[#cc5500] focus:shadow-[4px_4px_0_0_#cc5500] transition-all hover-target'
                      placeholder='Your name'
                    />
                  </div>
                  <div>
                    <label className='font-mono text-xs tracking-widest text-stone-500 mb-2 block'>
                      EMAIL
                    </label>
                    <input
                      name='email'
                      type='email'
                      required
                      className='w-full p-4 border-2 border-stone-900 bg-stone-50 font-mono text-sm focus:outline-none focus:border-[#cc5500] focus:shadow-[4px_4px_0_0_#cc5500] transition-all hover-target'
                      placeholder='you@institution.edu'
                    />
                  </div>
                </div>
                <div>
                  <label className='font-mono text-xs tracking-widest text-stone-500 mb-2 block'>
                    INSTITUTION
                  </label>
                  <input
                    name='institution'
                    type='text'
                    className='w-full p-4 border-2 border-stone-900 bg-stone-50 font-mono text-sm focus:outline-none focus:border-[#cc5500] focus:shadow-[4px_4px_0_0_#cc5500] transition-all hover-target'
                    placeholder='Your institution name'
                  />
                </div>
                <div>
                  <label className='font-mono text-xs tracking-widest text-stone-500 mb-2 block'>
                    SUBJECT
                  </label>
                  <select
                    name='subject'
                    className='w-full p-4 border-2 border-stone-900 bg-stone-50 font-mono text-sm focus:outline-none focus:border-[#cc5500] focus:shadow-[4px_4px_0_0_#cc5500] transition-all hover-target'
                  >
                    <option>General Inquiry</option>
                    <option>Schedule a Demo</option>
                    <option>Pricing Discussion</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label className='font-mono text-xs tracking-widest text-stone-500 mb-2 block'>
                    MESSAGE
                  </label>
                  <textarea
                    name='message'
                    required
                    rows={6}
                    className='w-full p-4 border-2 border-stone-900 bg-stone-50 font-mono text-sm focus:outline-none focus:border-[#cc5500] focus:shadow-[4px_4px_0_0_#cc5500] transition-all resize-none hover-target'
                    placeholder='Tell us about your needs...'
                  />
                </div>
                <button
                  type='submit'
                  disabled={status === 'sending'}
                  className='brutal-border px-8 py-4 bg-[#cc5500] text-white font-mono text-sm tracking-wider hover-target w-full md:w-auto disabled:opacity-60'
                >
                  {status === 'sending' && 'Sending...'}
                  {status === 'sent' && (
                    <span className='flex items-center justify-center gap-2'>
                      <Check size={16} /> Message Sent!
                    </span>
                  )}
                  {status === 'error' && (
                    <span className='flex items-center justify-center gap-2'>
                      <AlertCircle size={16} /> Failed — Try Again
                    </span>
                  )}
                  {status === 'idle' && 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div
              className='lg:col-span-5 space-y-8 reveal-up'
              style={{ transitionDelay: '0.2s' }}
            >
              <div className='border-2 border-stone-900 p-8'>
                <h3 className='font-display text-2xl font-bold mb-6'>
                  Get in touch
                </h3>
                <div className='space-y-6'>
                  <div>
                    <div className='font-mono text-xs tracking-widest text-[#cc5500] mb-1'>
                      EMAIL
                    </div>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className='text-stone-900 hover:text-[#cc5500] transition-colors no-underline hover-target'
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                  <div>
                    <div className='font-mono text-xs tracking-widest text-[#cc5500] mb-1'>
                      PHONE
                    </div>
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                      className='text-stone-900 hover:text-[#cc5500] transition-colors no-underline hover-target'
                    >
                      {CONTACT_INFO.phoneLabel}
                    </a>
                  </div>
                  <div>
                    <div className='font-mono text-xs tracking-widest text-[#cc5500] mb-1'>
                      OFFICE
                    </div>
                    <p className='text-stone-600 text-sm'>
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className='border-2 border-stone-900 p-8 bg-stone-900 text-stone-50'>
                <h3 className='font-display text-xl font-bold mb-4 text-stone-50'>
                  Schedule a demo
                </h3>
                <p className='text-stone-400 text-sm leading-relaxed mb-6'>
                  See Smart Learning in action. Book a 30-minute walkthrough
                  with our team.
                </p>
                <a
                  href='#'
                  className='brutal-border inline-block px-6 py-3 bg-[#cc5500] text-white font-mono text-sm tracking-wider hover-target no-underline'
                >
                  Book Demo Call
                </a>
              </div>

              <div className='border-2 border-stone-900 p-8'>
                <h3 className='font-display text-xl font-bold mb-4'>
                  Follow us
                </h3>
                <div className='flex flex-wrap gap-3'>
                  {[
                    { name: 'YouTube', href: SOCIAL_LINKS.youtube },
                    { name: 'Instagram', href: SOCIAL_LINKS.instagram },
                    { name: 'Facebook', href: SOCIAL_LINKS.facebook },
                    { name: 'Twitter', href: SOCIAL_LINKS.twitter },
                    { name: 'TikTok', href: SOCIAL_LINKS.tiktok },
                    { name: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
                    { name: 'Reddit', href: SOCIAL_LINKS.reddit },
                  ].map(s => (
                    <a
                      key={s.name}
                      href={s.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-4 py-2 border border-stone-300 font-mono text-xs hover:border-[#cc5500] hover:text-[#cc5500] transition-colors hover-target no-underline'
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
