import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, MapPin, Calendar, ArrowRight } from "lucide-react";

const projectList = [
  { name: "Skyline Homes", place: "Mumbai", status: "Almost Done", progress: 75, date: "End of 2026" },
  { name: "City Business Hub", place: "Delhi", status: "Starting Up", progress: 40, date: "Early 2027" },
  { name: "Green Park Factory", place: "Pune", status: "Roofing Stage", progress: 90, date: "Mid 2026" },
];

const OngoingProjects = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleVideo = () => {
    if (isPlaying) videoRef.current?.pause();
    else videoRef.current?.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        
        {/* Simple Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ongoing <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            We are hard at work building new spaces across the country. 
            Take a look at what we are building right now.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Video: Shows "Real" Work */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800">
            <video
              ref={videoRef}
              autoPlay muted loop playsInline
              className="w-full h-[450px] object-cover"
            >
              <source src="https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4" type="video/mp4" />
            </video>
            
            {/* Simple Play/Pause */}
            <button 
              onClick={handleVideo}
              className="absolute bottom-6 right-6 bg-orange-500 p-4 rounded-full hover:scale-110 transition"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>

            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-xs font-bold tracking-widest text-orange-500 uppercase">Live Update</p>
            </div>
          </div>

          {/* Project List: Simple Progress Bars */}
          <div className="space-y-6">
            {projectList.map((item) => (
              <div key={item.name} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-slate-400 text-sm">{item.place} • Finish Date: {item.date}</p>
                  </div>
                  <span className="text-xs bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full font-bold">
                    {item.status}
                  </span>
                </div>

                {/* Progress Bar - Easy to read */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span>Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-orange-500"
                    />
                  </div>
                </div>
              </div>
            ))}

            <button className="flex items-center gap-2 text-orange-500 font-bold hover:gap-4 transition-all pt-4">
              See All Our Projects <ArrowRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;