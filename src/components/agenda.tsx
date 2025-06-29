import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

const agendaItems = [
  { time: '09:00 - 09:30', title: 'Registration & Welcome Coffee', type: 'Networking' },
  { time: '09:30 - 10:15', title: 'Opening Keynote: The Future of Cloud', type: 'Keynote' },
  { time: '10:15 - 11:00', title: 'Deep Dive into Generative AI with Gemini', type: 'Session' },
  { time: '11:00 - 11:15', title: 'Coffee Break', type: 'Break' },
  { time: '11:15 - 12:00', title: 'Building Scalable Apps with Firebase', type: 'Session' },
  { time: '12:00 - 13:00', title: 'Lunch Break', type: 'Break' },
  { time: '13:00 - 13:45', title: 'Serverless on Google Cloud: A Practical Guide', type: 'Workshop' },
  { time: '13:45 - 14:30', title: 'Data Analytics with BigQuery', type: 'Session' },
  { time: '14:30 - 15:15', title: 'Closing Remarks & Panel Discussion', type: 'Panel' },
];

export default function Agenda() {
  return (
    <section id="agenda" className="py-20 md:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Event Agenda</h2>
          <p className="text-lg text-muted-foreground mt-2">Plan your day with our schedule of talks and workshops.</p>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="flow-root">
              <ul className="-mb-8">
                {agendaItems.map((item, itemIdx) => (
                  <li key={item.title}>
                    <div className="relative pb-8">
                      {itemIdx !== agendaItems.length - 1 ? (
                        <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-border" aria-hidden="true" />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-accent flex items-center justify-center ring-8 ring-background">
                            <Clock className="h-5 w-5 text-primary" />
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-muted-foreground">{item.time}</p>
                            <p className="font-medium text-foreground">{item.title}</p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-muted-foreground">
                            <Badge variant={item.type === 'Keynote' ? 'default' : 'secondary'}>{item.type}</Badge>
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
