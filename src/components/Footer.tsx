import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-accent text-accent-foreground">
    <div className="container mx-auto px-4 py-14">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Saathi Group" className="h-10 mb-4" />
          <p className="text-accent-foreground/70 text-sm leading-relaxed">
            Building trust through quality construction since 2012. Your reliable partner
            for residential, commercial, and industrial projects.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-accent-foreground/70">
            {["Civil Construction", "Residential Projects", "Commercial Buildings", "Industrial Construction", "Renovation", "Architectural Design"].map((s) => (
              <li key={s} className="hover:text-primary cursor-pointer transition-colors">{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-accent-foreground/70">
            {["Home", "About Us", "Projects", "Testimonials", "Contact"].map((s) => (
              <li key={s} className="hover:text-primary cursor-pointer transition-colors">{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-4">Connect</h4>
          <div className="flex gap-3 mb-6">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded bg-accent-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-sm text-accent-foreground/70">info@saathigroup.com</p>
          <p className="text-sm text-accent-foreground/70">+91 123 456 7890</p>
        </div>
      </div>
    </div>

    <div className="border-t border-accent-foreground/10">
      <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-accent-foreground/50">
          © 2024 Saathi Group. All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
