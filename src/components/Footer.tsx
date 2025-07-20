import { Rocket } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Company": [
      { label: "About", href: "#about" },
      { label: "Mission", href: "#mission" },
      { label: "Careers", href: "#careers" },
      { label: "News", href: "#news" }
    ],
    "Technology": [
      { label: "Launch Systems", href: "#systems" },
      { label: "RedLaunch OS", href: "#technology" },
      { label: "Engineering", href: "#engineering" },
      { label: "Research", href: "#research" }
    ],
    "Support": [
      { label: "Documentation", href: "#docs" },
      { label: "Contact", href: "#contact" },
      { label: "Partners", href: "#partners" },
      { label: "Resources", href: "#resources" }
    ]
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <Rocket className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">RedLaunch</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Advanced launch systems for the future of space exploration. 
              Reliable, efficient, and cutting-edge technology.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 RedLaunch Systems. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;