import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Code, LineChart, Cpu, Zap } from "lucide-react";
import Link from 'next/link';

const coreOfferings = [
  {
    title: 'Automations',
    description: 'Agents that think, decide, and act across your tools.',
    href: '/automations',
    icon: Bot
  },
  {
    title: 'Web Development',
    description: 'Next-gen websites with performance and precision.',
    href: '/web-development',
    icon: Code
  },
  {
    title: 'Marketing',
    description: 'AI-powered campaigns that optimize in real time.',
    href: '/marketing',
    icon: LineChart
  },
  {
    title: 'Industries',
    description: 'Automation tailored to every sector.',
    href: '/industries',
    icon: Cpu
  },
]

const logos = [
  "Slack", "HubSpot", "Notion", "Firebase", "Supabase", "Vercel"
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-40 text-center bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(58,160,255,0.3),rgba(255,255,255,0))]">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="inline-block rounded-lg bg-gray-800/50 px-3 py-1 text-sm font-semibold text-secondary">
                AI Systems for the New Industrial Era
              </div>
              <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                AI-Powered Automation for Every Decision
              </h1>
              <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
                We build intelligent automations and blazing-fast web systems for teams that move at the speed of data.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button asChild size="lg" className="gradient-button font-semibold">
                  <Link href="#">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/50 text-primary-foreground font-semibold">
                  <Link href="#">Watch Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Offerings Section */}
        <section id="offerings" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {coreOfferings.map((offering) => (
                <Link key={offering.title} href={offering.href} className="group block">
                  <div className="h-full rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 ease-in-out hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 glow-on-hover">
                    <div className="mb-4 flex items-center gap-4">
                      <offering.icon className="h-8 w-8 text-primary" />
                      <h3 className="text-2xl font-bold font-headline">{offering.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{offering.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 md:py-24 bg-card/50">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl font-medium text-foreground">
                “LithiumTech merges automation, analytics, and design into one intelligence layer — built to reimagine how work happens.”
              </p>
              <Button asChild variant="link" className="mt-6 text-lg text-primary hover:text-secondary">
                <Link href="#">
                  Explore our Platform <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Logos/Results Strip */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="relative overflow-hidden">
                <div className="flex animate-marquee-infinite">
                  {logos.concat(logos).map((logo, i) => (
                      <div key={i} className="mx-8 flex items-center justify-center">
                          <span className="text-2xl font-bold text-muted-foreground/50">{logo}</span>
                      </div>
                  ))}
                </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-4xl font-bold font-headline gradient-text">50%</h3>
                <p className="mt-2 text-muted-foreground">fewer manual tasks</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-4xl font-bold font-headline gradient-text">3x</h3>
                <p className="mt-2 text-muted-foreground">faster response cycles</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-4xl font-bold font-headline gradient-text">100</h3>
                <p className="mt-2 text-muted-foreground">Lighthouse score</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Your Software. Your System. Powered by AI.</h2>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gradient-button font-semibold">
                <Link href="#">Request Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/50 text-primary-foreground font-semibold">
                <Link href="#">Start Building</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

