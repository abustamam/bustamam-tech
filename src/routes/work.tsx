import { createFileRoute } from "@tanstack/react-router";
import { ConsultingProjectsSection } from "~/components/consulting-projects-section";
import { EmploymentProjectsSection } from "~/components/employment-projects-section";
import { Briefcase } from "lucide-react";

export const Route = createFileRoute("/work")({
  component: Work,
});

function Work() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-medium">My Work</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            My Work
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            A collection of consulting projects and employment experiences
            showcasing technical expertise and impact
          </p>
        </div>
      </section>

      <ConsultingProjectsSection />
      <EmploymentProjectsSection />
    </div>
  );
}
