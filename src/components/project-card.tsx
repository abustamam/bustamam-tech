import type { ConsultingProject } from "~/data/consulting-projects";
import type { EmploymentProject } from "~/data/employment-projects";
import { BaseProjectCard } from "~/components/base-project-card";

interface ProjectCardProps {
  project: ConsultingProject | EmploymentProject;
  type: "consulting" | "employment";
  onClick: () => void;
  index: number;
}

export function ProjectCard({
  project,
  type,
  onClick,
  index,
}: ProjectCardProps) {
  return (
    <BaseProjectCard
      project={project}
      type={type}
      variant="compact"
      index={index}
      animationDelay={0.3}
      onClick={onClick}
      showBadges={true}
      showLocation={false}
      showCompanyMission={false}
      showAdditionalRoles={false}
      maxSkills={4}
      imageSize="sm"
    />
  );
}
