"use client";

import { useState } from "react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShoppingCart,
  Instagram,
  Palette,
  Clock,
  ArrowRight,
  Code2,
  Layers,
} from "lucide-react";

const builds = [
  {
    icon: ShoppingCart,
    name: "Webshop AI Ops",
    client: "Furniture e-commerce · B2B + B2C",
    tagline: "One operator screen that runs the whole webshop.",
    summary:
      "A new WooCommerce order lands and the agent pings the right rep on WhatsApp and email, walks the deal through every GHL pipeline stage, and answers the customer in the same thread they ordered in.",
    mechanics: [
      "Watches WooCommerce for new orders and notifies the assigned rep on WhatsApp and email at once — no rep is the bottleneck",
      "Auto-moves the GHL deal through preparing → shipping → received as each step completes, so the pipeline reflects reality without manual drags",
      "Replies to customers in-thread: order status, ETA, tracking, and confirmation when the package lands",
      "Runs B2B and B2C lanes off the same screen — a wholesale order and a retail order get identical precision without separate tooling",
    ],
    stack: ["OpenClaw", "WooCommerce", "GoHighLevel", "WhatsApp API"],
    outcome:
      "New orders trigger the right rep instantly, the pipeline stays honest without manual moves, and customers get answered where they already are.",
    accent: "from-cyan-500 to-blue-500",
    text: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Instagram,
    name: "Instagram Growth Engine",
    client: "Medical kit supplier · UAE market",
    tagline: "Quiet B2B exposure that turns into kit orders.",
    summary:
      "A cron fires every minute, pulls one fresh Instagram profile matching the target intent, logs it to Sheets, and drops a contextual comment written for that specific post.",
    mechanics: [
      "Every minute the agent pulls a new audience-matched profile — UAE doctor, clinic, or hospital — by hashtag, bio keyword, geo, and follower signals",
      "Claude Sonnet writes a comment that reads as a real reply to that specific post, not a template blast",
      "Puppeteer drives the crawl through Decodo residential IPs, so the browsing pattern reads as a person on a phone in-region rather than a datacenter bot",
      "Every profile and outcome lands in Google Sheets, so the lead list builds itself and stays queryable",
    ],
    stack: ["Claude Sonnet", "Puppeteer", "Decodo", "Google Sheets", "Cron"],
    outcome:
      "Steady, audience-matched exposure on autopilot — the Sheet fills with leads and DMs open into B2B conversations without anyone clicking through profiles by hand.",
    accent: "from-violet-500 to-fuchsia-500",
    text: "text-violet-400",
    border: "border-violet-500/30",
    bg: "bg-violet-500/10",
  },
  {
    icon: Palette,
    name: "AI-Recolored Product Previews",
    client: "Furniture e-commerce · live color preview",
    tagline: "Shoppers see the product in their color, in seconds.",
    summary:
      "Tap a swatch and the product re-renders in that finish. Behind it, a PHP + n8n pipeline routes render requests to an image model and caches every result.",
    mechanics: [
      "On swatch tap, PHP packages a render request with the base product image plus the chosen swatch, and n8n routes it to Gemini Image",
      "Rendered previews are cached per product × swatch pair — the second customer who tries the same combo gets it instantly, and the model only fires on new combinations",
      "Every swatch tap, preview view, and cart-add is tracked per color",
    ],
    stack: ["Gemini Image", "n8n", "PHP", "Cloudflare Cache"],
    outcome:
      "Conversions lift on color-variant SKUs, and the brand finally has data on which finishes the market actually wants — not just which ones they stocked.",
    accent: "from-amber-500 to-orange-500",
    text: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
  },
  {
    icon: Clock,
    name: "Workforce Intelligence",
    client: "Distributed team · attendance + productivity",
    tagline: "Where the team is actually getting work done.",
    summary:
      "WebWork tracks every clock-in, clock-out, and active hour. It lands in Sheets automatically, then AI reads each person's pattern and surfaces what managers should look at.",
    mechanics: [
      "WebWork runs as the source of truth for clock-ins, clock-outs, and active-hour tracking across the team",
      "Attendance and activity auto-export into Google Sheets on a schedule, so the raw data is always queryable with no manual export",
      "AI reads per-person patterns and flags anomalies — a usual 9am clock-in slipping to 10:30am three days running",
      "Insight lands where managers already are: weekly summaries and team-level focus heatmaps",
    ],
    stack: ["WebWork", "Google Sheets", "Apps Script", "Claude"],
    outcome:
      "Managers stop guessing at productivity and start seeing patterns — surfaced weekly, without anyone building a report.",
    accent: "from-emerald-500 to-teal-500",
    text: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
  },
];

