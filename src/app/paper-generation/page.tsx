'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Sparkles,
  Users,
  Layout,
  CheckCircle2,
  ArrowRight,
  Wand2,
  FileEdit,
  Layers,
  Download,
} from 'lucide-react';

export default function PaperGenerationPage() {
  const features = [
    {
      icon: Wand2,
      title: 'One-Click Generation',
      description:
        'Generate complete exam papers instantly with AI-powered question selection and distribution. Save hours of manual work with intelligent automation that understands your curriculum requirements.',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    },
    {
      icon: Users,
      title: 'User Management',
      description:
        'Create roles, assign permissions, and manage multiple educators with collaborative workflows. Control who can create, edit, and approve papers with granular permission settings.',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    },
    {
      icon: FileEdit,
      title: 'Modern Editor',
      description:
        'Edit and create papers on the go with our intuitive, feature-rich editor interface. Real-time preview, drag-and-drop functionality, and collaborative editing make paper creation effortless.',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
    },
    {
      icon: Layout,
      title: 'Smart Templates',
      description:
        "Use pre-built templates or create custom layouts matching your institution's standards. Maintain consistency across all papers with professional formatting and branding.",
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
    {
      icon: Layers,
      title: 'Question Bank',
      description:
        'Organize and manage thousands of questions with tagging, categories, and difficulty levels. Smart search and filtering help you find the perfect questions instantly.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
    {
      icon: Download,
      title: 'Multiple Formats',
      description:
        'Export papers in PDF, Word, or print-ready formats with customizable styling. One-click export with automatic formatting ensures perfect papers every time.',
      image:
        'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
    },
  ];

  const benefits = [
    'Save 90% time on paper creation',
    'AI-powered question suggestions',
    'Maintain question difficulty balance',
    'Prevent question repetition',
    'Auto-generate marking schemes',
    'Version control and history',
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$29',
      students: 'Up to 100 students',
      papers: '50 papers/month',
    },
    {
      name: 'Professional',
      price: '$79',
      students: 'Up to 500 students',
      papers: 'Unlimited papers',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      students: 'Unlimited students',
      papers: 'Unlimited papers',
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
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className='mb-4 bg-blue-500/10 text-blue-600 border-blue-500/20'>
                <Sparkles className='w-3 h-3 mr-1' />
                AI-Powered Module
              </Badge>
              <h1 className='text-5xl sm:text-6xl font-bold mb-6 leading-tight'>
                One-Click{' '}
                <span className='bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent'>
                  Paper Generation
                </span>
              </h1>
              <p className='text-xl text-muted-foreground mb-8 leading-relaxed'>
                Transform exam paper creation from hours to seconds. Our
                AI-powered system generates, organizes, and formats papers while
                maintaining academic standards.
              </p>
              <div className='flex flex-wrap gap-4'>
                <Button
                  asChild
                  size='lg'
                  className='bg-gradient-to-r from-blue-600 to-blue-800 rounded-full px-8'
                >
                  <Link href='/contact'>
                    Start Free Trial <ArrowRight className='ml-2' />
                  </Link>
                </Button>
                <Button
                  asChild
                  size='lg'
                  variant='outline'
                  className='rounded-full px-8'
                >
                  <Link href='#features'>Explore Features</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative'
            >
              <motion.div
                className='relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-border bg-card'
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
                  alt='Paper Generation Dashboard'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6'>
                  <p className='text-white font-medium'>
                    Intuitive Dashboard Interface
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features - One by One with Alternating Layout */}
      <section id='features' className='py-24 bg-background'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
              Powerful <span className='text-blue-600'>Features</span>
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Everything you need for efficient paper generation and management
            </p>
          </motion.div>

          <div className='space-y-32'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <motion.div
                      className='w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-6 shadow-lg'
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className='w-8 h-8 text-white' />
                    </motion.div>
                    <h3 className='text-3xl sm:text-4xl font-bold mb-4'>
                      {feature.title}
                    </h3>
                    <p className='text-lg text-muted-foreground leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div
                    className={
                      index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                    }
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -8 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className='relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-border hover:shadow-blue-500/20'
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className='object-cover'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg-gradient-to-br from-blue-500/5 to-sky-500/5 rounded-3xl p-8 md:p-12 mt-32'
          >
            <h3 className='text-3xl font-bold mb-8 text-center'>
              Why Choose Our Paper Generation?
            </h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className='flex items-center gap-3'
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle2 className='w-5 h-5 text-blue-600 flex-shrink-0' />
                  <span className='text-foreground'>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subscription Plans */}
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
              Subscription <span className='text-blue-600'>Plans</span>
            </h2>
            <p className='text-xl text-muted-foreground'>
              Choose the perfect plan for your institution
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`text-center p-8 h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${index === 1 ? 'border-blue-600 border-2 shadow-xl scale-105' : 'hover:border-blue-500/30'}`}
                >
                  <CardContent className='p-0'>
                    {index === 1 && (
                      <Badge className='mb-4 bg-blue-600 text-white'>
                        Most Popular
                      </Badge>
                    )}
                    <h3 className='text-2xl font-bold mb-2'>{plan.name}</h3>
                    <div className='text-4xl font-bold text-blue-600 mb-6'>
                      {plan.price}
                      {plan.price !== 'Custom' && (
                        <span className='text-lg text-muted-foreground'>
                          /month
                        </span>
                      )}
                    </div>
                    <ul className='space-y-3 mb-8 text-left'>
                      <li className='flex items-center gap-2'>
                        <CheckCircle2 className='w-5 h-5 text-blue-600' />
                        <span>{plan.students}</span>
                      </li>
                      <li className='flex items-center gap-2'>
                        <CheckCircle2 className='w-5 h-5 text-blue-600' />
                        <span>{plan.papers}</span>
                      </li>
                      <li className='flex items-center gap-2'>
                        <CheckCircle2 className='w-5 h-5 text-blue-600' />
                        <span>AI question suggestions</span>
                      </li>
                      <li className='flex items-center gap-2'>
                        <CheckCircle2 className='w-5 h-5 text-blue-600' />
                        <span>Template library</span>
                      </li>
                    </ul>
                    <Button
                      asChild
                      className={`w-full rounded-full ${index === 1 ? 'bg-blue-600' : ''}`}
                      variant={index === 1 ? 'default' : 'outline'}
                    >
                      <Link href='/contact'>Get Started</Link>
                    </Button>
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
              Ready to Revolutionize Paper Generation?
            </h2>
            <p className='text-xl mb-8 opacity-90 max-w-2xl mx-auto'>
              Join hundreds of institutions saving time and improving their
              examination process
            </p>
            <Button
              asChild
              size='lg'
              className='bg-white text-blue-600 hover:bg-white/90 rounded-full px-8'
            >
              <Link href='/contact'>
                Start Your Free Trial <ArrowRight className='ml-2' />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
