'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Floating3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className='absolute inset-0 overflow-hidden pointer-events-none'
    >
      {/* Floating Graduation Cap */}
      <motion.div
        className='absolute top-1/4 right-1/4 w-32 h-32 opacity-20'
        animate={{
          y: [0, -30, 0],
          rotateZ: [0, 5, 0],
          rotateY: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg viewBox='0 0 200 200' className='w-full h-full'>
          <defs>
            <linearGradient
              id='capGradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop offset='0%' stopColor='#2D7FB8' />
              <stop offset='50%' stopColor='#F68E2E' />
              <stop offset='100%' stopColor='#FDB913' />
            </linearGradient>
          </defs>
          {/* Cap top */}
          <path
            d='M 100 60 L 40 80 L 40 90 L 100 110 L 160 90 L 160 80 Z'
            fill='url(#capGradient)'
            opacity='0.8'
          />
          {/* Cap base */}
          <ellipse
            cx='100'
            cy='90'
            rx='60'
            ry='15'
            fill='url(#capGradient)'
            opacity='0.6'
          />
          {/* Tassel */}
          <line
            x1='160'
            y1='85'
            x2='175'
            y2='110'
            stroke='#FDB913'
            strokeWidth='2'
          />
          <circle cx='175' cy='115' r='5' fill='#FDB913' />
        </svg>
      </motion.div>

      {/* Floating Book */}
      <motion.div
        className='absolute bottom-1/3 left-1/4 w-24 h-24 opacity-15'
        animate={{
          y: [0, 25, 0],
          rotateY: [0, 360],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg viewBox='0 0 200 200' className='w-full h-full'>
          <defs>
            <linearGradient
              id='bookGradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop offset='0%' stopColor='#F68E2E' />
              <stop offset='100%' stopColor='#FDB913' />
            </linearGradient>
          </defs>
          {/* Book pages */}
          <rect
            x='60'
            y='70'
            width='80'
            height='60'
            rx='4'
            fill='url(#bookGradient)'
            opacity='0.8'
          />
          {/* Book spine */}
          <rect
            x='55'
            y='70'
            width='10'
            height='60'
            rx='2'
            fill='#2D7FB8'
            opacity='0.9'
          />
          {/* Page lines */}
          <line
            x1='70'
            y1='85'
            x2='130'
            y2='85'
            stroke='#ffffff'
            strokeWidth='1.5'
            opacity='0.5'
          />
          <line
            x1='70'
            y1='95'
            x2='130'
            y2='95'
            stroke='#ffffff'
            strokeWidth='1.5'
            opacity='0.5'
          />
          <line
            x1='70'
            y1='105'
            x2='130'
            y2='105'
            stroke='#ffffff'
            strokeWidth='1.5'
            opacity='0.5'
          />
        </svg>
      </motion.div>

      {/* Abstract Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-2 h-2 rounded-full'
          style={{
            background:
              i % 3 === 0 ? '#2D7FB8' : i % 3 === 1 ? '#F68E2E' : '#FDB913',
            left: `${10 + ((i * 6) % 80)}%`,
            top: `${20 + ((i * 7) % 60)}%`,
            opacity: 0.15,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + (i % 3),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}
