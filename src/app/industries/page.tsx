import { Button } from "@/components/ui/button";
import { Factory, Landmark, Cpu, Briefcase, Building, ArrowRight } from "lucide-react";
import Link from "next/link";

const solutions = [
    {
        title: "Manufacturing",
        description: "Predictive maintenance and data-driven optimization for production efficiency.",
        icon: Factory,
        visual: "/placeholder.svg"
    },
    {
        title: "Finance & Services",
        description: "Compliance-grade automations for financial workflows and auditing.",
        icon: Landmark,
        visual: "/placeholder.svg"
    },
    {
        title: "SaaS & Technology",
        description: "AI automations for dev ops, churn analytics, and product iteration.",
        icon: Cpu,
        visual: "/placeholder.svg"
    },
    {
        title: "Marketing & Agencies",
        description: "Creative intelligence, delivered at scale for content, campaigns, and reporting.",
        icon: Briefcase,
        visual: "/placeholder.svg"
    },
    {
        title: "Public Sector",
        description: "Data-driven automations for resource allocation and reporting.",
        icon: Building,
        visual: "/placeholder.svg"
    }
];

export default function IndustriesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 lg:py-40 text-center bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(58,160,255,0.2),rgba(255,255,255,0))]">
                    <div className="container px-4 md:px-6">
                        <div className="space-y-4 max-w-4xl mx-auto">
                            <div className="inline-block rounded-lg bg-gray-800/50 px-3 py-1 text-sm font-semibold text-secondary">
                                AI for Every Sector
                            </div>
                            <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                                Powering Industries of the Future
                            </h1>
                            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
                                Automation systems tailored for manufacturing, finance, SaaS, agencies, and more.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <Button asChild size="lg" className="gradient-button font-semibold">
                                    <Link href="#">Explore Solutions</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-primary/50 text-primary-foreground font-semibold">
                                    <Link href="#">Book Consultation</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solutions Sections */}
                {solutions.map((solution, index) => (
                    <section key={solution.title} className={`py-12 md:py-24 ${index % 2 === 1 ? 'bg-card/50' : ''}`}>
                        <div className="container px-4 md:px-6">
                            <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-row-dense' : ''}`}>
                                <div className={`space-y-4 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                                    <div className="flex items-center gap-4">
                                        <solution.icon className="h-8 w-8 text-primary" />
                                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">{solution.title}</h2>
                                    </div>
                                    <p className="text-muted-foreground md:text-xl/relaxed">
                                        {solution.description}
                                    </p>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="w-full max-w-md h-64 rounded-lg bg-card border flex items-center justify-center">
                                        <p className="text-muted-foreground">Animated 3D Schematic</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}

                {/* Results Grid */}
                <section className="py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
                            <div className="rounded-lg border bg-card p-6">
                                <h3 className="text-4xl font-bold font-headline gradient-text">+70%</h3>
                                <p className="mt-2 text-muted-foreground">efficiency gains</p>
                            </div>
                            <div className="rounded-lg border bg-card p-6">
                                <h3 className="text-4xl font-bold font-headline gradient-text">-40%</h3>
                                <p className="mt-2 text-muted-foreground">process delays</p>
                            </div>
                            <div className="rounded-lg border bg-card p-6">
                                <h3 className="text-4xl font-bold font-headline gradient-text">24/7</h3>
                                <p className="mt-2 text-muted-foreground">decision insights</p>
                            </div>
                        </div>
                        <div className="mt-12 text-center">
                             <Button asChild variant="link" className="text-lg text-primary hover:text-secondary">
                                <Link href="#">
                                    Request Case Study <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
