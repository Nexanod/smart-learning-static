'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Users, Brain } from 'lucide-react';

export default function GraphNodeVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Control when each connection appears (0 to 1 based on scroll)
  const connection1Progress = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const connection2Progress = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const connection3Progress = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  // Control info panel opacity
  const info1Opacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const info2Opacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const info3Opacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);

  const moduleScales = [
    useTransform(connection1Progress, [0, 1], [1, 1.05]),
    useTransform(connection2Progress, [0, 1], [1, 1.05]),
    useTransform(connection3Progress, [0, 1], [1, 1.05]),
  ];

  const modules = [
    {
      id: 'paper',
      title: 'Paper Generation',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/50',
      shadowColor: 'shadow-blue-500/30',
      description:
        'AI-powered exam paper generation with customizable difficulty levels, topic selection, and instant formatting.',
      features: [
        'One-click generation',
        'Custom templates',
        'Smart question bank',
        'Auto-grading ready',
      ],
    },
    {
      id: 'student',
      title: 'Student Management',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/50',
      shadowColor: 'shadow-purple-500/30',
      description:
        'Comprehensive student lifecycle management with enrollment tracking, profile management, and academic records.',
      features: [
        'Digital profiles',
        'Attendance tracking',
        'Performance analytics',
        'Parent portal',
      ],
    },
    {
      id: 'ai',
      title: 'AI Assistant',
      icon: Brain,
      color: 'from-emerald-500 to-green-500',
      borderColor: 'border-emerald-500/50',
      shadowColor: 'shadow-emerald-500/30',
      description:
        'Intelligent automation for educators with smart recommendations, task automation, and predictive insights.',
      features: [
        'Smart suggestions',
        'Auto-scheduling',
        'Predictive analytics',
        '24/7 support',
      ],
    },
  ];

  return (
    <div ref={containerRef} className='relative w-full min-h-[1200px] py-20'>
      <div className='sticky top-20 w-full h-[600px] flex items-center justify-center'>
        <div className='relative w-full max-w-6xl h-full px-4'>
          {/* SVG for connection lines */}
          <svg
            className='absolute inset-0 w-full h-full pointer-events-none'
            style={{ zIndex: 1 }}
          >
            <defs>
              <linearGradient
                id='gradient1'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='100%'
              >
                <stop
                  offset='0%'
                  stopColor='rgb(59, 130, 246)'
                  stopOpacity='0.6'
                />
                <stop
                  offset='100%'
                  stopColor='rgb(34, 211, 238)'
                  stopOpacity='0.6'
                />
              </linearGradient>
              <linearGradient
                id='gradient2'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='100%'
              >
                <stop
                  offset='0%'
                  stopColor='rgb(168, 85, 247)'
                  stopOpacity='0.6'
                />
                <stop
                  offset='100%'
                  stopColor='rgb(236, 72, 153)'
                  stopOpacity='0.6'
                />
              </linearGradient>
              <linearGradient
                id='gradient3'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='100%'
              >
                <stop
                  offset='0%'
                  stopColor='rgb(16, 185, 129)'
                  stopOpacity='0.6'
                />
                <stop
                  offset='100%'
                  stopColor='rgb(34, 197, 94)'
                  stopOpacity='0.6'
                />
              </linearGradient>
            </defs>

            {/* Connection line 1 - Main to Paper Generation */}
            <motion.line
              x1='50%'
              y1='25%'
              x2='25%'
              y2='70%'
              stroke='url(#gradient1)'
              strokeWidth='3'
              strokeLinecap='round'
              strokeDasharray='10 5'
              initial={{ pathLength: 0, opacity: 0 }}
              style={{
                pathLength: connection1Progress,
                opacity: connection1Progress,
              }}
            />

            {/* Connection line 2 - Main to Student Management */}
            <motion.line
              x1='50%'
              y1='25%'
              x2='50%'
              y2='70%'
              stroke='url(#gradient2)'
              strokeWidth='3'
              strokeLinecap='round'
              strokeDasharray='10 5'
              initial={{ pathLength: 0, opacity: 0 }}
              style={{
                pathLength: connection2Progress,
                opacity: connection2Progress,
              }}
            />

            {/* Connection line 3 - Main to AI Assistant */}
            <motion.line
              x1='50%'
              y1='25%'
              x2='75%'
              y2='70%'
              stroke='url(#gradient3)'
              strokeWidth='3'
              strokeLinecap='round'
              strokeDasharray='10 5'
              initial={{ pathLength: 0, opacity: 0 }}
              style={{
                pathLength: connection3Progress,
                opacity: connection3Progress,
              }}
            />
          </svg>

          {/* Main Node - Smart Learning */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className='absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/2 z-10'
          >
            <div className='relative'>
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(99, 102, 241, 0.3)',
                    '0 0 40px rgba(99, 102, 241, 0.5)',
                    '0 0 20px rgba(99, 102, 241, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className='bg-gradient-to-br from-primary via-secondary to-accent backdrop-blur-xl border-2 border-primary/50 rounded-3xl px-12 py-8 shadow-2xl'
              >
                <h3 className='text-3xl font-bold text-white text-center whitespace-nowrap'>
                  Smart Learning
                </h3>
              </motion.div>
            </div>
          </motion.div>

          {/* Child Nodes */}
          <div className='absolute left-0 top-[65%] w-full flex justify-around items-start px-8'>
            {modules.map((module, index) => {
              const Icon = module.icon;
              const progressMap = [
                connection1Progress,
                connection2Progress,
                connection3Progress,
              ];
              const opacityMap = [info1Opacity, info2Opacity, info3Opacity];

              return (
                <div
                  key={module.id}
                  className='flex flex-col items-center gap-4'
                  style={{ flex: 1, maxWidth: '250px' }}
                >
                  {/* Node */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className='relative z-10'
                  >
                    <motion.div
                      style={{
                        scale: moduleScales[index],
                      }}
                      className={`bg-gradient-to-br ${module.color} backdrop-blur-xl border-2 ${module.borderColor} rounded-2xl p-8 shadow-xl ${module.shadowColor} transition-shadow duration-300`}
                    >
                      <div className='flex flex-col items-center gap-3'>
                        <div className='bg-white/20 backdrop-blur-sm rounded-full p-4'>
                          <Icon className='w-8 h-8 text-white' />
                        </div>
                        <h4 className='text-lg font-semibold text-white text-center'>
                          {module.title}
                        </h4>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Info Panel Below Node */}
                  <motion.div
                    style={{ opacity: opacityMap[index] }}
                    className='w-full'
                  >
                    <div className='bg-card/80 backdrop-blur-xl border border-border rounded-xl p-4 shadow-lg'>
                      <p className='text-sm text-muted-foreground mb-3 leading-relaxed'>
                        {module.description}
                      </p>
                      <ul className='space-y-1.5'>
                        {module.features.map((feature, i) => (
                          <li
                            key={i}
                            className='text-xs text-foreground flex items-center gap-2'
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${module.color}`}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 1 }}
            style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
            className='absolute bottom-8 left-1/2 -translate-x-1/2 text-center'
          >
            <p className='text-sm text-muted-foreground mb-2'>
              Scroll to explore connections
            </p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className='w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex items-start justify-center p-2'
            >
              <motion.div className='w-1.5 h-1.5 bg-primary rounded-full' />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
