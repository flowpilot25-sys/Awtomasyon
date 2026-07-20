"use client";

import { useEffect, useRef, useState } from "react";

type AnimationType =
  | "fade-in"
  | "fade-in-up"
  | "fade-in-down"
  | "slide-in-left"
  | "slide-in-right"
  | "scale-in"
  | "zoom-in"
  | "blur-in"
  | "bounce-in";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
}

const hiddenStateByAnimation: Record<AnimationType, string> = {
  "fade-in": "opacity-0 translate-y-4",
  "fade-in-up": "opacity-0 translate-y-8",
  "fade-in-down": "opacity-0 -translate-y-8",
  "slide-in-left": "opacity-0 -translate-x-8",
  "slide-in-right": "opacity-0 translate-x-8",
  "scale-in": "opacity-0 scale-95",
  "zoom-in": "opacity-0 scale-75",
  "blur-in": "opacity-0 blur-md translate-y-4",
  "bounce-in": "opacity-0 scale-50",
};

export function ScrollAnimation({
  children,
  animation = "fade-in-up",
  delay = 0,
  once = true,
  threshold = 0.1,
  className = "",
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, once, threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        isVisible
          ? `animate-${animation} opacity-100 translate-y-0 translate-x-0 scale-100 blur-0`
          : hiddenStateByAnimation[animation]
      } ${className}`}
    >
      {children}
    </div>
  );
}


