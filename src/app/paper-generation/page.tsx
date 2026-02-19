'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';
import CustomCursor from '@/components/CustomCursor';
import GrainOverlay from '@/components/GrainOverlay';
import RevealObserver from '@/components/RevealObserver';
import { 
  LayoutGrid, 
  Activity, 
  FileText, 
  CheckCircle2, 
  Settings, 
  Book 
} from 'lucide-react';

const steps = [
  {
    title: 'Define Parameters',
    desc: 'Set subject, grade level, difficulty distribution, question types, and total marks. The system adapts to your curriculum standards.',
  },
  {
    title: 'AI Generates Questions',
    desc: 'Our AI engine analyzes your question bank and curriculum to generate balanced, non-repetitive questions with proper difficulty spread.',
  },
  {
    title: 'Review & Customize',
    desc: 'Review the generated paper in a live editor. Swap questions, adjust marks, reorder sections — full control at every step.',
  },
  {
    title: 'Export & Distribute',
    desc: 'Export as PDF, Word, or directly print. Auto-generate answer keys and marking schemes alongside the paper.',
  },
];

const capabilities = [
  {
    title: 'Question Bank Management',
    desc: "Organize thousands of questions by subject, topic, difficulty, and Bloom's taxonomy level.",
    icon: <LayoutGrid size={24} />,
  },
  {
    title: 'Difficulty Balancing',
    desc: 'AI ensures proper distribution across easy, medium, and hard questions based on your specifications.',
    icon: <Activity size={24} />,
  },
  {
    title: 'Multiple Formats',
    desc: 'MCQs, short answer, long answer, true/false, matching, fill-in-the-blanks — all in one paper.',
    icon: <FileText size={24} />,
  },
  {
    title: 'Auto Answer Keys',
    desc: 'Marking schemes and answer keys generated automatically with configurable partial marking rules.',
    icon: <CheckCircle2 size={24} />,
  },
  {
    title: 'Variant Generation',
    desc: 'Generate multiple variants of the same paper with shuffled questions to prevent cheating.',
    icon: <Settings size={24} />,
  },
  {
    title: 'Template Library',
    desc: 'Pre-built templates for board exams, unit tests, quizzes, and practice worksheets.',
    icon: <Book size={24} />,
  },
];

