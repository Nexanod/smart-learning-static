'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Menu,
  LayoutPanelTop,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Github,
} from 'lucide-react';

interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
  onLoginClick?: () => void;
  onGetStartedClick?: () => void;
  navItems?: { label: string; href: string }[];
  sticky?: boolean;
}

export default function Header({
  className,
  style,
  onLoginClick,
  onGetStartedClick,
  navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  sticky = true,
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const closeMobile = React.useCallback(() => setMobileOpen(false), []);
  const toggleMobile = React.useCallback(() => setMobileOpen(v => !v), []);

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

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobile();
    };
    if (mobileOpen) {
      document.addEventListener('keydown', onEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onEsc);
      document.body.style.overflow = '';
    };
  }, [mobileOpen, closeMobile]);

  return (
    <header
      className={cn(
        'w-full border-b border-border bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-500 transform-3d perspective-1000',
        sticky ? 'sticky top-0 z-50' : '',
        scrolled
          ? 'shadow-3d-lg bg-gradient-to-r from-education-indigo/5 via-education-blue/5 to-education-purple/5'
          : '',
        className,
      )}
      style={style}
      role='banner'
    >
      <div className='container mx-auto'>
        <div className='flex items-center justify-between gap-4 py-3'>
          {/* Brand */}
          <Link
            href='/'
            className='group inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring card-3d translate-z-10 hover:translate-z-20 transition-all duration-300'
            aria-label='Smart Learning - Home'
          >
            <span className='relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-education-indigo via-education-blue to-education-purple text-white shadow-3d ring-2 ring-education-blue/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-3d-lg group-hover:rotate-3'>
              <LayoutPanelTop
                className='h-5 w-5 animate-pulse'
                aria-hidden='true'
              />
              <span className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20' />
              <div className='absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </span>
            <span className='flex flex-col leading-tight'>
              <span className='font-display text-base font-extrabold tracking-tight bg-gradient-to-r from-education-indigo via-education-blue to-education-purple bg-clip-text text-transparent group-hover:from-education-purple group-hover:to-education-pink transition-all duration-300'>
                Smart Learning
              </span>
              <span className='text-xs text-education-cyan font-medium group-hover:text-education-purple transition-colors duration-300'>
                Education reimagined
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className='hidden items-center gap-2 md:flex'
            aria-label='Primary'
            role='navigation'
          >
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className='group relative rounded-lg px-4 py-2 text-sm font-medium text-foreground/80 transition-all duration-300 hover:text-education-purple hover:bg-gradient-to-r hover:from-education-purple/10 hover:to-education-pink/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring card-3d translate-z-5 hover:translate-z-15 hover:shadow-3d'
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className='relative'>
                  {item.label}
                  <span className='pointer-events-none absolute -bottom-1 left-1/2 h-0.5 w-0 bg-gradient-to-r from-education-purple to-education-pink transition-all duration-300 group-hover:left-0 group-hover:w-full' />
                </span>
                <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-education-purple/5 to-education-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </Link>
            ))}
          </nav>

          {/* Social Links - Desktop */}
          <div className='hidden items-center gap-1 lg:flex'>
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  className={`group p-2.5 rounded-xl text-muted-foreground transition-all duration-300 hover:scale-110 hover:shadow-3d card-3d translate-z-5 hover:translate-z-15 ${social.color}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Icon className='h-4 w-4 group-hover:animate-bounce' />
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className='hidden items-center gap-3 md:flex'>
            <Button
              variant='ghost'
              onClick={onLoginClick}
              className='text-sm text-foreground/80 hover:text-education-purple hover:bg-gradient-to-r hover:from-education-blue/10 hover:to-education-purple/10 transition-all duration-300 card-3d translate-z-5 hover:translate-z-15 hover:shadow-3d'
            >
              Login
            </Button>
            <Button
              onClick={onGetStartedClick}
              className='text-sm bg-gradient-to-r from-education-indigo via-education-blue to-education-purple hover:from-education-purple hover:to-education-pink shadow-3d hover:shadow-3d-lg transition-all duration-300 hover:scale-105 text-white font-semibold card-3d translate-z-10 hover:translate-z-20 animate-glow-3d'
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              type='button'
              aria-controls='mobile-nav'
              aria-expanded={mobileOpen}
              aria-label='Open menu'
              onClick={toggleMobile}
              className='inline-flex h-10 w-10 items-center justify-center rounded-xl border border-education-blue/30 bg-gradient-to-br from-education-indigo/10 to-education-purple/10 text-education-purple shadow-3d transition-all duration-300 hover:bg-gradient-to-br hover:from-education-purple/20 hover:to-education-pink/20 hover:scale-110 hover:shadow-3d-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring card-3d translate-z-10 hover:translate-z-20'
            >
              <Menu className='h-5 w-5 animate-pulse' aria-hidden='true' />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay + Panel */}
      <div
        className={cn(
          'md:hidden',
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        {/* Overlay */}
        <div
          className={cn(
            'fixed inset-0 z-40 bg-foreground/10 transition-opacity',
            mobileOpen ? 'opacity-100' : 'opacity-0',
          )}
          onClick={closeMobile}
          aria-hidden='true'
        />
        {/* Panel */}
        <div
          id='mobile-nav'
          role='dialog'
          aria-modal='true'
          className={cn(
            'absolute inset-x-0 z-50 origin-top border-b border-education-blue/30 bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-md shadow-3d-lg transition-all duration-300 ease-out card-3d',
            mobileOpen ? 'translate-y-0' : '-translate-y-2',
          )}
        >
          <div className='container mx-auto'>
            <div className='flex flex-col gap-1 py-3'>
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className='group rounded-lg px-4 py-3 text-base font-medium text-foreground/90 transition-all duration-300 hover:bg-gradient-to-r hover:from-education-purple/10 hover:to-education-pink/10 hover:text-education-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring card-3d translate-z-5 hover:translate-z-15 hover:shadow-3d'
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className='relative'>
                    {item.label}
                    <span className='pointer-events-none absolute -bottom-1 left-1/2 h-0.5 w-0 bg-gradient-to-r from-education-purple to-education-pink transition-all duration-300 group-hover:left-0 group-hover:w-full' />
                  </span>
                </Link>
              ))}
              <div className='mt-2 flex items-center gap-3 border-t border-education-blue/30 pt-4'>
                <Button
                  variant='ghost'
                  onClick={() => {
                    closeMobile();
                    onLoginClick?.();
                  }}
                  className='flex-1 text-foreground/80 hover:text-education-purple hover:bg-gradient-to-r hover:from-education-blue/10 hover:to-education-purple/10 transition-all duration-300 card-3d translate-z-5 hover:translate-z-15 hover:shadow-3d'
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    closeMobile();
                    onGetStartedClick?.();
                  }}
                  className='flex-1 bg-gradient-to-r from-education-indigo via-education-blue to-education-purple hover:from-education-purple hover:to-education-pink shadow-3d hover:shadow-3d-lg transition-all duration-300 hover:scale-105 text-white font-semibold card-3d translate-z-10 hover:translate-z-20 animate-glow-3d'
                >
                  Get Started
                </Button>
              </div>

              {/* Social Links - Mobile */}
              <div className='mt-4 flex items-center justify-center gap-2 border-t border-education-blue/30 pt-4'>
                <span className='text-sm font-medium text-education-indigo mr-2'>
                  Follow us:
                </span>
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={social.label}
                      className={`group p-2.5 rounded-xl text-muted-foreground transition-all duration-300 hover:scale-110 hover:shadow-3d card-3d translate-z-5 hover:translate-z-15 ${social.color}`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <Icon className='h-4 w-4 group-hover:animate-bounce' />
                    </a>
                  );
                })}
              </div>
              <div className='pb-2' />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
