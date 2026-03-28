import { motion } from "framer-motion";
import { Shield, Users, Clock, ArrowRight } from "lucide-react";
import siteImg from "@/assets/construction-site.jpg";

const FeatureSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            PROFESSIONAL
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-[0.3em] mb-6">
            <span className="text-primary">CONSTRUCTION</span> EXCELLENCE
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Our professional team has successfully completed over 150 projects across residential,
            commercial, and industrial sectors. We use the finest materials and the latest
            techniques to ensure every structure stands the test of time.
          </p>

          <div className="space-y-5 mb-8">
            {[
              { icon: Shield, text: "Premium Quality Materials" },
              { icon: Users, text: "Skilled Engineers & Architects" },
              { icon: Clock, text: "Timely Project Delivery" },
            ].map((f) => (
              <div key={f.text} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{f.text}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded font-semibold hover:bg-primary/90 transition"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={siteImg}
            alt="Professional construction site"
            className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
            loading="lazy"
            width={1920}
            height={1080}
          />
          <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold font-display">12+</div>
            <div className="text-sm">Years of Excellence</div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
