import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      title: "7 Marketing Ideas for Small Dental Clinics in 2025",
      excerpt: "Discover proven marketing strategies that help small dental practices attract more patients and grow their revenue.",
      date: "Coming Soon",
      category: "Marketing"
    },
    {
      title: "Why Local SEO Matters for Dentists",
      excerpt: "Learn how to improve your clinic's visibility in local search results and attract patients in your area.",
      date: "Coming Soon", 
      category: "SEO"
    },
    {
      title: "Using AI to Automate Dental Appointment Reminders",
      excerpt: "Reduce no-shows and improve patient satisfaction with intelligent automated reminder systems.",
      date: "Coming Soon",
      category: "Automation"
    },
    {
      title: "Building Patient Loyalty Through Digital Engagement",
      excerpt: "Strategies for keeping patients engaged and coming back using modern digital communication tools.",
      date: "Coming Soon",
      category: "Patient Engagement"
    },
    {
      title: "HIPAA Compliance in the Digital Age",
      excerpt: "Essential guidelines for maintaining patient privacy and security in your digital communications.",
      date: "Coming Soon",
      category: "Compliance"
    },
    {
      title: "ROI Tracking for Dental Marketing Campaigns",
      excerpt: "How to measure and optimize your marketing spend for maximum return on investment.",
      date: "Coming Soon",
      category: "Analytics"
    }
  ];

  const categories = ["All", "Marketing", "SEO", "Automation", "Patient Engagement", "Compliance", "Analytics"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Actionable guides and insights on dental marketing, patient retention, clinic automation, and growth using AI tools.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-muted-foreground/20 text-muted-foreground hover:bg-brand-pink hover:text-white hover:border-brand-pink transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-card rounded-xl p-6 border hover:shadow-lg transition-shadow duration-200">
                <div className="mb-4">
                  <span className="inline-block bg-brand-pink/10 text-brand-pink px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 hover:text-brand-pink transition-colors duration-200 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <button className="text-brand-pink font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Focus Areas */}
          <section className="bg-muted rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Our blog focuses on:
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-2">Local SEO for dentists</h3>
                <p className="text-muted-foreground text-sm">Get found by patients in your area</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-2">Online marketing strategies</h3>
                <p className="text-muted-foreground text-sm">Grow your practice digitally</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-2">Patient reminder automation</h3>
                <p className="text-muted-foreground text-sm">Reduce no-shows and improve efficiency</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-2">AI trends in dental software</h3>
                <p className="text-muted-foreground text-sm">Stay ahead with the latest technology</p>
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="text-center mt-16">
            <div className="bg-card rounded-2xl p-8 border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Get the latest dental marketing tips and practice growth strategies delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink"
                />
                <button className="bg-brand-pink text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-pink/90 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;