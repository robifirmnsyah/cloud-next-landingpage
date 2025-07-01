import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function Cta() {
  return (
    <section id="register" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-headline text-white">
            Ready to Build the Future?
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Join us for an unforgettable day of learning, building, and connecting with the Google Cloud AI community in Bandung.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:opacity-90 text-white font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
              <Link href="#">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-slate-400 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors duration-300">
              <Link href="#">
                Learn More
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
