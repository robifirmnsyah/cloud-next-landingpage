import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Lightbulb, Rocket, Users, Trophy, Sparkles } from 'lucide-react';

export default function AgentDevDay() {
  return (
    <section id="agent-dev-day" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-lg px-4 py-2">Special Event</Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Agent Development Day
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Get ready to unlock your creativity and technical skills at Agent Development Day, part of Cloud Next Extended Bandung 2025!
          </p>
        </div>

        {/* Highlight Card */}
        <Card className="mb-12 bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-200 dark:border-orange-800">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-orange-500 mr-2" />
              <h3 className="text-2xl font-bold text-foreground">This year&apos;s special highlight?</h3>
            </div>
            <p className="text-lg text-muted-foreground">
              We&apos;re launching a <strong>Mini Hackathon using ADK (Agent Development Kit)</strong>, where you&apos;ll get the chance to build your own AI Agent and compete for exciting prizes.
            </p>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* What is ADK */}
          <Card className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">What is ADK?</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                ADK (Agent Development Kit) is your toolkit to quickly develop AI-powered agents that can interact, automate tasks, and bring real-world use cases to life.
              </p>
            </CardContent>
          </Card>

          {/* Mini Hackathon Details */}
          <Card className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 border-purple-200 dark:border-purple-800">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Mini Hackathon Details</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Use ADK to build innovative AI Agents
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Compete solo or in teams
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Solve real-world challenges
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Present your solution to our expert judges
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Exciting prizes await the top teams!
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Collaborative</h4>
            <p className="text-muted-foreground">Work solo or form teams to tackle challenges together</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Innovative</h4>
            <p className="text-muted-foreground">Turn ideas into impact with hands-on AI development</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Rewarding</h4>
            <p className="text-muted-foreground">Compete for exciting prizes and recognition</p>
          </div>
        </div>
      </div>
    </section>
  );
}