"use client";

import { useEffect } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";
import DNAHelix3D from "@/components/DNAHelix3D";
import FormulationCardsShowcase from "@/components/FormulationCardsShowcase";
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

            {/* 4 Pillars 3D Flip Cards Grid (Distinct High-Impact Copy on Both Sides) */}
            <div className="hero-hud-grid">
              
              {/* Card 1: Formulation Technology */}
              <div className="hero-hud-card hero-hud-card--1 hero-hud-card--closed" id="hud-card-1">
                <div className="card-flip-inner">
                  {/* Side 1 (Initial View) */}
                  <div className="card-flip-back">
                    <div className="hud-badge-row">
                      <span className="hud-status-dot" style={{ background: "#10b981" }}></span>
                      <span className="hud-tag">01 · FORMULATION TECH</span>
                    </div>
                    <div className="hud-title">Targeted Site Release</div>
                    <div className="hud-sub">pH &gt; 6.8 Site-Specific Colonic Dissolution</div>
                  </div>

                  {/* Side 2 (Flipped View) */}
                  <div className="card-flip-front">
                    <div className="hud-badge-row">
                      <span className="hud-status-dot" style={{ background: "#10b981" }}></span>
                      <span className="hud-tag">ARTEMES™ 1.2g</span>
                    </div>
                    <div className="hud-title">99.4% Targeted Delivery</div>
                    <div className="hud-sub">5-ASA Prolonged Release Multi-Matrix Tech</div>
                  </div>
                </div>
              </div>

              {/* Card 2: Quality Certified */}
              <div className="hero-hud-card hero-hud-card--2 hero-hud-card--closed" id="hud-card-2">
                <div className="card-flip-inner">
                  {/* Side 1 (Initial View) */}
                  <div className="card-flip-back">
                    <div className="hud-badge-row">
                      <span className="hud-status-dot" style={{ background: "#3b82f6" }}></span>
                      <span className="hud-tag hud-tag--blue">02 · QUALITY CERTIFIED</span>
                    </div>
                    <div className="hud-title">WHO-GMP &amp; ISO Accredited</div>
                    <div className="hud-sub">100% Analytical In-Process QA System</div>
                  </div>

                  {/* Side 2 (Flipped View) */}
                  <div className="card-flip-front">
                    <div className="hud-badge-row">
                      <span className="hud-status-dot" style={{ background: "#3b82f6" }}></span>
                      <span className="hud-tag hud-tag--blue">GLOBAL COMPLIANCE</span>
                    </div>
                    <div className="hud-title">Zero-Defect Standard</div>
                    <div className="hud-sub">Certified Sterile &amp; Oral Solid Dose Facilities</div>
                  </div>
                </div>
              </div>

              {/* Card 3: Targeted Efficacy */}
              <div className="hero-hud-card hero-hud-card--3 hero-hud-card--closed" id="hud-card-3">
                <div className="card-flip-inner">
                  {/* Side 1 (Initial View) */}
                  <div className="card-flip-back">
                    <div className="hud-badge-row">
                      <span className="hud-status-dot" style={{ background: "#a855f7" }}></span>
                      <span className="hud-tag hud-tag--purple">03 · TARGETED EFFICACY</span>
                    </div>
                    <div className="hud-title">Mucosal Healing &amp; Restore</div>
                    <div className="hud-sub">Physiological 40:1 Ratio Inositol Concept</div>
                  </div>

                  {/* Side 2 (Flipped View) */}
                  <div className="card-flip-front">
                    <div className="hud-badge-row">
                      <span className="hud-status-dot" style={{ background: "#a855f7" }}></span>
                      <span className="hud-tag hud-tag--purple">SARANYA® 40:1</span>
                    </div>
                    <div className="hud-title">Endocrine Balance</div>
                    <div className="hud-sub">Enhanced Patient Tolerance &amp; Fast Recovery</div>
                  </div>
                </div>
              </div>

              {/* Card 4: Clinical Impact */}
              <div className="hero-hud-card hero-hud-card--4 hero-hud-card--closed" id="hud-card-4">
                <div className="card-flip-inner">
                  {/* Side 1 (Initial View) */}
                  <div className="card-flip-back">
                    <div className="hud-badge-row">
                      <span className="hud-status-dot" style={{ background: "#06b6d4" }}></span>
                      <span className="hud-tag hud-tag--teal">04 · CLINICAL IMPACT</span>
                    </div>
                    <div className="hud-title">4 Hero Specialty Brands</div>
                    <div className="hud-sub">20+ Years Trusted Physician Partnership</div>
                  </div>

                  {/* Side 2 (Flipped View) */}
                  <div className="card-flip-front">
                    <div className="hud-badge-row">
                      <span className="hud-status-dot" style={{ background: "#06b6d4" }}></span>
                      <span className="hud-tag hud-tag--teal">IMMUNOMARS™ &amp; UV-60K</span>
                    </div>
                    <div className="hud-title">Therapy Area Leadership</div>
                    <div className="hud-sub">High-Dose Immunonutrition &amp; D3 Care</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Corporate Professional Marquee Ticker Banner with Micro-Graphics & Brand Colors */}
            <div className="hero-running-ticker-wrapper">
              <div className="hero-ticker-track">
                <div className="hero-ticker-item hero-ticker-item--green">
                  <svg className="ticker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M10 2v7.5M14 2v7.5M8.5 2h7M5 16a6 6 0 0012 0l-1.5-6.5h-9L5 16z"/></svg>
                  <span>SPECIALTY PHARMACEUTICAL INNOVATION</span>
                </div>
                <div className="hero-ticker-item hero-ticker-item--blue">
                  <svg className="ticker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4"/></svg>
                  <span>WHO-GMP &amp; ISO 9001:2015 ACCREDITED</span>
                </div>
                <div className="hero-ticker-item hero-ticker-item--teal">
                  <svg className="ticker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="11" width="18" height="8" rx="4"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                  <span>TARGETED PROLONGED RELEASE TECH</span>
                </div>
                <div className="hero-ticker-item hero-ticker-item--pink">
                  <svg className="ticker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                  <span>GASTROENTEROLOGY · WOMEN&apos;S HEALTH · NUTRITION</span>
                </div>
                <div className="hero-ticker-item hero-ticker-item--purple">
                  <svg className="ticker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  <span>TRUSTED BY LEADING PHYSICIANS NATIONWIDE</span>
                </div>
                <div className="hero-ticker-item hero-ticker-item--gold">
                  <svg className="ticker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <span>20+ YEARS OF FORMULATION EXCELLENCE</span>
                </div>

                {/* Duplicated for seamless infinite loop */}
                <div className="hero-ticker-item hero-ticker-item--green">
                  <svg className="ticker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M10 2v7.5M14 2v7.5M8.5 2h7M5 16a6 6 0 0012 0l-1.5-6.5h-9L5 16z"/></svg>
                  <span>SPECIALTY PHARMACEUTICAL INNOVATION</span>
                </div>
                <div className="hero-ticker-item hero-ticker-item--blue">
                  <svg className="ticker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4"/></svg>
                  <span>WHO-GMP &amp; ISO 9001:2015 ACCREDITED</span>
                </div>
                <div className="hero-ticker-item hero-ticker-item--teal">
                  <svg className="ticker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="11" width="18" height="8" rx="4"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                  <span>TARGETED PROLONGED RELEASE TECH</span>
                </div>
                <div className="hero-ticker-item hero-ticker-item--pink">
                  <svg className="ticker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                  <span>GASTROENTEROLOGY · WOMEN&apos;S HEALTH · NUTRITION</span>
                </div>
                <div className="hero-ticker-item hero-ticker-item--purple">
                  <svg className="ticker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  <span>TRUSTED BY LEADING PHYSICIANS NATIONWIDE</span>
                </div>
                <div className="hero-ticker-item hero-ticker-item--gold">
                  <svg className="ticker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <span>20+ YEARS OF FORMULATION EXCELLENCE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. MISSION & 3D INTERACTIVE DNA HELIX MODEL ═══ */}
        <section className="mission-dna-section">
          <div className="mission-watermark">2003</div>
          <div className="container">
            <div className="mission-grid">
              
              {/* Left Column: Mission Copy & Trust Bar */}
              <div className="reveal">
                <span className="eyebrow-label">SPECIALTY PHARMACEUTICAL EXCELLENCE</span>
                <h2 className="mission-title">
                  Making Access to Speciality Medicine <span className="italic-accent">Precise &amp; Reliable.</span>
                </h2>

                <div className="mission-tag-row">
                  <div className="mission-tag-line"></div>
                  <span className="mission-tag-label">✦ CLINICAL PRECISION &amp; INTEGRITY</span>
                </div>

                <p className="mission-lead-text">
                  By focusing on clinical precision and building enduring relationships of trust, we deliver vital, high-integrity targeted treatments to patients and healthcare providers nationwide.
                </p>
                <p className="mission-body-text">
                  Our evidence-led formulations combine advanced site-specific drug delivery mechanisms with strict adherence to WHO-GMP manufacturing standards, ensuring safety, efficacy, and therapeutic consistency in every batch.
                </p>

                <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap", marginBottom: "var(--space-6)" }}>
                  <Link href="/about" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-forest)", color: "var(--color-text-on-dark)" }}>
                    Learn Our Story →
                  </Link>
                  <Link href="/science" className="btn-connected-pill btn-connected-pill--secondary" style={{ borderColor: "var(--color-forest)", color: "var(--color-forest)" }}>
                    Scientific Evidence
                  </Link>
                </div>

                {/* Trust Bar */}
                <div className="mission-trust-bar">
                  <div className="trust-chip">
                    <span className="trust-chip-dot"></span> EST. 2003
                  </div>
                  <div style={{ width: "1px", height: "12px", background: "rgba(0,0,0,0.15)" }}></div>
                  <div className="trust-chip">
                    <span className="trust-chip-dot"></span> WHO-GMP &amp; ISO CERTIFIED
                  </div>
                  <div style={{ width: "1px", height: "12px", background: "rgba(0,0,0,0.15)" }}></div>
                  <div className="trust-chip">
                    <span className="trust-chip-dot"></span> 20,000+ PATIENTS PRESCRIBED
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive 3D DNA Helix Canvas */}
              <div className="reveal">
                <DNAHelix3D />
              </div>

            </div>
          </div>
        </section>

        {/* ═══ 3. HERO FORMULATIONS (INTERACTIVE CARDS SHOWCASE) ═══ */}
        <section className="formulations-bento-section">
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto var(--space-12)" }}>
              <span className="eyebrow-label">OUR FORMULATIONS</span>
              <h2>Hero <span className="italic-accent">Brands</span></h2>
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)" }}>
                Four precision-engineered formulations developed to address targeted unmet needs in gastroenterology, women&apos;s health, and clinical nutrition.
              </p>
            </div>

            <FormulationCardsShowcase />
          </div>
        </section>

        {/* ═══ 4. THERAPEUTIC DOMAINS (INTERACTIVE CARDS WITH CLINICAL PHOTOGRAPHY) ═══ */}
        <section className="therapy-domains-section">
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto var(--space-12)" }}>
              <span className="eyebrow-label">SPECIALITY FOCUS</span>
              <h2>Three Speciality <span className="italic-accent">Domains.</span></h2>
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)" }}>
                Delivering clinical evidence, site-specific drug delivery, and targeted care across key therapeutic areas.
              </p>
            </div>

            <div className="therapy-domains-grid">
              
              {/* Domain 1: Gastroenterology */}
              <div className="therapy-domain-card reveal" style={{ borderTop: "4px solid var(--color-artemes)" }}>
                <div className="domain-img-wrap">
                  <img src="/assets/images/gastro-therapy.png" alt="Gastroenterology Science" className="domain-img" />
                </div>
                <div className="domain-body">
                  <div>
                    <span className="eyebrow-label" style={{ color: "var(--color-artemes)" }}>GASTROENTEROLOGY</span>
                    <h3 style={{ fontSize: "1.45rem", marginBottom: "var(--space-3)", fontFamily: "var(--font-heading)" }}>
                      Gut Mucosal Healing &amp; IBD
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                      Targeted, prolonged-release formulations for inflammatory bowel disease, ulcerative colitis, and mucosal recovery.
                    </p>
                    <div className="domain-stat-chip" style={{ background: "rgba(29, 158, 117, 0.12)", color: "var(--color-artemes)" }}>
                      ✦ IBD REMISSION &amp; COLONIC RELEASE
                    </div>
                  </div>

                  <div style={{ marginTop: "var(--space-6)" }}>
                    <Link href="/therapy-areas/gastroenterology" style={{ fontWeight: 700, color: "var(--color-artemes)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      Explore Gastroenterology →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Domain 2: Women's Health */}
              <div className="therapy-domain-card reveal" style={{ borderTop: "4px solid var(--color-saranya)" }}>
                <div className="domain-img-wrap">
                  <img src="/assets/images/womens-therapy.png" alt="Women's Health Science" className="domain-img" />
                </div>
                <div className="domain-body">
                  <div>
                    <span className="eyebrow-label" style={{ color: "var(--color-saranya)" }}>WOMEN&apos;S HEALTH</span>
                    <h3 style={{ fontSize: "1.45rem", marginBottom: "var(--space-3)", fontFamily: "var(--font-heading)" }}>
                      Hormonal &amp; Metabolic Balance
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                      Formulations supporting hormonal equilibrium in PCOS, ovulatory function, and metabolic wellness.
                    </p>
                    <div className="domain-stat-chip" style={{ background: "rgba(214, 67, 140, 0.12)", color: "var(--color-saranya)" }}>
                      ✦ 40:1 PHYSIOLOGICAL INOSITOL RATIO
                    </div>
                  </div>

                  <div style={{ marginTop: "var(--space-6)" }}>
                    <Link href="/therapy-areas/womens-health" style={{ fontWeight: 700, color: "var(--color-saranya)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      Explore Women&apos;s Health →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Domain 3: Clinical Nutrition */}
              <div className="therapy-domain-card reveal" style={{ borderTop: "4px solid var(--color-immunomars)" }}>
                <div className="domain-img-wrap">
                  <img src="/assets/images/nutrition-therapy.png" alt="Clinical Nutrition Science" className="domain-img" />
                </div>
                <div className="domain-body">
                  <div>
                    <span className="eyebrow-label" style={{ color: "var(--color-immunomars)" }}>CLINICAL NUTRITION</span>
                    <h3 style={{ fontSize: "1.45rem", marginBottom: "var(--space-3)", fontFamily: "var(--font-heading)" }}>
                      Immunonutrition &amp; Recovery
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                      Amino-acid and micronutrient immunonutrition engineered to support mucosal barrier integrity and post-illness recovery.
                    </p>
                    <div className="domain-stat-chip" style={{ background: "rgba(224, 138, 46, 0.12)", color: "var(--color-immunomars)" }}>
                      ✦ MUCOSAL BARRIER REBUILD
                    </div>
                  </div>

                  <div style={{ marginTop: "var(--space-6)" }}>
                    <Link href="/therapy-areas/clinical-nutrition" style={{ fontWeight: 700, color: "var(--color-immunomars)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      Explore Clinical Nutrition →
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══ 5. TRUST HUD SECTION (DARK FOREST BACKDROP & GOLD ORB) ═══ */}
        <section className="trust-hud-section">
          <div className="trust-glow-orb"></div>
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            
            <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto var(--space-12)" }}>
              <span className="eyebrow-badge" style={{ background: "rgba(255, 255, 255, 0.1)", color: "var(--color-gold)", borderColor: "rgba(217, 164, 65, 0.3)" }}>
                TRUSTED CLINICAL RIGOR
              </span>
              <h2 style={{ color: "#ffffff", marginTop: "var(--space-4)" }}>
                Why Healthcare Providers <span className="italic-accent" style={{ color: "var(--color-gold)" }}>Trust Marselus.</span>
              </h2>
            </div>

            <div className="trust-hud-grid">
              
              {/* Pillar 1 */}
              <div className="trust-hud-card reveal">
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "var(--color-gold-soft)", color: "var(--color-gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", fontWeight: 900, marginBottom: "var(--space-4)" }}>
                  01
                </div>
                <h3 style={{ color: "#ffffff", fontSize: "1.35rem", marginBottom: "var(--space-3)", fontFamily: "var(--font-heading)" }}>
                  Uncompromising Quality
                </h3>
                <p style={{ color: "rgba(247, 244, 236, 0.85)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  ISO 9001:2015 and WHO-GMP accredited manufacturing enforcing strict in-process quality controls and stability testing.
                </p>
              </div>

              {/* Pillar 2 (Featured Center Card) */}
              <div className="trust-hud-card trust-hud-card--featured reveal">
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "var(--color-gold)", color: "var(--color-forest-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", fontWeight: 900, marginBottom: "var(--space-4)" }}>
                  02
                </div>
                <h3 style={{ color: "#ffffff", fontSize: "1.35rem", marginBottom: "var(--space-3)", fontFamily: "var(--font-heading)" }}>
                  Patient Centricity
                </h3>
                <p style={{ color: "rgba(255, 255, 255, 0.95)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Formulation choices guided by patient comfort, minimal side-effects, and optimized dosage compliance across chronic treatment schedules.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="trust-hud-card reveal">
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "var(--color-gold-soft)", color: "var(--color-gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", fontWeight: 900, marginBottom: "var(--space-4)" }}>
                  03
                </div>
                <h3 style={{ color: "#ffffff", fontSize: "1.35rem", marginBottom: "var(--space-3)", fontFamily: "var(--font-heading)" }}>
                  Scientific Innovation
                </h3>
                <p style={{ color: "rgba(247, 244, 236, 0.85)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Ongoing investment in specialized combination molecules and targeted release systems addressing unmet clinical needs.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ═══ 6. EDITORIAL INSIGHTS (ASYMMETRIC GRID WITH RESEARCH ARTWORK) ═══ */}
        <section className="editorial-insights-section">
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

            <div className="editorial-grid">
              
              {/* Insight 1 (Featured Card Spans 7 Columns) */}
              <div className="editorial-card editorial-card--featured reveal">
                <div style={{ width: "100%", height: "100%", minHeight: "220px", overflow: "hidden" }}>
                  <img src="/assets/images/insight-1.png" alt="Gut Health & IBD Remission" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "var(--space-6)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <span className="slide-badge" style={{ background: "rgba(29, 158, 117, 0.15)", color: "var(--color-artemes)", fontSize: "10.5px", marginBottom: "var(--space-3)" }}>
                    GASTROENTEROLOGY · FEATURED
                  </span>
                  <h3 style={{ fontSize: "1.35rem", marginBottom: "var(--space-3)", fontFamily: "var(--font-heading)" }}>
                    Gut Health &amp; IBD Remission
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)", lineHeight: "1.6" }}>
                    Evaluating prolonged-release mesalamine delivery kinetics in mucosal healing.
                  </p>
                  <span className="verify-tag" style={{ fontSize: "10px" }}>Full article coming soon</span>
                </div>
              </div>

              {/* Insight 2 (Secondary Card Spans 5 Columns) */}
              <div className="editorial-card editorial-card--secondary reveal" style={{ borderLeft: "4px solid var(--color-saranya)" }}>
                <div style={{ width: "100%", height: "150px", overflow: "hidden" }}>
                  <img src="/assets/images/insight-2.png" alt="PCOS & Inositol Ratios" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "var(--space-6)" }}>
                  <span className="slide-badge" style={{ fontSize: "10.5px", marginBottom: "var(--space-2)", background: "rgba(214, 67, 140, 0.15)", color: "var(--color-saranya)" }}>
                    WOMEN&apos;S HEALTH
                  </span>
                  <h3 style={{ fontSize: "1.15rem", marginBottom: "var(--space-2)", fontFamily: "var(--font-heading)" }}>
                    PCOS &amp; Inositol Ratios
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "var(--space-3)" }}>
                    Clinical significance of the 40:1 Myo-Inositol to D-Chiro-Inositol ratio in metabolic endocrine restore.
                  </p>
                  <span className="verify-tag" style={{ fontSize: "10px" }}>Full article coming soon</span>
                </div>
              </div>

              {/* Insight 3 (Secondary Card Spans 5 Columns / Stacked) */}
              <div className="editorial-card editorial-card--secondary reveal" style={{ gridColumn: "span 5", borderLeft: "4px solid var(--color-immunomars)" }}>
                <div style={{ width: "100%", height: "150px", overflow: "hidden" }}>
                  <img src="/assets/images/insight-3.png" alt="Immunonutrition in Recovery" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "var(--space-6)" }}>
                  <span className="slide-badge" style={{ fontSize: "10.5px", marginBottom: "var(--space-2)", background: "rgba(224, 138, 46, 0.15)", color: "var(--color-immunomars)" }}>
                    CLINICAL NUTRITION
                  </span>
                  <h3 style={{ fontSize: "1.15rem", marginBottom: "var(--space-2)", fontFamily: "var(--font-heading)" }}>
                    Immunonutrition in Recovery
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "var(--space-3)" }}>
                    Targeted amino acid supplementation for gut mucosal barrier integrity post-illness.
                  </p>
                  <span className="verify-tag" style={{ fontSize: "10px" }}>Full article coming soon</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══ 7. GRAND CLOSING CTA (FULL-BLEED BAND WITH GOLD GLOW) ═══ */}
        <section className="grand-closing-cta">
          <div className="grand-cta-watermark"></div>
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div className="grand-cta-box">
              <span className="eyebrow-badge" style={{ background: "rgba(255, 255, 255, 0.1)", color: "var(--color-gold)", borderColor: "rgba(217, 164, 65, 0.3)", marginBottom: "var(--space-4)" }}>
                CLINICAL ENQUIRY
              </span>
              <h2 style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", color: "#ffffff", marginBottom: "var(--space-4)" }}>
                Innovating Care, <span className="italic-accent" style={{ color: "var(--color-gold)" }}>One Formulation at a Time.</span>
              </h2>
              <p style={{ fontSize: "var(--text-lg)", color: "rgba(255, 255, 255, 0.85)", marginBottom: "var(--space-8)", maxWidth: "58ch", margin: "0 auto var(--space-8)" }}>
                Contact our clinical enquiry team to request prescribing guides, sample monographs, or partnership discussions.
              </p>
              <div className="btn-connected-group" style={{ justifyContent: "center" }}>
                <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-gold)", color: "var(--color-forest-dark)", fontWeight: "900" }}>
                  Get in Touch →
                </Link>
                <Link href="/products" className="btn-connected-pill btn-connected-pill--secondary" style={{ borderColor: "rgba(255, 255, 255, 0.4)", color: "#ffffff" }}>
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
