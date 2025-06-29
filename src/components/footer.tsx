import { Logo } from '@/components/logo';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground max-w-md">
              Cloud Next Extended Bandung brings together the local community to explore the latest from Google Cloud.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#agenda" className="text-sm text-muted-foreground hover:text-primary">Agenda</a></li>
                <li><a href="#speakers" className="text-sm text-muted-foreground hover:text-primary">Speakers</a></li>
                <li><a href="#venue" className="text-sm text-muted-foreground hover:text-primary">Venue</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Code of Conduct</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cloud Next Extended Bandung. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
