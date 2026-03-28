import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  Home, 
  Hammer,
  Clock
} from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", projectType: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    { id: "res", label: "Residential", icon: Home },
    { id: "com", label: "Commercial", icon: Building2 },
    { id: "ind", label: "Industrial", icon: Hammer },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setForm({ name: "", phone: "", email: "", message: "", projectType: "" });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block"
              >
                Let's Build Your Legacy
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-none">
                GET A STRUCTURAL <span className="text-orange-600">QUOTE.</span>
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-4 text-slate-400 font-bold text-sm">
              <Clock className="w-5 h-5 text-orange-500" />
              <span>Response Time: &lt; 24 Hours</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Enhanced Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 relative"
            >
              <AnimatePresence>
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-8 rounded-3xl"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Received!</h3>
                    <p className="text-slate-500">Our lead engineer will review your request and contact you shortly.</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Project Type Selector */}
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Select Project Type</label>
                  <div className="grid grid-cols-3 gap-3">
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setForm({ ...form, projectType: type.id })}
                        className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                          form.projectType === type.id 
                          ? "border-orange-500 bg-orange-50 text-orange-600 shadow-inner" 
                          : "border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200"
                        }`}
                      >
                        <type.icon className="w-6 h-6" />
                        <span className="text-[10px] font-bold uppercase">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-slate-500 ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-slate-500 ml-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-slate-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-slate-500 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-slate-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-slate-500 ml-1">Project Details</label>
                  <textarea
                    placeholder="Describe your vision, site location, or specific requirements..."
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-slate-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white group flex items-center justify-center gap-3 py-5 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-xl hover:shadow-orange-500/20 active:scale-[0.98]"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  INITIATE CONSULTATION
                </button>
              </form>
            </motion.div>

            {/* Right: Contact Details & Info */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-600/20 rounded-full blur-3xl" />
                
                <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                  Direct Channels
                </h3>

                <div className="space-y-6">
                  {[
                    { icon: Phone, title: "Call for Inquiry", detail: "+91 123 456 7890", sub: "Mon - Sat, 9AM - 7PM" },
                    { icon: Mail, title: "Email Proposals", detail: "info@saathigroup.com", sub: "For partnership & tenders" },
                    { icon: MapPin, title: "Headquarters", detail: "123 Construction Ave, Mumbai", sub: "Level 4, Skyline Plaza" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-5 group cursor-pointer">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-orange-600 group-hover:border-orange-600 transition-all">
                        <item.icon className="w-5 h-5 text-orange-500 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.title}</p>
                        <p className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors">{item.detail}</p>
                        <p className="text-[10px] text-slate-400 mt-1">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Map UI */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group relative rounded-3xl overflow-hidden border border-slate-200 h-[280px] shadow-lg"
              >
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all pointer-events-none z-10" />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-orange-600" />
                  Live Site Location
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.77123456789!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1625560000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(0.5) contrast(1.1)" }}
                  allowFullScreen
                  loading="lazy"
                  title="Saathi Group Location"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;