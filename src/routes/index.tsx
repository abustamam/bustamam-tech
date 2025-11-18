import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { TextEffect } from "~/components/ui/text-effect";
import { TextLoop } from "~/components/ui/text-loop";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Sparkles,
  Rocket,
  Target,
  ChevronDown,
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

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
        </div>
      </section>

      {/* Our Work Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
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
            Our Work
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "SaaS Platform MVP",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
                description:
                  "Built a scalable SaaS platform from concept to launch",
              },
              {
                title: "E-Commerce Solution",
                image:
                  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
                description:
                  "Full-stack e-commerce platform with modern architecture",
              },
              {
                title: "Mobile App Launch",
                image:
                  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
                description: "Cross-platform mobile application for startup",
              },
              {
                title: "Tech Stack Migration",
                image:
                  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
                description:
                  "Modernized legacy system with scalable architecture",
              },
              {
                title: "API Platform",
                image:
                  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
                description:
                  "Built robust API infrastructure for scaling startup",
              },
              {
                title: "Data Analytics Dashboard",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
                description:
                  "Real-time analytics platform for data-driven decisions",
              },
              {
                title: "Cloud Infrastructure",
                image:
                  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
                description:
                  "Scalable cloud architecture for high-growth startup",
              },
              {
                title: "Product Redesign",
                image:
                  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
                description: "Complete product redesign and technical overhaul",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                variants={ENTRY_VARIANTS}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.05,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