export default function PaperGenerationPage() {
  return (
    <main className='min-h-screen'>
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      <RevealObserver />

      {/* Hero */}
      <section className='relative pt-40 pb-24 overflow-hidden'>
        <div
          className='blob bg-[#cc5500] w-96 h-96 top-10 -left-32'
          style={{ opacity: 0.3 }}
        />
        <div
          className='blob bg-orange-200 w-72 h-72 bottom-0 right-0'
          style={{ animationDelay: '-7s' }}
        />
        <div className='max-w-7xl mx-auto px-6 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <div className='font-mono text-sm text-[#cc5500] tracking-widest mb-4 reveal-up'>
                PAPER GENERATION
              </div>
              <h1
                className='font-display text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight reveal-up'
                style={{ transitionDelay: '0.1s' }}
              >
                Exams created in
                <br />
                <span className='text-outline italic'>seconds</span>, not hours
              </h1>
              <p
                className='text-xl text-stone-600 mt-8 leading-relaxed font-light reveal-up'
                style={{ transitionDelay: '0.2s' }}
              >
                AI-powered paper generation that analyzes your curriculum,
                balances difficulty, and produces standards-compliant papers
                instantly.
              </p>
              <div
                className='flex gap-4 mt-8 reveal-up'
                style={{ transitionDelay: '0.3s' }}
              >
                <Link
                  href='/contact'
                  className='brutal-border px-8 py-4 bg-[#cc5500] text-white font-mono text-sm tracking-wider hover-target no-underline'
                >
                  Try Paper Gen
                </Link>
                <Link
                  href='/about'
                  className='px-8 py-4 border-b-2 border-stone-900 font-mono text-sm tracking-wider hover:text-[#cc5500] transition-colors hover-target no-underline'
                >
                  Learn More →
                </Link>
              </div>
            </div>
            <div className='reveal-up' style={{ transitionDelay: '0.4s' }}>
              <div className='relative'>
                <div className='absolute -inset-4 bg-[#cc5500] rounded-sm -rotate-2' />
                <div className='relative brutal-border bg-stone-100 p-8 space-y-4'>
                  <div className='flex justify-between items-center font-mono text-xs'>
                    <span>PAPER GENERATOR</span>
                    <span className='text-[#cc5500]'>● LIVE</span>
                  </div>
                  <div className='h-px bg-stone-300' />
                  <div className='space-y-3'>
                    <div className='flex justify-between font-mono text-sm'>
                      <span className='text-stone-500'>Subject</span>
                      <span>Mathematics</span>
                    </div>
                    <div className='flex justify-between font-mono text-sm'>
                      <span className='text-stone-500'>Grade</span>
                      <span>10th</span>
                    </div>
                    <div className='flex justify-between font-mono text-sm'>
                      <span className='text-stone-500'>Total Marks</span>
                      <span>100</span>
                    </div>
                    <div className='flex justify-between font-mono text-sm'>
                      <span className='text-stone-500'>Sections</span>
                      <span>4</span>
                    </div>
                  </div>
                  <div className='h-px bg-stone-300' />
                  <div className='flex justify-between items-center'>
                    <span className='font-mono text-xs text-stone-500'>
                      Generation time
                    </span>
                    <span className='font-display text-2xl font-bold text-[#cc5500]'>
                      12s
                    </span>
                  </div>
                  <div className='h-2 bg-stone-200'>
                    <div className='h-full bg-[#cc5500] w-[85%] transition-all duration-1000' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className='py-32 bg-stone-900 text-stone-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-20 reveal-up'>
            <div className='font-mono text-sm text-[#cc5500] tracking-widest mb-4'>
              WORKFLOW
            </div>
            <h2 className='font-display text-5xl font-bold text-stone-50'>
              From parameters to paper in four steps
            </h2>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {steps.map((s, i) => (
              <div
                key={i}
                className='border border-stone-700 p-8 hover:border-[#cc5500] transition-colors reveal-up hover-target'
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className='font-mono text-3xl font-bold text-stone-700 mb-4'>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className='font-display text-xl font-bold mb-3 text-stone-50'>
                  {s.title}
                </h3>
                <p className='text-stone-400 text-sm leading-relaxed'>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className='py-32'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='mb-20 reveal-up'>
            <div className='font-mono text-sm text-[#cc5500] tracking-widest mb-4'>
              CAPABILITIES
            </div>
            <h2 className='font-display text-5xl font-bold max-w-2xl'>
              Everything you need for exam creation
            </h2>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {capabilities.map((c, i) => (
              <div
                key={i}
                className='border-2 border-stone-900 p-8 hover:bg-stone-100 transition-colors reveal-up hover-target'
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <div className='w-12 h-12 border border-stone-300 flex items-center justify-center mb-6 text-[#cc5500]'>
                  {c.icon}
                </div>
                <h3 className='font-display text-xl font-bold mb-3'>
                  {c.title}
                </h3>
                <p className='text-stone-600 text-sm leading-relaxed'>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-32 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[#cc5500] -skew-y-3 origin-top-left' />
        <div className='max-w-4xl mx-auto px-6 relative z-10 text-center text-white'>
          <h2 className='font-display text-5xl md:text-6xl font-bold mb-6 reveal-up text-white'>
            Ready to generate your first paper?
          </h2>
          <p
            className='text-xl mb-12 opacity-90 font-light reveal-up'
            style={{ transitionDelay: '0.1s' }}
          >
            Set up your question bank and generate exam papers in minutes.
          </p>
          <Link
            href='/contact'
            className='brutal-border inline-block px-8 py-4 bg-stone-900 text-white font-mono text-sm tracking-wider hover-target no-underline reveal-up'
            style={{ transitionDelay: '0.2s' }}
          >
            Schedule a Demo
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
