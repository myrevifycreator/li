import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
    { href: "/automations", label: "Automations" },
    { href: "/web-development", label: "Web Development" },
    { href: "/marketing", label: "Marketing" },
    { href: "/industries", label: "Industries" },
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 flex items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <Zap className="h-6 w-6 text-primary" />
                        <span className="font-bold font-headline text-lg">LithiumTech.ai</span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <Button variant="ghost" className="hidden md:inline-flex">Sign In</Button>
                    <Button className="hidden md:inline-flex gradient-button">Request Demo</Button>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col p-6 space-y-4">
                                <Link href="/" className="flex items-center gap-2 mb-4">
                                    <Zap className="h-6 w-6 text-primary" />
                                    <span className="font-bold font-headline text-lg">LithiumTech.ai</span>
                                </Link>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Button>Sign In</Button>
                                <Button className="gradient-button">Request Demo</Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
