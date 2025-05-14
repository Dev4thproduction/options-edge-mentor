
import { Card, CardContent } from '@/components/ui/card';

const LearningSection = () => {
  const learningPoints = [
    "Directional + Non-directional Options Strategies",
    "Capital & Risk Management",
    "Trade Journaling + Execution Discipline",
    "Market Timing & Adjustments",
    "Mental Models for Consistent Decision-Making"
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-fintech-purple/5 to-fintech-orange/5">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 gradient-text">
            What You Build Under My Guidance
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningPoints.map((point, index) => (
            <Card key={index} className="bg-white card-hover">
              <CardContent className="pt-6">
                <div className="h-full flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-fintech-purple flex items-center justify-center mb-4 text-white font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg font-medium">{point}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-xl font-medium">
            This isn't a course. It's a system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
