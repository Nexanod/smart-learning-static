import Link from 'next/link';

const socials = [
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <>
        <path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z' />
        <polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02' />
      </>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <>
        <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
        <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
        <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
      </>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
    ),
  },
  {
    name: 'TikTok',
    href: '#',
    icon: <path d='M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5' />,
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <>
        <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
        <rect x='2' y='9' width='4' height='12' />
        <circle cx='4' cy='4' r='2' />
      </>
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer className='bg-stone-900 text-stone-50 pt-20 pb-8 border-t-4 border-[#cc5500]'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid md:grid-cols-4 gap-12 mb-16'>
          <div className='space-y-4'>
            <div className='font-display text-2xl font-bold'>
              Smart<span className='text-[#cc5500]'>.</span>Learning
            </div>
            <p className='text-stone-400 text-sm leading-relaxed'>
              Modern infrastructure for educational institutions. Built with
              precision, designed for impact.
            </p>
          </div>

          <div>
            <h4 className='font-mono text-xs tracking-widest text-stone-500 mb-4'>
              PLATFORM
            </h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/paper-generation'
                  className='hover:text-[#cc5500] transition-colors hover-target no-underline text-stone-50'
                >
                  Paper Generation
                </Link>
              </li>
              <li>
                <Link
                  href='/student-management'
                  className='hover:text-[#cc5500] transition-colors hover-target no-underline text-stone-50'
                >
                  Student Management
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='hover:text-[#cc5500] transition-colors hover-target no-underline text-stone-50'
                >
                  Attendance
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='hover:text-[#cc5500] transition-colors hover-target no-underline text-stone-50'
                >
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-mono text-xs tracking-widest text-stone-500 mb-4'>
              COMPANY
            </h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/about'
                  className='hover:text-[#cc5500] transition-colors hover-target no-underline text-stone-50'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='hover:text-[#cc5500] transition-colors hover-target no-underline text-stone-50'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-mono text-xs tracking-widest text-stone-500 mb-4'>
              CONNECT
            </h4>
            <div className='flex flex-wrap gap-3'>
              {socials.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className='w-10 h-10 border border-stone-700 flex items-center justify-center hover:border-[#cc5500] hover:text-[#cc5500] transition-colors hover-target'
                >
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 font-mono'>
          <p>© 2026 Smart Learning Systems. All rights reserved.</p>
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <a
              href='#'
              className='hover:text-white transition-colors no-underline text-stone-500'
            >
              Privacy Policy
            </a>
            <a
              href='#'
              className='hover:text-white transition-colors no-underline text-stone-500'
            >
              Terms of Service
            </a>
            <a
              href='#'
              className='hover:text-white transition-colors no-underline text-stone-500'
            >
              SLA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
