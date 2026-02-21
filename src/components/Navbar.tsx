import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Paper Generation', href: '/paper-generation' },
  { label: 'Students', href: '/student-management' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <nav className='fixed w-full top-0 z-50 bg-[#fafaf9]/90 backdrop-blur-md border-b-2 border-stone-900'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          <Link
            to='/'
            className='font-display text-2xl font-bold tracking-tight hover-target no-underline'
          >
            Smart<span className='text-[#cc5500]'>.</span>Learning
          </Link>

          <div className='hidden md:flex items-center space-x-8 font-mono text-sm'>
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`hover:text-[#cc5500] transition-colors hover-target no-underline ${pathname === link.href ? 'text-[#cc5500]' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to='/contact'
              className='brutal-border px-6 py-2 bg-[#cc5500] text-white font-semibold hover-target no-underline'
            >
              Get Access
            </Link>
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
            to={link.href}
            onClick={() => setMenuOpen(false)}
            className={`hover:text-[#cc5500] hover-target no-underline ${pathname === link.href ? 'text-[#cc5500]' : ''}`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to='/contact'
          onClick={() => setMenuOpen(false)}
          className='brutal-border px-8 py-3 bg-[#cc5500] text-white text-xl hover-target no-underline'
        >
          Get Access
        </Link>
      </div>
    </>
  );
}
