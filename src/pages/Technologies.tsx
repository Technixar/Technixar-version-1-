import { CtaSection } from "@/components/CtaSection";
import * as motion from "motion/react-client";

export default function Technologies() {
  const stacks = [
    {
      category: "Frontend",
      techs: ["React", "Next.js", "Angular", "Vue.js"]
    },
    {
      category: "Backend",
      techs: ["Node.js", "Python", "Java", ".NET"]
    },
    {
      category: "Mobile",
      techs: ["Flutter", "React Native", "Swift", "Kotlin"]
    },
    {
      category: "Databases",
      techs: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
    },
    {
      category: "Cloud",
      techs: ["AWS", "Azure", "Google Cloud"]
    },
    {
      category: "DevOps",
      techs: ["Docker", "Kubernetes", "GitHub Actions", "Terraform"]
    }
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
            Technology <span className="text-primary-yellow">Expertise</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            We leverage modern, scalable frameworks to build high-performance applications.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {stacks.map((stack, i) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="text-primary-yellow font-mono text-sm uppercase tracking-widest font-bold mb-6">
                  {stack.category}
                </div>
                <ul className="space-y-4">
                  {stack.techs.map((tech) => (
                    <li key={tech} className="text-xl font-semibold text-charcoal border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
