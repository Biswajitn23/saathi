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
  { icon: Building2, title: "Civil Work" },
  { icon: Home, title: "New Homes" },
  { icon: Building, title: "Offices" },
  { icon: Factory, title: "Factories" },
  { icon: Hammer, title: "Repairs" },
  { icon: PenTool, title: "Design" },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      
      {/* Small & Simple Header */}
      <div className="mb-12 border-l-4 border-orange-600 pl-6">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter">
          Our <span className="text-orange-600">Services</span>
        </h2>
        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mt-1">
          Quality work at every scale
        </p>
      </div>

      {/* Small Industrial Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group bg-slate-50 border border-slate-200 aspect-square flex flex-col items-center justify-center p-4 hover:bg-orange-600 hover:border-orange-600 transition-all duration-300 cursor-default"
          >
            <div className="mb-4 text-slate-900 group-hover:text-white transition-colors">
              <s.icon size={32} strokeWidth={1.5} />
            </div>
            
            <h3 className="text-[10px] md:text-xs font-black text-slate-900 uppercase tracking-widest group-hover:text-white transition-colors text-center">
              {s.title}
            </h3>

            {/* Subtle Detail: Corner accent that appears on hover */}
            <div className="absolute top-2 right-2 w-1 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;