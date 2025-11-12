import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Cpu, Lock, Shield, Slack, Zap } from "lucide-react";
import Link from "next/link";

const agents = [
    { name: "Ops Agent", description: "Automates tasks, reminders, reports.", icon: Cpu },
    { name: "Sales Agent", description: "Syncs leads, drafts outreach, updates CRM.", icon: Zap },
    { name: "Support Agent", description: "Handles tickets & FAQs.", icon: Bot },
    { name: "Content Agent", description: "Generates SEO-ready content.", icon: Slack },
];

const integrations = ["Slack", "HubSpot", "Notion", "Airtable", "Supabase", "Firebase"];

export default function AutomationsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 lg:py-40 text-center bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(58,160,255,0.3),rgba(255,255,255,0))]">
                    <div className="container px-4 md:px-6">
                        <div className="space-y-4 max-w-4xl mx-auto">
                            <div className="inline-block rounded-lg bg-gray-800/50 px-3 py-1 text-sm font-semibold text-secondary">
                                Automation Suite 2025
                            </div>
                            <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                                The Automation Engine for Modern Operations
                            </h1>
                            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
                                Deploy AI agents that read, decide, and act across your stack — from HubSpot to Slack and Notion.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <Button asChild size="lg" className="gradient-button font-semibold">
                                    <Link href="#">Get Started</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-primary/50 text-primary-foreground font-semibold">
                                    <Link href="#">See Demo Agents</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Orchestration Section */}
                <section className="py-12 md:py-24">
                    <div className="container px-4 md:px-6 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">From Data to Action — Instantly.</h2>
                        <p className="mx-auto max-w-3xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                            LithiumTech connects your apps and data into a single orchestrated layer where workflows evolve automatically.
                        </p>
                        <Button asChild variant="link" className="mt-6 text-lg text-primary hover:text-secondary">
                            <Link href="#">
                                Watch Orchestration Demo <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </section>

                {/* Agents Grid */}
                <section className="py-12 md:py-24 bg-card/50">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 font-headline">Meet Your Digital Workforce.</h2>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {agents.map((agent) => (
                                <div key={agent.name} className="h-full rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 ease-in-out hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 glow-on-hover">
                                    <div className="mb-4 flex items-center gap-4">
                                        <agent.icon className="h-8 w-8 text-primary" />
                                        <h3 className="text-2xl font-bold font-headline">{agent.name}</h3>
                                    </div>
                                    <p className="text-muted-foreground">{agent.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Integrations Section */}
                <section className="py-12 md:py-24">
                    <div className="container px-4 md:px-6 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Connected by Design.</h2>
                        <div className="mt-8 flex flex-wrap justify-center items-center gap-8">
                            {integrations.map((logo) => (
                                <span key={logo} className="text-2xl font-bold text-muted-foreground/50">{logo}</span>
                            ))}
                        </div>
                        <p className="mx-auto max-w-3xl text-muted-foreground md:text-xl/relaxed mt-8">
                            Native integrations let your agents operate across your ecosystem — securely and instantly.
                        </p>
                    </div>
                </section>

                {/* Security Section */}
                <section className="py-12 md:py-24 bg-card/50">
                    <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Intelligence with Oversight.</h2>
                            <p className="text-muted-foreground md:text-xl/relaxed">
                                Every automation is sandboxed and encrypted with granular permissions, monitoring, and compliance.
                            </p>
                        </div>
                        <div className="flex justify-center items-center gap-8">
                            <Lock className="h-16 w-16 text-primary" />
                            <Shield className="h-16 w-16 text-secondary" />
                            <Cpu className="h-16 w-16 text-primary" />
                        </div>
                    </div>
                </section>

                {/* Metrics Section */}
                <section className="py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
                            <div className="rounded-lg border bg-card p-6">
                                <h3 className="text-4xl font-bold font-headline gradient-text">↓50%</h3>
                                <p className="mt-2 text-muted-foreground">manual admin</p>
                            </div>
                            <div className="rounded-lg border bg-card p-6">
                                <h3 className="text-4xl font-bold font-headline gradient-text">↑3x</h3>
                                <p className="mt-2 text-muted-foreground">productivity</p>
                            </div>
                            <div className="rounded-lg border bg-card p-6">
                                <h3 className="text-4xl font-bold font-headline gradient-text">99.9%</h3>
                                <p className="mt-2 text-muted-foreground">uptime</p>
                            </div>
                        </div>
                        <div className="mt-12 text-center">
                            <Button asChild size="lg" className="gradient-button font-semibold">
                                <Link href="#">Deploy Your First Agent</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
