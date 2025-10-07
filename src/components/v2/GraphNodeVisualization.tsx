'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Zap, Users, Brain, CheckCircle2 } from 'lucide-react';

export default function GraphNodeVisualization() {
  const [activeModule, setActiveModule] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const modules = [
    {
      id: 'paper',
      title: 'Paper Generation',
      tagline: 'One Click Paper Generation',
      icon: Zap,
      gradient: 'from-purple-500 to-purple-600',
      nodeGradient: 'from-purple-500 to-purple-600',
      glowColor: 'rgba(168, 85, 247, 0.6)',
      description:
        'Transform your exam creation process with AI-powered paper generation. Create comprehensive, well-structured exam papers in seconds.',
      features: [
        'AI-powered question generation with customizable difficulty',
        'Smart topic selection from your curriculum',
        'Multiple paper formats and templates',
        'Automatic answer key generation',
        'Export to PDF, Word, or print-ready formats',
        'Question bank integration and reuse',
      ],
    },
    {
      id: 'student',
      title: 'Student Management',
      tagline: 'Complete Student Lifecycle',
      icon: Users,
      gradient: 'from-cyan-500 to-blue-500',
      nodeGradient: 'from-cyan-500 to-cyan-600',
      glowColor: 'rgba(34, 211, 238, 0.6)',
      description:
        'Manage your entire student database with intelligent automation. From enrollment to graduation, track every detail seamlessly.',
      features: [
        'Digital student profiles with photo and documents',
        'Enrollment and admission management',
        'Academic records and transcript generation',
        'Parent portal with real-time updates',
        'Automated SMS and WhatsApp notifications',
        'Fee management and payment tracking',
      ],
    },
    {
      id: 'ai',
      title: 'AI Assistant',
      tagline: 'Smart Automation',
      icon: Brain,
      gradient: 'from-violet-500 to-purple-500',
      nodeGradient: 'from-violet-500 to-violet-600',
      glowColor: 'rgba(139, 92, 246, 0.6)',
      description:
        'Let AI handle repetitive tasks while you focus on teaching. Get intelligent recommendations and automated workflows.',
      features: [
        'Smart scheduling and timetable optimization',
        'Automated grading and feedback generation',
        'Predictive analytics for student performance',
        'Natural language query interface',
        'Task automation and workflow management',
        '24/7 intelligent support for educators',
      ],
    },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const moduleIndex = Math.floor(scrollTop / containerHeight);
      setActiveModule(Math.min(moduleIndex, modules.length - 1));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [modules.length]);

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {/* Internal scrollable container */}
      <div
        ref={scrollContainerRef}
        className='h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide'
      >
        {modules.map((module, index) => {
          const Icon = module.icon;
          const isActive = activeModule >= index;

          return (
            <div
              key={module.id}
              className='w-full h-screen snap-start flex items-center justify-center'
            >
              <div className='w-full max-w-7xl mx-auto px-8 flex items-center justify-between gap-12'>
                {/* LEFT SIDE - Details Panel with Smooth Replacement Animation */}
                <div className='w-1/2 relative'>
                  {modules.map((mod, idx) => {
                    const ModIcon = mod.icon;
                    const shouldShow = activeModule === idx;

                    return (
                      <motion.div
                        key={mod.id}
                        initial={{ opacity: 0, x: -50, scale: 0.95 }}
                        animate={{
                          opacity: shouldShow ? 1 : 0,
                          x: shouldShow ? 0 : -50,
                          scale: shouldShow ? 1 : 0.95,
                          pointerEvents: shouldShow ? 'auto' : 'none',
                        }}
                        transition={{
                          duration: 0.6,
                          ease: [0.4, 0, 0.2, 1],
                          opacity: { duration: 0.4 },
                        }}
                        className={`${shouldShow ? 'relative' : 'absolute inset-0'}`}
                      >
                        <div className='bg-card/90 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-2xl'>
                          <div className='flex items-start gap-4 mb-6'>
                            <div
                              className={`bg-gradient-to-br ${mod.gradient} rounded-2xl p-4 shadow-lg`}
                            >
                              <ModIcon className='w-8 h-8 text-white' />
                            </div>
                            <div className='flex-1'>
                              <h3 className='text-3xl font-bold mb-1'>
                                {mod.title}
                              </h3>
                              <p
                                className={`text-sm font-medium bg-gradient-to-r ${mod.gradient} bg-clip-text text-transparent`}
                              >
                                {mod.tagline}
                              </p>
                            </div>
                          </div>

                          <p className='text-muted-foreground text-lg leading-relaxed mb-6'>
                            {mod.description}
                          </p>

                          <div className='space-y-3'>
                            <h4 className='text-sm font-semibold text-foreground/60 uppercase tracking-wider'>
                              Key Features
                            </h4>
                            {mod.features.map((feature, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                  opacity: shouldShow ? 1 : 0,
                                  x: shouldShow ? 0 : -20,
                                }}
                                transition={{
                                  duration: 0.4,
                                  delay: shouldShow ? 0.1 * i : 0,
                                }}
                                className='flex items-start gap-3'
                              >
                                <CheckCircle2
                                  className={`w-5 h-5 mt-0.5 text-transparent bg-gradient-to-r ${mod.gradient} bg-clip-text flex-shrink-0`}
                                />
                                <p className='text-sm text-foreground leading-relaxed'>
                                  {feature}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* RIGHT SIDE - Graph Visualization */}
                <div className='relative w-1/2 h-[600px] flex items-center justify-center'>
                  <svg
                    className='absolute inset-0 w-full h-full pointer-events-none'
                    viewBox='0 0 100 100'
                    preserveAspectRatio='none'
                    style={{ zIndex: 1 }}
                  >
                    <defs>
                      {modules.map((mod, idx) => (
                        <linearGradient
                          key={idx}
                          id={`lineGrad${idx}`}
                          x1='0%'
                          y1='0%'
                          x2='0%'
                          y2='100%'
                        >
                          <stop
                            offset='0%'
                            stopColor='rgb(168, 85, 247)'
                            stopOpacity='0.8'
                          />
                          <stop
                            offset='100%'
                            stopColor='rgb(147, 51, 234)'
                            stopOpacity='0.8'
                          />
                        </linearGradient>
                      ))}
                    </defs>

                    {/* Orthogonal Connection Lines - Vertical → Horizontal → Vertical */}
                    {modules.map((mod, idx) => {
                      // Parent node center at 18%, with node height ~10%, so bottom is at ~25%
                      const parentX = 50;
                      const parentBottomY = 25;

                      // Middle point Y coordinate (between parent and children)
                      const middleY = 40;

                      // Child nodes at top-[55%], so their top edge is at 55%
                      const childXPositions = [10, 45, 80];
                      const childTopY = 55;

                      const childX = childXPositions[idx];

                      // Create orthogonal path: down → horizontal → down
                      const pathData = `
                        M ${parentX} ${parentBottomY}
                        L ${parentX} ${middleY}
                        L ${childX} ${middleY}
                        L ${childX} ${childTopY}
                      `;

                      const isLineActive = activeModule >= idx;

                      return (
                        <motion.path
                          key={mod.id}
                          d={pathData}
                          stroke={`url(#lineGrad${idx})`}
                          strokeWidth='3'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          fill='none'
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{
                            pathLength: isLineActive ? 1 : 0,
                            opacity: isLineActive ? 1 : 0,
                          }}
                          transition={{ duration: 1, ease: 'easeInOut' }}
                        />
                      );
                    })}
                  </svg>

                  {/* Parent Node */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    className='absolute left-1/2 top-[18%] -translate-x-1/2 -translate-y-1/2 z-10'
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 30px rgba(168, 85, 247, 0.4)',
                          '0 0 50px rgba(168, 85, 247, 0.6)',
                          '0 0 30px rgba(168, 85, 247, 0.4)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className='bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 backdrop-blur-xl border-2 border-purple-400/50 rounded-3xl px-10 py-6 shadow-2xl'
                    >
                      <h3 className='text-2xl font-bold text-white text-center whitespace-nowrap'>
                        Smart Learning
                      </h3>
                    </motion.div>
                  </motion.div>

                  {/* Child Nodes - All three visible with different colors and active highlighting */}
                  <div className='absolute top-[55%] w-full flex justify-between items-start'>
                    {modules.map((mod, idx) => {
                      const ModIcon = mod.icon;
                      const positions = [
                        'left-[10%]',
                        'left-[45%]',
                        'left-[80%]',
                      ];
                      const isConnected = activeModule >= idx;
                      const isCurrentlyActive = activeModule === idx;

                      return (
                        <motion.div
                          key={mod.id}
                          initial={{ y: 30, opacity: 0.5 }}
                          animate={{
                            y: 0,
                            opacity: 1,
                            scale: isConnected
                              ? isCurrentlyActive
                                ? 1.1
                                : 1
                              : 0.9,
                          }}
                          transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                          className={`absolute ${positions[idx]} -translate-x-1/2`}
                        >
                          <motion.div
                            className={`bg-gradient-to-br ${mod.nodeGradient} backdrop-blur-xl border-2 rounded-2xl p-6 shadow-xl transition-all duration-300 z-20 relative`}
                            animate={{
                              borderColor: isCurrentlyActive
                                ? 'rgba(255, 255, 255, 0.8)'
                                : isConnected
                                  ? 'rgba(255, 255, 255, 0.5)'
                                  : 'rgba(255, 255, 255, 0.2)',
                              boxShadow: isCurrentlyActive
                                ? [
                                    `0 0 20px ${mod.glowColor}`,
                                    `0 0 40px ${mod.glowColor}`,
                                    `0 0 20px ${mod.glowColor}`,
                                  ]
                                : isConnected
                                  ? `0 10px 30px rgba(0, 0, 0, 0.3)`
                                  : `0 5px 15px rgba(0, 0, 0, 0.2)`,
                            }}
                            transition={{
                              boxShadow: {
                                duration: 2,
                                repeat: isCurrentlyActive ? Infinity : 0,
                              },
                              borderColor: { duration: 0.3 },
                            }}
                          >
                            {/* Active indicator ring */}
                            {isCurrentlyActive && (
                              <motion.div
                                className='absolute inset-0 rounded-2xl border-2 border-white/60'
                                initial={{ scale: 1, opacity: 0 }}
                                animate={{
                                  scale: [1, 1.15, 1],
                                  opacity: [0, 0.6, 0],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                                }}
                              />
                            )}

                            <div className='flex flex-col items-center gap-2 relative'>
                              <div className='bg-white/20 backdrop-blur-sm rounded-full p-3'>
                                <ModIcon className='w-6 h-6 text-white' />
                              </div>
                              <h4 className='text-sm font-semibold text-white text-center whitespace-nowrap'>
                                {mod.title}
                              </h4>
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10'>
        <p className='text-xs text-muted-foreground'>
          Scroll to explore modules
        </p>
        <div className='flex gap-2'>
          {modules.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                activeModule >= i ? 'bg-primary' : 'bg-primary/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
