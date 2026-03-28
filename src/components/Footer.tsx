import { Facebook, Instagram, Linkedin, Twitter, ArrowUp, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Insights", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Civil Construction",
    "Residential Projects",
    "Commercial Buildings",
    "Industrial Construction",
    "Architectural Design",
  ];

  return (
    <footer className="bg-[#0f172a] text-slate-300 relative overflow-hidden">
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={logo} alt="Saathi Group" className="h-16 mb-6 brightness-0 invert" />
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-8">
                Pioneering excellence in infrastructure since 2012. We build the structures that shape the future of modern India.
              </p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all group"
                  >
                    <Icon className="h-4 w-4 text-slate-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 border-l-2 border-orange-600 pl-3">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm font-bold hover:text-orange-500 transition-colors flex items-center gap-2 group">
                    <div className="w-0 group-hover:w-2 h-[1px] bg-orange-500 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 border-l-2 border-orange-600 pl-3">
              Core Services
            </h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="text-sm font-bold flex items-center gap-2 group cursor-pointer hover:text-orange-500 transition-colors">
                  <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-orange-500" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 border-l-2 border-orange-600 pl-3">
              Newsletter
            </h4>
            <p className="text-xs text-slate-500 mb-6 font-bold leading-relaxed uppercase tracking-tighter">
              Get weekly updates on our live projects and tenders.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-4 pr-12 text-[10px] font-black tracking-widest outline-none focus:border-orange-500 transition-all placeholder:text-slate-600"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-600 p-2 rounded-sm hover:bg-orange-500 transition-colors">
                <Mail className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="mt-8 pt-8 border-t border-white/5 space-y-2">
              <p className="text-xs font-black text-white">+91 123 456 7890</p>
              <p className="text-xs font-bold text-slate-500">info@saathigroup.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
              © 2026 SAATHI GROUP. 
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-white transition-colors">Terms</a>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group relative flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white overflow-hidden"
          >
            <span className="relative z-10">Back to top</span>
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all">
              <ArrowUp className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;