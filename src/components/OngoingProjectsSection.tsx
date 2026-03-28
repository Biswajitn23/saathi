import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const ongoingProjects = [
  {
    name: "Skyline Tower Residences",
    location: "Mumbai, Maharashtra",
    type: "Residential",
    completion: 72,
    expectedDate: "Dec 2026",
  },
  {
    name: "Metro Business Hub",
    location: "Delhi NCR",
    type: "Commercial",
    completion: 45,
    expectedDate: "Mar 2027",
  },
  {
    name: "GreenTech Industrial Park",
    location: "Pune, Maharashtra",
    type: "Industrial",
    completion: 88,
    expectedDate: "Aug 2026",
  },
];

const typeBadgeColor: Record<string, string> = {
  Residential: "bg-primary/20 text-primary",
  Commercial: "bg-blue-500/20 text-blue-400",
  Industrial: "bg-emerald-500/20 text-emerald-400",
};

const OngoingProjectsSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) videoRef.current.pause();
    else videoRef.current.play();
    setPlaying(!playing);
  };

  return (
    <section className="py-20 bg-accent/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3 font-display">
            ONGOING <span className="text-primary">PROJECTS</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto">
            Building the future — one project at a time
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Video Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden shadow-2xl"
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[400px] lg:h-[500px] object-cover"
            >
              <source
                src="https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent" />
            <button
              onClick={togglePlay}
              className="absolute bottom-4 right-4 bg-primary/80 hover:bg-primary text-primary-foreground p-3 rounded-full transition"
              aria-label={playing ? "Pause video" : "Play video"}
            >
              {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-accent/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-primary-foreground text-xs font-semibold">Work in Progress</span>
            </div>
          </motion.div>

          {/* Project Cards Side */}
          <div className="space-y-5">
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-2">
              Showcase of current projects under construction, highlighting progress, precision, and
              dedication to quality craftsmanship.
            </p>

            {ongoingProjects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card/10 border border-primary-foreground/10 rounded-lg p-5 hover:border-primary/40 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-primary-foreground font-bold text-lg font-display group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-3 mt-1 text-primary-foreground/60 text-sm">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {project.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" /> {project.expectedDate}
                      </span>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${typeBadgeColor[project.type]}`}>
                    {project.type}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Progress value={project.completion} className="h-2.5 bg-primary-foreground/10 flex-1" />
                  <span className="text-primary font-bold text-sm min-w-[3rem] text-right">
                    {project.completion}%
                  </span>
                </div>
              </motion.div>
            ))}

            <motion.a
              href="#projects"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-semibold hover:bg-primary/90 transition mt-4 shadow-lg shadow-primary/30"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OngoingProjectsSection;
