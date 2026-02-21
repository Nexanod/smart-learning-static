import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '@/constants/site';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const socials = [
  {
    name: 'YouTube',
    href: SOCIAL_LINKS.youtube,
    icon: (
      <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
        <path d='M23.498 6.186c-.28-.1.528-.433.84-.716-.316-.282-.647-.487-1.048-.627C21.492 4.14 12 4.14 12 4.14s-9.492 0-11.29.503c-.4.14-.731.345-1.048.627-.312.283-.487.616-.716.84-.13.18-.34.52-.34.52s-.51 2.146-.51 4.292v2.016c0 2.146.51 4.292.51 4.292s.21.34.34.52c.229.224.404.557.716.84.316.282.647.487 1.048.627 1.798.503 11.29.503 11.29.503s9.492 0 11.29-.503c.4-.14.731-.345 1.048-.627.312-.283.487-.616.716-.84.13-.18.34-.52.34-.52s.51-2.146.51-4.292V10.48c0-2.146-.51-4.294-.51-4.294s-.21-.34-.34-.52zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: SOCIAL_LINKS.instagram,
    icon: <Instagram size={18} />,
  },
  {
    name: 'Facebook',
    href: SOCIAL_LINKS.facebook,
    icon: <Facebook size={18} />,
  },
  {
    name: 'Reddit',
    href: SOCIAL_LINKS.reddit,
    icon: (
      <svg width='18' height='18' viewBox='0 0 192 192' fill='currentColor'>
        <path d='m33.067 111.226 5.826 1.435a6 6 0 0 0-3.978-7.143l-1.848 5.708Zm17.548-25.068-4.728 3.694a6 6 0 0 0 8.341 1.096l-3.613-4.79Zm90.77 0-3.613 4.79a6 6 0 0 0 8.341-1.096l-4.728-3.694Zm17.548 25.068-1.848-5.708a6 6 0 0 0-3.978 7.143l5.826-1.435ZM96 174.001c18.846 0 36.138-5.722 48.855-15.259C157.573 149.203 166 135.568 166 120.001h-12c0 10.943-5.9 21.307-16.345 29.141-10.447 7.835-25.155 12.859-41.655 12.859v12Zm-70-54c0 15.567 8.427 29.202 21.145 38.741 12.717 9.537 30.01 15.259 48.855 15.259v-12c-16.5 0-31.208-5.024-41.655-12.859C43.9 141.308 38 130.944 38 120.001H26Zm1.241-10.21A42.616 42.616 0 0 0 26 120.001h12c0-2.505.306-4.956.893-7.34l-11.652-2.87ZM16 96.001c0 9.793 6.394 18.076 15.219 20.933l3.696-11.416A10.007 10.007 0 0 1 28 96.001H16Zm22-22c-12.15 0-22 9.85-22 22h12c0-5.523 4.477-10 10-10v-12Zm17.343 8.463C51.326 77.324 45.049 74 38 74v12c3.2 0 6.047 1.496 7.887 3.851l9.456-7.388ZM96 66c-18.916 0-36.268 5.764-48.998 15.367l7.226 9.58C64.682 83.063 79.438 78 96 78V66Zm48.998 15.367C132.268 71.765 114.916 66 96 66v12c16.563 0 31.318 5.062 41.772 12.947l7.226-9.58Zm1.115 8.484a9.972 9.972 0 0 1 7.887-3.85v-12c-7.05 0-13.326 3.322-17.343 8.463l9.456 7.388Zm7.887-3.85c5.523 0 10 4.477 10 10h12c0-12.15-9.85-22-22-22v12Zm10 10c0 4.438-2.895 8.215-6.915 9.517l3.696 11.416c8.825-2.857 15.219-11.14 15.219-20.933h-12Zm2 24a42.63 42.63 0 0 0-1.241-10.21l-11.652 2.87c.587 2.384.893 4.835.893 7.34h12Z' />
        <circle cx='68' cy='110.001' r='12' />
        <circle cx='124' cy='110.001' r='12' />
        <path
          fill='none'
          stroke='currentColor'
          strokeWidth='12'
          strokeLinecap='round'
          d='M120 138.001s-8 6-24 6-24-6-24-6'
        />
        <circle
          cx='146'
          cy='36.001'
          r='12'
          fill='none'
          stroke='currentColor'
          strokeWidth='12'
        />
        <path
          fillRule='evenodd'
          d='M107.177 22.118a6 6 0 0 0-7.028 4.553l-10 44a6 6 0 1 0 11.702 2.66l8.704-38.3 24.074 4.815A11.985 11.985 0 0 1 134 36c0-3.036 1.127-5.808 2.986-7.922l-29.809-5.961Z'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: SOCIAL_LINKS.twitter,
    icon: (
      <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
        <path d='M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: SOCIAL_LINKS.tiktok,
    icon: (
      <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
        <path d='M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: SOCIAL_LINKS.linkedin,
    icon: <Linkedin size={18} />,
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
                  to='/paper-generation'
                  className='hover:text-[#cc5500] transition-colors hover-target no-underline text-stone-50'
                >
                  Paper Generation
                </Link>
              </li>
              <li>
                <Link
                  to='/student-management'
                  className='hover:text-[#cc5500] transition-colors hover-target no-underline text-stone-50'
                >
                  Student Management
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='hover:text-[#cc5500] transition-colors hover-target no-underline text-stone-50'
                >
                  Attendance
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
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
                  to='/about'
                  className='hover:text-[#cc5500] transition-colors hover-target no-underline text-stone-50'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
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
                  {s.icon}
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
