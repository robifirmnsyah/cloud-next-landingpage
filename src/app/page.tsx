import Header from '@/components/header';
import Hero from '@/components/hero';
import Explore from '@/components/explore';
import Speakers from '@/components/speakers';
import Agenda from '@/components/agenda';
import Venue from '@/components/venue';
import WhyAttend from '@/components/why-attend';
import Cta from '@/components/cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Explore />
        <Speakers />
        <Agenda />
        <Venue />
        <WhyAttend />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
