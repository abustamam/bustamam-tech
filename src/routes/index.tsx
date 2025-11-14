import { createFileRoute } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { TextEffect } from '~/components/ui/text-effect'
import { Github, Linkedin, Mail, Code, Sparkles, Rocket, Target } from 'lucide-react'
import { motion } from 'motion/react'
import * as React from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

const ENTRY_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
}

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4"
              variants={ENTRY_VARIANTS}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: 'easeOut',
              }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Now accepting new clients</span>
            </motion.div>
            
            <TextEffect
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
              preset="fade-in-blur"
              as="h1"
              per="char"
              speedReveal={4}
              segmentTransition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Bustamam Technology
            </TextEffect>
            
            <TextEffect
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
              preset="blur"
              as="p"
              per="line"
              delay={0.5}
              speedReveal={0.8}
              segmentTransition={{ duration: 0.5, ease: 'easeOut' }}
            >
              We help startups start up
            </TextEffect>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div
                variants={ENTRY_VARIANTS}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: 'easeOut',
                }}
              >
                <Button size="lg" className="group">
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
                  ease: 'easeOut',
                }}
              >
                <Button size="lg" variant="outline" className="group">
                  <Code className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  Our Services
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            variants={ENTRY_VARIANTS}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: 'easeOut',
            }}
          >
            About Us
          </motion.h2>
          <motion.div
            variants={ENTRY_VARIANTS}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 0.4,
              ease: 'easeOut',
            }}
          >
            <Card className="border-2 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>We Help Startups Start Up</CardTitle>
                <CardDescription>
                  Your technical partner from idea to launch and beyond
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Bustamam Technology is a consulting practice specializing in helping startups 
                  build their technical foundation. We work with founders to turn their vision 
                  into reality, providing full-stack development, technical strategy, and 
                  product development services. From MVP to scale, we're here to help you navigate 
                  the technical challenges of building a startup.
                </p>
              </CardContent>
            </Card>
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
              ease: 'easeOut',
            }}
          >
            How We Help
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Product Development', 
                description: 'Build your MVP and scale your product with modern, scalable architecture',
                icon: Rocket
              },
              { 
                title: 'Technical Strategy', 
                description: 'Architecture decisions, tech stack selection, and technical roadmap planning',
                icon: Target
              },
              { 
                title: 'Full-Stack Development', 
                description: 'End-to-end development from frontend to backend, deployment to production',
                icon: Code
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
                  ease: 'easeOut',
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
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8"
            variants={ENTRY_VARIANTS}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: 'easeOut',
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
              ease: 'easeOut',
            }}
          >
            Ready to start your startup? Let's discuss how we can help bring your vision to life.
          </motion.p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.div
              variants={ENTRY_VARIANTS}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: 'easeOut',
              }}
            >
              <Button variant="outline" size="lg" className="group">
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Email
              </Button>
            </motion.div>
            <motion.div
              variants={ENTRY_VARIANTS}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                delay: 0.6,
                ease: 'easeOut',
              }}
            >
              <Button variant="outline" size="lg" className="group">
                <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                GitHub
              </Button>
            </motion.div>
            <motion.div
              variants={ENTRY_VARIANTS}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                delay: 0.7,
                ease: 'easeOut',
              }}
            >
              <Button variant="outline" size="lg" className="group">
                <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                LinkedIn
              </Button>
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
              ease: 'easeOut',
            }}
          >
            © {new Date().getFullYear()} Bustamam Technology. Built with{' '}
            <span className="text-primary">TanStack Start</span> and{' '}
            <span className="text-primary">shadcn/ui</span>
          </motion.p>
        </div>
      </footer>
    </div>
  )
}
