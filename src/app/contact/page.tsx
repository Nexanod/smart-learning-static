'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  MessageSquare,
  Clock,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        institution: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@smartlearning.com',
      description: 'Get response within 24 hours',
      gradient: 'from-blue-600 to-blue-800',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM EST',
      gradient: 'from-sky-500 to-blue-700',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: '123 Education Street',
      description: 'Tech City, TC 12345, USA',
      gradient: 'from-blue-500 to-indigo-600',
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
            <Badge className='mb-4 bg-blue-500/10 text-blue-600 border-blue-500/20 hover:bg-blue-500/20 transition-colors'>
              <MessageSquare className='w-3 h-3 mr-1' />
              Get in Touch
            </Badge>
            <h1 className='text-5xl sm:text-6xl font-bold mb-6 leading-tight'>
              Let&apos;s{' '}
              <span className='bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 bg-clip-text text-transparent'>
                Connect
              </span>
            </h1>
            <p className='text-xl text-muted-foreground leading-relaxed'>
              Have questions about Smart Learning? Our team is here to help you
              transform your institution.
            </p>
          </motion.div>

          {/* Contact Form - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='max-w-3xl mx-auto mb-16'
          >
            <Card className='border-2 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10'>
              <CardContent className='p-8'>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className='text-center py-12'
                  >
                    <div className='w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <CheckCircle2 className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-2xl font-bold mb-2'>
                      Message Sent Successfully!
                    </h3>
                    <p className='text-muted-foreground'>
                      Thank you for contacting us. We&apos;ll get back to you
                      within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid sm:grid-cols-2 gap-6'>
                      <div className='space-y-2'>
                        <Label htmlFor='name'>Full Name *</Label>
                        <Input
                          id='name'
                          placeholder='John Doe'
                          value={formData.name}
                          onChange={e =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          className='h-12 focus:ring-blue-500 focus:border-blue-500'
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor='email'>Email Address *</Label>
                        <Input
                          id='email'
                          type='email'
                          placeholder='john@example.com'
                          value={formData.email}
                          onChange={e =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className='h-12 focus:ring-blue-500 focus:border-blue-500'
                        />
                      </div>
                    </div>

                    <div className='grid sm:grid-cols-2 gap-6'>
                      <div className='space-y-2'>
                        <Label htmlFor='phone'>Phone Number</Label>
                        <Input
                          id='phone'
                          type='tel'
                          placeholder='+1 (555) 123-4567'
                          value={formData.phone}
                          onChange={e =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className='h-12 focus:ring-blue-500 focus:border-blue-500'
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor='institution'>Institution Name *</Label>
                        <Input
                          id='institution'
                          placeholder='Your School/College'
                          value={formData.institution}
                          onChange={e =>
                            setFormData({
                              ...formData,
                              institution: e.target.value,
                            })
                          }
                          required
                          className='h-12 focus:ring-blue-500 focus:border-blue-500'
                        />
                      </div>
                    </div>

                    <div className='space-y-2'>
                      <Label htmlFor='message'>Message *</Label>
                      <Textarea
                        id='message'
                        placeholder='Tell us about your requirements...'
                        value={formData.message}
                        onChange={e =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        rows={6}
                        className='resize-none focus:ring-blue-500 focus:border-blue-500'
                      />
                    </div>

                    <Button
                      type='submit'
                      size='lg'
                      className='w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:opacity-90 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/20'
                    >
                      Send Message <Send className='ml-2 w-4 h-4' />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info Cards - Below Form */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Card className='border-2 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 h-full'>
                  <CardContent className='p-6'>
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <info.icon className='w-6 h-6 text-white' />
                    </motion.div>
                    <h3 className='font-bold text-lg mb-1'>{info.title}</h3>
                    <p className='text-foreground font-medium mb-1'>
                      {info.value}
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Card className='bg-gradient-to-br from-blue-500/10 to-sky-500/10 border-2 border-blue-500/20 hover:border-blue-500/30 transition-all duration-500 h-full'>
                <CardContent className='p-6'>
                  <Clock className='w-8 h-8 text-blue-600 mb-3' />
                  <h3 className='font-bold text-lg mb-2'>Business Hours</h3>
                  <div className='space-y-1 text-sm'>
                    <p className='flex justify-between'>
                      <span className='text-muted-foreground'>Mon-Fri:</span>
                      <span className='font-medium'>9AM-6PM</span>
                    </p>
                    <p className='flex justify-between'>
                      <span className='text-muted-foreground'>Saturday:</span>
                      <span className='font-medium'>10AM-4PM</span>
                    </p>
                    <p className='flex justify-between'>
                      <span className='text-muted-foreground'>Sunday:</span>
                      <span className='font-medium'>Closed</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-24 bg-background'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className='overflow-hidden border-2 hover:border-blue-500/30 transition-all duration-500 shadow-xl'>
              <CardContent className='p-0'>
                <div className='aspect-video bg-muted relative'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215!2d-73.98659!3d40.74844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTEuNyJX!5e0!3m2!1sen!2sus!4v1234567890'
                    width='100%'
                    height='100%'
                    style={{ border: 0 }}
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
