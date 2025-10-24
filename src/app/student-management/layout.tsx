import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Management System with SMS/WhatsApp | Smart Learning",
  description: "Complete student lifecycle management with SMS and WhatsApp notifications, custom portals, and centralized data. Modern student information system for educational institutions.",
  keywords: [
    "student management system",
    "student information system",
    "SMS notifications",
    "WhatsApp integration",
    "student portal",
    "enrollment management",
    "parent communication",
    "student database"
  ],
  openGraph: {
    title: "Student Management System - Smart Learning",
    description: "Manage students efficiently with SMS/WhatsApp notifications and custom portals.",
    type: "website",
  },
};

export default function StudentManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
