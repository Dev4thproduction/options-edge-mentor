
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">KundanKishore.in</h3>
            <p className="mb-4 text-gray-400">
              Building the next generation of confident, competent options traders through structured mentorship and clarity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new content and offerings.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 border-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-fintech-purple hover:bg-fintech-purple/90">
                Join
              </Button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} KundanKishore.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
