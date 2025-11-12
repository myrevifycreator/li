import { Button } from "@/components/ui/button";
import { BrainCircuit, AreaChart, Settings, Goal, ArrowRight } from "lucide-react";
import Link from "next/link";

const logos = ["HubSpot", "Google Ads", "Meta", "LinkedIn", "Webflow", "Supabase"];

const features = [
    {
        title: "Strategy Engine",
        description: "Our models analyze audience intent and behavior to adapt strategies in real time.",
        icon: BrainCircuit,
    },
    {
        title: "Creative Automation",
        description: "AI generates and adapts your ads, blogs, and visuals at scale — maintaining your brand tone perfectly.",
        icon: Settings,
    },
    {
        title: "Performance Intelligence",
        description: "Unified analytics connect content, ads, and conversions into one adaptive dashboard.",
        icon: AreaChart,
    },
    {
        title: "Conversion Optimization",
        description: "Machine learning continuously tests CTAs, layouts, and copy to maximize conversion rates.",
        icon: Goal,
    }
]

export default function MarketingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 lg:py-40 text-center bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,209,178,0.2),rgba(255,255,255,0))]">
                    <div className="container px-4 md:px-6">
                        <div className="space-y-4 max-w-4xl mx-auto">
                            <div className="inline-block rounded-lg bg-gray-800/50 px-3 py-1 text-sm font-semibold text-secondary">
                                Intelligent Growth 2025
                            </div>
                            <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                                Precision Marketing at Machine Speed
                            </h1>
                            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
                                Campaigns that learn, adapt, and perform across every channel.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <Button asChild size="lg" className="gradient-button font-semibold">
                                    <Link href="#">Start Campaign</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-secondary/50 text-primary-foreground font-semibold">
                                    <Link href="#">View Analytics</Link>
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
                                <div key={feature.title} className="h-full rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 ease-in-out hover:shadow-secondary/20 hover:shadow-lg hover:-translate-y-1 glow-on-hover">
                                    <div className="mb-4 flex items-center gap-4">
                                        <feature.icon className="h-8 w-8 text-secondary" />
                                        <h3 className="text-2xl font-bold font-headline">{feature.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Visual Section */}
                 <section className="py-12 md:py-24 bg-card/50">
                    <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Measure What Matters.</h2>
                            <p className="text-muted-foreground md:text-xl/relaxed">
                                Unified analytics connect content, ads, and conversions into one adaptive dashboard.
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                           <div className="w-full max-w-md h-64 rounded-lg bg-card border flex items-center justify-center">
                                <p className="text-muted-foreground">Animated KPI meters</p>
                           </div>
                        </div>
                    </div>
                </section>


                {/* Integrations Section */}
                <section className="py-12 md:py-24">
                    <div className="container px-4 md:px-6 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Connect Your Entire Stack.</h2>
                        <div className="mt-8 flex flex-wrap justify-center items-center gap-8">
                            {logos.map((logo) => (
                                <span key={logo} className="text-2xl font-bold text-muted-foreground/50">{logo}</span>
                            ))}
                        </div>
                         <Button asChild variant="link" className="mt-8 text-lg text-primary hover:text-secondary">
                            <Link href="#">
                                Connect Marketing Stack <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    );
}
