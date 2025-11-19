import { motion } from "motion/react";
import { EmploymentProjectCard } from "~/components/employment-project-card";
import { employmentProjects } from "~/data/employment-projects";

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

export function EmploymentProjectsSection() {
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
          Employment Projects
        </motion.h2>
        <div className="space-y-8">
          {employmentProjects.map((job, index) => (
            <EmploymentProjectCard
              key={`${job.company}-${index}`}
              job={job}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

