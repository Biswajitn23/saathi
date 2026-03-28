import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImg from "@/assets/construction-site.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video fallback to image */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={heroImg}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/5765826/5765826-uhd_2560_1440_24fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-transparent" />

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
            Delivering durable, high-performance construction solutions with precision and trust.
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

      {/* Bottom bar stats */}
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
