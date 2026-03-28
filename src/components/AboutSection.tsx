import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import teamImg from "@/assets/construction-team.jpg";

const AboutSection = () => (
  <section id="about" className="py-24 bg-[#0a0a0b] text-white overflow-hidden">
    <div className="container mx-auto px-6">
      
      {/* Header Section with Industrial Styling */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tighter uppercase">
          WHO ARE <span className="text-orange-600">WE?</span>
        </h2>
        <p className="text-slate-500 uppercase tracking-[0.3em] font-bold text-xs">
          If you care about quality...
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        
        {/* Left Side: Styled Image with Structural Accent */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative group"
        >
          {/* Back accent box */}
          <div className="absolute -bottom-4 -left-4 w-full h-full bg-white/5 border border-white/10 -z-10 group-hover:-bottom-6 group-hover:-left-6 transition-all duration-500" />
          
          <div className="relative border border-white/10 rounded-sm overflow-hidden shadow-2xl">
            <img
              src={teamImg}
              alt="Saathi Group team at construction site"
              className="w-full object-cover h-[450px]"
              loading="lazy"
              width={1280}
              height={960}
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <p className="text-slate-300 text-lg leading-relaxed font-medium">
            Saathi Group is a premier construction company committed to delivering exceptional
            quality in every project. From residential homes to large-scale industrial complexes,
            we bring expertise, innovation, and reliability. Our team of seasoned professionals
            ensures every build meets the highest standards of durability and design.
          </p>

          {/* Styled List */}
          <ul className="space-y-4 pt-4 border-t border-white/5">
            {[
              "12+ Years of Industry Experience",
              "Uncompromising Quality Standards",
              "Trusted & Skilled Team of Engineers",
              "On-Time Project Delivery",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4 text-white">
                <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                <span className="font-bold text-sm uppercase tracking-tight">{item}</span>
              </li>
            ))}
          </ul>

          {/* Sharp, Industrial Button */}
          <div className="pt-6">
            <a
              href="#contact"
              className="inline-block bg-orange-600 text-white text-[11px] font-black uppercase tracking-[0.2em] px-10 py-4 rounded-sm hover:bg-white hover:text-black transition-all shadow-xl shadow-orange-600/10 active:scale-[0.98]"
            >
              Read More
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;  