"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/constants";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {isOpen && (
        <div className="shadow-lg fixed left-0 right-0 top-16 z-40 md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border dark:border-secondary/40">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleClose}
                className="text-foreground hover:text-primary block px-3 py-2 font-medium"
              >
                {item.name}
              </Link>
            ))}

            <div className="px-3 py-2">
              <Button
                className="w-full font-semibold"
                variant="primary"
                onClick={handleClose}
              >
                Start Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
