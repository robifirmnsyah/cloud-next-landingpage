import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const speakers = [
  {
    name: 'Jane Doe',
    title: 'Cloud Architect, Google',
    avatar: 'https://placehold.co/100x100.png',
    initials: 'JD',
    aiHint: 'professional woman'
  },
  {
    name: 'John Smith',
    title: 'DevOps Engineer, Firebase',
    avatar: 'https://placehold.co/100x100.png',
    initials: 'JS',
    aiHint: 'professional man'
  },
  {
    name: 'Alice Johnson',
    title: 'AI/ML Specialist, Vertex AI',
    avatar: 'https://placehold.co/100x100.png',
    initials: 'AJ',
    aiHint: 'tech speaker'
  },
  {
    name: 'Bob Williams',
    title: 'Data Scientist, BigQuery',
    avatar: 'https://placehold.co/100x100.png',
    initials: 'BW',
    aiHint: 'data scientist'
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 md:py-32 bg-accent">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Keynote Speakers</h2>
          <p className="text-lg text-muted-foreground mt-2">Meet the experts who will be sharing their insights.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <Card key={speaker.name} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="items-center p-6">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={speaker.avatar} alt={speaker.name} data-ai-hint={speaker.aiHint} />
                  <AvatarFallback>{speaker.initials}</AvatarFallback>
                </Avatar>
                <CardTitle>{speaker.name}</CardTitle>
                <CardDescription>{speaker.title}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
