"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Mic,
  Image as ImageIcon,
  Send,
  Sparkles,
  ArrowRight,
  Check,
  Wrench,
} from "lucide-react";

type Capability = {
  id: string;
  name: string;
  desc: string;
  price: number;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  text: string;
  border: string;
};

const capabilities: Capability[] = [
  {
    id: "voice",
    name: "Voice AI",
    desc: "Real-time speech in & out. Phone calls, voice assistants, dictation.",
    price: 79,
    icon: Mic,
    accent: "from-pink-500 to-rose-500",
    text: "text-pink-400",
    border: "border-pink-500/40",
  },
  {
    id: "image",
    name: "Image AI",
    desc: "Generate or analyze images. Product mockups, visual QA, design.",
    price: 49,
    icon: ImageIcon,
    accent: "from-violet-500 to-fuchsia-500",
    text: "text-violet-400",
    border: "border-violet-500/40",
  },
  {
    id: "send",
    name: "Send AI",
    desc: "Outbound messaging — email, SMS, WhatsApp, Slack, personalized at scale.",
    price: 39,
    icon: Send,
    accent: "from-amber-500 to-orange-500",
    text: "text-amber-400",
    border: "border-amber-500/40",
  },
  {
    id: "other",
    name: "Bring Your Own Tokens / Stack",
    desc: "Have your own API keys, running system, or custom setup? We'll plug the agent into it.",
    price: 0,
    icon: Wrench,
    accent: "from-cyan-500 to-blue-500",
    text: "text-cyan-400",
    border: "border-cyan-500/40",
  },
];

const BASE_PRICE = 25;

export function CustomAgentBuilder() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const addons = capabilities.filter((c) => selected.includes(c.id));
  const addonTotal = addons.reduce((sum, c) => sum + c.price, 0);
  const total = BASE_PRICE + addonTotal;
  const hasCustom = selected.includes("other");

  return (
    <div className="relative h-full group">
      <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-primary/10 to-transparent rounded-3xl blur-2xl"></div>

      <div className="relative h-full glass rounded-3xl border border-accent/20 p-5 sm:p-8 backdrop-blur-xl overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-primary to-accent"></div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-[11px] font-mono text-accent uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            Build Your Own · Custom
          </div>
          <div className="text-[10px] font-mono text-muted-foreground">
            configurator
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-2">Custom AI Agent</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Start with the $25 base and add capabilities. Pay only for what you use.
        </p>

        {/* Options */}
        <div className="space-y-2.5 mb-6">
          {capabilities.map((cap) => {
            const isSelected = selected.includes(cap.id);
            return (
              <button
                key={cap.id}
                onClick={() => toggle(cap.id)}
                className={`w-full text-left relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border transition-all duration-200 ${
                  isSelected
                    ? `${cap.border} bg-white/[0.04]`
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.03]"
                }`}
              >
                {/* Checkbox */}
                <div
                  className={`w-5 h-5 rounded-md border-2 shrink-0 flex items-center justify-center transition-all ${
                    isSelected
                      ? `bg-gradient-to-br ${cap.accent} border-transparent`
                      : "border-white/20"
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                </div>

                {/* Icon */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${cap.accent} flex items-center justify-center shrink-0 shadow-md ${
                    isSelected ? "opacity-100" : "opacity-60"
                  }`}
                >
                  <cap.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>

                {/* Label + desc */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-0.5">
                    <span className="font-semibold text-sm">{cap.name}</span>
                    {cap.id === "other" && (
                      <span className={`text-[10px] font-mono ${cap.text}`}>free integration</span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground line-clamp-2 sm:truncate">{cap.desc}</div>
                </div>

                {/* Price */}
                <div className="shrink-0 text-right">
                  {cap.price > 0 ? (
                    <div className={`text-sm font-bold font-mono ${cap.text}`}>
                      +${cap.price}
                      <span className="text-[10px] text-muted-foreground font-normal ml-0.5">/mo</span>
                    </div>
                  ) : (
                    <div className={`text-[10px] font-mono ${cap.text}`}>included</div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Total summary */}
        <div className="rounded-xl bg-black/30 border border-white/5 p-4 mb-5 font-mono text-xs">
          <div className="flex items-center justify-between mb-2 text-muted-foreground">
            <span>Base AI Agent</span>
            <span className="text-foreground">${BASE_PRICE}/mo</span>
          </div>
          {addons.filter((a) => a.price > 0).map((a) => (
            <div key={a.id} className={`flex items-center justify-between mb-2 ${a.text}`}>
              <span>+ {a.name}</span>
              <span>${a.price}/mo</span>
            </div>
          ))}
          {hasCustom && (
            <div className="flex items-center justify-between mb-2 text-cyan-400">
              <span>+ Your tokens / stack</span>
              <span>free</span>
            </div>
          )}
          <div className="h-px bg-white/10 my-3"></div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground uppercase tracking-wider text-[10px]">Total</span>
            <div className="text-right">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ${total}
              </span>
              <span className="text-muted-foreground ml-1">/mo</span>
              {hasCustom && (
                <div className="text-[10px] text-cyan-400 mt-0.5">+ your tokens / stack</div>
              )}
            </div>
          </div>
        </div>

        <Link href="/strategycall">
          <Button variant="hero" size="lg" className="w-full text-white">
            {selected.length > 0 ? `Build My Agent — $${total}/mo` : "Configure & Book Call"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
        <p className="text-[11px] text-center text-muted-foreground mt-3 font-mono">
          All add-ons require payment · tokens covered by us
        </p>
      </div>
    </div>
  );
}
