"use client";

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Set target date: August 2nd, 2025, 09:00 WIB (UTC+7)
        const targetDate = new Date('2025-08-02T09:00:00+07:00').getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gray-900 text-white overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Large gradient blobs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full opacity-30 blur-3xl animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-red-500 to-orange-500 rounded-full opacity-30 blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full opacity-30 blur-3xl animate-pulse delay-2000"></div>
                
                {/* Smaller accent blobs */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
            </div>

            <div className="max-w-6xl mx-auto text-center z-10">
                <div className="mb-10 md:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
                            Cloud Next Extended{' '}
                        </span>
                        <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                            2025
                        </span>
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300 mb-6 tracking-wide leading-relaxed">
                        Agent Development Day
                    </h2>
                    <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 md:px-6 md:py-2 text-sm md:text-base rounded-full shadow-lg">
                        Bandung
                    </Badge>
                </div>

                <div className="mb-8 md:mb-12">
                    <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl shadow-xl p-3 md:p-6 max-w-md lg:max-w-xl mx-auto">
                        <CardContent className="space-y-3 md:space-y-4 p-0">
                            <div className="flex items-center gap-2 md:gap-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm sm:text-base md:text-lg font-semibold text-white">Saturday, August 2nd 2025</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 md:gap-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm sm:text-base md:text-lg font-semibold text-white">09:00 - 17:00 WIB</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 md:gap-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm sm:text-base md:text-lg font-semibold text-white">TBD</div>
                                    <div className="text-xs sm:text-sm text-gray-300">Bandung</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Countdown Timer */}
                <div className="mb-8 md:mb-12">
                    <h3 className="text-lg md:text-xl font-medium text-slate-300 mb-4 tracking-wide">Event Starts In</h3>
                    <div className="flex justify-center items-center gap-1 md:gap-3 max-w-md mx-auto">
                        <div className="bg-white/10 bg-opacity-70 backdrop-blur-sm border border-white/20 rounded-2xl p-2 md:p-3 text-center shadow-xl min-w-[60px] md:min-w-[80px]">
                            <div className="text-xl md:text-3xl font-bold text-blue-400/90 mb-1">{String(timeLeft.days).padStart(2, '0')}</div>
                            <div className="text-xs text-gray-300 uppercase tracking-wide">Days</div>
                        </div>
                        <div className="text-white/70 text-lg md:text-2xl font-bold">:</div>
                        <div className="bg-white/10 bg-opacity-70 backdrop-blur-sm border border-white/20 rounded-2xl p-2 md:p-3 text-center shadow-xl min-w-[60px] md:min-w-[80px]">
                            <div className="text-xl md:text-3xl font-bold text-green-400/90 mb-1">{String(timeLeft.hours).padStart(2, '0')}</div>
                            <div className="text-xs text-gray-300 uppercase tracking-wide">Hours</div>
                        </div>
                        <div className="text-white/70 text-lg md:text-2xl font-bold">:</div>
                        <div className="bg-white/10 bg-opacity-70 backdrop-blur-sm border border-white/20 rounded-2xl p-2 md:p-3 text-center shadow-xl min-w-[60px] md:min-w-[80px]">
                            <div className="text-xl md:text-3xl font-bold text-yellow-400/90 mb-1">{String(timeLeft.minutes).padStart(2, '0')}</div>
                            <div className="text-xs text-gray-300 uppercase tracking-wide">Minutes</div>
                        </div>
                        <div className="text-white/70 text-lg md:text-2xl font-bold">:</div>
                        <div className="bg-white/10 bg-opacity-70 backdrop-blur-sm border border-white/20 rounded-2xl p-2 md:p-3 text-center shadow-xl min-w-[60px] md:min-w-[80px]">
                            <div className="text-xl md:text-3xl font-bold text-red-400/90 mb-1">{String(timeLeft.seconds).padStart(2, '0')}</div>
                            <div className="text-xs text-gray-300 uppercase tracking-wide">Seconds</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg font-semibold rounded-full shadow-lg">
                        <Link href="/register">
                            Register Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
