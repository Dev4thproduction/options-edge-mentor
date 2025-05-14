
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-white to-fintech-orange/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight gradient-text">
              The 0.1% Think Differently. So Should You.
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Kundan Kishore is among the 0.1% who trade with logic, not luck.
              Now he's mentoring others to rise into that league.
            </p>
            
            <p className="text-lg md:text-xl mb-8 font-medium">
              Options trading isn't a shortcut — it's a craft. Learn it right.
            </p>
            
            <div className="mt-8">
              <Button className="bg-fintech-purple hover:bg-fintech-purple/90 px-8 py-6 text-lg flex items-center gap-2">
                Start Learning <ArrowRight className="h-5 w-5" />
              </Button>
              <p className="text-sm text-gray-600 mt-3">
                Choose from eBook, Webinar, 1:1 Session, or Mentorship
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-fintech-purple to-fintech-orange rounded-2xl blur-xl opacity-30 animate-float"></div>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden h-80 w-80 md:h-96 md:w-96">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
                  alt="Trading Expertise" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white text-lg font-medium">Kundan Kishore</div>
                  <div className="text-white/90 text-sm">Options Trading Mentor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
