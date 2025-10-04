'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import FloatingShapes from '@/components/v2/FloatingShapes';
import GraphNodeVisualization from '@/components/v2/GraphNodeVisualization';
import FeatureCard from '@/components/v2/FeatureCard';
import './globals.css';

import {
  ArrowRight,
  Sparkles,
  Users,
  Brain,
  MessageSquare,
  BarChart3,
  Calendar,
  Zap,
} from 'lucide-react';

export default function Home() {
  return (
    <div className='min-h-screen overflow-hidden'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
        <FloatingShapes />

        <div className='relative z-10 max-w-6xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='mb-6'
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
              className='inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-8'
            >
              <Sparkles className='w-4 h-4 text-primary' />
              <span className='text-sm font-medium'>
                Modernizing Education with AI
              </span>
            </motion.div>

            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight'>
              <span className='gradient-text'>Smart Learning</span>
              <br />
              <span className='text-foreground'>Intelligent Education</span>
              <br />
              <span className='text-foreground'>System</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className='text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed'
          >
            Eliminate physical labor and transform your institution with a fully
            digital, AI-powered education platform. From paper generation to
            student management—all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
          >
            <Button
              size='lg'
              className='group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30'
            >
              Get Started
              <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </Button>

            <Button
              size='lg'
              variant='outline'
              className='px-8 py-6 text-lg rounded-full border-2 hover:border-primary hover:bg-primary/5 transition-all duration-300'
            >
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className='relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
              Powerful <span className='gradient-text'>Features</span>
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Everything you need to run a modern educational institution
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <FeatureCard
              icon={<Zap className='w-12 h-12 text-primary' />}
              title='Paper Generation'
              tagline='One Click Paper Generation'
              description='Create comprehensive exam papers instantly with our AI-powered generation system. Customize difficulty, topics, and formats with ease.'
              delay={0}
            />

            <FeatureCard
              icon={<Users className='w-12 h-12 text-secondary' />}
              title='Student Management'
              tagline='Complete Student Lifecycle'
              description='Manage student data, enrollment, profiles, and academic records in one unified, intelligent system.'
              delay={0.1}
            />

            <FeatureCard
              icon={<Brain className='w-12 h-12 text-accent' />}
              title='AI Assistant'
              tagline='Smart Automation'
              description='Leverage AI to automate repetitive tasks, generate insights, and provide intelligent recommendations for educators.'
              delay={0.2}
            />

            <FeatureCard
              icon={<MessageSquare className='w-12 h-12 text-primary' />}
              title='SMS Notifications'
              tagline='WhatsApp & SMS Alerts'
              description='Keep parents and students informed with automated notifications via WhatsApp and SMS integration.'
              delay={0.3}
            />

            <FeatureCard
              icon={<Calendar className='w-12 h-12 text-secondary' />}
              title='Attendance Management'
              tagline='Coming Soon'
              description='Track and manage student attendance with automated reporting, analytics, and parent notifications.'
              delay={0.4}
            />

            <FeatureCard
              icon={<BarChart3 className='w-12 h-12 text-accent' />}
              title='Result Management'
              tagline='Coming Soon'
              description='Streamline result processing, generate report cards, and provide detailed performance analytics automatically.'
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Graph Node Section */}
      <section className='relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
              <span className='gradient-text'>Connected Ecosystem</span>
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Discover how our modules work together seamlessly
            </p>
          </motion.div>

          <GraphNodeVisualization />
        </div>
      </section>

      {/* B2B Section */}
      <section className='relative py-24 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-5xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-3xl p-12 text-center'
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              Built for <span className='gradient-text'>Institutions</span>
            </h2>
            <p className='text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed'>
              Our B2B platform provides each school or company with a
              customizable website on its own subdomain. Brand it your way,
              configure features to match your needs, and scale effortlessly.
            </p>
            <div className='flex flex-wrap gap-6 justify-center items-center'>
              <div className='bg-card/50 backdrop-blur-sm border border-border rounded-2xl px-6 py-4'>
                <p className='text-3xl font-bold gradient-text'>
                  Custom Domains
                </p>
              </div>
              <div className='bg-card/50 backdrop-blur-sm border border-border rounded-2xl px-6 py-4'>
                <p className='text-3xl font-bold gradient-text'>White Label</p>
              </div>
              <div className='bg-card/50 backdrop-blur-sm border border-border rounded-2xl px-6 py-4'>
                <p className='text-3xl font-bold gradient-text'>Scalable</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              Ready to Transform Your{' '}
              <span className='gradient-text'>Education System?</span>
            </h2>
            <p className='text-xl text-muted-foreground mb-10 max-w-2xl mx-auto'>
              Join the future of education. Get started with Smart Learning
              today.
            </p>

            <Button
              size='lg'
              className='group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30'
            >
              Start Free Trial
              <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className='relative py-12 px-4 sm:px-6 lg:px-8 border-t border-border'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid md:grid-cols-4 gap-8 mb-8'>
            <div className='col-span-2'>
              <h3 className='text-2xl font-bold gradient-text mb-3'>
                Smart Learning
              </h3>
              <p className='text-muted-foreground'>
                Modernizing education with intelligent, digital solutions.
              </p>
            </div>

            <div>
              <h4 className='font-semibold mb-3'>Product</h4>
              <ul className='space-y-2 text-muted-foreground'>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    Features
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    Demo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='font-semibold mb-3'>Company</h4>
              <ul className='space-y-2 text-muted-foreground'>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    About
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    Contact
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary transition-colors'>
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='pt-8 border-t border-border text-center text-muted-foreground'>
            <p>&copy; 2024 Smart Learning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
