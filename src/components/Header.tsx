'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, LayoutPanelTop } from 'lucide-react';

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
  const closeMobile = React.useCallback(() => setMobileOpen(false), []);
  const toggleMobile = React.useCallback(() => setMobileOpen(v => !v), []);

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
        'w-full border-b border-border bg-card/90 backdrop-blur supports-[backdrop-filter]:bg-card/70',
        sticky ? 'sticky top-0 z-50' : '',
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
            className='group inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
            aria-label='Smart Learning - Home'
          >
            <span className='relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-primary-foreground shadow-sm ring-1 ring-black/5 transition-transform group-hover:scale-[1.03]'>
              <LayoutPanelTop className='h-4.5 w-4.5' aria-hidden='true' />
              <span className='pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10' />
            </span>
            <span className='flex flex-col leading-tight'>
              <span className='font-display text-base font-extrabold tracking-tight text-foreground'>
                Smart Learning
              </span>
              <span className='text-xs text-muted-foreground'>
                Education reimagined
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className='hidden items-center gap-1 md:flex'
            aria-label='Primary'
            role='navigation'
          >
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className='relative rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
              >
                <span className='relative'>
                  {item.label}
                  <span className='pointer-events-none absolute -bottom-1 left-0 h-0.5 w-0 bg-foreground/80 transition-all duration-200 group-hover:w-full' />
                </span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className='hidden items-center gap-2 md:flex'>
            <Button
              variant='ghost'
              onClick={onLoginClick}
              className='text-sm text-foreground/80 hover:text-foreground'
            >
              Login
            </Button>
            <Button onClick={onGetStartedClick} className='text-sm'>
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
              className='inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
            >
              <Menu className='h-5 w-5' aria-hidden='true' />
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
            'absolute inset-x-0 z-50 origin-top border-b border-border bg-card shadow-sm transition-transform duration-200 ease-out',
            mobileOpen ? 'translate-y-0' : '-translate-y-2',
          )}
        >
          <div className='container mx-auto'>
            <div className='flex flex-col gap-1 py-3'>
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className='rounded-md px-2.5 py-2 text-base font-medium text-foreground/90 transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                >
                  {item.label}
                </Link>
              ))}
              <div className='mt-1 flex items-center gap-2 border-t border-border pt-3'>
                <Button
                  variant='ghost'
                  onClick={() => {
                    closeMobile();
                    onLoginClick?.();
                  }}
                  className='flex-1'
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    closeMobile();
                    onGetStartedClick?.();
                  }}
                  className='flex-1'
                >
                  Get Started
                </Button>
              </div>
              <div className='pb-2' />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
