import { motion } from "framer-motion";
import { Shield, Users, Clock, ArrowRight } from "lucide-react";
import siteImg from "@/assets/construction-site.jpg";

const FeatureSection = () => (
  <section className="py-24 bg-[#f8f9fa] overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Typography and Features */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-2 tracking-tighter uppercase leading-none">
              PROFESSIONAL
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-orange-600 tracking-[0.2em] md:tracking-[0.3em] uppercase">
              CONSTRUCTION EXCELLENCE
            </h2>
          </div>

          <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10 border-l-2 border-slate-200 pl-6">
            Our professional team has successfully completed over 150 projects across residential,
            commercial, and industrial sectors. We use the finest materials and the latest
            techniques to ensure every structure stands the test of time.
          </p>

          {/* Industrial "Block" List */}
          <div className="space-y-4 mb-10">
            {[
              { icon: Shield, text: "Premium Quality Materials" },
              { icon: Users, text: "Skilled Engineers & Architects" },
              { icon: Clock, text: "Timely Project Delivery" },
            ].map((f, index) => (
              <motion.div 
                key={f.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex items-center gap-5 bg-white p-4 border border-slate-100 shadow-sm border-l-4 border-l-orange-600 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  <f.icon className="h-6 w-6 text-orange-600" strokeWidth={1.5} />
                </div>
                <span className="text-slate-900 font-bold uppercase tracking-tight text-sm">
                  {f.text}
                </span>
              </motion.div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-600 transition-all shadow-xl group"
          >
            Learn More 
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Right Side: Framed Image with Badge */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-10 lg:mt-0"
        >
          {/* Architectural Background Frame */}
          <div className="absolute -top-6 -right-6 w-full h-full border-2 border-orange-600/20 -z-10 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent z-10 pointer-events-none mix-blend-multiply" />

          <img
            src={siteImg}
            alt="Professional construction site"
            className="shadow-2xl w-full object-cover h-[500px] lg:h-[600px] grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            loading="lazy"
            width={1920}
            height={1080}
          />
          
          {/* Industrial Floating Badge */}
          <div className="absolute -bottom-8 -left-4 md:-left-12 bg-orange-600 text-white p-8 shadow-2xl z-20 flex flex-col items-center justify-center border-4 border-[#f8f9fa]">
            <div className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-1">
              12+
            </div>
            <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-orange-100 text-center">
              Years of<br/>Excellence
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default FeatureSection;