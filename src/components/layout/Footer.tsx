import Link from "next/link";
import { Zap } from 'lucide-react';

const links = [
    { href: "/automations", label: "Automations" },
    { href: "/web-development", label: "Web Development" },
    { href: "/marketing", label: "Marketing" },
    { href: "/industries", label: "Industries" },
    { href: "#", label: "Contact" },
];

export function Footer() {
    return (
        <footer className="bg-card/50 border-t border-border">
            <div className="container mx-auto px-4 md:px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <Zap className="h-6 w-6 text-primary" />
                        <span className="text-xl font-bold font-headline">LithiumTech.ai</span>
                    </div>
                    <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
                        {links.map(link => (
                            <Link key={link.label} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden md:block">
                      <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} LithiumTech. All rights reserved.</p>
                    </div>
                </div>
                 <div className="md:hidden mt-6 text-center">
                    <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} LithiumTech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
