import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "~/components/ui/dialog";
import type {
  ConsultingProject,
  ProjectBadge,
} from "~/data/consulting-projects";
import type { EmploymentProject } from "~/data/employment-projects";
import { Award, Sparkles } from "lucide-react";

const BADGE_CONFIG: Record<
  ProjectBadge,
  { label: string; icon: typeof Award; className: string }
> = {
  acquired: {
    label: "Acquired",
    icon: Award,
    className: "bg-primary text-primary-foreground",
  },
  zeroToOne: {
    label: "Zero-to-One",
    icon: Sparkles,
    className: "bg-primary/90 text-primary-foreground",
  },
};

interface ProjectModalProps {
  project?: ConsultingProject | EmploymentProject;
  type?: "consulting" | "employment";
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({
  project,
  type,
  open,
  onOpenChange,
}: ProjectModalProps) {
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
      : project?.company;

  const skills = isConsulting
    ? consultingProject?.skills || []
    : employmentProject?.skills || [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background p-6">
        <DialogHeader>
          <div className="flex items-start gap-4">
            {project?.image && (
              <div className="flex-shrink-0">
                <img
                  src={project?.image}
                  alt={project?.company}
                  className={`w-24 h-24 rounded-lg object-contain border-2 border-border p-2 ${
                    consultingProject?.darkLogo || employmentProject?.darkLogo
                      ? "bg-[hsl(222.2,84%,4.9%)]"
                      : "bg-white"
                  }`}
                />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-start gap-2 flex-wrap">
                <DialogTitle className="text-3xl font-bold text-foreground">
                  {displayName}
                </DialogTitle>
                {((isConsulting &&
                  consultingProject?.badges &&
                  consultingProject.badges.length > 0) ||
                  (!isConsulting &&
                    employmentProject?.badges &&
                    employmentProject.badges.length > 0)) &&
                  (() => {
                    // Show the first badge (prioritize "acquired" if both exist)
                    const badges = isConsulting
                      ? consultingProject?.badges || []
                      : employmentProject?.badges || [];
                    const badgeType = badges.includes("acquired")
                      ? "acquired"
                      : badges[0];
                    const config = BADGE_CONFIG[badgeType];
                    const Icon = config.icon;
                    return (
                      <div
                        className={`flex items-center gap-1.5 px-2 py-1 rounded ${config.className} text-xs font-semibold`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{config.label}</span>
                      </div>
                    );
                  })()}
              </div>
              <p className="text-lg font-semibold text-primary mt-2">
                {project?.role}
              </p>
              <DialogDescription className="text-base text-muted-foreground mt-1">
                {project?.period}
                {!isConsulting && employmentProject && (
                  <> · {employmentProject.location}</>
                )}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-6 space-y-4">
          {isConsulting && consultingProject?.companyMission && (
            <p className="text-sm italic text-muted-foreground">
              {consultingProject.companyMission}
            </p>
          )}
          {!isConsulting && employmentProject?.companyMission && (
            <p className="text-sm italic text-muted-foreground">
              {employmentProject.companyMission}
            </p>
          )}

          <p className="text-muted-foreground leading-relaxed">
            {project?.description}
          </p>

          {skills.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold mb-2">
                Technologies & Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {!isConsulting && employmentProject?.additionalRoles && (
            <div className="pt-4 border-t space-y-4">
              <h4 className="text-sm font-semibold">Additional Roles</h4>
              {employmentProject.additionalRoles.map(
                (additionalRole, roleIndex) => (
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
                ),
              )}
            </div>
          )}
        </div>

        <DialogClose />
      </DialogContent>
    </Dialog>
  );
}
