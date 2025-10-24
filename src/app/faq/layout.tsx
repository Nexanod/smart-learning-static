import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Smart Learning Help Center",
  description: "Find answers to common questions about Smart Learning's education management platform. Learn about features, pricing, implementation, support, and more.",
  keywords: [
    "smart learning faq",
    "education software questions",
    "smart learning help",
    "school management faq",
    "education platform questions",
    "smart learning support",
    "implementation questions",
    "pricing questions"
  ],
  openGraph: {
    title: "FAQ - Frequently Asked Questions | Smart Learning",
    description: "Get answers to common questions about Smart Learning's education management platform.",
    type: "website",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
