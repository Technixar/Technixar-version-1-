import { CtaSection } from "@/components/CtaSection";
import * as motion from "motion/react-client";
import { Landmark, Building2, Stethoscope, GraduationCap, Plane, ShoppingCart, Briefcase, Factory, Home } from "lucide-react";

export default function Industries() {
  const industries = [
    { name: "Financial Services", icon: Landmark },
    { name: "Banking", icon: Building2 },
    { name: "Fintech", icon: ShieldCheckIcon },
    { name: "Healthcare", icon: Stethoscope },
    { name: "Education", icon: GraduationCap },
    { name: "Logistics", icon: Plane },
    { name: "Retail & E-Commerce", icon: ShoppingCart },
    { name: "Professional Services", icon: Briefcase },
    { name: "Manufacturing", icon: Factory },
    { name: "Real Estate", icon: Home },
  ];

  function ShieldCheckIcon(props: any) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2 0 5 1 7 2a1 1 0 0 1 1 1v7z"/><path d="m9 12 2 2 4-4"/></svg>
    )
  }

  return (
    <div className="w-full">
      <section className="bg-charcoal text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Industries We <span className="text-primary-yellow">Serve</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Domain expertise across global industries delivering customized, high-impact technical solutions.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-gray-50 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center group hover:border-primary-yellow/50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-yellow/10 transition-colors">
                  <ind.icon size={28} className="text-gray-600 group-hover:text-primary-yellow transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900">{ind.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
