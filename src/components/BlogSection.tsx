
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const blogs = [
  {
    title: "Understanding Delta Hedging for Retail Traders",
    excerpt: "Learn how professional traders manage directional risk and why it matters for your portfolio...",
    author: "Kundan Kishore",
    date: "May 10, 2025",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80"
  },
  {
    title: "The Mental Model That Changed My Trading Forever",
    excerpt: "How thinking in probabilities rather than predictions transformed my approach to markets...",
    author: "Kundan Kishore",
    date: "May 3, 2025",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80"
  },
  {
    title: "Non-directional Options Strategies for Volatile Markets",
    excerpt: "Three specific structures that thrive when the market can't make up its mind...",
    author: "Kundan Kishore",
    date: "April 26, 2025",
    image: "https://images.unsplash.com/photo-1642543348745-03b1219733d9?auto=format&fit=crop&q=80"
  },
  {
    title: "Position Sizing: The Overlooked Key to Trader Longevity",
    excerpt: "Why most retail traders blow up their accounts, and how simple math can save you...",
    author: "Kundan Kishore",
    date: "April 19, 2025",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80"
  }
];

const BlogSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleBlogs = blogs.slice(startIndex, startIndex + 2);
  
  const handlePrev = () => {
    setStartIndex(Math.max(0, startIndex - 2));
  };
  
  const handleNext = () => {
    setStartIndex(Math.min(blogs.length - 2, startIndex + 2));
  };

  return (
    <section id="blog" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-4xl font-bold gradient-text">
            Latest Insights
          </h2>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={handlePrev}
              disabled={startIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleNext}
              disabled={startIndex >= blogs.length - 2}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleBlogs.map((blog, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <h3 className="text-xl font-bold">{blog.title}</h3>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600">{blog.excerpt}</p>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <div className="text-sm text-gray-500">
                  {blog.author} • {blog.date}
                </div>
                <Button variant="ghost" className="text-fintech-purple">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button variant="outline">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
