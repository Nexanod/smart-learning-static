import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import SocialProofSection from '@/components/ui/SocialProofSection';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className='min-h-dvh bg-background text-foreground'>
      <Header />

      <div className='container mx-auto px-6 sm:px-8'>
        <HeroSection className='mt-8 sm:mt-10 md:mt-12' />
      </div>

      <div id='features' className='scroll-mt-20'>
        <FeaturesSection />
      </div>

      <div id='benefits' className='scroll-mt-20'>
        <BenefitsSection className='py-12 sm:py-16 md:py-20' />
      </div>

      <div className='container mx-auto px-6 sm:px-8'>
        <div className='my-6' />
        <SocialProofSection className='mt-2' />
      </div>

      <section id='about' className='scroll-mt-20'>
        <div className='container mx-auto px-6 sm:px-8 py-14 sm:py-16 md:py-20'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight'>
              About Smart Learning
            </h2>
            <p className='mt-4 text-base sm:text-lg text-muted-foreground'>
              Smart Learning is an education technology platform that
              streamlines teaching, modernizes administration, and personalizes
              learning with AI-assisted tools. We help institutions transition
              from paper-based workflows to secure, digital-first systems that
              improve outcomes and reduce overhead.
            </p>
          </div>
        </div>
      </section>

      <section id='contact' className='scroll-mt-20'>
        <div className='container mx-auto px-6 sm:px-8 pb-14 sm:pb-16 md:pb-20'>
          <div className='mx-auto max-w-5xl rounded-2xl border border-border bg-card p-6 sm:p-8'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
              <div className='md:col-span-2'>
                <h3 className='text-xl sm:text-2xl font-semibold'>
                  Ready to transform your institution?
                </h3>
                <p className='mt-2 text-sm sm:text-base text-muted-foreground'>
                  Speak with our team to see how Smart Learning can fit your
                  needs. We’ll walk you through features, integrations, and
                  deployment options.
                </p>
              </div>
              <div className='flex items-start md:items-center'>
                <div className='flex flex-col gap-3 md:ms-auto'>
                  <a
                    href='mailto:hello@smartlearning.com'
                    className='inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                  >
                    Email Us
                  </a>
                  <a
                    href='#features'
                    className='inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                  >
                    Explore Features
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
