'use client';
import { PostHogProvider } from '@posthog/react';
import posthog from 'posthog-js';
import { ReactNode } from 'react';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: '/ingest',
    ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.posthog.com',
    person_profiles: 'identified_only',
    capture_exceptions: true,
    defaults: '2026-01-30',
    debug: process.env.NODE_ENV === 'development',
  });
}

export function CSPostHogProvider({ children }: { children: ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
