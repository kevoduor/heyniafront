import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { updateMetaTags } from "@/utils/seo";

const Pricing = () => {
  useEffect(() => {
    updateMetaTags(
      "HeyNia Pricing Plans - Dental Software with Real ROI",
      "Explore affordable dental software pricing with AI features, offline support, and marketing automation starting at just $99 per month.",
      "https://dental-clinic-management-software.com/dental-software-pricing-plans"
    );
  }, []);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>("monthly");
  const plans = [
    {
      name: "Basic Plan",
      price: "$99",
      annual: "$990",
      description: "Perfect for solo practitioners and small clinics",
      features: [
        "Core Management Features: Manage appointments, patient records, billing, tasks, and reports from a centralized dashboard",
        "Basic Support: Standard business hours support",
        "Limited Integrations: Essential third-party integrations",
        "Cloud Hosting/Storage",
        "Offline Support",
        "Web App & Dashboard",
        "Google Reviews Monitoring",
        "Email Support with automated appointment confirmations and reminders",
        "Monthly digital marketing newsletter with tips, SEO guides, and acquisition strategies"
      ]
    },
    {
      name: "Professional Plan",
      price: "$249",
      annual: "$2,490",
      description: "Everything in Basic Plan, plus advanced features",
      popular: true,
      features: [
        "All Basic Plan features",
        "Advanced Analytics & Reporting",
        "Priority Support",
        "Enhanced Integrations",
        "SMS & WhatsApp Communication",
        "Mobile App (Android & iOS)"
      ]
    },
    {
      name: "Premium Plan",
      price: "$349",
      annual: "$3,490",
      description: "Everything in Professional Plan, plus enterprise features",
      features: [
        "All Professional Plan features",
        "Customizable Features",
        "Dedicated Account Manager",
        "24/7 Support",
        "Additional Training & Onboarding",
        "All Chat Channels: WhatsApp, SMS, Email, Telegram, Facebook Messenger",
        "Custom Mobile App for Clinics",
        "Referral Marketing System",
        "AI Chatbot for Marketing Advice",
        "Local SEO Optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your dental practice. All plans include our core AI-powered features.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center bg-muted border rounded-full p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${billingCycle === 'monthly' ? 'bg-brand-pink text-white' : 'text-foreground hover:bg-muted/80'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${billingCycle === 'annual' ? 'bg-brand-pink text-white' : 'text-foreground hover:bg-muted/80'}`}
              >
                Annual
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular ? 'bg-foreground text-background shadow-elegant scale-[1.02] border-brand-pink' : 'bg-card hover:shadow-elegant'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-pink text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-background' : 'text-foreground'}`}>{plan.name}</h3>
                  <p className={`${plan.popular ? 'text-background/80' : 'text-muted-foreground'} mb-4`}>{plan.description}</p>
                  <div className="mb-4" key={billingCycle}>
                    <span className={`text-4xl font-bold animate-fade-in ${plan.popular ? 'text-background' : 'text-foreground'}`}>{billingCycle === 'annual' ? plan.annual : plan.price}</span>
                    <span className={`${plan.popular ? 'text-background/80' : 'text-muted-foreground'}`}>/{billingCycle === 'annual' ? 'year' : 'month'}</span>
                  </div>
                  {billingCycle === 'monthly' && (
                    <p className="text-sm text-muted-foreground">
                      Annual: {plan.annual} (save 2 months)
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-brand-pink mt-0.5 mr-3 flex-shrink-0" />
                      <span className={`${plan.popular ? 'text-background/90' : 'text-muted-foreground'} text-sm`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular 
                      ? 'bg-brand-pink text-white hover:bg-brand-pink/90'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* Premium CTA Section */}
          <section className="bg-muted rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Get Started with Heynia Premium Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unlock full AI support, multichannel chat, a custom mobile app, and 24/7 assistance built for ambitious dental clinics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-pink text-white font-semibold px-8 py-3 rounded-lg hover:bg-brand-pink/90 transition-colors duration-200">
                Compare Plans
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;