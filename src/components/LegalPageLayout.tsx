import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';
import CustomCursor from '@/components/CustomCursor';
import GrainOverlay from '@/components/GrainOverlay';
import RevealObserver from '@/components/RevealObserver';

type LegalPageLayoutProps = {
  label: string;
  title: string;
  children: React.ReactNode;
};

export default function LegalPageLayout({
  label,
  title,
  children,
}: LegalPageLayoutProps) {
  return (
    <main className='min-h-screen'>
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      <RevealObserver />

      <section className='relative pt-40 pb-16 overflow-hidden'>
        <div className='blob bg-orange-300 w-80 h-80 top-10 -left-20' />
        <div className='max-w-7xl mx-auto px-6 relative z-10'>
          <div className='font-mono text-sm text-[#cc5500] tracking-widest mb-4 reveal-up'>
            {label}
          </div>
          <h1
            className='font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight max-w-4xl reveal-up'
            style={{ transitionDelay: '0.1s' }}
          >
            {title}
          </h1>
        </div>
      </section>

      <section className='pb-32'>
        <div className='max-w-3xl mx-auto px-6'>
          <div className='prose prose-stone max-w-none font-mono text-sm leading-relaxed space-y-8'>
            {children}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
