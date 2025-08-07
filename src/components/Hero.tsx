import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-hero-text leading-tight">
              Your Clinic's
              <br />
              <span className="italic font-light text-hero-accent">Favorite Place</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-hero-text/90 max-w-3xl mx-auto leading-relaxed">
              A personalized dental management experience that helps you streamline operations, 
              enhance patient engagement, and grow with confidence — in just a few minutes a day.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="min-w-[200px]">
              Take a 1-Min Quiz
            </Button>
            <Button variant="heroSecondary" size="lg" className="min-w-[200px]">
              Get Started for Free
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 text-hero-text/60">
          <ChevronDown className="h-6 w-6 animate-bounce" />
          <p className="text-sm">Learn more</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-background via-background/80 to-transparent h-24"></div>
    </section>
  );
};

export default Hero;