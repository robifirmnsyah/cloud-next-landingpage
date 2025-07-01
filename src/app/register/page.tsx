import { Metadata } from 'next'
import Script from 'next/script'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Register - Cloud Next Extended Bandung 2025',
  description: 'Register for Cloud Next Extended Bandung 2025: Agent Development Day',
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* Main Content */}
      <main className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
                Register Now
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Secure your spot for Cloud Next Extended Bandung 2025: Agent Development Day
            </p>
          </div>

          {/* Event Summary Card */}
          <div className="bg-white/10 backdrop-blur-lg border-white/20 rounded-3xl p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-2">📅 Date</div>
                <div className="text-lg">Saturday, August 2nd, 2025</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-2">⏰ Time</div>
                <div className="text-lg">09:00 AM - 05:00 PM</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-2">📍 Venue</div>
                <div className="text-lg">West Java Investment Hub</div>
              </div>
            </div>
          </div>

          {/* Ticket Widget Container */}
          <div className="bg-white/5 backdrop-blur-lg border-white/10 rounded-3xl p-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Choose Your Ticket</h2>
              <p className="text-gray-300">Select your preferred ticket type and complete your registration</p>
            </div>
            
            {/* Goers Widget */}
            <div className="w-full">
              <a 
                id="___GOERS___widget" 
                href="https://goersapp.com/events/cloud-next-extended-bandung-2025-agent-development-day--cloudnextbdg25" 
                data-background-color="transparent"
                className="block w-full text-center"
              >
                Cloud Next Extended Bandung 2025: Agent Development Day
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Load Goers Widget Scripts */}
      <Script 
        src="https://d1ah56qj523gwb.cloudfront.net/widget/1.2.1/widget.min.js" 
        integrity="sha384-SYWte49En/51CagiEURWoKO+a4U1ZOvF4U5bqEuKX52fp/ikiP8onM2mZ4hxZfKg" 
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script 
        src="https://d1ah56qj523gwb.cloudfront.net/widget/scroller/1.0.0/widget.scroller.min.js" 
        integrity="sha384-OzDpNO+ICNdbnJXZOq3wvYMMY/wWP5AMMdNq4qrleB+ELuEuRbZK6gZP95Tcx1in" 
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </div>
  )
}