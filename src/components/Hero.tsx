import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import AISearchBar from "./AISearchBar";

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
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 md:space-y-8">
          {/* Eyebrow Text */}
          <div className="text-black text-sm md:text-base font-medium tracking-wide uppercase bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
            For Modern Dental Clinics
          </div>
          
          {/* Main Headline */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-hero-text leading-tight">
              More patients, less hassle
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-hero-text/90 max-w-3xl mx-auto leading-relaxed px-4">
              Automate reminders, track records, and see where your clinic can grow all in one simple system.
            </p>
          </div>

          {/* AI Search Bar */}
          <div className="pt-4 md:pt-8">
            <AISearchBar />
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