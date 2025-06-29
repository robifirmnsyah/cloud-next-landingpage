import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mic, Coffee, Utensils, Code, MessageSquare } from 'lucide-react';

const agendaItems = [
  { time: '09:00 - 09:30', title: 'Registration & Welcome Coffee', type: 'Networking', icon: Coffee },
  { time: '09:30 - 10:15', title: 'Opening Keynote: The Future of Cloud', type: 'Keynote', icon: Mic },
  { time: '10:15 - 11:00', title: 'Deep Dive into Generative AI with Gemini', type: 'Session', icon: Code },
  { time: '11:00 - 11:15', title: 'Coffee Break', type: 'Break', icon: Coffee },
  { time: '11:15 - 12:00', title: 'Building Scalable Apps with Firebase', type: 'Session', icon: Code },
  { time: '12:00 - 13:00', title: 'Lunch Break', type: 'Break', icon: Utensils },
  { time: '13:00 - 13:45', title: 'Serverless on Google Cloud: A Practical Guide', type: 'Workshop', icon: Code },
  { time: '13:45 - 14:30', title: 'Data Analytics with BigQuery', type: 'Session', icon: Code },
  { time: '14:30 - 15:15', title: 'Closing Remarks & Panel Discussion', type: 'Panel', icon: MessageSquare },
];

export default function Agenda() {
  return (
    <section id="agenda" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Event Agenda</h2>
          <p className="text-lg text-muted-foreground mt-2">Plan your day with our schedule of talks and workshops.</p>
        </div>
        <Card className="bg-card/80 backdrop-blur-sm border-white/10 rounded-2xl shadow-lg">
          <CardContent className="p-8">
            <div className="flow-root">
              <ul className="-mb-8">
                {agendaItems.map((item, itemIdx) => (
                  <li key={item.title}>
                    <div className="relative pb-10">
                      {itemIdx !== agendaItems.length - 1 ? (
                        <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-border" aria-hidden="true" />
                      ) : null}
                      <div className="relative flex items-start space-x-4">
                        <div>
                          <span className="h-10 w-10 rounded-full bg-muted flex items-center justify-center ring-8 ring-background">
                            <item.icon className="h-5 w-5 text-secondary" />
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between items-start space-x-4">
                          <div>
                            <p className="text-sm text-muted-foreground">{item.time}</p>
                            <p className="font-medium text-foreground mt-1">{item.title}</p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-muted-foreground pt-1">
                            <Badge variant="outline" className="font-semibold">{item.type}</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
