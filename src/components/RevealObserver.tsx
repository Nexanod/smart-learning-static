'use client';

import { useEffect } from 'react';

export default function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' },
    );

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
