import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';
import CustomCursor from '@/components/CustomCursor';
import GrainOverlay from '@/components/GrainOverlay';
import RevealObserver from '@/components/RevealObserver';

const modules = [
  {
    title: 'Enrollment & Admissions',
    desc: 'Streamlined application processing with customizable admission forms, document uploads, and automated status tracking.',
    tags: ['Online Applications', 'Document Vault', 'Auto-notifications'],
  },
  {
    title: 'Communication Hub',
    desc: 'Reach parents and students through SMS, email, WhatsApp, and in-app notifications — all from a single interface.',
    tags: ['Bulk SMS', 'WhatsApp API', 'Email Templates'],
  },
  {
    title: 'Fee Management',
    desc: 'Track tuition, generate invoices, manage installments, and send automated payment reminders.',
    tags: ['Online Payments', 'Installment Plans', 'Receipt Generation'],
  },
  {
    title: 'Academic Records',
    desc: 'Maintain complete academic histories, transcripts, report cards, and progress reports for every student.',
    tags: ['Transcripts', 'Grade Books', 'Progress Reports'],
  },
  {
    title: 'Parent Portal',
    desc: 'Give parents real-time access to attendance, grades, fee status, and school announcements through a branded portal.',
    tags: ['Real-time Updates', 'Custom Branding', 'Mobile Access'],
  },
  {
    title: 'Document Management',
    desc: 'Secure digital storage for student documents — certificates, ID cards, medical records, and transfer letters.',
    tags: ['Cloud Storage', 'Access Control', 'Bulk Upload'],
  },
];

const dashboardItems = [
  { label: 'Total Students', value: '3,847', change: '+12%' },
  { label: 'Attendance Today', value: '96.2%', change: '+1.3%' },
  { label: 'Fee Collection', value: '₹24.5L', change: '+8%' },
  { label: 'Pending Actions', value: '23', change: '-15%' },
];

export default function StudentManagementPage() {
  return (
    <main className='min-h-screen'>
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      <RevealObserver />

      {/* Hero */}
      <section className='relative pt-40 pb-24 overflow-hidden'>
        <div
          className='blob bg-stone-300 w-96 h-96 top-20 -right-20'
          style={{ animationDelay: '-3s' }}
        />
        <div
          className='blob bg-[#cc5500] w-64 h-64 bottom-0 left-10'
          style={{ animationDelay: '-8s', opacity: 0.2 }}
        />
        <div className='max-w-7xl mx-auto px-6 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <div className='font-mono text-sm text-[#cc5500] tracking-widest mb-4 reveal-up'>
                STUDENT MANAGEMENT
              </div>
              <h1
                className='font-display text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight reveal-up'
                style={{ transitionDelay: '0.1s' }}
              >
                The complete
                <br />
                <span className='text-outline italic'>student portal</span>
              </h1>
              <p
                className='text-xl text-stone-600 mt-8 leading-relaxed font-light reveal-up'
                style={{ transitionDelay: '0.2s' }}
              >
                From enrollment to alumni, manage every aspect of the student
                lifecycle with a single, powerful platform.
              </p>
              <div
                className='flex gap-4 mt-8 reveal-up'
                style={{ transitionDelay: '0.3s' }}
              >
                <Link
                  to='/contact'
                  className='brutal-border px-8 py-4 bg-stone-900 text-white font-mono text-sm tracking-wider hover-target no-underline'
                >
                  Request Demo
                </Link>
              </div>
            </div>
            {/* Dashboard Preview */}
            <div className='reveal-up' style={{ transitionDelay: '0.4s' }}>
              <div className='brutal-border bg-stone-100 p-6'>
                <div className='flex justify-between items-center mb-6'>
                  <span className='font-mono text-xs tracking-widest'>
                    DASHBOARD
                  </span>
                  <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  {dashboardItems.map((d, i) => (
                    <div key={i} className='border border-stone-300 p-4'>
                      <div className='font-mono text-xs text-stone-500 mb-1'>
                        {d.label}
                      </div>
                      <div className='font-display text-2xl font-bold'>
                        {d.value}
                      </div>
                      <div
                        className={`font-mono text-xs mt-1 ${d.change.startsWith('+') ? 'text-green-600' : 'text-[#cc5500]'}`}
                      >
                        {d.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className='py-32'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='mb-20 reveal-up'>
            <div className='font-mono text-sm text-[#cc5500] tracking-widest mb-4'>
              MODULES
            </div>
            <h2 className='font-display text-5xl font-bold max-w-3xl'>
              Everything under one roof
            </h2>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {modules.map((m, i) => (
              <div
                key={i}
                className='border-2 border-stone-900 p-8 hover:bg-stone-100 transition-colors reveal-up hover-target'
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <div className='font-mono text-xs text-[#cc5500] tracking-widest mb-3'>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className='font-display text-xl font-bold mb-3'>
                  {m.title}
                </h3>
                <p className='text-stone-600 text-sm leading-relaxed mb-4'>
                  {m.desc}
                </p>
                <div className='flex gap-2 flex-wrap'>
                  {m.tags.map(t => (
                    <span
                      key={t}
                      className='px-3 py-1 border border-stone-300 text-xs font-mono'
                    >
                      {t}
                    </span>
                  ))}
                </div>
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
            Simplify student management today
          </h2>
          <p
            className='text-xl mb-12 opacity-90 font-light reveal-up'
            style={{ transitionDelay: '0.1s' }}
          >
            See how Smart Learning can transform your institution&apos;s
            workflows.
          </p>
          <Link
            to='/contact'
            className='brutal-border inline-block px-8 py-4 bg-stone-900 text-white font-mono text-sm tracking-wider hover-target no-underline reveal-up'
            style={{ transitionDelay: '0.2s' }}
          >
            Get Started
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
