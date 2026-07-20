"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Navigation, MobileNavigation } from "@/components/navigation";
import Link from "next/link";
import Image from "next/image";
import AwtomasyonLogo from "@/public/Awtomasyon.png";
import {
  ArrowRight,
  PhoneMissed,
  ClipboardList,
  Repeat,
  Layers,
  UserX,
  Phone,
  FileText,
  CalendarCheck,
  MessageSquare,
  CheckCircle,
  Clock,
  Gauge,
  Smile,
  Shield,
} from "lucide-react";

const problems = [
  {
    icon: PhoneMissed,
    title: "Missed after-hours calls",
    desc: "Accident victims call when they need help — often nights and weekends, when no one is at the desk.",
  },
  {
    icon: ClipboardList,
    title: "Slow client intake",
    desc: "Manually collecting accident details takes time, and every delay is a chance for the client to call another firm.",
  },
  {
    icon: Repeat,
    title: "Manual follow-ups",
    desc: "Reminders, document requests, and check-ins get forgotten when staff are stretched thin.",
  },
  {
    icon: Layers,
    title: "Administrative overload",
    desc: "Your team spends hours on repetitive paperwork instead of moving cases forward.",
  },
  {
    icon: UserX,
    title: "Lost potential cases",
    desc: "Every unanswered call or slow response is a case that quietly goes to a competitor.",
  },
];

const solutions = [
  {
    icon: Phone,
    name: "AI Receptionist",
    role: "Answers Every Call",
    desc: "Answers every incoming call 24/7, handles common questions, and transfers urgent callers to your team.",
    accent: "from-cyan-500 to-blue-500",
    text: "text-cyan-400",
    border: "hover:border-cyan-500/40",
  },
  {
    icon: FileText,
    name: "AI Intake Assistant",
    role: "Captures Case Details",
    desc: "Collects accident details, qualifies the case, and records everything straight into your system.",
    accent: "from-violet-500 to-fuchsia-500",
    text: "text-violet-400",
    border: "hover:border-violet-500/40",
  },
  {
    icon: CalendarCheck,
    name: "AI Consultation Scheduler",
    role: "Books Consultations",
    desc: "Schedules consultations automatically, syncs calendars, and sends confirmations — no back-and-forth.",
    accent: "from-emerald-500 to-teal-500",
    text: "text-emerald-400",
    border: "hover:border-emerald-500/40",
  },
  {
    icon: MessageSquare,
    name: "AI Client Follow-up Assistant",
    role: "Keeps Clients Engaged",
    desc: "Sends reminders, requests documents, and follows up with prospective clients so nothing slips.",
    accent: "from-amber-500 to-orange-500",
    text: "text-amber-400",
    border: "hover:border-amber-500/40",
  },
];

const benefits = [
  { icon: CheckCircle, title: "Never miss a potential client" },
  { icon: Clock, title: "24/7 call answering" },
  { icon: Gauge, title: "Faster intake process" },
  { icon: Layers, title: "Reduced administrative workload" },
  { icon: Smile, title: "Better client experience" },
  { icon: Shield, title: "Consistent, reliable coverage" },
];

const integrations = [
  "Clio",
  "Filevine",
  "MyCase",
  "Litify",
  "Microsoft 365",
  "Google Workspace",
];

export default function PersonalInjuryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-lg">
              <Image
                src={AwtomasyonLogo}
                alt="Awtomasyon Logo"
                className="w-14 h-14 rounded-full"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Awtomasyon
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Navigation />
            <MobileNavigation />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-4 sm:px-6 pt-28 pb-16 lg:pt-36 lg:pb-28 overflow-hidden">
        {/* Grid + glow background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/20 rounded-full blur-[120px] animate-float"></div>
        <div
          className="absolute bottom-0 right-0 sm:right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-accent/15 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fade-in-up">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 glass rounded-full border border-primary/30 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium tracking-wide">
                Built for Personal Injury Law Firms
              </span>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-up" delay={150}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              AI Employees for{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Personal Injury Law Firms
              </span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-up" delay={300}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Capture more cases by answering every call, qualifying every lead,
              and scheduling consultations automatically.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-up" delay={450}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link href="/strategycall" className="w-full sm:w-auto">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-6 animate-pulse-glow text-white group"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#solutions" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-6 border-primary/30 bg-background/40 backdrop-blur hover:bg-primary/10 hover:border-primary/60 transition-all"
                >
                  Hire an AI Employee
                </Button>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Common Problems */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20 lg:py-28 bg-secondary/30 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"></div>

        <div className="relative max-w-6xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                The problems costing you cases
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every missed call and slow follow-up is a potential client who
                calls the next firm on the list.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <ScrollAnimation key={i} animation="fade-in-up" delay={i * 80}>
                  <div className="h-full glass rounded-2xl border border-white/10 hover:border-destructive/30 p-6 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-destructive" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section
        id="solutions"
        className="relative px-4 sm:px-6 py-16 sm:py-20 lg:py-28 overflow-hidden"
      >
        <div className="relative max-w-6xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary/20 mb-6">
                <span className="text-sm font-medium">Your AI Employees</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Meet the team that{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  captures every case.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized AI employees that each do one job well — working
                around the clock for your firm.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <ScrollAnimation key={i} animation="zoom-in" delay={i * 80}>
                  <div
                    className={`group h-full glass rounded-2xl border border-white/10 ${s.border} p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative shrink-0">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-background animate-pulse"></span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-lg leading-tight">
                          {s.name}
                        </h3>
                        <span className={`text-xs font-mono ${s.text}`}>
                          {s.role}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20 lg:py-28 bg-secondary/30 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"></div>

        <div className="relative max-w-6xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                What your firm gains
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <ScrollAnimation key={i} animation="fade-in-up" delay={i * 70}>
                  <div className="h-full flex items-center gap-4 glass rounded-2xl border border-white/10 hover:border-primary/30 p-5 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{b.title}</span>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Works with the tools you already use
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Your AI Employees connect to your existing case management and
              productivity software.
            </p>
          </ScrollAnimation>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {integrations.map((name, i) => (
              <ScrollAnimation key={name} animation="scale-in" delay={i * 60}>
                <div className="glass rounded-2xl border border-white/10 hover:border-primary/40 px-6 py-4 transition-all duration-300 hover:-translate-y-1">
                  <span className="font-semibold text-base sm:text-lg">
                    {name}
                  </span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-4 sm:px-6 py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>

        <div className="relative max-w-3xl mx-auto text-center">
          <ScrollAnimation animation="fade-in-up">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 glass rounded-full border border-primary/30 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium tracking-wide">
                Ready when you are
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Stop losing cases to{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                missed calls.
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              See how an AI Employee answers every call, qualifies every lead,
              and books consultations for your firm — 24/7.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-in" delay={200}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link href="/strategycall" className="w-full sm:w-auto">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-6 animate-pulse-glow text-white group"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/strategycall" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-6 border-primary/30 bg-background/40 backdrop-blur hover:bg-primary/10 hover:border-primary/60"
                >
                  Hire an AI Employee
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-10 sm:py-12 bg-secondary/30 text-center border-t border-border/50">
        <p className="text-foreground text-sm sm:text-lg">
          © 2026 Awtomasyon — AI Employees for growing businesses.
        </p>
      </footer>
    </div>
  );
}
