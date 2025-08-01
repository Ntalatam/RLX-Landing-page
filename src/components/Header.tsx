import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const navItems = [
    { label: "Products", href: "/products" },
    { label: "Company", href: "/company" },
    { label: "Media", href: "/media" },
  ];

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    // First navigate to the products page
    navigate('/products');
    
    // Then scroll to the section after a short delay to ensure the page has loaded
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="w-full py-6">
        <div className="flex items-center justify-between px-4 md:px-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src="https://pbs.twimg.com/media/Gsa-r7yXwAAAgF0?format=jpg&name=medium" alt="RedLaunch Logo" className="w-16 h-16 rounded-sm object-cover group-hover:neon-glow transition-all duration-300" />
            <span className="text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors duration-300">RedLaunch Technologies</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => {
              if (item.label === "Products") {
                return (
                  <DropdownMenu key={item.label} open={openDropdown === item.label} onOpenChange={(open) => setOpenDropdown(open ? item.label : null)}>
                    <DropdownMenuTrigger asChild>
                      <Link
                        to={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg font-semibold flex items-center cursor-pointer group"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.label}
                        <ChevronDown className="ml-2 w-5 h-5 group-hover:text-primary transition-colors duration-200" />
                      </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="bg-card border-border"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <DropdownMenuItem 
                        className="hover:bg-accent hover:text-accent-foreground text-base cursor-pointer"
                        onClick={() => scrollToSection('supplier-risk')}
                      >
                        Supplier Risk Assessment
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="hover:bg-accent hover:text-accent-foreground text-base cursor-pointer"
                        onClick={() => scrollToSection('geo-tracker')}
                      >
                        Global Tracker
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="hover:bg-accent hover:text-accent-foreground text-base cursor-pointer"
                        onClick={() => scrollToSection('intel-map')}
                      >
                        Intelligence Map
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              } else if (item.label === "Company") {
                return (
                  <DropdownMenu key={item.label} open={openDropdown === item.label} onOpenChange={(open) => setOpenDropdown(open ? item.label : null)}>
                    <DropdownMenuTrigger asChild>
                      <Link
                        to="/about"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg font-semibold flex items-center cursor-pointer group"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.label}
                        <ChevronDown className="ml-2 w-5 h-5 group-hover:text-primary transition-colors duration-200" />
                      </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="bg-card border-border"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <DropdownMenuItem asChild className="hover:bg-accent hover:text-accent-foreground text-base">
                        <Link to="/founding-team">Founding Team</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="hover:bg-accent hover:text-accent-foreground text-base">
                        <Link to="/mission">Mission</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="hover:bg-accent hover:text-accent-foreground text-base">
                        <Link to="/careers">Careers</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              } else if (item.label === "Media") {
                return (
                  <DropdownMenu key={item.label} open={openDropdown === item.label} onOpenChange={(open) => setOpenDropdown(open ? item.label : null)}>
                    <DropdownMenuTrigger asChild>
                      <Link
                        to={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg font-semibold flex items-center cursor-pointer group"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.label}
                        <ChevronDown className="ml-2 w-5 h-5 group-hover:text-primary transition-colors duration-200" />
                      </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="bg-card border-border"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground text-base">Press Releases</DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground text-base">Media Coverage</DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground text-base">Blog</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              } else {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg font-semibold flex items-center"
                  >
                    {item.label}
                  </Link>
                );
              }
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/contact">
              <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow px-8 py-6 text-lg font-bold">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="lg"
            className="md:hidden text-muted-foreground hover:text-primary hover:bg-accent px-6 py-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border px-4">
            <nav className="flex flex-col space-y-4 pt-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg font-semibold py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button variant="default" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow px-8 py-6 text-lg font-bold">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;