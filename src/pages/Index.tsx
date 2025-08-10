import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { updateMetaTags } from "@/utils/seo";
import { ShieldCheck, BarChart3, Bot, MessageCircle, Clock } from "lucide-react";

const Index = () => {
  useEffect(() => {
    updateMetaTags(
      "Dental Software for Modern Clinics | HeyNia",
      "Discover HeyNia, the AI-powered dental clinic software helping modern practices streamline operations, enhance patient engagement, and grow with confidence.",
      "https://dental-clinic-management-software.com"
    );
  }, []);
  const dataFeatures = [
    {
      title: "A Unified Gateway to All Your Data",
      subtitle: "Internal Information",
      description: "Find deep insights in seconds from your appointments, messages, and team activities, so you can always know what's working and what needs attention."
    },
    {
      title: "Reliable Answers Beyond Your Clinic",
      subtitle: "External Intelligence", 
      description: "Find credible, up-to-date answers from across the web and turn them into clinic-specific actions you can take today."
    },
    {
      title: "Clinic Intelligence",
      subtitle: "Premium Insights",
      description: "Bring premium insights straight to your dashboard. Whether you're planning your next campaign or reviewing your team's performance, you're never flying blind."
    }
  ];

  const realTimeFeatures = [
    {
      title: "Clarity in Minutes",
      description: "Precise, reliable answers backed by trusted sources plus smart follow-up suggestions that help you dig deeper and make confident decisions for your clinic."
    },
    {
      title: "Visualize Your Data",
      description: "Turn numbers into simple charts, spot patterns fast, and ask follow-up questions to understand what's really going on."
    },
    {
      title: "Access the Best AI", 
      description: "Heynia uses top-tier AI models behind the scenes so you get smart, reliable support for scheduling, messaging, and marketing, all through one simple interface your team can actually use."
    }
  ];

  const clinicManagerTasks = [
    "Handling bookings",
    "Responding to patients",
    "Offering marketing support"
  ];

  const securityFeatures = [
    {
      title: "HIPAA-level Protection",
      description: "Designed to meet strict healthcare privacy standards, so your patient data stays secure, confidential, and fully compliant."
    },
    {
      title: "Data Privacy",
      description: "We never use your data to train AI models. Heynia is fully HIPAA and GDPR compliant, so your patient information stays private, protected, and under your control."
    },
    {
      title: "You're in Control",
      description: "Keep your data private with configurable file retention and automatic deletion so your clinic's info is safe, secure, and never stored longer than needed."
    },
    {
      title: "User Management",
      description: "Control who can upload files, access patient data, or share answers so your whole team stays aligned, secure, and compliant without the tech headaches."
    },
    {
      title: "Simple, Secure Access for Your Whole Team",
      description: "With SSO and SCIM, you can easily manage who gets access to Heynia, keeping your clinic secure while making login seamless for everyone."
    },
    {
      title: "Enhanced Visibility",
      description: "Shows you exactly who did what and when so you can stay compliant, spot issues early, and feel confident knowing everything's under control."
    }
  ];

  const productivityBenefits = [
    "Reduces busywork",
    "Keeps your team focused", 
    "Makes your operations more efficient"
  ];

  const careBenefits = [
    "Less paperwork",
    "Fewer follow-ups",
    "More smiles"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Data Gateway Features */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {dataFeatures.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-8 border">
                {index === 0 && (
                  <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center mb-4">
                    <BarChart3 className="w-5 h-5 text-brand-pink" />
                  </div>
                )}
                {index === 1 && (
                  <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center mb-4">
                    <Bot className="w-5 h-5 text-brand-pink" />
                  </div>
                )}
                {index === 2 && (
                  <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5 text-brand-pink" />
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-brand-pink font-semibold mb-4">{feature.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Insights */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-16">
            Real-time Insights to Help You Lead with Precision and Ease
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {realTimeFeatures.map((feature, index) => (
              <div key={index} className="bg-background rounded-xl p-8 border">
                <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center mb-4">
                  {index === 0 && <Clock className="w-5 h-5 text-brand-pink" />}
                  {index === 1 && <BarChart3 className="w-5 h-5 text-brand-pink" />}
                  {index === 2 && <Bot className="w-5 h-5 text-brand-pink" />}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Manager */}
      <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-muted rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Your Dedicated Clinic Manager</h2>
              <p className="text-lg text-muted-foreground mb-6">It works around the clock:</p>
              <img src="/lovable-uploads/23cca6e8-8da2-4663-bcf3-5ff457c6fdae.png" alt="Dedicated clinic manager" className="w-full h-64 md:h-80 object-cover rounded-xl mb-8" loading="lazy" />
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {clinicManagerTasks.map((task, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 border">
                    <p className="text-foreground font-semibold">{task}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mb-8">So you stay one step ahead without lifting a finger.</p>
              <button className="bg-brand-pink text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-pink/90 transition-colors duration-200 text-lg">
                Get Started
              </button>
            </div>
          </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-16">
            Keep Your Patient Data Safe and Sound
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-background rounded-xl p-6 border">
                <div className="w-9 h-9 rounded-full bg-brand-pink/10 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4 text-brand-pink" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productivity Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-12">
            Supercharge Productivity Across Your Entire Clinic
          </h2>
          <div className="bg-muted rounded-2xl p-12 text-center">
            <p className="text-xl text-muted-foreground mb-8">From front desk to treatment room, Heynia:</p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {productivityBenefits.map((benefit, index) => (
                <div key={index} className="bg-brand-pink/10 rounded-lg p-6">
                  <p className="text-foreground font-semibold text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Care Focus Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-2xl p-12 text-center border">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Make More Time for the Care That Matters
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {careBenefits.map((benefit, index) => (
                <div key={index} className="text-foreground">
                  <p className="font-semibold text-lg">{benefit}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground mb-8">Let Heynia handle the tasks so you can focus on what you love.</p>
            <button className="bg-brand-pink text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-pink/90 transition-colors duration-200 text-lg">
              Try Heynia Today
            </button>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-muted rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Get Started with Heynia Premium Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unlock full AI support, multichannel chat, a custom mobile app, and 24/7 assistance built for ambitious dental clinics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-pink text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-pink/90 transition-colors duration-200 text-lg">
                Compare Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;