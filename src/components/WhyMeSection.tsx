
import { CheckCircle } from 'lucide-react';

const WhyMeSection = () => {
  const achievements = [
    "18+ years in markets",
    "Worked at Barclays, Nomura & ICICI Securities",
    "Mentored over 2 lakh learners",
    "Created India's most structured mentorship in options trading",
    "Focus on frameworks, not fluff"
  ];

  return (
    <section id="why-me" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center gradient-text">
            This Isn't Content. It's Conviction.
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-lg mb-6">
              Anyone can share market tips.
              <br />
              But real options trading demands structure, conviction, and execution.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 shadow-sm border">
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-fintech-green mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{achievement}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xl font-medium text-center">
                I don't teach theory. I teach the mindset and mechanics of the 0.1%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
