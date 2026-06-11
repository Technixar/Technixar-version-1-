import { Link } from "react-router-dom";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 lg:gap-3 mb-6">
              <LogoMark className="w-10 md:w-12 h-auto shrink-0 text-white" />
              <span className="font-logo font-black text-2xl md:text-3xl tracking-widest text-white uppercase mt-1">TECHNIXAR</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Technixar helps organizations innovate, transform, and scale through cutting-edge software solutions, fintech innovation, cloud technologies, and AI-powered automation.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-yellow hover:text-black transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-yellow hover:text-black transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-yellow hover:text-black transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-yellow hover:text-black transition-colors" aria-label="X (Twitter)">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-primary-yellow transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary-yellow transition-colors">Services</Link></li>
              <li><Link to="/industries" className="hover:text-primary-yellow transition-colors">Industries</Link></li>
              <li><Link to="/technologies" className="hover:text-primary-yellow transition-colors">Technologies</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link to="/portfolio" className="hover:text-primary-yellow transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-primary-yellow transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Office</h3>
            <address className="not-italic text-sm text-gray-400 flex flex-col gap-2">
              <p>9 Raffles Place, #29-05</p>
              <p>Republic Plaza</p>
              <p>Singapore 048619</p>
              <a href="mailto:info@technixar.com" className="text-primary-yellow hover:underline mt-2">info@technixar.com</a>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Technixar IT Solutions Pte. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
