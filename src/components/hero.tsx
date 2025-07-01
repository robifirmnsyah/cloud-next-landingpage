import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gray-900 text-white">
            {/* Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
            </div>

            <div className="max-w-7xl mx-auto text-center z-10">
                <div className="mb-8 md:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
                            Cloud Next Extended{' '}
                        </span>
                        <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
                            2025
                        </span>
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-6 py-2">
                        Agent Development Day
                    </h2>
                    <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-1.5 md:px-6 md:py-2 text-base md:text-lg rounded-full">
                        Bandung
                    </Badge>
                </div>

                <div className="mb-8 md:mb-12">
                    <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-8 max-w-2xl mx-auto">
                        <CardContent className="space-y-4 md:space-y-6 p-0">
                            <div className="flex items-center space-x-3 md:space-x-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                </div>
                                <div className="text-left">
                                    <div className="text-lg md:text-2xl font-bold text-white">Saturday, August 2nd 2025</div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 md:space-x-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                </div>
                                <div className="text-left">
                                    <div className="text-lg md:text-2xl font-bold text-white">09:00 - 17:00 WIB</div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 md:space-x-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                </div>
                                <div className="text-left">
                                    <div className="text-lg md:text-2xl font-bold text-white">West Java Investment Hub</div>
                                    <div className="text-sm md:text-base text-gray-300">(WJIH), Bandung</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
