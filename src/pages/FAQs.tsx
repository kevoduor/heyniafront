import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { updateMetaTags } from "@/utils/seo";

const FAQs = () => {
  useEffect(() => {
    updateMetaTags(
      "FAQs | Dental Software Marketing & Automation",
      "Common questions about HeyNia dental software, pricing, automation, and growth.",
      "https://dental-clinic-management-software.com/dental-software-marketing-faqs"
    );
  }, []);

  const faqs = [
    {
      q: "How can dental clinics use marketing automation software to grow?",
      a: "HeyNia allows you to automate marketing messages via email, SMS, and WhatsApp. You can schedule campaigns, respond to patient inquiries, and send review requests, helping you attract more patients without manual work.",
    },
    {
      q: "What is the best dental software to boost local SEO and get more patients?",
      a: "HeyNia includes built-in tools for Google Review monitoring and local SEO optimization, helping your practice appear higher in search results like ‘best dentist near me’.",
    },
    {
      q: "Is HeyNia dental software compliant with HIPAA and GDPR regulations?",
      a: "Yes. HeyNia is fully compliant with both HIPAA and GDPR. It keeps your patient data secure with customizable privacy settings, user access controls, and encrypted cloud storage.",
    },
    {
      q: "Can I use HeyNia to track marketing ROI for my dental clinic?",
      a: "Yes. Our Professional and Premium plans come with advanced reporting tools that let you track patient sources, campaign performance, and revenue impact, so you can optimize for what works.",
    },
    {
      q: "How can AI-powered dental software help reduce workload for front desk staff?",
      a: "HeyNia automates patient communication, appointment reminders, follow-ups, and bookings. This frees up your front desk team to focus on in-clinic experiences instead of admin work.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-3">Dental Software Marketing FAQs</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Answers to common questions about automation, SEO, patient engagement, and growth.</p>
          </header>

          <section className="space-y-6">
            {faqs.map((item, idx) => (
              <article key={idx} className="bg-card border rounded-2xl p-6">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">{item.q}</h2>
                <p className="text-muted-foreground leading-relaxed">{item.a}</p>
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
