'use client';
import { motion } from 'framer-motion';
import {
  Clock,
  BarChart3,
  Bell,
  CheckCircle2,
  Smartphone,
  Fingerprint,
  FileText,
  TrendingUp,
} from 'lucide-react';

import CustomCursor from '@/components/CustomCursor';
import GrainOverlay from '@/components/GrainOverlay';
import Navbar from '@/components/Navbar';
import RevealObserver from '@/components/RevealObserver';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function AttendanceManagementPage() {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile Attendance',
      description:
        'Mark attendance on-the-go with mobile apps for teachers and administrators. Real-time syncing ensures data is always up-to-date across all devices.',
      image:
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop',
    },
    {
      icon: Fingerprint,
      title: 'Biometric Integration',
      description:
        'Support for fingerprint scanners, face recognition, and RFID systems. Seamless integration with hardware devices for touchless attendance marking.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description:
        'Track attendance patterns, trends, and generate insights instantly. Visual dashboards show class-wise, student-wise, and time-based attendance metrics.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
    {
      icon: Bell,
      title: 'Automated Alerts',
      description:
        'Notify parents and administrators about absences via SMS or WhatsApp. Configurable alert rules and escalation workflows ensure no absence goes unnoticed.',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    },
    {
      icon: FileText,
      title: 'Comprehensive Reports',
      description:
        'Generate detailed attendance reports by class, student, or time period. Export to Excel, PDF, or integrate with your existing systems via API.',
      image:
        'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description:
        'Identify attendance patterns and take proactive measures. Predictive analytics help spot students at risk of chronic absenteeism early.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
  ];

  const benefits = [
    'Real-time attendance tracking',
    'Multiple marking methods',
    'Automated absence notifications',
    'Parent portal access',
    'Customizable attendance rules',
    'Leave management system',
    'Integration with result system',
    'Export to Excel/PDF',
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$25',
      students: 'Up to 150 students',
      classes: '10 classes',
    },
    {
      name: 'Professional',
      price: '$69',
      students: 'Up to 750 students',
      classes: '50 classes',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      students: 'Unlimited students',
      classes: 'Unlimited classes',
    },
  ];

  return (
    <main className='min-h-screen pt-32'>
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      <RevealObserver />
      {/* Hero Section */}
      <section className='relative py-24 bg-gradient-to-br from-background via-background to-muted overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl' />
          <div className='absolute bottom-20 right-20 w-72 h-72 bg-indigo-600 rounded-full blur-3xl' />
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className='mb-4 bg-blue-500/10 text-blue-600 border-blue-500/20'>
                <Clock className='w-3 h-3 mr-1' />
                Real-Time Tracking
              </Badge>
              <h1 className='text-5xl sm:text-6xl font-bold mb-6 leading-tight'>
                Attendance{' '}
                <span className='bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent'>
                  Management
                </span>
                <br />
                System
              </h1>
              <p className='text-xl text-muted-foreground mb-8 leading-relaxed'>
                Modern attendance tracking with real-time updates, automated
                reporting, and intelligent analytics. Never miss a beat with our
                comprehensive system.
              </p>
              <div className='flex flex-wrap gap-4'>
                <button
                  disabled
                  className='bg-stone-300 text-stone-500 rounded-full px-8 py-3 font-medium cursor-not-allowed'
                >
                  Coming Soon
                </button>
                <button
                  disabled
                  className='bg-stone-100 text-stone-400 border border-stone-200 rounded-full px-8 py-3 font-medium cursor-not-allowed'
                >
                  Explore Features
                </button>
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
                <img
                  src='https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop'
                  alt='Attendance Management Dashboard'
                  className='object-cover w-full h-full'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6'>
                  <p className='text-white font-medium'>
                    Real-Time Attendance Dashboard
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
              Smart <span className='text-blue-600'>Features</span>
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Advanced tools for efficient attendance management
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
                      className='w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg'
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
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className='object-cover w-full h-full'
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
            className='bg-gradient-to-br from-blue-500/5 to-indigo-600/5 rounded-3xl p-8 md:p-12 mt-32'
          >
            <h3 className='text-3xl font-bold mb-8 text-center'>
              Complete Feature Set
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
              Affordable <span className='text-blue-600'>Plans</span>
            </h2>
            <p className='text-xl text-muted-foreground'>
              Choose the plan that fits your needs
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
                        Recommended
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
                        <span>{plan.classes}</span>
                      </li>
                      <li className='flex items-center gap-2'>
                        <CheckCircle2 className='w-5 h-5 text-blue-600' />
                        <span>Mobile app access</span>
                      </li>
                      <li className='flex items-center gap-2'>
                        <CheckCircle2 className='w-5 h-5 text-blue-600' />
                        <span>Automated reports</span>
                      </li>
                    </ul>
                    <button
                      disabled
                      className='w-full rounded-full bg-stone-200 text-stone-500 py-2 font-medium cursor-not-allowed'
                    >
                      Coming Soon
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-24 bg-gradient-to-r from-blue-500 to-indigo-600 text-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              Modernize Attendance Tracking Today
            </h2>
            <p className='text-xl mb-8 opacity-90 max-w-2xl mx-auto'>
              Join institutions saving time and improving accuracy with our
              smart attendance system
            </p>
            <button
              disabled
              className='bg-white/20 text-white border border-white/30 rounded-full px-8 py-4 font-medium cursor-not-allowed'
            >
              Coming Soon
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
