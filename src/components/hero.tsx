import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative z-10 px-6 py-16 bg-gray-900 text-white">
            {/* Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
            </div>

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
            </div>
        </section>
    )
}
