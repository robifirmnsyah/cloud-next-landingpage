"use client";

import Script from 'next/script'
import { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function RegisterPage() {
  const [widgetLoaded, setWidgetLoaded] = useState(false)
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    // Check if widget was previously loaded in this session
    const widgetCached = sessionStorage.getItem('goers-widget-loaded')
    if (widgetCached === 'true') {
      setWidgetLoaded(true)
      setIsFirstLoad(false)
      return
    }

    // Check if widget is loaded and has actual content
    const checkWidget = () => {
      const widget = document.getElementById('___GOERS___widget')
      // Check if widget exists and has meaningful content (not just the link text)
      if (widget && (widget.children.length > 0 || widget.innerHTML.includes('iframe') || widget.innerHTML.includes('ticket'))) {
        setWidgetLoaded(true)
        setIsFirstLoad(false)
        // Cache the widget loaded state
        sessionStorage.setItem('goers-widget-loaded', 'true')
      }
    }

    // Initial check after a short delay to allow scripts to load
    const initialTimeout = setTimeout(() => {
      checkWidget()
    }, 1000)

    // Then check every 1 second instead of 500ms for better performance
    const interval = setInterval(checkWidget, 1000)

    // Clean up interval after 15 seconds and force show widget
    const timeout = setTimeout(() => {
      clearInterval(interval)
      setWidgetLoaded(true) // Show widget even if not fully detected
      setIsFirstLoad(false)
      sessionStorage.setItem('goers-widget-loaded', 'true')
    }, 15000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* Main Content */}
      <main className="relative z-10 px-4 py-8 md:px-6 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="text-sm md:text-base">Back to Event</span>
            </Link>
          </div>

          {/* Page Title */}
          <div className="text-center mb-6 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
                Register Now
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
              Secure your spot for Cloud Next Extended Bandung 2025: Agent Development Day
            </p>
          </div>

          {/* Event Summary Card */}
          <div className="bg-white/10 backdrop-blur-lg border-white/20 rounded-xl md:rounded-3xl p-3 md:p-8 mb-6 md:mb-12">
            <div className="space-y-3 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
              <div className="text-center p-3 bg-white/5 rounded-lg md:bg-transparent md:p-0">
                <div className="text-lg md:text-2xl font-bold text-blue-400 mb-1 md:mb-2">📅 Date</div>
                <div className="text-sm md:text-lg">Saturday, August 2nd, 2025</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg md:bg-transparent md:p-0">
                <div className="text-lg md:text-2xl font-bold text-green-400 mb-1 md:mb-2">⏰ Time</div>
                <div className="text-sm md:text-lg">09:00 - 17:00 WIB</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg md:bg-transparent md:p-0">
                <div className="text-lg md:text-2xl font-bold text-orange-400 mb-1 md:mb-2">📍 Venue</div>
                <div className="text-sm md:text-lg">West Java Investment Hub</div>
              </div>
            </div>
          </div>

          {/* Ticket Widget Container */}
          <div className={`bg-white/5 backdrop-blur-lg border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 transition-all duration-500 ${!widgetLoaded ? 'min-h-[200px]' : 'min-h-[400px]'}`}>
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Choose Your Ticket</h2>
              <p className="text-sm md:text-base text-gray-300">Select your preferred ticket type and complete your registration</p>
            </div>
            
            {/* Goers Widget */}
            <div className="w-full relative">
              {!widgetLoaded && isFirstLoad && (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mb-4"></div>
                  <p className="text-gray-300">Loading ticket options...</p>
                </div>
              )}
              <div className={`${widgetLoaded ? 'block opacity-100' : 'hidden opacity-0'} transition-opacity duration-500`}>
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