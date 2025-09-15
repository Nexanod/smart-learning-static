'use client';

import * as React from 'react';
import { Linkedin, Contact, Copyright, MonitorSmartphone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

type FooterLink = {
  label: string;
  href?: string;
  ariaLabel?: string;
};

type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  columns?: FooterColumn[];
  companyName?: string;
  description?: string;
  contactEmail?: string;
  social?: {
    linkedin?: string;
    appStore?: string;
  };
  newsletter?: {
    enabled?: boolean;
    label?: string;
    placeholder?: string;
    cta?: string;
    onSubscribe?: (email: string) => Promise<void> | void;
  };
  legal?: {
    copyrightStartYear?: number;
    privacyHref?: string;
    termsHref?: string;
  };
}

export default function Footer({
  className,
  columns = [
    {
      heading: 'Product',
      links: [
        { label: 'Overview' },
        { label: 'Features' },
        { label: 'Pricing' },
        { label: 'Integrations' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About' },
        { label: 'Careers' },
        { label: 'News' },
        { label: 'Contact' },
      ],
    },
    {
      heading: 'Support',
      links: [
        { label: 'Help Center' },
        { label: 'Guides' },
        { label: 'API Docs' },
        { label: 'Status' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy' },
        { label: 'Terms of Service' },
        { label: 'Security' },
        { label: 'GDPR' },
      ],
    },
  ],
  companyName = 'Smart Learning',
  description = 'Transforming education with intelligent, modern tools that empower institutions, educators, and learners.',
  contactEmail = 'hello@smartlearning.com',
  social = {
    linkedin: undefined,
    appStore: undefined,
  },
  newsletter = {
    enabled: true,
    label: 'Subscribe to our newsletter',
    placeholder: 'Enter your email',
    cta: 'Subscribe',
    onSubscribe: undefined,
  },
  legal = {
    copyrightStartYear: new Date().getFullYear(),
    privacyHref: undefined,
    termsHref: undefined,
  },
  ...props
}: FooterProps) {
  const [email, setEmail] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);

  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();
    if (!value || !/^\S+@\S+\.\S+$/.test(value)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    try {
      setSubmitting(true);
      if (newsletter.onSubscribe) {
        await newsletter.onSubscribe(value);
      } else {
        await new Promise(r => setTimeout(r, 700));
      }
      setEmail('');
      toast.success("You're subscribed. Welcome aboard!");
    } catch {
      toast.error('Subscription failed. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  }

  const currentYear = new Date().getFullYear();
  const startYear = legal.copyrightStartYear ?? currentYear;
  const yearText =
    startYear === currentYear
      ? `${currentYear}`
      : `${startYear}–${currentYear}`;

  return (
    <footer
      className={['w-full bg-foreground text-primary-foreground', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <div className='w-full max-w-full'>
        <div className='px-6 py-14 sm:py-16 md:py-20'>
          <div className='w-full max-w-full'>
            <div className='grid gap-12 md:gap-14 lg:gap-16 sm:grid-cols-2 lg:grid-cols-12'>
              <div className='lg:col-span-5'>
                <div className='flex flex-col gap-4'>
                  <div className='flex items-center gap-3'>
                    <div className='h-9 w-9 rounded-lg bg-primary-foreground text-foreground flex items-center justify-center font-display text-lg font-extrabold'>
                      SL
                    </div>
                    <span className='font-display text-xl sm:text-2xl font-extrabold tracking-tight'>
                      {companyName}
                    </span>
                  </div>
                  <p className='text-sm sm:text-base leading-7 text-white/80'>
                    {description}
                  </p>

                  <div className='mt-4 flex flex-col gap-2 text-sm'>
                    <div className='flex items-center gap-2 text-white/80'>
                      <Contact
                        className='h-4 w-4 text-white/70'
                        aria-hidden='true'
                      />
                      <a
                        href={`mailto:${contactEmail}`}
                        className='hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60 rounded'
                      >
                        {contactEmail}
                      </a>
                    </div>
                    <div className='flex items-center gap-3 pt-2'>
                      <span className='text-xs uppercase tracking-wider text-white/60'>
                        Follow
                      </span>
                      <div className='flex items-center gap-2'>
                        <SocialIcon
                          ariaLabel='LinkedIn'
                          icon={
                            <Linkedin className='h-4 w-4' aria-hidden='true' />
                          }
                          href={social.linkedin}
                        />
                        <SocialIcon
                          ariaLabel='Mobile App'
                          icon={
                            <MonitorSmartphone
                              className='h-4 w-4'
                              aria-hidden='true'
                            />
                          }
                          href={social.appStore}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {newsletter.enabled ? (
                  <div className='mt-8'>
                    <Separator className='bg-white/10' />
                    <form
                      onSubmit={handleSubscribe}
                      className='mt-6 flex w-full max-w-md gap-2'
                    >
                      <label htmlFor='newsletter' className='sr-only'>
                        {newsletter.label || 'Email address'}
                      </label>
                      <Input
                        id='newsletter'
                        type='email'
                        inputMode='email'
                        autoComplete='email'
                        placeholder={
                          newsletter.placeholder || 'Enter your email'
                        }
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className='bg-white text-foreground placeholder:text-foreground/50 border-white/20 focus-visible:ring-primary-foreground'
                        aria-describedby='newsletter-desc'
                      />
                      <Button
                        type='submit'
                        disabled={submitting}
                        className='bg-primary-foreground text-foreground hover:bg-primary-foreground/90'
                        aria-label={newsletter.cta || 'Subscribe'}
                      >
                        {submitting
                          ? 'Submitting...'
                          : newsletter.cta || 'Subscribe'}
                      </Button>
                    </form>
                    <p
                      id='newsletter-desc'
                      className='mt-2 text-xs text-white/60'
                    >
                      Get product updates, tips, and insights. No spam,
                      unsubscribe anytime.
                    </p>
                  </div>
                ) : null}
              </div>

              <div className='lg:col-span-7'>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10'>
                  {columns.map((col, idx) => (
                    <nav key={idx} aria-label={col.heading} className='min-w-0'>
                      <h3 className='font-display text-sm sm:text-base font-semibold tracking-wide text-primary-foreground'>
                        {col.heading}
                      </h3>
                      <ul className='mt-4 space-y-3'>
                        {col.links.map((link, i) => (
                          <li key={`${idx}-${i}`} className='min-w-0'>
                            {link.href ? (
                              <a
                                href={link.href}
                                aria-label={link.ariaLabel || link.label}
                                className='text-sm text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60 rounded'
                              >
                                <span className='truncate'>{link.label}</span>
                              </a>
                            ) : (
                              <span
                                role='link'
                                aria-label={link.ariaLabel || link.label}
                                tabIndex={0}
                                className='text-sm text-white/70 hover:text-white/90 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60 rounded cursor-default'
                              >
                                <span className='truncate'>{link.label}</span>
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </nav>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='mt-12 sm:mt-14'>
            <Separator className='bg-white/10' />
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 pt-6'>
              <div className='flex items-center gap-2 text-white/70 text-sm'>
                <Copyright className='h-4 w-4' aria-hidden='true' />
                <span>
                  {yearText} {companyName}. All rights reserved.
                </span>
              </div>
              <div className='flex items-center gap-4 text-sm'>
                {legal.privacyHref ? (
                  <a
                    href={legal.privacyHref}
                    className='text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60 rounded'
                  >
                    Privacy Policy
                  </a>
                ) : (
                  <span className='text-white/70'>Privacy Policy</span>
                )}
                <span className='h-3 w-px bg-white/15' aria-hidden='true' />
                {legal.termsHref ? (
                  <a
                    href={legal.termsHref}
                    className='text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60 rounded'
                  >
                    Terms of Service
                  </a>
                ) : (
                  <span className='text-white/70'>Terms of Service</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  ariaLabel,
  icon,
}: {
  href?: string;
  ariaLabel: string;
  icon: React.ReactNode;
}) {
  const content = (
    <span className='inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/90 hover:bg-white/10 transition-colors'>
      {icon}
      <span className='sr-only'>{ariaLabel}</span>
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className='focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60 rounded-full'
        target='_blank'
        rel='noreferrer'
      >
        {content}
      </a>
    );
  }

  return (
    <span
      role='link'
      aria-label={ariaLabel}
      tabIndex={0}
      aria-disabled='true'
      className='opacity-80'
    >
      {content}
    </span>
  );
}
