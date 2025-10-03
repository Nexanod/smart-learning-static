'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  LayoutPanelTop,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Github,
  ArrowRight,
  Sparkles,
  Cpu,
  Zap,
  Target,
  Rocket,
  Brain,
  Globe,
  Lightbulb,
  GraduationCap,
  BookOpen,
  Users,
  TrendingUp,
} from 'lucide-react';

interface FooterProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function Footer({ className, style }: FooterProps) {
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  // Social media links with colors
  const socialLinks = [
    {
      icon: Twitter,
      href: 'https://twitter.com/smartlearning',
      label: 'Twitter',
      color: 'hover:text-blue-400 hover:bg-blue-50',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/company/smartlearning',
      label: 'LinkedIn',
      color: 'hover:text-blue-600 hover:bg-blue-50',
    },
    {
      icon: Youtube,
      href: 'https://youtube.com/@smartlearning',
      label: 'YouTube',
      color: 'hover:text-red-500 hover:bg-red-50',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/smartlearning',
      label: 'Instagram',
      color: 'hover:text-pink-500 hover:bg-pink-50',
    },
    {
      icon: Github,
      href: 'https://github.com/smartlearning',
      label: 'GitHub',
      color: 'hover:text-gray-800 hover:bg-gray-50',
    },
  ];

  // Footer sections
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Demo', href: '#demo' },
        { label: 'API', href: '#api' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#docs' },
        { label: 'Tutorials', href: '#tutorials' },
        { label: 'Blog', href: '#blog' },
        { label: 'Support', href: '#support' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Careers', href: '#careers' },
        { label: 'Press', href: '#press' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Cookie Policy', href: '#cookies' },
        { label: 'GDPR', href: '#gdpr' },
      ],
    },
  ];

