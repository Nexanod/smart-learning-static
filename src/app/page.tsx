'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Floating3D from '@/components/Floating3D';
import {
  FileText,
  Users,
  Calendar,
  BarChart3,
  Sparkles,
  ArrowRight,
  Zap,
  Shield,
  Globe,
} from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const features = [
    {
      icon: FileText,
      title: 'One-Click Paper Generation',
      description:
        'AI-powered paper generation with templates, automated creation, and intelligent question selection. Transform exam paper creation from hours to seconds while maintaining academic standards.',
      href: '/paper-generation',
      gradient: 'from-blue-600 to-blue-800',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    },
    {
      icon: Users,
      title: 'Student Management',
      description:
        'Complete student lifecycle management with SMS/WhatsApp notifications and customizable portals. Connect with students and parents through modern communication channels.',
      href: '/student-management',
      gradient: 'from-sky-500 to-blue-700',
      image:
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
    },
    {
      icon: Calendar,
      title: 'Attendance Tracking',
      description:
        'Modern attendance management with real-time tracking, analytics, and automated reporting. Never miss a beat with biometric integration and instant alerts.',
      href: '/attendance-management',
      gradient: 'from-blue-500 to-indigo-600',
      image:
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop',
    },
    {
      icon: BarChart3,
      title: 'Result Management',
      description:
        'Comprehensive result processing, analytics, and automated report card generation. Track student performance and generate insights with powerful analytics tools.',
      href: '#',
      gradient: 'from-blue-700 to-sky-600',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
  ];

  const benefits = [
    { icon: Zap, text: 'Eliminate Physical Labor' },
    { icon: Sparkles, text: 'AI-Powered Automation' },
    { icon: Shield, text: 'Secure B2B Platform' },
    { icon: Globe, text: 'Custom Subdomains' },
  ];

  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted'>
        <Floating3D />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10'>
          <motion.div
            className='max-w-5xl mx-auto text-center'
            initial='initial'
            animate='animate'
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className='mb-6'>
              <span className='inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-blue-600/10 border border-blue-500/20 text-sm font-medium text-foreground backdrop-blur-sm'>
                🚀 The Future of Education is Here
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight'
            >
              <span className='bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 bg-clip-text text-transparent'>
                Smart Learning
              </span>
              <br />
              <span className='text-foreground'>Education Reimagined</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className='text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed'
            >
              Modernize your institution with our fully digital, AI-powered
              education management system. From one-click paper generation to
              intelligent student management.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className='flex flex-col sm:flex-row gap-4 justify-center mb-12'
            >
              <Button
                asChild
                size='lg'
                className='bg-gradient-to-r from-blue-600 to-blue-800 hover:opacity-90 text-white text-lg px-8 py-6 rounded-full shadow-2xl shadow-blue-500/20 transition-all duration-300 hover:scale-105'
              >
                <Link href='/contact'>
                  Get Started Free <ArrowRight className='ml-2' />
                </Link>
              </Button>
              <Button
                asChild
                size='lg'
                className='bg-gradient-to-r from-sky-500 to-blue-700 hover:opacity-90 text-white text-lg px-8 py-6 rounded-full shadow-xl shadow-sky-500/20 transition-all duration-300 hover:scale-105'
              >
                <Link href='/pricing'>View Pricing</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className='flex flex-wrap justify-center gap-6 text-sm'
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className='flex items-center gap-2 text-muted-foreground'
                >
                  <benefit.icon className='w-4 h-4 text-blue-600' />
                  <span>{benefit.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className='w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-2'>
            <motion.div
              className='w-1.5 h-1.5 bg-blue-600 rounded-full'
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section - One by One with Alternating Layout */}
      <section className='py-24 bg-background'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
              Powerful{' '}
              <span className='bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent'>
                Modules
              </span>
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Everything you need to run a modern educational institution
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
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className='w-8 h-8 text-white' />
                    </motion.div>
                    <h3 className='text-3xl sm:text-4xl font-bold mb-4'>
                      {feature.title}
                    </h3>
                    <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                      {feature.description}
                    </p>
                    <Button
                      asChild
                      size='lg'
                      className={`bg-gradient-to-r ${feature.gradient} rounded-full px-8 group`}
                    >
                      <Link href={feature.href}>
                        Learn More
                        <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                      </Link>
                    </Button>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl' />
          <div className='absolute bottom-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-3xl' />
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='max-w-4xl mx-auto text-center'
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              Ready to Transform Your Institution?
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              Join hundreds of schools and institutions already using Smart
              Learning
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                asChild
                size='lg'
                className='bg-white text-blue-600 hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-xl transition-all duration-300 hover:scale-105'
              >
                <Link href='/contact'>
                  Start Free Trial <ArrowRight className='ml-2' />
                </Link>
              </Button>
              <Button
                asChild
                size='lg'
                className='bg-gradient-to-r from-blue-500 to-sky-600 text-white text-lg px-8 py-6 rounded-full shadow-xl shadow-blue-500/20 hover:opacity-90 transition-all duration-300 hover:scale-105'
              >
                <Link href='/team'>Meet Our Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
