import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
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

  const navItems = [
    { label: "Product", href: "/products" },
    { label: "Company", href: "/company" },
    { label: "Media", href: "/media" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md  bg-transparent backdrop-blur-none">
      <div className="w-full py-6">
        <div className="flex items-center justify-between px-2 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-neutral-900 rounded-full p-2 shadow-lg flex items-center justify-center">
              <img
                src="/images/red-launch-logo-FINAL-2.png"
                alt="Red Launch Logo"
                className="w-16 h-16 object-contain group-hover:neon-glow transition-all duration-300"
                style={{
                  backgroundColor: "transparent",
                  borderRadius: "9999px",
                }}
              />
            </div>
            <span className="text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors duration-300">
              Red Launch
            </span>
          </Link>

          {/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-10 ml-auto">
  <Link
    to="/products"
    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg font-semibold"
  >
    Product
  </Link>
  <Link
    to="/company"
    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg font-semibold"
  >
    Company
  </Link>
  <Link
    to="/careers"
    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg font-semibold"
  >
    Careers
  </Link>
  <DropdownMenu key="Media" open={openDropdown === "Media"} onOpenChange={(open) => setOpenDropdown(open ? "Media" : null)}>
    <DropdownMenuTrigger asChild>
      <span
        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg font-semibold flex items-center cursor-pointer group"
        onMouseEnter={() => setOpenDropdown("Media")}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        Media
        <ChevronDown className="ml-2 w-5 h-5 group-hover:text-primary transition-colors duration-200" />
      </span>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="start"
      className="bg-card border-border"
      onMouseEnter={() => setOpenDropdown("Media")}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <DropdownMenuItem asChild className="hover:bg-accent hover:text-accent-foreground text-base">
        <Link to="/coming-soon">Press Releases</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild className="hover:bg-accent hover:text-accent-foreground text-base">
        <Link to="/coming-soon">Media Coverage</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild className="hover:bg-accent hover:text-accent-foreground text-base">
        <Link to="/coming-soon">Blog</Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/contact">
              <Button variant="default" size="lg" className="ml-8 bg-primary text-primary-foreground hover:bg-primary/90 neon-glow px-8 py-6 text-lg font-bold">
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
  <div className="md:hidden fixed inset-0 z-50 bg-black/90">
    <nav className="flex flex-col space-y-4 pt-24 px-6">
      <Link
        to="/products"
        className="text-white text-xl font-semibold py-3"
        onClick={() => setIsMenuOpen(false)}
      >
        Product
      </Link>
      <Link
        to="/company"
        className="text-white text-xl font-semibold py-3"
        onClick={() => setIsMenuOpen(false)}
      >
        Company
      </Link>
      <Link
        to="/careers"
        className="text-white text-xl font-semibold py-3"
        onClick={() => setIsMenuOpen(false)}
      >
        Careers
      </Link>
      {/* Media with subpages */}
      <div>
        <span className="text-white text-xl font-semibold py-3 block">Media</span>
        <Link
          to="/press-releases"
          className="text-white text-lg pl-4 py-2 block"
          onClick={() => setIsMenuOpen(false)}
        >
          Press Releases
        </Link>
        <Link
          to="/media-coverage"
          className="text-white text-lg pl-4 py-2 block"
          onClick={() => setIsMenuOpen(false)}
        >
          Media Coverage
        </Link>
        <Link
          to="/blog"
          className="text-white text-lg pl-4 py-2 block"
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </Link>
      </div>
      {/* CTA Button */}
      <Link to="/contact" className="mt-6" onClick={() => setIsMenuOpen(false)}>
        <Button
          variant="default"
          size="lg"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow px-8 py-6 text-lg font-bold"
        >
          Get Started
        </Button>
      </Link>
    </nav>
  </div>
)}
      </div>
    </header>
  );
};

export default Header;