"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ChevronDown,
  HelpCircle,
  Search,
  ArrowRight,
  MessageCircle
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      name: "General",
      questions: [
        {
          q: "What is Smart Learning?",
          a: "Smart Learning is a comprehensive B2B education management platform that modernizes educational institutions by eliminating physical labor and moving everything to a fully digital, AI-powered system. We offer modules for paper generation, student management, attendance tracking, and more."
        },
        {
          q: "Who can use Smart Learning?",
          a: "Smart Learning is designed for educational institutions of all sizes - from small training centers to large universities. Our platform is ideal for schools, colleges, coaching centers, and any organization involved in education administration."
        },
        {
          q: "Do you offer a free trial?",
          a: "Yes! All our plans include a 14-day free trial with full access to features. No credit card required to start your trial."
        },
        {
          q: "How secure is my data?",
          a: "We take security very seriously. Smart Learning is ISO 27001 certified and SOC 2 Type II compliant. All data is encrypted in transit and at rest, with regular security audits and backups."
        }
      ]
    },
    {
      name: "Features & Modules",
      questions: [
        {
          q: "What is AI-powered paper generation?",
          a: "Our AI system analyzes your question bank, curriculum requirements, and difficulty levels to automatically generate balanced exam papers in seconds. It ensures no question repetition, proper distribution across topics, and maintains academic standards."
        },
        {
          q: "Can I customize the modules for my institution?",
          a: "Absolutely! Each institution gets a customizable subdomain with branding options, custom templates, and configurable workflows to match your specific needs."
        },
        {
          q: "Does the student management module support SMS/WhatsApp?",
          a: "Yes! We integrate with SMS and WhatsApp APIs to send notifications, announcements, and alerts to students and parents. Each plan includes a specific number of messages per month."
        },
        {
          q: "How does biometric attendance work?",
          a: "Our attendance module integrates with most biometric devices through standard APIs. When a student marks attendance via biometric device, it's instantly recorded in the system with real-time analytics and reporting."
        }
      ]
    },
    {
      name: "Pricing & Plans",
      questions: [
        {
          q: "What's included in each plan?",
          a: "Starter includes up to 200 students and basic features. Professional supports up to 1,000 students with unlimited paper generation and advanced features. Enterprise offers unlimited students and all modules with priority support. Check our pricing page for detailed comparisons."
        },
        {
          q: "Can I upgrade or downgrade my plan?",
          a: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades apply at the start of your next billing cycle. We'll handle data migration seamlessly."
        },
        {
          q: "Are there any setup fees?",
          a: "No setup fees! All plans include free onboarding, training, and implementation support to get your institution up and running quickly."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise plans. All payments are processed securely through industry-standard payment gateways."
        }
      ]
    },
    {
      name: "Technical Support",
      questions: [
        {
          q: "What kind of support do you provide?",
          a: "We offer email support for all plans, priority email and chat support for Professional plans, and 24/7 dedicated support for Enterprise customers. Our average response time is under 2 hours during business hours."
        },
        {
          q: "Do you provide training?",
          a: "Yes! We provide comprehensive onboarding training, video tutorials, documentation, and ongoing support. Enterprise customers get personalized training sessions for their staff."
        },
        {
          q: "What are your system requirements?",
          a: "Smart Learning is a cloud-based platform accessible through any modern web browser (Chrome, Firefox, Safari, Edge). No installation required! We also offer mobile apps for iOS and Android."
        },
        {
          q: "Can I integrate Smart Learning with existing systems?",
          a: "Yes, we offer APIs and integrations with popular systems like Google Workspace, Microsoft Office 365, and various payment gateways. Enterprise plans include custom integration support."
        }
      ]
    },
    {
      name: "Implementation",
      questions: [
        {
          q: "How long does implementation take?",
          a: "Most institutions are up and running within 1-2 weeks. This includes data migration, customization, staff training, and testing. Enterprise implementations may take 2-4 weeks depending on complexity."
        },
        {
          q: "Can you migrate data from our existing system?",
          a: "Yes! We provide data migration services to import your existing student data, question banks, and records. Our team ensures accurate migration with zero data loss."
        },
        {
          q: "What happens to my data if I cancel?",
          a: "You can export all your data in standard formats (CSV, PDF) at any time. After cancellation, your data remains accessible for 30 days, giving you time to export everything you need."
        },
        {
          q: "Is training included for my staff?",
          a: "Yes! All plans include onboarding training. We provide video tutorials, live training sessions, and documentation to ensure your team is confident using the platform."
        }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-background via-background to-muted overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-sky-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="mb-4 bg-blue-500/10 text-blue-600 border-blue-500/20">
              <HelpCircle className="w-3 h-3 mr-1" />
              Help Center
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Find answers to common questions about Smart Learning
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg rounded-full border-2 focus:border-blue-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.length === 0 ? (
              <Card className="text-center p-12">
                <CardContent>
                  <p className="text-muted-foreground text-lg">
                    No questions found matching "{searchQuery}". Try a different search term.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-12">
                {filteredCategories.map((category, catIndex) => (
                  <motion.div
                    key={catIndex}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                      <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-sky-500 rounded-full" />
                      {category.name}
                    </h2>
                    <div className="space-y-4">
                      {category.questions.map((item, qIndex) => {
                        const globalIndex = categories
                          .slice(0, catIndex)
                          .reduce((acc, cat) => acc + cat.questions.length, 0) + qIndex;
                        const isOpen = openIndex === globalIndex;

                        return (
                          <motion.div
                            key={qIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: qIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <Card 
                              className={`cursor-pointer transition-all duration-300 border-2 ${
                                isOpen 
                                  ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
                                  : 'hover:border-blue-500/30 hover:shadow-lg'
                              }`}
                              onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                            >
                              <CardContent className="p-6">
                                <div className="flex items-start justify-between gap-4">
                                  <h3 className="text-lg font-semibold flex-1">
                                    {item.q}
                                  </h3>
                                  <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <ChevronDown className={`w-5 h-5 flex-shrink-0 ${
                                      isOpen ? 'text-blue-600' : 'text-muted-foreground'
                                    }`} />
                                  </motion.div>
                                </div>
                                <motion.div
                                  initial={false}
                                  animate={{
                                    height: isOpen ? "auto" : 0,
                                    opacity: isOpen ? 1 : 0,
                                    marginTop: isOpen ? 16 : 0
                                  }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                                  className="overflow-hidden"
                                >
                                  <p className="text-muted-foreground leading-relaxed">
                                    {item.a}
                                  </p>
                                </motion.div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <MessageCircle className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our team is here to help. Get in touch and we'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-white/90 rounded-full px-8">
                <Link href="/contact">
                  Contact Support <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white/10">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
