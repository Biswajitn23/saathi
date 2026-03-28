import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImg from "@/assets/construction-site.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen min-h-[650px] flex flex-col overflow-hidden bg-[#0a0a0b]">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroImg}
          className="w-full h-full object-cover grayscale-[0.2] contrast-125 opacity-85"
        >
          <source
            src="https://videos.pexels.com/video-files/5765826/5765826-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220]/70 via-black/25 to-transparent" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} 
      />

      {/* Main Content Area */}
      <div className="relative z-10 flex-grow container mx-auto px-6 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* FIXED: ISO Badge shifted down to avoid Navbar merge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-white/10 bg-white/5 backdrop-blur-sm mb-6 mt-16 md:mt-20">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em]">
              ISO 9001:2015 Certified Firm
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6 uppercase">
            If You Care About <br />
            <span className="text-orange-600">Quality</span>, <br />
            We Build It Right
          </h1>

          <p className="text-base md:text-lg text-slate-400 mb-8 max-w-xl font-medium leading-relaxed border-l-2 border-orange-600 pl-4">
            Delivering high-performance construction solutions. With over a decade of experience, we build structures that stand the test of time.
          </p>

          {/* Compact Buttons */}
          <div className="flex flex-wrap items-center gap-4">
             <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-orange-600 text-white px-7 py-4 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_rgba(255,255,255,0.1)]"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </a>
            
            <a
              href="#projects"
              className="inline-flex items-center gap-3 text-white text-xs font-black uppercase tracking-widest hover:text-orange-500 transition-colors group"
            >
              <div className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center group-hover:border-orange-500">
                <PlayCircle className="w-4 h-4" />
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
                className="px-6 py-4 md:py-5 flex flex-col items-center md:items-start group hover:bg-black/5 transition-colors"
              >
                <div className="text-xl md:text-2xl font-black text-black tracking-tighter">
                  {stat.num}
                </div>
                <div className="text-[9px] font-black text-black/70 uppercase tracking-widest mt-0.5">
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