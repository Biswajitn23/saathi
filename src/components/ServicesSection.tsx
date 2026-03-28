import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Factory,
  Hammer,
  PenTool,
  Building,
} from "lucide-react";

const services = [
  { icon: Building2, title: "Civil Construction", desc: "Robust civil infrastructure built with precision and lasting materials." },
  { icon: Home, title: "Residential Projects", desc: "Dream homes crafted with attention to every detail and comfort." },
  { icon: Building, title: "Commercial Buildings", desc: "Modern commercial spaces designed for productivity and aesthetics." },
  { icon: Factory, title: "Industrial Construction", desc: "Large-scale industrial facilities engineered for efficiency." },
  { icon: Hammer, title: "Renovation & Remodeling", desc: "Transforming spaces with expert renovation and upgrades." },
  { icon: PenTool, title: "Architectural Design", desc: "Innovative architectural plans that blend form and function." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          PRODUCTS AND <span className="text-primary">SERVICES</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Explore our wide range of construction services and products. Every structure
          is crafted to deliver strength, style, and longevity.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card border border-border rounded-lg p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
              <s.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-sm font-semibold text-foreground">{s.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
