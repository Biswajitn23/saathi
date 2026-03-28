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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let throttleTimer: NodeJS.Timeout | null = null;

    const updateNavbarState = () => {
      if (throttleTimer) return;
      
      throttleTimer = setTimeout(() => {
        // Detects when user leaves the Hero section
        setScrolled(window.scrollY > 100);

        // Scroll-spy: marks link active only while viewport anchor is inside that section
        const anchorY = 140;
        let currentSection = "";

        for (const link of navLinks) {
          const id = link.href.replace("#", "");
          const section = document.getElementById(id);
          if (!section) continue;

          const rect = section.getBoundingClientRect();
          if (rect.top <= anchorY && rect.bottom > anchorY) {
            currentSection = id;
            break;
          }
        }

        // Keep Home active near the very top
        if (!currentSection && window.scrollY < 120) {
          currentSection = "home";
        }

        setActiveSection(currentSection);
        throttleTimer = null;
      }, 50);
    };

    updateNavbarState();
    window.addEventListener("scroll", updateNavbarState, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateNavbarState);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? "mt-4 mx-auto w-[95%] md:w-[90%] bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 py-2" 
          : "mt-0 w-full bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        
        {/* Logo - Inverted for Dark Backgrounds */}
        <a href="#home" className="shrink-0 transition-transform hover:scale-105">
          <img src={logo} alt="Saathi Group" className="h-10 sm:h-12 md:h-16 w-auto scale-[1.45] origin-left" />
        </a>

        {/* Desktop Navigation - Exact Links Requested */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setActiveSection(l.href.replace("#", ""))}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${
                  activeSection === l.href.replace("#", "") ? "text-orange-500" : "text-white hover:text-orange-500"
                }`}
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
            className="flex items-center gap-2 text-xs font-bold text-white hover:text-orange-300 transition-colors px-3 py-2 rounded-full bg-black/45 backdrop-blur-sm border border-white/25 shadow-[0_6px_18px_rgba(0,0,0,0.35)]"
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
            <ul className="flex flex-col gap-5 p-6">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => {
                      setActiveSection(l.href.replace("#", ""));
                      setMobileOpen(false);
                    }}
                    className={`text-base font-black uppercase tracking-tight transition-colors ${
                      activeSection === l.href.replace("#", "") ? "text-orange-500" : "text-white hover:text-orange-600"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block bg-orange-600 text-white px-6 py-3 rounded-sm text-xs font-black uppercase tracking-widest text-center"
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