"use client";

import { PageHeader } from "@/components/dashboard/page-header";
import { ScrollAnimation } from "@/components/scroll-animation";
import {
  Mail,
  MessageSquare,
  Database,
  Calendar,
  FileSpreadsheet,
  Phone,
  Github,
  Slack,
  CheckCircle2,
  Plus,
  Settings2,
  Search,
} from "lucide-react";

const connected = [
  {
    name: "Gmail",
    desc: "Read & reply to inbound emails, draft outbound messages.",
    icon: Mail,
    accent: "from-red-500 to-rose-500",
    text: "text-red-400",
    status: "connected",
    scope: "read, send",
    events: "12,842 events",
  },
  {
    name: "HubSpot",
    desc: "Sync contacts, deals, and pipeline stages in real-time.",
    icon: Database,
    accent: "from-orange-500 to-amber-500",
    text: "text-orange-400",
    status: "connected",
    scope: "read, write",
    events: "3,421 events",
  },
  {
    name: "Slack",
    desc: "Post notifications, summaries, and escalations to channels.",
    icon: Slack,
    accent: "from-violet-500 to-fuchsia-500",
    text: "text-violet-400",
    status: "connected",
    scope: "post · #sales-ops, #leadership",
    events: "1,204 events",
  },
  {
    name: "Google Calendar",
    desc: "Book meetings, check availability, send invites.",
    icon: Calendar,
    accent: "from-blue-500 to-cyan-500",
    text: "text-blue-400",
    status: "connected",
    scope: "read, write",
    events: "284 events",
  },
];

const available = [
  {
    name: "Google Sheets",
    desc: "Read/write structured data for reports & dashboards.",
    icon: FileSpreadsheet,
    accent: "from-emerald-500 to-green-500",
  },
  {
    name: "Intercom",
    desc: "Answer support tickets and escalate when needed.",
    icon: MessageSquare,
    accent: "from-pink-500 to-rose-500",
  },
  {
    name: "Twilio",
    desc: "Send SMS, WhatsApp, make phone calls on your behalf.",
    icon: Phone,
    accent: "from-red-500 to-orange-500",
  },
  {
    name: "GitHub",
    desc: "Track issues, PRs, and release notes from your repos.",
    icon: Github,
    accent: "from-gray-500 to-slate-500",
  },
];

export default function IntegrationsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Integrations · tools"
        title="Connected Tools"
        description="The tools your agent can use. Add or remove connections anytime — changes go live instantly."
        action={
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold shadow-lg hover:scale-105 transition-all">
            <Plus className="w-4 h-4" />
            Request new
          </button>
        }
      />

      {/* Summary strip */}
      <ScrollAnimation animation="fade-in-up">
        <div className="glass rounded-2xl border border-border dark:border-white/10 p-4 mb-6 flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-lg font-bold leading-tight">4 connected</div>
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                all healthy
              </div>
            </div>
          </div>
          <div className="w-px h-10 bg-white/10"></div>
          <div>
            <div className="text-lg font-bold leading-tight">17.7k</div>
            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              events this month
            </div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
          <div>
            <div className="text-lg font-bold leading-tight">99.98%</div>
            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              integration uptime
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Connected */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest font-mono">
            / Connected
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
          {connected.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <ScrollAnimation key={i} animation="scale-in" delay={i * 80}>
                <div className="group relative h-full">
                  <div className={`absolute -inset-px bg-gradient-to-br ${tool.accent} opacity-0 group-hover:opacity-20 rounded-2xl blur-lg transition-opacity duration-500`}></div>
                  <div className="relative h-full glass rounded-2xl border border-border dark:border-white/10 hover:border-white/20 p-5 transition-all hover:-translate-y-1 overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${tool.accent}`}></div>

                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.accent} flex items-center justify-center shadow-lg shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <h3 className="font-bold truncate">{tool.name}</h3>
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[9px] font-mono text-emerald-400 uppercase tracking-widest">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span>
                            live
                          </span>
                        </div>
                        <div className={`text-[10px] font-mono ${tool.text}`}>{tool.scope}</div>
                      </div>
                      <button className="w-7 h-7 rounded-lg hover:bg-white/5 flex items-center justify-center shrink-0 text-muted-foreground hover:text-foreground transition-colors">
                        <Settings2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {tool.desc}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-border dark:border-white/10">
                      <span className="text-[10px] font-mono text-muted-foreground">
                        {tool.events}
                      </span>
                      <button className="text-[11px] font-mono text-red-400/70 hover:text-red-400 uppercase tracking-wider">
                        disconnect
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>

      {/* Available */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest font-mono">
            / Available to connect
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {available.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <ScrollAnimation key={i} animation="zoom-in" delay={i * 60}>
                <div className="group relative h-full">
                  <div className="relative h-full glass rounded-2xl border border-border dark:border-white/10 hover:border-primary/30 p-4 transition-all hover:-translate-y-1 cursor-pointer">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tool.accent} flex items-center justify-center shadow-md mb-3 opacity-80 group-hover:opacity-100 transition-opacity`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-semibold text-sm mb-1">{tool.name}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                      {tool.desc}
                    </p>
                    <button className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-border dark:border-white/10 group-hover:border-primary/40 group-hover:bg-primary/5 text-xs font-semibold transition-all">
                      <Plus className="w-3 h-3" />
                      Connect
                    </button>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* Request a custom one */}
        <ScrollAnimation animation="fade-in-up" delay={300}>
          <div className="mt-6 glass rounded-2xl border border-border dark:border-white/10 border-dashed p-5 text-center">
            <div className="text-sm font-semibold mb-1">Don&apos;t see your tool?</div>
            <p className="text-xs text-muted-foreground mb-3">
              We build custom integrations for any API — tell us what you need.
            </p>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass border border-primary/30 hover:border-primary/60 text-xs font-semibold transition-all">
              <Search className="w-3.5 h-3.5" />
              Request a custom integration
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
