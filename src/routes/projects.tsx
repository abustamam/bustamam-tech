import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { FolderKanban, ExternalLink, Github, Sparkles, ArrowRight, Code2 } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4 animate-slide-up">
            <FolderKanban className="w-4 h-4" />
            <span className="text-sm font-medium">Our Work</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Projects
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Showcasing successful startups we've helped build from the ground up
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                title: 'Startup MVP Platform', 
                description: 'Built a complete MVP platform for an early-stage startup, including user authentication, payment processing, and real-time features. Launched in 3 months.',
                tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
                status: 'Launched',
                category: 'Full-Stack Development'
              },
              { 
                title: 'E-Commerce Solution', 
                description: 'Developed a scalable e-commerce platform with inventory management, order processing, and analytics dashboard. Handles 10K+ daily transactions.',
                tech: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
                status: 'Live',
                category: 'Product Development'
              },
              { 
                title: 'SaaS Analytics Tool', 
                description: 'Created a comprehensive analytics platform with real-time dashboards, custom reporting, and data visualization. Serves 500+ active users.',
                tech: ['Vue.js', 'Python', 'FastAPI', 'Redis'],
                status: 'Live',
                category: 'Technical Strategy'
              },
              { 
                title: 'Mobile-First Web App', 
                description: 'Designed and developed a mobile-first progressive web app with offline capabilities and push notifications. Achieved 90+ Lighthouse score.',
                tech: ['React', 'PWA', 'Firebase', 'Tailwind CSS'],
                status: 'Launched',
                category: 'Product Development'
              },
            ].map((project, index) => (
              <Card 
                key={project.title}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 animate-slide-up group"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Code2 className="h-5 w-5 text-primary" />
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                      </div>
                      <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium mb-2">
                        <Sparkles className="w-3 h-3" />
                        {project.status}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground/80">
                    {project.category}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 group/btn">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      View Project
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 group/btn">
                      <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon / Placeholder Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 bg-gradient-to-br from-primary/5 to-primary/10 animate-slide-up">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">More Projects Coming Soon</CardTitle>
              <CardDescription className="text-lg">
                We're constantly working with new startups. Check back soon to see more of our work, 
                or reach out to discuss your project.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" variant="outline" className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
