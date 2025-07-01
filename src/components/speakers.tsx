import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const speakers = [
  {
    name: 'Esther Irawati Setiawan',
    title: 'Google Developer Expert in AI and Cloud, Professor ISTTS',
    avatar: 'https://storage.googleapis.com/cloud-next-bandung/images/speaker1.jpeg',
    initials: 'TK',
    aiHint: 'professional man'
  },
  {
    name: 'Imre Nagi',
    title: 'Google Developer Expert Cloud',
    avatar: 'https://storage.googleapis.com/cloud-next-bandung/images/speaker2.jpeg',
    initials: 'SP',
    aiHint: 'professional man glasses'
  },
  {
    name: 'Joan Santoso',
    title: 'Googe Developer Expert in AI and Cloud,  Vice Rector 1 Institut Informatika Indonesia (IKADO)',
    avatar: 'https://storage.googleapis.com/cloud-next-bandung/images/speaker5.jpeg',
    initials: 'YK',
    aiHint: 'professional woman'
  },
  {
    name: 'Ibnu Sina Wardy',
    title: 'CEO @GITS.ID, Google Developer Expert Cloud and AI',
    avatar: 'https://storage.googleapis.com/cloud-next-bandung/images/speaker4.png',
    initials: 'MR',
    aiHint: 'professional man suit'
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Speakers</h2>
          <p className="text-lg text-muted-foreground mt-2">Meet the experts who will be sharing their insights.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <Card key={speaker.name} className="text-center bg-card/80 backdrop-blur-sm border-white/10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <CardHeader className="items-center p-6">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={speaker.avatar} alt={speaker.name} data-ai-hint={speaker.aiHint} />
                  <AvatarFallback>{speaker.initials}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl font-semibold">{speaker.name}</CardTitle>
                <CardDescription className="mt-1">{speaker.title}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
