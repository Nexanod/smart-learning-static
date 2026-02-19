'use client';

import { useEffect } from 'react';
import { CONTACT_INFO } from '@/constants/site';
import { X } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6'>
      {/* Backdrop */}
      <div
        className='absolute inset-0 bg-stone-900/80 backdrop-blur-sm'
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className='relative w-full max-w-5xl bg-stone-50 border-4 border-stone-900 shadow-[12px_12px_0_0_#cc5500] overflow-hidden flex flex-col md:flex-row max-h-[90vh]'>
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 z-10 w-10 h-10 bg-stone-900 text-white flex items-center justify-center hover:bg-[#cc5500] transition-colors hover-target'
        >
          <X size={24} />
        </button>

        {/* Video Side */}
        <div className='w-full md:w-3/5 bg-stone-200 aspect-video md:aspect-auto flex items-center justify-center border-b-4 md:border-b-0 md:border-r-4 border-stone-900'>
          <iframe
            className='w-full h-full'
            src='https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder, user can change
            title='Smart Learning Demo'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>

        {/* Info Side */}
        <div className='w-full md:w-2/5 p-8 overflow-y-auto'>
          <div className='font-mono text-xs text-[#cc5500] tracking-widest mb-4'>
            SYSTEM DEMO
          </div>
          <h2 className='font-display text-3xl font-bold mb-6'>
            Explore Smart Learning
          </h2>

          <div className='space-y-6'>
            <div>
              <h3 className='font-mono text-sm font-bold border-b border-stone-200 pb-2 mb-3'>
                DESCRIPTION
              </h3>
              <p className='text-stone-600 text-sm leading-relaxed'>
                Smart Learning is a next-generation education infrastructure
                platform. Experience our AI-powered paper generation, real-time
                student tracking, and comprehensive analytics dashboard in this
                live demo environment.
              </p>
            </div>

            <div>
              <h3 className='font-mono text-sm font-bold border-b border-stone-200 pb-2 mb-3'>
                TEST THE LIVE SYSTEM
              </h3>
              <div className='bg-white border-2 border-stone-900 p-4 space-y-3'>
                <div>
                  <div className='font-mono text-[10px] text-stone-400'>
                    URL
                  </div>
                  <a
                    href={CONTACT_INFO.demoUrl}
                    target='_blank'
                    className='text-[#cc5500] text-sm break-all hover:underline'
                  >
                    {CONTACT_INFO.demoUrl}
                  </a>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <div className='font-mono text-[10px] text-stone-400'>
                      USERNAME
                    </div>
                    <div className='text-sm font-mono'>{CONTACT_INFO.demoUser}</div>
                  </div>
                  <div>
                    <div className='font-mono text-[10px] text-stone-400'>
                      PASSWORD
                    </div>
                    <div className='text-sm font-mono'>{CONTACT_INFO.demoPass}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='pt-4'>
              <a
                href={CONTACT_INFO.demoUrl}
                target='_blank'
                className='block w-full text-center brutal-border px-6 py-4 bg-stone-900 text-white font-mono text-sm tracking-wider hover:bg-[#cc5500] transition-colors no-underline'
              >
                Launch Demo Console →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
