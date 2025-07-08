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
              The venue for this event is currently being finalized. Details will be announced soon.
            </p>
            <div className="flex items-start gap-4 pt-4">
              <div className="flex-shrink-0">
                 <div className="p-3 bg-background rounded-full shadow-md">
                    <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">TBD</h3>
                <p className="text-muted-foreground">To Be Determined</p>
                <p className="text-muted-foreground">Bandung, Indonesia</p>
              </div>
            </div>
            <Button disabled className="opacity-50 cursor-not-allowed">
              <MapPin className="mr-2 h-4 w-4" />
              Location Coming Soon
            </Button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg font-medium">Venue location coming soon</p>
              <p className="text-gray-400 text-sm mt-2">Bandung, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
