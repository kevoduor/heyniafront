import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BookDemo = () => {
  useEffect(() => {
    // Redirect to Calendly
    window.location.href = "https://calendly.com/niahai";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="py-20">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Redirecting to Calendly...
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              You'll be redirected to our booking system in a moment.
            </p>
            <div className="flex justify-center">
              <div className="w-8 h-8 border-4 border-brand-pink border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="mt-8 text-muted-foreground">
              If you're not redirected automatically,{" "}
              <a 
                href="https://calendly.com/niahai" 
                className="text-brand-pink hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                click here
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookDemo;