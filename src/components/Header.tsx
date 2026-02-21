import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productItems = [
    { label: 'Paper Generation', href: '/paper-generation' },
    { label: 'Student Management', href: '/student-management' },
    { label: 'Attendance Management', href: '/attendance-management' },
  ];

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <Link to='/' className='flex items-center group'>
            <div className='relative w-12 h-12 transition-transform duration-300 group-hover:scale-110'>
              <img
                src='https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-1761231526372.png?width=8000&height=8000&resize=contain'
                alt='Smart Learning Logo'
                className='w-full h-full object-contain'
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-1'>
            {navItems.map(item => (
              <Link
                key={item.href}
                to={item.href}
                className='px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all duration-300'
              >
                {item.label}
              </Link>
            ))}

            {/* Products Dropdown - Fixed to be clickable */}
            <div className='relative'>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                onMouseEnter={() => setIsProductsOpen(true)}
                className='px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all duration-300 flex items-center gap-1'
              >
                Products
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isProductsOpen && (
                <div
                  className='absolute top-full left-0 pt-2 w-56'
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <div className='bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl overflow-hidden'>
                    {productItems.map(item => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className='block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-blue-500/10 hover:border-l-2 hover:border-blue-500 transition-all duration-200'
                        onClick={() => setIsProductsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className='hidden lg:flex items-center space-x-4'>
            <Button
              asChild
              className='bg-gradient-to-r from-blue-600 to-blue-800 hover:opacity-90 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/20'
            >
              <Link to='/contact'>Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='lg:hidden p-2 rounded-lg hover:bg-accent transition-colors'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-in slide-in-from-top-5 duration-300'>
          <nav className='container mx-auto px-4 py-6 flex flex-col space-y-2'>
            {navItems.map(item => (
              <Link
                key={item.href}
                to={item.href}
                className='px-4 py-3 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all duration-300'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Products Section */}
            <div className='px-4 py-2 text-xs font-semibold text-muted-foreground'>
              Products
            </div>
            {productItems.map(item => (
              <Link
                key={item.href}
                to={item.href}
                className='px-4 py-3 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all duration-300 pl-8'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Button
              asChild
              className='w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:opacity-90 text-white rounded-full mt-4 shadow-lg shadow-blue-500/20'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link to='/contact'>Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
