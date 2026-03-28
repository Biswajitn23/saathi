import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  User, 
  Share2, 
  Bookmark, 
  ChevronRight, 
  Linkedin, 
  Twitter, 
  Facebook 
} from "lucide-react";

// Mock Data - In a real app, import this from your data file
const post = {
  id: "1",
  title: "REDEFINING URBAN INFRASTRUCTURE",
  subtitle: "How sustainable materials are changing the skyline of modern India.",
  category: "Civil Engineering",
  author: "Himanchal Sahu",
  date: "March 28, 2026",
  readTime: "12",
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  tags: ["Sustainability", "UrbanPlanning", "SteelStructure"],
  content: `The intersection of technology and traditional masonry has reached a breaking point. As we look toward 2030, the "Saathi Approach" involves integrating carbon-neutral concrete with IoT-enabled structural monitoring. 
  
  Structural integrity is no longer just about the strength of the beam; it is about the intelligence of the system. Our recent laboratory tests suggest that self-healing bio-concrete can extend the lifespan of a bridge by nearly 40 years while reducing maintenance costs by 65%.`
};

const BlogPostDetail = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Progress bar and parallax transforms
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="bg-[#0a0a0b] text-slate-300 min-h-screen font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-orange-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Persistent Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0b]/80 backdrop-blur-xl px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <button className="group flex items-center gap-2 text-[10px] font-black tracking-widest text-white hover:text-orange-500 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            BACK TO PROJECT INDEX
          </button>
          <div className="hidden md:block h-4 w-[1px] bg-white/10" />
          <span className="hidden md:block text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            Saathi Insights // Vol. 2026
          </span>
        </div>
        <div className="flex gap-6 items-center">
          <div className="flex gap-4">
            <Share2 className="w-4 h-4 cursor-pointer hover:text-orange-500 transition-colors" />
            <Bookmark 
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`w-4 h-4 cursor-pointer transition-colors ${isBookmarked ? 'fill-orange-500 text-orange-500' : 'hover:text-orange-500'}`} 
            />
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        {/* Title Section */}
        <section className="container mx-auto px-4 max-w-6xl mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
          >
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-orange-600" />
                <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.4em]">
                  {post.category}
                </span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl font-light italic leading-relaxed">
                "{post.subtitle}"
              </p>
            </div>

            {/* Bento Metadata Grid */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-[1px] bg-white/5 border border-white/10 p-[1px]">
              {[
                { label: "ENGINEER", value: post.author },
                { label: "DATE", value: post.date },
                { label: "READ TIME", value: `${post.readTime} MIN` },
                { label: "STATUS", value: "CERTIFIED" },
              ].map((item, i) => (
                <div key={i} className="bg-[#0a0a0b] p-4">
                  <p className="text-[9px] font-bold text-slate-600 uppercase mb-1">{item.label}</p>
                  <p className="text-xs font-bold text-white uppercase">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Parallax Image Section */}
        <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden border-y border-white/10">
          <motion.img 
            style={{ y: imageY }}
            src={post.image}
            className="w-full h-[120%] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-transparent to-[#0a0a0b]" />
        </div>

        {/* Content Section */}
        <section className="container mx-auto px-4 max-w-6xl mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar Sticky Info */}
            <aside className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-4">Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-slate-500 border border-white/10 px-2 py-1 hover:border-orange-500 transition-colors cursor-pointer">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-4">Inquiry</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">Interested in modern infrastructure solutions for your next project?</p>
                  <button className="w-full py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all">
                    Talk to an Expert
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Article Body */}
            <article className="lg:col-span-8">
              <div className="prose prose-invert prose-orange max-w-none 
                prose-p:text-lg prose-p:leading-[1.8] prose-p:text-slate-400 prose-p:mb-8
                prose-headings:text-white prose-headings:font-black prose-headings:tracking-tighter
                prose-strong:text-white prose-strong:font-bold
                first-letter:text-7xl first-letter:font-black first-letter:text-orange-600 first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
                
                <p>{post.content}</p>
                
                <div className="my-16 p-8 bg-white/5 border-l-4 border-orange-600 italic">
                  <p className="text-2xl text-white font-light">
                    "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
                  </p>
                  <cite className="text-sm font-bold text-slate-500 not-italic uppercase mt-4 block">— Le Corbusier</cite>
                </div>

                <h3>Engineering the Future</h3>
                <p>
                  As we integrate more digital twins and real-time data into our construction workflows, the boundary between the physical and digital world blurs. Saathi Group is proud to be at the forefront of this transformation.
                </p>
              </div>

              {/* Share & Footer Actions */}
              <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black text-slate-600 uppercase">Share Blueprint:</span>
                  <div className="flex gap-4">
                    <Linkedin className="w-4 h-4 hover:text-orange-500 cursor-pointer" />
                    <Twitter className="w-4 h-4 hover:text-orange-500 cursor-pointer" />
                    <Facebook className="w-4 h-4 hover:text-orange-500 cursor-pointer" />
                  </div>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 border border-white/10 text-[10px] font-black uppercase hover:bg-white hover:text-black transition-all">
                  Next Article <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* Footer Branding */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase">
          Saathi Group &bull; Built on Integrity
        </p>
      </footer>
    </div>
  );
};

export default BlogPostDetail;