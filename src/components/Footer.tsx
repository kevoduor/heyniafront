import { Link } from "react-router-dom";
import footerBackground from "@/assets/footer-background.jpg";

const Footer = () => {
  const footerLinks = {
    explore: [
      { name: "About", href: "/story" },
      { name: "Philosophy", href: "/story" },
      { name: "Our Story", href: "/story" },
      { name: "Blog", href: "/blog" },
      { name: "Press", href: "/blog" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Terms and Conditions", href: "/terms" },
      { name: "Get in Touch", href: "/contact" },
    ],
    support: [
      { name: "FAQs", href: "/faq" },
      { name: "Contact", href: "/contact" },
      { name: "Newsletter", href: "/newsletter" },
      { name: "Journal", href: "/blog" },
    ],
    social: [
      { name: "Instagram", href: "https://instagram.com" },
      { name: "LinkedIn", href: "https://linkedin.com" },
      { name: "Twitter", href: "https://twitter.com" },
      { name: "Facebook", href: "https://facebook.com" },
      { name: "TikTok", href: "https://tiktok.com" },
    ],
  };

  return (
    <footer 
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${footerBackground})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-2">HeyNia</h2>
              <p className="text-white/80 max-w-md">
                Built for lifelong learners. Dental software that helps modern practices streamline operations and grow with confidence.
              </p>
            </div>
            
            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-brand-pink"
              />
              <button className="px-6 py-3 bg-brand-pink text-white font-semibold rounded-lg hover:bg-brand-pink/90 transition-colors duration-200">
                Join Newsletter
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow us</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-white/60 mb-4 md:mb-0">
              <p>HeyNia ET 2025. All rights reserved.</p>
            </div>
            <div className="text-white/60">
              <p>Email: hey@heynia.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;