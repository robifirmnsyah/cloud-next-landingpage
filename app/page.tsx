import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Code,
  Trophy,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Mail,
  Linkedin,
  Instagram,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img src="/images/gdg-logo.png" alt="Google Developer Groups Logo" className="w-8 h-8" />
              <div>
                <div className="text-sm font-medium">Google Developer Groups</div>
                <div className="text-xs text-gray-400">Cloud • Bandung</div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/images/gcp-logo.png" alt="Google Developer Groups Logo" className="w-8 h-8" />
            <div>
              <div className="text-sm font-medium">Google Cloud</div>
              <div className="text-xs text-gray-400">Next '25</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
                Cloud Next Extended
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                2025
              </span>
            </h1>
            <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 text-lg rounded-full">
              Bandung
            </Badge>
          </div>

          <div className="mb-12">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-3xl p-8 max-w-2xl mx-auto">
              <CardContent className="space-y-6 p-0">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">Saturday, August 2nd</div>
                    <div className="text-gray-300">Agent Development Day</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">09:00 AM - 05:00 PM</div>
                    <div className="text-gray-300">Full day event</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">West Java Investment Hub</div>
                    <div className="text-gray-300">(WJIH), Bandung</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 hover:from-blue-600 hover:via-purple-600 hover:to-red-600 text-white px-12 py-6 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
            Register Now
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Event Description */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Agent Development Day
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join us for an exciting day of learning and building with Google Cloud's AI Agent ecosystem. Discover the
              latest innovations, attend technical sessions, and participate in hands-on development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <CardContent className="text-center p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Technical Sessions</h3>
                <p className="text-white">
                  Deep dive into Google Cloud AI Agent ecosystem with expert speakers and hands-on workshops.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <CardContent className="text-center p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Networking</h3>
                <p className="text-white">
                  Connect with fellow developers, Google experts, and the vibrant GDG Cloud Bandung community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <CardContent className="text-center p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Hands-on Learning</h3>
                <p className="text-white">
                  Get practical experience with the latest Google Cloud tools and Agent Development Kit (ADK).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Focus Areas
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore the key technologies and topics that will be covered during our Agent Development Day
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* AI */}
            <Card className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="w-28 h-28 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-orange-500" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white">AI</h3>
              </CardContent>
            </Card>

            {/* Cloud */}
            <Card className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="w-28 h-28 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
                    <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white">Cloud</h3>
              </CardContent>
            </Card>

            {/* Web */}
            <Card className="bg-gradient-to-br from-green-400 to-teal-500 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="w-28 h-28 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
                    <span className="text-4xl font-bold text-green-500">&lt;/&gt;</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white">Web</h3>
              </CardContent>
            </Card>

            {/* Data */}
            <Card className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="w-28 h-28 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
                    <svg className="w-10 h-10 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zM4 14v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white">Data</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mini Hackathon Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-red-500 rounded-2xl flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                  Mini Hackathon
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Put your skills to the test in our exciting mini hackathon using Google Cloud's Agent Development Kit
                (ADK). Build innovative AI agents and compete for amazing prizes!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Team Formation</h4>
                    <p className="text-gray-300">Form teams of 2-4 developers and get ready to innovate together.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Build with ADK</h4>
                    <p className="text-gray-300">
                      Use Google Cloud's Agent Development Kit to create intelligent AI agents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Present & Win</h4>
                    <p className="text-gray-300">
                      Showcase your creation and compete for exciting prizes and recognition.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-6 text-center">What You'll Get</h4>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Access to Google Cloud ADK</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Mentorship from Google experts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Exclusive swag and prizes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Certificate of participation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Prizes Section */}
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Amazing Prizes Await!
                </span>
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {/* 1st Place */}
                <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg border-yellow-400/30 rounded-2xl p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                  <CardContent className="p-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <Trophy className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      1st Place
                    </div>
                    <div className="text-2xl font-bold mb-4 text-white">$1,000 Cash Prize</div>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Google Cloud Credits ($500)</li>
                      <li>• Premium Google Swag Package</li>
                      <li>• GDG Cloud Bandung Hoodie</li>
                      <li>• Certificate of Excellence</li>
                      <li>• Mentorship Session with Google Expert</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* 2nd Place */}
                <Card className="bg-gradient-to-br from-gray-400/20 to-gray-600/20 backdrop-blur-lg border-gray-400/30 rounded-2xl p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-600"></div>
                  <CardContent className="p-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <Trophy className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                      2nd Place
                    </div>
                    <div className="text-2xl font-bold mb-4 text-white">$600 Cash Prize</div>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Google Cloud Credits ($300)</li>
                      <li>• Google Swag Package</li>
                      <li>• GDG Cloud Bandung T-Shirt</li>
                      <li>• Certificate of Achievement</li>
                      <li>• Priority Access to Future Events</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* 3rd Place */}
                <Card className="bg-gradient-to-br from-amber-600/20 to-amber-800/20 backdrop-blur-lg border-amber-600/30 rounded-2xl p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-800"></div>
                  <CardContent className="p-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <Trophy className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                      3rd Place
                    </div>
                    <div className="text-2xl font-bold mb-4 text-white">$400 Cash Prize</div>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Google Cloud Credits ($200)</li>
                      <li>• Google Swag Package</li>
                      <li>• GDG Sticker Pack</li>
                      <li>• Certificate of Participation</li>
                      <li>• Networking Opportunity</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Prizes */}
              <div className="mt-8 text-center">
                <Card className="bg-white/5 backdrop-blur-lg border-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
                  <CardContent className="p-0">
                    <h4 className="text-xl font-bold mb-4 text-white">Special Recognition</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                      <div>
                        <div className="font-semibold text-blue-400 mb-2">🏆 Best Innovation Award</div>
                        <div>Google Cloud Credits + Special Mention</div>
                      </div>
                      <div>
                        <div className="font-semibold text-green-400 mb-2">🎯 People's Choice Award</div>
                        <div>Community Voted + Exclusive Swag</div>
                      </div>
                    </div>
                    <div className="mt-4 text-xs text-gray-400">
                      * All participants receive a certificate of participation and exclusive event swag
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Highlights */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                Event Agenda
              </span>
            </h2>
            <p className="text-xl text-gray-300">A full day of learning, building, and networking</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-6 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-blue-400 min-w-[120px]">09:00 AM</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2">Registration & Welcome</h4>
                <p className="text-gray-300">Check-in, networking breakfast, and opening remarks</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-green-400 min-w-[120px]">10:00 AM</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2">Keynote: AI Agents Revolution</h4>
                <p className="text-gray-300">Introduction to Google Cloud AI Agent ecosystem and latest innovations</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-purple-400 min-w-[120px]">11:30 AM</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2">Technical Deep Dive</h4>
                <p className="text-gray-300">Hands-on workshop with Agent Development Kit (ADK)</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-red-400 min-w-[120px]">01:00 PM</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2">Mini Hackathon Begins</h4>
                <p className="text-gray-300">Team formation and start building your AI agents</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-yellow-400 min-w-[120px]">04:00 PM</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2">Demo & Awards</h4>
                <p className="text-gray-300">Project presentations, judging, and prize ceremony</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Build the Future?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join us for an unforgettable day of learning, building, and connecting with the Google Cloud AI community
              in Bandung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 hover:from-blue-600 hover:via-purple-600 hover:to-red-600 text-white px-12 py-6 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                Register Now
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-12 py-6 text-xl rounded-full bg-transparent"
              >
                Learn More
                <ExternalLink className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/images/gdg-logo.png" alt="Google Developer Groups Logo" className="w-8 h-8" />
                <div>
                  <div className="font-bold">GDG Cloud Bandung</div>
                  <div className="text-sm text-gray-400">Google Developer Groups</div>
                </div>
              </div>
              <p className="text-gray-400">Building the future with Google Cloud technologies in Bandung and beyond.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Event Details</h4>
              <div className="space-y-2 text-gray-400">
                <div>Saturday, August 2nd, 2025</div>
                <div>09:00 AM - 05:00 PM</div>
                <div>West Java Investment Hub (WJIH)</div>
                <div>Bandung, Indonesia</div>
              </div>
            </div>

            <div>
              <div>
                <h4 className="font-bold mb-4">Connect With Us</h4>
                <div className="space-y-3">
                  <a
                    href="mailto:gdgcloudbandung@gmail.com"
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-md flex items-center justify-center">
                      <Mail className="w-3 h-3 text-white" />
                    </div>
                    <span>gdgcloudbandung@gmail.com</span>
                  </a>

                  <a
                    href="https://www.instagram.com/gdgcloudbandung/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md flex items-center justify-center">
                      <Instagram className="w-3 h-3 text-white" />
                    </div>
                    <span>@gdgcloudbandung</span>
                  </a>

                  <a
                    href="https://www.youtube.com/@gdgcloudbandung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <div className="w-5 h-5 bg-gradient-to-r from-red-600 to-red-700 rounded-md flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                    <span>@gdgcloudbandung</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/gdg-cloud-bandung/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-md flex items-center justify-center">
                      <Linkedin className="w-3 h-3 text-white" />
                    </div>
                    <span>GDG Cloud Bandung</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Google Developer Groups Cloud Bandung. All rights reserved.</p>
            <p className="mt-2">In collaboration with Google Cloud Next '25</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
