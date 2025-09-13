import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Learning</title>
        <meta
          name='description'
          content='Smart Learning - Your path to smarter education.'
        />
      </Head>

      <div className='min-h-screen flex flex-col'>
        {/* Navbar */}
        <header className='w-full bg-white shadow-md fixed top-0 z-50'>
          <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
            <h1 className='text-2xl font-bold text-primary'>Smart Learning</h1>
            <nav className='hidden md:flex space-x-6 font-medium'>
              <a href='#features' className='hover:text-primary'>
                Features
              </a>
              <a href='#about' className='hover:text-primary'>
                About
              </a>
              <a href='#contact' className='hover:text-primary'>
                Contact
              </a>
            </nav>
            <button className='ml-4 px-5 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition'>
              Get Started
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className='flex-1 flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark text-white px-6 pt-28 pb-20'>
          <div className='text-center max-w-3xl'>
            <h2 className='text-4xl md:text-6xl font-extrabold mb-6 text-gray-800'>
              Learn Smarter, Not Harder
            </h2>
            <p className='text-lg md:text-xl mb-8 text-gray-800'>
              Smart Learning helps students and professionals achieve more with
              AI-powered personalized education tools.
            </p>
            <button className='px-8 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent-dark transition'>
              Start Free Trial
            </button>
          </div>
        </section>

        {/* Features */}
        <section
          id='features'
          className='py-20 bg-white px-6 md:px-12 text-center'
        >
          <h3 className='text-3xl font-bold mb-12'>
            Why Choose Smart Learning?
          </h3>
          <div className='grid gap-8 md:grid-cols-3'>
            <div className='p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition'>
              <h4 className='text-xl font-semibold text-primary mb-3'>
                Personalized Learning
              </h4>
              <p className='text-gray-600'>
                AI adapts content to your pace, making learning more effective.
              </p>
            </div>
            <div className='p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition'>
              <h4 className='text-xl font-semibold text-primary mb-3'>
                Interactive Courses
              </h4>
              <p className='text-gray-600'>
                Engage with videos, quizzes, and assignments designed to boost
                retention.
              </p>
            </div>
            <div className='p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition'>
              <h4 className='text-xl font-semibold text-primary mb-3'>
                Progress Tracking
              </h4>
              <p className='text-gray-600'>
                Monitor your growth with detailed analytics and insights.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id='about'
          className='py-20 bg-gray-50 px-6 md:px-12 text-center'
        >
          <h3 className='text-3xl font-bold mb-8'>About Smart Learning</h3>
          <p className='max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed'>
            Smart Learning is built for students, teachers, and professionals
            who want to maximize their potential. With the power of AI,
            interactive tools, and an intuitive platform, learning becomes
            engaging and effective.
          </p>
        </section>

        {/* Contact */}
        <section
          id='contact'
          className='py-20 bg-white px-6 md:px-12 text-center'
        >
          <h3 className='text-3xl font-bold mb-8'>Get in Touch</h3>
          <p className='mb-6 text-gray-600'>
            Have questions? We’d love to hear from you.
          </p>
          <a
            href='mailto:contact@smartlearning.com'
            className='px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition'
          >
            Email Us
          </a>
        </section>

        {/* Footer */}
        <footer className='bg-gray-900 text-gray-400 py-6 text-center'>
          <p>
            © {new Date().getFullYear()} Smart Learning. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
