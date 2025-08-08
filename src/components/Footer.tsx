import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-20">
      <div className="container mx-auto px-4 md:px-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 group mb-8">
              <img src="/images/rlx-logo.png" alt="Red Launch Logo" className="w-12 h-12 object-contain group-hover:neon-glow transition-all duration-300" />
              <span className="text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors duration-300">
                Red Launch Technologies
              </span>
            </Link>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Redefining national supply chain security through real-time AI-powered risk intelligence and visualization tools for defense, aerospace, and critical manufacturing sectors.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Media */}
          <div>
            <h3 className="text-xl font-extrabold text-foreground mb-6">Media</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg">
                  Press Releases
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg">
                  Media Coverage
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-extrabold text-foreground mb-6">Company</h3>
            <ul className="space-y-4">

              <li>
                <Link to="/mission" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg">
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/founding-team" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg">
                  Founding Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-muted-foreground text-lg">
              © 2025 Red Launch Technologies. All rights reserved.
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;