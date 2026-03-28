import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Plus } from "lucide-react";

// Simplified Project List
const projects = [
  {
    id: 1,
    title: "Modern Luxury Home",
    category: "Residential",
    city: "Mumbai",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Corporate Tower",
    category: "Commercial",
    city: "Delhi",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Industrial Warehouse",
    category: "Industrial",
    city: "Pune",
    image: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Premium Apartments",
    category: "Residential",
    city: "Bangalore",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Shopping Mall",
    category: "Commercial",
    city: "Hyderabad",
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Luxury Villa",
    category: "Residential",
    city: "Goa",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&auto=format&fit=crop",
  },
];

const categories = ["All", "Residential", "Commercial", "Industrial"];

const ProjectGallery = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-24 bg-white text-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <p className="text-orange-600 font-black text-xs uppercase tracking-[0.3em] mb-4">Our Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              Featured <span className="text-orange-600">Work.</span>
            </h2>
          </div>

          {/* Filter Tabs - Architectural Style */}
          <div className="flex border-b border-slate-200 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 sm:px-6 py-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.14em] sm:tracking-widest transition-all relative whitespace-nowrap ${
                  filter === cat ? "text-orange-600" : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {cat}
                {filter === cat && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-orange-600" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[320px] sm:h-[400px] overflow-hidden bg-slate-100 rounded-sm"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overaly Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-white text-2xl font-black mb-4 uppercase leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between pt-4 border-t border-white/20">
                      <span className="text-white/70 text-xs flex items-center gap-2">
                        <MapPin size={14} className="text-orange-600" /> {project.city}
                      </span>
                      <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white">
                        <Plus size={20} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Always visible minimal tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-black uppercase group-hover:opacity-0 transition-opacity">
                  {project.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <div className="mt-14 md:mt-16 text-center">
          <button className="px-8 sm:px-12 py-4 sm:py-5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] hover:bg-orange-600 transition-all">
            See More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;