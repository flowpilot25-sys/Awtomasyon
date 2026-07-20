"use client";

import { useState } from "react";
import { PageHeader } from "@/components/dashboard/page-header";
import { ScrollAnimation } from "@/components/scroll-animation";
import {
  Search,
  Download,
  Mail,
  Calendar,
  Database,
  MessageSquare,
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock,
  Filter,
} from "lucide-react";

const logs = [
  {
    time: "10:42:18",
    date: "today",
    category: "email",
    icon: Mail,
    action: "Replied to inbound lead from Sarah Chen (acme.co)",
    detail: "Gmail · draft approved · CRM updated",
    status: "success",
    duration: "1.2s",
    tone: "text-cyan-400",
  },
  {
    time: "10:38:04",
    date: "today",
    category: "calendar",
    icon: Calendar,
    action: "Booked 30-min discovery call with Michael R.",
    detail: "Calendly · 2 buffer min added · Slack notified",
    status: "success",
    duration: "0.8s",
    tone: "text-blue-400",
  },
  {
    time: "10:31:55",
    date: "today",
    category: "crm",
    icon: Database,
    action: "Updated deal stage: Acme Corp → Negotiation",
    detail: "HubSpot · value: $48k · owner notified",
    status: "success",
    duration: "0.6s",
    tone: "text-orange-400",
  },
  {
    time: "10:24:12",
    date: "today",
    category: "support",
    icon: MessageSquare,
    action: "Answered support ticket #4821",
    detail: "Intercom · resolved · confidence: 94%",
    status: "success",
    duration: "2.1s",
    tone: "text-pink-400",
  },
  {
    time: "10:18:33",
    date: "today",
    category: "report",
    icon: FileText,
    action: "Generated daily leadership summary",
    detail: "Slack · #leadership · 8 KPIs included",
    status: "success",
    duration: "4.3s",
    tone: "text-violet-400",
  },
  {
    time: "10:12:07",
    date: "today",
    category: "email",
    icon: Mail,
    action: "Escalated lead to human — unclear intent",
    detail: "Tagged @gabriel · needs review",
    status: "warning",
    duration: "0.9s",
    tone: "text-amber-400",
  },
  {
    time: "09:58:41",
    date: "today",
    category: "crm",
    icon: Database,
    action: "Synced 5 new contacts from landing page form",
    detail: "HubSpot · all enriched · 3 marked hot",
    status: "success",
    duration: "1.4s",
    tone: "text-orange-400",
  },
  {
    time: "23:14:09",
    date: "yesterday",
    category: "report",
    icon: FileText,
    action: "Sent end-of-day pipeline snapshot",
    detail: "Slack · 24 deals · $284k in flight",
    status: "success",
    duration: "3.2s",
    tone: "text-violet-400",
  },
];

const categories = [
  { label: "All", value: "all", count: 8247 },
  { label: "Email", value: "email", count: 3120 },
  { label: "Calendar", value: "calendar", count: 284 },
  { label: "CRM", value: "crm", count: 3421 },
  { label: "Support", value: "support", count: 1204 },
  { label: "Reports", value: "report", count: 218 },
];

