import { motion } from "framer-motion";
import { Hammer, Building2, Wrench } from "lucide-react";
import logo from "@/assets/logo.png";

const Loader = () => {
  // 3D Cube Animation Variants
  const cubeVariants: any = {
    animate: (i: number) => ({
      rotateY: [0, 90, 180, 270, 360],
      y: [0, -15, 0],
      transition: {
        duration: 3,
        delay: i * 0.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  // Tool-specific "Action" Animations
  const hammerVariants: any = {
    animate: {
      rotate: [0, -45, 0],
      transition: { duration: 1, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const wrenchVariants: any = {
    animate: {
      rotate: [0, 90, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
    }
  };

  const buildingVariants: any = {
    animate: {
      scale: [1, 1.1, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const floatVariants = {
    animate: (i: number) => ({
      y: [0, -40, 0],
      x: [0, 10, 0],
      opacity: [0.2, 0.5, 0.2],
      transition: {
        duration: 4,
        delay: i * 0.8,
        repeat: Infinity,
        ease: "easeInOut" as any,
      },
    }),
  };

  return (
    <div className="fixed inset-0 bg-[#0a0f18] flex items-center justify-center z-50 overflow-hidden font-sans">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: `linear-gradient(#ffaa00 1px, transparent 1px), linear-gradient(90deg, #ffaa00 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      {/* Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            custom={i}
            animate="animate"
            variants={floatVariants}
            className="absolute w-64 h-64 rounded-full bg-orange-500/10 blur-[100px]"
            style={{
              top: `${20 + i * 30}%`,
              left: `${10 + i * 25}%`,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* 3D Tools Section */}
        <div className="flex justify-center gap-10 mb-12">
          <motion.div animate="animate" variants={hammerVariants} className="bg-white/5 p-4 rounded-xl border border-white/10 shadow-2xl">
            <Hammer className="w-10 h-10 text-orange-500" />
          </motion.div>
          <motion.div animate="animate" variants={buildingVariants} className="bg-white/5 p-4 rounded-xl border border-white/10 shadow-2xl">
            <Building2 className="w-10 h-10 text-orange-500" />
          </motion.div>
          <motion.div animate="animate" variants={wrenchVariants} className="bg-white/5 p-4 rounded-xl border border-white/10 shadow-2xl">
            <Wrench className="w-10 h-10 text-orange-500" />
          </motion.div>
        </div>

        {/* 3D Isometric Brick Assembly */}
        <div className="flex justify-center gap-4 mb-10 [perspective:1000px]">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              custom={i}
              animate="animate"
              variants={cubeVariants}
              className="relative w-6 h-16 transition-all"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Face */}
              <div className="absolute inset-0 bg-orange-500 rounded-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.2)]" />
              {/* Right Face (Simulated 3D side) */}
              <div className="absolute inset-0 bg-orange-700 rounded-sm origin-right [transform:rotateY(90deg)] w-4" />
              {/* Top Face */}
              <div className="absolute inset-0 bg-orange-400 rounded-sm origin-top [transform:rotateX(90deg)] h-4" />
            </motion.div>
          ))}
        </div>

        {/* Logo Section */}
        <div className="mb-8">
          <motion.img 
            src={logo} 
            alt="Saathi Group" 
            className="h-24 w-auto mx-auto"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Text and Progress */}
        <div className="space-y-4">
          <motion.h2 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl font-black uppercase tracking-tighter text-orange-500"
          >
            Excellence in <span className="text-white">Detail</span>
          </motion.h2>

          <div className="w-56 h-1.5 bg-white/10 rounded-full overflow-hidden mx-auto border border-white/5">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"
            />
          </div>

          <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">
            Building Trust &bull; Quality Construction
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;