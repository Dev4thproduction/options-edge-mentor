
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-fintech-purple to-fintech-purple-light text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            No Gimmicks. No Guesswork. Just Precision Mentorship in Options Trading.
          </h2>
          
          <p className="text-xl mb-10">
            Pick your starting point.
            <br />
            If you're serious, we'll meet at the top — inside the mentorship.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="bg-white text-fintech-purple hover:bg-white/90">
              Apply for Mentorship
            </Button>
            <Button className="bg-white text-fintech-purple hover:bg-white/90">
              Join Webinar
            </Button>
            <Button className="bg-white text-fintech-purple hover:bg-white/90">
              Buy eBook
            </Button>
            <Button className="bg-white text-fintech-purple hover:bg-white/90">
              Book 1:1 Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
