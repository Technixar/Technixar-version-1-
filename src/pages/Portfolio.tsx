import { CtaSection } from "@/components/CtaSection";
import * as motion from "motion/react-client";
import { ArrowUpRight } from "lucide-react";

import fintechImage from '@/assets/images/portfolio_fintech_1781162831428.png';
import healthcareImage from '@/assets/images/portfolio_healthcare_1781162847257.png';

export default function Portfolio() {
  const projects = [
    { title: "Digital Remittance Platform", desc: "Cross-border remittance platform with multi-currency support, KYC verification, and real-time settlements.", category: "Fintech", image: fintechImage },
    { title: "Healthcare Management Portal", desc: "Comprehensive healthcare solution for patient management and telemedicine.", category: "Healthcare", image: healthcareImage },
    { title: "Enterprise ERP System", desc: "Custom ERP platform streamlining operations and business workflows.", category: "Enterprise" },
    { title: "E-Commerce Marketplace", desc: "Multi-vendor marketplace with secure payments and inventory management.", category: "Web App" },
    { title: "AI Customer Support Platform", desc: "AI-powered customer engagement and support automation solution.", category: "AI & Automation" },
    { title: "Logistics Tracking Platform", desc: "Real-time shipment tracking and fleet management platform.", category: "Logistics" }
  ];

  return (
    <div className="w-full">
      <section className="bg-charcoal text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Featured <span className="text-primary-yellow">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            A selection of projects where we transformed ideas into impactful digital solutions.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-0 bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {proj.image && (
                    <div className="h-64 overflow-hidden bg-gray-100">
                        <img 
                            src={proj.image} 
                            alt={proj.title} 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                    </div>
                )}
                <div className={`p-8 flex flex-col flex-1 ${!proj.image ? 'pt-24' : ''}`}>
                    <div className="flex justify-between items-start mb-6">
                        <span className="bg-gray-100 text-charcoal text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                            {proj.category}
                        </span>
                        <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-primary-yellow group-hover:bg-charcoal transition-colors">
                            <ArrowUpRight size={20} />
                        </button>
                    </div>
                    <div className="mt-auto">
                        <h3 className="text-2xl font-bold text-charcoal mb-3 pr-8">{proj.title}</h3>
                        <p className="text-gray-600 leading-relaxed max-w-md">{proj.desc}</p>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
