'use client';

import * as React from 'react';
import {
  Lightbulb,
  LibraryBig,
  LayoutGrid,
  LaptopMinimal,
  WifiPen,
  TabletSmartphone,
  Library,
  ArrowRight,
  Sparkles,
  Cpu,
  Zap,
  Target,
  Rocket,
  Brain,
  Globe,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type FeatureItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features?: FeatureItem[];
  className?: string;
}

const defaultFeatures: FeatureItem[] = [
  {
    id: 'ai-curriculum',
    title: 'AI-Powered Smart Curriculum',
    description:
      'Intelligent adaptive learning paths that evolve with each student, using machine learning to personalize content and pace for optimal mastery.',
    icon: Brain,
  },
  {
    id: 'paperless-admin',
    title: 'Smart Digital Administration',
    description:
      'Revolutionary paperless workflows with AI-powered form processing, smart attendance tracking, and automated approval systems.',
    icon: Cpu,
  },
  {
    id: 'smart-analytics',
    title: 'Intelligent Analytics Engine',
    description:
      'Advanced AI-driven insights and predictive analytics that surface learning trends and optimize educational outcomes in real-time.',
    icon: Target,
  },
  {
    id: 'virtual-classrooms',
    title: 'Immersive Smart Classrooms',
    description:
      'Next-generation virtual learning environments with AI-enhanced collaboration tools, smart recordings, and adaptive engagement features.',
    icon: Globe,
  },
  {
    id: 'automated-grading',
    title: 'AI-Powered Smart Assessment',
    description:
      'Revolutionary automated grading system with instant feedback, intelligent rubric evaluation, and personalized learning recommendations.',
    icon: Zap,
  },
  {
    id: 'digital-library',
    title: 'Intelligent Resource Hub',
    description:
      'Smart digital library with AI-curated content, intelligent search, and adaptive resource recommendations for enhanced learning.',
    icon: Rocket,
  },
];

