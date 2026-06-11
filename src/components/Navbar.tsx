import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { LogoMark } from "./Logo";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Technologies", path: "/technologies" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Insights", path: "/insights" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-gray-100 shadow-sm py-3"
          : "bg-white py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 lg:gap-3">
          <LogoMark className="w-10 md:w-12 h-auto shrink-0" />
          <span className="font-logo font-black text-2xl md:text-3xl tracking-widest text-[#111111] uppercase mt-1">TECHNIXAR</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary-yellow",
                    location.pathname === link.path
                      ? "text-black"
                      : "text-gray-600"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-primary-yellow text-black font-semibold rounded-lg shadow-sm hover:bg-bright-yellow transition-colors"
          >
            Book Free Consultation
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={cn(
                    "block px-2 py-1 text-base font-medium",
                    location.pathname === link.path
                      ? "text-black bg-gray-50 rounded-md"
                      : "text-gray-600 hover:text-black"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="w-full text-center px-5 py-3 bg-primary-yellow text-black font-semibold rounded-lg shadow-sm hover:bg-bright-yellow transition-colors"
          >
            Book Free Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
