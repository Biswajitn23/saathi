import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, Kumar Enterprises",
    text: "Saathi Group delivered our commercial complex ahead of schedule with exceptional quality. Their professionalism and attention to detail are unmatched in the industry.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Director, Sharma Realty",
    text: "We've partnered with Saathi Group on multiple residential projects. Their commitment to quality and timely delivery has made them our preferred construction partner.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Managing Director, Patel Industries",
    text: "The industrial warehouse Saathi Group built for us exceeded all expectations. Robust construction, modern design, and completed within budget. Highly recommended!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            OUR WORK SPEAKS THROUGH OUR{" "}
            <span className="text-primary">CLIENTS</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-card border border-border rounded-xl p-8 md:p-12 text-center"
            >
              <Quote className="h-10 w-10 text-primary/30 mx-auto mb-4" />
              <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                "{testimonials[current].text}"
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <h4 className="font-display font-bold text-foreground text-lg">
                {testimonials[current].name}
              </h4>
              <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary flex items-center justify-center transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary flex items-center justify-center transition"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
