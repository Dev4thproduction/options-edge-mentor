
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Book, Mail, Video, User, Users } from 'lucide-react';

interface Offering {
  icon: React.ElementType;
  title: string;
  description: string;
  pricing: string;
  ctaText: string;
  detailContent: string;
}

const offerings: Offering[] = [
  {
    icon: Book,
    title: "eBook",
    description: "A powerful 60-minute read: \"How Options Actually Work\"",
    pricing: "₹149",
    ctaText: "Buy for ₹149",
    detailContent: "This concise, no-fluff eBook breaks down options trading fundamentals in plain language. Learn what actually moves options prices, how to structure trades, and the most common mistakes to avoid. Perfect for beginners and intermediate traders who want clarity without complexity."
  },
  {
    icon: Mail,
    title: "Bi-weekly Newsletter",
    description: "Advanced concepts + mental models for options trading",
    pricing: "Free",
    ctaText: "Join Free",
    detailContent: "Twice a month, receive an email packed with advanced options concepts, mental models, and frameworks I personally use. Each newsletter includes case studies from real trades and market situations, helping you build the critical thinking skills needed for consistent trading."
  },
  {
    icon: Video,
    title: "Weekly Webinar",
    description: "Strategy breakdowns, real trade reviews, open Q&A sessions",
    pricing: "₹99",
    ctaText: "Reserve Seat – ₹99",
    detailContent: "Join our interactive weekly webinars where we break down current market conditions, review real trade setups, and answer your questions live. Each session is recorded and made available to participants, giving you a growing library of practical options trading knowledge."
  },
  {
    icon: User,
    title: "1-on-1 Session",
    description: "Personal clarity session on your trading goals & path",
    pricing: "₹999",
    ctaText: "Apply – ₹999",
    detailContent: "Schedule a private 60-minute video call where we'll discuss your unique trading journey, identify your strengths and weaknesses, and create a customized roadmap for your development as an options trader. This is your opportunity to get personalized guidance and clarity."
  },
  {
    icon: Users,
    title: "Mentorship Program",
    description: "6-month flagship. Deep learning. Live market strategies.",
    pricing: "Apply Now",
    ctaText: "Apply Now",
    detailContent: "My comprehensive 6-month mentorship program gives you the complete foundation to trade options professionally. Includes structured learning modules, live trading sessions, strategy workshops, weekly group calls, and unlimited email support. Limited to 30 participants per batch to maintain quality."
  }
];

const OfferingsSection = () => {
  const [selectedOffering, setSelectedOffering] = useState<Offering | null>(null);
  
  return (
    <section id="offerings" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 gradient-text">
            Start Wherever You Are. Learn However You Prefer.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-fintech-purple/10 flex items-center justify-center mb-4">
                  <offering.icon className="h-6 w-6 text-fintech-purple" />
                </div>
                <h3 className="text-xl font-bold">{offering.title}</h3>
              </CardHeader>
              
              <CardContent className="pb-4">
                <p className="text-gray-600">{offering.description}</p>
              </CardContent>
              
              <CardFooter className="flex flex-col items-start pt-0">
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="text-lg font-semibold">{offering.pricing}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedOffering(offering)}
                  >
                    Quick View
                  </Button>
                </div>
                
                <Button 
                  className="w-full bg-fintech-purple hover:bg-fintech-purple/90"
                >
                  {offering.ctaText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedOffering} onOpenChange={() => setSelectedOffering(null)}>
        {selectedOffering && (
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                {selectedOffering.icon && <selectedOffering.icon className="h-5 w-5" />}
                {selectedOffering.title}
              </DialogTitle>
              <DialogDescription>
                {selectedOffering.description}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p>{selectedOffering.detailContent}</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">{selectedOffering.pricing}</span>
              <Button className="bg-fintech-purple hover:bg-fintech-purple/90">
                {selectedOffering.ctaText}
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default OfferingsSection;
