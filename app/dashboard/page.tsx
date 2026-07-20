"use client";

import Link from "next/link";
import { PageHeader } from "@/components/dashboard/page-header";
import { ScrollAnimation } from "@/components/scroll-animation";
import {
  Bot,
  Zap,
  CheckCircle2,
  Clock,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Activity as ActivityIcon,
  Mail,
  Calendar,
  MessageSquare,
  FileText,
} from "lucide-react";

const stats = [
  {
    label: "Tasks completed",
    value: "1,284",
    delta: "+12.4%",
    sub: "this week",
    icon: CheckCircle2,
    accent: "from-emerald-500 to-teal-500",
    text: "text-emerald-400",
  },
  {
    label: "Hours saved",
    value: "48.2",
    delta: "+6.1h",
    sub: "vs. last week",
    icon: Clock,
    accent: "from-cyan-500 to-blue-500",
    text: "text-cyan-400",
  },
  {
    label: "Agent uptime",
    value: "99.98%",
    delta: "30d",
    sub: "no incidents",
    icon: Zap,
    accent: "from-violet-500 to-fuchsia-500",
    text: "text-violet-400",
  },
  {
    label: "Actions / day",
    value: "183",
    delta: "+24",
    sub: "avg trend",
    icon: TrendingUp,
    accent: "from-amber-500 to-orange-500",
    text: "text-amber-400",
  },
];

const recentActivity = [
  {
    icon: Mail,
    text: "Replied to 12 inbound leads via Gmail",
    meta: "updated HubSpot",
    time: "2m",
    tone: "text-cyan-400",
  },
  {
    icon: Calendar,
    text: "Booked 3 discovery calls on Calendly",
    meta: "calendar synced",
    time: "18m",
    tone: "text-emerald-400",
  },
  {
    icon: FileText,
    text: "Generated weekly KPI report",
    meta: "sent to #leadership",
    time: "1h",
    tone: "text-violet-400",
  },
  {
    icon: MessageSquare,
    text: "Answered 47 customer support tickets",
    meta: "Intercom · avg 12s",
    time: "3h",
    tone: "text-amber-400",
  },
  {
    icon: CheckCircle2,
    text: "Qualified 8 leads against playbook",
    meta: "5 marked hot",
    time: "5h",
    tone: "text-emerald-400",
  },
];

export default function DashboardOverview() {
  return (
    <div>
      <PageHeader
        eyebrow="Overview · live"
        title="Welcome back 👋"
        description="Here's what your AI agent has been up to. Everything is running smoothly."
        action={
          <Link
            href="/dashboard/agent"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold shadow-lg hover:scale-105 transition-all"
          >
            <Bot className="w-4 h-4" />
            View Agent
            <ArrowRight className="w-4 h-4" />
          </Link>
        }
      />

      {/* Stat grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <ScrollAnimation key={i} animation="zoom-in" delay={i * 80}>
              <div className="group relative h-full">
                <div className={`absolute -inset-px bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-30 rounded-2xl blur-lg transition-opacity duration-500`}></div>
                <div className="relative h-full glass rounded-2xl border border-border dark:border-white/10 hover:border-white/20 p-4 sm:p-5 transition-all hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${stat.accent} flex items-center justify-center shadow-md`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className={`text-[10px] font-mono ${stat.text} flex items-center gap-1`}>
                      <ArrowUpRight className="w-3 h-3" />
                      {stat.delta}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] font-mono text-muted-foreground/60 mt-1">
                    {stat.sub}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          );
        })}
      </div>

      {/* Main grid: agent status + activity feed */}
      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Agent status card */}
        <ScrollAnimation animation="slide-in-left" className="lg:col-span-2">
          <div className="relative group h-full">
            <div className="hidden dark:block absolute -inset-4 bg-gradient-to-br from-emerald-500/15 via-teal-500/5 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative h-full glass rounded-2xl border border-emerald-500/20 p-5 sm:p-7 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500"></div>

              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-xl">
                      <Bot className="w-7 h-7 text-white" />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-[3px] border-background animate-pulse"></span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-1">
                      your agent
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold leading-tight truncate">
                      Sales Ops Agent
                    </h3>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      Deployed 14 days ago · running 24/7
                    </div>
                  </div>
                </div>
                <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 uppercase tracking-widest shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Healthy
                </div>
              </div>

              {/* Mini bar chart — weekly activity */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    / 7-day activity
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">↑ trending up</span>
                </div>
                <div className="flex items-end gap-1.5 h-20">
                  {[45, 62, 38, 78, 55, 90, 72].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-gradient-to-t from-emerald-500/30 to-emerald-400/70 rounded-sm transition-all hover:from-emerald-500/60 hover:to-emerald-300 cursor-pointer"
                        style={{ height: `${h}%` }}
                        title={`${h * 2} actions`}
                      ></div>
                      <span className="text-[9px] font-mono text-muted-foreground/60">
                        {["M", "T", "W", "T", "F", "S", "S"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capability chips */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {["Lead qualification", "Email drafting", "CRM sync", "Calendar booking", "Slack notifs"].map((c, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-emerald-500/5 border border-emerald-500/20 text-emerald-300/80"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <Link
                href="/dashboard/agent"
                className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-semibold group/link"
              >
                Open agent console
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollAnimation>

        {/* Recent activity feed */}
        <ScrollAnimation animation="slide-in-right">
          <div className="relative h-full glass rounded-2xl border border-border dark:border-white/10 p-5 sm:p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <ActivityIcon className="w-4 h-4 text-primary" />
                <h3 className="font-semibold">Recent activity</h3>
              </div>
              <Link
                href="/dashboard/activity"
                className="text-[10px] font-mono text-muted-foreground hover:text-primary uppercase tracking-wider"
              >
                view all →
              </Link>
            </div>

            <div className="space-y-3">
              {recentActivity.map((item, i) => {
                const Icon = item.icon;
                return (
                  <ScrollAnimation key={i} animation="fade-in-up" delay={i * 60}>
                    <div className="group flex items-start gap-3 p-2 -mx-2 rounded-lg hover:surface-subtle transition-all">
                      <div className={`w-7 h-7 rounded-lg surface-subtle border border-border dark:border-white/10 flex items-center justify-center shrink-0 ${item.tone}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm leading-tight group-hover:text-foreground transition-colors">
                          {item.text}
                        </div>
                        <div className="text-[10px] font-mono text-muted-foreground/70 mt-0.5">
                          {item.meta}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground/60 shrink-0">
                        {item.time}
                      </span>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-border dark:border-white/10">
              <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                </span>
                <span>live · updating in real time</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Quick actions */}
      <ScrollAnimation animation="fade-in-up" delay={300}>
        <div className="mt-6 grid sm:grid-cols-3 gap-3">
          {[
            { href: "/dashboard/sops", label: "Upload new SOP", icon: FileText, accent: "from-cyan-500 to-blue-500" },
            { href: "/dashboard/integrations", label: "Connect a tool", icon: Sparkles, accent: "from-violet-500 to-fuchsia-500" },
            { href: "/dashboard/activity", label: "See today's logs", icon: ActivityIcon, accent: "from-amber-500 to-orange-500" },
          ].map((action, i) => {
            const Icon = action.icon;
            return (
              <Link
                key={i}
                href={action.href}
                className="group relative glass rounded-2xl border border-border dark:border-white/10 hover:border-white/20 p-4 flex items-center gap-3 transition-all hover:-translate-y-0.5"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${action.accent} flex items-center justify-center shadow-md`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-sm font-semibold">{action.label}</div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
              </Link>
            );
          })}
        </div>
      </ScrollAnimation>
    </div>
  );
}
