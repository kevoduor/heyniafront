import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { updateMetaTags } from "@/utils/seo";

const Story = () => {
  useEffect(() => {
    updateMetaTags(
      "Why We Built HeyNia - A Mission-Driven Dental Tech Company",
      "Learn about our purpose: building better dental software while supporting global efforts to end gender-based violence.",
      "https://dental-clinic-management-software.com/our-story"
    );
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building technology that empowers dental professionals while making a positive impact on the world.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Why We Exist */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Why We Exist</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                At Heynia, we believe that technology should be a force for good, empowering businesses and helping shape a more just world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our purpose (Nia, in Swahili) is to build tools that not only support dental professionals but also contribute to ending gender-based violence, a global crisis that affects 1 in 3 women in their lifetime.
              </p>
            </section>

            {/* How We Live Our Purpose */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">How We Live Our Purpose</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We design intelligent, user-friendly software that helps dental practices grow with less stress and more efficiency.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Just as importantly, we commit 10 percent of our annual profit to organizations working on the frontlines to prevent gender-based violence and support survivors. This mission is deeply personal and embedded in the way we operate.
              </p>
            </section>

            {/* What We Offer */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">What We Offer</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Heynia is a modern, AI-powered platform built for dental practices that want to simplify their workflows, improve patient engagement, and grow sustainably.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When you choose Heynia, you're not just getting powerful software. You're standing with a company that leads with purpose and gives back.
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to join our mission?</h3>
              <p className="text-muted-foreground mb-6">
                Experience how Heynia can transform your dental practice while supporting a greater cause.
              </p>
              <button className="bg-brand-pink text-white font-semibold px-8 py-3 rounded-lg hover:bg-brand-pink/90 transition-colors duration-200">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Story;