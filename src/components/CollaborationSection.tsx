import { motion } from "framer-motion";
import { PenTool, Wrench, Settings } from "lucide-react";

const items = [
  {
    icon: PenTool,
    title: "Designing & Planning",
    desc: "Our creative team produces cutting-edge blueprints and designs, integrating modern architecture with practical functionality.",
  },
  {
    icon: Wrench,
    title: "Metal Fabrication",
    desc: "In-house metal fabrication services for custom steel structures, gates, railings, and industrial-grade metalwork.",
  },
  {
    icon: Settings,
    title: "Installation & Maintenance",
    desc: "End-to-end installation and long-term maintenance services that keep your structures safe and functional.",
  },
];

const CollaborationSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          COLLABORATING WITH OTHER{" "}
          <span className="text-primary">BUSINESSES</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
              <item.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CollaborationSection;
