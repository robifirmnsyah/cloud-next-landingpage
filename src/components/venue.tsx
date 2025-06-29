import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export default function Venue() {
  return (
    <section id="venue" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
              Event Venue
            </h2>
            <p className="text-lg text-muted-foreground">
              The event will be held at the prestigious West Java Investment Hub (WJIH), a premier venue known for its state-of-the-art facilities and central location.
            </p>
            <div className="flex items-start gap-4 pt-4">
              <div className="flex-shrink-0">
                 <div className="p-3 bg-background rounded-full shadow-md">
                    <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">West Java Investment Hub (WJIH)</h3>
                <p className="text-muted-foreground">Jl. Diponegoro No.22, Bandung, Indonesia</p>
              </div>
            </div>
            <Button asChild>
                <Link href="#" target="_blank">
                  Get Directions
                  <ArrowRight className="ml-2"/>
                </Link>
            </Button>
          </div>
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/1280x720.png"
              alt="West Java Investment Hub"
              width={1280}
              height={720}
              className="object-cover w-full h-full"
              data-ai-hint="modern building interior"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
