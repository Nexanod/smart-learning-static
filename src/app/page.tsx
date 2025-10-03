'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import SocialProofSection from '@/components/ui/SocialProofSection';
import Footer from '@/components/Footer';

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  // Working button handlers
  const handleStartTrial = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Free trial started! Check your email for next steps.');
    } catch (error) {
      toast.error('Failed to start trial. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleWatchDemo = () => {
    toast.info('Demo video will open in a new tab');
    // In a real app, this would open a video modal or redirect to demo page
    window.open('https://youtube.com/@smartlearning', '_blank');
  };

  const handleLogin = () => {
    toast.info('Redirecting to login page...');
    // In a real app, this would redirect to login page
    window.location.href = '/login';
  };

  const handleGetStarted = () => {
    toast.info('Redirecting to signup page...');
    // In a real app, this would redirect to signup page
    window.location.href = '/signup';
  };

  const handleEmailContact = () => {
    window.location.href =
      'mailto:hello@smartlearning.com?subject=Interested in Smart Learning&body=Hi, I would like to learn more about Smart Learning platform.';
  };

  const handleExploreFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className='min-h-dvh bg-background text-foreground'>
      <Header onLoginClick={handleLogin} onGetStartedClick={handleGetStarted} />

      <div className='container mx-auto px-6 sm:px-8'>
        <HeroSection
          className='mt-8 sm:mt-10 md:mt-12'
          onStartTrial={handleStartTrial}
          onWatchDemo={handleWatchDemo}
        />
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
                  <button
                    onClick={handleEmailContact}
                    className='inline-flex items-center justify-center rounded-md bg-gradient-to-r from-education-indigo via-education-blue to-education-purple hover:from-education-purple hover:to-education-pink px-4 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                  >
                    Email Us
                  </button>
                  <button
                    onClick={handleExploreFeatures}
                    className='inline-flex items-center justify-center rounded-md border border-education-orange bg-gradient-to-r from-education-orange/10 to-education-pink/10 hover:from-education-orange/20 hover:to-education-pink/20 px-4 py-2 text-sm font-semibold text-education-orange hover:border-education-pink transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                  >
                    Explore Features
                  </button>
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
