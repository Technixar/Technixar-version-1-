import { CtaSection } from "@/components/CtaSection";
import * as motion from "motion/react-client";
import { ArrowRight, Code, ShieldCheck, Database, Smartphone, Cloud, Cpu, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative bg-black text-white pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-yellow/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
          {/* subtle grid */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjM0QzRDNEIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIvPjwvZz48L3N2Zz4=')] bg-repeat opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
              Transforming Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow to-yellow-200">Scalable Digital Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              We build enterprise software, fintech platforms, mobile applications, cloud infrastructure, and AI-powered solutions that help businesses innovate, grow, and scale globally.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary-yellow text-black font-semibold rounded-lg shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                Book a Free Consultation
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                View Our Services <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-24 bg-gray-50 border-y border-gray-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-charcoal tracking-tight">
              Trusted Technology Partner for Modern Businesses
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              At Technixar, we combine deep technical expertise with business understanding to build solutions that create measurable impact. From startups to enterprises, we help organizations accelerate digital transformation through innovative technology.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {[
                "Custom Software Development", 
                "Fintech Solutions", 
                "Cloud Infrastructure", 
                "AI & Automation", 
                "Mobile Applications", 
                "Digital Transformation"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                  <CheckCircle size={16} className="text-primary-yellow" />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-charcoal mb-4">Our Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Comprehensive technology solutions designed to scale with your business and drive digital excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Custom Software", icon: Code, desc: "Design and build custom enterprise-grade software solutions tailored to your business needs." },
              { title: "Fintech Solutions", icon: ShieldCheck, desc: "Secure, scalable, and compliant financial technology solutions and payment platforms." },
              { title: "Mobile App Development", icon: Smartphone, desc: "Build powerful, beautiful mobile applications for iOS and Android platforms." },
              { title: "Web Development", icon: Database, desc: "Create modern digital experiences that engage users and drive business growth." },
              { title: "Cloud & DevOps", icon: Cloud, desc: "Build secure, resilient, and scalable cloud infrastructure with automated CI/CD pipelines." },
              { title: "AI & Automation", icon: Cpu, desc: "Leverage artificial intelligence and workflow automation to improve business efficiency." },
            ].map((srv, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:border-primary-yellow/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gray-50 group-hover:bg-primary-yellow/10 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <srv.icon size={28} className="text-charcoal group-hover:text-primary-yellow transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{srv.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{srv.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-black group-hover:text-primary-yellow transition-colors">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
