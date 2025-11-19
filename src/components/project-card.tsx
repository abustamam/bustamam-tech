import { motion } from "motion/react";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import type { ConsultingProject } from "~/data/consulting-projects";
import type { EmploymentProject } from "~/data/employment-projects";
import { Award } from "lucide-react";

interface ProjectCardProps {
  project: ConsultingProject | EmploymentProject;
  type: "consulting" | "employment";
  onClick: () => void;
  index: number;
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

export function ProjectCard({
  project,
  type,
  onClick,
  index,
}: ProjectCardProps) {
  const isConsulting = type === "consulting";
  const consultingProject = isConsulting
    ? (project as ConsultingProject)
    : null;
  const employmentProject = !isConsulting
    ? (project as EmploymentProject)
    : null;

  const displayName =
    isConsulting && consultingProject?.projectName
      ? `${consultingProject.company} · ${consultingProject.projectName}`
      : project.company;

  const skills = isConsulting
    ? consultingProject?.skills || []
    : employmentProject?.skills || [];

  return (
    <motion.div
      variants={ENTRY_VARIANTS}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.5,
        delay: 0.3 + index * 0.1,
        ease: "easeOut",
      }}
    >
      <Card
        className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 cursor-pointer group relative overflow-hidden"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            e.stopPropagation();
            onClick();
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${displayName}`}
      >
        {isConsulting && consultingProject?.acquired && (
          <div className="absolute top-0 right-0 z-10">
            <div className="relative">
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-primary" />
              <Award className="absolute top-2 right-2 w-4 h-4 text-primary-foreground" />
            </div>
          </div>
        )}
        <CardHeader>
          <div className="flex items-start gap-4">
            {project.image && (
              <div className="flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.company}
                  className="w-16 h-16 rounded-lg object-cover border-2 border-border group-hover:scale-105 transition-transform"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                {displayName}
              </h3>
              <p className="text-sm font-semibold text-primary mb-2">
                {project.role}
              </p>
              <p className="text-xs text-muted-foreground">{project.period}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {project.description}
          </p>
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {skills.slice(0, 4).map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs border border-primary/20"
                >
                  {skill}
                </span>
              ))}
              {skills.length > 4 && (
                <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-xs">
                  +{skills.length - 4}
                </span>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
