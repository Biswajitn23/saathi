import { useState, useEffect } from "react";
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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 transition-all duration-700 ease-out ${
        scrolled 
          ? "left-[49%] -translate-x-1/2 md:mx-4 md:mt-4 mx-2 mt-2 md:w-[calc(100%-2rem)] w-[calc(100%-1rem)] bg-accent/95 backdrop-blur-md shadow-2xl md:rounded-2xl rounded-xl" 
          : "left-0 right-0 w-full bg-transparent mx-0 mt-0 rounded-none shadow-none"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-0 px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Saathi Group" className="h-24 w-auto" />
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium tracking-wide text-primary-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+911234567890"
            className="flex items-center gap-2 text-sm font-bold bg-white text-primary px-4 py-2 rounded-lg shadow-lg"
          >
            <Phone className="h-4 w-4" />
            +91 123 456 7890
          </a>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-5 py-2 rounded text-sm font-semibold hover:bg-primary/90 transition"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-accent/95 backdrop-blur-md overflow-hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-primary-foreground hover:text-primary transition-colors font-medium"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded text-sm font-semibold"
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
