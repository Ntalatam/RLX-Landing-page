import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-border py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left: Logo and copyright */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <img
            src="/images/IMG_6931.jpeg"
            alt="Red Launch Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-muted-foreground text-sm">
            © 2025 Maverick Labs. All rights reserved.
          </span>
        </div>
        {/* Right: Social icons */}
        <div className="flex items-center space-x-6">
          <a
            href="https://www.linkedin.com/company/red-launch/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.74z"/>
            </svg>
          </a>
          {/* Add more icons as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;