"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Bot,
  FileText,
  Plug,
  Activity,
  CreditCard,
  Settings,
  Sparkles,
  LogOut,
} from "lucide-react";

export const navItems = [
  {
    href: "/dashboard",
    label: "Overview",
    icon: LayoutDashboard,
    meta: "home",
  },
  {
    href: "/dashboard/agent",
    label: "My AI Agent",
    icon: Bot,
    meta: "live",
  },
  {
    href: "/dashboard/sops",
    label: "SOPs",
    icon: FileText,
    meta: "training",
  },
  {
    href: "/dashboard/integrations",
    label: "Integrations",
    icon: Plug,
    meta: "tools",
  },
  {
    href: "/dashboard/activity",
    label: "Activity",
    icon: Activity,
    meta: "logs",
  },
  {
    href: "/dashboard/billing",
    label: "Billing",
    icon: CreditCard,
    meta: "plan",
  },
  {
    href: "/dashboard/settings",
    label: "Settings",
    icon: Settings,
    meta: "config",
  },
];

interface SidebarProps {
  onNavigate?: () => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <aside className="h-full flex flex-col bg-background/40 backdrop-blur-xl border-r border-border dark:border-white/10">
      {/* Brand */}
      <div className="px-5 py-5 border-b border-border dark:border-white/10">
        <Link href="/dashboard" onClick={onNavigate} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-sm font-bold leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Awtomasyon
            </div>
            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              client console
            </div>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
        <div className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-[0.2em] px-3 py-2">
          / workspace
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                active
                  ? "bg-primary/10 border border-primary/30 text-foreground"
                  : "border border-transparent text-muted-foreground hover:text-foreground hover:surface-subtle hover:border-border dark:border-white/10"
              }`}
            >
              {active && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-gradient-to-b from-primary to-accent"></span>
              )}
              <Icon
                className={`w-4 h-4 shrink-0 ${
                  active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                }`}
              />
              <span className="flex-1 truncate font-medium">{item.label}</span>
              <span
                className={`text-[9px] font-mono uppercase tracking-wider ${
                  active ? "text-primary/70" : "text-muted-foreground/50"
                }`}
              >
                {item.meta}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom card — agent status */}
      <div className="p-3 border-t border-border dark:border-white/10">
        <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
              agent online
            </span>
          </div>
          <div className="text-xs text-muted-foreground leading-relaxed">
            Your agent is running and healthy.
          </div>
        </div>

        <Link
          href="/"
          className="mt-2 flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-muted-foreground hover:text-foreground hover:surface-subtle transition-all"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Exit to site</span>
        </Link>
      </div>
    </aside>
  );
}
