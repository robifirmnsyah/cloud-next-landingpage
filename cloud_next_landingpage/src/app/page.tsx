import Header from '@/components/header';
import Hero from '@/components/hero';
import WhyAttend from '@/components/why-attend';
import Speakers from '@/components/speakers';
import Agenda from '@/components/agenda';
import Venue from '@/components/venue';
import Cta from '@/components/cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhyAttend />
        <Speakers />
        <Agenda />
        <Venue />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
