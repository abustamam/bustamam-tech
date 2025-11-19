import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import type { EmploymentProject } from "~/data/employment-projects";

interface EmploymentProjectCardProps {
  job: EmploymentProject;
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

export function EmploymentProjectCard({
  job,
  index,
  animationDelay = 0.4,
}: EmploymentProjectCardProps) {

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
      <Card className="hover:shadow-xl transition-all duration-300 border-2">
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4 md:items-start">
            {job.image && (
              <div className="flex-shrink-0">
                <img
                  src={job.image}
                  alt={job.company}
                  className="w-20 h-20 rounded-lg object-cover border-2 border-border"
                />
              </div>
            )}
            <div className="flex-1">
              <CardTitle className="text-2xl mb-1">{job.company}</CardTitle>
              <p className="text-lg font-semibold text-primary mb-2">
                {job.role}
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                <span>{job.period}</span>
                <span>·</span>
                <span>{job.location}</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {job.companyMission && (
            <p className="text-sm italic text-muted-foreground">
              {job.companyMission}
            </p>
          )}
          <p className="text-muted-foreground leading-relaxed">
            {job.description}
          </p>
          {job.skills && (
            <div className="flex flex-wrap gap-2 pt-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
          {job.additionalRoles && (
            <div className="pt-4 border-t space-y-4">
              {job.additionalRoles.map((additionalRole, roleIndex) => (
                <div key={roleIndex} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{additionalRole.role}</p>
                    <span className="text-sm text-muted-foreground">
                      {additionalRole.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {additionalRole.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

