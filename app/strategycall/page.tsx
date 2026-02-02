"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Calendar, User, Mail, Phone, FileText, ArrowRight } from "lucide-react";

export default function StrategyCall() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
    website: "", // Honeypot field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "ratelimit">("idle");

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
        setFormData({ name: "", email: "", phone: "", notes: "", website: "" });
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
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary/20 mb-6">
              <Calendar className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium">Book Your Call</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Strategy Call
            </h1>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you to schedule your
              free automation strategy call.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in-up" delay={200}>
          <Card className="bg-card-gradient border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
              <CardDescription>
                Please provide your details so we can prepare for our call.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users, bots will fill it */}
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

                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                {/* Notes Field */}
                <div className="space-y-2">
                  <Label htmlFor="notes" className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    Notes
                  </Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Tell us about your automation needs, current challenges, or any questions you have..."
                    value={formData.notes}
                    onChange={handleChange}
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full text-lg py-6 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                </Button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 text-center">
                    Thank you! We'll be in touch soon to schedule your strategy call.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 text-center">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}
                {submitStatus === "ratelimit" && (
                  <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 text-center">
                    Too many requests. Please wait a moment before trying again.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </div>
  );
}
