import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";

export function CtaSection() {
  return (
    <section className="py-24 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-32 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#FFC107" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.1,-46.3C90.4,-33.5,96.1,-18.1,96.5,-2.5C96.9,13.1,92,28.9,82.9,42.4C73.8,55.9,60.5,67.1,45.8,74.7C31.1,82.3,15.5,86.3,-0.1,86.5C-15.7,86.7,-31.4,83.1,-45.5,75.2C-59.6,67.3,-72.1,55,-79.8,40.6C-87.5,26.2,-90.4,9.6,-88,-6.4C-85.6,-22.4,-77.9,-37.8,-67.2,-50.2C-56.5,-62.6,-42.8,-72,-28.9,-77.7C-15,-83.4,-0.9,-85.4,14.6,-83.1C30.1,-80.8,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to Accelerate Your <span className="text-primary-yellow">Digital Transformation?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether you're launching a startup, modernizing enterprise systems, or building innovative fintech solutions, Technixar is ready to help bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-yellow text-black font-semibold rounded-lg shadow-lg hover:bg-bright-yellow hover:-translate-y-1 transition-all duration-300"
          >
            Schedule Free Consultation
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
