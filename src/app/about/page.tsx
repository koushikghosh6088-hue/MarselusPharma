"use client";

import React from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";
import GiantWordmark from "@/components/GiantWordmark";

export default function AboutPage() {
  return (
    <main className="page-content" style={{ paddingTop: "100px", paddingBottom: 0, background: "var(--color-cream)" }}>
      
      {/* ═══ 1. CINEMATIC HERO SHOWCASE ═══ */}
      <section
        className="about-hero-section spine-tab-container"
        style={{
          padding: "var(--space-16) 0 var(--space-16) 0",
          background: "linear-gradient(135deg, #051a14 0%, #092c34 50%, #051a14 100%)",
          color: "#ffffff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <SpineTab label="ABOUT MARSELUS PHARMACEUTICALS" />
        <div className="about-hero-watermark">MARSELUS EST. 2024</div>

        {/* Animated Radial Color Orbs */}
        <div
          className="pulsing-aura-orb"
          style={{
            position: "absolute",
            top: "-80px",
            left: "15%",
            width: "450px",
            height: "450px",
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="pulsing-aura-orb"
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "15%",
            width: "450px",
            height: "450px",
            background: "radial-gradient(circle, rgba(214, 67, 140, 0.25) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
              alignItems: "center",
            }}
          >
            {/* Left Copy */}
            <div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "11px",
                  fontWeight: "900",
                  letterSpacing: "0.16em",
                  color: "var(--color-gold)",
                  background: "rgba(217, 164, 65, 0.15)",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  border: "1px solid rgba(217, 164, 65, 0.4)",
                  marginBottom: "var(--space-4)",
                  textTransform: "uppercase",
                }}
              >
                ✦ ESTABLISHED IN KOLKATA · SPECIALIST PHARMA
              </span>

              <h1
                style={{
                  fontSize: "clamp(2.5rem, 4.8vw, 4.25rem)",
                  color: "#ffffff",
                  marginBottom: "var(--space-6)",
                  lineHeight: 1.1,
                  fontFamily: "var(--font-heading)",
                  fontWeight: "900",
                }}
              >
                Rooted in Kolkata.<br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #d9a441 50%, #d6438c 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Driven by Science &amp; Care.
                </span>
              </h1>

              <p style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.88)", lineHeight: "1.7", marginBottom: "var(--space-8)" }}>
                Marselus Pharmaceuticals is a specialist pharmaceutical enterprise committed to targeted oral drug delivery, WHO-GMP quality assurance, and patient-centric therapy.
              </p>

              {/* Colorful Stat Pills */}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <span style={{ padding: "8px 16px", borderRadius: "20px", background: "rgba(16, 185, 129, 0.2)", color: "#34d399", border: "1px solid #10b981", fontSize: "11px", fontWeight: "900" }}>
                  ✦ 2+ YEARS HERITAGE
                </span>
                <span style={{ padding: "8px 16px", borderRadius: "20px", background: "rgba(217, 164, 65, 0.2)", color: "var(--color-gold)", border: "1px solid #d9a441", fontSize: "11px", fontWeight: "900" }}>
                  ✦ WHO-GMP ACCREDITED
                </span>
                <span style={{ padding: "8px 16px", borderRadius: "20px", background: "rgba(36, 136, 166, 0.2)", color: "#38bdf8", border: "1px solid #2488a6", fontSize: "11px", fontWeight: "900" }}>
                  ✦ ISO 9001:2015 CERTIFIED
                </span>
                <span style={{ padding: "8px 16px", borderRadius: "20px", background: "rgba(214, 67, 140, 0.2)", color: "#f472b6", border: "1px solid #d6438c", fontSize: "11px", fontWeight: "900" }}>
                  ✦ 20,000+ PATIENTS
                </span>
              </div>
            </div>

            {/* Right Floating 3D Graphic */}
            <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div
                className="floating-3d-asset"
                style={{
                  padding: "24px",
                  borderRadius: "28px",
                  background: "rgba(8, 30, 24, 0.85)",
                  backdropFilter: "blur(20px)",
                  border: "2px solid rgba(16, 185, 129, 0.4)",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.45), 0 0 30px rgba(16, 185, 129, 0.2) inset",
                  textAlign: "center",
                  maxWidth: "320px",
                  width: "100%",
                }}
              >
                <img
                  src="/assets/images/3d-shield.png"
                  alt="3D Quality Shield Render"
                  style={{
                    width: "70%",
                    maxHeight: "180px",
                    objectFit: "contain",
                    margin: "0 auto 16px",
                    filter: "drop-shadow(0 12px 25px rgba(16, 185, 129, 0.3))",
                  }}
                />
                
                <div style={{ fontSize: "11px", fontWeight: "900", color: "#10b981", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}>
                  ✦ QUALITY CONTROL SHIELD
                </div>
                <div style={{ fontSize: "1.1rem", fontFamily: "var(--font-heading)", color: "#ffffff", fontWeight: 900 }}>
                  100% Analytical Batch Testing
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 2. OUR KOLKATA HERITAGE & JOURNEY (OPEN SCROLLING SECTION) ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="grid-split" style={{ alignItems: "center" }}>
            
            {/* Narrative */}
            <div>
              <span className="eyebrow-label" style={{ color: "#10b981" }}>OUR CORPORATE JOURNEY</span>
              <h2 style={{ marginBottom: "var(--space-6)", fontSize: "clamp(2rem, 3.8vw, 3.25rem)" }}>
                A Heritage of <span className="italic-accent" style={{ color: "#10b981" }}>Healing &amp; Trust.</span>
              </h2>
              
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.75", marginBottom: "var(--space-4)" }}>
                Founded in Kolkata, India, Marselus Pharmaceuticals began with a singular vision: to bridge the gap between high-level pharmaceutical research and accessible, patient-friendly therapeutic options.
              </p>
              
              <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.75", marginBottom: "var(--space-6)" }}>
                Over 2 years of dedicated innovation, we have maintained an unyielding focus on quality, ethical compliance, and clinical evidence. By collaborating with leading clinicians and certified manufacturing units, Marselus has established a strong presence in Gastroenterology, Women&apos;s Health, Clinical Nutrition, and Vitamin Therapy.
              </p>

              <div style={{ padding: "18px 24px", background: "#ffffff", borderRadius: "16px", borderLeft: "4px solid #10b981", boxShadow: "0 8px 24px rgba(15, 61, 40, 0.06)" }}>
                <div style={{ fontSize: "0.95rem", fontWeight: "800", color: "var(--color-forest-dark)" }}>
                  ✦ &ldquo;Ethics, team respect, and quality control remain the cornerstone of every tablet, capsule, and sachet we produce.&rdquo;
                </div>
              </div>
            </div>

            {/* Milestones */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              
              <div style={{ padding: "20px", borderRadius: "18px", background: "#ffffff", border: "1.5px solid rgba(16, 185, 129, 0.2)", borderLeft: "5px solid #10b981", boxShadow: "0 10px 25px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <strong style={{ fontSize: "1.1rem", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}>Kolkata Founding</strong>
                  <span style={{ fontSize: "10px", fontWeight: "900", padding: "4px 10px", borderRadius: "12px", background: "rgba(16, 185, 129, 0.15)", color: "#10b981" }}>EST. 2024</span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", margin: 0, lineHeight: "1.5" }}>
                  Inception in Kolkata with a focus on delivering high-integrity formulations across Eastern India.
                </p>
              </div>

              <div style={{ padding: "20px", borderRadius: "18px", background: "#ffffff", border: "1.5px solid rgba(217, 164, 65, 0.25)", borderLeft: "5px solid var(--color-gold)", boxShadow: "0 10px 25px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <strong style={{ fontSize: "1.1rem", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}>Specialty Portfolio Launch</strong>
                  <span style={{ fontSize: "10px", fontWeight: "900", padding: "4px 10px", borderRadius: "12px", background: "rgba(217, 164, 65, 0.15)", color: "var(--color-forest-dark)" }}>PORTFOLIO</span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", margin: 0, lineHeight: "1.5" }}>
                  Engineered flagship brands ARTEMES™ 1.2g (Mesalamine), SARANYA® (Inositol 40:1), IMMUNOMARS™ (L-Glutamine), and UV 60K® (Vitamin D3).
                </p>
              </div>

              <div style={{ padding: "20px", borderRadius: "18px", background: "#ffffff", border: "1.5px solid rgba(36, 136, 166, 0.2)", borderLeft: "5px solid #2488a6", boxShadow: "0 10px 25px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <strong style={{ fontSize: "1.1rem", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}>WHO-GMP Accreditation</strong>
                  <span style={{ fontSize: "10px", fontWeight: "900", padding: "4px 10px", borderRadius: "12px", background: "rgba(36, 136, 166, 0.15)", color: "#2488a6" }}>QUALITY CERTIFIED</span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", margin: 0, lineHeight: "1.5" }}>
                  Achieved WHO-GMP sterile processing standards and ISO 9001:2015 certified Quality Management System.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═══ 3. FOUR SPECIALTY BRAND FORMULATIONS ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "740px", margin: "0 auto var(--space-12)" }}>
            <span className="eyebrow-label">OUR FORMULATIONS PORTFOLIO</span>
            <h2>Four Targeted <span className="italic-accent" style={{ color: "#d9a441" }}>Specialty Formulations.</span></h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)" }}>
              Engineered with advanced drug delivery mechanics for gastroenterology, women&apos;s health, clinical nutrition, and vitamin therapy.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            
            {/* Brand 1 */}
            <div style={{ padding: "24px", borderRadius: "20px", background: "linear-gradient(145deg, rgba(16, 185, 129, 0.08) 0%, #ffffff 100%)", border: "1.5px solid rgba(16, 185, 129, 0.3)", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}>
              <span style={{ fontSize: "10px", fontWeight: "900", padding: "4px 10px", borderRadius: "12px", background: "rgba(16, 185, 129, 0.15)", color: "#10b981" }}>GASTROENTEROLOGY</span>
              <h3 style={{ fontSize: "1.45rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", margin: "10px 0 6px 0" }}>ARTEMES™ 1.2g</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.6, marginBottom: "16px" }}>
                Mesalamine 1.2g Prolonged Release Tablets with pH &gt; 6.8 targeted colonic dissolution for IBD remission.
              </p>
              <Link href="/products/artemes" style={{ fontSize: "12px", fontWeight: "900", color: "#10b981", textDecoration: "none" }}>
                Inspect Monograph →
              </Link>
            </div>

            {/* Brand 2 */}
            <div style={{ padding: "24px", borderRadius: "20px", background: "linear-gradient(145deg, rgba(214, 67, 140, 0.08) 0%, #ffffff 100%)", border: "1.5px solid rgba(214, 67, 140, 0.3)", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}>
              <span style={{ fontSize: "10px", fontWeight: "900", padding: "4px 10px", borderRadius: "12px", background: "rgba(214, 67, 140, 0.15)", color: "#d6438c" }}>WOMEN&apos;S HEALTH</span>
              <h3 style={{ fontSize: "1.45rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", margin: "10px 0 6px 0" }}>SARANYA®</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.6, marginBottom: "16px" }}>
                Myo-Inositol + D-Chiro Inositol (40:1) + Chromium + Vit D2 for PCOS &amp; metabolic endocrine balance.
              </p>
              <Link href="/products/saranya" style={{ fontSize: "12px", fontWeight: "900", color: "#d6438c", textDecoration: "none" }}>
                Inspect Monograph →
              </Link>
            </div>

            {/* Brand 3 */}
            <div style={{ padding: "24px", borderRadius: "20px", background: "linear-gradient(145deg, rgba(224, 138, 46, 0.08) 0%, #ffffff 100%)", border: "1.5px solid rgba(224, 138, 46, 0.3)", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}>
              <span style={{ fontSize: "10px", fontWeight: "900", padding: "4px 10px", borderRadius: "12px", background: "rgba(224, 138, 46, 0.15)", color: "#e08a2e" }}>CLINICAL NUTRITION</span>
              <h3 style={{ fontSize: "1.45rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", margin: "10px 0 6px 0" }}>IMMUNOMARS™</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.6, marginBottom: "16px" }}>
                L-Glutamine 15g + Micronutrient Sachets for enterocyte fuel and gut mucosal barrier rebuild.
              </p>
              <Link href="/products/immunomars" style={{ fontSize: "12px", fontWeight: "900", color: "#e08a2e", textDecoration: "none" }}>
                Inspect Monograph →
              </Link>
            </div>

            {/* Brand 4 */}
            <div style={{ padding: "24px", borderRadius: "20px", background: "linear-gradient(145deg, rgba(36, 136, 166, 0.08) 0%, #ffffff 100%)", border: "1.5px solid rgba(36, 136, 166, 0.3)", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}>
              <span style={{ fontSize: "10px", fontWeight: "900", padding: "4px 10px", borderRadius: "12px", background: "rgba(36, 136, 166, 0.15)", color: "#2488a6" }}>VITAMIN THERAPY</span>
              <h3 style={{ fontSize: "1.45rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", margin: "10px 0 6px 0" }}>UV 60K®</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.6, marginBottom: "16px" }}>
                Cholecalciferol (Vitamin D3) 60,000 IU Softgel Capsule for rapid deficiency correction.
              </p>
              <Link href="/products/uv60k" style={{ fontSize: "12px", fontWeight: "900", color: "#2488a6", textDecoration: "none" }}>
                Inspect Monograph →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 4. WHO-GMP MANUFACTURING & QUALITY CONTROL LAB ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="grid-split" style={{ alignItems: "center" }}>
            
            {/* Left Column Quality Breakdown */}
            <div>
              <span className="eyebrow-label" style={{ color: "#2488a6" }}>QUALITY ASSURANCE</span>
              <h2 style={{ marginBottom: "var(--space-6)", fontSize: "clamp(2rem, 3.8vw, 3.25rem)" }}>
                WHO-GMP &amp; ISO <span className="italic-accent" style={{ color: "#2488a6" }}>Quality Rigor.</span>
              </h2>
              
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-6)" }}>
                Our accredited manufacturing partners maintain WHO-GMP compliance and an ISO 9001:2015 certified Quality Management System, ensuring batch-to-batch precision.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ padding: "16px", borderRadius: "16px", background: "#ffffff", borderLeft: "4px solid #10b981", boxShadow: "0 6px 18px rgba(0,0,0,0.03)" }}>
                  <strong style={{ color: "#10b981", fontSize: "0.95rem" }}>WHO-GMP Cleanroom Standards</strong>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>Class 10,000 / ISO 7 cleanroom environment with HEPA filtration and positive differential pressure.</p>
                </div>

                <div style={{ padding: "16px", borderRadius: "16px", background: "#ffffff", borderLeft: "4px solid #2488a6", boxShadow: "0 6px 18px rgba(0,0,0,0.03)" }}>
                  <strong style={{ color: "#2488a6", fontSize: "0.95rem" }}>ISO 9001:2015 Raw API Traceability</strong>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>100% verified vendor auditing for Active Pharmaceutical Ingredients (APIs) with complete batch logging.</p>
                </div>

                <div style={{ padding: "16px", borderRadius: "16px", background: "#ffffff", borderLeft: "4px solid #d9a441", boxShadow: "0 6px 18px rgba(0,0,0,0.03)" }}>
                  <strong style={{ color: "#d9a441", fontSize: "0.95rem" }}>USP Dissolution Kinetics Testing</strong>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>USP Apparatus testing verifying zero gastric release at pH 1.2 and targeted dissolution at colonic pH (&gt; 6.8).</p>
                </div>
              </div>
            </div>

            {/* Right Sterility Meter Box */}
            <div style={{ textAlign: "center" }}>
              <div style={{ padding: "32px", borderRadius: "28px", background: "#ffffff", border: "2px solid #2488a6", boxShadow: "0 18px 45px rgba(36,136,166,0.12)" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: "900", color: "#2488a6", fontFamily: "var(--font-heading)" }}>99.9%</div>
                <div style={{ fontSize: "0.9rem", fontWeight: "800", color: "var(--color-forest-dark)", marginTop: "4px" }}>Analytical Sterility &amp; Purity Index</div>
                
                <div style={{ height: "8px", width: "100%", background: "rgba(36,136,166,0.15)", borderRadius: "10px", marginTop: "16px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "99.9%", background: "#2488a6" }} />
                </div>

                <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", marginTop: "16px", margin: "16px 0 0 0" }}>
                  Every batch receives a verified Certificate of Analysis (CoA) prior to clinical distribution.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 5. FOUR CORE CORPORATE VALUES & GUIDING CHARTER ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0" }}>
        <div className="container">
          
          <div style={{ textAlign: "center", maxWidth: "740px", margin: "0 auto var(--space-12)" }}>
            <span className="eyebrow-label">OUR GUIDING PRINCIPLES</span>
            <h2>Four Pillars of <span className="italic-accent" style={{ color: "#d6438c" }}>Excellence.</span></h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)" }}>
              The operational values that dictate our drug development, workplace culture, and clinical partnerships.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "var(--space-12)" }}>
            
            <div style={{ padding: "24px", borderRadius: "20px", background: "#ffffff", borderTop: "4px solid #10b981", boxShadow: "0 10px 25px rgba(0,0,0,0.04)" }}>
              <div style={{ fontSize: "1.25rem", fontWeight: "900", color: "#10b981", marginBottom: "6px" }}>01</div>
              <h3 style={{ fontSize: "1.3rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", marginBottom: "6px" }}>Ethics &amp; Compliance</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>Rigorous compliance with WHO-GMP regulations and ethical pharmaceutical practices.</p>
            </div>

            <div style={{ padding: "24px", borderRadius: "20px", background: "#ffffff", borderTop: "4px solid #d9a441", boxShadow: "0 10px 25px rgba(0,0,0,0.04)" }}>
              <div style={{ fontSize: "1.25rem", fontWeight: "900", color: "#d9a441", marginBottom: "6px" }}>02</div>
              <h3 style={{ fontSize: "1.3rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", marginBottom: "6px" }}>Collaborative Culture</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>Fostering teamwork, self-respect, and inclusive collaboration across all departments.</p>
            </div>

            <div style={{ padding: "24px", borderRadius: "20px", background: "#ffffff", borderTop: "4px solid #2488a6", boxShadow: "0 10px 25px rgba(0,0,0,0.04)" }}>
              <div style={{ fontSize: "1.25rem", fontWeight: "900", color: "#2488a6", marginBottom: "6px" }}>03</div>
              <h3 style={{ fontSize: "1.3rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", marginBottom: "6px" }}>Scientific Innovation</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>Advancing targeted oral drug delivery kinetics to maximize mucosal bio-availability.</p>
            </div>

            <div style={{ padding: "24px", borderRadius: "20px", background: "#ffffff", borderTop: "4px solid #d6438c", boxShadow: "0 10px 25px rgba(0,0,0,0.04)" }}>
              <div style={{ fontSize: "1.25rem", fontWeight: "900", color: "#d6438c", marginBottom: "6px" }}>04</div>
              <h3 style={{ fontSize: "1.3rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", marginBottom: "6px" }}>Patient Centricity</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>Prioritizing once-daily compliance, minimal gastric irritation, and long-term health outcomes.</p>
            </div>

          </div>

          {/* Luxury Charter Quote Box */}
          <div
            style={{
              padding: "clamp(28px, 4vw, 48px)",
              borderRadius: "28px",
              background: "linear-gradient(135deg, #07261d 0%, #0d3844 50%, #07261d 100%)",
              border: "1.5px solid rgba(217, 164, 65, 0.45)",
              color: "#ffffff",
              boxShadow: "0 22px 60px rgba(0, 0, 0, 0.3)",
            }}
          >
            <span style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.14em", color: "var(--color-gold)", background: "rgba(217, 164, 65, 0.2)", padding: "4px 14px", borderRadius: "16px", textTransform: "uppercase", display: "inline-block", marginBottom: "16px" }}>
              ✦ OFFICIAL CORPORATE CHARTER STATEMENT
            </span>

            <blockquote style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.85rem)", fontFamily: "var(--font-heading)", fontStyle: "italic", lineHeight: 1.55, margin: "0 0 20px 0" }}>
              &ldquo;To set a global benchmark in the pharmaceutical industry for innovation, ethical practices, and collaborative excellence — fostering a culture that values integrity, respect, and teamwork, so we can lead breakthroughs that anticipate and shape the future of health.&rdquo;
            </blockquote>

            <div style={{ fontSize: "0.88rem", color: "var(--color-gold)", fontWeight: "800" }}>
              Marselus Pharmaceuticals Executive Charter
            </div>
          </div>

        </div>
      </section>

      {/* ═══ 6. REGULATORY LEADERSHIP NOTICE ═══ */}
      <section className="section" style={{ padding: "0 0 var(--space-16) 0" }}>
        <div className="container">
          <div
            style={{
              background: "rgba(15, 61, 40, 0.04)",
              padding: "24px",
              borderRadius: "20px",
              border: "1.5px dashed rgba(16, 185, 129, 0.3)",
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.14em", color: "#10b981", background: "rgba(16, 185, 129, 0.12)", padding: "4px 12px", borderRadius: "12px", display: "inline-block", marginBottom: "8px" }}>
              REGULATORY COMPLIANCE NOTICE
            </span>
            <h4 style={{ fontSize: "1.15rem", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)", marginBottom: "4px" }}>
              Corporate Leadership Directory
            </h4>
            <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", maxWidth: "56ch", margin: "0 auto" }}>
              Executive officer profiles and medical board member bios are currently undergoing regulatory compliance review and will be published upon approval.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 7. GIANT WORDMARK FOOTER REVEAL ═══ */}
      <GiantWordmark />

    </main>
  );
}
