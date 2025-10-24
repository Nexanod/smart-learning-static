import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Paper Generation System | One-Click Exam Creation - Smart Learning",
  description: "Generate exam papers instantly with AI-powered question selection, smart templates, and automated formatting. Save 90% time on paper creation with Smart Learning's intelligent paper generation system.",
  keywords: [
    "AI paper generation",
    "exam paper creator",
    "question bank management",
    "automated paper generation",
    "exam paper maker",
    "test paper generator",
    "education software",
    "exam automation"
  ],
  openGraph: {
    title: "AI Paper Generation - Smart Learning",
    description: "One-click exam paper generation with AI-powered question selection and smart templates.",
    type: "website",
  },
};

export default function PaperGenerationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
