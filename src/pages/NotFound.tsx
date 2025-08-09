import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl text-center">
          <div className="text-9xl font-bold text-brand-pink/20 select-none">404</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground">Page not found</h1>
          <p className="mt-4 text-muted-foreground">The page you're looking for doesn't exist or was moved. Let's get you back on track.</p>
          <div className="mt-8">
            <Link to="/" className="inline-flex items-center px-6 py-3 rounded-lg bg-brand-pink text-white hover:bg-brand-pink/90 transition-colors">Go Home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
