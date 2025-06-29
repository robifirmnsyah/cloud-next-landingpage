import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Cta() {
  return (
    <section id="register" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Transform?</h2>
        <p className="mt-4 text-lg text-primary-foreground/80">
          Secure your spot at Cloud Next Extended Bandung and be part of the future of cloud.
        </p>
        <div className="mt-8">
          <Button size="lg" variant="secondary" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="#">Register Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