export function PortfolioSection() {
  const [active, setActive] = useState(0);
  const build = builds[active];
  const BuildIcon = build.icon;

  return (
    <section
      id="portfolio"
      className="relative px-4 sm:px-6 py-16 sm:py-20 lg:py-32 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none animate-orb-drift"></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-orb-drift"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto">
        <ScrollAnimation animation="blur-in">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary/20 mb-6 hover:border-primary/50 transition-all">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Under the Hood</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Systems we&apos;ve<br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                actually shipped.
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Real APIs, queues, and webhooks — not chatbot demos. Built to keep running when humans aren&apos;t watching.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* LEFT — build selector */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {builds.map((b, i) => {
              const Icon = b.icon;
              const isActive = i === active;
              return (
                <ScrollAnimation key={b.name} animation="slide-in-left" delay={i * 100}>
                  <button
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`group w-full text-left flex items-center gap-4 p-4 rounded-2xl glass border backdrop-blur-xl transition-all duration-300 ${
                      isActive
                        ? `${b.border} shadow-elegant lg:translate-x-2`
                        : "border-white/10 hover:border-white/20 hover:lg:translate-x-1"
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${b.accent} flex items-center justify-center shadow-lg shrink-0 transition-transform ${
                        isActive ? "scale-105" : "opacity-70 group-hover:opacity-100"
                      }`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-sm sm:text-base truncate ${isActive ? "" : "text-muted-foreground"}`}>
                        {b.name}
                      </h3>
                      <p className="text-[11px] font-mono text-muted-foreground/70 truncate">
                        {b.client}
                      </p>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 shrink-0 transition-all ${
                        isActive ? `${b.text} opacity-100` : "opacity-0 group-hover:opacity-50"
                      }`}
                    />
                  </button>
                </ScrollAnimation>
              );
            })}
          </div>

          {/* RIGHT — active build detail */}
          <div className="lg:col-span-8">
            <ScrollAnimation animation="fade-in-up">
              <div className="relative">
                <div
                  className={`absolute -inset-4 bg-gradient-to-br ${build.accent} opacity-20 rounded-3xl blur-2xl transition-all duration-500`}
                ></div>

                <div className="relative glass rounded-3xl border border-white/10 p-5 sm:p-8 backdrop-blur-xl overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${build.accent}`}></div>

                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${build.accent} flex items-center justify-center shrink-0 shadow-lg`}
                      >
                        <BuildIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                          {build.name}
                        </h3>
                        <div className="text-[11px] font-mono text-muted-foreground mt-1">
                          {build.client}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                        In Production
                      </span>
                    </div>
                  </div>

                  {/* Tagline + summary */}
                  <p className={`text-base sm:text-lg font-medium mb-3 ${build.text}`}>
                    {build.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                    {build.summary}
                  </p>

                  {/* How it works */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Layers className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
                        How it works
                      </span>
                      <span className="flex-1 h-px bg-white/10"></span>
                    </div>
                    <div className="space-y-2.5">
                      {build.mechanics.map((m, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span
                            className={`shrink-0 mt-0.5 w-5 h-5 rounded-md ${build.bg} border ${build.border} flex items-center justify-center text-[10px] font-mono ${build.text}`}
                          >
                            {i + 1}
                          </span>
                          <p className="text-sm text-muted-foreground leading-relaxed">{m}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {build.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Outcome */}
                  <div className={`rounded-2xl bg-black/30 border ${build.border} p-4 sm:p-5`}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${build.accent}`}></div>
                      <span className={`text-[10px] font-mono ${build.text} uppercase tracking-wider`}>
                        Outcome
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                      {build.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollAnimation animation="fade-in-up" delay={300}>
          <div className="mt-10 sm:mt-12 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 font-mono px-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse mr-2 align-middle"></span>
              Got a workflow this complex? We&apos;ve probably built something like it.
            </p>
            <Link href="/strategycall">
              <Button
                variant="outline"
                className="border-primary/30 bg-background/40 backdrop-blur hover:bg-primary/10 hover:border-primary/60"
              >
                Tell Us What You&apos;re Building
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
