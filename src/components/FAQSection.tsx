import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Search, MessageSquare, Phone } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  { id: "1", question: "What types of construction services do you offer?", answer: "Saathi Group specializes in civil construction, residential projects, commercial buildings, industrial construction, renovation services, and architectural design.", category: "Services" },
  { id: "2", question: "How long does a typical construction project take?", answer: "Residential projects typically take 6-18 months, while commercial projects range from 12-36 months depending on complexity.", category: "Timeline" },
  { id: "3", question: "Do you provide free consultations?", answer: "Yes! We offer free initial consultations to understand your project requirements and provide preliminary cost estimates.", category: "Consultation" },
  { id: "4", question: "What is your safety record?", answer: "Safety is our priority. We maintain a zero-incident record through rigorous OSHA compliance and regular site inspections.", category: "Safety" },
  { id: "5", question: "How do you handle project changes?", answer: "Modifications are documented via change orders to ensure full transparency regarding budget and schedule impacts.", category: "Process" },
  { id: "6", question: "What warranty do you provide?", answer: "We offer a 5-year structural warranty and specific system warranties (HVAC, Electrical) per project specs.", category: "Warranty" },
  { id: "7", question: "Do you use sustainable practices?", answer: "Yes, we integrate eco-friendly materials and energy-efficient designs into our structural blueprints.", category: "Sustainability" },
  { id: "8", question: "How can I get a quote?", answer: "Contact us at +91 123 456 7890 or via info@saathigroup.com to schedule a detailed site assessment.", category: "Quote" },
];

const categories = ["All", "Services", "Timeline", "Safety", "Process", "Warranty"];

const FAQSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQ = useMemo(() => {
    return faqData.filter(item => {
      const matchesCat = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="faq" className="py-20 bg-[#f8f9fa] relative overflow-hidden">
      {/* Background Engineering Grid Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-orange-600 font-bold tracking-widest uppercase text-sm mb-3"
            >
              <HelpCircle className="w-5 h-5" /> Questions & Answers
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Building Clarity <span className="text-orange-600">.</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Everything you need to know about partnering with Saathi Group for your next landmark project.
            </p>
          </div>

          {/* Dynamic Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text"
              placeholder="Search your doubt..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-white shadow-sm"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all border-2 ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "bg-white text-slate-600 border-transparent hover:border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <AnimatePresence mode="popLayout">
            {filteredFAQ.map((faq) => (
              <motion.div
                layout
                key={faq.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`group rounded-2xl border transition-all duration-300 ${
                  expandedId === faq.id 
                  ? "bg-white border-orange-500 shadow-xl ring-1 ring-orange-500/10" 
                  : "bg-white/50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className={`font-bold text-lg transition-colors ${expandedId === faq.id ? "text-orange-600" : "text-slate-800"}`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-lg transition-all ${expandedId === faq.id ? "bg-orange-500 text-white rotate-180" : "bg-slate-100 text-slate-400"}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 mx-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredFAQ.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400 font-medium">No results found for "{searchQuery}"</p>
          </div>
        )}

        {/* Enhanced CTA Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 bg-slate-900 rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] -mr-32 -mt-32" />
          <h3 className="text-3xl font-bold text-white mb-4">Have a Specific Project in Mind?</h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-10">
            Our engineers are ready to discuss your requirements. Let's build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+911234567890" className="flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all transform hover:-translate-y-1">
              <Phone className="w-5 h-5" /> Call Expert
            </a>
            <a href="#contact" className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all transform hover:-translate-y-1">
              <MessageSquare className="w-5 h-5" /> Project Inquiry
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQSection;