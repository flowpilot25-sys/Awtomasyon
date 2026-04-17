"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Navigation, MobileNavigation } from "@/components/navigation";
import Link from "next/link";
import {
  Sprout,
  Zap,
  Cog,
  Rocket,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Clock,
  Target,
  Mail,
  Star,
  Sparkles,
  BarChart3,
  Shield,
  Brain,
  Lightbulb,
  User,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import AwtomasyonLogo from "@/public/Awtomasyon.png";
import Image from "next/image";
import { CurrencyProvider } from "@/components/currency-context";
import { useCurrency } from "@/components/currency-context";
import { convertPrice, formatPrice } from "@/components/currency-changer";
import { PricingCard } from "@/components/dynamic-pricing";
import { CustomAgentBuilder } from "@/components/custom-agent-builder";
import { BlogSection } from "@/components/blog-section";

const caseStudies = [
  {
    icon: Cog,
    company: "FCI London",
    problem: "Client inquiries and consultation bookings were managed manually across email, phone, and social media",
    solution: "Deployed an AI chatbot for instant client inquiries, automated appointment scheduling with calendar sync, and built a CRM pipeline that routes leads by service type",
    result: "60% fewer missed inquiries, 3x faster booking turnaround",
  },
  {
    icon: Target,
    company: "Linkage",
    problem: "Partner onboarding and deal tracking were scattered across spreadsheets and email threads",
    solution: "Built an automated partner onboarding flow with document collection, approval workflows, and a real-time deal tracker synced to their CRM and Slack notifications",
    result: "70% faster partner onboarding, zero lost deals from missed follow-ups",
  },
  {
    icon: Sparkles,
    company: "New Media Service",
    problem: "Social media scheduling, client reporting, and content approvals took hours of manual coordination each week",
    solution: "Automated content calendar management, built auto-generated performance reports from analytics APIs, and created a client approval pipeline with automated reminders",
    result: "10+ hours saved weekly, clients receive real-time campaign dashboards",
  },
  {
    icon: Rocket,
    company: "StartGrowSell",
    problem: "Leads from webinars, ads, and landing pages were not being followed up fast enough, losing potential sales",
    solution: "Built a multi-channel lead capture system with AI-powered lead scoring, automated email/SMS follow-up sequences, and CRM auto-updates triggered by user behavior",
    result: "45% increase in conversion rate, leads contacted within 2 minutes",
  },
  {
    icon: CheckCircle,
    company: "Premier Fitness",
    problem: "New member sign-ups, class bookings, and trainer scheduling were all done through phone calls and paper forms",
    solution: "Automated the entire member journey — online sign-up forms synced to billing, class booking with auto-confirmations, trainer schedule management, and renewal reminders via email and SMS",
    result: "80% less admin time, 30% increase in member retention",
  },
  {
    icon: Shield,
    company: "Hillman Company",
    problem: "Weekly reporting required pulling data from 5+ sources manually, leading to delays and inconsistencies",
    solution: "Built automated data pipelines that pull from all sources into a unified dashboard, with scheduled report generation and Slack alerts for KPI thresholds",
    result: "Reports generated in seconds instead of hours, 100% data accuracy",
  },
];

const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <CurrencyProvider>
      <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className=" rounded-lg">
                  <Image src={AwtomasyonLogo} alt="Awtomasyon Logo" className="w-14 h-14 rounded-full" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Awtomasyon
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Navigation />
            <MobileNavigation />
            <ThemeToggle />
            
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative px-4 sm:px-6 pt-28 pb-16 lg:pt-36 lg:pb-28 overflow-hidden"
      >
        {/* Grid + glow background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/20 rounded-full blur-[120px] animate-float"></div>
        <div
          className="absolute bottom-0 right-0 sm:right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-accent/15 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT — copy */}
          <div className="text-center lg:text-left">
            <ScrollAnimation animation="fade-in-up">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 glass rounded-full border border-primary/30 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium tracking-wide">AI Agents · Live & Working</span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={150}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.05] tracking-tight">
                Your business,
                <br />
                run by{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    AI agents.
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                    <path d="M1 5.5C50 2 150 2 299 5.5" stroke="url(#underline)" strokeWidth="2" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="underline" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="hsl(var(--primary))"/>
                        <stop offset="1" stopColor="hsl(var(--accent))"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={300}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                We deploy intelligent AI agents that handle your operations 24/7 — qualifying leads, answering customers, updating systems, and scaling your team without new hires.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={450}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center mb-12">
                <Link href="/strategycall" className="w-full sm:w-auto">
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full sm:w-auto text-base px-8 py-6 animate-pulse-glow text-white group"
                  >
                    Deploy Your First Agent
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="#services" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto text-base px-8 py-6 border-primary/30 bg-background/40 backdrop-blur hover:bg-primary/10 hover:border-primary/60 transition-all"
                  >
                    See Agents in Action
                  </Button>
                </a>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={600}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 sm:gap-x-8 gap-y-4 pt-6 border-t border-white/10">
                <div>
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">10×</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Faster Ops</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">24/7</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Always On</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">80%</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Less Manual Work</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* RIGHT — live AI agent panel */}
          <ScrollAnimation animation="fade-in-up" delay={300}>
            <div className="relative">
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/25 via-accent/15 to-transparent rounded-3xl blur-2xl"></div>

              <div className="relative glass rounded-2xl border border-white/10 p-4 sm:p-5 shadow-elegant backdrop-blur-xl overflow-hidden">
                {/* Animated scanline */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>

                {/* Panel header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                      <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-background animate-pulse"></span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold leading-tight">Awtomasyon Agent</div>
                      <div className="text-[10px] text-muted-foreground font-mono leading-tight">gpt-5 · thinking</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-green-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    <span>LIVE</span>
                  </div>
                </div>

                {/* Incoming task */}
                <div className="mb-4 p-3 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="text-[10px] uppercase tracking-wider text-primary/70 font-mono mb-1.5">Incoming</div>
                  <div className="text-sm leading-relaxed">
                    New lead <span className="text-primary font-semibold">@sarah.chen</span> filled out demo form — qualify & route.
                  </div>
                </div>

                {/* Reasoning chain */}
                <div className="space-y-2.5 mb-4">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono flex items-center gap-2">
                    <span>Reasoning</span>
                    <span className="flex-1 h-px bg-white/10"></span>
                  </div>

                  {/* Step 1 */}
                  <div className="flex items-start gap-2.5 text-sm" style={{ animation: "fade-in-up 0.5s ease-out 0.2s both" }}>
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="text-muted-foreground text-xs mb-1">Checking CRM for existing contact…</div>
                      <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[11px] font-mono max-w-full">
                        <Cog className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span className="text-cyan-400 shrink-0">search_crm</span>
                        <span className="text-muted-foreground truncate">(sarah.chen@…)</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-2.5 text-sm" style={{ animation: "fade-in-up 0.5s ease-out 0.6s both" }}>
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="text-muted-foreground text-xs mb-1">Enriching with company data + scoring intent…</div>
                      <div className="flex flex-wrap gap-1.5">
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[11px] font-mono">
                          <Target className="w-3 h-3 text-violet-400" />
                          <span className="text-violet-400">enrich_lead</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                          score: 92/100
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 — active */}
                  <div className="flex items-start gap-2.5 text-sm" style={{ animation: "fade-in-up 0.5s ease-out 1s both" }}>
                    <div className="w-4 h-4 shrink-0 mt-0.5 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
                    <div className="flex-1 min-w-0">
                      <div className="text-foreground text-xs mb-1">
                        Routing to senior AE<span className="inline-block w-1.5 h-3 bg-primary ml-0.5 align-middle animate-pulse"></span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[11px] font-mono">
                          <Users className="w-3 h-3 text-amber-400" />
                          <span className="text-amber-400">assign_owner</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[11px] font-mono">
                          <MessageSquare className="w-3 h-3 text-cyan-400" />
                          <span className="text-cyan-400">send_slack</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connected systems */}
                <div className="pt-3 border-t border-white/10">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-2">Connected Systems</div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { name: "HubSpot CRM", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
                      { name: "Gmail", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
                      { name: "Slack", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
                      { name: "Calendar", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
                      { name: "Stripe", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
                    ].map((sys, i) => (
                      <div key={i} className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md border ${sys.bg} text-[11px] font-mono ${sys.color}`}>
                        <span className="w-1 h-1 rounded-full bg-current"></span>
                        {sys.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section — Meet Your AI Team */}
      <section id="services" className="relative px-4 sm:px-6 py-16 sm:py-20 lg:py-32 bg-secondary/30 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"></div>

        <div className="relative max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary/20 mb-6">
                <Brain className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Your AI Workforce</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Meet the agents<br/>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  running your business.
                </span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Purpose-built AI agents that act like employees — not chatbots. Each one trained on your data, connected to your tools, and working 24/7.
              </p>
            </div>
          </ScrollAnimation>

          {/* Left = featured agent, Right = agent list */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* LEFT — Featured Agent (AI Employee) */}
            <ScrollAnimation animation="slide-in-left">
              <div className="relative h-full">
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent rounded-3xl blur-2xl"></div>

                <div className="relative h-full glass rounded-3xl border border-emerald-500/20 p-5 sm:p-8 backdrop-blur-xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

                  <div className="relative flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Featured · Working now
                      </div>
                    </div>

                    <div className="flex items-start gap-4 sm:gap-5 mb-6">
                      <div className="relative shrink-0">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-xl">
                          <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                        <span className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-400 border-[3px] border-background animate-pulse"></span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 leading-tight">AI Employee</h3>
                        <div className="text-sm font-mono text-emerald-400">Full-Stack Operator</div>
                      </div>
                    </div>

                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                      A digital team member who owns sales ops, finance, or HR <span className="text-foreground font-medium">end-to-end</span>. Gets onboarded like a real hire, learns your playbook, and delivers outcomes — not tasks.
                    </p>

                    {/* SOP note */}
                    <div className="flex items-start gap-3 mb-6 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                      <Lightbulb className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-emerald-100/80 leading-relaxed">
                        <span className="font-semibold text-emerald-300">Give us your SOP</span> — we'll align the agent to your exact process, tone, and decision rules. It works the way <span className="italic">you</span> work.
                      </p>
                    </div>

                    {/* Capability chips */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Owns KPIs", "CRM native", "Reports weekly", "Slack-native", "Learns your playbook"].map((s, i) => (
                        <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-emerald-500/5 border border-emerald-500/20 text-emerald-300/80">
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Live activity terminal */}
                    <div className="mt-auto rounded-xl bg-black/30 border border-white/5 overflow-hidden">
                      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-white/[0.02]">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                        </div>
                        <span className="text-[10px] text-muted-foreground/70 ml-2 font-mono">activity · live</span>
                      </div>
                      <div className="p-4 space-y-2 font-mono text-xs">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0" />
                          <span className="truncate">Closed 3 deals · updated HubSpot</span>
                          <span className="ml-auto text-[10px] text-muted-foreground/50 shrink-0">2m</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0" />
                          <span className="truncate">Sent weekly KPI report</span>
                          <span className="ml-auto text-[10px] text-muted-foreground/50 shrink-0">14m</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground">
                          <div className="w-3.5 h-3.5 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin shrink-0"></div>
                          <span className="truncate">Preparing Monday standup brief<span className="inline-block w-1 h-3 bg-emerald-400 ml-1 align-middle animate-pulse"></span></span>
                          <span className="ml-auto text-[10px] text-emerald-400/70 shrink-0">now</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* RIGHT — Agent list (vertical) */}
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: Cog,
                  name: "AI Automation",
                  role: "Workflow Engineer",
                  desc: "Executes multi-step workflows across your stack. No rules — just goals.",
                  accent: "from-cyan-500 to-blue-500",
                  text: "text-cyan-400",
                  border: "hover:border-cyan-500/40",
                  meta: "runs_24_7",
                },
                {
                  icon: Brain,
                  name: "AI Developer",
                  role: "Code Engineer",
                  desc: "Ships code, fixes bugs, writes tests, and deploys at machine speed.",
                  accent: "from-violet-500 to-fuchsia-500",
                  text: "text-violet-400",
                  border: "hover:border-violet-500/40",
                  meta: "+12 -4 · main.ts",
                },
                {
                  icon: MessageSquare,
                  name: "AI Virtual Assistant",
                  role: "Executive Support",
                  desc: "Inbox triage, scheduling, research & follow-ups — so you focus on decisions.",
                  accent: "from-amber-500 to-orange-500",
                  text: "text-amber-400",
                  border: "hover:border-amber-500/40",
                  meta: "inbox: 0",
                },
                {
                  icon: Target,
                  name: "AI Sales Agent",
                  role: "Lead Qualification & Outreach",
                  desc: "Scores leads, personalizes outreach, books meetings, nurtures deals.",
                  accent: "from-pink-500 to-rose-500",
                  text: "text-pink-400",
                  border: "hover:border-pink-500/40",
                  meta: "47 leads · 92%",
                },
                {
                  icon: BarChart3,
                  name: "AI Analyst",
                  role: "Data & Reporting",
                  desc: "Pulls data from every system, spots anomalies, delivers exec reports.",
                  accent: "from-indigo-500 to-blue-600",
                  text: "text-indigo-400",
                  border: "hover:border-indigo-500/40",
                  meta: "12 dashboards",
                },
              ].map((a, i) => (
                <ScrollAnimation key={i} animation="slide-in-right" delay={i * 80}>
                  <div className={`group relative flex items-center gap-4 p-4 rounded-2xl glass border border-white/10 ${a.border} backdrop-blur-xl transition-all duration-300 hover:translate-x-1`}>
                    <div className="relative shrink-0">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.accent} flex items-center justify-center shadow-lg`}>
                        <a.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-background animate-pulse"></span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mb-0.5">
                        <h3 className="font-semibold truncate text-sm sm:text-base">{a.name}</h3>
                        <span className={`text-[10px] font-mono ${a.text} truncate`}>
                          <span className="hidden sm:inline">· </span>{a.role}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2 sm:truncate">{a.desc}</p>
                    </div>

                    <div className="hidden sm:flex flex-col items-end gap-1 shrink-0">
                      <span className={`text-[10px] font-mono ${a.text}`}>{a.meta}</span>
                      <ArrowRight className={`w-4 h-4 ${a.text} opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all`} />
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Bottom CTA strip */}
          <ScrollAnimation animation="fade-in-up" delay={500}>
            <div className="mt-10 sm:mt-12 text-center">
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 font-mono px-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse mr-2 align-middle"></span>
                Need a custom agent? We build specialized ones for your industry.
              </p>
              <Link href="/strategycall">
                <Button variant="outline" className="border-primary/30 bg-background/40 backdrop-blur hover:bg-primary/10 hover:border-primary/60">
                  Design My AI Team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>


      {/* Service Packages */}
      <section id="pricing" className="px-4 sm:px-6 py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-12 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium">Our Packages</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Choose Your Plan
              </h2>
            </div>
          </ScrollAnimation>

          {/* Pricing: Starter AI Agent + Custom Builder */}
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 mb-8">

            {/* LEFT — Starter AI Agent ($20) */}
            <ScrollAnimation animation="slide-in-left" className="lg:col-span-2">
              <div className="relative h-full group">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl blur-2xl"></div>

                <div className="relative h-full glass rounded-3xl border border-primary/20 p-5 sm:p-8 backdrop-blur-xl overflow-hidden">
                  {/* Top gradient bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary"></div>

                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-[11px] font-mono text-primary uppercase tracking-wider mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    Starter · One Agent
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2">AI Agent</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    A single connected agent built for your workflow. No setup cost.
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">$25</span>
                    <span className="text-muted-foreground text-sm">/month</span>
                  </div>
                  <div className="text-xs font-mono text-emerald-400 mb-6 flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3" />
                    We cover the API tokens — no extra fees
                  </div>

                  {/* What's included */}
                  <div className="space-y-3 mb-6">
                    {[
                      { text: "1 dedicated AI agent", included: true },
                      { text: "Connects to your tools (CRM, Gmail, Slack, Sheets)", included: true },
                      { text: "Free connections — unlimited integrations", included: true },
                      { text: "Text-based reasoning & actions", included: true },
                      { text: "API tokens included (we cover them)", included: true },
                      { text: "Image generation", included: false },
                      { text: "Voice / speech capabilities", included: false },
                    ].map((f, i) => (
                      <div key={i} className={`flex items-start gap-2.5 text-sm ${!f.included ? "opacity-40" : ""}`}>
                        {f.included ? (
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        ) : (
                          <span className="w-4 h-4 rounded-full border border-muted-foreground/50 shrink-0 mt-0.5 flex items-center justify-center text-[10px] text-muted-foreground">×</span>
                        )}
                        <span className={f.included ? "text-foreground" : "text-muted-foreground line-through"}>{f.text}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/strategycall">
                    <Button variant="hero" size="lg" className="w-full text-white">
                      Deploy My Agent
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>

            {/* RIGHT — Custom AI Agent Builder */}
            <ScrollAnimation animation="slide-in-right" className="lg:col-span-3">
              <CustomAgentBuilder />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="results" className="px-4 sm:px-6 py-16 sm:py-20 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Real Results
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
                See how Awtomasyon has helped other businesses
              </p>
            </div>
          </ScrollAnimation>

          <div className="relative max-w-4xl mx-auto px-8 sm:px-0">
            {/* Carousel Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 sm:-translate-x-4 md:-translate-x-12 z-10 w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 sm:translate-x-4 md:translate-x-12 z-10 w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>

            {/* Carousel Slide */}
            <div className="overflow-hidden">
              {caseStudies.map((study, index) => {
                const StudyIcon = study.icon;
                return (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === activeSlide
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 absolute top-0 left-0 right-0 pointer-events-none translate-x-8"
                    }`}
                    style={{ display: index === activeSlide ? "block" : "none" }}
                  >
                    <Card className="bg-card shadow-card hover:shadow-elegant transition-smooth group">
                      <CardHeader>
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-smooth shrink-0">
                            <StudyIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                          </div>
                          <CardTitle className="text-lg sm:text-2xl">{study.company}</CardTitle>
                        </div>
                        <CardDescription className="text-base sm:text-lg">
                          <strong>Problem:</strong> {study.problem}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 sm:space-y-6">
                        <div className="text-base sm:text-lg">
                          <strong>Solution:</strong> {study.solution}
                        </div>
                        <div className="flex items-start gap-3 text-primary font-semibold text-base sm:text-lg">
                          <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" />
                          <span>Result: {study.result}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Pagination Bullets */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? "w-8 h-3 bg-primary"
                      : "w-3 h-3 bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* About Section */}
      <ScrollAnimation>
        <section id="about" className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"></div>
          </div>

          <div className="px-4 sm:px-6 relative">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <ScrollAnimation animation="fade-in-up">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
                    About Awtomasyon
                  </h2>
                </ScrollAnimation>
                <ScrollAnimation animation="fade-in-up" delay={200}>
                  <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                    A focused team helping founders and growing businesses run
                    smarter through automation
                  </p>
                </ScrollAnimation>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
                {/* Company Profile Card */}
                <ScrollAnimation animation="slide-in-left">
                  <div className="relative">
                    <div className="glass rounded-3xl p-6 sm:p-8 shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 group">
                      <div className="flex items-center mb-6 sm:mb-8">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-hero-gradient rounded-2xl flex items-center justify-center text-2xl sm:text-3xl text-white mr-4 sm:mr-6 shrink-0">
                          AW
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
                            Awtomasyon
                          </h3>
                          <p className="text-primary font-semibold text-base sm:text-lg">
                            Automation Specialists
                          </p>
                        </div>
                      </div>

                      <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                        We build smart, reliable automation systems that
                        eliminate repetitive work and connect your tools — so
                        you can focus on growth.
                      </p>

                      <div className="space-y-6">
                        <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                          <Users className="w-6 h-6 mr-4 text-primary" />
                          <span className="text-lg">
                            Small, focused team of experts
                          </span>
                        </div>
                        <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                          <Target className="w-6 h-6 mr-4 text-primary" />
                          <span className="text-lg">
                            End-to-end automation solutions
                          </span>
                        </div>
                        <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                          <Rocket className="w-6 h-6 mr-4 text-primary" />
                          <span className="text-lg">
                            Setup, hosting, monitoring & support
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* What Makes Us Different */}
                <ScrollAnimation animation="slide-in-right">
                  <div className="space-y-6 sm:space-y-8">
                    <div className="glass rounded-2xl p-6 sm:p-8 hover:shadow-glow transition-all duration-500 group">
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mr-4 sm:mr-6 group-hover:bg-primary/20 transition-colors shrink-0">
                          <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-semibold">
                          What Makes Us Different
                        </h3>
                      </div>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        We don't just "set up a Zap" — we design thoughtful,
                        long-lasting systems that actually save time, reduce
                        errors, and scale with your business.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                      <div className="glass rounded-xl p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300 group">
                        <Cog className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-2 sm:mb-3 animate-spin-slow" />
                        <h4 className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg">
                          Full Service
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          Strategy to delivery
                        </p>
                      </div>
                      <div className="glass rounded-xl p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300 group">
                        <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-2 sm:mb-3 animate-spark" />
                        <h4 className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg">Reliable</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          Never left in the dark
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-6 sm:p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                      <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 flex items-center">
                        <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 mr-3 text-primary group-hover:scale-110 transition-transform shrink-0" />
                        Our Mission
                      </h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        To help small businesses operate like big ones — without
                        needing a full-time tech team.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Team — Human Agents Directory */}
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <div className="mt-16 sm:mt-20">
                  <div className="text-center mb-10 sm:mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary/20 mb-6">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      <span className="text-sm font-medium tracking-wide">Human Agents · Online</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                      The humans<br />
                      <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                        behind the agents.
                      </span>
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                      We're a small, hands-on team that designs, trains, and deploys every agent. You talk to real people — not bots.
                    </p>
                  </div>

                  {/* Grouped by role */}
                  {[
                    {
                      groupLabel: "Leadership",
                      groupMeta: "founders · strategy",
                      members: [
                        {
                          initials: "GM",
                          name: "Gabriel Maturan",
                          role: "Co-Founder & CTO",
                          handle: "gabriel",
                          desc: "Leads strategy, architecture, and every automation implementation.",
                          skills: ["Strategy", "Architecture", "Leadership"],
                          status: "Building",
                          accent: "from-cyan-500 to-blue-500",
                          text: "text-cyan-400",
                          border: "border-cyan-500/30",
                          bg: "bg-cyan-500/10",
                        },
                        {
                          initials: "JK",
                          name: "Junaid Kingwell",
                          role: "Co-Founder & CEO",
                          handle: "junaid",
                          desc: "Drives technology decisions, product direction, and platform growth.",
                          skills: ["Product", "Growth", "Marketing", "Partnerships"],
                          status: "Scaling",
                          accent: "from-emerald-500 to-teal-500",
                          text: "text-emerald-400",
                          border: "border-emerald-500/30",
                          bg: "bg-emerald-500/10",
                        },
                      ],
                    },
                    {
                      groupLabel: "Development Team",
                      groupMeta: "engineering · shipping",
                      members: [
                        {
                          initials: "TM",
                          name: "Tim",
                          role: "AI Engineer",
                          handle: "tim",
                          desc: "Designs and ships AI systems — from agent orchestration to LLM-powered backends.",
                          skills: ["AI Systems", "LLMs", "APIs"],
                          status: "Shipping",
                          accent: "from-violet-500 to-fuchsia-500",
                          text: "text-violet-400",
                          border: "border-violet-500/30",
                          bg: "bg-violet-500/10",
                        },
                        {
                          initials: "MS",
                          name: "Moris",
                          role: "AI Automation",
                          handle: "moris",
                          desc: "Builds AI-powered automations and intelligent workflow solutions.",
                          skills: ["Agents", "Automation", "Workflows"],
                          status: "Training",
                          accent: "from-amber-500 to-orange-500",
                          text: "text-amber-400",
                          border: "border-amber-500/30",
                          bg: "bg-amber-500/10",
                        },
                      ],
                    },
                  ].map((group, gi) => (
                    <div key={gi} className={gi === 0 ? "mb-12" : ""}>
                      {/* Group label */}
                      <div className="flex items-center gap-4 mb-5 max-w-5xl mx-auto">
                        <div className="flex items-center gap-2.5">
                          <span className="text-[10px] font-mono text-primary/70 uppercase tracking-[0.2em]">/ {String(gi + 1).padStart(2, "0")}</span>
                          <h4 className="text-lg md:text-xl font-semibold">{group.groupLabel}</h4>
                        </div>
                        <span className="text-[11px] font-mono text-muted-foreground/60">{group.groupMeta}</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
                      </div>

                      {/* Members grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                        {group.members.map((member, i) => (
                          <ScrollAnimation key={i} animation="fade-in-up" delay={i * 100}>
                            <div className="group relative h-full">
                              <div className={`absolute -inset-px bg-gradient-to-br ${member.accent} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}></div>

                              <div className="relative h-full glass rounded-2xl border border-white/10 hover:border-white/20 p-5 sm:p-6 backdrop-blur-xl overflow-hidden transition-all duration-300">
                                {/* Top accent bar */}
                                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${member.accent} opacity-60`}></div>

                                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                                  {/* Avatar with initials */}
                                  <div className="relative shrink-0">
                                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${member.accent} flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg`}>
                                      {member.initials}
                                    </div>
                                    <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-green-400 border-2 border-background animate-pulse"></span>
                                  </div>

                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-base sm:text-lg font-bold leading-tight">{member.name}</h4>
                                    <div className={`text-xs font-mono ${member.text} mb-1`}>
                                      @{member.handle}
                                    </div>
                                    <div className="text-xs text-muted-foreground">{member.role}</div>
                                  </div>

                                  {/* Status pill */}
                                  <div className={`hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full ${member.bg} border ${member.border} text-[10px] font-mono ${member.text} uppercase tracking-wider shrink-0`}>
                                    <span className="w-1 h-1 rounded-full bg-current animate-pulse"></span>
                                    {member.status}
                                  </div>
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                  {member.desc}
                                </p>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                                  {member.skills.map((s, j) => (
                                    <span key={j} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/10 text-muted-foreground">
                                      {s}
                                    </span>
                                  ))}
                                  <span className="ml-auto text-[10px] font-mono text-muted-foreground/60 flex items-center gap-1">
                                    <span className="w-1 h-1 rounded-full bg-green-400"></span>
                                    human · verified
                                  </span>
                                </div>
                              </div>
                            </div>
                          </ScrollAnimation>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
              </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Ready to Deploy AI Agents CTA Section */}
      <section id="contact" className="relative px-4 sm:px-6 py-16 sm:py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          <ScrollAnimation animation="fade-in-up">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary/30 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium tracking-wide">Ready when you are</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ready to deploy<br/>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  your AI agents?
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Your first agent goes live in days — not months. Pick a plan, send us your SOP, and watch it start working.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-in" delay={200}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link href="/strategycall" className="w-full sm:w-auto">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-6 animate-pulse-glow text-white group"
                >
                  Deploy Your First Agent
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#services" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-6 border-primary/30 bg-background/40 backdrop-blur hover:bg-primary/10 hover:border-primary/60"
                >
                  See the AI Team
                </Button>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-10 sm:py-12 bg-secondary/30 text-center border-t border-border/50">
        <p className="text-foreground text-sm sm:text-lg">
          © 2024 Awtomasyon — AI agents for the next generation of founders.
        </p>
      </footer>
    </div>
    </CurrencyProvider>
  );
};

export default Index;

