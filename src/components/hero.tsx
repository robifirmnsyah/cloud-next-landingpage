import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 bg-accent">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-headline">
              Cloud Next Extended Bandung
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Innovate. Connect. Transform. Join us for a day of learning and networking with cloud enthusiasts and experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <a href="#register">Register Now</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#agenda">View Agenda</a>
              </Button>
            </div>
          </div>
          <div className="relative group aspect-video rounded-lg overflow-hidden shadow-lg cursor-pointer">
            <Image
              src="https://placehold.co/1280x720.png"
              alt="Event recap video thumbnail"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="conference technology"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <PlayCircle className="h-20 w-20 text-white/80 transform transition-transform group-hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
