import { navItems } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import MobileNavigation from "./MobileNavigation";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-black font-heading bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent ">
              SwoleGym
            </h1>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {navItems.map(({ name, href }) => (
                <Link
                  className="
                        relative
                        text-foreground
                        hover:text-primary
                        px-2 py-2 text-sm font-medium
                        transition-colors duration-300
                        after:content-[''] after:absolute after:left-0 after:bottom-2
                        after:h-0.5 after:w-full after:bg-primary
                        after:origin-left after:scale-x-0
                        after:transition-transform after:duration-300
                        hover:after:scale-x-100
                        "
                  key={name}
                  href={href}
                >
                  {name}{" "}
                </Link>
              ))}
            </div>
          </div>
          {/* CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button className="font-semibold " variant="primary">
              Start Now
            </Button>
          </div>
          <div className="md:hidden">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </nav>
  );
};
