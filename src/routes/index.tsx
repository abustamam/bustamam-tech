import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { TextEffect } from "~/components/ui/text-effect";
import { TextLoop } from "~/components/ui/text-loop";
import { ProjectCard } from "~/components/project-card";
import { ProjectModal } from "~/components/project-modal";
import { consultingProjects } from "~/data/consulting-projects";
import { employmentProjects } from "~/data/employment-projects";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Sparkles,
  Rocket,
  Target,
  ChevronDown,
  Briefcase,
} from "lucide-react";
import { motion } from "motion/react";
import * as React from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

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

function Home() {
  const contactRef = React.useRef<HTMLElement>(null);
  const aboutRef = React.useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = React.useState<{
    project?: (typeof consultingProjects)[0] | (typeof employmentProjects)[0];
    type?: "consulting" | "employment";
  } | null>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Get featured projects (most recent 3 consulting + 3 employment)
  const featuredConsulting = consultingProjects.slice(0, 3);
  const featuredEmployment = employmentProjects.slice(0, 3);
  const featuredProjects = [
    ...featuredConsulting.map((p) => ({
      project: p,
      type: "consulting" as const,
    })),
    ...featuredEmployment.map((p) => ({
      project: p,
      type: "employment" as const,
    })),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] grid grid-rows-[1fr_auto] container mx-auto px-4">
        <div className="flex items-center justify-center py-4 md:py-8 min-h-0">
          <div className="max-w-4xl mx-auto w-full">
            <div className="text-center space-y-6 md:space-y-8">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4"
                variants={ENTRY_VARIANTS}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: "easeOut",
                }}
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Now accepting new clients
                </span>
              </motion.div>

              <TextEffect
                className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground"
                preset="fade-in-blur"
                as="h1"
                per="char"
                speedReveal={4}
                segmentTransition={{ duration: 0.5, ease: "easeOut" }}
              >
                Bustamam Technology
              </TextEffect>

              <motion.div
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-foreground font-bold leading-tight space-y-2 max-w-4xl mx-auto"
                variants={ENTRY_VARIANTS}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                  ease: "easeOut",
                }}
              >
                <p>Your technical partner in </p>
                <p className="inline-flex whitespace-pre-wrap">
                  <TextLoop
                    className="overflow-y-clip"
                    interval={1.5}
                    transition={{
                      type: "spring",
                      stiffness: 900,
                      damping: 80,
                      mass: 10,
                    }}
                    variants={{
                      initial: {
                        y: 20,
                        rotateX: 90,
                        opacity: 0,
                        filter: "blur(4px)",
                      },
                      animate: {
                        y: 0,
                        rotateX: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                      },
                      exit: {
                        y: -20,
                        rotateX: -90,
                        opacity: 0,
                        filter: "blur(4px)",
                      },
                    }}
                  >
                    <span>launch</span>
                    <span>scale</span>
                    <span>success</span>
                    <span>growth</span>
                    <span>profitability</span>
                    <span>market fit</span>
                    <span>IPO</span>
                    <span>exit</span>
                  </TextLoop>
                </p>
                <p>and beyond.</p>
              </motion.div>

              <div className="flex flex-wrap gap-4 justify-center pt-2">
                <motion.div
                  variants={ENTRY_VARIANTS}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <Button size="lg" className="group" onClick={scrollToContact}>
                    <Rocket className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Start Your Project
                  </Button>
                </motion.div>
                <motion.div
                  variants={ENTRY_VARIANTS}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.5,
                    delay: 0.6,
                    ease: "easeOut",
                  }}
                >
                  <Link to="/services">
                    <Button size="lg" variant="outline" className="group">
                      <Code className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                      Our Services
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to next section button */}
        <motion.div
          className="flex justify-center pb-4 md:pb-6 flex-shrink-0"
          variants={ENTRY_VARIANTS}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            delay: 0.8,
            ease: "easeOut",
          }}
        >
          <button
            onClick={scrollToAbout}
            className="group flex items-center gap-1.5 px-5 py-3 rounded-full bg-primary/10 hover:bg-primary/20 border-2 border-primary/30 hover:border-primary/60 text-primary font-medium transition-all duration-200 cursor-pointer backdrop-blur-sm"
            aria-label="Scroll to next section"
          >
            <span className="text-xs sm:text-sm">Learn more</span>
            <motion.div
              animate={{
                y: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="container mx-auto px-4 pt-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={ENTRY_VARIANTS}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="text-center space-y-4"
          >
            <div className="inline-block w-16 h-1 bg-primary rounded-full mb-2" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Bustamam Technology is a consulting practice specializing in
              helping startups build their technical foundation. We work with
              founders to turn their vision into reality, providing full-stack
              development, technical strategy, and product development services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            variants={ENTRY_VARIANTS}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            How We Help
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Product Development",
                description:
                  "Build your MVP and scale your product with modern, scalable architecture",
                icon: Rocket,
              },
              {
                title: "Technical Strategy",
                description:
                  "Architecture decisions, tech stack selection, and technical roadmap planning",
                icon: Target,
              },
              {
                title: "Full-Stack Development",
                description:
                  "End-to-end development from frontend to backend, deployment to production",
                icon: Code,
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                variants={ENTRY_VARIANTS}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <service.icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="flex justify-center mt-12"
            variants={ENTRY_VARIANTS}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 0.7,
              ease: "easeOut",
            }}
          >
            <Link to="/work">
              <Button size="lg" variant="outline" className="group">
                <Briefcase className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                View My Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
            variants={ENTRY_VARIANTS}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            variants={ENTRY_VARIANTS}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            A selection of recent consulting projects and employment
            experiences. Click on any project to learn more.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((item, index) => (
              <ProjectCard
                key={`${item.type}-${index}`}
                project={item.project}
                type={item.type}
                onClick={() => setSelectedProject(item)}
                index={index}
              />
            ))}
          </div>
          <motion.div
            className="flex justify-center"
            variants={ENTRY_VARIANTS}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 0.8,
              ease: "easeOut",
            }}
          >
            <Link to="/work">
              <Button size="lg" variant="outline" className="group">
                <Briefcase className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                View All Projects
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject?.project}
        type={selectedProject?.type}
        open={!!selectedProject}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProject(null);
          }
        }}
      />

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="container mx-auto px-4 py-20"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8"
            variants={ENTRY_VARIANTS}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            className="text-muted-foreground mb-8"
            variants={ENTRY_VARIANTS}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            Ready to start your startup? Let's discuss how we can help bring
            your vision to life.
          </motion.p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.div
              variants={ENTRY_VARIANTS}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: "easeOut",
              }}
            >
              <a href="mailto:admin@bustamam.tech">
                <Button variant="outline" size="lg" className="group">
                  <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Email
                </Button>
              </a>
            </motion.div>
            <motion.div
              variants={ENTRY_VARIANTS}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                delay: 0.6,
                ease: "easeOut",
              }}
            >
              <a
                href="https://github.com/abustamam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="group">
                  <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  GitHub
                </Button>
              </a>
            </motion.div>
            <motion.div
              variants={ENTRY_VARIANTS}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                delay: 0.7,
                ease: "easeOut",
              }}
            >
              <a
                href="https://linkedin.com/in/rbustamam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="group">
                  <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <motion.p
            variants={ENTRY_VARIANTS}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            © {new Date().getFullYear()} Bustamam Technology. Built with{" "}
            <span className="text-primary">TanStack Start</span> and{" "}
            <span className="text-primary">shadcn/ui</span>
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
