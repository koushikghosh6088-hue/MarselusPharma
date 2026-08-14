"use client";

import React, { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";
import GiantWordmark from "@/components/GiantWordmark";

interface QualityStandard {
  id: string;
  title: string;
  badge: string;
  color: string;
  description: string;
  bullets: string[];
}

const QUALITY_STANDARDS: QualityStandard[] = [
  {
    id: "iso",
    title: "ISO 9001:2015 Quality Management System",
    badge: "INTERNATIONAL CERTIFICATION",
    color: "#2488a6",
    description: "Certified operational processes covering raw material auditing, batch-to-batch chemical testing, and supply chain traceability.",
    bullets: [
      "Rigorous supplier verification for all Active Pharmaceutical Ingredients (APIs)",
      "Strict in-process control parameters checked every 15 minutes during compression",
      "Documented stability testing across tropical & accelerated climate zones",
    ],
  },
  {
    id: "gmp",
    title: "WHO-GMP Manufacturing Compliance",
    badge: "WORLD HEALTH ORGANIZATION STANDARD",
    color: "#10b981",
    description: "World Health Organization Good Manufacturing Practices enforcing absolute sterility, potency verification, and zero contamination.",
    bullets: [
      "Class 10,000 / ISO 7 cleanroom environment for sterile oral solid processing",
      "HEPA-filtered air handling units maintaining positive pressure differential",
      "Automated weight variation and friability testing for uniform dosing",
    ],
  },
  {
    id: "dissolution",
    title: "Site-Specific Dissolution Profiling",
    badge: "TARGETED DRUG DELIVERY RIGOR",
    color: "#d9a441",
    description: "Advanced USP Dissolution Apparatus testing verifying pH-dependent release kinetics for targeted GI mucosal delivery.",
    bullets: [
      "Simulated gastric fluid (pH 1.2) zero-release verification for 2 hours",
      "Simulated intestinal fluid (pH 6.8 - 7.4) complete dissolution profiling",
      "Batch certificate of analysis attached to every clinical shipment",
    ],
  },
];

export default function AboutPage() {
  const [activeQualityTab, setActiveQualityTab] = useState<string>("gmp");

  const currentQuality = QUALITY_STANDARDS.find((q) => q.id === activeQualityTab) || QUALITY_STANDARDS[0];

  return (
    <main className="page-content" style={{ paddingTop: "100px", paddingBottom: 0, background: "var(--color-cream)" }}>
      
      {/* ═══ 1. CINEMATIC HERO SHOWCASE ═══ */}
      <section className="about-hero-section spine-tab-container">
        <SpineTab label="ABOUT MARSELUS PHARMACEUTICALS" />
        <div className="about-hero-watermark">MARSELUS EST. 2003</div>

        {/* Background Radial Orbs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(circle, rgba(217, 164, 65, 0.2) 0%, rgba(16, 185, 129, 0.12) 45%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "880px", margin: "0 auto", textAlign: "center" }}>
            <span
              className="eyebrow-badge"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                color: "var(--color-gold)",
                borderColor: "rgba(217, 164, 65, 0.3)",
                marginBottom: "var(--space-4)",
              }}
            >
              ✦ SPECIALIST PHARMACEUTICAL ENTERPRISE
            </span>

            <h1
              style={{
                fontSize: "clamp(2.75rem, 5.5vw, 4.75rem)",
                color: "#ffffff",
                marginBottom: "var(--space-6)",
                lineHeight: 1.1,
                fontFamily: "var(--font-heading)",
              }}
            >
              Rooted in Kolkata.<br />
              <span className="italic-accent" style={{ color: "var(--color-gold)" }}>Driven by Science.</span>
            </h1>

            <p style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.3rem)", color: "rgba(255, 255, 255, 0.88)", lineHeight: "1.7", maxWidth: "68ch", margin: "0 auto" }}>
              Originating from Kolkata, Marselus Pharmaceuticals is a specialist pharmaceutical company committed to evidence-led innovation, uncompromised quality, and ethical patient care.
            </p>

            {/* Quick Stats Badges */}
            <div className="about-stat-pill-row">
              <div className="about-stat-pill">
                <span style={{ color: "#10b981", fontSize: "1rem" }}>●</span> 20+ Years Formulation Excellence
              </div>
              <div className="about-stat-pill">
                <span style={{ color: "var(--color-gold)", fontSize: "1rem" }}>●</span> WHO-GMP Accredited
              </div>
              <div className="about-stat-pill">
                <span style={{ color: "#2488a6", fontSize: "1rem" }}>●</span> ISO 9001:2015 Certified
              </div>
              <div className="about-stat-pill">
                <span style={{ color: "#d6438c", fontSize: "1rem" }}>●</span> 20,000+ Patients Prescribed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. OUR STORY & HERITAGE (INTERACTIVE 3D MILESTONE SHOWCASE) ═══ */}
      <section className="section" style={{ padding: "var(--space-20) 0", background: "var(--color-cream-light)", position: "relative" }}>
        <div className="container">
          <div className="grid-split" style={{ alignItems: "center" }}>
            
            {/* Left Narrative Copy */}
            <div className="reveal">
              <span className="eyebrow-label">OUR JOURNEY</span>
              <h2 style={{ marginBottom: "var(--space-6)", fontSize: "clamp(2.25rem, 4.2vw, 3.5rem)" }}>
                Heritage of <span className="italic-accent">Healing.</span>
              </h2>
              
              <div style={{ width: "60px", height: "3px", background: "var(--color-gold)", marginBottom: "var(--space-6)" }} />

              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-4)" }}>
                Originating from our humble beginning in Kolkata, India, Marselus Pharmaceuticals embarked on an inspiring journey fuelled by a passion for scientific innovation and a steadfast commitment to improving patient lives.
              </p>
              
              <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-8)" }}>
                Rooted in ethical practices, strict regulatory compliance, self-respect, and teamwork, we have flourished into a specialist pharmaceutical enterprise. Through synergistic R&amp;D collaborations, we deliver targeted solutions across Gastroenterology, Women&apos;s Health, Clinical Nutrition, and Vitamin Therapy.
              </p>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/products" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-forest)", color: "#ffffff" }}>
                  Explore Our Products →
                </Link>
                <Link href="/science" className="btn-connected-pill btn-connected-pill--secondary" style={{ borderColor: "var(--color-forest)", color: "var(--color-forest)" }}>
                  Scientific Research
                </Link>
              </div>
            </div>

            {/* Right Milestone Timeline Cards with Renders */}
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              
              {/* Milestone 1 */}
              <div className="about-journey-card" style={{ borderLeft: "5px solid #10b981" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "14px", background: "rgba(16, 185, 129, 0.12)", color: "#10b981", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, flexShrink: 0 }}>
                  2003
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                    <strong style={{ fontSize: "1.15rem", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}>Kolkata Foundation</strong>
                    <span className="slide-badge" style={{ fontSize: "10px", background: "rgba(16, 185, 129, 0.15)", color: "#10b981" }}>ESTABLISHED</span>
                  </div>
                  <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", margin: 0, lineHeight: 1.5 }}>
                    Founded with a vision to deliver reliable, high-integrity specialty formulations to healthcare providers across Eastern India.
                  </p>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="about-journey-card" style={{ borderLeft: "5px solid var(--color-gold)" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "14px", background: "rgba(217, 164, 65, 0.12)", color: "var(--color-gold)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, flexShrink: 0 }}>
                  EXP
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                    <strong style={{ fontSize: "1.15rem", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}>Therapy Expansion</strong>
                    <span className="slide-badge" style={{ fontSize: "10px", background: "rgba(217, 164, 65, 0.15)", color: "var(--color-forest-dark)" }}>GROWTH</span>
                  </div>
                  <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", margin: 0, lineHeight: 1.5 }}>
                    Expanded into Gastroenterology, Women&apos;s Health, Clinical Nutrition, and High-Potency Vitamin D3 therapies.
                  </p>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="about-journey-card" style={{ borderLeft: "5px solid #2488a6" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "14px", background: "rgba(36, 136, 166, 0.12)", color: "#2488a6", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, flexShrink: 0 }}>
                  ISO
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                    <strong style={{ fontSize: "1.15rem", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}>Quality Accreditation</strong>
                    <span className="slide-badge" style={{ fontSize: "10px", background: "rgba(36, 136, 166, 0.15)", color: "#2488a6" }}>ISO 9001:2015</span>
                  </div>
                  <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", margin: 0, lineHeight: 1.5 }}>
                    Achieved WHO-GMP manufacturing compliance and ISO 9001:2015 certified Quality Management Systems.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═══ 3. EDITORIAL CHARTER STATEMENT (LUXURY GLASS BOX) ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0" }}>
        <div className="container">
          <div
            className="vision-card-editorial reveal"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "32px",
              background: "linear-gradient(135deg, #07261d 0%, #0d3844 50%, #07261d 100%)",
              border: "1.5px solid rgba(217, 164, 65, 0.45)",
              boxShadow: "0 22px 60px rgba(0, 0, 0, 0.35)",
              padding: "clamp(32px, 5vw, 60px)",
            }}
          >
            {/* Background Glow */}
            <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "350px", height: "350px", borderRadius: "50%", background: "var(--color-gold)", filter: "blur(100px)", opacity: 0.2, pointerEvents: "none" }} />

            <span className="eyebrow-badge" style={{ background: "rgba(217, 164, 65, 0.2)", color: "var(--color-gold)", borderColor: "rgba(217, 164, 65, 0.4)", marginBottom: "var(--space-6)" }}>
              OUR GUIDING CORPORATE CHARTER
            </span>

            <blockquote style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.35rem)", fontFamily: "var(--font-heading)", fontStyle: "italic", lineHeight: "1.5", color: "#ffffff", marginBottom: "var(--space-8)" }}>
              &ldquo;To set a global benchmark in the pharmaceutical industry for innovation, ethical practices, and collaborative excellence — fostering a culture that values integrity, respect, and teamwork, so we can lead breakthroughs that anticipate and shape the future of health.&rdquo;
            </blockquote>

            <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
              <div>
                <strong style={{ display: "block", fontSize: "1.15rem", color: "var(--color-gold)", fontFamily: "var(--font-heading)" }}>Marselus Corporate Charter</strong>
                <span style={{ fontSize: "0.88rem", color: "rgba(247, 244, 236, 0.8)" }}>Specialist Pharmaceuticals Division</span>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <span className="verify-tag" style={{ background: "rgba(255, 255, 255, 0.1)", color: "var(--color-gold)", borderColor: "rgba(217, 164, 65, 0.4)", fontSize: "11px" }}>
                  ✦ Verified Official Corporate Charter Statement
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 4. WHAT DRIVES US — 4 VIBRANT CORE PILLARS ═══ */}
      <section className="section" style={{ padding: "var(--space-12) 0 var(--space-20) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto var(--space-14)" }}>
            <span className="eyebrow-label">OUR CORE PRINCIPLES</span>
            <h2>What <span className="italic-accent">Drives Us.</span></h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)" }}>
              Four foundational pillars shaping every formulation, clinical interaction, and partnership at Marselus.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-6)" }}>
            
            {/* Pillar 1 */}
            <div className="about-pillar-card reveal" style={{ borderTop: "4px solid #10b981", background: "linear-gradient(145deg, rgba(16, 185, 129, 0.05) 0%, #ffffff 100%)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
                <span className="eyebrow-badge" style={{ color: "#10b981", borderColor: "rgba(16, 185, 129, 0.3)" }}>
                  INTEGRITY
                </span>
                <span style={{ fontSize: "1.25rem", fontWeight: "900", color: "#10b981" }}>01</span>
              </div>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "var(--space-3)", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}>Ethics &amp; Compliance</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.65", margin: 0 }}>
                Unwavering adherence to WHO-GMP standards, regulatory compliance, and ethical pharmaceutical practices across all distribution networks.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="about-pillar-card reveal" style={{ borderTop: "4px solid var(--color-gold)", background: "linear-gradient(145deg, rgba(217, 164, 65, 0.05) 0%, #ffffff 100%)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
                <span className="eyebrow-badge" style={{ color: "var(--color-gold)", borderColor: "rgba(217, 164, 65, 0.3)" }}>
                  CULTURE
                </span>
                <span style={{ fontSize: "1.25rem", fontWeight: "900", color: "var(--color-gold)" }}>02</span>
              </div>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "var(--space-3)", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}>Collaborative Teamwork</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.65", margin: 0 }}>
                Fostering an inclusive workplace where self-respect, mutual trust, and shared purpose drive daily operational performance.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="about-pillar-card reveal" style={{ borderTop: "4px solid #2488a6", background: "linear-gradient(145deg, rgba(36, 136, 166, 0.05) 0%, #ffffff 100%)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
                <span className="eyebrow-badge" style={{ color: "#2488a6", borderColor: "rgba(36, 136, 166, 0.3)" }}>
                  INNOVATION
                </span>
                <span style={{ fontSize: "1.25rem", fontWeight: "900", color: "#2488a6" }}>03</span>
              </div>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "var(--space-3)", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}>Scientific Excellence</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.65", margin: 0 }}>
                Continuous investment in novel drug delivery mechanisms to solve complex therapeutic challenges in gastroenterology and PCOS.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="about-pillar-card reveal" style={{ borderTop: "4px solid #d6438c", background: "linear-gradient(145deg, rgba(214, 67, 140, 0.05) 0%, #ffffff 100%)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
                <span className="eyebrow-badge" style={{ color: "#d6438c", borderColor: "rgba(214, 67, 140, 0.3)" }}>
                  CARE
                </span>
                <span style={{ fontSize: "1.25rem", fontWeight: "900", color: "#d6438c" }}>04</span>
              </div>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "var(--space-3)", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}>Patient Centricity</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.65", margin: 0 }}>
                Designing formulations that prioritize patient adherence, minimal gastric discomfort, and long-term therapeutic outcomes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 5. MANUFACTURING EXCELLENCE & INTERACTIVE QUALITY LAB ═══ */}
      <section className="section" style={{ padding: "0 0 var(--space-20) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="grid-split" style={{ alignItems: "center" }}>
            
            {/* Left Quality Interactive Accordion */}
            <div className="reveal">
              <span className="eyebrow-label">QUALITY ASSURANCE</span>
              <h2 style={{ marginBottom: "var(--space-6)", fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
                Manufacturing <span className="italic-accent">Excellence.</span>
              </h2>
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.65", marginBottom: "var(--space-6)" }}>
                Our accredited manufacturing partners maintain WHO-GMP compliance and an ISO 9001:2015 certified Quality Management System, ensuring rigorous batch-to-batch consistency.
              </p>

              {/* Quality Standard Selector Tabs */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "var(--space-6)" }}>
                {QUALITY_STANDARDS.map((q) => {
                  const isSel = q.id === activeQualityTab;
                  return (
                    <button
                      key={q.id}
                      onClick={() => setActiveQualityTab(q.id)}
                      style={{
                        padding: "8px 16px",
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontWeight: "900",
                        letterSpacing: "0.08em",
                        border: isSel ? `2px solid ${q.color}` : "1px solid rgba(15, 61, 40, 0.15)",
                        background: isSel ? q.color : "#ffffff",
                        color: isSel ? "#ffffff" : "var(--color-forest-dark)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {q.id.toUpperCase()}
                    </button>
                  );
                })}
              </div>

              {/* Active Quality Panel Display */}
              <div
                style={{
                  padding: "24px",
                  borderRadius: "20px",
                  background: "#ffffff",
                  border: `2px solid ${currentQuality.color}`,
                  boxShadow: `0 12px 30px ${currentQuality.color}22`,
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: "900",
                    letterSpacing: "0.14em",
                    color: currentQuality.color,
                    background: "rgba(15, 61, 40, 0.05)",
                    padding: "4px 12px",
                    borderRadius: "12px",
                    textTransform: "uppercase",
                    display: "inline-block",
                    marginBottom: "12px",
                  }}
                >
                  {currentQuality.badge}
                </span>

                <h3 style={{ fontSize: "1.35rem", fontFamily: "var(--font-heading)", fontWeight: "900", color: "var(--color-forest-dark)", marginBottom: "8px" }}>
                  {currentQuality.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6", marginBottom: "16px" }}>
                  {currentQuality.description}
                </p>

                <ul style={{ paddingLeft: "18px", margin: 0, fontSize: "0.85rem", color: "var(--color-forest-dark)", lineHeight: "1.6" }}>
                  {currentQuality.bullets.map((bullet, i) => (
                    <li key={i} style={{ marginBottom: "6px" }}>{bullet}</li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right 3D Quality Shield Card */}
            <div className="reveal" style={{ textAlign: "center" }}>
              <div
                className="atrimus-glass-card"
                style={{
                  padding: "var(--space-10)",
                  background: "#ffffff",
                  borderRadius: "32px",
                  border: "2px solid rgba(16, 185, 129, 0.25)",
                  boxShadow: "0 22px 50px rgba(15, 61, 40, 0.1), 0 0 30px rgba(16, 185, 129, 0.1) inset",
                }}
              >
                <img
                  src="/assets/images/3d-shield.png"
                  alt="3D Quality Shield Render"
                  style={{
                    width: "70%",
                    height: "auto",
                    margin: "0 auto var(--space-6)",
                    filter: "drop-shadow(0 18px 35px rgba(15, 61, 40, 0.2))",
                  }}
                />
                
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: "900",
                    letterSpacing: "0.14em",
                    color: "#10b981",
                    background: "rgba(16, 185, 129, 0.12)",
                    padding: "6px 16px",
                    borderRadius: "20px",
                    display: "inline-block",
                    marginBottom: "12px",
                  }}
                >
                  ✦ 100% ANALYTICAL TESTING
                </span>

                <h4 style={{ fontSize: "1.35rem", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)", marginBottom: "6px" }}>
                  Rigorous Quality Audits
                </h4>
                <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", margin: 0, maxWidth: "34ch", marginLeft: "auto", marginRight: "auto" }}>
                  Every production batch undergoes full analytical and dissolution testing before clinical release.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 6. REGULATORY LEADERSHIP NOTICE CARD ═══ */}
      <section className="section" style={{ padding: "var(--space-12) 0 var(--space-16) 0" }}>
        <div className="container">
          <div
            style={{
              background: "linear-gradient(135deg, rgba(15, 61, 40, 0.05) 0%, rgba(217, 164, 65, 0.05) 100%)",
              padding: "var(--space-8)",
              borderRadius: "24px",
              border: "1.5px dashed rgba(217, 164, 65, 0.4)",
              textAlign: "center",
            }}
          >
            <span className="verify-tag" style={{ marginBottom: "var(--space-3)", background: "rgba(217, 164, 65, 0.15)", color: "var(--color-forest-dark)", borderColor: "rgba(217, 164, 65, 0.4)" }}>
              REGULATORY COMPLIANCE NOTICE
            </span>
            <h4 style={{ fontSize: "1.2rem", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)", marginBottom: "6px" }}>
              Corporate Leadership &amp; Board Directory
            </h4>
            <p style={{ fontSize: "0.92rem", color: "var(--color-text-muted)", maxWidth: "58ch", margin: "0 auto" }}>
              Detailed executive bios and medical board member profiles are currently undergoing regulatory compliance review and will be published upon approval.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 7. GIANT WORDMARK FOOTER REVEAL ═══ */}
      <GiantWordmark />

    </main>
  );
}
