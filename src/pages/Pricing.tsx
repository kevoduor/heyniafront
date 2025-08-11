import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ClipboardList, Headphones, Plug, Cloud, Globe, BarChart3, LifeBuoy, Puzzle, MessageSquare, Smartphone, Settings, UserCheck, Clock, GraduationCap, Megaphone } from "lucide-react";
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
        { label: "Core Management Features: appointments, patient records, billing, tasks, and reports from one dashboard", icon: ClipboardList },
        { label: "Basic Support during standard business hours", icon: Headphones },
        { label: "Limited Integrations with essential third-party tools", icon: Plug },
        { label: "Cloud Hosting & Offline Support for uninterrupted clinic operations", icon: Cloud },
        { label: "Web App Access & Google Reviews Monitoring with email-based confirmations and reminders", icon: Globe }
      ]
    },
    {
      name: "Professional Plan",
      price: "$249",
      annual: "$2,490",
      description: "Includes all Basic Plan features, plus advanced capabilities",
      popular: true,
      features: [
        { label: "Advanced Analytics & Reporting for patient trends, revenue, and marketing performance", icon: BarChart3 },
        { label: "Priority Support with faster resolution times", icon: LifeBuoy },
        { label: "Enhanced Integrations for expanded compatibility", icon: Puzzle },
        { label: "Multi-channel Communication via SMS and WhatsApp for reminders and follow-ups", icon: MessageSquare },
        { label: "Mobile App (Android & iOS) for on-the-go management and patient bookings", icon: Smartphone }
      ]
    },
    {
      name: "Premium Plan",
      price: "$349",
      annual: "$3,490",
      description: "Includes all Professional Plan features, plus enterprise-grade services",
      features: [
        { label: "Customizable Features tailored to your clinic’s needs", icon: Settings },
        { label: "Dedicated Account Manager for personalized assistance", icon: UserCheck },
        { label: "24/7 Support for immediate help anytime", icon: Clock },
        { label: "Additional Training & Onboarding for the full team", icon: GraduationCap },
        { label: "Communication Across All Channels: WhatsApp, SMS, Email, Telegram, and Facebook Messenger", icon: Megaphone }
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
                      Annual: {plan.annual} (or {plan.price}/month)
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {(plan.features as { label: string; icon: any }[]).map((feature, featureIndex) => {
                    const Icon = feature.icon;
                    return (
                      <li key={featureIndex} className="flex items-start">
                        <Icon className="w-5 h-5 text-brand-pink mt-0.5 mr-3 flex-shrink-0" />
                        <span className={`${plan.popular ? 'text-background/90' : 'text-muted-foreground'} text-sm`}>{feature.label}</span>
                      </li>
                    );
                  })}
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