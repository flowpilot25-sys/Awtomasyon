"use client";

import { ScrollAnimation } from "@/components/scroll-animation";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function PageHeader({ eyebrow, title, description, action }: PageHeaderProps) {
  return (
    <ScrollAnimation animation="blur-in">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
        <div className="min-w-0">
          {eyebrow && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-[10px] font-mono text-primary uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              {eyebrow}
            </div>
          )}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">
              {description}
            </p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </ScrollAnimation>
  );
}
