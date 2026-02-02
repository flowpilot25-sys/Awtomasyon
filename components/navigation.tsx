"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetHeader } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, X } from "lucide-react";
import { CurrencyChanger } from "@/components/currency-changer";
import { useCurrency } from "@/components/currency-context";

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Results", href: "#results" },
  { name: "Blog", href: "#blog" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const { selectedCurrency, setSelectedCurrency } = useCurrency();
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  useEffect(() => {
    if (!isMainPage) return; // Only track scroll on main page

    const handleScroll = () => {
      const sections = navigationItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 150; // Offset for navbar height
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Special case: if we're near the bottom of the page, show contact
      if (scrollPosition + windowHeight >= documentHeight - 200) {
        setActiveSection("contact");
        return;
      }

      // Find the current section based on scroll position
      let currentSection = "home"; // Default fallback

      // Check each section from bottom to top for better accuracy
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + rect.height;

          // If scroll position is within this section
          if (scrollPosition >= elementTop - 100 && scrollPosition < elementBottom - 100) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Run once on mount to set initial state
    setTimeout(handleScroll, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMainPage]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="hidden lg:flex items-center space-x-1">
      {navigationItems.map((item) => {
        // If on main page, use button with scroll. Otherwise, use Link
        if (isMainPage) {
          return (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary ${
                activeSection === item.href.substring(1)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </button>
          );
        } else {
          return (
            <Link
              key={item.name}
              href={`/${item.href}`}
              className="px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary text-muted-foreground"
            >
              {item.name}
            </Link>
          );
        }
      })}
      <CurrencyChanger
        selectedCurrency={selectedCurrency}
        onCurrencyChange={setSelectedCurrency}
      />
    </nav>
  );
}

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { selectedCurrency, setSelectedCurrency } = useCurrency();
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  useEffect(() => {
    if (!isMainPage) return; // Only track scroll on main page

    const handleScroll = () => {
      const sections = navigationItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 150; // Offset for navbar height
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Special case: if we're near the bottom of the page, show contact
      if (scrollPosition + windowHeight >= documentHeight - 200) {
        setActiveSection("contact");
        return;
      }

      // Find the current section based on scroll position
      let currentSection = "home"; // Default fallback

      // Check each section from bottom to top for better accuracy
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + rect.height;

          // If scroll position is within this section
          if (scrollPosition >= elementTop - 100 && scrollPosition < elementBottom - 100) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Run once on mount to set initial state
    setTimeout(handleScroll, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMainPage]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64">
          <SheetHeader>
            <VisuallyHidden asChild>
              <SheetTitle>Navigation Menu</SheetTitle>
            </VisuallyHidden>
            <VisuallyHidden asChild>
              <SheetDescription>
                Navigate to different sections of the page
              </SheetDescription>
            </VisuallyHidden>
          </SheetHeader>
          <div className="flex flex-col space-y-4 mt-8">
            {navigationItems.map((item) => {
              // If on main page, use button with scroll. Otherwise, use Link
              if (isMainPage) {
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary ${
                      activeSection === item.href.substring(1)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              } else {
                return (
                  <Link
                    key={item.name}
                    href={`/${item.href}`}
                    onClick={() => setIsOpen(false)}
                    className="text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary text-muted-foreground"
                  >
                    {item.name}
                  </Link>
                );
              }
            })}
            <div className="pt-4 border-t border-border">
              <CurrencyChanger 
                selectedCurrency={selectedCurrency}
                onCurrencyChange={setSelectedCurrency}
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
} 