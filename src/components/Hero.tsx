import { ChevronDown, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import AISearchBar from "./AISearchBar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
      {/* Gradient Overlay - reduced opacity for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-6 md:space-y-8">
          {/* Eyebrow Text */}
          <div className="inline-flex items-center gap-2 text-hero-text text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase bg-brand-green backdrop-blur-md px-5 py-1.5 rounded-full shadow-button animate-enter hover-scale">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green" aria-hidden="true"></span>
            For Modern Dental Clinics
          </div>
          
          {/* Main Headline */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="mx-auto max-w-[26ch] sm:max-w-[30ch] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-hero-text leading-tight">
              More patients, less hassle
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-hero-text/90 max-w-3xl mx-auto leading-relaxed px-6">
              Automate reminders, track records, and see where your clinic can grow all in one simple system.
            </p>
          </div>

          {/* AI Search Bar */}
          <div className="pt-4 md:pt-8">
            <AISearchBar />
            <div className="mt-6 flex justify-center">
              <Link to="https://login.heynia.com">
                <Button variant="pink" size="lg" className="rounded-full px-6">Get Started</Button>
              </Link>
            </div>
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