import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import type {
  ConsultingProject,
  ProjectBadge,
} from "~/data/consulting-projects";
import type { EmploymentProject } from "~/data/employment-projects";
import { Award, Sparkles } from "lucide-react";

const BADGE_CONFIG: Record<
  ProjectBadge,
  { label: string; icon: typeof Award; color: string; textColor: string }
> = {
  acquired: {
    label: "Acquired",
    icon: Award,
    color: "border-t-primary",
    textColor: "bg-primary text-primary-foreground",
  },
  zeroToOne: {
    label: "Zero-to-One",
    icon: Sparkles,
    color: "border-t-primary/80",
    textColor: "bg-primary/90 text-primary-foreground",
  },
};

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

export interface BaseProjectCardProps {
  project: ConsultingProject | EmploymentProject;
  type: "consulting" | "employment";
  variant?: "full" | "compact";
  index?: number;
  animationDelay?: number;
  onClick?: () => void;
  showBadges?: boolean;
  showLocation?: boolean;
  showCompanyMission?: boolean;
  showAdditionalRoles?: boolean;
  maxSkills?: number;
  imageSize?: "sm" | "md" | "lg";
}

export function BaseProjectCard({
  project,
  type,
  variant = "full",
  index = 0,
  animationDelay = 0.4,
  onClick,
  showBadges = true,
  showLocation = false,
  showCompanyMission = true,
  showAdditionalRoles = false,
  maxSkills,
  imageSize = "md",
}: BaseProjectCardProps) {
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

  const imageSizeClasses = {
    sm: "w-16 h-16 p-1.5",
    md: "w-20 h-20 p-2",
    lg: "w-24 h-24 p-2",
  };

  const isCompact = variant === "compact";
  const isClickable = !!onClick;

  const cardContent = (
    <>
      {showBadges &&
        isConsulting &&
        consultingProject?.badges &&
        consultingProject.badges.length > 0 && (
          <div
            className={`absolute top-0 right-0 z-10 overflow-hidden ${
              isCompact ? "w-20 h-20" : "w-24 h-24"
            }`}
          >
            {(() => {
              const badgeType = consultingProject.badges.includes("acquired")
                ? "acquired"
                : consultingProject.badges[0];
              const config = BADGE_CONFIG[badgeType];
              const Icon = config.icon;
              return (
                <div
                  className={`${config.textColor} absolute ${
                    isCompact ? "top-5 -right-5 w-28" : "top-6 -right-6 w-32"
                  } transform rotate-45 shadow-lg`}
                >
                  <div
                    className={`flex items-center justify-center ${
                      isCompact ? "gap-1" : "gap-1.5"
                    } ${isCompact ? "py-1" : "py-1.5"} px-2`}
                  >
                    <Icon className={isCompact ? "w-3 h-3" : "w-3.5 h-3.5"} />
                    <span
                      className={`${
                        isCompact ? "text-[10px]" : "text-xs"
                      } font-semibold whitespace-nowrap`}
                    >
                      {config.label}
                    </span>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      <CardHeader>
        <div
          className={`flex ${
            isCompact ? "items-start" : "flex-col md:flex-row md:items-start"
          } gap-4`}
        >
          {project.image && (
            <div className="flex-shrink-0">
              <img
                src={project.image}
                alt={project.company}
                className={`${imageSizeClasses[imageSize]} rounded-lg object-contain border-2 border-border ${
                  (project as ConsultingProject).darkLogo ||
                  (project as EmploymentProject).darkLogo
                    ? "bg-[hsl(222.2,84%,4.9%)]"
                    : "bg-white"
                } ${
                  isClickable
                    ? "group-hover:scale-105 transition-transform"
                    : ""
                }`}
              />
            </div>
          )}
          <div className={`flex-1 ${isCompact ? "min-w-0" : ""}`}>
            {isCompact ? (
              <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                {displayName}
              </h3>
            ) : (
              <CardTitle className="text-2xl mb-1">{displayName}</CardTitle>
            )}
            <p
              className={`${
                isCompact ? "text-sm" : "text-lg"
              } font-semibold text-primary mb-2`}
            >
              {project.role}
            </p>
            <div
              className={`flex flex-wrap gap-2 ${
                isCompact ? "text-xs" : "text-sm"
              } text-muted-foreground`}
            >
              <span>{project.period}</span>
              {showLocation && employmentProject && (
                <>
                  <span>·</span>
                  <span>{employmentProject.location}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className={isCompact ? "" : "space-y-4"}>
        {showCompanyMission &&
          (consultingProject?.companyMission ||
            employmentProject?.companyMission) && (
            <p className="text-sm italic text-muted-foreground">
              {consultingProject?.companyMission ||
                employmentProject?.companyMission}
            </p>
          )}
        <p
          className={`text-muted-foreground ${
            isCompact ? "text-sm line-clamp-2 mb-3" : "leading-relaxed"
          }`}
        >
          {project.description}
        </p>
        {skills.length > 0 && (
          <div
            className={`flex flex-wrap ${
              isCompact ? "gap-1.5" : "gap-2"
            } ${isCompact ? "" : "pt-2"}`}
          >
            {(maxSkills ? skills.slice(0, maxSkills) : skills).map((skill) => (
              <span
                key={skill}
                className={`${
                  isCompact ? "px-2 py-0.5" : "px-3 py-1"
                } rounded-full bg-primary/10 text-primary ${
                  isCompact ? "text-xs" : "text-sm"
                } border border-primary/20`}
              >
                {skill}
              </span>
            ))}
            {maxSkills && skills.length > maxSkills && (
              <span
                className={`${
                  isCompact ? "px-2 py-0.5" : "px-3 py-1"
                } rounded-full bg-muted text-muted-foreground ${
                  isCompact ? "text-xs" : "text-sm"
                }`}
              >
                +{skills.length - maxSkills}
              </span>
            )}
          </div>
        )}
        {showAdditionalRoles &&
          employmentProject?.additionalRoles &&
          employmentProject.additionalRoles.length > 0 && (
            <div className="pt-4 border-t space-y-4">
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
      </CardContent>
    </>
  );

  const cardClassName = `hover:shadow-xl transition-all duration-300 border-2 relative ${
    isCompact ? "hover:-translate-y-1 cursor-pointer group overflow-hidden" : ""
  } ${isClickable ? "overflow-hidden" : ""}`;

  if (isClickable) {
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
        <Card
          className={cardClassName}
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
          {cardContent}
        </Card>
      </motion.div>
    );
  }

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
      <Card className={cardClassName}>{cardContent}</Card>
    </motion.div>
  );
}
