import type { ConsultingProject } from "~/data/consulting-projects";
import { BaseProjectCard } from "~/components/base-project-card";

interface ConsultingProjectCardProps {
  project: ConsultingProject;
  index: number;
  animationDelay?: number;
}

export function ConsultingProjectCard({
  project,
  index,
  animationDelay = 0.4,
}: ConsultingProjectCardProps) {
  return (
    <BaseProjectCard
      project={project}
      type="consulting"
      variant="full"
      index={index}
      animationDelay={animationDelay}
      showBadges={true}
      showLocation={false}
      showCompanyMission={true}
      showAdditionalRoles={false}
      imageSize="md"
    />
  );
}

