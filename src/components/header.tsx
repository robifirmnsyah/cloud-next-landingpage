"use client";

import { Logo } from '@/components/logo';
import { Cloud } from 'lucide-react';

export default function Header() {
  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="text-right flex items-center gap-2">
          <div className="flex flex-col">
            <span className="font-semibold text-foreground">Google Cloud</span>
            <span className="text-sm text-muted-foreground">Next '25</span>
          </div>
          <Cloud className="h-6 w-6 text-blue-400" />
        </div>
      </div>
    </header>
  );
}
