import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import {
  Rocket,
  Target,
  Code,
  Zap,
  Shield,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  component: Services,
});

function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4 animate-slide-up">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Our Services</span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Services
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Comprehensive technical solutions to help your startup succeed
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Product Development",
                description:
                  "Build your MVP and scale your product with modern, scalable architecture. From concept to launch, we handle the full development lifecycle.",
                icon: Rocket,
                features: [
                  "MVP Development",
                  "Scalable Architecture",
                  "Modern Tech Stack",
                  "Agile Methodology",
                ],
              },
              {
                title: "Technical Strategy",
                description:
                  "Architecture decisions, tech stack selection, and technical roadmap planning. Make informed decisions that set your startup up for success.",
                icon: Target,
                features: [
                  "Architecture Design",
                  "Tech Stack Selection",
                  "Roadmap Planning",
                  "Technical Consulting",
                ],
              },
              {
                title: "Full-Stack Development",
                description:
                  "End-to-end development from frontend to backend, deployment to production. We build complete solutions that work seamlessly together.",
                icon: Code,
                features: [
                  "Frontend Development",
                  "Backend Development",
                  "API Design",
                  "DevOps & Deployment",
                ],
              },
              {
                title: "Performance Optimization",
                description:
                  "Speed up your application and improve user experience. We identify bottlenecks and optimize for scale.",
                icon: Zap,
                features: [
                  "Performance Audits",
                  "Code Optimization",
                  "Database Tuning",
                  "Caching Strategies",
                ],
              },
              {
                title: "Security & Compliance",
                description:
                  "Protect your startup with robust security practices and compliance standards. Keep your data and users safe.",
                icon: Shield,
                features: [
                  "Security Audits",
                  "Compliance Guidance",
                  "Best Practices",
                  "Threat Mitigation",
                ],
              },
              {
                title: "Scaling & Growth",
                description:
                  "Scale your infrastructure and team as you grow. We help you prepare for success and handle increased demand.",
                icon: TrendingUp,
                features: [
                  "Infrastructure Scaling",
                  "Team Scaling",
                  "Process Optimization",
                  "Growth Strategy",
                ],
              },
            ].map((service, index) => (
              <Card
                key={service.title}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <service.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 bg-gradient-to-br from-primary/5 to-primary/10 animate-slide-up">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">
                Ready to Get Started?
              </CardTitle>
              <CardDescription className="text-lg">
                Let's discuss how we can help bring your startup vision to life
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" className="group">
                <Rocket className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Start Your Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
