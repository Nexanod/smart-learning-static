'use client';
import { usePostHog } from '@posthog/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Paper Generation', href: '/paper-generation' },
  { label: 'Students', href: '/student-management', comingSoon: true },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const posthog = usePostHog();

  return (
    <>
      <nav className='fixed w-full top-0 z-50 bg-[#fafaf9]/90 backdrop-blur-md border-b-2 border-stone-900'>
        <div className='bg-[#cc5500] text-white py-2 px-6 text-center text-[10px] md:text-xs font-mono tracking-widest border-b border-stone-900 uppercase relative overflow-hidden group'>
          <div className='absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out' />
          <span className='relative z-10'>
            <span className='inline-block animate-bounce mr-2'>✨</span>
            Limited Time: All premium plans are currently{' '}
            <span className='font-bold underline'>100% free</span>!{' '}
            <a
              href='https://signup.smartlearning.pk'
              className='ml-2 font-black underline hover:text-stone-900 transition-colors'
            >
              Register Now →
            </a>
          </span>
        </div>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          <Link
            href='/'
            className='flex items-center gap-2 hover-target no-underline'
          >
            <img
              src='/logo.svg'
              alt='Smart Learning'
              className='h-10 md:h-12 w-auto'
            />
          </Link>

          <div className='hidden md:flex items-center space-x-8 font-mono text-sm'>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-[#cc5500] transition-colors hover-target no-underline flex items-center gap-2 ${pathname === link.href ? 'text-[#cc5500]' : ''}`}
              >
                {link.label}
                {link.comingSoon && (
                  <span className='px-1.5 py-0.5 bg-stone-900 text-white font-mono text-[8px] tracking-tighter uppercase'>
                    Soon
                  </span>
                )}
              </Link>
            ))}
            <a
              href='https://signup.smartlearning.pk'
              className='brutal-border px-6 py-2 bg-[#cc5500] text-white font-semibold hover-target no-underline'
              onClick={() =>
                posthog.capture('register_clicked', {
                  location: 'navbar_desktop',
                })
              }
            >
              Register
            </a>
          </div>

          <button
            className='md:hidden hover-target z-50'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#fafaf9] z-40 flex-col items-center justify-center space-y-8 font-display text-3xl ${menuOpen ? 'flex' : 'hidden'}`}
      >
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`hover:text-[#cc5500] hover-target no-underline flex items-center gap-4 ${pathname === link.href ? 'text-[#cc5500]' : ''}`}
          >
            {link.label}
            {link.comingSoon && (
              <span className='px-2 py-1 bg-stone-900 text-white font-mono text-xs tracking-widest uppercase'>
                Soon
              </span>
            )}
          </Link>
        ))}
        <a
          href='https://signup.smartlearning.pk'
          onClick={() => {
            setMenuOpen(false);
            posthog.capture('register_clicked', { location: 'navbar_mobile' });
          }}
          className='brutal-border px-8 py-3 bg-[#cc5500] text-white text-xl hover-target no-underline'
        >
          Register
        </a>
      </div>
    </>
  );
}
