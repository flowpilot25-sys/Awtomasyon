"use client";

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
} from "lucide-react";
import AwtomasyonLogo from "@/public/Awtomasyon.png";
import Image from "next/image";
import { CurrencyProvider } from "@/components/currency-context";
import { useCurrency } from "@/components/currency-context";
import { convertPrice, formatPrice } from "@/components/currency-changer";
import { PricingCard } from "@/components/dynamic-pricing";
import { BlogSection } from "@/components/blog-section";

const Index = () => {
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
        className="relative px-6 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <ScrollAnimation animation="fade-in-up">
            <div className="animate-float mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium">Automation Services</span>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-up" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
                Save Time
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Eliminate Repetition
              </span>
              <br/>
               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
Scale Your Business              </span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-up" delay={400}>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
             At Awtomasyon, we build intelligent automation & integration systems that work 24/7

              <span className="text-primary font-semibold">
                {" "}
               — connecting your tools, freeing your team, and letting you focus on growth
              </span>
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-in" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" >
              <Link href="https://form.jotform.com/252194204772456" target="_blank" rel="noopener noreferrer">
              <Button
              
                variant="hero"
                size="lg"
                className="text-lg px-10 py-6 animate-pulse-glow text-white"
              >
                Book a Free Automation Call
                <ArrowRight className="w-5 h-5" />
              </Button>
              </Link>
              {/* <div className="flex items-center gap-2 text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm">Trusted by 50+ businesses</span>
              </div> */}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                What We Do
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
We design, build and maintain automation systems that integrate your business tools, streamline workflows, and boost your team’s productivity by up to 10×                {/* <span className="text-primary font-semibold">
                  {" "}
                  Zapier, Make (Integromat), n8n, AI agents, and fully hosted backend
                  flows
                </span>
              </p>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Awtomasyon handles everything — planning, setup, hosting,
                monitoring, and support.
              </p> */}
              </p>
            </div>
          </ScrollAnimation>

          <div className="flex md:flex-row flex-wrap items-center justify-center gap-8">
            {[
              {
                icon: Clock,
                title: "Workflow Automation",
                desc: "Custom workflows built to connect your apps, systems and processes.",
                delay: 0,
              },
              {
                icon: Target,
                title: "AI-Powered Workflows",
                desc: " Intelligent automations for data extraction, summarization, decision-making and reporting.",
                delay: 100,
              },
              {
                icon: Cog,
                title: "Custom Integrations & Backend Automation",
                desc: "API, database and server-side automation built to scale.",
                delay: 200,
              },
              {
                icon: CheckCircle,
                title: "Business Operations Automation",
                desc: " From CRM syncing to lead routing to customer engagement, we automate the backbone of your operations.",
                delay: 300,
              },
            ].map((service, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-in-up"
                delay={service.delay}
              >
                <Card className="bg-card-gradient border-0 shadow-card hover:shadow-elegant transition-smooth group hover:scale-105 w-96 h-72">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                      <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary/20 mb-6">
                <Users className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium">Our Team – Experts in Automation & Integration</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
Our engineers are not just coders — they are Automation Specialists and AI Integration Engineers who design systems              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
 connect platforms and build intelligent workflows that stand the test of time              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Automation Specialists",
                desc:  "built workflows, APIs, pipelines.",
                delay: 0,
              },
              {
                icon: TrendingUp,
                title: "AI Integration Engineers",
                desc: "designing AI-powered automations, decision engines and smart agents.",
                delay: 100,
              },
              {
                icon: Brain,
                title: "Continuous learning",
                desc: "we stay ahead of tech so your systems do too.",
                delay: 200,
              },
            ].map((item, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-in-up"
                delay={item.delay}
              >
                <Card className="bg-card-gradient border-0 shadow-card hover:shadow-elegant transition-smooth group hover:scale-105 h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                      <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fade-in-up" delay={300}>
            <div className="mt-12 text-center">
              <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
                <p className="text-lg md:text-xl text-muted-foreground">
                  When you hire Awtomasyon, you're not just getting a developer — you're getting an{" "}
                  <span className="text-primary font-semibold">AI-first automation partner.</span>
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Why Choose Awtomasyon Section */}
      <section className="px-6 py-20 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary/20 mb-6">
                <Lightbulb className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Why Choose Awtomasyon?
              </h2>
            </div>
          </ScrollAnimation>

          <div className="flex md:flex-row flex-wrap items-center justify-center gap-8">
            {[
              {
                icon: Rocket,
                title: "Efficiency First",
                desc: "We reduce hours of manual work into minutes through intelligent automation.",
                delay: 0,
              },
              {
                icon: Brain,
                title: "Intelligent Automation",
                desc: "We don’t just link your apps — we give your operations the power to think, act and evolve.",
                delay: 100,
              },
              {
                icon: Shield,
                title: "Scalable & Reliable Systems",
                desc: "Built for growth, designed to last.",
                delay: 200,
              },
              {
                icon: Users,
                title: "Dedicated Experts",
                desc: "You’ll get a focused team that knows your business and your goals.",
                delay: 300,
              },
              {
                icon: TrendingUp,
                title: "Continuous Innovation",
                desc: "Our engineers evolve your automations so you stay ahead.",
                delay: 400,
              },
            ].map((benefit, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-in-up"
                delay={benefit.delay}
              >
                <Card className="bg-card-gradient border-0 shadow-card hover:shadow-elegant transition-smooth group hover:scale-105 w-96 h-72">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                      <benefit.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {benefit.desc}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section id="pricing" className="px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium">Our Packages</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Choose Your Plan
              </h2>
            </div>
          </ScrollAnimation>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
            <PricingCard
              title="Starter Automation Package"
              usdPrice={699}
              description="Perfect for small businesses beginning their automation journey"
              features={[
                "1 Dedicated Automation Developer",
                "15-20 hours of automation development",
                "Basic workflow setup & integrations",
                "Light AI enhancements",
                "Bug fixes + minor updates",
                "Weekly progress updates",
              ]}
              featureDetails={[
                "1 Dedicated Automation Developer — fully focused on your automation needs",
                "Up to 15–20 hours of automation development per month",
                "Basic workflow setup (operations, CRM, leads, notifications, reporting)",
                "Light AI enhancements (summarization, routing, extraction)",
                "Integration between essential tools",
                "Bug fixes + minor updates to keep systems running smoothly",
                "Weekly progress updates to keep you informed",
              ]}
              bestFor={[
                "Small teams",
                "Early-stage startups",
                "Businesses trying automation for the first time",
              ]}
              whyItConverts={[
                "Low risk",
                "Low cost",
                "Clear and simple",
                "Easy entry point",
              ]}
              badge="MOST POPULAR"
              badgeColor="from-cyan-500 to-lime-500"
              icon={<Zap className="w-8 h-8 text-white" />}
              gradient="from-cyan-500 to-lime-500"
              buttonText="Get Free Trial 7 Days"
              buttonHref="https://form.jotform.com/252194204772456"
              popular={true}
            />

            <PricingCard
              title="Growth Automation Package"
              usdPrice={1499}
              description="Designed for businesses that need consistent automation & integrations"
              features={[
                "1 Automation Developer + 1 Project Manager",
                "40 hours of automation work",
                "Advanced workflow design",
                "AI-powered automations",
                "Custom API integrations",
                "Priority support (2hr response)",
                "Monthly automation report",
              ]}
              featureDetails={[
                "1 Automation Developer + 1 Project Manager (part-time for oversight + planning)",
                "Up to 40 hours of automation & integration work per month",
                "Advanced workflow design (multi-step, cross-department, data pipelines)",
                "AI-powered automations (document processing, smart routing, AI agents)",
                "Custom API integrations tailored to your business needs",
                "System optimization & performance monitoring",
                "Priority support with responses within 2 hours",
                "Monthly automation report tracking progress and metrics",
              ]}
              bestFor={[
                "Companies growing fast",
                "Agencies with recurring tasks",
                "Businesses with multiple tools or systems",
              ]}
              whyItConverts={[
                "Adds PM oversight = higher perceived quality",
                "Solves more complex tasks",
                "Businesses feel 'taken care of'",
                "Ideal mid-tier 'sweet spot' for revenue",
              ]}
              icon={<Sprout className="w-8 h-8 text-white" />}
              gradient="from-teal-500 to-cyan-500"
              buttonText="Get Free Trial 7 Days"
              buttonHref="https://form.jotform.com/252194204772456"
            />

            <PricingCard
              title="Automation Ops Team (AOT)"
              usdPrice={3499}
              description="Full-service automation & AI operations team for scaling companies"
              features={[
                "Full team: Senior Engineer + Dev + PM + AI Specialist",
                "90 hours of development per month",
                "Enterprise-grade automation architecture",
                "AI automation systems & agents",
                "Custom backend automation",
                "Dedicated Slack channel",
                "On-call support (business hours)",
                "Documentation + SOPs",
                "Quarterly strategy planning",
              ]}
              featureDetails={[
                "1 Senior Automation Engineer + 1 Automation Developer + 1 Project Manager + 1 AI Specialist (shared)",
                "Up to 90 hours of development per month",
                "Enterprise-grade automation architecture built to scale",
                "AI automation systems (agents, decision layers, custom logic)",
                "Custom backend automation (APIs, databases, pipelines)",
                "Unlimited workflow optimization for peak performance",
                "Dedicated Slack channel for instant communication",
                "On-call support during business hours",
                "Documentation + SOPs for all implementations",
                "Security-first implementation approach",
                "Quarterly automation strategy planning sessions",
              ]}
              bestFor={[
                "Large teams that rely on automation",
                "Operations-heavy businesses",
                "Companies replacing internal dev hires",
                "Startups scaling beyond basic tools",
              ]}
              whyItConverts={[
                "Reads like a 'done-for-you tech department'",
                "Makes clients feel they're buying a team, not hours",
                "Perfect for long-term contracts",
                "Lets you charge premium without resistance",
              ]}
              badge="ENTERPRISE"
              badgeColor="from-cyan-600 to-lime-600"
              icon={<Shield className="w-8 h-8 text-white" />}
              gradient="from-cyan-600 via-teal-600 to-lime-600"
              buttonText="Get Free Trial 7 Days"
              buttonHref="https://form.jotform.com/252194204772456"
              enterprise={true}
            />
          </div>

          {/* Custom Package Note */}
          <div className="max-w-4xl mx-auto mt-8 mb-16">
            <ScrollAnimation animation="fade-in-up" delay={300}>
              <div className="text-center">
                <div className="glass rounded-xl p-6">
                  <p className="text-muted-foreground text-lg">
                    💬 Custom enterprise or AI agent development packages available upon request.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary/20 mb-6">
                <Star className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium">Client Reviews</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Client Reviews
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <Card className="bg-card-gradient border-0 shadow-card hover:shadow-elegant transition-smooth hover:scale-105 h-full">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "Awtomasyon helped us connect our CRM, email system, and Slack using Make and n8n. What used to take 3 hours a day now runs automatically!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Carla D.</p>
                      <p className="text-sm text-muted-foreground">Operations Lead, SaaS Company</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={100}>
              <Card className="bg-card-gradient border-0 shadow-card hover:shadow-elegant transition-smooth hover:scale-105 h-full">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "They built a full AI workflow that generates reports, summarizes data, and sends updates to our clients. Worth every peso."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Rico M.</p>
                      <p className="text-sm text-muted-foreground">Founder, Digital Agency</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={200}>
              <Card className="bg-card-gradient border-0 shadow-card hover:shadow-elegant transition-smooth hover:scale-105 h-full">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "Their devs know automation inside out — and they're constantly learning. It feels like having an in-house AI team."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Anne T.</p>
                      <p className="text-sm text-muted-foreground">E-commerce Owner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      

      {/* Use Cases */}
      <section id="results" className="px-6 py-20 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Real Results
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                See how Awtomasyon has helped other businesses
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <ScrollAnimation animation="slide-in-left">
              <Card className="bg-card shadow-card hover:shadow-elegant transition-smooth group h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Startup CRM</CardTitle>
                  </div>
                  <CardDescription className="text-lg">
                    <strong>Problem:</strong> Leads were getting lost between
                    Typeform and CRM
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-lg">
                    <strong>Solution:</strong> Built workflow using Make + AI
                    routing logic to assign leads by category and alert sales
                    via Discord
                  </div>
                  <div className="flex items-center gap-3 text-primary font-semibold text-lg">
                    <TrendingUp className="w-6 h-6" />
                    <span>
                      Result: Saved ~5 hours per week, 40% faster follow-ups
                    </span>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Case Study 2 */}
            <ScrollAnimation animation="slide-in-right">
              <Card className="bg-card shadow-card hover:shadow-elegant transition-smooth group h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">E-commerce Brand</CardTitle>
                  </div>
                  <CardDescription className="text-lg">
                    <strong>Problem:</strong> Manual order updates and customer
                    replies
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-lg">
                    <strong>Solution:</strong> Created backend system to sync
                    orders + AI agent to auto-reply to tracking requests via
                    email
                  </div>
                  <div className="flex items-center gap-3 text-primary font-semibold text-lg">
                    <TrendingUp className="w-6 h-6" />
                    <span>
                      Result: 80% less manual work, improved response time and
                      customer satisfaction
                    </span>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Skool Community Section */}
      <section id="community" className="px-6 py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-primary/20 mb-6">
                <Rocket className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium">Community</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Start, Grow, and Automate Your Business?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                Join our Skool community where entrepreneurs, creators, and business owners come together to share proven strategies, tools, and real-world lessons that actually work.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-up" delay={200}>
            <div className="glass rounded-3xl p-8 md:p-12 shadow-elegant hover:shadow-glow transition-all duration-500">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
                  Get access to:
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Actionable Business Growth Frameworks</h4>
                  <p className="text-muted-foreground">Proven strategies to scale your business efficiently</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Exclusive Community Discussions</h4>
                  <p className="text-muted-foreground">Connect with like-minded entrepreneurs and creators</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Step-by-Step Guidance</h4>
                  <p className="text-muted-foreground">Start, grow, and sell smarter with expert guidance</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-8">
                  Let's build something amazing together.
                </p>
                
                <Link
                  href="https://www.skool.com/startgrowsell-3532/about?ref=8b298a49c2544545832ae27af9b05365"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="hero"
                    size="lg"
                    className="text-lg px-6 py-6 animate-pulse-glow text-white sm:text-base md:text-lg"
                  >
                    <span className="hidden sm:inline">Click here to join us now: Join the Skool Community</span>
                    <span className="sm:hidden">Join Skool Community</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section */}
      <ScrollAnimation>
        <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"></div>
          </div>

          <div className="px-6 relative">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <ScrollAnimation animation="fade-in-up">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
                    About Awtomasyon
                  </h2>
                </ScrollAnimation>
                <ScrollAnimation animation="fade-in-up" delay={200}>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                    A focused team helping founders and growing businesses run
                    smarter through automation
                  </p>
                </ScrollAnimation>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                {/* Company Profile Card */}
                <ScrollAnimation animation="slide-in-left">
                  <div className="relative">
                    <div className="glass rounded-3xl p-8 shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 group">
                      <div className="flex items-center mb-8">
                        <div className="w-20 h-20 bg-hero-gradient rounded-2xl flex items-center justify-center text-3xl text-white mr-6">
                          AW
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-1">
                            Awtomasyon
                          </h3>
                          <p className="text-primary font-semibold text-lg">
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
                  <div className="space-y-8">
                    <div className="glass rounded-2xl p-8 hover:shadow-glow transition-all duration-500 group">
                      <div className="flex items-center mb-6">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mr-6 group-hover:bg-primary/20 transition-colors">
                          <Brain className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-2xl font-semibold">
                          What Makes Us Different
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        We don't just "set up a Zap" — we design thoughtful,
                        long-lasting systems that actually save time, reduce
                        errors, and scale with your business.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 group">
                        <Cog className="w-10 h-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <h4 className="font-semibold mb-2 text-lg">
                          Full Service
                        </h4>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          Strategy to delivery
                        </p>
                      </div>
                      <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 group">
                        <Zap className="w-10 h-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <h4 className="font-semibold mb-2 text-lg">Reliable</h4>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          Never left in the dark
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                      <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <Lightbulb className="w-7 h-7 mr-3 text-primary group-hover:scale-110 transition-transform" />
                        Our Mission
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        To help small businesses operate like big ones — without
                        needing a full-time tech team.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Team Structure */}
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <div className="mt-20">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
                    Our Team
                  </h3>
                  <p className="text-lg text-center mb-12 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    We're a focused, hands-on automation team that brings together strategy,
                    execution, communication, and growth. Here's who makes the magic happen
                  </p>

                  {/* Leadership */}
                  <div className="mb-16">
                    <h4 className="text-xl md:text-2xl font-semibold mb-8 text-center text-primary">
                      Leadership
                    </h4>
                    <div className=" max-w-3xl mx-auto">
                      {/* Gabriel */}
                      <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
                        <div className="w-16 h-16 bg-hero-gradient rounded-2xl flex items-center justify-center text-2xl text-white mb-4 mx-auto">
                          GM
                        </div>
                        <h4 className="text-xl font-semibold text-center mb-2">
                          Gabriel Maturan
                        </h4>
                        <p className="text-primary text-center font-medium mb-3">
                          Co-Founder & CTO
                        </p>
                        <p className="text-sm text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors">
                          Leads strategy and oversees all automation implementations
                        </p>
                        <p className="text-sm text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors">
                          Vision, leadership, and architecture
                        </p>
                      </div>

                     
                    </div>
                  </div>

                  {/* Sales & Marketing */}
                  <div className="mb-16">
                    <h4 className="text-xl md:text-2xl font-semibold mb-8 text-center text-primary">
                      Sales & Marketing
                    </h4>
                    <div className=" max-w-3xl mx-auto">
                      {/* Sales Lead */}
                      <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-2xl text-white mb-4 mx-auto">
                          JW
                        </div>
                        <h4 className="text-xl font-semibold text-center mb-2">
                           Joshua Wong
                        </h4>
                        <p className="text-primary text-center font-medium mb-3">
                          Co Founder and Marketing
                        </p>
                        <p className="text-sm text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors">
                          Drives technology decisions and platform development
                        </p>
                      </div>

                      
                    </div>
                  </div>

                  {/* Operations */}
                  <div className="mb-16">
                    <h4 className="text-xl md:text-2xl font-semibold mb-8 text-center text-primary">
                      Operations
                    </h4>
                    <div className=" max-w-3xl mx-auto">
                      {/* Operations Director */}
                      <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-2xl text-white mb-4 mx-auto">
                          N
                        </div>
                        <h4 className="text-xl font-semibold text-center mb-2">
                          Noly Mananquil
                        </h4>
                        <p className="text-primary text-center font-medium mb-3">
                          Operations Director
                        </p>
                        <p className="text-sm text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors">
                          Oversees operational excellence and process optimization
                        </p>
                      </div>

                    
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Developers */}
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <div className="mt-20">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
                    Development Team
                  </h3>
                  <h4 className="text-xl md:text-2xl font-semibold mb-8 text-center text-primary">
                    Automation Developers
                  </h4>
                  <p className="text-lg text-center mb-12 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    7 Specialists Experts in Zapier, Make, n8n, and custom integrations
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Tim */}
                    <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
                      <div className="w-16 h-16 bg-hero-gradient rounded-2xl flex items-center justify-center text-2xl text-white mb-4 mx-auto">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-center mb-2">
                        Tim
                      </h4>
                      <p className="text-primary text-center font-medium mb-3">
                        Lead Integrations
                      </p>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors">
                        Specializes in complex API integrations and workflow optimization
                      </p>
                    </div>

                    {/* Leslie */}
                    <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group">
                      <div className="w-16 h-16 bg-hero-gradient rounded-2xl flex items-center justify-center text-2xl text-white mb-4 mx-auto">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-center mb-2">
                        Leslie Gorospe
                      </h4>
                      <p className="text-primary text-center font-medium mb-3">
                        Senior dev
                      </p>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors">
                        Full-stack development and custom automation solutions expert
                      </p>
                    </div>                  

                    {/* Ram */}
                    <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group md:col-span-2 lg:col-span-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-2xl text-white mb-4 mx-auto">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-center mb-2">
                        Ram
                      </h4>
                      <p className="text-primary text-center font-medium mb-3">
                        Multi-platform Automation
                      </p>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors">
                        Connects and automates across diverse platforms and tools
                      </p>
                    </div>
                    {/* Randell  */}
                    <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group md:col-span-2 lg:col-span-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-2xl text-white mb-4 mx-auto">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-center mb-2">
                        Randell
                      </h4>
                      <p className="text-primary text-center font-medium mb-3">
                        QA + Performance Optimization
                      </p>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors">
                        Ensures reliability and peak performance of all automations
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Ready to Automate CTA Section */}
      <section id="contact" className="px-6 py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollAnimation animation="fade-in-up">
            <div className="mb-8">
              <Rocket className="w-16 h-16 text-primary mx-auto mb-6 animate-bounce" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Let's build your automation system today.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-in" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="https://form.jotform.com/252194204772456" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="hero"
                  size="lg"
                  className="text-lg px-10 py-6 animate-pulse-glow text-white"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-secondary/30 text-center border-t border-border/50">
        <p className="text-foreground text-lg">
          © 2024 awtomasyon Virtual automation experts for the ai era
          founders.
        </p>
      </footer>
    </div>
    </CurrencyProvider>
  );
};

export default Index;

