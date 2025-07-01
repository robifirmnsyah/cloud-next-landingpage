import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const speakers = [
  {
    name: 'Esther Irawati Setiawan',
    title: 'Google Developer Expert in AI and Cloud, Professor ISTTS',
    avatar: '/images/speaker1.svg',
    initials: 'TK',
    aiHint: 'professional man',
    cardColor: 'from-blue-500/20 to-cyan-500/20 border-blue-200/50'
  },
  {
    name: 'Imre Nagi',
    title: 'Google Developer Expert Cloud',
    avatar: '/images/speaker2.svg',
    initials: 'SP',
    aiHint: 'professional man glasses',
    cardColor: 'from-purple-500/20 to-pink-500/20 border-purple-200/50'
  },
  {
    name: 'Joan Santoso',
    title: 'Googe Developer Expert in AI and Cloud,  Vice Rector 1 Institut Informatika Indonesia (IKADO)',
    avatar: '/images/speaker3.svg',
    initials: 'YK',
    aiHint: 'professional woman',
    cardColor: 'from-green-500/20 to-emerald-500/20 border-green-200/50'
  },
  {
    name: 'Ibnu Sina Wardy',
    title: 'CEO @GITS.ID, Google Developer Expert Cloud and AI',
    avatar: '/images/speaker4.svg',
    initials: 'MR',
    aiHint: 'professional man suit',
    cardColor: 'from-orange-500/20 to-red-500/20 border-orange-200/50'
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
            <Card key={speaker.name} className={`text-center bg-gradient-to-br ${speaker.cardColor} backdrop-blur-sm border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105`}>
              <CardHeader className="items-center p-6">
                <Avatar className="h-32 w-32 mb-4 ring-4 ring-white/20">
                  <AvatarImage src={speaker.avatar} alt={speaker.name} data-ai-hint={speaker.aiHint} className="object-cover" />
                  <AvatarFallback className="text-lg font-semibold">{speaker.initials}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl font-bold text-foreground">{speaker.name}</CardTitle>
                <CardDescription className="mt-1 text-foreground/90">{speaker.title}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
