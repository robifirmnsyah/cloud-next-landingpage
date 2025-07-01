import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function Cta() {
  return (
    <section className="relative z-10 px-6 py-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
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
            <Link href="/register">
              <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 hover:from-blue-600 hover:via-purple-600 hover:to-red-600 text-white px-12 py-6 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                Register Now
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
            <Link href="https://cloud.google.com/blog/topics/google-cloud-next/google-cloud-next-2025-wrap-up">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-12 py-6 text-xl rounded-full bg-transparent"
              >
                Learn More
                <ExternalLink className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
