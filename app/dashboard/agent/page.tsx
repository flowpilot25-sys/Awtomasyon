"use client";

import { PageHeader } from "@/components/dashboard/page-header";
import { ScrollAnimation } from "@/components/scroll-animation";
import {
  Bot,
  Cpu,
  Zap,
  Clock,
  CheckCircle2,
  Play,
  Pause,
  RefreshCw,
  Mail,
  MessageSquare,
  FileText,
  Calendar,
  Database,
  Activity,
  ChevronRight,
} from "lucide-react";

const capabilities = [
  { name: "Lead qualification", icon: CheckCircle2, status: "active", usage: "48 today" },
  { name: "Email drafting", icon: Mail, status: "active", usage: "132 today" },
  { name: "CRM sync (HubSpot)", icon: Database, status: "active", usage: "real-time" },
  { name: "Calendar booking", icon: Calendar, status: "active", usage: "12 today" },
  { name: "Slack notifications", icon: MessageSquare, status: "active", usage: "on events" },
  { name: "Weekly reports", icon: FileText, status: "scheduled", usage: "every Mon 9am" },
];

const liveLog = [
  { time: "just now", action: "Drafting email reply to Sarah Chen", status: "running" },
  { time: "12s ago", action: "Booked call for Michael R. (enterprise)", status: "done" },
  { time: "34s ago", action: "Qualified lead: David K. → hot", status: "done" },
  { time: "1m ago", action: "Synced 5 new contacts to HubSpot", status: "done" },
  { time: "2m ago", action: "Sent daily summary to #sales-ops", status: "done" },
  { time: "3m ago", action: "Replied to support ticket #4821", status: "done" },
  { time: "5m ago", action: "Updated deal stage: Acme Corp → Negotiation", status: "done" },
];

export default function MyAgentPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Your agent · live"
        title="Sales Ops Agent"
        description="Deployed 14 days ago. Trained on your SOP, connected to 6 tools, running 24/7."
        action={
          <div className="flex gap-2">
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg glass border border-border dark:border-white/10 hover:border-white/20 text-xs font-semibold transition-all">
              <Pause className="w-3.5 h-3.5" />
              Pause
            </button>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg glass border border-primary/30 hover:border-primary/60 text-xs font-semibold transition-all">
              <RefreshCw className="w-3.5 h-3.5" />
              Retrain
            </button>
          </div>
        }
      />

      {/* Agent identity card */}
      <ScrollAnimation animation="blur-in">
        <div className="relative group mb-6">
          <div className="hidden dark:block absolute -inset-4 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent rounded-3xl blur-2xl animate-pulse-glow"></div>
          <div className="relative glass rounded-2xl border border-emerald-500/20 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500"></div>

            <div className="p-5 sm:p-7 grid md:grid-cols-3 gap-5">
              {/* Identity */}
              <div className="md:col-span-1 flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-xl">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-[3px] border-background animate-pulse"></span>
                </div>
                <div className="min-w-0">
                  <div className="text-xl font-bold leading-tight">Sales Ops Agent</div>
                  <div className="text-xs text-muted-foreground mt-0.5">@sales-agent-01</div>
                  <div className="inline-flex items-center gap-1.5 mt-2 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[9px] font-mono text-emerald-400 uppercase tracking-widest">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span>
                    Running
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: Zap, label: "Uptime", value: "99.98%", tone: "text-emerald-400" },
                  { icon: Clock, label: "Avg response", value: "1.4s", tone: "text-cyan-400" },
                  { icon: Activity, label: "Actions today", value: "183", tone: "text-violet-400" },
                  { icon: Cpu, label: "Tasks / day", value: "132", tone: "text-amber-400" },
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={i} className="rounded-xl surface-sunken border border-border/60 dark:border-white/5 p-3">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Icon className={`w-3 h-3 ${s.tone}`} />
                        <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
                          {s.label}
                        </span>
                      </div>
                      <div className="text-base font-bold leading-tight">{s.value}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <div className="grid lg:grid-cols-5 gap-4 sm:gap-6">
        {/* Capabilities */}
        <ScrollAnimation animation="slide-in-left" className="lg:col-span-2">
          <div className="h-full glass rounded-2xl border border-border dark:border-white/10 p-5 sm:p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold">Capabilities</h3>
              <span className="text-[10px] font-mono text-muted-foreground">
                {capabilities.length} enabled
              </span>
            </div>
            <div className="space-y-2">
              {capabilities.map((c, i) => {
                const Icon = c.icon;
                const isActive = c.status === "active";
                return (
                  <ScrollAnimation key={i} animation="fade-in-up" delay={i * 50}>
                    <div className="group flex items-center gap-3 p-3 rounded-xl border border-border dark:border-white/10 hover:border-primary/30 hover:surface-raised transition-all cursor-pointer">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isActive ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{c.name}</div>
                        <div className="text-[10px] font-mono text-muted-foreground">{c.usage}</div>
                      </div>
                      <div className={`w-9 h-5 rounded-full relative transition-colors ${isActive ? "bg-emerald-500/40" : "bg-amber-500/40"}`}>
                        <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${isActive ? "left-[18px]" : "left-0.5"}`}></div>
                      </div>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </ScrollAnimation>

        {/* Live log — terminal */}
        <ScrollAnimation animation="slide-in-right" className="lg:col-span-3">
          <div className="h-full glass rounded-2xl border border-border dark:border-white/10 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border dark:border-white/10 surface-raised">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
                </div>
                <span className="text-[11px] font-mono text-muted-foreground ml-3">agent.log</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">live</span>
              </div>
            </div>
            <div className="p-5 font-mono text-xs space-y-2.5 max-h-[420px] overflow-y-auto">
              {liveLog.map((entry, i) => (
                <ScrollAnimation key={i} animation="fade-in-up" delay={i * 40}>
                  <div className="flex items-start gap-3">
                    <span className="text-muted-foreground/60 w-16 shrink-0 text-[10px] pt-0.5">{entry.time}</span>
                    {entry.status === "running" ? (
                      <div className="w-3 h-3 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin shrink-0 mt-0.5"></div>
                    ) : (
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    <span className={`flex-1 ${entry.status === "running" ? "text-emerald-300" : "text-foreground/80"}`}>
                      {entry.action}
                      {entry.status === "running" && (
                        <span className="inline-block w-1 h-3 bg-emerald-400 ml-1 align-middle animate-pulse"></span>
                      )}
                    </span>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
            <div className="px-5 py-3 border-t border-border dark:border-white/10 flex items-center justify-between surface-raised">
              <span className="text-[10px] font-mono text-muted-foreground">
                showing last 7 actions · 8,247 total this week
              </span>
              <button className="inline-flex items-center gap-1 text-[10px] font-mono text-primary hover:text-primary/80 uppercase tracking-wider">
                view full log
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Mini action strip */}
      <ScrollAnimation animation="fade-in-up" delay={200}>
        <div className="mt-6 glass rounded-2xl border border-border dark:border-white/10 p-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Play className="w-3.5 h-3.5 text-emerald-400" />
            <span>Next scheduled task:</span>
            <span className="text-foreground font-semibold">Generate Monday standup brief</span>
            <span className="font-mono text-muted-foreground/60">· in 14h</span>
          </div>
          <button className="text-[11px] font-mono text-primary hover:text-primary/80 uppercase tracking-wider">
            run now →
          </button>
        </div>
      </ScrollAnimation>
    </div>
  );
}
