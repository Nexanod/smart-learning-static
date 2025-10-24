'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  Globe,
  Shield,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  UserPlus,
  Database,
  BarChart3,
} from 'lucide-react';

export default function StudentManagementPage() {
  const features = [
    {
      icon: UserPlus,
      title: 'Easy Enrollment',
      description:
        'Streamlined student registration with bulk import and automated profile creation. Onboard hundreds of students in minutes with our intelligent import system that handles data validation and profile generation.',
      image:
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
    },
    {
      icon: MessageSquare,
      title: 'SMS & WhatsApp',
      description:
        'Send notifications, alerts, and updates directly to students and parents via SMS or WhatsApp. Track delivery status and engagement with real-time analytics.',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    },
    {
      icon: Database,
      title: 'Centralized Data',
      description:
        'Store and manage all student information in one secure, accessible location. Advanced search, filtering, and reporting make data management effortless.',
      image:
        'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop',
    },
    {
      icon: Globe,
      title: 'Custom Portals',
      description:
        'Each institution gets a customized subdomain with branded student portals. Full white-label capabilities with your logo, colors, and domain name.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      description:
        'Generate comprehensive reports on student performance, attendance, and engagement. Visual dashboards and exportable reports help you make data-driven decisions.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description:
        'Enterprise-grade security with role-based access and data encryption. GDPR compliant with automated data protection and audit logs.',
      image:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    },
  ];

  const benefits = [
    'Automated student record management',
    'Parent and guardian communication',
    'Bulk SMS/WhatsApp notifications',
    'Custom branded portals per school',
    'Document management system',
    'Fee and payment tracking',
    'Class and section management',
    'Student performance analytics',
  ];

  const plans = [
    {
      name: 'Basic',
      price: '$39',
      students: 'Up to 200 students',
      messages: '500 messages/month',
    },
    {
      name: 'Growth',
      price: '$99',
      students: 'Up to 1000 students',
      messages: '2,500 messages/month',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      students: 'Unlimited students',
      messages: 'Unlimited messages',
    },
  ];

  return (
    <main className='min-h-screen pt-20'>
      {/* Hero Section */}
      <section className='relative py-24 bg-gradient-to-br from-background via-background to-muted overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-20 left-20 w-72 h-72 bg-sky-500 rounded-full blur-3xl' />
          <div className='absolute bottom-20 right-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl' />
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className='mb-4 bg-sky-500/10 text-sky-600 border-sky-500/20'>
                <Users className='w-3 h-3 mr-1' />
                Complete Lifecycle Management
              </Badge>
              <h1 className='text-5xl sm:text-6xl font-bold mb-6 leading-tight'>
                Student{' '}
                <span className='bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent'>
                  Management
                </span>
                <br />
                System
              </h1>
              <p className='text-xl text-muted-foreground mb-8 leading-relaxed'>
                Complete student lifecycle management with modern communication
                features. Connect with students and parents through SMS,
                WhatsApp, and custom portals.
              </p>
              <div className='flex flex-wrap gap-4'>
                <Button
                  asChild
                  size='lg'
                  className='bg-gradient-to-r from-sky-500 to-blue-700 rounded-full px-8'
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
                  src='https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop'
                  alt='Student Management Dashboard'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6'>
                  <p className='text-white font-medium'>
                    Comprehensive Student Portal
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
              Modern <span className='text-sky-600'>Features</span>
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Everything you need to manage students effectively
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
                      className='w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg'
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
                      className='relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-border hover:shadow-sky-500/20'
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
            className='bg-gradient-to-br from-sky-500/5 to-blue-600/5 rounded-3xl p-8 md:p-12 mt-32'
          >
            <h3 className='text-3xl font-bold mb-8 text-center'>
              Key Capabilities
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
                  <CheckCircle2 className='w-5 h-5 text-sky-600 flex-shrink-0' />
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
              Flexible <span className='text-sky-600'>Pricing</span>
            </h2>
            <p className='text-xl text-muted-foreground'>
              Plans that grow with your institution
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
                  className={`text-center p-8 h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${index === 1 ? 'border-sky-600 border-2 shadow-xl scale-105' : 'hover:border-sky-500/30'}`}
                >
                  <CardContent className='p-0'>
                    {index === 1 && (
                      <Badge className='mb-4 bg-sky-600 text-white'>
                        Best Value
                      </Badge>
                    )}
                    <h3 className='text-2xl font-bold mb-2'>{plan.name}</h3>
                    <div className='text-4xl font-bold text-sky-600 mb-6'>
                      {plan.price}
                      {plan.price !== 'Custom' && (
                        <span className='text-lg text-muted-foreground'>
                          /month
                        </span>
                      )}
                    </div>
                    <ul className='space-y-3 mb-8 text-left'>
                      <li className='flex items-center gap-2'>
                        <CheckCircle2 className='w-5 h-5 text-sky-600' />
                        <span>{plan.students}</span>
                      </li>
                      <li className='flex items-center gap-2'>
                        <CheckCircle2 className='w-5 h-5 text-sky-600' />
                        <span>{plan.messages}</span>
                      </li>
                      <li className='flex items-center gap-2'>
                        <CheckCircle2 className='w-5 h-5 text-sky-600' />
                        <span>Custom subdomain</span>
                      </li>
                      <li className='flex items-center gap-2'>
                        <CheckCircle2 className='w-5 h-5 text-sky-600' />
                        <span>Analytics dashboard</span>
                      </li>
                    </ul>
                    <Button
                      asChild
                      className={`w-full rounded-full ${index === 1 ? 'bg-sky-600' : ''}`}
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
      <section className='py-24 bg-gradient-to-r from-sky-500 to-blue-700 text-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              Transform Student Management Today
            </h2>
            <p className='text-xl mb-8 opacity-90 max-w-2xl mx-auto'>
              Join modern institutions using our platform to streamline
              operations and enhance communication
            </p>
            <Button
              asChild
              size='lg'
              className='bg-white text-sky-600 hover:bg-white/90 rounded-full px-8'
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
