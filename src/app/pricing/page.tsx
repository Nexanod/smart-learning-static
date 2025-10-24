'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2,
  ArrowRight,
  X,
  Sparkles,
  Zap,
  Crown,
} from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      description: 'Perfect for small schools and training centers',
      icon: Zap,
      gradient: 'from-blue-600 to-blue-800',
      features: [
        { text: 'Up to 200 students', included: true },
        { text: 'Paper Generation (50/month)', included: true },
        { text: 'Student Management', included: true },
        { text: 'Basic Attendance', included: true },
        { text: 'Email Support', included: true },
        { text: '1 Custom Subdomain', included: true },
        { text: '500 SMS/WhatsApp messages', included: true },
        { text: 'AI Question Suggestions', included: false },
        { text: 'Advanced Analytics', included: false },
        { text: 'Priority Support', included: false },
      ],
    },
    {
      name: 'Professional',
      price: '$249',
      description: 'Best for growing institutions',
      icon: Sparkles,
      gradient: 'from-sky-500 to-blue-700',
      popular: true,
      features: [
        { text: 'Up to 1,000 students', included: true },
        { text: 'Unlimited Paper Generation', included: true },
        { text: 'Student Management', included: true },
        { text: 'Advanced Attendance', included: true },
        { text: 'Priority Email & Chat Support', included: true },
        { text: '3 Custom Subdomains', included: true },
        { text: '5,000 SMS/WhatsApp messages', included: true },
        { text: 'AI Question Suggestions', included: true },
        { text: 'Advanced Analytics', included: true },
        { text: 'Result Management', included: true },
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large educational institutions',
      icon: Crown,
      gradient: 'from-blue-500 to-indigo-600',
      features: [
        { text: 'Unlimited students', included: true },
        { text: 'Unlimited Paper Generation', included: true },
        { text: 'Student Management', included: true },
        { text: 'Advanced Attendance + Biometric', included: true },
        { text: '24/7 Dedicated Support', included: true },
        { text: 'Unlimited Custom Subdomains', included: true },
        { text: 'Unlimited SMS/WhatsApp messages', included: true },
        { text: 'AI Question Suggestions', included: true },
        { text: 'Advanced Analytics + Custom Reports', included: true },
        { text: 'All Future Modules Included', included: true },
      ],
    },
  ];

  const modules = [
    {
      name: 'Paper Generation Module',
      starter: '$29/mo',
      professional: 'Included',
      enterprise: 'Included',
    },
    {
      name: 'Student Management Module',
      starter: '$39/mo',
      professional: 'Included',
      enterprise: 'Included',
    },
    {
      name: 'Attendance Management Module',
      starter: '$25/mo',
      professional: 'Included',
      enterprise: 'Included',
    },
    {
      name: 'Result Management Module',
      starter: '$35/mo',
      professional: '$19/mo',
      enterprise: 'Included',
    },
  ];

  return (
    <main className='min-h-screen pt-20'>
      {/* Hero Section */}
      <section className='relative py-24 bg-gradient-to-br from-background via-background to-muted overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl' />
          <div className='absolute bottom-20 right-20 w-72 h-72 bg-sky-500 rounded-full blur-3xl' />
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center max-w-3xl mx-auto mb-16'
          >
            <Badge className='mb-4 bg-blue-500/10 text-blue-600 border-blue-500/20'>
              💰 Transparent Pricing
            </Badge>
            <h1 className='text-5xl sm:text-6xl font-bold mb-6 leading-tight'>
              Simple,{' '}
              <span className='bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 bg-clip-text text-transparent'>
                Transparent
              </span>{' '}
              Pricing
            </h1>
            <p className='text-xl text-muted-foreground leading-relaxed'>
              Choose the perfect plan for your institution. All plans include a
              14-day free trial.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className='grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16'>
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
              >
                {plan.popular && (
                  <div className='absolute -top-5 left-1/2 transform -translate-x-1/2 z-10'>
                    <Badge className='bg-gradient-to-r from-sky-500 to-blue-700 text-white px-4 py-1'>
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card
                  className={`h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${plan.popular ? 'border-sky-600 border-2 shadow-2xl' : 'border-2 hover:border-blue-500/30'}`}
                >
                  <CardContent className='p-8'>
                    <motion.div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <plan.icon className='w-7 h-7 text-white' />
                    </motion.div>
                    <h3 className='text-2xl font-bold mb-2'>{plan.name}</h3>
                    <p className='text-muted-foreground text-sm mb-6'>
                      {plan.description}
                    </p>

                    <div className='mb-6'>
                      <div className='flex items-baseline'>
                        <span className='text-5xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent'>
                          {plan.price}
                        </span>
                        {plan.price !== 'Custom' && (
                          <span className='text-muted-foreground ml-2'>
                            /month
                          </span>
                        )}
                      </div>
                      {plan.price === 'Custom' && (
                        <p className='text-sm text-muted-foreground mt-1'>
                          Contact us for pricing
                        </p>
                      )}
                    </div>

                    <Button
                      asChild
                      className={`w-full rounded-full mb-6 ${plan.popular ? 'bg-gradient-to-r from-sky-500 to-blue-700' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                      size='lg'
                    >
                      <Link href='/contact'>
                        {plan.price === 'Custom'
                          ? 'Contact Sales'
                          : 'Start Free Trial'}
                      </Link>
                    </Button>

                    <ul className='space-y-3'>
                      {plan.features.map((feature, fIndex) => (
                        <motion.li
                          key={fIndex}
                          className='flex items-start gap-3'
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.1 + fIndex * 0.05,
                          }}
                        >
                          {feature.included ? (
                            <CheckCircle2 className='w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5' />
                          ) : (
                            <X className='w-5 h-5 text-muted-foreground/40 flex-shrink-0 mt-0.5' />
                          )}
                          <span
                            className={
                              feature.included
                                ? 'text-foreground'
                                : 'text-muted-foreground/60'
                            }
                          >
                            {feature.text}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Module Pricing */}
      <section className='py-24 bg-background'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
              Individual <span className='text-blue-600'>Module Pricing</span>
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Need specific modules only? Subscribe to individual modules
              separately
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='max-w-4xl mx-auto'
          >
            <Card className='hover:shadow-2xl transition-all duration-500'>
              <CardContent className='p-0'>
                <div className='overflow-x-auto'>
                  <table className='w-full'>
                    <thead>
                      <tr className='border-b border-border'>
                        <th className='text-left p-6 font-semibold'>Module</th>
                        <th className='text-center p-6 font-semibold'>
                          Starter
                        </th>
                        <th className='text-center p-6 font-semibold bg-sky-500/5'>
                          Professional
                        </th>
                        <th className='text-center p-6 font-semibold'>
                          Enterprise
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {modules.map((module, index) => (
                        <motion.tr
                          key={index}
                          className='border-b border-border last:border-0 hover:bg-muted/50 transition-colors'
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <td className='p-6 font-medium'>{module.name}</td>
                          <td className='p-6 text-center text-muted-foreground'>
                            {module.starter}
                          </td>
                          <td className='p-6 text-center bg-sky-500/5 font-semibold text-sky-600'>
                            {module.professional}
                          </td>
                          <td className='p-6 text-center text-muted-foreground'>
                            {module.enterprise}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-24 bg-muted/30'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
              Frequently Asked <span className='text-sky-600'>Questions</span>
            </h2>
          </motion.div>

          <div className='max-w-3xl mx-auto grid gap-6'>
            {[
              {
                q: 'Can I switch plans later?',
                a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and bank transfers for enterprise plans.',
              },
              {
                q: 'Is there a setup fee?',
                a: 'No setup fees! All plans include free onboarding and setup assistance.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes, you can cancel your subscription at any time with no penalties. Your data remains accessible for 30 days after cancellation.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className='hover:shadow-lg transition-all duration-500 hover:-translate-y-1'>
                  <CardContent className='p-6'>
                    <h3 className='text-lg font-bold mb-2'>{faq.q}</h3>
                    <p className='text-muted-foreground'>{faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              Still Have Questions?
            </h2>
            <p className='text-xl mb-8 opacity-90 max-w-2xl mx-auto'>
              Our team is here to help you choose the right plan for your
              institution
            </p>
            <Button
              asChild
              size='lg'
              className='bg-white text-blue-600 hover:bg-white/90 rounded-full px-8'
            >
              <Link href='/contact'>
                Contact Sales <ArrowRight className='ml-2' />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
