import { createFileRoute } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Github, Linkedin, Mail, Code, Sparkles, Rocket, Target } from 'lucide-react'
import * as React from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

function AnimatedHeading() {
  return (
    <h1 
      className="text-5xl md:text-7xl font-bold tracking-tight animate-slide-up" 
      style={{ animationDelay: '0.1s' }}
    >
      Bustamam Technology
    </h1>
  )
}

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4 animate-slide-up">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Now accepting new clients</span>
              </div>
              
              <AnimatedHeading />
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                We help startups start up
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <Button size="lg" className="group">
                  <Rocket className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Start Your Project
                </Button>
                <Button size="lg" variant="outline" className="group">
                  <Code className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  Our Services
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border/50">
                {/* Placeholder - Replace with your actual image */}
                {/* TODO: Replace this placeholder with your action shot */}
                {/* Recommended: Photo of you coding, presenting, or working with clients */}
                {/* Image should be at least 1200x800px (landscape) or 800x1200px (portrait), well-lit */}
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 via-primary/10 to-muted/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Code className="w-16 h-16 text-primary/40" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Hero Image Placeholder
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Replace with action shot
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      (coding, presenting, or consulting)
                    </p>
                  </div>
                </div>
                
                {/* Uncomment and update the path when you have your image */}
                {/* 
                <img 
                  src="/images/hero-action.jpg" 
                  alt="Rasheed Bustamam working with startups - Founder of Bustamam Technology"
                  className="w-full h-full object-cover"
                />
                */}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl bg-primary/5 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-slide-up">
            About Us
          </h2>
          <Card className="border-2 hover:shadow-lg transition-shadow duration-300 animate-slide-up">
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
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-slide-up">
            How We Help
          </h2>
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
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-slide-up">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Ready to start your startup? Let's discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="outline" size="lg" className="group">
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Email
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="animate-fade-in">
            © {new Date().getFullYear()} Bustamam Technology. Built with{' '}
            <span className="text-primary">TanStack Start</span> and{' '}
            <span className="text-primary">shadcn/ui</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
