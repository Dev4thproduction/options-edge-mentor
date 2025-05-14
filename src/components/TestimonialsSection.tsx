
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "My first profit came after unlearning 2 years of YouTube. This man changed how I look at trades.",
    author: "Ravi",
    location: "Indore"
  },
  {
    quote: "Finally understood Greeks, adjustments, and mindset in a way I could act on.",
    author: "Shruti",
    location: "Mumbai"
  },
  {
    quote: "Not motivational talk. Not theory. Just pure, structured skill-building.",
    author: "Alok",
    location: "Delhi"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 gradient-text">
            Traders Talk. Numbers Back It.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-2 border-fintech-purple/10 card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col h-full p-4">
                  <Quote className="h-8 w-8 text-fintech-purple/40 mb-4" />
                  
                  <p className="text-lg mb-4 flex-grow">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="pt-4 border-t">
                    <p className="font-medium">— {testimonial.author}, {testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
