import { Mail, Instagram, Youtube, Linkedin } from 'lucide-react';
import Link from 'next/link';

function FooterLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <svg width="45" height="26" viewBox="0 0 45 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <path d="M14.1625 10.3429L10.9312 13.1143L14.1625 15.8857L17.3937 13.1143L14.1625 10.3429Z" fill="#EA4335"/>
        <path d="M10.9312 18.5143L7.7 15.7429L4.46875 18.5143L7.7 21.2857L10.9312 18.5143Z" fill="#34A853"/>
        <path d="M20.625 18.5143L17.3937 15.7429L14.1625 18.5143L17.3937 21.2857L20.625 18.5143Z" fill="#4285F4"/>
        <path d="M25.0312 5.02857L20.3375 9.02857L14.1625 4.34286V1.31429L19.4562 5.37143L21.7937 3.37143L18.5625 0.542857H25.0312V5.02857Z" fill="#4285F4"/>
        <path d="M3.2375 22.8286L0 25.6H9.10625L11.8125 22.8286L9.10625 20.0571L3.2375 22.8286Z" fill="#34A853"/>
        <path d="M41.7625 22.8286L45 25.6H35.8938L33.1875 22.8286L35.8938 20.0571L41.7625 22.8286Z" fill="#FBBC04"/>
        <path d="M41.7625 3.17143L35.8938 5.94286L33.1875 3.17143L35.8938 0.400001H45V25.6H41.7625V3.17143Z" fill="#FBBC04"/>
        <path d="M28.4688 12.0571L25.333 14.7753L29.3562 18.5143L32.4921 15.7961L28.4688 12.0571Z" fill="#EA4335"/>
        <path d="M25.0312 5.02857L21.8 7.31429L25.0312 9.6H28.2625L25.0312 7.31429V5.02857Z" fill="#4285F4"/>
        <path d="M10.9312 7.31429L14.1625 9.6H17.3937L14.1625 7.31429L10.9312 5.02857V7.31429Z" fill="#EA4335"/>
      </svg>
      <div className="flex flex-col">
        <span className="text-base font-semibold tracking-tight text-white">GDG Cloud Bandung</span>
        <span className="text-sm text-slate-400">Google Developer Groups</span>
      </div>
    </Link>
  );
}

const socialLinks = [
    { icon: Mail, href: 'mailto:gdgcloudbandung@gmail.com', text: 'gdgcloudbandung@gmail.com', color: 'text-rose-500' },
    { icon: Instagram, href: '#', text: '@gdgcloudbandung', color: 'text-rose-500' },
    { icon: Youtube, href: '#', text: '@gdgcloudbandung', color: 'text-red-600' },
    { icon: Linkedin, href: '#', text: 'GDG Cloud Bandung', color: 'text-sky-500' }
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
                <li key={link.text}>
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
