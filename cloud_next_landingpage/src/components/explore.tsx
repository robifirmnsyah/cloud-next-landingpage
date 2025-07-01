import { Button } from '@/components/ui/button';

export default function Explore() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
          Explore the best of Cloud Next Extended
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Discover the latest in cloud technology through expert-led sessions, hands-on workshops, and networking opportunities.
        </p>
        <Button size="lg" asChild>
          <a href="#speakers">Meet Our Speakers</a>
        </Button>
      </div>
    </section>
  );
}
