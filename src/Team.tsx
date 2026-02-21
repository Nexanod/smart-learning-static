import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Linkedin,
  Twitter,
  Mail,
  Users,
  Award,
  Target,
  Heart,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';
import CustomCursor from '@/components/CustomCursor';
import GrainOverlay from '@/components/GrainOverlay';
import RevealObserver from '@/components/RevealObserver';

export default function TeamPage() {
  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Founder & CEO',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      bio: 'Former Dean of Education at MIT with 15+ years in EdTech. Passionate about transforming education through technology.',
      linkedin: '#',
      twitter: '#',
      email: 'sarah@smartlearning.com',
    },
    {
      name: 'Michael Chen',
      role: 'Co-Founder & CTO',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Full-stack architect with expertise in AI/ML. Previously led engineering teams at Google Education.',
      linkedin: '#',
      twitter: '#',
      email: 'michael@smartlearning.com',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      bio: 'Product visionary with 10 years designing education platforms. Former Product Lead at Coursera.',
      linkedin: '#',
      twitter: '#',
      email: 'emily@smartlearning.com',
    },
    {
      name: 'David Kumar',
      role: 'Head of AI & Innovation',
      image:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
      bio: 'AI researcher specializing in NLP and education technology. PhD in Computer Science from Stanford.',
      linkedin: '#',
      twitter: '#',
      email: 'david@smartlearning.com',
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Customer Success',
      image:
        'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=400&fit=crop',
      bio: 'Customer advocate ensuring institutions get maximum value. 12 years in SaaS customer success.',
      linkedin: '#',
      twitter: '#',
      email: 'lisa@smartlearning.com',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description:
        "We're committed to making quality education accessible and efficient for all institutions.",
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'We maintain the highest standards in our products and customer service.',
    },
    {
      icon: Heart,
      title: 'Impact-Focused',
      description:
        'Every feature we build aims to improve the lives of educators and students.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'We work closely with educators to understand and solve real problems.',
    },
  ];

  return (
    <main className='min-h-screen pt-20'>
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      <RevealObserver />

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
            className='text-center max-w-3xl mx-auto'
          >
            <Badge className='mb-4 bg-blue-500/10 text-blue-600 border-blue-500/20'>
              <Users className='w-3 h-3 mr-1' />
              Our Team
            </Badge>
            <h1 className='text-5xl sm:text-6xl font-bold mb-6 leading-tight'>
              Meet the{' '}
              <span className='bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 bg-clip-text text-transparent'>
                Minds
              </span>{' '}
              Behind Smart Learning
            </h1>
            <p className='text-xl text-muted-foreground leading-relaxed'>
              A diverse team of educators, technologists, and innovators working
              together to transform education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className='py-24 bg-background'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className='group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-blue-500/30 overflow-hidden'>
                  <CardContent className='p-0'>
                    <div className='relative aspect-square overflow-hidden bg-muted'>
                      <img
                        src={member.image}
                        alt={member.name}
                        className='object-cover w-full h-full group-hover:scale-110 transition-transform duration-500'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                      {/* Social Links */}
                      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0'>
                        <motion.a
                          href={member.linkedin}
                          className='w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors'
                          onClick={e => e.preventDefault()}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin className='w-5 h-5 text-blue-600' />
                        </motion.a>
                        <motion.a
                          href={member.twitter}
                          className='w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors'
                          onClick={e => e.preventDefault()}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Twitter className='w-5 h-5 text-blue-600' />
                        </motion.a>
                        <motion.a
                          href={`mailto:${member.email}`}
                          className='w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors'
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Mail className='w-5 h-5 text-blue-600' />
                        </motion.a>
                      </div>
                    </div>

                    <div className='p-6'>
                      <h3 className='text-xl font-bold mb-1'>{member.name}</h3>
                      <p className='text-sm font-medium text-sky-600 mb-3'>
                        {member.role}
                      </p>
                      <p className='text-sm text-muted-foreground leading-relaxed'>
                        {member.bio}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className='text-blue-600'>Values</span>
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className='h-full text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-2 hover:border-sky-500/30'>
                  <CardContent className='p-6'>
                    <motion.div
                      className='w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center mx-auto mb-4'
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <value.icon className='w-7 h-7 text-white' />
                    </motion.div>
                    <h3 className='text-xl font-bold mb-2'>{value.title}</h3>
                    <p className='text-muted-foreground text-sm leading-relaxed'>
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className='py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center max-w-3xl mx-auto'
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              Join Our Team
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              We&apos;re always looking for talented individuals who share our
              passion for transforming education.
            </p>
            <Button
              asChild
              size='lg'
              className='bg-white text-blue-600 hover:bg-white/90 rounded-full px-8'
            >
              <a href='mailto:careers@smartlearning.com'>View Open Positions</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
