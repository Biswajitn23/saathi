import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";
import projectApartment from "@/assets/project-apartment.jpg";
import projectMall from "@/assets/project-mall.jpg";
import projectVilla from "@/assets/project-villa.jpg";

const categories = ["All", "Residential", "Commercial", "Industrial"] as const;

const projects = [
  { img: projectResidential, title: "Modern Luxury Home", category: "Residential", location: "Mumbai" },
  { img: projectCommercial, title: "Corporate Tower", category: "Commercial", location: "Delhi" },
  { img: projectIndustrial, title: "Industrial Warehouse", category: "Industrial", location: "Pune" },
  { img: projectApartment, title: "Premium Apartments", category: "Residential", location: "Bangalore" },
  { img: projectMall, title: "Shopping Complex", category: "Commercial", location: "Hyderabad" },
  { img: projectVilla, title: "Luxury Villa Estate", category: "Residential", location: "Goa" },
];

const ProjectsSection = () => {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            OUR <span className="text-primary">PROJECTS</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A showcase of our completed projects across residential, commercial, and industrial sectors.
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/70 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-primary-foreground text-xl font-bold font-display">
                      {p.title}
                    </h3>
                    <p className="text-primary text-sm mt-1">{p.location}</p>
                    <span className="inline-block mt-3 px-4 py-1.5 border border-primary-foreground/30 text-primary-foreground text-xs rounded-full">
                      {p.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
