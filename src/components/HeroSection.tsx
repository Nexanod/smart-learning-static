'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  MonitorPlay,
  GraduationCap,
  Brain,
  ArrowRight,
  Sparkles,
  Users,
  BookOpen,
  TrendingUp,
  Cpu,
  Zap,
  Target,
  Lightbulb,
  Rocket,
  Globe,
} from 'lucide-react';
import { useId, useState, useEffect } from 'react';

export interface HeroSectionProps {
  className?: string;
  onStartTrial?: () => void;
  onWatchDemo?: () => void;
  imageSrc?: string;
  imageAlt?: string;
}

export default function HeroSection({
  className,
  onStartTrial,
  onWatchDemo,
  imageSrc = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop',
  imageAlt = 'Futuristic digital learning interface with AI and students using advanced tools',
}: HeroSectionProps) {
  const decorativeId = useId();
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    {
      icon: Users,
      label: 'Active Students',
      value: '2M+',
      color: 'education-blue',
      trend: '+15%',
    },
    {
      icon: BookOpen,
      label: 'AI Courses',
      value: '10K+',
      color: 'education-green',
      trend: '+25%',
    },
    {
      icon: TrendingUp,
      label: 'Success Rate',
      value: '95%',
      color: 'education-orange',
      trend: '+8%',
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section
      aria-label='Smart Learning hero'
      className={`relative overflow-hidden bg-gradient-to-b from-background via-education-indigo/5 to-secondary/30 transform-3d perspective-2000 ${className}`}
    >
      <div className='relative w-full overflow-hidden rounded-[var(--radius)] bg-gradient-to-br from-background via-education-blue/5 to-background'>
        {/* Advanced 3D Background Elements */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0'
        >
          {/* Floating Educational Orbs */}
          <div className='absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-education-indigo/60 via-education-blue/40 to-education-purple/60 blur-3xl animate-float-3d card-3d translate-z-50' />
          <div
            className='absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-education-green/80 via-education-orange/60 to-education-cyan/80 blur-3xl animate-float-3d card-3d translate-z-45'
            style={{ animationDelay: '1s' }}
          />

          {/* Smart Learning Particles */}
          <div className='absolute top-1/4 left-1/4 w-3 h-3 bg-education-indigo rounded-full animate-pulse-3d card-3d translate-z-60' />
          <div
            className='absolute top-1/3 right-1/4 w-2 h-2 bg-education-purple rounded-full animate-pulse-3d card-3d translate-z-55'
            style={{ animationDelay: '0.5s' }}
          />
          <div
            className='absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-education-green rounded-full animate-pulse-3d card-3d translate-z-50'
            style={{ animationDelay: '1.5s' }}
          />
          <div
            className='absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-education-orange rounded-full animate-pulse-3d card-3d translate-z-45'
            style={{ animationDelay: '2.5s' }}
          />

          {/* Educational Circuit Patterns */}
          <div
            className='absolute top-1/4 left-1/6 w-20 h-20 border-2 border-education-blue/30 rounded-full animate-spin card-3d translate-z-40'
            style={{ animationDuration: '20s' }}
          />
          <div
            className='absolute top-1/4 left-1/6 w-10 h-10 border border-education-purple/40 rounded-full animate-spin card-3d translate-z-35'
            style={{ animationDuration: '15s', animationDirection: 'reverse' }}
          />
          <div
            className='absolute bottom-1/4 right-1/6 w-24 h-24 border-2 border-education-green/30 rounded-full animate-spin card-3d translate-z-40'
            style={{ animationDuration: '25s' }}
          />
          <div
            className='absolute bottom-1/4 right-1/6 w-12 h-12 border border-education-orange/40 rounded-full animate-spin card-3d translate-z-35'
            style={{ animationDuration: '18s', animationDirection: 'reverse' }}
          />
          <svg
            className='absolute inset-0 h-full w-full opacity-[0.15]'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
          >
            <defs>
              <pattern
                id={`grid-${decorativeId}`}
                width='28'
                height='28'
                patternUnits='userSpaceOnUse'
              >
                <path
                  d='M28 0H0V28'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='0.75'
                />
              </pattern>
            </defs>
            <rect
              width='100%'
              height='100%'
              fill={`url(#grid-${decorativeId})`}
              className='text-border'
            />
          </svg>
        </div>

        <div className='relative z-10 px-4 py-8 sm:px-6 sm:py-12 md:py-16'>
          <div className='mx-auto max-w-6xl'>
            <div className='grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16 transform-3d perspective-2000'>
              {/* Copy */}
              <div
                className={`w-full max-w-xl transition-all duration-1000 relative z-10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                <div className='mb-6 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-education-blue/20 via-education-purple/20 to-education-pink/20 px-6 py-3 text-sm font-semibold text-education-indigo shadow-3d-lg border-2 border-education-blue/30 backdrop-blur-md relative overflow-hidden card-3d translate-z-20 animate-float-3d group hover:scale-105 transition-all duration-300'>
                  <div className='absolute inset-0 bg-gradient-to-r from-education-blue/10 via-education-purple/10 to-education-pink/10 animate-pulse' />
                  <div className='relative flex items-center gap-3'>
                    <div className='relative'>
                      <Cpu className='h-5 w-5 animate-spin text-education-purple' />
                      <div className='absolute inset-0 h-5 w-5 rounded-full border border-education-purple/50 animate-ping' />
                    </div>
                    <span className='bg-gradient-to-r from-education-indigo to-education-purple bg-clip-text text-transparent font-bold'>
                      AI-Powered Smart Learning
                    </span>
                    <div className='flex gap-1'>
                      <div className='h-2 w-2 rounded-full bg-education-green animate-ping card-3d translate-z-10' />
                      <div className='h-2 w-2 rounded-full bg-education-orange animate-ping delay-150 card-3d translate-z-15' />
                      <div className='h-2 w-2 rounded-full bg-education-cyan animate-ping delay-300 card-3d translate-z-20' />
                    </div>
                    <div className='absolute -right-2 -top-2 w-3 h-3 bg-gradient-to-r from-education-purple to-education-pink rounded-full animate-pulse-3d group-hover:scale-110 transition-transform duration-300' />
                  </div>
                </div>

                <h1 className='text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl bg-gradient-to-r from-education-indigo via-education-blue to-education-purple bg-clip-text text-transparent relative translate-z-30 animate-tilt-3d'>
                  <span className='relative block'>
                    <span className='relative inline-block group'>
                      Transform education with{' '}
                      <span className='relative inline-block'>
                        <span className='bg-gradient-to-r from-education-orange via-education-pink to-education-cyan bg-clip-text text-transparent animate-pulse font-bold'>
                          intelligent
                        </span>
                        <div className='absolute -top-1 -right-1 translate-z-40'>
                          <Zap className='h-4 w-4 text-education-orange animate-bounce card-3d' />
                        </div>
                        <div className='absolute inset-0 bg-gradient-to-r from-education-orange/20 to-education-pink/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                      </span>
                    </span>
                    <br />
                    <span className='relative inline-block group'>
                      , fully digital learning
                      <div className='absolute -top-1 -right-4 translate-z-40'>
                        <Rocket className='h-5 w-5 text-education-purple animate-pulse card-3d' />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-r from-education-cyan/20 to-education-blue/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    </span>
                  </span>
                </h1>

                <p className='mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base max-w-xl translate-z-20 animate-tilt-3d'>
                  <span className='bg-gradient-to-r from-education-indigo/20 to-education-purple/20 px-3 py-1 rounded-lg font-medium'>
                    Eliminate physical labor
                  </span>{' '}
                  and embrace{' '}
                  <span className='bg-gradient-to-r from-education-orange/20 to-education-pink/20 px-2 py-1 rounded-lg font-medium'>
                    AI-powered workflows
                  </span>{' '}
                  that make teaching and learning frictionless. From content to
                  assessment, Smart Learning brings modern, trusted digital
                  systems to every classroom.
                </p>

                <div className='mt-6 flex flex-wrap items-center gap-3'>
                  <Button
                    aria-label='Start free trial'
                    onClick={onStartTrial}
                    className='group h-10 rounded-xl px-6 bg-gradient-to-r from-education-indigo via-education-blue to-education-purple hover:from-education-purple hover:to-education-pink shadow-3d-lg hover:shadow-3d-xl transition-all duration-500 hover:scale-105 text-white font-semibold card-3d translate-z-30 hover:translate-z-50 animate-glow-3d text-sm relative overflow-hidden'
                  >
                    <div className='absolute inset-0 bg-gradient-to-r from-education-purple/20 to-education-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    <span className='relative flex items-center gap-3'>
                      <Rocket className='h-5 w-5 animate-bounce' />
                      Start Free Trial
                      <ArrowRight className='h-4 w-4 group-hover:translate-x-1 transition-transform duration-300' />
                    </span>
                    <div className='absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-education-green to-education-cyan rounded-full animate-ping group-hover:animate-bounce' />
                  </Button>
                  <Button
                    aria-label='Watch product demo'
                    variant='secondary'
                    onClick={onWatchDemo}
                    className='group h-10 rounded-xl px-6 border-2 border-education-orange hover:border-education-pink bg-gradient-to-r from-education-orange/10 to-education-pink/10 hover:from-education-orange/20 hover:to-education-pink/20 transition-all duration-500 hover:scale-105 text-education-orange font-semibold card-3d translate-z-20 hover:translate-z-40 text-sm relative overflow-hidden'
                  >
                    <div className='absolute inset-0 bg-gradient-to-r from-education-orange/10 to-education-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    <span className='relative flex items-center gap-3'>
                      <MonitorPlay className='h-5 w-5 group-hover:animate-pulse' />
                      Watch Demo
                    </span>
                    <div
                      className='absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-education-orange to-education-pink rounded-full animate-ping group-hover:animate-bounce'
                      style={{ animationDelay: '0.5s' }}
                    />
                  </Button>
                </div>

                {/* Enhanced 3D Animated stats */}
                <div className='mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4'>
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    const isActive = currentStat === index;
                    const colorClasses = {
                      'education-blue':
                        'text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-sm',
                      'education-green':
                        'text-green-600 bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-sm',
                      'education-orange':
                        'text-orange-600 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 shadow-sm',
                    };
                    const colorClass =
                      colorClasses[stat.color as keyof typeof colorClasses];

                    return (
                      <div
                        key={index}
                        className={`group relative overflow-hidden rounded-xl border-2 p-4 transition-all duration-700 hover:shadow-3d-xl hover:scale-105 card-3d ${
                          isActive
                            ? 'scale-105 shadow-3d-xl ring-2 ring-current/40 translate-z-30'
                            : 'scale-100 translate-z-15'
                        } ${colorClass}`}
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        {/* Enhanced animated background */}
                        <div className='absolute inset-0 bg-gradient-to-br from-current/10 via-transparent to-current/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
                        <div className='absolute inset-0 bg-gradient-to-r from-education-indigo/5 via-education-purple/5 to-education-pink/5 animate-pulse' />

                        <div className='relative flex items-center gap-3'>
                          <div
                            className={`p-2 rounded-lg ${isActive ? 'bg-current/20 shadow-lg' : 'bg-current/10'} transition-all duration-500 card-3d translate-z-10 group-hover:translate-z-20`}
                          >
                            <Icon
                              className={`h-5 w-5 ${isActive ? 'animate-bounce' : 'group-hover:animate-pulse'}`}
                            />
                          </div>
                          <div className='flex-1 min-w-0'>
                            <div className='flex items-baseline gap-2 flex-wrap'>
                              <div
                                className={`text-lg font-bold transition-colors ${isActive ? 'text-current' : 'text-current/80'}`}
                              >
                                {stat.value}
                              </div>
                              {stat.trend && (
                                <div
                                  className={`text-xs font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap flex items-center gap-1 ${
                                    isActive
                                      ? 'bg-current/20 text-current'
                                      : 'bg-current/10 text-current/70'
                                  }`}
                                >
                                  <TrendingUp className='h-3 w-3' />
                                  {stat.trend}
                                </div>
                              )}
                            </div>
                            <div className='text-xs font-medium text-current/70 mt-0.5'>
                              {stat.label}
                            </div>
                          </div>
                        </div>

                        {/* Smart indicator - varied colors */}
                        <div
                          className={`absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse-3d card-3d translate-z-40 ${
                            index === 0
                              ? 'bg-gradient-to-r from-education-blue to-education-indigo'
                              : index === 1
                                ? 'bg-gradient-to-r from-education-purple to-education-pink'
                                : 'bg-gradient-to-r from-education-orange to-education-cyan'
                          }`}
                        />
                        {isActive && (
                          <div className='absolute top-2 right-2'>
                            <div className='flex gap-1'>
                              <div className='h-2 w-2 rounded-full bg-current animate-ping card-3d translate-z-20' />
                              <div className='h-2 w-2 rounded-full bg-current animate-ping delay-150 card-3d translate-z-25' />
                              <div className='h-2 w-2 rounded-full bg-current animate-ping delay-300 card-3d translate-z-30' />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Enhanced trust indicators */}
                <div className='mt-6 flex flex-wrap items-center gap-3 text-xs'>
                  <div className='group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-education-purple/20 to-education-pink/20 px-3 py-2 text-education-purple border border-education-purple/30 hover:shadow-3d transition-all duration-300 hover:scale-105 relative overflow-hidden card-3d translate-z-10 animate-float-3d'>
                    <div className='absolute inset-0 bg-gradient-to-r from-education-purple/10 to-education-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    <div className='relative flex items-center gap-2'>
                      <Brain
                        className='h-4 w-4 animate-pulse'
                        aria-hidden='true'
                      />
                      <span className='font-semibold'>
                        AI-powered intelligence
                      </span>
                      <div className='h-1.5 w-1.5 rounded-full bg-gradient-to-r from-education-purple to-education-pink animate-ping group-hover:animate-bounce' />
                    </div>
                  </div>
                  <div
                    className='group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-education-blue/20 to-education-cyan/20 px-3 py-2 text-education-blue border border-education-blue/30 hover:shadow-3d transition-all duration-300 hover:scale-105 relative overflow-hidden card-3d translate-z-15 animate-float-3d'
                    style={{ animationDelay: '1s' }}
                  >
                    <div className='absolute inset-0 bg-gradient-to-r from-education-blue/10 to-education-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    <div className='relative flex items-center gap-2'>
                      <GraduationCap
                        className='h-4 w-4 animate-bounce'
                        aria-hidden='true'
                      />
                      <span className='font-semibold'>Smart education</span>
                      <div className='h-1.5 w-1.5 rounded-full bg-gradient-to-r from-education-blue to-education-cyan animate-ping group-hover:animate-bounce' />
                    </div>
                  </div>
                  <div
                    className='group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-education-orange/20 to-education-cyan/20 px-3 py-2 text-education-orange border border-education-orange/30 hover:shadow-3d transition-all duration-300 hover:scale-105 relative overflow-hidden card-3d translate-z-20 animate-float-3d'
                    style={{ animationDelay: '2s' }}
                  >
                    <div className='absolute inset-0 bg-gradient-to-r from-education-orange/10 to-education-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    <div className='relative flex items-center gap-2'>
                      <TrendingUp
                        className='h-4 w-4 animate-pulse'
                        aria-hidden='true'
                      />
                      <span className='font-semibold'>Proven innovation</span>
                      <div className='h-1.5 w-1.5 rounded-full bg-gradient-to-r from-education-orange to-education-cyan animate-ping group-hover:animate-bounce' />
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div
                className={`relative w-full transition-all duration-1000 delay-300 perspective-1000 mt-8 md:mt-0 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ zIndex: 1 }}
              >
                <div className='group relative isolate overflow-hidden rounded-2xl bg-card shadow-3d-xl ring-1 ring-border hover:shadow-3d-xl transition-all duration-500 card-3d translate-z-10 animate-tilt-3d max-w-md mx-auto'>
                  <div className='absolute inset-0'>
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      sizes='(max-width: 768px) 100vw, 600px'
                      className='object-cover transition-transform duration-700 group-hover:scale-105'
                      priority
                    />
                  </div>

                  {/* Animated gradient overlay */}
                  <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent' />
                  <div className='pointer-events-none absolute inset-0 bg-gradient-to-r from-chart-3/20 via-transparent to-chart-2/20 animate-pulse' />

                  {/* Floating elements */}
                  <div className='absolute top-4 right-4 z-20'>
                    <div className='flex gap-2'>
                      <div className='h-3 w-3 rounded-full bg-education-green animate-ping' />
                      <div className='h-3 w-3 rounded-full bg-education-orange animate-ping delay-150' />
                      <div className='h-3 w-3 rounded-full bg-education-cyan animate-ping delay-300' />
                    </div>
                  </div>

                  {/* Smart learning indicators */}
                  <div className='absolute top-4 left-4 z-20'>
                    <div className='flex flex-col gap-2'>
                      <div className='flex items-center gap-2 bg-education-indigo/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-white text-xs font-semibold'>
                        <Cpu className='h-3 w-3 animate-spin' />
                        AI Learning
                      </div>
                      <div className='flex items-center gap-2 bg-education-purple/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-white text-xs font-semibold'>
                        <Zap className='h-3 w-3 animate-pulse' />
                        Smart Mode
                      </div>
                    </div>
                  </div>

                  {/* Futuristic overlay elements */}
                  <div className='relative z-10 p-4 sm:p-6'>
                    <div className='relative mt-40 sm:mt-52'>
                      <div className='mx-auto grid max-w-md grid-cols-3 gap-3 rounded-2xl bg-gradient-to-br from-education-indigo/10 via-education-blue/10 to-education-purple/10 backdrop-blur-md p-4 ring-2 ring-education-indigo/20 shadow-2xl'>
                        <div className='group/item flex min-w-0 items-center gap-2 rounded-xl bg-gradient-to-r from-education-blue/20 to-education-cyan/20 px-4 py-3 hover:from-education-blue/30 hover:to-education-cyan/30 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg'>
                          <GraduationCap
                            className='h-5 w-5 text-education-blue group-hover/item:text-education-cyan transition-colors animate-pulse'
                            aria-hidden='true'
                          />
                          <span className='truncate text-sm font-semibold group-hover/item:text-education-cyan transition-colors'>
                            Smart Courses
                          </span>
                        </div>
                        <div className='group/item flex min-w-0 items-center gap-2 rounded-xl bg-gradient-to-r from-education-green/20 to-education-orange/20 px-4 py-3 hover:from-education-green/30 hover:to-education-orange/30 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg'>
                          <Brain
                            className='h-5 w-5 text-education-green group-hover/item:text-education-orange transition-colors animate-pulse'
                            aria-hidden='true'
                          />
                          <span className='truncate text-sm font-semibold group-hover/item:text-education-orange transition-colors'>
                            AI Adaptive
                          </span>
                        </div>
                        <div className='group/item flex min-w-0 items-center gap-2 rounded-xl bg-gradient-to-r from-education-purple/20 to-education-pink/20 px-4 py-3 hover:from-education-purple/30 hover:to-education-pink/30 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg'>
                          <Target
                            className='h-5 w-5 text-education-purple group-hover/item:text-education-pink transition-colors animate-pulse'
                            aria-hidden='true'
                          />
                          <span className='truncate text-sm font-semibold group-hover/item:text-education-pink transition-colors'>
                            Smart Assess
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Animated border */}
                  <div className='absolute inset-0 rounded-2xl ring-2 ring-inset ring-gradient-to-r from-education-indigo/50 via-education-blue/50 to-education-purple/50 animate-pulse' />
                </div>

                {/* Smart floating elements - contained within bounds */}
                <div className='absolute top-4 left-4 hidden md:block'>
                  <div className='rounded-full bg-gradient-to-r from-education-indigo to-education-blue p-2 shadow-3d-lg animate-float-3d card-3d translate-z-20'>
                    <Globe className='h-4 w-4 text-white animate-spin' />
                  </div>
                </div>
                <div className='absolute bottom-4 right-4 hidden md:block'>
                  <div
                    className='rounded-full bg-gradient-to-r from-education-purple to-education-pink p-2 shadow-3d-lg animate-float-3d card-3d translate-z-15'
                    style={{ animationDelay: '1s' }}
                  >
                    <Rocket className='h-4 w-4 text-white animate-pulse' />
                  </div>
                </div>
                <div className='absolute top-1/2 right-2 hidden md:block'>
                  <div className='rounded-full bg-gradient-to-r from-education-orange to-education-cyan p-2 shadow-3d-lg animate-pulse-3d card-3d translate-z-10'>
                    <Lightbulb className='h-3 w-3 text-white animate-bounce' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
