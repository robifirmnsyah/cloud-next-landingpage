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
                <Link href="https://maps.app.goo.gl/vAwL88bWHeGq7Xoe9" target="_blank">
                  Get Directions
                  <ArrowRight className="ml-2"/>
                </Link>
            </Button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.700805234186!2d107.62438837588384!3d-6.926322367797562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7ef929aa4b7%3A0x9e475f1f42911254!2sWest%20Java%20Investment%20Hub%20(WJI-Hub)!5e0!3m2!1sid!2sid!4v1751178987276!5m2!1sid!2sid"
              className="w-full aspect-video"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
