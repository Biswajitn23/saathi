import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Enterprises",
    text: "They finished our office building faster than we expected. The quality of the steel and concrete is top-notch. Truly a team you can trust.",
  },
  {
    name: "Priya Sharma",
    company: "Sharma Realty",
    text: "We have built many homes with Saathi Group. They always show up on time and stay within our budget. They are our go-to builders.",
  },
  {
    name: "Amit Patel",
    company: "Patel Industries",
    text: "The warehouse they built for us is incredibly strong and modern. From the floor to the roof, everything was handled perfectly.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextReview = () => setIndex((i) => (i + 1) % reviews.length);
  const prevReview = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextReview, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-white text-slate-900 relative overflow-hidden">
      {/* Background Decor - Looks like an architectural grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Simple Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-orange-600 font-black text-xs uppercase tracking-[0.3em] mb-4">Trusted by Leaders</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
            What Our <span className="text-orange-600">Partners</span> Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-slate-50 border border-slate-200 p-6 sm:p-8 md:p-16 rounded-sm shadow-xl">
            
            {/* Corner Brackets (The "Blueprint" look) */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-600" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-600" />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center"
                aria-live="polite"
              >
                <Quote className="h-10 w-10 md:h-12 md:w-12 text-orange-600/20 mx-auto mb-6 md:mb-8" />
                
                <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-8 md:mb-10 text-slate-700 italic">
                  "{reviews[index].text}"
                </p>

                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>

                <div className="space-y-1">
                  <h4 className="text-base sm:text-lg font-black uppercase tracking-tight text-slate-900">
                    {reviews[index].name}
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-orange-600 uppercase tracking-widest">
                    {reviews[index].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-center gap-3 md:hidden">
              <button
                onClick={prevReview}
                aria-label="Show previous testimonial"
                className="w-11 h-11 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all shadow-md"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextReview}
                aria-label="Show next testimonial"
                className="w-11 h-11 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all shadow-md"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Navigation Buttons - Simple & Clean */}
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-4 md:-left-6">
              <button 
                onClick={prevReview}
                aria-label="Show previous testimonial"
                className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all shadow-lg"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-4 md:-right-6">
              <button 
                onClick={nextReview}
                aria-label="Show next testimonial"
                className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all shadow-lg"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Progress dots at the bottom */}
          <div className="flex justify-center gap-3 mt-10">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 transition-all duration-500 rounded-full ${index === i ? 'w-8 bg-orange-600' : 'w-2 bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;