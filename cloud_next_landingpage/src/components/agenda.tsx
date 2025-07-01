import { Card } from '@/components/ui/card';

const agendaItems = [
  { time: '07:30 AM', title: 'Registration', description: 'Check-in and welcome registration', color: 'text-blue-400' },
  { time: '09:00 AM', title: 'Keynote - Organizers', description: 'Opening remarks and event introduction', color: 'text-green-400' },
  { time: '09:20 AM', title: 'Tech Talk 1', description: 'Deep dive into Google Cloud AI and latest technologies', color: 'text-purple-400' },
  { time: '11:00 AM', title: 'Mini Class', description: 'Mobile, Web, and Live Streaming development workshops', color: 'text-orange-400' },
  { time: '12:00 PM', title: 'Lunch Break', description: 'Enjoy lunch and network with peers', color: 'text-yellow-400' },
  { time: '01:00 PM', title: 'Tech Talk 2', description: 'Building Scalable Apps with Firebase', color: 'text-pink-400' },
  { time: '02:00 PM', title: 'Community Session', description: 'Open forum and community showcase', color: 'text-teal-400' },
  { time: '03:00 PM', title: 'Closing Remarks', description: 'Wrap-up and thank you', color: 'text-indigo-400' },
];

export default function Agenda() {
  return (
    <section id="agenda" className="py-20 md:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Event Agenda
          </h2>
          <p className="text-lg text-muted-foreground mt-4">A full day of learning, building, and networking</p>
        </div>
        
        <div className="space-y-6">
          {agendaItems.map((item) => (
            <Card key={item.title} className="bg-muted/50 border-border rounded-2xl hover:border-primary transition-colors duration-300">
              <div className="p-6 flex items-center space-x-6">
                <div className="w-32 flex-shrink-0">
                  <p className={`text-xl font-bold ${item.color}`}>{item.time}</p>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
