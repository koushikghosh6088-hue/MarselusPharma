"use client";

import React, { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";
import GiantWordmark from "@/components/GiantWordmark";

interface Monograph {
  id: string;
  name: string;
  generic: string;
  category: string;
  color: string;
  badgeBg: string;
  glowColor: string;
  image: string;
  dissolutionMetric: string;
  trialResult: string;
  description: string;
  keyDataPoints: string[];
  pdfLabel: string;
}

const MONOGRAPHS: Monograph[] = [
  {
    id: "artemes",
    name: "ARTEMES™ 1.2g Monograph",
    generic: "Mesalamine 1.2g Prolonged Release Tablets",
    category: "GASTROENTEROLOGY",
    color: "#10b981",
    badgeBg: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    glowColor: "rgba(16, 185, 129, 0.4)",
    image: "/assets/images/capsule-release.png",
    dissolutionMetric: "pH > 6.8 Colonic Release",
    trialResult: "99.2% Mucosal Targeted Precision",
    description: "Comprehensive pharmacokinetics and phase-III trial data for site-specific colonic mesalamine delivery in ulcerative colitis.",
    keyDataPoints: [
      "Zero gastric dissolution at pH 1.2 for 2 hours in USP Apparatus testing",
      "Sustained 5-ASA concentration in distal ileum & colon lumen",
      "Statistically significant reduction in DAI (Disease Activity Index) at week 8",
    ],
    pdfLabel: "Download ARTEMES 1.2g Prescribing Monograph (PDF)",
  },
  {
    id: "saranya",
    name: "SARANYA® Clinical Monograph",
    generic: "Myo-Inositol + D-Chiro Inositol (40:1) + Chromium + Vit D2",
    category: "WOMEN'S HEALTH",
    color: "#d6438c",
    badgeBg: "linear-gradient(135deg, #d6438c 0%, #be185d 100%)",
    glowColor: "rgba(214, 67, 140, 0.4)",
    image: "/assets/images/capsules-dual.png",
    dissolutionMetric: "40 : 1 Physiological Ratio",
    trialResult: "Clinical Grade Endocrine Restore",
    description: "Clinical evidence for restoring ovarian insulin sensitivity, follicular maturation, and reducing hyperandrogenism in PCOS.",
    keyDataPoints: [
      "Mirrors physiological plasma 40:1 Myo to D-Chiro Inositol ratio",
      "Upregulates intracellular GLUT-4 glucose receptor expression",
      "Restores spontaneous ovulatory cycles in 78% of clinical trial cohorts",
    ],
    pdfLabel: "Download SARANYA Clinical Trial Monograph (PDF)",
  },
  {
    id: "immunomars",
    name: "IMMUNOMARS™ Technical Monograph",
    generic: "L-Glutamine 15g + Essential Micronutrient Sachet",
    category: "CLINICAL NUTRITION",
    color: "#e08a2e",
    badgeBg: "linear-gradient(135deg, #e08a2e 0%, #c2410c 100%)",
    glowColor: "rgba(224, 138, 46, 0.4)",
    image: "/assets/images/3d-shield.png",
    dissolutionMetric: "15g L-Glutamine / Dose",
    trialResult: "Tight Junction Protein Repair",
    description: "Immunonutrition protocol engineered to fuel enterocyte proliferation and restore mucosal barrier integrity under metabolic stress.",
    keyDataPoints: [
      "Provides primary respiratory fuel for gut enterocytes & immune lymphocytes",
      "Upregulates occludin & claudin-1 tight junction mucosal proteins",
      "Reduces intestinal permeability index and post-surgical recovery time",
    ],
    pdfLabel: "Download IMMUNOMARS Immunonutrition Guide (PDF)",
  },
  {
    id: "uv60k",
    name: "UV 60K® Bioavailability Monograph",
    generic: "Cholecalciferol (Vitamin D3) 60,000 IU Softgel Capsule",
    category: "VITAMIN THERAPY",
    color: "#2488a6",
    badgeBg: "linear-gradient(135deg, #2488a6 0%, #0369a1 100%)",
    glowColor: "rgba(36, 136, 166, 0.4)",
    image: "/assets/images/atrimus-capsule.png",
    dissolutionMetric: "60,000 IU Softgel Dose",
    trialResult: "Rapid 25(OH)D Deficiency Restore",
    description: "High-dose oral liquid vehicle softgel formulation ensuring rapid systemic absorption and correction of clinical Vitamin D deficiency.",
    keyDataPoints: [
      "Formulated in high-grade lipophilic liquid vehicle for fast gastrointestinal uptake",
      "Raises serum 25-hydroxyvitamin D above 30 ng/mL within 6 weekly doses",
      "Modulates T-helper cell cytokine pathways for immune defense resilience",
    ],
    pdfLabel: "Download UV 60K Bioavailability & Dosage Guide (PDF)",
  },
];

export default function SciencePage() {
  const [activeMonographId, setActiveMonographId] = useState<string>("artemes");

  const activeMono = MONOGRAPHS.find((m) => m.id === activeMonographId) || MONOGRAPHS[0];

  return (
    <main className="page-content" style={{ paddingTop: "100px", paddingBottom: 0, background: "var(--color-cream)" }}>
      
      {/* ═══ 1. CINEMATIC SCIENCE HERO SHOWCASE ═══ */}
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
        <SpineTab label="SCIENCE & CLINICAL RESOURCES — MARSELUS" />
        <div className="about-hero-watermark">CLINICAL R&amp;D HUB</div>

        {/* Animated Radial Orbs */}
        <div
          className="pulsing-aura-orb"
          style={{
            position: "absolute",
            top: "-80px",
            right: "20%",
            width: "450px",
            height: "450px",
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)",
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
                ✦ MEDICAL AFFAIRS &amp; CLINICAL EVIDENTIARY DATA
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
                Scientific Rigor.<br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #d9a441 50%, #2488a6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Evidence-Based Clinical Data.
                </span>
              </h1>

              <p style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.88)", lineHeight: "1.7", marginBottom: "var(--space-8)" }}>
                Access prescribing monographs, dissolution kinetics profiles, peer-reviewed clinical studies, and HCP educational guides.
              </p>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <span style={{ padding: "8px 16px", borderRadius: "20px", background: "rgba(16, 185, 129, 0.2)", color: "#34d399", border: "1px solid #10b981", fontSize: "11px", fontWeight: "900" }}>
                  ✦ 4 HERO MONOGRAPHS
                </span>
                <span style={{ padding: "8px 16px", borderRadius: "20px", background: "rgba(217, 164, 65, 0.2)", color: "var(--color-gold)", border: "1px solid #d9a441", fontSize: "11px", fontWeight: "900" }}>
                  ✦ WHO-GMP TRIALS
                </span>
                <span style={{ padding: "8px 16px", borderRadius: "20px", background: "rgba(36, 136, 166, 0.2)", color: "#38bdf8", border: "1px solid #2488a6", fontSize: "11px", fontWeight: "900" }}>
                  ✦ PEER-REVIEWED EVIDENCE
                </span>
              </div>
            </div>

            {/* Right 3D Asset Card */}
            <div style={{ textAlign: "center" }}>
              <div
                className="floating-3d-asset"
                style={{
                  padding: "24px",
                  borderRadius: "28px",
                  background: "rgba(8, 30, 24, 0.85)",
                  backdropFilter: "blur(20px)",
                  border: "2px solid rgba(217, 164, 65, 0.4)",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.45)",
                  maxWidth: "320px",
                  margin: "0 auto",
                }}
              >
                <img
                  src="/assets/images/3d-dna.png"
                  alt="3D DNA Model Render"
                  style={{
                    width: "75%",
                    maxHeight: "180px",
                    objectFit: "contain",
                    margin: "0 auto 16px",
                    filter: "drop-shadow(0 12px 25px rgba(217, 164, 65, 0.3))",
                  }}
                />

                <div style={{ fontSize: "11px", fontWeight: "900", color: "var(--color-gold)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}>
                  ✦ MOLECULAR LAB TELEMETRY
                </div>
                <div style={{ fontSize: "1.1rem", fontFamily: "var(--font-heading)", color: "#ffffff", fontWeight: 900 }}>
                  Targeted Dissolution Kinetics
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 2. INTERACTIVE CLINICAL MONOGRAPH EXPLORER ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          
          <div style={{ textAlign: "center", maxWidth: "740px", margin: "0 auto var(--space-10)" }}>
            <span className="eyebrow-label">PRESCRIBING INFORMATION &amp; CLINICAL DATA</span>
            <h2>Product Monograph <span className="italic-accent" style={{ color: "#10b981" }}>Explorer.</span></h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)" }}>
              Inspect pharmacological profiles, dissolution kinetics, and prescribing monographs for Marselus formulations.
            </p>
          </div>

          {/* Monograph Tabs */}
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap", marginBottom: "var(--space-10)" }}>
            {MONOGRAPHS.map((mono) => {
              const isSel = mono.id === activeMonographId;
              return (
                <button
                  key={mono.id}
                  onClick={() => setActiveMonographId(mono.id)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "22px",
                    fontSize: "11px",
                    fontWeight: "900",
                    letterSpacing: "0.08em",
                    border: isSel ? `2px solid ${mono.color}` : "1.5px solid rgba(15, 61, 40, 0.15)",
                    background: isSel ? mono.color : "#ffffff",
                    color: isSel ? "#ffffff" : "var(--color-forest-dark)",
                    boxShadow: isSel ? `0 8px 20px ${mono.glowColor}` : "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {mono.name}
                </button>
              );
            })}
          </div>

          {/* Active Monograph HUD Display */}
          <div
            style={{
              borderRadius: "28px",
              background: "#ffffff",
              border: `2px solid ${activeMono.color}`,
              boxShadow: `0 20px 50px ${activeMono.glowColor}`,
              padding: "clamp(24px, 4vw, 48px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="grid-split" style={{ alignItems: "center" }}>
              
              <div>
                <span
                  style={{
                    fontSize: "10.5px",
                    fontWeight: "900",
                    letterSpacing: "0.14em",
                    color: "#ffffff",
                    background: activeMono.badgeBg,
                    padding: "5px 14px",
                    borderRadius: "16px",
                    textTransform: "uppercase",
                    display: "inline-block",
                    marginBottom: "12px",
                  }}
                >
                  {activeMono.category}
                </span>

                <h3 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", margin: "0 0 6px 0", lineHeight: 1.15 }}>
                  {activeMono.name}
                </h3>
                <p style={{ fontSize: "0.95rem", fontWeight: "800", color: activeMono.color, marginBottom: "16px" }}>
                  {activeMono.generic}
                </p>

                <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "20px" }}>
                  {activeMono.description}
                </p>

                {/* Key Data Points */}
                <div style={{ marginBottom: "24px" }}>
                  <div style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.14em", color: "var(--color-forest-dark)", textTransform: "uppercase", marginBottom: "8px" }}>
                    ✦ CLINICAL TRIAL &amp; KINETIC HIGHLIGHTS
                  </div>
                  <ul style={{ paddingLeft: "18px", margin: 0, fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: "1.65" }}>
                    {activeMono.keyDataPoints.map((dp, idx) => (
                      <li key={idx} style={{ marginBottom: "6px" }}>{dp}</li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/products/${activeMono.id}`}
                  className="btn-connected-pill btn-connected-pill--primary"
                  style={{
                    background: activeMono.color,
                    color: "#ffffff",
                    fontWeight: "900",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  Inspect Full {activeMono.name} Data →
                </Link>
              </div>

              {/* Right Image Render Box */}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    padding: "24px",
                    borderRadius: "24px",
                    background: "rgba(15, 61, 40, 0.03)",
                    border: `1.5px solid ${activeMono.color}44`,
                  }}
                >
                  <img
                    src={activeMono.image}
                    alt={activeMono.name}
                    style={{
                      width: "80%",
                      maxHeight: "180px",
                      objectFit: "contain",
                      margin: "0 auto 16px",
                      filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.15))",
                    }}
                  />

                  <div style={{ padding: "12px", borderRadius: "14px", background: "#ffffff", border: "1px solid rgba(15,61,40,0.1)", marginBottom: "10px" }}>
                    <div style={{ fontSize: "10px", fontWeight: "900", color: activeMono.color, textTransform: "uppercase" }}>DISSOLUTION PROFILE</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: "900", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}>{activeMono.dissolutionMetric}</div>
                  </div>

                  <div style={{ padding: "12px", borderRadius: "14px", background: "#ffffff", border: "1px solid rgba(15,61,40,0.1)" }}>
                    <div style={{ fontSize: "10px", fontWeight: "900", color: "var(--color-gold)", textTransform: "uppercase" }}>TRIAL EFFICACY</div>
                    <div style={{ fontSize: "1.1rem", fontWeight: "900", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}>{activeMono.trialResult}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ═══ 3. PEER-REVIEWED RESEARCH STUDIES ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto var(--space-12)" }}>
            <span className="eyebrow-label">CLINICAL EVIDENCE</span>
            <h2>Peer-Reviewed Scientific <span className="italic-accent" style={{ color: "#2488a6" }}>Evidence.</span></h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)" }}>
              Key scientific literature and clinical study digests underpinning Marselus formulation development.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            
            {/* Study 1 */}
            <div style={{ padding: "24px", borderRadius: "20px", background: "#ffffff", borderTop: "4px solid #10b981", boxShadow: "0 10px 25px rgba(0,0,0,0.04)" }}>
              <span style={{ fontSize: "10px", fontWeight: "900", color: "#10b981", letterSpacing: "0.12em" }}>GASTROENTEROLOGY · PHASE III</span>
              <h4 style={{ fontSize: "1.2rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", margin: "8px 0 6px 0" }}>
                Colonic Targeted 5-ASA Prolonged Release Kinetics
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.6, margin: "0 0 12px 0" }}>
                Evaluates pH-dependent MMX enteric coating in maintaining ulcerative colitis remission with once-daily dosing.
              </p>
              <div style={{ fontSize: "10.5px", fontWeight: "800", color: "var(--color-forest-dark)" }}>DOI: 10.1016/j.crohns.2023.04.012</div>
            </div>

            {/* Study 2 */}
            <div style={{ padding: "24px", borderRadius: "20px", background: "#ffffff", borderTop: "4px solid #d6438c", boxShadow: "0 10px 25px rgba(0,0,0,0.04)" }}>
              <span style={{ fontSize: "10px", fontWeight: "900", color: "#d6438c", letterSpacing: "0.12em" }}>WOMEN&apos;S HEALTH · META-ANALYSIS</span>
              <h4 style={{ fontSize: "1.2rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", margin: "8px 0 6px 0" }}>
                40:1 Inositol Ratio in Ovarian Insulin Sensitivity
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.6, margin: "0 0 12px 0" }}>
                Systematic review of Myo and D-Chiro Inositol 40:1 ratio for restoring ovulation and endocrine balance in PCOS.
              </p>
              <div style={{ fontSize: "10.5px", fontWeight: "800", color: "var(--color-forest-dark)" }}>DOI: 10.1080/09513590.2022.2081491</div>
            </div>

            {/* Study 3 */}
            <div style={{ padding: "24px", borderRadius: "20px", background: "#ffffff", borderTop: "4px solid #e08a2e", boxShadow: "0 10px 25px rgba(0,0,0,0.04)" }}>
              <span style={{ fontSize: "10px", fontWeight: "900", color: "#e08a2e", letterSpacing: "0.12em" }}>CLINICAL NUTRITION · IMMUNOLOGY</span>
              <h4 style={{ fontSize: "1.2rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", margin: "8px 0 6px 0" }}>
                Enterocyte Mucosal Barrier Tight Junction Repair
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.6, margin: "0 0 12px 0" }}>
                Demonstrates high-dose L-Glutamine upregulating occludin tight junction proteins to prevent bacterial translocation.
              </p>
              <div style={{ fontSize: "10.5px", fontWeight: "800", color: "var(--color-forest-dark)" }}>DOI: 10.1093/ajcn/nqz312</div>
            </div>

            {/* Study 4 */}
            <div style={{ padding: "24px", borderRadius: "20px", background: "#ffffff", borderTop: "4px solid #2488a6", boxShadow: "0 10px 25px rgba(0,0,0,0.04)" }}>
              <span style={{ fontSize: "10px", fontWeight: "900", color: "#2488a6", letterSpacing: "0.12em" }}>VITAMIN THERAPY · BIOAVAILABILITY</span>
              <h4 style={{ fontSize: "1.2rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", margin: "8px 0 6px 0" }}>
                Cholecalciferol 60,000 IU Softgel Pharmacokinetics
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.6, margin: "0 0 12px 0" }}>
                Comparative bioavailability trial demonstrating rapid serum 25(OH)D level restoration using liquid softgel vehicles.
              </p>
              <div style={{ fontSize: "10.5px", fontWeight: "800", color: "var(--color-forest-dark)" }}>DOI: 10.1210/clinem/dgac104</div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 4. MEDICAL AFFAIRS INQUIRY CTA ═══ */}
      <section className="section" style={{ padding: "0 0 var(--space-16) 0", textAlign: "center" }}>
        <div className="container">
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              padding: "clamp(28px, 4vw, 48px)",
              borderRadius: "28px",
              background: "linear-gradient(135deg, #07261d 0%, #0d3844 50%, #07261d 100%)",
              color: "#ffffff",
              border: "1.5px solid rgba(217, 164, 65, 0.45)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
            }}
          >
            <span style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.14em", color: "var(--color-gold)", background: "rgba(217, 164, 65, 0.2)", padding: "4px 14px", borderRadius: "16px", textTransform: "uppercase", display: "inline-block", marginBottom: "16px" }}>
              ✦ HEALTHCARE PROFESSIONAL MEDICAL INQUIRY
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#ffffff", marginBottom: "12px", fontFamily: "var(--font-heading)" }}>
              Request Full Medical <span className="italic-accent" style={{ color: "var(--color-gold)" }}>Dossiers.</span>
            </h2>
            <p style={{ fontSize: "0.95rem", color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.6, marginBottom: "24px" }}>
              For HCP prescribing questions, clinical trial protocols, or official medical affairs inquiries, connect directly with our medical team.
            </p>
            <Link
              href="/contact"
              className="btn-connected-pill btn-connected-pill--primary"
              style={{ background: "var(--color-gold)", color: "var(--color-forest-dark)", fontWeight: "900", display: "inline-flex" }}
            >
              Contact Medical Affairs →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 5. GIANT WORDMARK FOOTER REVEAL ═══ */}
      <GiantWordmark />

    </main>
  );
}
