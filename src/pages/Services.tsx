import { CtaSection } from "@/components/CtaSection";
import * as motion from "motion/react-client";
import { Code, ShieldCheck, Database, Smartphone, Cloud, Cpu } from "lucide-react";

import softwareImage from '@/assets/images/software_code_image_1781162694890.png';
import fintechImage from '@/assets/images/fintech_graph_image_1781162710000.png';
import cloudImage from '@/assets/images/cloud_infra_image_1781162725329.png';
import mobileAppImage from '@/assets/images/mobile_app_dev_1781162983498.png';
import webDevImage from '@/assets/images/web_dev_1781163008323.png';
import aiAutomationImage from '@/assets/images/ai_automation_1781163026426.png';

export default function Services() {
  const services = [
    {
      id: "1",
      title: "Custom Software Development",
      description: "Design and build custom enterprise-grade software solutions tailored to your business needs.",
      icon: Code,
      image: softwareImage,
      features: ["Enterprise Applications", "CRM Systems", "ERP Platforms", "SaaS Products", "Workflow Automation", "Business Intelligence Dashboards"]
    },
    {
      id: "2",
      title: "Fintech Solutions",
      description: "Secure, scalable, and compliant financial technology solutions.",
      icon: ShieldCheck,
      image: fintechImage,
      features: ["Payment Platforms", "Remittance Systems", "Digital Wallets", "KYC & AML Integration", "Open Banking APIs", "Financial Reporting Systems"]
    },
    {
      id: "3",
      title: "Mobile App Development",
      description: "Build powerful mobile applications for iOS and Android.",
      icon: Smartphone,
      image: mobileAppImage,
      features: ["Flutter Development", "React Native", "Native iOS Apps", "Native Android Apps", "Mobile UI/UX Design", "App Maintenance"]
    },
    {
      id: "4",
      title: "Web Development",
      description: "Create modern digital experiences that engage users and drive business growth.",
      icon: Database,
      image: webDevImage,
      features: ["Corporate Websites", "Customer Portals", "E-Commerce Platforms", "Web Applications", "Progressive Web Apps"]
    },
    {
      id: "5",
      title: "Cloud & DevOps",
      description: "Build secure and scalable cloud infrastructure.",
      icon: Cloud,
      image: cloudImage,
      features: ["AWS Solutions", "Microsoft Azure", "Google Cloud", "CI/CD Pipelines", "Docker", "Kubernetes"]
    },
    {
      id: "6",
      title: "AI & Automation",
      description: "Leverage artificial intelligence to improve business efficiency.",
      icon: Cpu,
      image: aiAutomationImage,
      features: ["AI Chatbots", "Document Automation", "Predictive Analytics", "Business Process Automation", "Machine Learning Solutions"]
    }
  ];

  return (
    <div className="w-full">
      <section className="bg-charcoal text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Our <span className="text-primary-yellow">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl leading-relaxed"
          >
            From conceptualization to deployment, we build robust digital solutions designed for scale.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((svc, i) => (
              <motion.div 
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
              >
                <div className="lg:w-1/2 w-full space-y-6">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center">
                    <svc.icon size={32} className="text-primary-yellow" />
                  </div>
                  <h2 className="text-3xl font-bold text-charcoal">{svc.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{svc.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 mt-6 border-t border-gray-100">
                    {svc.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                        <span className="w-1.5 h-1.5 bg-primary-yellow rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full h-80 bg-gray-50 rounded-3xl border border-gray-100 flex items-center justify-center overflow-hidden relative group-hover:shadow-2xl transition-all duration-300">
                  <img 
                    src={svc.image} 
                    alt={svc.title} 
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
                  <svc.icon size={80} className="text-white/80 absolute bottom-6 right-6" />
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