export default function ActivityPage() {
  const [active, setActive] = useState("all");

  return (
    <div>
      <PageHeader
        eyebrow="Activity · logs"
        title="What your agent did"
        description="Every action, every run. Fully searchable, exportable, auditable."
        action={
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass border border-primary/30 hover:border-primary/60 text-sm font-semibold transition-all">
            <Download className="w-3.5 h-3.5" />
            Export
          </button>
        }
      />

      {/* Top stats */}
      <ScrollAnimation animation="fade-in-up">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { label: "Today", value: "183", sub: "actions", tone: "text-primary" },
            { label: "This week", value: "1,284", sub: "actions", tone: "text-cyan-400" },
            { label: "Success rate", value: "98.4%", sub: "last 30d", tone: "text-emerald-400" },
            { label: "Escalated", value: "12", sub: "awaiting review", tone: "text-amber-400" },
          ].map((s, i) => (
            <div key={i} className="glass rounded-xl border border-border dark:border-white/10 p-3 sm:p-4">
              <div className={`text-2xl font-bold ${s.tone} leading-tight`}>{s.value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
              <div className="text-[10px] font-mono text-muted-foreground/60 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </ScrollAnimation>

      {/* Search + filter strip */}
      <ScrollAnimation animation="fade-in-up" delay={100}>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="flex-1 min-w-[240px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search actions… e.g. 'Sarah Chen' or 'booked call'"
              className="w-full h-10 pl-9 pr-3 rounded-lg surface-sunken border border-border dark:border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none text-sm transition-all"
            />
          </div>
          <button className="inline-flex items-center gap-2 px-3 py-2 h-10 rounded-lg glass border border-border dark:border-white/10 hover:border-white/20 text-xs font-semibold transition-all">
            <Filter className="w-3.5 h-3.5" />
            Filters
          </button>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setActive(c.value)}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[11px] font-mono transition-all ${
                active === c.value
                  ? "bg-primary/10 border-primary/30 text-primary"
                  : "border-border dark:border-white/10 text-muted-foreground hover:border-white/20 hover:text-foreground"
              }`}
            >
              {c.label}
              <span className="text-[9px] opacity-60">{c.count.toLocaleString()}</span>
            </button>
          ))}
        </div>
      </ScrollAnimation>

      {/* Logs table */}
      <ScrollAnimation animation="fade-in-up" delay={200}>
        <div className="glass rounded-2xl border border-border dark:border-white/10 overflow-hidden">
          {/* Header */}
          <div className="hidden md:grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 px-5 py-3 border-b border-border dark:border-white/10 surface-raised text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
            <div className="w-20">Time</div>
            <div>Action</div>
            <div className="w-20 text-right">Duration</div>
            <div className="w-20 text-right">Status</div>
          </div>

          {/* Rows */}
          <div>
            {logs.map((log, i) => {
              const Icon = log.icon;
              return (
                <ScrollAnimation key={i} animation="fade-in-up" delay={i * 30}>
                  <div className="group grid grid-cols-1 md:grid-cols-[auto_1fr_auto_auto] items-center gap-2 md:gap-4 px-5 py-4 border-b border-border/60 dark:border-white/5 hover:surface-raised transition-colors">
                    <div className="flex items-center gap-3 md:w-20">
                      <div className={`w-8 h-8 md:hidden rounded-lg surface-subtle border border-border dark:border-white/10 flex items-center justify-center ${log.tone}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-mono text-[11px] text-foreground/80">{log.time}</div>
                        <div className="font-mono text-[9px] text-muted-foreground/60">{log.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`hidden md:flex w-9 h-9 rounded-lg surface-subtle border border-border dark:border-white/10 items-center justify-center shrink-0 ${log.tone}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium truncate">{log.action}</div>
                        <div className="text-[10px] font-mono text-muted-foreground/70 mt-0.5 truncate">
                          {log.detail}
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block text-right text-[10px] font-mono text-muted-foreground">
                      {log.duration}
                    </div>
                    <div className="md:text-right">
                      {log.status === "success" ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                          <CheckCircle2 className="w-3 h-3" />
                          ok
                        </span>
                      ) : log.status === "warning" ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-400 uppercase tracking-wider">
                          <AlertCircle className="w-3 h-3" />
                          review
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                          <Clock className="w-3 h-3" />
                          pending
                        </span>
                      )}
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>

          {/* Footer */}
          <div className="px-5 py-3 surface-raised flex items-center justify-between">
            <span className="text-[10px] font-mono text-muted-foreground">
              Showing 8 of 8,247 · this week
            </span>
            <div className="flex items-center gap-2 text-[10px] font-mono">
              <button className="px-2 py-1 rounded border border-border dark:border-white/10 hover:border-white/20 text-muted-foreground hover:text-foreground transition-all">
                prev
              </button>
              <button className="px-2 py-1 rounded border border-primary/30 text-primary">1</button>
              <button className="px-2 py-1 rounded border border-border dark:border-white/10 hover:border-white/20 text-muted-foreground hover:text-foreground transition-all">
                2
              </button>
              <button className="px-2 py-1 rounded border border-border dark:border-white/10 hover:border-white/20 text-muted-foreground hover:text-foreground transition-all">
                3
              </button>
              <button className="px-2 py-1 rounded border border-border dark:border-white/10 hover:border-white/20 text-muted-foreground hover:text-foreground transition-all">
                next
              </button>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
