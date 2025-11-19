import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import type { ConsultingProject } from "~/data/consulting-projects";
import { Award } from "lucide-react";

interface ConsultingProjectCardProps {
  project: ConsultingProject;
  index: number;
  animationDelay?: number;
}

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

export function ConsultingProjectCard({
  project,
  index,
  animationDelay = 0.4,
}: ConsultingProjectCardProps) {
  return (
    <motion.div
      variants={ENTRY_VARIANTS}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.5,
        delay: animationDelay + index * 0.1,
        ease: "easeOut",
      }}
    >
      <Card className="hover:shadow-xl transition-all duration-300 border-2 relative overflow-hidden">
        {project.acquired && (
          <div className="absolute top-0 right-0 z-10">
            <div className="relative">
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[80px] border-l-transparent border-t-[80px] border-t-primary" />
              <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded shadow-lg flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Acquired</span>
              </div>
            </div>
          </div>
        )}
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4 md:items-start">
            {project.image && (
              <div className="flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.company}
                  className="w-20 h-20 rounded-lg object-cover border-2 border-border"
                />
              </div>
            )}
            <div className="flex-1">
              <CardTitle className="text-2xl mb-1">
                {project.projectName ? (
                  <>
                    {project.company}
                    <span className="text-lg text-muted-foreground font-normal">
                      {" "}
                      · {project.projectName}
                    </span>
                  </>
                ) : (
                  project.company
                )}
              </CardTitle>
              <p className="text-lg font-semibold text-primary mb-2">
                {project.role}
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                <span>{project.period}</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {project.companyMission && (
            <p className="text-sm italic text-muted-foreground">
              {project.companyMission}
            </p>
          )}
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
          {project.skills && project.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

