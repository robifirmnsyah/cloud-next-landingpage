import Image from 'next/image';
import { MapPin } from 'lucide-react';

export default function Venue() {
  return (
    <section id="venue" className="py-20 md:py-32 bg-accent">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Venue Information</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The event will be held at the prestigious Bandung Convention Center, known for its state-of-the-art facilities and central location.
            </p>
            <div className="mt-6 flex items-start gap-4">
              <div className="flex-shrink-0">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Bandung Convention Center</h3>
                <p className="text-muted-foreground">Jl. Asia Afrika No. 1, Bandung, Indonesia</p>
                <a href="#" className="mt-2 inline-block text-sm font-medium text-primary hover:underline">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/1280x720.png"
              alt="Bandung Convention Center"
              width={1280}
              height={720}
              className="object-cover w-full h-full"
              data-ai-hint="modern building"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
