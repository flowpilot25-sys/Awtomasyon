"use client";

import { useState } from "react";
import { PageHeader } from "@/components/dashboard/page-header";
import { ScrollAnimation } from "@/components/scroll-animation";
import {
  User,
  Users,
  Bell,
  Key,
  Shield,
  Copy,
  Plus,
  Trash2,
  Mail,
  MessageSquare,
  Phone,
} from "lucide-react";

const team = [
  { name: "Gabriel Murphy", email: "gabriel@murphyconsulting.us", role: "Owner", initials: "GM", accent: "from-cyan-500 to-blue-500" },
  { name: "Sarah Chen", email: "sarah@murphyconsulting.us", role: "Admin", initials: "SC", accent: "from-emerald-500 to-teal-500" },
  { name: "Michael Rivers", email: "michael@murphyconsulting.us", role: "Viewer", initials: "MR", accent: "from-violet-500 to-fuchsia-500" },
];

const apiKeys = [
  { name: "Production", key: "sk_live_7f4a...8c2b", created: "Jan 14, 2026", lastUsed: "2 min ago" },
  { name: "Webhook (n8n)", key: "sk_live_9a2e...4f1d", created: "Feb 22, 2026", lastUsed: "1 hour ago" },
];

export default function SettingsPage() {
  const [notifEmail, setNotifEmail] = useState(true);
  const [notifSlack, setNotifSlack] = useState(true);
  const [notifSms, setNotifSms] = useState(false);
  const [weeklyDigest, setWeeklyDigest] = useState(true);

  return (
    <div>
      <PageHeader
        eyebrow="Settings"
        title="Workspace settings"
        description="Profile, team, notifications, and API keys. Changes save automatically."
      />

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
        {/* LEFT — Profile + Team */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Profile */}
          <ScrollAnimation animation="fade-in-up">
            <div className="glass rounded-2xl border border-border dark:border-white/10 p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-5">
                <User className="w-4 h-4 text-primary" />
                <h3 className="font-semibold">Profile</h3>
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  GM
                </div>
                <div>
                  <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass border border-border dark:border-white/10 hover:border-primary/40 text-xs font-semibold transition-all">
                    Change avatar
                  </button>
                  <div className="text-[10px] font-mono text-muted-foreground mt-1">
                    PNG / JPG · max 2MB
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Full name", value: "Gabriel Murphy" },
                  { label: "Email", value: "gabriel@murphyconsulting.us" },
                  { label: "Company", value: "Murphy Consulting" },
                  { label: "Time zone", value: "America/New_York" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block mb-1.5">
                      {f.label}
                    </label>
                    <input
                      type="text"
                      defaultValue={f.value}
                      className="w-full h-10 px-3 rounded-lg surface-sunken border border-border dark:border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none text-sm transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Team */}
          <ScrollAnimation animation="fade-in-up" delay={100}>
            <div className="glass rounded-2xl border border-border dark:border-white/10 p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold">Team</h3>
                </div>
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold shadow-md hover:scale-105 transition-all">
                  <Plus className="w-3 h-3" />
                  Invite
                </button>
              </div>

              <div className="space-y-2">
                {team.map((m, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl border border-border dark:border-white/10 hover:border-white/20 hover:surface-raised transition-all"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.accent} flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0`}>
                      {m.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold truncate">{m.name}</div>
                      <div className="text-[11px] font-mono text-muted-foreground truncate">
                        {m.email}
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border uppercase tracking-wider shrink-0 ${
                      m.role === "Owner"
                        ? "bg-primary/10 border-primary/30 text-primary"
                        : m.role === "Admin"
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                        : "surface-subtle border-border dark:border-white/10 text-muted-foreground"
                    }`}>
                      {m.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* API Keys */}
          <ScrollAnimation animation="fade-in-up" delay={200}>
            <div className="glass rounded-2xl border border-border dark:border-white/10 p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Key className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold">API keys</h3>
                </div>
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass border border-primary/30 hover:border-primary/60 text-xs font-semibold transition-all">
                  <Plus className="w-3 h-3" />
                  Create key
                </button>
              </div>

              <div className="space-y-2">
                {apiKeys.map((k, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl border border-border dark:border-white/10 surface-sunken"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Key className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <span className="text-sm font-semibold">{k.name}</span>
                        <code className="text-[11px] font-mono text-muted-foreground surface-subtle border border-border dark:border-white/10 px-1.5 py-0.5 rounded">
                          {k.key}
                        </code>
                      </div>
                      <div className="text-[10px] font-mono text-muted-foreground/70">
                        created {k.created} · last used {k.lastUsed}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-muted-foreground hover:text-red-400 transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-start gap-2 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-amber-200/80 leading-relaxed">
                  Keep your API keys secret. Rotate them if exposed. We never log or display full keys after creation.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* RIGHT — Notifications + Danger */}
        <div className="space-y-4 sm:space-y-6">
          {/* Notifications */}
          <ScrollAnimation animation="slide-in-right">
            <div className="glass rounded-2xl border border-border dark:border-white/10 p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-5">
                <Bell className="w-4 h-4 text-primary" />
                <h3 className="font-semibold">Notifications</h3>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Email alerts", desc: "Escalations & errors", icon: Mail, value: notifEmail, set: setNotifEmail },
                  { label: "Slack", desc: "Real-time updates", icon: MessageSquare, value: notifSlack, set: setNotifSlack },
                  { label: "SMS", desc: "Critical only", icon: Phone, value: notifSms, set: setNotifSms },
                  { label: "Weekly digest", desc: "Monday summary email", icon: Mail, value: weeklyDigest, set: setWeeklyDigest },
                ].map((n, i) => {
                  const Icon = n.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl border border-border dark:border-white/10"
                    >
                      <div className="w-8 h-8 rounded-lg surface-subtle border border-border dark:border-white/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium">{n.label}</div>
                        <div className="text-[10px] font-mono text-muted-foreground/70">
                          {n.desc}
                        </div>
                      </div>
                      <button
                        onClick={() => n.set(!n.value)}
                        className={`w-10 h-5 rounded-full relative transition-colors shrink-0 ${
                          n.value ? "bg-emerald-500/60" : "bg-white/10"
                        }`}
                        aria-label={`Toggle ${n.label}`}
                      >
                        <div
                          className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${
                            n.value ? "left-[22px]" : "left-0.5"
                          }`}
                        ></div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollAnimation>

          {/* Danger zone */}
          <ScrollAnimation animation="slide-in-right" delay={100}>
            <div className="glass rounded-2xl border border-red-500/20 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-4 h-4 text-red-400" />
                <h3 className="font-semibold text-red-400">Danger zone</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                Pausing your agent stops all automation. Deleting your workspace removes everything permanently.
              </p>
              <div className="space-y-2">
                <button className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-amber-500/30 hover:border-amber-500/60 bg-amber-500/5 text-amber-300 text-xs font-semibold transition-all">
                  Pause my agent
                </button>
                <button className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-red-500/30 hover:border-red-500/60 bg-red-500/5 text-red-300 text-xs font-semibold transition-all">
                  Delete workspace
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
