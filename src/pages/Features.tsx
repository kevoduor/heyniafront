import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { updateMetaTags } from "@/utils/seo";

const Features = () => {
  useEffect(() => {
    updateMetaTags(
      "Smart Features for Busy Dental Clinics - HeyNia",
      "Discover how HeyNia's features simplify clinic operations, marketing, and patient communication with intelligent automation.",
      "https://dental-clinic-management-software.com/dental-practice-automation-features"
    );
  }, []);
  const features = [
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

  const clinicManager = [
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Features
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how Heynia's intelligent features transform your dental practice operations.
            </p>
          </div>

          {/* Data Gateway Features */}
          <section className="mb-20">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border">
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-brand-pink font-semibold mb-4">{feature.subtitle}</p>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Real-time Insights */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Real-time Insights to Help You Lead with Precision and Ease
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {realTimeFeatures.map((feature, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border">
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Clinic Manager */}
          <section className="mb-20">
            <div className="bg-muted rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Your Dedicated Clinic Manager</h2>
              <p className="text-muted-foreground mb-6">It works around the clock:</p>
              <ul className="space-y-3 mb-8">
                {clinicManager.map((item, index) => (
                  <li key={index} className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-brand-pink rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground">So you stay one step ahead without lifting a finger.</p>
              <button className="mt-6 bg-brand-pink text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-pink/90 transition-colors duration-200">
                Get Started
              </button>
            </div>
          </section>

          {/* Security Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Keep Your Patient Data Safe and Sound
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border">
                  <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Productivity Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
              Supercharge Productivity Across Your Entire Clinic
            </h2>
            <div className="bg-card rounded-xl p-8 border text-center">
              <p className="text-lg text-muted-foreground mb-6">From front desk to treatment room, Heynia:</p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {productivityBenefits.map((benefit, index) => (
                  <div key={index} className="bg-brand-pink/10 rounded-lg p-4">
                    <p className="text-foreground font-semibold">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Care Focus Section */}
          <section className="mb-20">
            <div className="bg-muted rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Make More Time for the Care That Matters
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {careBenefits.map((benefit, index) => (
                  <div key={index} className="text-foreground">
                    <p className="font-semibold">{benefit}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mb-6">Let Heynia handle the tasks so you can focus on what you love.</p>
              <button className="bg-brand-pink text-white font-semibold px-8 py-3 rounded-lg hover:bg-brand-pink/90 transition-colors duration-200">
                Try Heynia Today
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Features;