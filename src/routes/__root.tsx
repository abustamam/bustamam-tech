/// <reference types="vite/client" />
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import * as React from 'react'
import type { QueryClient } from '@tanstack/react-query'
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary'
import { NotFound } from '~/components/NotFound'
import appCss from '~/styles/app.css?url'
import { seo } from '~/utils/seo'
import { Button } from '~/components/ui/button'
import { Home as HomeIcon, Code2, Briefcase, FolderKanban } from 'lucide-react'
import { ThemeProvider } from '~/components/theme-provider'
import { ThemeToggle } from '~/components/theme-toggle'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      ...seo({
        title: 'Bustamam Technology | We Help Startups Start Up',
        description: `Bustamam Technology - Consulting practice helping startups build their technical foundation. From MVP to scale, we're your technical partner.`,
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    )
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
})

function RootComponent() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <RootDocument>
        <Outlet />
      </RootDocument>
    </ThemeProvider>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'system';
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const resolvedTheme = theme === 'system' ? systemTheme : theme;
                document.documentElement.classList.add(resolvedTheme);
              })();
            `,
          }}
        />
        <HeadContent />
      </head>
      <body className="antialiased">
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <Link
                to="/"
                className="flex items-center space-x-2 font-bold text-xl hover:text-primary transition-colors"
              >
                <Code2 className="h-5 w-5" />
                <span>Bustamam Tech</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  to="/"
                  activeProps={{
                    className: 'bg-accent text-accent-foreground',
                  }}
                  activeOptions={{ exact: true }}
                  className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <HomeIcon className="mr-2 h-4 w-4" />
                  Home
                </Link>
                <Link
                  to="/services"
                  activeProps={{
                    className: 'bg-accent text-accent-foreground',
                  }}
                  className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  Services
                </Link>
                <Link
                  to="/projects"
                  activeProps={{
                    className: 'bg-accent text-accent-foreground',
                  }}
                  className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <FolderKanban className="mr-2 h-4 w-4" />
                  Projects
                </Link>
              </div>

              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <a href="mailto:contact@example.com">
                  <Button variant="outline" size="sm">
                    Contact
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <TanStackRouterDevtools position="bottom-right" />
        <ReactQueryDevtools buttonPosition="bottom-left" />
        <Scripts />
      </body>
    </html>
  )
}
