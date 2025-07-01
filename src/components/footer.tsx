import { Mail, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Logo } from '@/components/logo';
import Link from 'next/link';

function FooterLogo() {
  return (
      <Logo />
  );
}

const socialLinks = [
    { platform: 'email', icon: Mail, href: 'mailto:gdgcloudbandung@gmail.com', text: 'gdgcloudbandung@gmail.com', color: 'text-rose-500' },
    { platform: 'instagram', icon: Instagram, href: 'https://www.instagram.com/gdgcloudbandung/', text: '@gdgcloudbandung', color: 'text-rose-500' },
    { platform: 'youtube', icon: Youtube, href: 'https://www.youtube.com/@gdgcloudbandung', text: '@gdgcloudbandung', color: 'text-red-600' },
    { platform: 'linkedin', icon: Linkedin, href: 'https://www.linkedin.com/company/gdg-cloud-bandung/', text: 'GDG Cloud Bandung', color: 'text-sky-500' }
];

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-full bg-slate-950/95 border-t border-white/10 backdrop-blur-sm -z-10"></div>
       <div className="absolute inset-x-0 bottom-0 h-full -z-20">
          <div className="absolute left-0 bottom-0 w-72 h-72 bg-orange-500/10 rounded-full filter blur-3xl opacity-40"></div>
          <div className="absolute right-20 bottom-0 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl opacity-40"></div>
      </div>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-slate-400">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-12">
          <div className="space-y-4">
            <FooterLogo />
            <p className="max-w-xs pt-2">
              Building the future with Google Cloud technologies in Bandung and beyond.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Event Details</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Saturday, August 2nd, 2025</li>
              <li>09:00 AM - 05:00 PM</li>
              <li>West Java Investment Hub (WJIH)</li>
              <li>Bandung, Indonesia</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Connect With Us</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.platform}>
                  <Link href={link.href} className="flex items-center gap-3 group">
                    <link.icon className={`h-5 w-5 flex-shrink-0 ${link.color} transition-colors`} />
                    <span className="text-slate-300 group-hover:text-white transition-colors">{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Google Developer Groups Cloud Bandung. All rights reserved.</p>
          <p className="mt-1">In collaboration with Google Cloud Next '25</p>
        </div>
      </div>
    </footer>
  );
}
