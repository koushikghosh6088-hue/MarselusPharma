"use client";

import { useEffect } from "react";
import Link from "next/link";

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
      {/* Loader Screen Preloader Overlay */}
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

      <main className="page-content atrimus-white-bg">
        {/* ═══ HERO SCROLL ANIMATION SECTION (Preserved) ═══ */}
        <section className="hero-scroll-container" id="hero-scroll-container">
          <div className="hero-scroll-sticky">
            <canvas id="hero-canvas"></canvas>

            {/* Slide 1 */}
            <div className="scroll-slide scroll-slide--1 active">
              <div className="scroll-slide__content glass-panel">
                <div className="scroll-slide__est">/ EST 2003</div>
                <h1 className="scroll-slide__title">Heritage of<br /><span className="italic-accent">Healing</span></h1>
                <p className="scroll-slide__desc">Leading specialty pharmaceuticals in Gastroenterology, Women&apos;s Health &amp; Clinical Nutrition.</p>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="scroll-slide scroll-slide--2">
              <div className="scroll-slide__content glass-panel">
                <div className="scroll-slide__est">/ QUALITY STANDARDS</div>
                <h1 className="scroll-slide__title">Surgical <span className="italic-accent">Precision</span></h1>
                <p className="scroll-slide__desc">Certified state-of-the-art facilities compliant with WHO-GMP and ISO standards.</p>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="scroll-slide scroll-slide--3">
              <div className="scroll-slide__content glass-panel">
                <div className="scroll-slide__est">/ SCIENTIFIC APPROACH</div>
                <h1 className="scroll-slide__title">Clinical <span className="italic-accent">Efficacy</span></h1>
                <p className="scroll-slide__desc">Evidence-based drug formulations designed around four key patient-centric hero brands.</p>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="scroll-slide scroll-slide--4">
              <div className="scroll-slide__content glass-panel">
                <div className="scroll-slide__est">/ MARSELUS PHARMA</div>
                <h1 className="scroll-slide__title">Innovating <span className="italic-accent">Care</span></h1>
                <p className="scroll-slide__desc">We deliver specialized pharmaceutical solutions with therapeutic integrity and patient focus.</p>
                <div className="scroll-slide__actions">
                  <Link href="/products" className="btn btn--primary btn--lg">Explore Products <span className="arrow">→</span></Link>
                  <Link href="/about" className="btn btn--secondary btn--lg">About Us <span className="arrow">→</span></Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ═══ STATS BAR (Light Clean Mode) ═══ */}
        <section className="section" style={{ padding: "0 0 var(--space-16) 0", marginTop: "-40px", position: "relative", zIndex: 10 }}>
          <div className="container">
            <div className="atrimus-stats-bar reveal">
              <div className="atrimus-stats-grid">
                <div className="atrimus-stat-item">
                  <div className="atrimus-stat-number" data-count="20" data-suffix="K+">0</div>
                  <div className="atrimus-stat-label">Patients Served Since 2003</div>
                </div>
                <div className="atrimus-stat-item">
                  <div className="atrimus-stat-number" data-count="4" data-suffix=" Hero">0</div>
                  <div className="atrimus-stat-label">Specialist Formulations</div>
                </div>
                <div className="atrimus-stat-item">
                  <div className="atrimus-stat-number" data-count="100" data-suffix="%">0</div>
                  <div className="atrimus-stat-label">WHO-GMP &amp; ISO Quality</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 3D CAPSULE & SYRINGE SHOWCASE (Clean Light Mode) ═══ */}
        <section className="section" id="overview" style={{ padding: "var(--space-16) 0", position: "relative", background: "#ffffff" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "var(--space-12)", alignItems: "center" }}>
              
              {/* Left Column: Atrimus Typography & Connected Buttons */}
              <div className="reveal">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "var(--space-6)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2v-8z" />
                    <path d="M6 12v-2a2 2 0 0 1 2-2h2" />
                    <path d="M12 8V6a2 2 0 0 1 2-2h2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="18" cy="6" r="2" />
                    <circle cx="6" cy="18" r="2" />
                  </svg>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--color-accent)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                    Specialty Formulations
                  </span>
                </div>

                <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "var(--color-navy)", lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "var(--space-6)", textTransform: "uppercase" }}>
                  MAKING ACCESS TO <span className="italic-accent" style={{ color: "var(--color-accent)" }}>SPECIALTY MEDICINE</span> PRECISE &amp; RELIABLE
                </h2>

                <p style={{ fontSize: "var(--text-lg)", color: "var(--color-gray-600)", lineHeight: "1.6", marginBottom: "var(--space-8)", maxWidth: "54ch" }}>
                  By focusing on clinical precision and establishing enduring relationships of trust, we deliver vital, high-integrity treatments to patients and healthcare providers worldwide.
                </p>

                {/* Connected Pill Buttons */}
                <div className="btn-connected-group">
                  <Link href="/about" className="btn-connected-pill btn-connected-pill--primary">
                    About Us
                  </Link>
                  <Link href="/products" className="btn-connected-pill btn-connected-pill--secondary">
                    Products
                  </Link>
                </div>
              </div>

              {/* Right Column: 3D Floating Translucent Purple Capsule Rendering */}
              <div className="reveal" style={{ display: "flex", justifyContent: "center", position: "relative" }}>
                <div style={{ position: "relative", width: "100%", maxWidth: "460px" }}>
                  <img src="/assets/images/atrimus-capsule.png" className="float-3d" alt="3D Translucent Capsule Render" style={{ width: "100%", height: "auto", filter: "drop-shadow(0 20px 35px rgba(12, 56, 37, 0.1))" }} />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══ MARSELUS BRANDS PRODUCT SHOWCASE (Clean Light Pearl Theme) ═══ */}
        <section className="section" id="products" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #edf5f1 50%, #f4faf6 100%)", padding: "var(--space-20) 0", position: "relative" }}>
          <div className="container">
            
            <div className="section-header reveal" style={{ maxWidth: "750px", margin: "0 auto var(--space-16)", textAlign: "center" }}>
              <span style={{ background: "rgba(24, 154, 180, 0.1)", color: "var(--color-accent)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 16px", borderRadius: "20px", fontWeight: 800, marginBottom: "var(--space-4)", display: "inline-block", border: "1px solid rgba(24, 154, 180, 0.2)" }}>
                Core Formulations
              </span>
              <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", color: "var(--color-navy)", fontWeight: 900, lineHeight: 1.12, textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                MARSELUS <span className="italic-accent" style={{ color: "var(--color-accent)" }}>HERO BRANDS</span>
              </h2>
              <p style={{ color: "var(--color-gray-600)", fontSize: "var(--text-lg)", marginTop: "var(--space-3)" }}>
                Four precision-engineered pharmaceutical formulations developed for superior therapeutic efficacy.
              </p>
            </div>

            <div className="products-showcase reveal-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-8)" }}>

              {/* ARTEMES Card */}
              <Link href="/products/artemes" className="atrimus-glass-card reveal" style={{ textDecoration: "none", color: "inherit", padding: "var(--space-6)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ background: "linear-gradient(135deg, rgba(24, 154, 180, 0.15) 0%, rgba(12, 56, 37, 0.08) 100%)", borderRadius: "var(--radius-xl)", height: "160px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--space-4)", marginBottom: "var(--space-6)", border: "1px solid rgba(24, 154, 180, 0.2)", position: "relative" }}>
                    <span style={{ position: "absolute", top: "12px", right: "12px", background: "var(--color-accent)", color: "#ffffff", fontSize: "10px", fontWeight: 800, padding: "3px 8px", borderRadius: "10px" }}>GASTRO</span>
                    <h3 style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--color-navy)", letterSpacing: "-0.01em" }}>ARTEMES</h3>
                    <span style={{ fontSize: "11px", color: "var(--color-accent)", fontWeight: 700, marginTop: "4px" }}>PROLONGED RELEASE</span>
                  </div>
                  <span style={{ background: "var(--color-accent-soft)", color: "var(--color-accent)", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", display: "inline-block", marginBottom: "var(--space-3)" }}>
                    Mesalamine 1.2g
                  </span>
                  <h4 style={{ fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>ARTEMES 1.2g Tablets</h4>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", lineHeight: "1.5", margin: 0 }}>
                    MMX prolonged-release technology for active ulcerative colitis &amp; gut mucosal healing.
                  </p>
                </div>
                <div style={{ marginTop: "var(--space-6)", paddingTop: "var(--space-4)", borderTop: "1px solid rgba(12, 56, 37, 0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-accent)" }}>
                  <span>Monograph Details</span>
                  <span>↗</span>
                </div>
              </Link>

              {/* SARANYA Card */}
              <Link href="/products/saranya" className="atrimus-glass-card reveal" style={{ textDecoration: "none", color: "inherit", padding: "var(--space-6)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ background: "linear-gradient(135deg, rgba(224, 86, 136, 0.15) 0%, rgba(12, 56, 37, 0.08) 100%)", borderRadius: "var(--radius-xl)", height: "160px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--space-4)", marginBottom: "var(--space-6)", border: "1px solid rgba(224, 86, 136, 0.2)", position: "relative" }}>
                    <span style={{ position: "absolute", top: "12px", right: "12px", background: "var(--color-saranya)", color: "#ffffff", fontSize: "10px", fontWeight: 800, padding: "3px 8px", borderRadius: "10px" }}>WOMEN&apos;S HEALTH</span>
                    <h3 style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--color-navy)", letterSpacing: "-0.01em" }}>SARANYA</h3>
                    <span style={{ fontSize: "11px", color: "var(--color-saranya)", fontWeight: 700, marginTop: "4px" }}>40:1 RATIO FORMULA</span>
                  </div>
                  <span style={{ background: "var(--color-saranya-soft)", color: "var(--color-saranya)", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", display: "inline-block", marginBottom: "var(--space-3)" }}>
                    Myo-Inositol + D-Chiro
                  </span>
                  <h4 style={{ fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>SARANYA Tablets</h4>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", lineHeight: "1.5", margin: 0 }}>
                    Validated 40:1 ratio for PCOS management, metabolic balance, and fertility restoration.
                  </p>
                </div>
                <div style={{ marginTop: "var(--space-6)", paddingTop: "var(--space-4)", borderTop: "1px solid rgba(12, 56, 37, 0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-saranya)" }}>
                  <span>Monograph Details</span>
                  <span>↗</span>
                </div>
              </Link>

              {/* IMMUNOMARS Card */}
              <Link href="/products/immunomars" className="atrimus-glass-card reveal" style={{ textDecoration: "none", color: "inherit", padding: "var(--space-6)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ background: "linear-gradient(135deg, rgba(46, 125, 50, 0.15) 0%, rgba(12, 56, 37, 0.08) 100%)", borderRadius: "var(--radius-xl)", height: "160px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--space-4)", marginBottom: "var(--space-6)", border: "1px solid rgba(46, 125, 50, 0.2)", position: "relative" }}>
                    <span style={{ position: "absolute", top: "12px", right: "12px", background: "var(--color-immunomars)", color: "#ffffff", fontSize: "10px", fontWeight: 800, padding: "3px 8px", borderRadius: "10px" }}>NUTRITION</span>
                    <h3 style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--color-navy)", letterSpacing: "-0.01em" }}>IMMUNOMARS</h3>
                    <span style={{ fontSize: "11px", color: "var(--color-immunomars)", fontWeight: 700, marginTop: "4px" }}>CLINICAL SACHET</span>
                  </div>
                  <span style={{ background: "var(--color-immunomars-soft)", color: "var(--color-immunomars)", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", display: "inline-block", marginBottom: "var(--space-3)" }}>
                    L-Glutamine + L-Arginine
                  </span>
                  <h4 style={{ fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>IMMUNOMARS Sachet</h4>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", lineHeight: "1.5", margin: 0 }}>
                    Immunonutrition blend engineered for clinical recovery, gut mucosal barrier defense &amp; healing.
                  </p>
                </div>
                <div style={{ marginTop: "var(--space-6)", paddingTop: "var(--space-4)", borderTop: "1px solid rgba(12, 56, 37, 0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-immunomars)" }}>
                  <span>Monograph Details</span>
                  <span>↗</span>
                </div>
              </Link>

              {/* UV 60K Card */}
              <Link href="/products/uv60k" className="atrimus-glass-card reveal" style={{ textDecoration: "none", color: "inherit", padding: "var(--space-6)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ background: "linear-gradient(135deg, rgba(230, 126, 34, 0.15) 0%, rgba(12, 56, 37, 0.08) 100%)", borderRadius: "var(--radius-xl)", height: "160px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--space-4)", marginBottom: "var(--space-6)", border: "1px solid rgba(230, 126, 34, 0.2)", position: "relative" }}>
                    <span style={{ position: "absolute", top: "12px", right: "12px", background: "#e67e22", color: "#ffffff", fontSize: "10px", fontWeight: 800, padding: "3px 8px", borderRadius: "10px" }}>VITAMIN THERAPY</span>
                    <h3 style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--color-navy)", letterSpacing: "-0.01em" }}>UV 60K</h3>
                    <span style={{ fontSize: "11px", color: "#d35400", fontWeight: 700, marginTop: "4px" }}>SOFTGEL CAPSULES</span>
                  </div>
                  <span style={{ background: "rgba(230, 126, 34, 0.1)", color: "#d35400", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", display: "inline-block", marginBottom: "var(--space-3)" }}>
                    Cholecalciferol 60,000 IU
                  </span>
                  <h4 style={{ fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>UV 60K Softgels</h4>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", lineHeight: "1.5", margin: 0 }}>
                    High-potency Vitamin D3 softgel capsules for rapid correction of severe deficiency.
                  </p>
                </div>
                <div style={{ marginTop: "var(--space-6)", paddingTop: "var(--space-4)", borderTop: "1px solid rgba(12, 56, 37, 0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "var(--text-sm)", fontWeight: 700, color: "#d35400" }}>
                  <span>Monograph Details</span>
                  <span>↗</span>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* ═══ THERAPY AREAS (Clean Light Mode + 3D DNA Visual) ═══ */}
        <section className="section" id="expertise" style={{ padding: "var(--space-20) 0", background: "#ffffff", position: "relative" }}>
          <div className="container">
            
            <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "var(--space-12)", alignItems: "center", marginBottom: "var(--space-16)" }}>
              {/* 3D Purple DNA Visual */}
              <div className="reveal" style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ position: "relative", width: "100%", maxWidth: "420px" }}>
                  <img src="/assets/images/atrimus-dna.png" className="float-3d" alt="3D Purple DNA Helix" style={{ width: "100%", height: "auto", filter: "drop-shadow(0 20px 35px rgba(12, 56, 37, 0.1))" }} />
                </div>
              </div>

              {/* Content */}
              <div className="reveal">
                <span style={{ background: "rgba(12, 56, 37, 0.08)", color: "var(--color-navy)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 14px", borderRadius: "20px", fontWeight: 800, marginBottom: "var(--space-4)", display: "inline-block" }}>
                  Therapeutic Focus
                </span>
                <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", color: "var(--color-navy)", fontWeight: 900, lineHeight: 1.12, textTransform: "uppercase", marginBottom: "var(--space-6)" }}>
                  RESEARCH &amp; DEVELOPMENT IN <span className="italic-accent" style={{ color: "var(--color-accent)" }}>SPECIALIZED MEDICINE</span>
                </h2>
                <p style={{ fontSize: "var(--text-lg)", color: "var(--color-gray-600)", lineHeight: "1.6", marginBottom: "var(--space-8)" }}>
                  Our therapeutic portfolio addresses critical gaps in patient care across Gastroenterology, Gynaecology, and Clinical Recovery through rigorous evidence-based development.
                </p>

                <div className="btn-connected-group">
                  <Link href="/science" className="btn-connected-pill btn-connected-pill--primary">
                    Scientific Data
                  </Link>
                  <Link href="/contact" className="btn-connected-pill btn-connected-pill--secondary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* 4 Light Glass Therapy Cards */}
            <div className="expertise-grid reveal-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-8)" }}>
              
              <Link href="/therapy-areas/gastroenterology" className="atrimus-glass-card reveal" style={{ textDecoration: "none", padding: "var(--space-8)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "var(--color-accent-soft)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-6)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "26px", height: "26px" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 0-2.4.6-3 1.5C8.4 5.4 7.2 6 6 6c-2.2 0-4 2-4 4.5C2 14 5 19 12 21c7-2 10-7 10-10.5C22 8 20.2 6 18 6c-1.2 0-2.4-.6-3-1.5C14.4 3.6 13.2 3 12 3z" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Gastroenterology</h3>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", lineHeight: "1.6", margin: 0 }}>
                    Targeted prolonged-release formulations for IBD, Ulcerative Colitis &amp; gut mucosal recovery.
                  </p>
                </div>
                <div style={{ marginTop: "var(--space-6)", color: "var(--color-accent)", fontWeight: 700, fontSize: "var(--text-sm)" }}>
                  Explore Area →
                </div>
              </Link>

              <Link href="/therapy-areas/womens-health" className="atrimus-glass-card reveal" style={{ textDecoration: "none", padding: "var(--space-8)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "var(--color-saranya-soft)", color: "var(--color-saranya)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-6)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "26px", height: "26px" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Women&apos;s Health</h3>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", lineHeight: "1.6", margin: 0 }}>
                    40:1 Myo-Inositol formulations engineered for PCOS, metabolic balance, and endocrine equilibrium.
                  </p>
                </div>
                <div style={{ marginTop: "var(--space-6)", color: "var(--color-saranya)", fontWeight: 700, fontSize: "var(--text-sm)" }}>
                  Explore Area →
                </div>
              </Link>

              <Link href="/therapy-areas/clinical-nutrition" className="atrimus-glass-card reveal" style={{ textDecoration: "none", padding: "var(--space-8)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "var(--color-immunomars-soft)", color: "var(--color-immunomars)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-6)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "26px", height: "26px" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Clinical Nutrition</h3>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", lineHeight: "1.6", margin: 0 }}>
                    Amino acid immunonutrition sachets designed for accelerated post-op tissue recovery.
                  </p>
                </div>
                <div style={{ marginTop: "var(--space-6)", color: "var(--color-immunomars)", fontWeight: 700, fontSize: "var(--text-sm)" }}>
                  Explore Area →
                </div>
              </Link>

              <Link href="/science" className="atrimus-glass-card reveal" style={{ textDecoration: "none", padding: "var(--space-8)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "var(--color-artemes-soft)", color: "var(--color-navy)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-6)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "26px", height: "26px" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Scientific Research</h3>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", lineHeight: "1.6", margin: 0 }}>
                    Prescribing information, product monographs, and clinical trial evidence summaries.
                  </p>
                </div>
                <div style={{ marginTop: "var(--space-6)", color: "var(--color-navy)", fontWeight: 700, fontSize: "var(--text-sm)" }}>
                  Explore Area →
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* ═══ WHY CHOOSE MARSELUS (Corporate Quality) ═══ */}
        <section className="section" id="why-choose-us" style={{ padding: "var(--space-20) 0", background: "#f8fafc" }}>
          <div className="container">
            
            <div className="section-header reveal" style={{ maxWidth: "750px", margin: "0 auto var(--space-16)", textAlign: "center" }}>
              <span style={{ background: "rgba(12, 56, 37, 0.08)", color: "var(--color-navy)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 16px", borderRadius: "20px", fontWeight: 800, marginBottom: "var(--space-4)", display: "inline-block" }}>
                Quality Standards
              </span>
              <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", color: "var(--color-navy)", fontWeight: 900, lineHeight: 1.12, textTransform: "uppercase" }}>
                WHY HEALTHCARE PROVIDERS <span className="italic-accent" style={{ color: "var(--color-accent)" }}>TRUST MARSELUS</span>
              </h2>
            </div>

            <div className="why-grid reveal-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-8)" }}>
              
              <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "var(--color-accent-soft)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-6)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "24px", height: "24px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-3)" }}>Uncompromising Quality</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", lineHeight: "1.6", margin: 0 }}>
                  ISO 9001:2015 and WHO-GMP accredited manufacturing facilities enforcing strict chemical purity protocols.
                </p>
              </div>

              <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "var(--color-saranya-soft)", color: "var(--color-saranya)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-6)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "24px", height: "24px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-3)" }}>Patient Centricity</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", lineHeight: "1.6", margin: 0 }}>
                  Bedside-driven drug design focusing on patient comfort, minimal side-effects, and easy dosage compliance.
                </p>
              </div>

              <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "var(--color-immunomars-soft)", color: "var(--color-immunomars)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-6)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "24px", height: "24px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.315 48.315 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-3)" }}>Scientific Innovation</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", lineHeight: "1.6", margin: 0 }}>
                  Ongoing research into specialized combination molecules addressing high unmet clinical needs.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ═══ LATEST SCIENTIFIC INSIGHTS ═══ */}
        <section className="section" style={{ padding: "var(--space-20) 0", background: "#ffffff" }}>
          <div className="container">
            
            <div className="section-header reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "var(--space-12)" }}>
              <div>
                <span style={{ color: "var(--color-accent)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em", fontSize: "11px" }}>
                  Scientific Publications
                </span>
                <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "var(--color-navy)", fontWeight: 900, textTransform: "uppercase", marginTop: "var(--space-2)" }}>
                  LATEST <span className="italic-accent" style={{ color: "var(--color-accent)" }}>INSIGHTS</span>
                </h2>
              </div>
              <div className="btn-connected-group">
                <Link href="/science" className="btn-connected-pill btn-connected-pill--primary">
                  View All Research
                </Link>
              </div>
            </div>

            <div className="why-grid reveal-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-8)" }}>
              
              {/* Insight Card 1 */}
              <Link href="/science" className="atrimus-glass-card reveal" style={{ textDecoration: "none", padding: "0", overflow: "hidden", display: "block" }}>
                <div style={{ width: "100%", height: "200px", overflow: "hidden", position: "relative" }}>
                  <img src="/assets/images/insight-1.png" alt="Gut Health Research" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <span style={{ position: "absolute", top: "12px", left: "12px", background: "var(--color-accent)", color: "#ffffff", fontSize: "10px", fontWeight: 800, padding: "4px 10px", borderRadius: "12px" }}>RESEARCH</span>
                </div>
                <div style={{ padding: "var(--space-6)" }}>
                  <div style={{ fontSize: "11px", color: "var(--color-gray-500)", marginBottom: "var(--space-2)", fontWeight: 700 }}>AUGUST 2024 • 5 MIN READ</div>
                  <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)", lineHeight: "1.4" }}>Advancements in Gut Health &amp; IBD Remission</h3>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", lineHeight: "1.5", margin: 0 }}>Exploring new paradigms in prolonged-release mesalamine formulations for colonic mucosal integrity.</p>
                </div>
              </Link>

              {/* Insight Card 2 */}
              <Link href="/science" className="atrimus-glass-card reveal" style={{ textDecoration: "none", padding: "0", overflow: "hidden", display: "block" }}>
                <div style={{ width: "100%", height: "200px", overflow: "hidden", position: "relative" }}>
                  <img src="/assets/images/insight-2.png" alt="PCOS Metabolic Balance" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <span style={{ position: "absolute", top: "12px", left: "12px", background: "var(--color-saranya)", color: "#ffffff", fontSize: "10px", fontWeight: 800, padding: "4px 10px", borderRadius: "12px" }}>CLINICAL UPDATE</span>
                </div>
                <div style={{ padding: "var(--space-6)" }}>
                  <div style={{ fontSize: "11px", color: "var(--color-gray-500)", marginBottom: "var(--space-2)", fontWeight: 700 }}>JULY 2024 • 4 MIN READ</div>
                  <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)", lineHeight: "1.4" }}>Metabolic Balance &amp; Inositol Ratios in PCOS</h3>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", lineHeight: "1.5", margin: 0 }}>Clinical efficacy of 40:1 Myo-Inositol &amp; D-Chiro Inositol ratios in restoring ovulation and insulin sensitivity.</p>
                </div>
              </Link>

              {/* Insight Card 3 */}
              <Link href="/science" className="atrimus-glass-card reveal" style={{ textDecoration: "none", padding: "0", overflow: "hidden", display: "block" }}>
                <div style={{ width: "100%", height: "200px", overflow: "hidden", position: "relative" }}>
                  <img src="/assets/images/insight-3.png" alt="Clinical Nutrition" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <span style={{ position: "absolute", top: "12px", left: "12px", background: "var(--color-immunomars)", color: "#ffffff", fontSize: "10px", fontWeight: 800, padding: "4px 10px", borderRadius: "12px" }}>NUTRITION</span>
                </div>
                <div style={{ padding: "var(--space-6)" }}>
                  <div style={{ fontSize: "11px", color: "var(--color-gray-500)", marginBottom: "var(--space-2)", fontWeight: 700 }}>JUNE 2024 • 6 MIN READ</div>
                  <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)", lineHeight: "1.4" }}>Immunonutrition in Post-Surgical Recovery</h3>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", lineHeight: "1.5", margin: 0 }}>The therapeutic role of targeted L-Glutamine and L-Arginine supplementation in hospital recovery.</p>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* ═══ BOTTOM CTA ═══ */}
        <section className="section" id="capsule-banner" style={{ padding: "0 0 var(--space-20) 0" }}>
          <div className="container">
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-12)", textAlign: "center", background: "linear-gradient(135deg, rgba(244, 249, 246, 0.9) 0%, rgba(226, 239, 224, 0.4) 100%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 900, color: "var(--color-navy)", textTransform: "uppercase", marginBottom: "var(--space-4)", textAlign: "center" }}>
                INNOVATING CARE, <span className="italic-accent" style={{ color: "var(--color-accent)" }}>ONE FORMULATION</span> AT A TIME
              </h2>
              <p style={{ color: "var(--color-gray-600)", fontSize: "var(--text-lg)", marginBottom: "var(--space-8)", maxWidth: "50ch", textAlign: "center" }}>
                Contact our clinical inquiry team to request prescribing guides, sample monographs, or partnership discussions.
              </p>
              <div className="btn-connected-group">
                <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary">
                  Get in Touch
                </Link>
                <Link href="/products" className="btn-connected-pill btn-connected-pill--secondary">
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ═══ MOBILE CTA ═══ */}
      <div className="mobile-cta">
        <Link href="/contact" className="btn btn--primary">Contact Us</Link>
      </div>
    </>
  );
}
