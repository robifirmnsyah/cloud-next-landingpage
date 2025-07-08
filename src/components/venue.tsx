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
              Join us at the prestigious Gedung DPRD Provinsi Jawa Barat for Cloud Next Extended Bandung 2025.
            </p>
            <div className="flex items-start gap-4 pt-4">
              <div className="flex-shrink-0">
                 <div className="p-3 bg-background rounded-full shadow-md">
                    <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Gedung DPRD Provinsi Jawa Barat</h3>
                <p className="text-muted-foreground">Jl. Diponegoro No.2, Citarum, Kec. Bandung Wetan</p>
                <p className="text-muted-foreground">Bandung, Jawa Barat, Indonesia</p>
              </div>
            </div>
            <Button asChild>
              <Link href="https://maps.app.goo.gl/YourMapLink" target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-4 w-4" />
                Get Directions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.913302139939!2d107.61168768485133!3d-6.9009715497225175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64c3d9c5d7f%3A0x40c0288c767b18!2sDewan%20Perwakilan%20Rakyat%20Daerah%20(DPRD)%20Provinsi%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1751950059367!5m2!1sid!2sid" 
              width="100%" 
              height="300" 
              style={{border:0}} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] md:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
