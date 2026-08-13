"use client";

import { useEffect } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";
import { Badge } from "@/components/ui/badge-2";
import { Button } from "@/components/ui/button-1";
import { Card, CardContent, CardHeader, CardTitle, CardToolbar } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUp, MoreHorizontal, Pin, Settings, Share2, ShieldCheck, Activity, Award } from "lucide-react";

export default function Home() {
  useEffect(() => {
    // Dynamic import to avoid SSR issues with canvas and window objects
    import("@/lib/hero-animation").then((mod) => mod.initHeroScrollAnimation());
    import("@/lib/scroll-animations").then((mod) => {
      mod.initScrollAnimations();
      if (mod.initCounters) mod.initCounters();
    });
  }, []);

  return (
    <>
      {/* Preloader Overlay */}
      <div id="loader-screen">
        <div className="loader-logo">
          <span className="loader-logo-icon">M</span>
          <span>Marselus</span>
        </div>
        <div className="loader-bar-bg">
          <div className="loader-bar-fill"></div>
        </div>
        <div id="loader-percent">0%</div>
      </div>

      {/* Main Page Layout Wrapper */}
      <main className="main-wrapper">
        {/* ═══ 1. HERO SECTION WITH 3D CANVAS SCRUBBING & COLORFUL STAT CARDS ═══ */}
        <section className="hero-scroll-container spine-tab-container" id="hero-scroll-container">
          <div className="hero-scroll-sticky">
            {/* Scientific Grid Matrix Background */}
            <div className="hero-grid-matrix"></div>

            {/* Ambient Background Glow Orbs */}
            <div className="hero-glow-orb hero-glow-orb--1"></div>
            <div className="hero-glow-orb hero-glow-orb--2"></div>
            <div className="hero-glow-orb hero-glow-orb--3"></div>

            {/* High-Performance 210-Frame Canvas */}
            <canvas id="hero-canvas"></canvas>

            {/* Non-Blocking Hero Main Header */}
            <div className="hero-main-header">
              <div className="hero-main-badge">✦ SPECIALTY PHARMACEUTICAL INNOVATION</div>
              <h1 className="hero-main-title">
                Heritage of <span className="gradient-accent-1 font-serif italic">Healing.</span><br />
                Precision in Every Formulation
              </h1>
              <p className="hero-main-desc">
                Pioneering gastroenterology, women&apos;s healthcare, and clinical nutrition through targeted prolonged-release technology.
              </p>
              <div className="hero-cta-group" style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
                <Link href="/products" className="btn-primary-hero">
                  EXPLORE PRODUCTS &rarr;
                </Link>
                <Link href="/about" className="btn-secondary-hero">
                  ABOUT US
                </Link>
              </div>
            </div>

            {/* Sequential Colorful Hero Cards Stage (Powered by shadcn UI components) */}
            <div className="hero-popup-slide-stage">
              
              {/* Card 1: Formulation Tech (Dark Forest Emerald) */}
              <Card className="hero-popup-card hero-popup-card--1 popup-active relative overflow-hidden bg-zinc-950 text-white border-emerald-500/30" id="hero-popup-1">
                <svg
                  className="absolute right-0 top-0 h-full w-2/3 pointer-events-none opacity-40"
                  viewBox="0 0 300 200"
                  fill="none"
                  style={{ zIndex: 0 }}
                >
                  <circle cx="220" cy="100" r="90" fill="#10b981" fillOpacity="0.15" />
                  <circle cx="260" cy="60" r="60" fill="#10b981" fillOpacity="0.20" />
                  <circle cx="200" cy="160" r="50" fill="#10b981" fillOpacity="0.12" />
                  <circle cx="270" cy="150" r="30" fill="#10b981" fillOpacity="0.25" />
                </svg>

                <CardHeader className="border-0 z-10 relative p-0 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981]"></span>
                    <CardTitle className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
                      01 · FORMULATION TECH
                    </CardTitle>
                  </div>
                  <CardToolbar>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="dim" size="sm" mode="icon" className="text-white/80 hover:text-white">
                          <MoreHorizontal className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" side="bottom">
                        <DropdownMenuItem asChild>
                          <Link href="/products/artemes"><Activity className="size-4 me-2" /> View ARTEMES™ 1.2g</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/science"><ShieldCheck className="size-4 me-2" /> MMX® Matrix Tech</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Pin className="size-4 me-2" /> Pin to Dashboard
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Share2 className="size-4 me-2" /> Share Product
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardToolbar>
                </CardHeader>

                <CardContent className="p-0 z-10 relative space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-2xl font-black tracking-tight text-white">
                      Targeted Prolonged Release
                    </span>
                    <Badge className="bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 font-semibold px-2.5 py-1">
                      <ArrowUp className="size-3 me-1" />
                      99.4% Remission
                    </Badge>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Engineered multi-matrix 5-ASA formulation dissolving site-specifically at pH &gt; 6.8 for targeted colonic ulcerative colitis remission.
                  </p>
                  <div className="text-xs text-emerald-400/90 font-medium pt-2 border-t border-white/10 flex justify-between items-center">
                    <span>Vs standard 5-ASA: Site-specific pH &gt; 6.8 release</span>
                    <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-300">ARTEMES™ 1.2g</span>
                  </div>
                </CardContent>

                <div className="popup-progress-track mt-3">
                  <div className="popup-progress-fill" id="popup-fill-1"></div>
                </div>
              </Card>

              {/* Card 2: Quality Certified (Fuchsia Royal Violet) */}
              <Card className="hero-popup-card hero-popup-card--2 relative overflow-hidden bg-fuchsia-600 text-white border-fuchsia-400/30" id="hero-popup-2">
                <svg
                  className="absolute right-0 top-0 w-56 h-56 pointer-events-none opacity-60"
                  viewBox="0 0 200 200"
                  fill="none"
                  style={{ zIndex: 0 }}
                >
                  <defs>
                    <filter id="blur2" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="10" />
                    </filter>
                  </defs>
                  <ellipse cx="170" cy="60" rx="40" ry="18" fill="#fff" fillOpacity="0.15" filter="url(#blur2)" />
                  <rect x="120" y="20" width="60" height="20" rx="8" fill="#fff" fillOpacity="0.12" />
                  <polygon points="150,0 200,0 200,50" fill="#fff" fillOpacity="0.09" />
                  <circle cx="180" cy="100" r="14" fill="#fff" fillOpacity="0.20" />
                </svg>

                <CardHeader className="border-0 z-10 relative p-0 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_#fff]"></span>
                    <CardTitle className="text-white/90 text-xs font-bold tracking-widest uppercase">
                      02 · QUALITY CERTIFIED
                    </CardTitle>
                  </div>
                  <CardToolbar>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="dim" size="sm" mode="icon" className="text-white/80 hover:text-white">
                          <MoreHorizontal className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" side="bottom">
                        <DropdownMenuItem asChild>
                          <Link href="/about"><Award className="size-4 me-2" /> WHO-GMP Standards</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Settings className="size-4 me-2" /> ISO 9001:2015 Cert
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Share2 className="size-4 me-2" /> Share Quality Doc
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardToolbar>
                </CardHeader>

                <CardContent className="p-0 z-10 relative space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-2xl font-black tracking-tight text-white">
                      WHO-GMP &amp; ISO Accredited
                    </span>
                    <Badge className="bg-white/25 text-white border border-white/30 font-semibold px-2.5 py-1">
                      <ArrowUp className="size-3 me-1" />
                      100% Accredited
                    </Badge>
                  </div>
                  <p className="text-xs text-white/90 leading-relaxed">
                    Enforcing strict in-process analytical quality management systems and accredited manufacturing facilities across every pharmaceutical batch produced.
                  </p>
                  <div className="text-xs text-white/90 font-medium pt-2 border-t border-white/20 flex justify-between items-center">
                    <span>Vs standard facilities: ISO 9001:2015 QA Certified</span>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white">WHO-GMP</span>
                  </div>
                </CardContent>

                <div className="popup-progress-track mt-3">
                  <div className="popup-progress-fill" id="popup-fill-2"></div>
                </div>
              </Card>

              {/* Card 3: Targeted Efficacy (Ocean Blue) */}
              <Card className="hero-popup-card hero-popup-card--3 relative overflow-hidden bg-blue-600 text-white border-blue-400/30" id="hero-popup-3">
                <svg
                  className="absolute right-0 top-0 w-56 h-56 pointer-events-none opacity-60"
                  viewBox="0 0 200 200"
                  fill="none"
                  style={{ zIndex: 0 }}
                >
                  <defs>
                    <filter id="blur3" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="12" />
                    </filter>
                  </defs>
                  <rect x="120" y="0" width="70" height="70" rx="35" fill="#fff" fillOpacity="0.10" filter="url(#blur3)" />
                  <ellipse cx="170" cy="80" rx="28" ry="12" fill="#fff" fillOpacity="0.15" />
                  <polygon points="200,0 200,60 140,0" fill="#fff" fillOpacity="0.08" />
                  <circle cx="150" cy="30" r="10" fill="#fff" fillOpacity="0.18" />
                </svg>

                <CardHeader className="border-0 z-10 relative p-0 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-cyan-300 animate-pulse shadow-[0_0_10px_#67e8f9]"></span>
                    <CardTitle className="text-cyan-200 text-xs font-bold tracking-widest uppercase">
                      03 · TARGETED EFFICACY
                    </CardTitle>
                  </div>
                  <CardToolbar>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="dim" size="sm" mode="icon" className="text-white/80 hover:text-white">
                          <MoreHorizontal className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" side="bottom">
                        <DropdownMenuItem asChild>
                          <Link href="/products/saranya"><Activity className="size-4 me-2" /> View SARANYA® 40:1</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/therapy-areas/womens-health"><ShieldCheck className="size-4 me-2" /> Women&apos;s Health Care</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Share2 className="size-4 me-2" /> Share Clinical Data
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardToolbar>
                </CardHeader>

                <CardContent className="p-0 z-10 relative space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-2xl font-black tracking-tight text-white">
                      Mucosal &amp; 40:1 Inositol Concept
                    </span>
                    <Badge className="bg-white/25 text-white border border-white/30 font-semibold px-2.5 py-1">
                      <ArrowUp className="size-3 me-1" />
                      40:1 Ratio
                    </Badge>
                  </div>
                  <p className="text-xs text-white/90 leading-relaxed">
                    Myo-Inositol 1100mg + D-Chiro Inositol 27.6mg supplemented with Chromium Picolinate &amp; Vitamin D2 for metabolic endocrine restore.
                  </p>
                  <div className="text-xs text-cyan-100 font-medium pt-2 border-t border-white/20 flex justify-between items-center">
                    <span>Vs standard inositol: 40:1 Physiological Plasma Ratio</span>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white">SARANYA® 40:1</span>
                  </div>
                </CardContent>

                <div className="popup-progress-track mt-3">
                  <div className="popup-progress-fill" id="popup-fill-3"></div>
                </div>
              </Card>

              {/* Card 4: Clinical Impact (Cyan Teal) */}
              <Card className="hero-popup-card hero-popup-card--4 relative overflow-hidden bg-teal-600 text-white border-teal-400/30" id="hero-popup-4">
                <svg
                  className="absolute right-0 top-0 w-56 h-56 pointer-events-none opacity-60"
                  viewBox="0 0 200 200"
                  fill="none"
                  style={{ zIndex: 0 }}
                >
                  <defs>
                    <filter id="blur4" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="16" />
                    </filter>
                  </defs>
                  <polygon points="200,0 200,100 100,0" fill="#fff" fillOpacity="0.10" />
                  <ellipse cx="170" cy="40" rx="30" ry="18" fill="#fff" fillOpacity="0.15" filter="url(#blur4)" />
                  <rect x="140" y="60" width="40" height="18" rx="8" fill="#fff" fillOpacity="0.12" />
                  <circle cx="150" cy="30" r="14" fill="#fff" fillOpacity="0.20" />
                  <line x1="120" y1="0" x2="200" y2="80" stroke="#fff" strokeOpacity="0.12" strokeWidth="6" />
                </svg>

                <CardHeader className="border-0 z-10 relative p-0 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-200 animate-pulse shadow-[0_0_10px_#a7f3d0]"></span>
                    <CardTitle className="text-emerald-100 text-xs font-bold tracking-widest uppercase">
                      04 · CLINICAL IMPACT
                    </CardTitle>
                  </div>
                  <CardToolbar>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="dim" size="sm" mode="icon" className="text-white/80 hover:text-white">
                          <MoreHorizontal className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" side="bottom">
                        <DropdownMenuItem asChild>
                          <Link href="/products/immunomars"><Activity className="size-4 me-2" /> View IMMUNOMARS™</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/therapy-areas/clinical-nutrition"><Award className="size-4 me-2" /> Clinical Nutrition</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Share2 className="size-4 me-2" /> Share Clinical Portfolio
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardToolbar>
                </CardHeader>

                <CardContent className="p-0 z-10 relative space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-2xl font-black tracking-tight text-white">
                      4 Hero Formulations · 20+ Yrs
                    </span>
                    <Badge className="bg-white/25 text-white border border-white/30 font-semibold px-2.5 py-1">
                      <ArrowUp className="size-3 me-1" />
                      20+ Yrs Trust
                    </Badge>
                  </div>
                  <p className="text-xs text-white/90 leading-relaxed">
                    High-dose L-Glutamine 10g immunonutrition and specialized formulations empowering gastroenterologists, gynecologists &amp; physicians since 2003.
                  </p>
                  <div className="text-xs text-emerald-100 font-medium pt-2 border-t border-white/20 flex justify-between items-center">
                    <span>Vs standard care: 3 Specialty Therapy Care Areas</span>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white">IMMUNOMARS™ 15g</span>
                  </div>
                </CardContent>

                <div className="popup-progress-track mt-3">
                  <div className="popup-progress-fill" id="popup-fill-4"></div>
                </div>
              </Card>

            </div>
          </div>
        </section>

        {/* ═══ 2. COMPANY INTRO (SPLIT LAYOUT WITH GOLD HAIRLINE) ═══ */}
        <section className="section" style={{ padding: "var(--space-20) 0", background: "var(--color-cream)", position: "relative" }}>
          <div className="container">
            <div className="grid-split">
              
              {/* Left Column: Copy */}
              <div className="reveal">
                <span className="eyebrow-label">SPECIALTY FORMULATIONS</span>
                <h2 style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", marginBottom: "var(--space-6)" }}>
                  Making Access to Speciality Medicine <span className="italic-accent">Precise &amp; Reliable.</span>
                </h2>
                <div style={{ width: "80px", height: "1px", background: "var(--color-gold)", marginBottom: "var(--space-6)" }}></div>
                <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-6)" }}>
                  By focusing on clinical precision and building enduring relationships of trust, we deliver vital, high-integrity treatments to patients and healthcare providers.
                </p>
                <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-8)" }}>
                  Our evidence-led formulations combine advanced drug delivery mechanisms with strict adherence to WHO-GMP manufacturing standards, ensuring safety, quality, and therapeutic consistency in every batch.
                </p>

                <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
                  <Link href="/about" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-forest)", color: "var(--color-text-on-dark)" }}>
                    Learn Our Story →
                  </Link>
                  <Link href="/science" className="btn-connected-pill btn-connected-pill--secondary" style={{ borderColor: "var(--color-forest)", color: "var(--color-forest)" }}>
                    Scientific Evidence
                  </Link>
                </div>
              </div>

              {/* Right Column: 3D Render Asset */}
              <div className="reveal" style={{ textAlign: "center" }}>
                <div className="atrimus-glass-card" style={{ padding: "var(--space-10)", background: "rgba(255, 255, 255, 0.7)", border: "1px solid rgba(15, 61, 40, 0.1)", borderRadius: "var(--radius-xl)" }}>
                  <img 
                    src="/assets/images/capsule-split-hero.png" 
                    alt="Precision Capsule Formulation Render" 
                    style={{ width: "80%", height: "auto", margin: "0 auto", filter: "drop-shadow(0 20px 30px rgba(15, 61, 40, 0.15))" }}
                  />
                  <div style={{ marginTop: "var(--space-6)" }}>
                    <span className="eyebrow-badge">WHO-GMP &amp; ISO 9001:2015 CERTIFIED</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══ 3. HERO BRANDS (4 CORE FORMULATIONS) ═══ */}
        <section className="section" style={{ padding: "var(--space-20) 0", background: "var(--color-cream-light)" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto var(--space-16)" }}>
              <span className="eyebrow-label">OUR FORMULATIONS</span>
              <h2>Hero <span className="italic-accent">Brands</span></h2>
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)" }}>
                Four precision-engineered formulations developed to address targeted unmet needs in gastroenterology, women&apos;s health, and clinical nutrition.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-8)" }}>
              
              {/* Product 1: ARTEMES */}
              <div className="atrimus-glass-card reveal glow-border glow-border--artemes" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-lg)", borderTop: "4px solid var(--color-artemes)", background: "var(--color-artemes-tint)" }}>
                <span className="slide-badge" style={{ background: "rgba(29, 158, 117, 0.15)", color: "var(--color-artemes)", marginBottom: "var(--space-4)" }}>
                  GASTROENTEROLOGY
                </span>
                <h3 style={{ fontSize: "1.75rem", fontFamily: "var(--font-heading)", color: "var(--color-forest)", marginBottom: "4px" }}>
                  ARTEMES <small style={{ fontSize: "0.9rem", color: "var(--color-artemes)" }}>1.2g</small>
                </h3>
                <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-forest)", marginBottom: "var(--space-4)" }}>
                  Mesalamine 1.2 g Prolonged Release Tablets
                </p>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                  Prolonged-release colonic targeted delivery for ulcerative colitis induction &amp; maintenance of remission.
                </p>
                <Link href="/products/artemes" style={{ fontWeight: 700, color: "var(--color-artemes)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  Monograph Details →
                </Link>
              </div>

              {/* Product 2: SARANYA */}
              <div className="atrimus-glass-card reveal glow-border glow-border--saranya" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-lg)", borderTop: "4px solid var(--color-saranya)", background: "var(--color-saranya-tint)" }}>
                <span className="slide-badge" style={{ background: "rgba(214, 67, 140, 0.15)", color: "var(--color-saranya)", marginBottom: "var(--space-4)" }}>
                  WOMEN&apos;S HEALTH
                </span>
                <h3 style={{ fontSize: "1.75rem", fontFamily: "var(--font-heading)", color: "var(--color-forest)", marginBottom: "4px" }}>
                  SARANYA
                </h3>
                <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-forest)", marginBottom: "var(--space-4)" }}>
                  Myo-Inositol + D-Chiro Inositol (40:1) + Chromium + Vit D2
                </p>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                  Formulated for physiological hormonal &amp; metabolic balance in PCOS management.
                </p>
                <Link href="/products/saranya" style={{ fontWeight: 700, color: "var(--color-saranya)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  Monograph Details →
                </Link>
              </div>

              {/* Product 3: IMMUNOMARS */}
              <div className="atrimus-glass-card reveal glow-border glow-border--immunomars" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-lg)", borderTop: "4px solid var(--color-immunomars)", background: "var(--color-immunomars-tint)" }}>
                <span className="slide-badge" style={{ background: "rgba(224, 138, 46, 0.15)", color: "var(--color-immunomars)", marginBottom: "var(--space-4)" }}>
                  CLINICAL NUTRITION
                </span>
                <h3 style={{ fontSize: "1.75rem", fontFamily: "var(--font-heading)", color: "var(--color-forest)", marginBottom: "4px" }}>
                  IMMUNOMARS
                </h3>
                <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-forest)", marginBottom: "var(--space-4)" }}>
                  L-Glutamine + Amino Acids + Micronutrient Sachet
                </p>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                  Targeted immunonutrition blend: Rebuild. Protect. Recover.
                </p>
                <Link href="/products/immunomars" style={{ fontWeight: 700, color: "var(--color-immunomars)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  Monograph Details →
                </Link>
              </div>

              {/* Product 4: UV 60K */}
              <div className="atrimus-glass-card reveal glow-border glow-border--uv60k" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-lg)", borderTop: "4px solid var(--color-uv60k)", background: "var(--color-uv60k-tint)" }}>
                <span className="slide-badge" style={{ background: "rgba(46, 127, 224, 0.15)", color: "var(--color-uv60k)", marginBottom: "var(--space-4)" }}>
                  VITAMIN THERAPY
                </span>
                <h3 style={{ fontSize: "1.75rem", fontFamily: "var(--font-heading)", color: "var(--color-forest)", marginBottom: "4px" }}>
                  UV 60K
                </h3>
                <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-forest)", marginBottom: "var(--space-4)" }}>
                  Cholecalciferol (Vitamin D3) 60,000 IU Softgel Capsule
                </p>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                  High-potency softgel formulation for rapid clinical correction of severe Vitamin D deficiency.
                </p>
                <Link href="/products/uv60k" style={{ fontWeight: 700, color: "var(--color-uv60k)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  Monograph Details →
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ═══ 4. THERAPEUTIC FOCUS (3 SPECIALITY DOMAINS) ═══ */}
        <section className="section" style={{ padding: "var(--space-20) 0", background: "var(--color-cream)" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto var(--space-16)" }}>
              <span className="eyebrow-label">SPECIALITY FOCUS</span>
              <h2>Three Speciality <span className="italic-accent">Domains.</span></h2>
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)" }}>
                Delivering clinical evidence, site-specific drug delivery, and targeted care.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-8)" }}>
              
              {/* Gastro Card */}
              <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-xl)", background: "rgba(29, 158, 117, 0.05)", borderLeft: "4px solid var(--color-artemes)" }}>
                <span className="eyebrow-label" style={{ color: "var(--color-artemes)" }}>GASTROENTEROLOGY</span>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "var(--space-4)" }}>Gut Mucosal Healing &amp; IBD</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                  Targeted, prolonged-release formulations for inflammatory bowel disease, ulcerative colitis, and mucosal recovery.
                </p>
                <Link href="/therapy-areas/gastroenterology" style={{ fontWeight: 700, color: "var(--color-artemes)" }}>
                  Explore Gastroenterology →
                </Link>
              </div>

              {/* Women's Health Card */}
              <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-xl)", background: "rgba(214, 67, 140, 0.05)", borderLeft: "4px solid var(--color-saranya)" }}>
                <span className="eyebrow-label" style={{ color: "var(--color-saranya)" }}>WOMEN&apos;S HEALTH</span>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "var(--space-4)" }}>Hormonal &amp; Metabolic Balance</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                  Formulations supporting hormonal equilibrium in PCOS, ovulatory function, and metabolic wellness.
                </p>
                <Link href="/therapy-areas/womens-health" style={{ fontWeight: 700, color: "var(--color-saranya)" }}>
                  Explore Women&apos;s Health →
                </Link>
              </div>

              {/* Clinical Nutrition Card */}
              <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-xl)", background: "rgba(224, 138, 46, 0.05)", borderLeft: "4px solid var(--color-immunomars)" }}>
                <span className="eyebrow-label" style={{ color: "var(--color-immunomars)" }}>CLINICAL NUTRITION</span>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "var(--space-4)" }}>Immunonutrition &amp; Recovery</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                  Amino-acid and micronutrient immunonutrition engineered to support mucosal barrier integrity and post-illness recovery.
                </p>
                <Link href="/therapy-areas/clinical-nutrition" style={{ fontWeight: 700, color: "var(--color-immunomars)" }}>
                  Explore Clinical Nutrition →
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ═══ 5. WHY HEALTHCARE PROVIDERS TRUST MARSELUS (3 PILLARS) ═══ */}
        <section className="section" style={{ padding: "var(--space-20) 0", background: "var(--color-forest)", color: "var(--color-text-on-dark)" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto var(--space-16)" }}>
              <span className="eyebrow-badge" style={{ background: "rgba(255, 255, 255, 0.1)", color: "var(--color-gold)", borderColor: "rgba(217, 164, 65, 0.3)" }}>
                TRUSTED CLINICAL RIGOR
              </span>
              <h2 style={{ color: "var(--color-text-on-dark)", marginTop: "var(--space-4)" }}>
                Why Healthcare Providers <span className="italic-accent" style={{ color: "var(--color-gold)" }}>Trust Marselus.</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-8)" }}>
              
              {/* Pillar 1 */}
              <div className="reveal" style={{ background: "rgba(255, 255, 255, 0.05)", padding: "var(--space-8)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "var(--color-gold-soft)", color: "var(--color-gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", fontWeight: 800, marginBottom: "var(--space-4)" }}>
                  01
                </div>
                <h3 style={{ color: "var(--color-text-on-dark)", fontSize: "1.35rem", marginBottom: "var(--space-3)" }}>Uncompromising Quality</h3>
                <p style={{ color: "rgba(247, 244, 236, 0.8)", fontSize: "0.95rem" }}>
                  ISO 9001:2015 and WHO-GMP accredited manufacturing enforcing strict in-process quality controls and stability testing.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="reveal" style={{ background: "rgba(255, 255, 255, 0.05)", padding: "var(--space-8)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "var(--color-gold-soft)", color: "var(--color-gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", fontWeight: 800, marginBottom: "var(--space-4)" }}>
                  02
                </div>
                <h3 style={{ color: "var(--color-text-on-dark)", fontSize: "1.35rem", marginBottom: "var(--space-3)" }}>Patient Centricity</h3>
                <p style={{ color: "rgba(247, 244, 236, 0.8)", fontSize: "0.95rem" }}>
                  Formulation choices guided by patient comfort, minimal side-effects, and optimized dosage compliance.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="reveal" style={{ background: "rgba(255, 255, 255, 0.05)", padding: "var(--space-8)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "var(--color-gold-soft)", color: "var(--color-gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", fontWeight: 800, marginBottom: "var(--space-4)" }}>
                  03
                </div>
                <h3 style={{ color: "var(--color-text-on-dark)", fontSize: "1.35rem", marginBottom: "var(--space-3)" }}>Scientific Innovation</h3>
                <p style={{ color: "rgba(247, 244, 236, 0.8)", fontSize: "0.95rem" }}>
                  Ongoing investment in specialized combination molecules and targeted release systems addressing unmet clinical needs.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ═══ 6. LATEST INSIGHTS ═══ */}
        <section className="section" style={{ padding: "var(--space-20) 0", background: "var(--color-cream-light)" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "var(--space-12)", flexWrap: "wrap", gap: "var(--space-4)" }}>
              <div>
                <span className="eyebrow-label">CLINICAL ARTICLES</span>
                <h2>Latest <span className="italic-accent">Insights.</span></h2>
              </div>
              <Link href="/science" style={{ fontWeight: 700, color: "var(--color-forest)" }}>
                View All Science Resources →
              </Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-8)" }}>
              
              {/* Insight 1 */}
              <div className="atrimus-glass-card reveal" style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", background: "#ffffff" }}>
                <img src="/assets/images/insight-1.png" alt="Gut Health & IBD Remission" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                <div style={{ padding: "var(--space-6)" }}>
                  <span className="slide-badge" style={{ fontSize: "11px", marginBottom: "var(--space-2)" }}>GASTROENTEROLOGY</span>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: "var(--space-3)" }}>Gut Health &amp; IBD Remission</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                    Evaluating prolonged-release mesalamine delivery kinetics in mucosal healing.
                  </p>
                  <span className="verify-tag" style={{ fontSize: "10px" }}>Full article coming soon</span>
                </div>
              </div>

              {/* Insight 2 */}
              <div className="atrimus-glass-card reveal" style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", background: "#ffffff" }}>
                <img src="/assets/images/insight-2.png" alt="PCOS & Inositol Ratios" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                <div style={{ padding: "var(--space-6)" }}>
                  <span className="slide-badge" style={{ fontSize: "11px", marginBottom: "var(--space-2)", background: "rgba(214, 67, 140, 0.15)", color: "var(--color-saranya)" }}>WOMEN&apos;S HEALTH</span>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: "var(--space-3)" }}>PCOS &amp; Inositol Ratios</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                    Clinical significance of the 40:1 Myo-Inositol to D-Chiro-Inositol ratio in metabolic endocrine restore.
                  </p>
                  <span className="verify-tag" style={{ fontSize: "10px" }}>Full article coming soon</span>
                </div>
              </div>

              {/* Insight 3 */}
              <div className="atrimus-glass-card reveal" style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", background: "#ffffff" }}>
                <img src="/assets/images/insight-3.png" alt="Immunonutrition in Recovery" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                <div style={{ padding: "var(--space-6)" }}>
                  <span className="slide-badge" style={{ fontSize: "11px", marginBottom: "var(--space-2)", background: "rgba(224, 138, 46, 0.15)", color: "var(--color-immunomars)" }}>CLINICAL NUTRITION</span>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: "var(--space-3)" }}>Immunonutrition in Recovery</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                    Targeted amino acid supplementation for gut mucosal barrier integrity post-illness.
                  </p>
                  <span className="verify-tag" style={{ fontSize: "10px" }}>Full article coming soon</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══ 7. CLOSING CTA ═══ */}
        <section className="section" style={{ padding: "var(--space-20) 0", background: "var(--color-cream)", textAlign: "center" }}>
          <div className="container">
            <div style={{ maxWidth: "700px", margin: "0 auto" }}>
              <span className="eyebrow-label">CLINICAL ENQUIRY</span>
              <h2 style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", marginBottom: "var(--space-4)" }}>
                Innovating Care, <span className="italic-accent">One Formulation at a Time.</span>
              </h2>
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", marginBottom: "var(--space-8)" }}>
                Contact our clinical enquiry team to request prescribing guides, sample monographs, or partnership discussions.
              </p>
              <div className="btn-connected-group" style={{ justifyContent: "center" }}>
                <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-forest)", color: "var(--color-text-on-dark)" }}>
                  Get in Touch →
                </Link>
                <Link href="/products" className="btn-connected-pill btn-connected-pill--secondary" style={{ borderColor: "var(--color-forest)", color: "var(--color-forest)" }}>
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
