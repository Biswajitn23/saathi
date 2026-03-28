import { motion } from "framer-motion";
import { PenTool, Wrench, Settings, ArrowRight } from "lucide-react";

const items = [
  {
    step: "01",
    icon: PenTool,
    title: "Designing & Planning",
    desc: "Our creative team produces cutting-edge blueprints and designs, integrating modern architecture with practical functionality.",
  },
  {
    step: "02",
    icon: Wrench,
    title: "Metal Fabrication",
    desc: "In-house metal fabrication services for custom steel structures, gates, railings, and industrial-grade metalwork.",
  },
  {
    step: "03",
    icon: Settings,
    title: "Installation & Maintenance",
    desc: "End-to-end installation and long-term maintenance services that keep your structures safe and functional.",
  },
];

const CollaborationSection = () => (
  <section className="py-24 bg-[#0a0f18] relative overflow-hidden">
    {/* Industrial Blueprint Background Grid */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
        >
          B2B PARTNERSHIPS
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
          INTEGRATED <span className="text-orange-600">SOLUTIONS</span> FOR YOUR BUSINESS
        </h2>
        <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          We act as an extension of your team, providing the structural backbone and technical expertise your projects require.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-0 border border-white/10 rounded-sm overflow-hidden shadow-2xl">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group relative bg-white/[0.02] p-10 border-r border-b md:border-b-0 last:border-r-0 border-white/10 hover:bg-white/[0.04] transition-all duration-500"
          >
            {/* Step Number Background */}
            <span className="absolute top-6 right-8 text-7xl font-black text-white/[0.03] select-none group-hover:text-orange-600/10 transition-colors">
              {item.step}
            </span>

            {/* Icon & Content */}
            <div className="relative z-10">
              <div className="w-14 h-14 mb-8 rounded-sm bg-orange-600 flex items-center justify-center shadow-[4px_4px_0px_rgba(255,255,255,0.1)] group-hover:shadow-orange-600/50 transition-all">
                <item.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight flex items-center gap-2">
                {item.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                {item.desc}
              </p>

              <button className="flex items-center gap-2 text-[10px] font-black text-orange-500 uppercase tracking-widest group-hover:gap-4 transition-all">
                View Capabilities <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Corner Decorative Brackets */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-orange-500 transition-colors" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-orange-500 transition-colors" />
          </motion.div>
        ))}
      </div>

      {/* Trust Quote / CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-orange-500/50 flex items-center justify-center text-orange-500 font-bold text-xs">
            12+
          </div>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest max-w-[200px]">
            Years of B2B Excellence in Construction
          </p>
        </div>
        <button className="px-10 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-600 hover:text-white transition-all">
          Partner With Us
        </button>
      </motion.div>
    </div>
  </section>
);

export default CollaborationSection;