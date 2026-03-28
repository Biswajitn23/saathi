import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImg from "@/assets/construction-site.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0a0b]">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImg}
          alt="Construction site background"
          className="w-full h-full object-cover grayscale-[0.2] contrast-125 opacity-85"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220]/70 via-black/25 to-transparent" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} 
      />

      {/* Main Content Area */}
      <div className="relative z-10 flex-grow container mx-auto px-4 sm:px-6 flex flex-col justify-center pt-24 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* FIXED: ISO Badge shifted down to avoid Navbar merge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/5 backdrop-blur-sm mb-5 mt-6 md:mt-8 max-w-full">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-[9px] sm:text-[10px] font-black text-orange-500 uppercase tracking-[0.12em] sm:tracking-[0.2em] whitespace-normal">
              ISO 9001:2015 Certified Firm
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-5 sm:mb-6 uppercase">
            If You Care About <br />
            <span className="text-orange-600">Quality</span>, <br />
            We Build It Right
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white mb-7 sm:mb-8 max-w-xl font-medium leading-relaxed border-l-2 border-orange-600 pl-3 sm:pl-4">
            Delivering high-performance construction solutions. With over a decade of experience, we build structures that stand the test of time.
          </p>

          {/* Compact Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
             <a
              href="#contact"
              className="group inline-flex items-center gap-2 sm:gap-3 bg-orange-600 text-white px-5 sm:px-7 py-3 sm:py-4 text-[10px] sm:text-xs font-black uppercase tracking-[0.14em] sm:tracking-widest hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_rgba(255,255,255,0.1)]"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </a>
            
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-orange-500 text-[10px] sm:text-xs font-black uppercase tracking-[0.14em] sm:tracking-widest px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:border-white/50 hover:text-orange-300 transition-all shadow-[0_8px_24px_rgba(0,0,0,0.25)] group"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 border border-white/35 bg-white/10 rounded-full flex items-center justify-center group-hover:border-orange-300">
                <PlayCircle className="w-3.5 h-3.5" />
              </div>
              View Projects
            </a>
          </div>
        </motion.div>
      </div>

      {/* SMALLER: Industrial Orange Stats Bar */}
      <motion.div 
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        className="relative bg-orange-600 z-20"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/10">
            {[
              { num: "150+", label: "Projects Delivered" },
              { num: "12+", label: "Years Experience" },
              { num: "50+", label: "Master Engineers" },
              { num: "0", label: "Safety Incidents" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="px-4 sm:px-6 py-3 md:py-5 flex flex-col items-center md:items-start group hover:bg-black/5 transition-colors"
              >
                <div className="text-lg sm:text-xl md:text-2xl font-black text-black tracking-tighter">
                  {stat.num}
                </div>
                <div className="text-[8px] sm:text-[9px] font-black text-black/70 uppercase tracking-[0.08em] sm:tracking-widest mt-0.5 text-center md:text-left">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default HeroSection;