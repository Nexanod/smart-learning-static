import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';
import CustomCursor from '@/components/CustomCursor';
import GrainOverlay from '@/components/GrainOverlay';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className='min-h-screen flex flex-col'>
      <CustomCursor />
      <GrainOverlay />
      <Navbar />

      <section className='relative flex-1 flex items-center justify-center pt-32 pb-24 overflow-hidden'>
        <div className='blob bg-orange-300 w-80 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50' />
        <div className='max-w-7xl mx-auto px-6 relative z-10 text-center'>
          <div className='font-mono text-sm text-[#cc5500] tracking-widest mb-4'>
            ERROR 404
          </div>
          <h1 className='font-display text-7xl md:text-9xl font-bold leading-[0.9] tracking-tight text-stone-900'>
            404
          </h1>
          <p className='font-display text-2xl md:text-3xl font-bold mt-4 text-stone-700'>
            Page not found
          </p>
          <p className='text-stone-600 max-w-md mx-auto mt-4 font-mono text-sm'>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center mt-10'>
            <Link
              to='/'
              className='brutal-border inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#cc5500] text-white font-mono text-sm tracking-wider hover-target no-underline'
            >
              <Home size={18} /> Back to Home
            </Link>
            <button
              type='button'
              onClick={() => window.history.back()}
              className='brutal-border inline-flex items-center justify-center gap-2 px-8 py-4 bg-stone-100 text-stone-900 font-mono text-sm tracking-wider hover-target border-2 border-stone-900'
            >
              <ArrowLeft size={18} /> Go Back
            </button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
