import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Attendance Management System | Real-Time Tracking - Smart Learning',
  description:
    'Modern attendance tracking with real-time updates, biometric integration, automated reporting, and intelligent analytics. Streamline attendance management for your institution.',
  keywords: [
    'attendance management',
    'attendance tracking system',
    'biometric attendance',
    'real-time attendance',
    'student attendance',
    'attendance software',
    'automated attendance',
    'attendance analytics',
  ],
  openGraph: {
    title: 'Attendance Management - Smart Learning',
    description:
      'Track attendance in real-time with automated reporting and analytics.',
    type: 'website',
  },
};

export default function AttendanceManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
