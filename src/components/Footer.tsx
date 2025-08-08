import { Link } from "react-router-dom";
import footerBackground from "@/assets/footer-background-mountain.jpg";

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
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top section with quote */}
        <div className="mb-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              The climb is part of it
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Growth doesn't happen at the top. It happens in the effort, in the friction, 
              in every moment you choose to keep going.
            </p>
            <Link to="/book-demo">
              <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300">
                Take the Next Step
              </button>
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4 text-lg">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 hover:text-white transition-colors duration-200 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-white font-semibold mb-4 text-lg">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 hover:text-white transition-colors duration-200 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
              {footerLinks.legal.slice(0, 2).map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 hover:text-white transition-colors duration-200 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-white font-semibold mb-4 text-lg">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.social.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <span className="text-white/70 text-sm">hey@heynia.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-white font-bold text-lg">HeyNia</span>
              <span className="text-white/40 text-sm">®</span>
            </div>
            <p className="text-white/50 text-sm">
              HeyNia supports those navigating uncertainty, building momentum through steady effort and honest work.
            </p>
            <div className="mt-4 text-white/40 text-xs">
              © 2025 HeyNia. All rights reserved. | Designed by @santu_design
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;