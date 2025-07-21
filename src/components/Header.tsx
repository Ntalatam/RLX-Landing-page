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
    { label: "Products", href: "/technology" },
    { label: "Company", href: "/company" },
    { label: "Media", href: "/media" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="w-full py-4">
        <div className="flex items-center justify-between" style={{paddingLeft: 0}}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 ml-0">
            <img src="https://pbs.twimg.com/media/Gsa-r7yXwAAAgF0?format=jpg&name=medium" alt="RedLaunch Logo" className="w-14 h-14 rounded-sm object-cover" />
            <span className="text-xl font-bold text-foreground">RedLaunch Technologies</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.label === "Products") {
                return (
                  <DropdownMenu key={item.label} open={openDropdown === item.label} onOpenChange={(open) => setOpenDropdown(open ? item.label : null)}>
                    <DropdownMenuTrigger asChild>
                      <Link
                        to={item.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium flex items-center cursor-pointer"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.label}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <DropdownMenuItem>Supplier Risk Assessment</DropdownMenuItem>
                      <DropdownMenuItem>Global Tracker</DropdownMenuItem>
                      <DropdownMenuItem>Intelligence Map</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              } else if (item.label === "Company") {
                return (
                  <DropdownMenu key={item.label} open={openDropdown === item.label} onOpenChange={(open) => setOpenDropdown(open ? item.label : null)}>
                    <DropdownMenuTrigger asChild>
                      <Link
                        to="/about"
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium flex items-center cursor-pointer"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.label}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <DropdownMenuItem asChild>
                        <Link to="/founding-team">Founding Team</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/mission">Mission</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
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
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium flex items-center cursor-pointer"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.label}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <DropdownMenuItem>Press Releases</DropdownMenuItem>
                      <DropdownMenuItem>Media Coverage</DropdownMenuItem>
                      <DropdownMenuItem>Blog</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              } else {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium flex items-center"
                  >
                    {item.label}
                  </Link>
                );
              }
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact">
              <Button variant="outline" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button variant="outline" size="sm" className="w-full">
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