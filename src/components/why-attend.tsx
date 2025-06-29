import { Lightbulb, Users, Network, Code } from 'lucide-react';

const benefits = [
  {
    icon: Lightbulb,
    title: 'Learn from Experts',
    description: 'Gain insights from industry leaders and Google experts on the latest cloud technologies.',
  },
  {
    icon: Users,
    title: 'Connect with Peers',
    description: 'Network with fellow developers, IT professionals, and business leaders from the region.',
  },
  {
    icon: Code,
    title: 'Hands-On Experience',
    description: 'Participate in hands-on workshops and see live demos of cutting-edge solutions.',
  },
  {
    icon: Network,
    title: 'Expand Your Network',
    description: 'Build valuable connections that can help you advance your career and projects.',
  },
];

export default function WhyAttend() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Why You Should Attend</h2>
          <p className="text-lg text-muted-foreground mt-2">Unlock new possibilities for your business and career.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="p-4 bg-accent rounded-full">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
