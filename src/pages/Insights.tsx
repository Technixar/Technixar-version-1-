import { CtaSection } from "@/components/CtaSection";
import * as motion from "motion/react-client";
import { Clock } from "lucide-react";

export default function Insights() {
  const articles = [
    { title: "The Future of AI in Business", date: "Oct 12, 2026", readTime: "5 min read" },
    { title: "Digital Transformation Trends in 2026", date: "Sep 28, 2026", readTime: "8 min read" },
    { title: "Building Secure Fintech Applications", date: "Sep 15, 2026", readTime: "6 min read" },
    { title: "Cloud Migration Best Practices", date: "Aug 30, 2026", readTime: "7 min read" },
    { title: "The Rise of Intelligent Automation", date: "Aug 14, 2026", readTime: "4 min read" },
    { title: "How Custom Software Creates Competitive Advantage", date: "Jul 22, 2026", readTime: "6 min read" }
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
            Insights & <span className="text-primary-yellow">Resources</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Latest thoughts on technology trends, architecture, and business transformation.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col group cursor-pointer"
              >
                <div className="w-full h-48 bg-gray-100 rounded-2xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-3">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal group-hover:text-primary-yellow transition-colors leading-tight">
                  {article.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
