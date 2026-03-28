import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

import heroImg from "@/assets/construction-site.jpg";
import slide1 from "@/assets/hero-slide-1.jpg";
import slide2 from "@/assets/hero-slide-2.jpg";
import slide3 from "@/assets/hero-slide-3.jpg";
import slide4 from "@/assets/hero-slide-4.jpg";
import slide5 from "@/assets/hero-slide-5.jpg";

const slides = [slide1, slide2, slide3, slide4, slide5];

type MediaMode = "video" | "slideshow" | "static";

const HeroSection = () => {
  const [mode, setMode] = useState<MediaMode>("video");
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoError = useCallback(() => {
    setMode("slideshow");
  }, []);

  // Slideshow auto-advance with Ken Burns
  useEffect(() => {
    if (mode !== "slideshow") return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [mode]);

  // If video stalls for too long, fallback
  useEffect(() => {
    if (mode !== "video") return;
    const timer = setTimeout(() => {
      const v = videoRef.current;
      if (v && (v.readyState < 2 || v.paused)) {
        setMode("slideshow");
      }
    }, 6000);
    return () => clearTimeout(timer);
  }, [mode]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── LEVEL 1: Video ── */}
      {mode === "video" && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={heroImg}
          onError={handleVideoError}
          onStalled={handleVideoError}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/5765826/5765826-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
      )}

      {/* ── LEVEL 2: Slideshow ── */}
      {mode === "slideshow" && (
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={slides[currentSlide]}
              alt="Construction site"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1.15 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 0.8 }, scale: { duration: 6, ease: "linear" } }}
              className="absolute inset-0 w-full h-full object-cover"
              onError={() => setMode("static")}
            />
          </AnimatePresence>
        </div>
      )}

      {/* ── LEVEL 3: Static image ── */}
      {mode === "static" && (
        <img
          src={heroImg}
          alt="Construction site"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/30">
            ISO Certified • Govt Approved
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            If You Care About{" "}
            <span className="text-primary">Quality</span>,<br />
            We Build It Right
          </h1>

          <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg font-body leading-relaxed">
            Delivering durable, innovative construction solutions with precision and trust.
            With over a decade of experience, we build projects that stand the test of time.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded font-semibold hover:bg-primary/90 transition shadow-lg shadow-primary/30"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded font-semibold hover:border-primary hover:text-primary transition"
            >
              <PlayCircle className="h-4 w-4" /> View Projects
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary">
        <div className="container mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-primary-foreground">
          {[
            { num: "150+", label: "Projects Completed" },
            { num: "12+", label: "Years Experience" },
            { num: "50+", label: "Expert Engineers" },
            { num: "98%", label: "Client Satisfaction" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl md:text-3xl font-bold font-display">{s.num}</div>
              <div className="text-xs md:text-sm opacity-90">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
