import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-1761231526372.png?width=8000&height=8000&resize=contain"
                  alt="Smart Learning Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                Smart Learning
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Modernizing education with intelligent digital solutions for schools and institutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/paper-generation" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                  Paper Generation
                </Link>
              </li>
              <li>
                <Link href="/student-management" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                  Student Management
                </Link>
              </li>
              <li>
                <Link href="/attendance-management" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                  Attendance Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">info@smartlearning.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  123 Education St, Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Smart Learning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}