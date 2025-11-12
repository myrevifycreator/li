import { Button } from "@/components/ui/button";
import { Layers, Server, Gauge, Zap, ArrowRight, Blend } from "lucide-react";
import Link from "next/link";

const features = [
    {
        title: "Experience Architecture",
        description: "Designed for humans, built for machines. Every pixel and query is optimized for accessibility, performance, and intelligence.",
        icon: Layers,
    },
    {
        title: "Headless Infrastructure",
        description: "Seamless, scalable, serverless. Next.js + Supabase architecture for zero-latency updates and instant deploys.",
        icon: Server,
    },
    {
        title: "Performance Focus",
        description: "Lighthouse 100 scores, lazy-loaded images, and motion-driven UI for maximum engagement.",
        icon: Gauge,
    },
    {
        title: "Integration & Automation",
        description: "Websites connected directly to your automations and analytics — no third-party chaos.",
        icon: Zap,
    },
];

const logos = ["Next.js", "Tailwind", "Vercel", "Supabase", "Auth0", "Pinecone", "HubSpot", "Firebase"];

export default function WebDevelopmentPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 lg:py-40 text-center bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(58,160,255,0.25),rgba(255,255,255,0))]">
                    <div className="container px-4 md:px-6">
                        <div className="space-y-4 max-w-4xl mx-auto">
                            <div className="inline-block rounded-lg bg-gray-800/50 px-3 py-1 text-sm font-semibold text-secondary">
                                Web Systems 2025
                            </div>
                            <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                                Your Website is the Control System
                            </h1>
                            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
                                We build intelligent, fast, and measurable web experiences.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <Button asChild size="lg" className="gradient-button font-semibold">
                                    <Link href="#">Launch Project</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-primary/50 text-primary-foreground font-semibold">
                                    <Link href="#">View Showcase</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-12 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-8 sm:grid-cols-2">
                            {features.map((feature) => (
                                <div key={feature.title} className="h-full rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 ease-in-out hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 glow-on-hover">
                                    <div className="mb-4 flex items-center gap-4">
                                        <feature.icon className="h-8 w-8 text-primary" />
                                        <h3 className="text-2xl font-bold font-headline">{feature.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* UX + Conversion Section */}
                <section className="py-12 md:py-24 bg-card/50">
                    <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Blend className="h-8 w-8 text-secondary" />
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Design that Converts.</h2>
                            </div>
                            <p className="text-muted-foreground md:text-xl/relaxed">
                                UI/UX shaped by data science — intuitive layouts, measurable actions, and seamless user flows.
                            </p>
                             <Button asChild variant="link" className="text-lg text-primary hover:text-secondary px-0">
                                <Link href="#">
                                    View Case Study <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                        <div className="flex justify-center items-center">
                           <div className="w-full max-w-md h-64 rounded-lg bg-card border flex items-center justify-center">
                                <p className="text-muted-foreground">Animated UI blocks</p>
                           </div>
                        </div>
                    </div>
                </section>


                {/* Tech Stack Section */}
                <section className="py-12 md:py-24">
                    <div className="container px-4 md:px-6 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Built on a Modern Foundation.</h2>
                        <div className="mt-8 flex flex-wrap justify-center items-center gap-8">
                            {logos.map((logo) => (
                                <span key={logo} className="text-2xl font-bold text-muted-foreground/50">{logo}</span>
                            ))}
                        </div>
                         <Button asChild size="lg" variant="outline" className="mt-12 border-primary/50 text-primary-foreground font-semibold">
                            <Link href="#">Get Your Stack Audit</Link>
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    );
}
