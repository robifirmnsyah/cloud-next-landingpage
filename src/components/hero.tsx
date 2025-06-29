import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, MapPin } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative flex items-center justify-center min-h-screen w-full pt-24 pb-12">
             <div className="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]"></div>
            <div className="container relative z-10 flex flex-col items-center px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent pb-2">
                    Cloud Next Extended 2025
                </h1>
                <Badge className="mt-4 text-base font-semibold border-0 text-white px-6 py-2 rounded-full bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500">
                    Bandung
                </Badge>

                <Card className="mt-8 w-full max-w-sm shadow-2xl bg-card/80 backdrop-blur-sm border-white/10">
                    <CardContent className="p-6 space-y-5">
                        <div className="flex items-center gap-4 text-left">
                            <CalendarDays className="h-7 w-7 text-blue-400 flex-shrink-0" />
                            <p className="text-lg font-medium text-card-foreground">Saturday, August 2nd</p>
                        </div>
                        <div className="flex items-center gap-4 text-left">
                            <Clock className="h-7 w-7 text-orange-400 flex-shrink-0" />
                            <p className="text-lg font-medium text-card-foreground">09.00 AM - 05.00 PM</p>
                        </div>
                        <div className="flex items-center gap-4 text-left">
                            <MapPin className="h-7 w-7 text-red-500 flex-shrink-0" />
                            <p className="text-lg font-medium text-card-foreground">West Java Investment Hub (WJIH)</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
