import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Detects when user leaves the Hero section
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? "mt-4 mx-auto w-[95%] md:w-[90%] bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 py-2" 
          : "mt-0 w-full bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        
        {/* Logo - Inverted for Dark Backgrounds */}
        <a href="#home" className="shrink-0 transition-transform hover:scale-105">
          <img 
            src={logo} 
            alt="Saathi Group" 
            className="h-14 md:h-16 w-auto" 
          />
        </a>

        {/* Desktop Navigation - Exact Links Requested */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-white hover:text-orange-500 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions - Exact Text Requested */}
        <div className="hidden lg:flex items-center gap-8">
          <a
            href="tel:+911234567890"
            className="flex items-center gap-2 text-xs font-bold text-white hover:text-orange-500 transition-colors"
          >
            <Phone className="h-4 w-4 text-orange-500" />
            +91 123 456 7890
          </a>
          <a
            href="#contact"
            className="bg-orange-600 text-white px-6 py-3 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-lg"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 mx-2 bg-slate-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden lg:hidden"
          >
            <ul className="flex flex-col gap-6 p-8">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-white text-lg font-black uppercase tracking-tighter hover:text-orange-600 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block bg-orange-600 text-white px-8 py-4 rounded-sm text-xs font-black uppercase tracking-widest text-center"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;