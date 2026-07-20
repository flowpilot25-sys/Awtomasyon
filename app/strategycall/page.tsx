"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollAnimation } from "@/components/scroll-animation";
import {
  User,
  Mail,
  Phone,
  FileText,
  ArrowRight,
  Sparkles,
  Bot,
  CheckCircle,
  Cpu,
  Terminal,
  Zap,
  Shield,
} from "lucide-react";

export default function StrategyCall() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
    website: "", // Honeypot field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error" | "ratelimit"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/strategy-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          notes: "",
          website: "",
        });
      } else if (response.status === 429) {
        setSubmitStatus("ratelimit");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px] animate-orb-drift pointer-events-none"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px] animate-orb-drift pointer-events-none"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="relative max-w-4xl mx-auto py-20 px-4 sm:px-6">
        {/* Header */}
        <ScrollAnimation animation="blur-in">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-[11px] font-mono text-primary uppercase tracking-wider mb-6 hover:border-primary/60 transition-all">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Deploy Console · Online
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-[1.05] tracking-tight">
              Deploy your{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  AI agent.
                </span>
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              Tell us what you need an agent to do. We&apos;ll reply within{" "}
              <span className="text-foreground font-semibold">24 hours</span>{" "}
              with a deployment plan — scoped, priced, and ready to ship.
            </p>
          </div>
        </ScrollAnimation>

        {/* Trust strip */}
        <ScrollAnimation animation="fade-in-up" delay={150}>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-10 text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-primary" />
              <span>24h response</span>
            </div>
            <span className="text-foreground/20">·</span>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3 h-3 text-primary" />
              <span>no commitment</span>
            </div>
            <span className="text-foreground/20">·</span>
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3 h-3 text-primary" />
              <span>free scoping call</span>
            </div>
          </div>
        </ScrollAnimation>

        {/* Form Card — console style */}
        <ScrollAnimation animation="scale-in" delay={250}>
          <div className="relative group">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl blur-2xl animate-pulse-glow"></div>

            <div className="relative glass rounded-3xl border border-primary/20 backdrop-blur-xl overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary"></div>

              {/* Terminal-style header bar */}
              <div className="flex items-center justify-between px-5 sm:px-8 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
                  </div>
                  <Terminal className="w-3.5 h-3.5 text-muted-foreground ml-3" />
                  <span className="text-[11px] font-mono text-muted-foreground">
                    agent-deploy.sh
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                    secure
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-8">
                {/* Section heading */}
                <div className="flex items-start gap-3 sm:gap-4 mb-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shrink-0">
                    <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl sm:text-2xl font-bold leading-tight">
                      Agent Briefing
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Tell your new agent who you are and what it should do.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Name + Email pair */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <ScrollAnimation animation="fade-in-up" delay={350}>
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground"
                        >
                          <User className="w-3.5 h-3.5 text-primary" />
                          <span>
                            Name <span className="text-primary">*</span>
                          </span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-black/30 border-white/10 focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all h-11"
                        />
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-in-up" delay={420}>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground"
                        >
                          <Mail className="w-3.5 h-3.5 text-primary" />
                          <span>
                            Email <span className="text-primary">*</span>
                          </span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-black/30 border-white/10 focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all h-11"
                        />
                      </div>
                    </ScrollAnimation>
                  </div>

                  {/* Phone */}
                  <ScrollAnimation animation="fade-in-up" delay={490}>
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground"
                      >
                        <Phone className="w-3.5 h-3.5 text-primary" />
                        <span>
                          Phone <span className="text-primary">*</span>
                        </span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-black/30 border-white/10 focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all h-11"
                      />
                    </div>
                  </ScrollAnimation>

                  {/* Agent brief (notes) */}
                  <ScrollAnimation animation="fade-in-up" delay={560}>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor="notes"
                          className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground"
                        >
                          <FileText className="w-3.5 h-3.5 text-primary" />
                          <span>Agent Brief</span>
                        </Label>
                        <span className="text-[10px] font-mono text-muted-foreground/60">
                          optional · the more detail, the faster we scope
                        </span>
                      </div>
                      <Textarea
                        id="notes"
                        name="notes"
                        placeholder="What should the agent do? e.g. &quot;Respond to inbound leads in our Gmail inbox, qualify them against 5 questions, book qualified ones into my Calendly, and log everything to HubSpot.&quot;"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={6}
                        className="bg-black/30 border-white/10 focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all resize-none font-mono text-sm leading-relaxed"
                      />

                      {/* Suggestion chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="text-[10px] font-mono text-muted-foreground/60 mr-1 self-center">
                          quick picks:
                        </span>
                        {[
                          "Lead qualification",
                          "Customer support",
                          "Content ops",
                          "Reporting",
                          "Custom",
                        ].map((chip) => (
                          <button
                            key={chip}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                notes: prev.notes
                                  ? `${prev.notes}\n- ${chip}`
                                  : `I'd like an agent for: ${chip}\n\n`,
                              }))
                            }
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-muted-foreground hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all"
                          >
                            + {chip}
                          </button>
                        ))}
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* Submit */}
                  <ScrollAnimation animation="fade-in-up" delay={640}>
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full text-base py-6 text-white group relative overflow-hidden"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin"></span>
                            <span className="font-mono">
                              Deploying request…
                            </span>
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            <span>Deploy My Agent Request</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        )}
                      </Button>
                      <p className="text-[11px] text-center text-muted-foreground/70 mt-3 font-mono">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5 align-middle"></span>
                        Secure · no spam · human reply within 24h
                      </p>
                    </div>
                  </ScrollAnimation>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="animate-bounce-in p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-emerald-300 font-semibold text-sm">
                          Request deployed.
                        </div>
                        <div className="text-emerald-200/80 text-xs mt-0.5 font-mono">
                          We&apos;ll reply within 24h with your agent&apos;s
                          scoping plan.
                        </div>
                      </div>
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="animate-fade-in p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                      <span className="font-mono">[err]</span> Something went
                      wrong. Please try again, or email us directly.
                    </div>
                  )}
                  {submitStatus === "ratelimit" && (
                    <div className="animate-fade-in p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-sm">
                      <span className="font-mono">[rate_limited]</span> Too many
                      requests. Please wait a moment before trying again.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Process strip */}
        <ScrollAnimation animation="fade-in-up" delay={400}>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                step: "01",
                title: "You brief us",
                desc: "Fill the form — the more detail the better.",
              },
              {
                step: "02",
                title: "We scope it",
                desc: "Within 24h you get a deployment plan + quote.",
              },
              {
                step: "03",
                title: "Agent goes live",
                desc: "Most agents ship in days, not months.",
              },
            ].map((s, i) => (
              <ScrollAnimation key={i} animation="fade-in-up" delay={450 + i * 100}>
                <div className="glass rounded-2xl border border-white/10 hover:border-primary/30 p-4 transition-all hover:-translate-y-1 group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono text-primary/70 uppercase tracking-[0.2em]">
                      / {s.step}
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent"></div>
                  </div>
                  <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                    {s.title}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {s.desc}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
