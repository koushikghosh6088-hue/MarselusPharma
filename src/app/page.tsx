"use client";

import { useEffect } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";

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

      <main className="page-content">
        {/* ═══ 1. HERO SECTION (WITH CAPSULE SCROLL SCRUB & SPINE TAB) ═══ */}
        <section className="hero-scroll-container spine-tab-container" id="hero-scroll-container">
          <SpineTab label="HERITAGE OF HEALING — KOLKATA" />

          <div className="hero-scroll-sticky">
            <canvas id="hero-canvas"></canvas>

            {/* Scientific Grid Matrix & Glow Orbs */}
            <div className="hero-grid-matrix"></div>
            <div className="hero-glow-orb hero-glow-orb--1"></div>
            <div className="hero-glow-orb hero-glow-orb--2"></div>
            <div className="hero-glow-orb hero-glow-orb--3"></div>

            {/* Hero Main Copy */}
            <div className="hero-main-header">
              <span className="eyebrow-badge" style={{ marginBottom: "var(--space-4)" }}>
                ✦ SPECIALTY PHARMACEUTICAL INNOVATION
              </span>
              <h1 className="hero-main-title" style={{ fontFamily: "var(--font-heading)" }}>
                Heritage of <span className="italic-accent">Healing.</span><br />
                Precision in Every Formulation<span className="dot-gold"></span>
              </h1>
              <p className="hero-main-desc" style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", maxWidth: "68ch" }}>
                Speciality healthcare solutions in Gastroenterology, Women&apos;s Health &amp; Clinical Nutrition.
                <span className="verify-tag" title="Confirm founding year before publication">[VERIFY: founding year]</span>
              </p>
              
              <div className="btn-connected-group" style={{ marginTop: "var(--space-6)" }}>
                <Link href="/products" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-forest)", color: "var(--color-text-on-dark)" }}>
                  Explore Products →
                </Link>
                <Link href="/about" className="btn-connected-pill btn-connected-pill--secondary" style={{ borderColor: "var(--color-forest)", color: "var(--color-forest)" }}>
                  About Us
                </Link>
              </div>
            </div>

            {/* Trust Strip HUD Cards (4 Pillars with Scroll 3D Flip) */}
            <div className="hero-hud-grid">
              
              {/* Card 1: Formulation Technology */}
              <div className="hero-hud-card hero-hud-card--1 hero-hud-card--closed" id="hud-card-1">
                <div className="card-flip-inner">
                  {/* Back (Closed State) */}
                  <div className="card-flip-back">
                    <div className="hud-badge-row">
                      <span className="hud-status-dot" style={{ background: "var(--color-artemes)" }}></span>
                      <span className="hud-tag" style={{ color: "#ffffff" }}>01 · FORMULATION TECH</span>
                    </div>
                    <div className="hud-closed-label">✦ SCROLL TO UNLOCK</div>
                  </div>

                  {/* Front (Open State) */}
                  <div className="card-flip-front">
                    <div className="hud-badge-row">
                      <span className="hud-status-dot" style={{ background: "var(--color-artemes)" }}></span>
                      <span className="hud-tag">FORMULATION TECH</span>
                    </div>
                    <div className="hud-title">Targeted Prolonged Release</div>
                    <div className="hud-sub">Engineered for site-specific colonic therapeutic action</div>
                  </div>
                </div>
              </div>

              {/* Card 2: Quality Certified */}
              <div className="hero-hud-card hero-hud-card--2 hero-hud-card--closed" id="hud-card-2">
                <div className="card-flip-inner">
                  {/* Back (Closed State) */}
                  <div className="card-flip-back">
                    <div className="hud-badge-row">
                      <span className="hud-status-dot" style={{ background: "#3b82f6" }}></span>
                      <span className="hud-tag" style={{ color: "#ffffff" }}>02 · QUALITY CERTIFIED</span>
                    </div>
                    <div className="hud-closed-label">✦ SCROLL TO UNLOCK</div>
                  </div>

                  {/* Front (Open State) */}
                  <div className="card-flip-front">
                    <div className="hud-badge-row">
                      <span className="hud-tag hud-tag--blue">QUALITY CERTIFIED</span>
                    </div>
                    <div className="hud-title">WHO-GMP &amp; ISO 9001:2015</div>
                    <div className="hud-sub">ISO certified quality management system &amp; GMP facilities</div>
                  </div>
                </div>
              </div>

              {/* Card 3: Targeted Efficacy */}
              <div className="hero-hud-card hero-hud-card--3 hero-hud-card--closed" id="hud-card-3">
                <div className="card-flip-inner">
                  {/* Back (Closed State) */}
                  <div className="card-flip-back">
                    <div className="hud-badge-row">
                      <span className="hud-status-dot" style={{ background: "#a855f7" }}></span>
                      <span className="hud-tag" style={{ color: "#ffffff" }}>03 · TARGETED EFFICACY</span>
                    </div>
                    <div className="hud-closed-label">✦ SCROLL TO UNLOCK</div>
                  </div>

                  {/* Front (Open State) */}
                  <div className="card-flip-front">
                    <div className="hud-badge-row">
                      <span className="hud-tag hud-tag--purple" style={{ color: "var(--color-saranya)" }}>TARGETED EFFICACY</span>
                    </div>
                    <div className="hud-title">Mucosal Healing &amp; Recovery</div>
                    <div className="hud-sub">Formulated for localized action and enhanced patient tolerance</div>
                  </div>
                </div>
              </div>

              {/* Card 4: Clinical Impact */}
              <div className="hero-hud-card hero-hud-card--4 hero-hud-card--closed" id="hud-card-4">
                <div className="card-flip-inner">
                  {/* Back (Closed State) */}
                  <div className="card-flip-back">
                    <div className="hud-badge-row">
                      <span className="hud-status-dot" style={{ background: "#06b6d4" }}></span>
                      <span className="hud-tag" style={{ color: "#ffffff" }}>04 · CLINICAL IMPACT</span>
                    </div>
                    <div className="hud-closed-label">✦ SCROLL TO UNLOCK</div>
                  </div>

                  {/* Front (Open State) */}
                  <div className="card-flip-front">
                    <div className="hud-badge-row">
                      <span className="hud-tag hud-tag--teal" style={{ color: "var(--color-immunomars)" }}>CLINICAL IMPACT</span>
                    </div>
                    <div className="hud-title">4 Hero Formulations</div>
                    <div className="hud-sub">Across 3 speciality therapy areas</div>
                  </div>
                </div>
              </div>
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
