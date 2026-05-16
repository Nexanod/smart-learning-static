'use client';
import { Check } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    desc: 'For individuals exploring the platform',
    features: [
      'Up to 50 students',
      'Basic Paper Generation',
      'Email Support',
      'Community Access',
    ],
    cta: 'Get Started Free',
    popular: false,
    dark: false,
  },
  {
    name: 'Basic',
    monthlyPrice: 1500,
    yearlyPrice: 16500,
    yearlyOriginal: 18000,
    desc: 'For small institutions getting started',
    features: [
      'Up to 500 students',
      'Paper Generation',
      'Attendance Tracking',
      'Basic Analytics',
      'Email & Chat Support',
    ],
    cta: 'Start Basic',
    popular: false,
    dark: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 2500,
    yearlyPrice: 27500,
    yearlyOriginal: 30000,
    desc: 'For growing institutions that need more',
    features: [
      'Up to 5,000 students',
      'AI Paper Generation',
      'Full Student Management',
      'Biometric Attendance',
      'Advanced Analytics',
      'Priority Support',
      'Custom Branding',
    ],
    cta: 'Start Pro',
    popular: true,
    dark: true,
  },
  {
    name: 'Custom',
    monthlyPrice: null,
    yearlyPrice: null,
    desc: 'For large-scale enterprise deployments',
    features: [
      'Unlimited students',
      'All Pro features',
      'Multi-campus support',
      'Dedicated Account Manager',
      'Custom Integrations',
      'On-premise option',
      'SLA 99.99% uptime',
      '24/7 Phone Support',
    ],
    cta: 'Contact Sales',
    popular: false,
    dark: false,
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className='py-32 relative'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Free Access Banner */}
        <div className='mb-12 brutal-border bg-[#cc5500] p-6 text-white text-center reveal-up'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
            <div className='w-12 h-12 bg-white/20 flex items-center justify-center rounded-full shrink-0'>
              <span className='text-2xl'>✨</span>
            </div>
            <div>
              <h3 className='font-display text-2xl font-bold'>
                Beta Launch Special Offer
              </h3>
              <p className='font-mono text-sm opacity-90'>
                We're on a mission to modernize education. All premium features
                are currently{' '}
                <span className='font-bold underline'>100% free</span> for an
                unlimited period. No credit card required.
              </p>
            </div>
          </div>
        </div>

        <div className='text-center mb-16'>
          <div className='font-mono text-sm text-[#cc5500] tracking-widest mb-4'>
            PRICING
          </div>
          <h2 className='font-display text-5xl md:text-6xl font-bold'>
            Simple, transparent pricing
          </h2>
          <p className='text-stone-600 mt-4 max-w-xl mx-auto'>
            Choose the plan that fits your institution. Scale up anytime.
          </p>

          {/* Billing Toggle */}
          <div className='flex items-center justify-center gap-2 mt-10'>
            <button
              onClick={() => setBilling('monthly')}
              className={`px-6 py-3 font-mono text-sm tracking-wider border-2 border-stone-900 transition-all hover-target ${
                billing === 'monthly'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-50 text-stone-900 hover:bg-stone-100'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-6 py-3 font-mono text-sm tracking-wider border-2 border-stone-900 transition-all hover-target ${
                billing === 'yearly'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-50 text-stone-900 hover:bg-stone-100'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`border-2 border-stone-900 p-8 flex flex-col ${
                plan.dark
                  ? 'bg-stone-900 text-stone-50 relative'
                  : 'bg-stone-50'
              }`}
            >
              {plan.popular && (
                <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-[#cc5500] text-white font-mono text-xs px-4 py-1 tracking-widest'>
                  MOST POPULAR
                </div>
              )}

              <div className='font-mono text-xs tracking-widest text-stone-500 mb-2'>
                {plan.name.toUpperCase()}
              </div>

              {/* Price Display */}
              {plan.monthlyPrice === null ? (
                <div className='font-display text-4xl font-bold mb-1'>
                  Custom
                </div>
              ) : plan.monthlyPrice === 0 ? (
                <>
                  <div className='font-display text-4xl font-bold mb-1'>
                    <span className='text-2xl align-top'>Rs.</span>0
                  </div>
                  <div className='font-mono text-xs text-stone-500 mb-4'>
                    forever free
                  </div>
                </>
              ) : billing === 'monthly' ? (
                <>
                  <div className='font-display text-4xl font-bold mb-1'>
                    <span className='text-2xl align-top'>Rs.</span>
                    {plan.monthlyPrice.toLocaleString('en-PK')}
                  </div>
                  <div
                    className={`font-mono text-xs mb-4 ${plan.dark ? 'text-stone-400' : 'text-stone-500'}`}
                  >
                    per month
                  </div>
                </>
              ) : (
                <>
                  <div className='font-display text-4xl font-bold mb-1'>
                    <span className='text-2xl align-top'>Rs.</span>
                    {plan.yearlyPrice?.toLocaleString('en-PK')}
                  </div>
                  <div
                    className={`font-mono text-xs mb-1 ${plan.dark ? 'text-stone-400' : 'text-stone-500'}`}
                  >
                    per year
                  </div>
                  {plan.yearlyOriginal && (
                    <div
                      className={`font-mono text-xs mb-4 ${plan.dark ? 'text-stone-500' : 'text-stone-400'}`}
                    >
                      <span className='line-through'>
                        Rs.{plan.yearlyOriginal.toLocaleString('en-PK')}
                      </span>
                      <span className='text-[#cc5500] ml-2'>
                        Save Rs.
                        {(
                          plan.yearlyOriginal - (plan.yearlyPrice || 0)
                        ).toLocaleString('en-PK')}
                      </span>
                    </div>
                  )}
                </>
              )}

              <p
                className={`text-sm mb-6 ${plan.dark ? 'text-stone-400' : 'text-stone-600'}`}
              >
                {plan.desc}
              </p>

              <div className='h-px bg-current opacity-10 mb-6' />

              <ul className='space-y-3 mb-8 flex-1'>
                {plan.features.map(f => (
                  <li key={f} className='flex items-start gap-3 text-sm'>
                    <Check
                      size={16}
                      className='text-[#cc5500] mt-0.5 shrink-0'
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={
                  plan.name === 'Custom'
                    ? '/contact'
                    : 'https://signup.smartlearning.pk'
                }
                className={`brutal-border text-center px-6 py-3 font-mono text-sm tracking-wider hover-target no-underline ${
                  plan.popular
                    ? 'bg-[#cc5500] text-white'
                    : plan.dark
                      ? 'bg-white text-stone-900'
                      : 'bg-stone-900 text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
