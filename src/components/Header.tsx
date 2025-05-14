
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="font-bold text-xl md:text-2xl text-fintech-purple">
          KundanKishore<span className="text-fintech-orange">.</span>in
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm hover:text-fintech-purple transition-colors">About</a>
          <a href="#offerings" className="text-sm hover:text-fintech-purple transition-colors">Learn</a>
          <a href="#why-me" className="text-sm hover:text-fintech-purple transition-colors">Why Me</a>
          <a href="#testimonials" className="text-sm hover:text-fintech-purple transition-colors">Testimonials</a>
          <a href="#blog" className="text-sm hover:text-fintech-purple transition-colors">Blog</a>
        </nav>
        
        <div className="hidden md:block">
          <Button className="bg-fintech-purple hover:bg-fintech-purple/90">
            Apply For Mentorship
          </Button>
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-background/95 backdrop-blur-sm border-b">
          <nav className="flex flex-col space-y-3">
            <a 
              href="#about" 
              className="py-2 hover:text-fintech-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#offerings" 
              className="py-2 hover:text-fintech-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </a>
            <a 
              href="#why-me" 
              className="py-2 hover:text-fintech-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Me
            </a>
            <a 
              href="#testimonials" 
              className="py-2 hover:text-fintech-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#blog" 
              className="py-2 hover:text-fintech-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <Button 
              className="w-full mt-2 bg-fintech-purple hover:bg-fintech-purple/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply For Mentorship
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
