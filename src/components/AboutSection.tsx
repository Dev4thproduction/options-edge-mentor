
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 gradient-text">
            I'm Not Just Teaching Trading. I'm Rebuilding How It's Understood.
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/3">
            <div className="relative rounded-2xl overflow-hidden h-96">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="Kundan Kishore" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <p className="text-lg mb-6">
              I'm Kundan Kishore — an ex-investment banker turned full-time trading mentor.
            </p>
            
            <p className="text-lg mb-6">
              With over 18 years of experience in the financial markets, I've worked with global firms like Barclays, Nomura, and ICICI Securities, advising clients and building structured investment strategies.
            </p>
            
            <p className="text-lg mb-6">
              I belong to the rare 0.1% of traders in India who trade with clarity, conviction, and edge — not emotion or hype.
            </p>
            
            <p className="text-lg mb-6 font-medium">
              But I don't stop at trading.
            </p>
            
            <p className="text-lg mb-6">
              I've mentored thousands of learners to rise above market noise, social media tips, and guesswork — and build a serious foundation in options trading.
            </p>
            
            <p className="text-lg mb-6">
              They don't follow the 99.9%.
              <br />
              They become the 0.1%.
            </p>
            
            <p className="text-lg mb-8 font-medium">
              If you're ready to trade like a strategist, I'll help you get there.
            </p>
            
            <Button className="bg-fintech-purple hover:bg-fintech-purple/90">
              Learn More About Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
