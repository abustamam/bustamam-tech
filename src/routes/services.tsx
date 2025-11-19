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
  TrendingUp,
  ArrowRight,
  Smartphone,
  Workflow,
  Database,
  Users,
  Webhook,
  Sparkles,
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
            Full-stack development, automation, and technical leadership to help
            your startup succeed
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI & LLM Integration",
                description:
                  "Integrate AI and LLM-powered workflows into your applications. Experience building automated data enrichment processes, intelligent workflows, and AI-enhanced features that streamline operations and boost productivity.",
                icon: Sparkles,
                features: [
                  "LLM-Powered Workflows",
                  "Data Enrichment Automation",
                  "AI-Enhanced Features",
                  "Intelligent Process Automation",
                ],
              },
              {
                title: "Full-Stack Development",
                description:
                  "End-to-end development from React/Remix frontends to Node.js/Express backends. Experience with React Native, TypeScript, and modern frameworks to build scalable applications.",
                icon: Code,
                features: [
                  "React & React Native",
                  "Node.js & Express",
                  "TypeScript",
                  "Remix & Modern Frameworks",
                ],
              },
              {
                title: "Mobile App Development",
                description:
                  "Cross-platform mobile applications using React Native and Expo. From MVP to production, build native-feeling apps that work on iOS and Android.",
                icon: Smartphone,
                features: [
                  "React Native & Expo",
                  "Cross-Platform Apps",
                  "Native Integrations",
                  "App Store Deployment",
                ],
              },
              {
                title: "Workflow Automation",
                description:
                  "Automate complex business processes with Temporal, XState, and custom workflows. LLM-powered automation, web scraping with Playwright/Puppeteer, and process optimization.",
                icon: Workflow,
                features: [
                  "Temporal & XState",
                  "LLM-Powered Workflows",
                  "Web Automation (Playwright/Puppeteer)",
                  "Process Optimization",
                ],
              },
              {
                title: "Real-Time Systems",
                description:
                  "Build real-time collaborative applications with Firestore, WebSockets, and graph-based data models. Enable live updates and seamless user experiences.",
                icon: Database,
                features: [
                  "Firestore & Real-time DB",
                  "Graph Data Models",
                  "Real-time Collaboration",
                  "Live Data Synchronization",
                ],
              },
              {
                title: "Third-Party Integrations",
                description:
                  "Seamlessly integrate with services like Twilio, SendGrid, Stripe, Retool, and Metabase. Build custom dashboards and connect your app to the tools you need.",
                icon: Webhook,
                features: [
                  "Payment Processing (Stripe)",
                  "Communication APIs (Twilio, SendGrid)",
                  "Business Intelligence (Metabase)",
                  "Custom Dashboard Development",
                ],
              },
              {
                title: "Technical Leadership",
                description:
                  "Team leadership, mentoring, and project management. Experience leading teams of 6+ engineers, establishing team culture, and delivering high-quality solutions on time.",
                icon: Users,
                features: [
                  "Team Leadership",
                  "Mentoring & Code Reviews",
                  "Project Management",
                  "Technical Architecture",
                ],
              },
              {
                title: "Web3 & Blockchain",
                description:
                  "Blockchain integration, smart contracts, and Web3 applications. Experience building location-based NFT games and integrating blockchain technology into user-facing apps.",
                icon: Zap,
                features: [
                  "Smart Contracts (Solidity)",
                  "Web3 Integration",
                  "Blockchain UX",
                  "NFT & Token Systems",
                ],
              },
              {
                title: "Legacy Modernization",
                description:
                  "Modernize legacy systems and migrate to modern tech stacks. Experience migrating ExtJS to React, improving scalability, and maintaining brand guidelines during transitions.",
                icon: TrendingUp,
                features: [
                  "Legacy System Migration",
                  "Tech Stack Modernization",
                  "Scalability Improvements",
                  "Brand-Compliant Redesigns",
                ],
              },
              {
                title: "Data Visualization & Dashboards",
                description:
                  "Build interactive dashboards, data visualization tools, and custom analytics interfaces. Experience with Leaflet, GSAP, Metabase, and custom visualization frameworks.",
                icon: Target,
                features: [
                  "Custom Dashboards",
                  "Data Visualization",
                  "Interactive Maps (Leaflet)",
                  "Analytics Interfaces",
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
