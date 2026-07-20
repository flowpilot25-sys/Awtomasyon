"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, Search, Menu, X } from "lucide-react";
import { Sidebar } from "./sidebar";
import { ThemeToggle } from "@/components/theme-toggle";

export function Topbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 h-16 bg-background/60 backdrop-blur-xl border-b border-border dark:border-white/10">
        <div className="h-full px-4 sm:px-6 flex items-center gap-3">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden w-9 h-9 rounded-lg border border-border dark:border-white/10 hover:border-primary/40 flex items-center justify-center transition-all"
            aria-label="Open menu"
          >
            <Menu className="w-4 h-4" />
          </button>

          {/* Search */}
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Search agent, logs, SOPs…"
              className="w-full h-9 pl-9 pr-3 rounded-lg bg-secondary/50 dark:surface-sunken border border-border dark:border-border dark:border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none text-sm transition-all"
            />
            <kbd className="hidden sm:flex absolute right-2.5 top-1/2 -translate-y-1/2 items-center gap-0.5 px-1.5 h-5 rounded-md bg-white/5 border border-border dark:border-white/10 text-[10px] font-mono text-muted-foreground">
              ⌘K
            </kbd>
          </div>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-2">
            <button
              className="relative w-9 h-9 rounded-lg border border-border dark:border-white/10 hover:border-primary/40 flex items-center justify-center transition-all group"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            </button>

            <ThemeToggle />

            {/* User avatar */}
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-lg border border-border dark:border-white/10 hover:border-primary/40 hover:surface-subtle transition-all"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold">
                C
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-xs font-semibold leading-tight">Client</div>
                <div className="text-[10px] font-mono text-muted-foreground">pro plan</div>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-[280px] animate-slide-in-left">
            <div className="relative h-full">
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-white/5 border border-border dark:border-white/10 flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
              <Sidebar onNavigate={() => setMobileOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
