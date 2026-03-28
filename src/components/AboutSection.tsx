import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import teamImg from "@/assets/construction-team.jpg";

const AboutSection = () => (
  <section id="about" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          WHO ARE <span className="text-primary">WE?</span>
        </h2>
        <p className="text-muted-foreground uppercase tracking-widest text-sm">
          If you care about quality...
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={teamImg}
            alt="Saathi Group team at construction site"
            className="rounded-lg shadow-xl w-full object-cover h-[400px]"
            loading="lazy"
            width={1280}
            height={960}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Saathi Group is a premier construction company committed to delivering exceptional
            quality in every project. From residential homes to large-scale industrial complexes,
            we bring expertise, innovation, and reliability. Our team of seasoned professionals
            ensures every build meets the highest standards of durability and design.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "12+ Years of Industry Experience",
              "Uncompromising Quality Standards",
              "Trusted & Skilled Team of Engineers",
              "On-Time Project Delivery",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-7 py-3 rounded font-semibold hover:bg-primary/90 transition"
          >
            Read More
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