export default function FeaturesSection({
  title = 'Revolutionary AI-Powered Smart Education',
  subtitle = 'Next-generation intelligent capabilities that transform teaching, learning, and administration with cutting-edge technology.',
  features = defaultFeatures,
  className,
}: FeaturesSectionProps) {
  const [hoveredFeature, setHoveredFeature] = React.useState<string | null>(
    null,
  );
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      aria-labelledby='features-heading'
      className={[
        'w-full bg-gradient-to-b from-background via-education-indigo/5 to-secondary/30 transform-3d perspective-2000',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Advanced Background Elements */}
      <div className='absolute inset-0 bg-3d-gradient' />

      {/* Floating Educational Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-education-indigo/20 to-education-blue/20 rounded-full blur-3xl animate-float-3d card-3d translate-z-50' />
        <div
          className='absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-education-purple/20 to-education-pink/20 rounded-full blur-2xl animate-float-3d card-3d translate-z-45'
          style={{ animationDelay: '1s' }}
        />
        <div
          className='absolute bottom-20 left-1/3 w-28 h-28 bg-gradient-to-br from-education-green/20 to-education-orange/20 rounded-full blur-3xl animate-float-3d card-3d translate-z-40'
          style={{ animationDelay: '2s' }}
        />
        <div
          className='absolute bottom-40 right-1/3 w-20 h-20 bg-gradient-to-br from-education-cyan/20 to-education-blue/20 rounded-full blur-2xl animate-float-3d card-3d translate-z-35'
          style={{ animationDelay: '3s' }}
        />

        {/* Smart Learning Particles */}
        <div className='absolute top-1/4 left-1/4 w-3 h-3 bg-education-indigo rounded-full animate-pulse-3d card-3d translate-z-60' />
        <div
          className='absolute top-1/3 right-1/4 w-2 h-2 bg-education-purple rounded-full animate-pulse-3d card-3d translate-z-55'
          style={{ animationDelay: '0.5s' }}
        />
        <div
          className='absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-education-green rounded-full animate-pulse-3d card-3d translate-z-50'
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className='absolute bottom-1/4 right-1/2 w-1.5 h-1.5 bg-education-orange rounded-full animate-pulse-3d card-3d translate-z-45'
          style={{ animationDelay: '2.5s' }}
        />
      </div>

      <div className='relative z-10 w-full max-w-7xl mx-auto px-4 py-12 sm:py-16'>
        <div
          className={`mx-auto max-w-3xl text-center space-y-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <div className='inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-education-purple/20 via-education-pink/20 to-education-orange/20 px-6 py-3 text-sm font-bold text-education-purple border-2 border-education-purple/30 backdrop-blur-md relative overflow-hidden card-3d translate-z-30 animate-float-3d'>
            <div className='absolute inset-0 bg-gradient-to-r from-education-purple/10 via-education-pink/10 to-education-orange/10 animate-pulse' />
            <div className='relative flex items-center gap-3'>
              <div className='relative'>
                <Cpu className='h-5 w-5 animate-spin text-education-purple' />
                <div className='absolute inset-0 h-5 w-5 rounded-full border border-education-purple/50 animate-ping' />
              </div>
              <span className='bg-gradient-to-r from-education-indigo to-education-purple bg-clip-text text-transparent font-bold'>
                Smart AI Features
              </span>
              <div className='flex gap-1'>
                <div className='h-2 w-2 rounded-full bg-education-purple animate-ping card-3d translate-z-10' />
                <div className='h-2 w-2 rounded-full bg-education-pink animate-ping delay-150 card-3d translate-z-15' />
                <div className='h-2 w-2 rounded-full bg-education-orange animate-ping delay-300 card-3d translate-z-20' />
              </div>
              <div className='absolute -right-2 -top-2 w-3 h-3 bg-gradient-to-r from-education-green to-education-cyan rounded-full animate-pulse-3d' />
            </div>
          </div>
          <h2
            id='features-heading'
            className='text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-education-indigo via-education-blue to-education-purple bg-clip-text text-transparent translate-z-40 animate-tilt-3d'
          >
            {title}
          </h2>
          <p className='text-muted-foreground text-sm sm:text-base max-w-xl mx-auto translate-z-30 animate-tilt-3d'>
            {subtitle}
          </p>
        </div>

        <div
          className={`mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          role='list'
          aria-label='Smart Learning features'
        >
          {features.map((feature, index) => {
            const Icon = feature.icon ?? Library;
            const isHovered = hoveredFeature === feature.id;
            return (
              <Card
                key={feature.id}
                role='listitem'
                className={`group relative overflow-hidden bg-gradient-to-br from-card via-card to-card/90 border-2 border-border/60 shadow-3d-lg hover:shadow-3d-xl transition-all duration-700 hover:-translate-y-3 cursor-pointer card-3d translate-z-15 ${
                  isHovered
                    ? 'ring-2 ring-education-purple/50 shadow-3d-xl scale-105 translate-z-40'
                    : 'hover:scale-102'
                }`}
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-education-purple/10 via-education-pink/5 to-education-orange/10 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                />

                <CardHeader className='relative flex flex-row items-start gap-3'>
                  <div
                    className={`shrink-0 rounded-xl p-3 transition-all duration-700 card-3d ${
                      isHovered
                        ? 'bg-gradient-to-br from-education-purple to-education-pink text-white shadow-3d-xl scale-105 ring-2 ring-education-purple/30 translate-z-20'
                        : 'bg-gradient-to-br from-education-blue/20 to-education-purple/20 text-education-indigo ring-2 ring-education-blue/30 translate-z-10'
                    }`}
                    aria-hidden='true'
                  >
                    <Icon
                      className={`h-6 w-6 transition-all duration-700 ${isHovered ? 'animate-bounce' : 'group-hover:animate-pulse'}`}
                    />
                  </div>
                  <CardTitle className='text-lg sm:text-xl leading-tight flex-1'>
                    <span className='block break-words group-hover:text-education-purple transition-colors duration-500 font-bold bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-education-purple group-hover:to-education-pink bg-clip-text text-transparent'>
                      {feature.title}
                    </span>
                    {isHovered && (
                      <div className='flex items-center gap-2 mt-2'>
                        <ArrowRight className='h-4 w-4 text-education-purple animate-bounce card-3d translate-z-20' />
                        <span className='text-sm text-education-purple font-bold'>
                          Learn More
                        </span>
                        <div className='w-1.5 h-1.5 bg-education-cyan rounded-full animate-ping' />
                      </div>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className='relative pt-0'>
                  <p className='text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-500 translate-z-10 group-hover:translate-z-20'>
                    {feature.description}
                  </p>

                  {/* Smart Learning Indicator - varied colors */}
                  <div
                    className={`absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse-3d card-3d translate-z-40 ${
                      index === 0
                        ? 'bg-gradient-to-r from-education-indigo to-education-blue'
                        : index === 1
                          ? 'bg-gradient-to-r from-education-purple to-education-pink'
                          : index === 2
                            ? 'bg-gradient-to-r from-education-orange to-education-cyan'
                            : 'bg-gradient-to-r from-education-green to-education-blue'
                    }`}
                  />

                  {/* Progress Indicator */}
                  <div className='mt-3 flex items-center gap-2'>
                    <div className='flex-1 h-1.5 bg-gradient-to-r from-education-blue/20 to-education-purple/20 rounded-full overflow-hidden'>
                      <div className='h-full bg-gradient-to-r from-education-purple via-education-pink to-education-orange rounded-full transition-all duration-1000 w-0 group-hover:w-full' />
                    </div>
                    <span className='text-xs font-medium text-education-purple'>
                      {isHovered ? 'Smart Learning' : 'Hover to Explore'}
                    </span>
                  </div>

                  {/* Smart progress indicator */}
                  <div className='mt-6 flex items-center gap-3'>
                    <div className='flex-1 h-3 bg-gradient-to-r from-education-blue/20 to-education-purple/20 rounded-full overflow-hidden shadow-inner'>
                      <div
                        className={`h-full bg-gradient-to-r from-education-purple via-education-pink to-education-orange rounded-full transition-all duration-1000 ${
                          isHovered ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className='text-sm text-education-purple font-semibold'>
                        {isHovered ? 'Smart Learning' : 'Hover to Explore'}
                      </span>
                      {isHovered && (
                        <div className='flex gap-1'>
                          <div className='h-2 w-2 rounded-full bg-education-purple animate-ping' />
                          <div className='h-2 w-2 rounded-full bg-education-pink animate-ping delay-150' />
                          <div className='h-2 w-2 rounded-full bg-education-orange animate-ping delay-300' />
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>

                {/* Smart floating particles effect */}
                {isHovered && (
                  <div className='absolute inset-0 pointer-events-none'>
                    <div className='absolute top-4 right-4 h-3 w-3 bg-education-purple rounded-full animate-ping shadow-lg' />
                    <div className='absolute bottom-4 left-4 h-2 w-2 bg-education-pink rounded-full animate-ping delay-300 shadow-lg' />
                    <div className='absolute top-1/2 right-8 h-2 w-2 bg-education-orange rounded-full animate-ping delay-700 shadow-lg' />
                    <div className='absolute top-1/4 left-8 h-1.5 w-1.5 bg-education-cyan rounded-full animate-ping delay-500 shadow-lg' />
                    <div className='absolute bottom-1/4 right-12 h-1 w-1 bg-education-green rounded-full animate-ping delay-1000 shadow-lg' />
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Smart call to action */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <div className='inline-flex items-center gap-4 rounded-2xl bg-gradient-to-r from-education-purple/20 via-education-pink/20 to-education-orange/20 px-10 py-6 border-2 border-education-purple/30 shadow-2xl backdrop-blur-md relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-education-purple/10 via-education-pink/10 to-education-orange/10 animate-pulse' />
            <div className='relative flex items-center gap-4'>
              <Cpu className='h-6 w-6 text-education-purple animate-spin' />
              <span className='text-lg font-bold text-education-indigo'>
                Ready to revolutionize education?
              </span>
              <div className='flex items-center gap-2'>
                <Rocket className='h-5 w-5 text-education-pink animate-bounce' />
                <ArrowRight className='h-5 w-5 text-education-orange animate-bounce' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
