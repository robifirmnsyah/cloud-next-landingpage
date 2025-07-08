"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before checking pathname to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only determine page type after mounting
  const isRegisterPage = mounted ? pathname === '/register' : false;

  const navLinks = [
    { href: isRegisterPage ? '/#about' : '#about', label: 'About' },
    { href: isRegisterPage ? '/#speakers' : '#speakers', label: 'Speakers' },
    { href: isRegisterPage ? '/#agent-dev-day' : '#agent-dev-day', label: 'Mini Hackathon' },
    { href: isRegisterPage ? '/#faq' : '#faq', label: 'FAQ' },
    { href: isRegisterPage ? '/#agenda' : '#agenda', label: 'Agenda' },
    { href: isRegisterPage ? '/#venue' : '#venue', label: 'Venue' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Logo />
        </div>
        
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:scale-105 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link href="/register">Register Now</Link>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-muted/50 transition-colors duration-200">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-6 border-b border-border/40">
                    <Logo />
                  </div>
                  
                  {/* Mobile Navigation */}
                  <div className="flex-1 p-6">
                    <nav className="space-y-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 border-b border-transparent hover:border-blue-500/20"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  
                  {/* Mobile CTA */}
                  <div className="p-6 border-t border-border/40">
                    <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      <Link href="/register">Register Now</Link>
                    </Button>
                  </div>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
