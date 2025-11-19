import { motion } from "motion/react";
import { ConsultingProjectCard } from "~/components/consulting-project-card";
import { consultingProjects } from "~/data/consulting-projects";

const ENTRY_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export function ConsultingProjectsSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          variants={ENTRY_VARIANTS}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          Consulting Projects
        </motion.h2>
        <div className="space-y-8">
          {consultingProjects.map((project, index) => (
            <ConsultingProjectCard
              key={`${project.company}-${index}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