  // Contact info
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@smartlearning.com',
      href: 'mailto:hello@smartlearning.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Education St, Learning City, LC 12345',
      href: '#',
    },
  ];

  // Intersection Observer for animations
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const footerElement = document.getElementById('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <footer
      id='footer'
      className={cn(
        'relative w-full bg-gradient-to-br from-background via-secondary/30 to-background border-t border-education-blue/20 transform-3d perspective-2000',
        className,
      )}
      style={style}
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-3d-gradient opacity-30' />

      {/* Floating Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-education-indigo/20 to-education-blue/20 rounded-full blur-xl animate-float-3d' />
        <div
          className='absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-education-purple/20 to-education-pink/20 rounded-full blur-lg animate-float-3d'
          style={{ animationDelay: '1s' }}
        />
        <div
          className='absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-education-green/20 to-education-orange/20 rounded-full blur-md animate-float-3d'
          style={{ animationDelay: '2s' }}
        />
        <div
          className='absolute bottom-10 right-1/3 w-14 h-14 bg-gradient-to-br from-education-cyan/20 to-education-blue/20 rounded-full blur-lg animate-float-3d'
          style={{ animationDelay: '3s' }}
        />
      </div>

      <div className='relative z-10'>
        {/* Main Footer Content */}
        <div className='container mx-auto px-4 py-12 sm:px-6 sm:py-16'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-12'>
            {/* Brand Section */}
            <div className='lg:col-span-4'>
              <div
                className={`transition-all duration-1000 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
              >
                {/* Logo */}
                <Link
                  href='/'
                  className='group inline-flex items-center gap-3 mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring card-3d translate-z-10 hover:translate-z-20 transition-all duration-300'
                  aria-label='Smart Learning - Home'
                >
                  <span className='relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-education-indigo via-education-blue to-education-purple text-white shadow-3d ring-2 ring-education-blue/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-3d-lg group-hover:rotate-3'>
                    <LayoutPanelTop
                      className='h-6 w-6 animate-pulse'
                      aria-hidden='true'
                    />
                    <span className='pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20' />
                    <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  </span>
                  <div className='flex flex-col'>
                    <span className='font-display text-lg font-extrabold tracking-tight bg-gradient-to-r from-education-indigo via-education-blue to-education-purple bg-clip-text text-transparent group-hover:from-education-purple group-hover:to-education-pink transition-all duration-300'>
                      Smart Learning
                    </span>
                    <span className='text-sm text-education-cyan font-medium group-hover:text-education-purple transition-colors duration-300'>
                      Education reimagined
                    </span>
                  </div>
                </Link>

                {/* Description */}
                <p className='text-sm text-muted-foreground mb-6 max-w-sm leading-relaxed'>
                  Transform education with AI-powered digital learning.
                  Eliminate physical labor and embrace intelligent workflows
                  that make teaching and learning frictionless.
                </p>

                {/* Contact Info */}
                <div className='space-y-3'>
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={contact.label}
                        href={contact.href}
                        className={`group flex items-center gap-3 text-sm text-muted-foreground hover:text-education-purple transition-all duration-300 card-3d translate-z-5 hover:translate-z-15 hover:shadow-3d`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-education-indigo/10 to-education-purple/10 text-education-indigo group-hover:from-education-purple/20 group-hover:to-education-pink/20 group-hover:text-education-purple transition-all duration-300'>
                          <Icon className='h-4 w-4' />
                        </div>
                        <div>
                          <div className='font-medium'>{contact.label}</div>
                          <div className='text-xs text-muted-foreground group-hover:text-education-purple/80'>
                            {contact.value}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className='lg:col-span-8'>
              <div
                className={`grid grid-cols-2 gap-8 sm:grid-cols-4 transition-all duration-1000 delay-200 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
              >
                {footerSections.map((section, sectionIndex) => (
                  <div key={section.title} className='space-y-4'>
                    <h3 className='text-sm font-semibold bg-gradient-to-r from-education-indigo to-education-purple bg-clip-text text-transparent'>
                      {section.title}
                    </h3>
                    <ul className='space-y-3'>
                      {section.links.map((link, linkIndex) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className={`group text-sm text-muted-foreground hover:text-education-purple transition-all duration-300 card-3d translate-z-5 hover:translate-z-15 hover:shadow-3d flex items-center gap-2`}
                            onMouseEnter={() => setHoveredLink(link.href)}
                            onMouseLeave={() => setHoveredLink(null)}
                            style={{
                              animationDelay: `${sectionIndex * 100 + linkIndex * 50}ms`,
                            }}
                          >
                            <span className='relative'>
                              {link.label}
                              <span className='pointer-events-none absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-education-purple to-education-pink transition-all duration-300 group-hover:w-full' />
                            </span>
                            <ArrowRight className='h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300' />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links & Newsletter */}
          <div
            className={`mt-12 pt-8 border-t border-education-blue/20 transition-all duration-1000 delay-400 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <div className='flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between'>
              {/* Social Links */}
              <div className='space-y-4'>
                <h3 className='text-sm font-semibold bg-gradient-to-r from-education-indigo to-education-purple bg-clip-text text-transparent'>
                  Follow Us
                </h3>
                <div className='flex items-center gap-2'>
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={social.label}
                        className={`group p-3 rounded-xl text-muted-foreground transition-all duration-300 hover:scale-110 hover:shadow-3d card-3d translate-z-5 hover:translate-z-15 ${social.color}`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <Icon className='h-5 w-5 group-hover:animate-bounce' />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className='space-y-4'>
                <h3 className='text-sm font-semibold bg-gradient-to-r from-education-indigo to-education-purple bg-clip-text text-transparent'>
                  Stay Updated
                </h3>
                <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                  <div className='relative'>
                    <input
                      type='email'
                      placeholder='Enter your email'
                      className='w-full sm:w-80 px-4 py-3 rounded-xl border border-education-blue/30 bg-gradient-to-r from-background/50 to-background/30 backdrop-blur-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-education-purple/50 focus:border-education-purple/50 transition-all duration-300 card-3d translate-z-5'
                    />
                    <Mail className='absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
                  </div>
                  <button className='inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-education-indigo via-education-blue to-education-purple hover:from-education-purple hover:to-education-pink text-white text-sm font-semibold shadow-3d hover:shadow-3d-lg transition-all duration-300 hover:scale-105 card-3d translate-z-10 hover:translate-z-20 animate-glow-3d'>
                    Subscribe
                    <ArrowRight className='h-4 w-4' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t border-education-blue/20 bg-gradient-to-r from-education-indigo/5 via-education-blue/5 to-education-purple/5 transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className='container mx-auto px-4 py-6 sm:px-6'>
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
              {/* Copyright */}
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <span>© 2024 Smart Learning. All rights reserved.</span>
                <div className='hidden sm:flex items-center gap-1'>
                  <div className='w-1 h-1 bg-education-purple rounded-full animate-pulse' />
                  <div
                    className='w-1 h-1 bg-education-blue rounded-full animate-pulse'
                    style={{ animationDelay: '0.5s' }}
                  />
                  <div
                    className='w-1 h-1 bg-education-pink rounded-full animate-pulse'
                    style={{ animationDelay: '1s' }}
                  />
                </div>
              </div>

              {/* Additional Links */}
              <div className='flex items-center gap-6 text-sm'>
                <Link
                  href='#privacy'
                  className='text-muted-foreground hover:text-education-purple transition-colors duration-300'
                >
                  Privacy
                </Link>
                <Link
                  href='#terms'
                  className='text-muted-foreground hover:text-education-purple transition-colors duration-300'
                >
                  Terms
                </Link>
                <Link
                  href='#cookies'
                  className='text-muted-foreground hover:text-education-purple transition-colors duration-300'
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
