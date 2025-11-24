import type { EmploymentProject } from "~/data/employment-projects";
import { BaseProjectCard } from "~/components/base-project-card";

interface EmploymentProjectCardProps {
  job: EmploymentProject;
  index: number;
  animationDelay?: number;
}

export function EmploymentProjectCard({
  job,
  index,
  animationDelay = 0.4,
}: EmploymentProjectCardProps) {
  return (
    <BaseProjectCard
      project={job}
      type="employment"
      variant="full"
      index={index}
      animationDelay={animationDelay}
      showBadges={true}
      showLocation={true}
      showCompanyMission={true}
      showAdditionalRoles={true}
      imageSize="md"
    />
  );
}
