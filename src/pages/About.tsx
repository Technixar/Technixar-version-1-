import { CtaSection } from "@/components/CtaSection";
import * as motion from "motion/react-client";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-charcoal text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            About <span className="text-primary-yellow">Technixar</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl leading-relaxed"
          >
            Empowering businesses through state-of-the-art technology, transforming ambitious ideas into resilient digital realities.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Technixar is a Singapore-based technology consulting and software development company focused on helping businesses transform ideas into scalable digital products.
              </p>
              <br />
              <p className="text-gray-600 leading-relaxed text-lg">
                Our expertise spans software engineering, fintech systems, cloud technologies, AI automation, and digital transformation. We work closely with startups, SMEs, and enterprises to design, build, and deploy solutions that create lasting value.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              <div>
                <h3 className="text-xl font-bold mb-3 text-charcoal">Mission</h3>
                <p className="text-gray-600">
                  To empower businesses through innovative technology solutions that drive growth, efficiency, and long-term success.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-charcoal">Vision</h3>
                <p className="text-gray-600">
                  To become a globally recognized technology partner delivering impactful digital transformation solutions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-10 lg:p-12 border border-gray-100 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-8 text-charcoal">Core Values</h3>
            <ul className="space-y-6">
              {[
                { title: "Innovation", desc: "Pushing boundaries to explore new possibilities." },
                { title: "Integrity", desc: "Building trust through honest transparent partnerships." },
                { title: "Excellence", desc: "Delivering the highest quality in every line of code." },
                { title: "Customer Success", desc: "Your growth is the real measure of our success." },
                { title: "Continuous Learning", desc: "Constantly evolving with emerging technologies." }
              ].map((val, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle className="text-primary-yellow" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-charcoal">{val.title}</h4>
                    <p className="text-gray-600">{val.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
