"use client";

import { PageHeader } from "@/components/dashboard/page-header";
import { ScrollAnimation } from "@/components/scroll-animation";
import {
  CreditCard,
  Sparkles,
  CheckCircle2,
  Download,
  TrendingUp,
  Mic,
  Image as ImageIcon,
  Send,
  Zap,
  ArrowRight,
} from "lucide-react";

const addons = [
  {
    name: "Voice AI",
    icon: Mic,
    desc: "Real-time speech in & out",
    price: 79,
    active: false,
    accent: "from-pink-500 to-rose-500",
  },
  {
    name: "Image AI",
    icon: ImageIcon,
    desc: "Generate & analyze images",
    price: 49,
    active: true,
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "Send AI",
    icon: Send,
    desc: "Outbound email, SMS, WhatsApp",
    price: 39,
    active: true,
    accent: "from-amber-500 to-orange-500",
  },
];

const invoices = [
  { id: "INV-0024", date: "Mar 1, 2026", amount: "$113", status: "paid" },
  { id: "INV-0023", date: "Feb 1, 2026", amount: "$113", status: "paid" },
  { id: "INV-0022", date: "Jan 1, 2026", amount: "$64", status: "paid" },
  { id: "INV-0021", date: "Dec 1, 2025", amount: "$25", status: "paid" },
];

export default function BillingPage() {
  const base = 25;
  const addonTotal = addons.filter((a) => a.active).reduce((s, a) => s + a.price, 0);
  const total = base + addonTotal;

  return (
    <div>
      <PageHeader
        eyebrow="Billing · plan"
        title="Your plan & usage"
        description="Manage your subscription, add capabilities, and view invoices. No hidden fees — tokens are always on us."
        action={
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass border border-primary/30 hover:border-primary/60 text-sm font-semibold transition-all">
            <Download className="w-3.5 h-3.5" />
            Download invoices
          </button>
        }
      />

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        {/* Current plan */}
        <ScrollAnimation animation="blur-in" className="lg:col-span-2">
          <div className="relative group h-full">
            <div className="hidden dark:block absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl blur-2xl animate-pulse-glow"></div>
            <div className="relative h-full glass rounded-2xl border border-primary/20 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary"></div>

              <div className="p-5 sm:p-7">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-[10px] font-mono text-primary uppercase tracking-widest mb-3">
                      <Sparkles className="w-2.5 h-2.5" />
                      Current plan
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold">Custom AI Agent</h3>
                    <div className="text-sm text-muted-foreground mt-1">
                      Base + 2 add-ons · billed monthly
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-none">
                      ${total}
                    </div>
                    <div className="text-xs font-mono text-muted-foreground mt-1">/ month</div>
                  </div>
                </div>

                {/* Line items */}
                <div className="rounded-xl surface-sunken border border-border/60 dark:border-white/5 p-4 font-mono text-xs space-y-2.5 mb-5">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Base AI Agent</span>
                    <span className="text-foreground">${base}/mo</span>
                  </div>
                  {addons.filter((a) => a.active).map((a) => (
                    <div key={a.name} className="flex items-center justify-between text-violet-300">
                      <span>+ {a.name}</span>
                      <span>${a.price}/mo</span>
                    </div>
                  ))}
                  <div className="h-px bg-white/10 my-2"></div>
                  <div className="flex items-center justify-between">
                    <span className="uppercase tracking-widest text-[10px] text-muted-foreground">Total</span>
                    <span className="text-base font-bold">${total}/mo</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 mb-5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>API tokens covered · no overage charges ever</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold shadow-lg hover:scale-105 transition-all">
                    Upgrade plan
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass border border-border dark:border-white/10 hover:border-white/20 text-sm font-semibold transition-all">
                    Manage payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Usage */}
        <ScrollAnimation animation="slide-in-right">
          <div className="h-full glass rounded-2xl border border-border dark:border-white/10 p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp className="w-4 h-4 text-primary" />
              <h3 className="font-semibold">This month&apos;s usage</h3>
            </div>

            <div className="space-y-4">
              {[
                { label: "Agent actions", used: 8247, limit: "unlimited", tone: "emerald" },
                { label: "API tokens", used: "2.4M", limit: "covered by us", tone: "cyan" },
                { label: "Integrations", used: 4, limit: "unlimited", tone: "violet" },
                { label: "SOPs indexed", used: 5, limit: "unlimited", tone: "amber" },
              ].map((u, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-muted-foreground">{u.label}</span>
                    <span className="text-xs font-mono font-semibold">{u.used}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${
                        u.tone === "emerald"
                          ? "from-emerald-500 to-teal-500"
                          : u.tone === "cyan"
                          ? "from-cyan-500 to-blue-500"
                          : u.tone === "violet"
                          ? "from-violet-500 to-fuchsia-500"
                          : "from-amber-500 to-orange-500"
                      }`}
                      style={{ width: `${Math.floor(Math.random() * 40 + 40)}%` }}
                    ></div>
                  </div>
                  <div className="text-[10px] font-mono text-muted-foreground/60 mt-1">
                    {u.limit}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-border dark:border-white/10 text-center">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                <Zap className="w-3 h-3" />
                No limits · no surprises
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Add-ons */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest font-mono">
            / Add-ons
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-3 sm:gap-4">
          {addons.map((addon, i) => {
            const Icon = addon.icon;
            return (
              <ScrollAnimation key={i} animation="scale-in" delay={i * 80}>
                <div className={`group relative h-full glass rounded-2xl border p-5 transition-all hover:-translate-y-1 ${
                  addon.active
                    ? "border-primary/30"
                    : "border-border dark:border-white/10 hover:border-white/20"
                }`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${addon.accent} flex items-center justify-center shadow-lg ${addon.active ? "" : "opacity-60"}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    {addon.active && (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[9px] font-mono text-emerald-400 uppercase tracking-widest">
                        <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span>
                        active
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold mb-1">{addon.name}</h3>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{addon.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">
                      ${addon.price}
                      <span className="text-[10px] font-mono text-muted-foreground ml-1">/mo</span>
                    </span>
                    {addon.active ? (
                      <button className="text-[11px] font-mono text-red-400/70 hover:text-red-400 uppercase tracking-wider">
                        remove
                      </button>
                    ) : (
                      <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-primary/30 hover:border-primary/60 bg-primary/5 text-[11px] font-semibold text-primary transition-all">
                        + Add
                      </button>
                    )}
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>

      {/* Invoices */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest font-mono">
            / Invoices
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4"></div>
        </div>

        <ScrollAnimation animation="fade-in-up">
          <div className="glass rounded-2xl border border-border dark:border-white/10 overflow-hidden">
            <div className="hidden md:grid grid-cols-4 gap-4 px-5 py-3 border-b border-border dark:border-white/10 surface-raised text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              <div>Invoice</div>
              <div>Date</div>
              <div>Amount</div>
              <div className="text-right">Action</div>
            </div>
            {invoices.map((inv, i) => (
              <div
                key={i}
                className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 px-5 py-3.5 border-b border-border/60 dark:border-white/5 last:border-0 hover:surface-raised transition-colors items-center"
              >
                <div className="flex items-center gap-2">
                  <CreditCard className="w-3.5 h-3.5 text-muted-foreground hidden md:block" />
                  <span className="font-mono text-xs">{inv.id}</span>
                </div>
                <div className="text-xs text-muted-foreground">{inv.date}</div>
                <div className="font-semibold text-sm">{inv.amount}</div>
                <div className="col-span-2 md:col-span-1 flex items-center justify-end gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                    <CheckCircle2 className="w-3 h-3" />
                    {inv.status}
                  </span>
                  <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
