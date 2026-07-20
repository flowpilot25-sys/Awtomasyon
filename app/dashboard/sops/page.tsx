"use client";

import { useState } from "react";
import { PageHeader } from "@/components/dashboard/page-header";
import { ScrollAnimation } from "@/components/scroll-animation";
import {
  FileText,
  Upload,
  Search,
  MoreVertical,
  CheckCircle2,
  Clock,
  Eye,
  Edit3,
  Trash2,
  Plus,
  FileUp,
} from "lucide-react";

const sops = [
  {
    title: "Lead Qualification Playbook",
    desc: "How to score and qualify inbound leads based on company size, intent, and budget.",
    version: "v2.4",
    updated: "2 days ago",
    words: 1842,
    status: "active",
    tags: ["sales", "qualification"],
  },
  {
    title: "Email Response Templates",
    desc: "Tone, structure, and approved phrasing for outbound + reply emails.",
    version: "v1.8",
    updated: "1 week ago",
    words: 2104,
    status: "active",
    tags: ["email", "tone"],
  },
  {
    title: "Calendar Booking Rules",
    desc: "Availability windows, buffer times, and what to do on conflicts.",
    version: "v1.2",
    updated: "3 weeks ago",
    words: 624,
    status: "active",
    tags: ["calendar", "scheduling"],
  },
  {
    title: "CRM Field Mapping",
    desc: "Which CRM fields to update, when, and from what source.",
    version: "v3.1",
    updated: "5 days ago",
    words: 1256,
    status: "active",
    tags: ["hubspot", "data"],
  },
  {
    title: "Escalation Playbook",
    desc: "When to escalate to a human — thresholds, signals, and handoff procedure.",
    version: "v1.0",
    updated: "1 month ago",
    words: 812,
    status: "draft",
    tags: ["safety", "human"],
  },
];

export default function SOPsPage() {
  const [dragActive, setDragActive] = useState(false);

  return (
    <div>
      <PageHeader
        eyebrow="SOPs · training data"
        title="Standard Operating Procedures"
        description="These documents teach your agent how to work the way you work. Upload, edit, and version your playbooks."
        action={
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold shadow-lg hover:scale-105 transition-all">
            <Plus className="w-4 h-4" />
            New SOP
          </button>
        }
      />

      {/* Upload dropzone */}
      <ScrollAnimation animation="fade-in-up">
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragActive(false);
          }}
          className={`relative mb-8 rounded-2xl border-2 border-dashed p-6 sm:p-10 text-center transition-all cursor-pointer ${
            dragActive
              ? "border-primary/60 bg-primary/5"
              : "border-border dark:border-white/10 hover:border-primary/40 surface-raised"
          }`}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <FileUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-semibold">Drop a document or click to upload</div>
              <div className="text-xs text-muted-foreground mt-1">
                Supports PDF, DOCX, MD, TXT · up to 20MB · your agent will index it within minutes
              </div>
            </div>
            <button className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg glass border border-primary/30 text-sm font-semibold hover:border-primary/60 transition-all">
              <Upload className="w-3.5 h-3.5" />
              Choose files
            </button>
          </div>
        </div>
      </ScrollAnimation>

      {/* Search + filters */}
      <ScrollAnimation animation="fade-in-up" delay={100}>
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <div className="flex-1 min-w-[240px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search SOPs…"
              className="w-full h-10 pl-9 pr-3 rounded-lg surface-sunken border border-border dark:border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none text-sm transition-all"
            />
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono">
            {["All", "Active", "Draft", "Archived"].map((f, i) => (
              <button
                key={i}
                className={`px-3 py-2 rounded-lg border transition-all ${
                  i === 0
                    ? "bg-primary/10 border-primary/30 text-primary"
                    : "border-border dark:border-white/10 text-muted-foreground hover:border-white/20 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* SOP list */}
      <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
        {sops.map((sop, i) => (
          <ScrollAnimation key={i} animation="scale-in" delay={i * 80}>
            <div className="group relative h-full">
              <div className="absolute -inset-px bg-gradient-to-br from-primary/20 to-accent/10 opacity-0 group-hover:opacity-40 rounded-2xl blur-lg transition-opacity duration-500"></div>
              <div className="relative h-full glass rounded-2xl border border-border dark:border-white/10 hover:border-primary/30 p-5 transition-all hover:-translate-y-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold leading-tight truncate">{sop.title}</h3>
                      <div className="text-[10px] font-mono text-muted-foreground mt-0.5 flex items-center gap-2">
                        <span>{sop.version}</span>
                        <span className="text-muted-foreground/40">·</span>
                        <span>{sop.words} words</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-7 h-7 rounded-lg hover:bg-white/5 flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                  {sop.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {sop.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded-md surface-subtle border border-border dark:border-white/10 text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-border dark:border-white/10">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
                    {sop.status === "active" ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 uppercase tracking-wider">indexed</span>
                      </>
                    ) : (
                      <>
                        <Clock className="w-3 h-3 text-amber-400" />
                        <span className="text-amber-400 uppercase tracking-wider">draft</span>
                      </>
                    )}
                    <span className="text-muted-foreground/40">·</span>
                    <span>{sop.updated}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-muted-foreground hover:text-red-400 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
