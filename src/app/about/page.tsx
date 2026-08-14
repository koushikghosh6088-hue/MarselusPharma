"use client";

import React, { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";
import GiantWordmark from "@/components/GiantWordmark";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"heritage" | "formulations" | "quality" | "values">("heritage");
  const [activeQualityDetail, setActiveQualityDetail] = useState<"gmp" | "iso" | "qc">("gmp");

  return (
    <main className="page-content" style={{ paddingTop: "100px", paddingBottom: 0, background: "var(--color-cream)" }}>
      
      {/* ═══ 1. CINEMATIC VIBRANT HERO SHOWCASE WITH FLOATING 3D ASSETS ═══ */}
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
        <div className="about-hero-watermark">MARSELUS EST. 2003</div>

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
        <div
          className="pulsing-aura-orb"
          style={{
            position: "absolute",
            top: "30%",
            right: "35%",
            width: "350px",
            height: "350px",
            background: "radial-gradient(circle, rgba(217, 164, 65, 0.22) 0%, transparent 70%)",
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

              {/* Colorful Stat Pills Row */}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <span style={{ padding: "8px 16px", borderRadius: "20px", background: "rgba(16, 185, 129, 0.2)", color: "#34d399", border: "1px solid #10b981", fontSize: "11px", fontWeight: "900" }}>
                  ✦ 20+ YEARS HERITAGE
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

            {/* Right Floating 3D Graphic Cards Showcase */}
            <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
              
              {/* Floating Shield Asset Card */}
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

      {/* ═══ 2. INTERACTIVE EXPLORER TABS (HERITAGE, FORMULATIONS, QUALITY, VALUES) ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          
          <div style={{ textAlign: "center", maxWidth: "740px", margin: "0 auto var(--space-8)" }}>
            <span className="eyebrow-label">EXPLORE MARSELUS PHARMACEUTICALS</span>
            <h2>Interactive Corporate <span className="italic-accent" style={{ color: "#10b981" }}>Explorer.</span></h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)" }}>
              Select a dimension below to inspect our heritage, therapeutic formulations, WHO-GMP quality, or guiding charter.
            </p>
          </div>

          {/* Tab Navigation Buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "var(--space-10)" }}>
            <button
              onClick={() => setActiveTab("heritage")}
              style={{
                padding: "10px 22px",
                borderRadius: "24px",
                fontSize: "11.5px",
                fontWeight: "900",
                letterSpacing: "0.1em",
                border: activeTab === "heritage" ? "2px solid #10b981" : "1.5px solid rgba(15, 61, 40, 0.15)",
                background: activeTab === "heritage" ? "#10b981" : "#ffffff",
                color: activeTab === "heritage" ? "#ffffff" : "var(--color-forest-dark)",
                boxShadow: activeTab === "heritage" ? "0 8px 20px rgba(16, 185, 129, 0.3)" : "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              ✦ 01. KOLKATA STORY &amp; HERITAGE
            </button>

            <button
              onClick={() => setActiveTab("formulations")}
              style={{
                padding: "10px 22px",
                borderRadius: "24px",
                fontSize: "11.5px",
                fontWeight: "900",
                letterSpacing: "0.1em",
                border: activeTab === "formulations" ? "2px solid #d9a441" : "1.5px solid rgba(15, 61, 40, 0.15)",
                background: activeTab === "formulations" ? "#d9a441" : "#ffffff",
                color: activeTab === "formulations" ? "#ffffff" : "var(--color-forest-dark)",
                boxShadow: activeTab === "formulations" ? "0 8px 20px rgba(217, 164, 65, 0.3)" : "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              ✦ 02. SPECIALTY DOMAINS
            </button>

            <button
              onClick={() => setActiveTab("quality")}
              style={{
                padding: "10px 22px",
                borderRadius: "24px",
                fontSize: "11.5px",
                fontWeight: "900",
                letterSpacing: "0.1em",
                border: activeTab === "quality" ? "2px solid #2488a6" : "1.5px solid rgba(15, 61, 40, 0.15)",
                background: activeTab === "quality" ? "#2488a6" : "#ffffff",
                color: activeTab === "quality" ? "#ffffff" : "var(--color-forest-dark)",
                boxShadow: activeTab === "quality" ? "0 8px 20px rgba(36, 136, 166, 0.3)" : "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              ✦ 03. WHO-GMP QUALITY LAB
            </button>

            <button
              onClick={() => setActiveTab("values")}
              style={{
                padding: "10px 22px",
                borderRadius: "24px",
                fontSize: "11.5px",
                fontWeight: "900",
                letterSpacing: "0.1em",
                border: activeTab === "values" ? "2px solid #d6438c" : "1.5px solid rgba(15, 61, 40, 0.15)",
                background: activeTab === "values" ? "#d6438c" : "#ffffff",
                color: activeTab === "values" ? "#ffffff" : "var(--color-forest-dark)",
                boxShadow: activeTab === "values" ? "0 8px 20px rgba(214, 67, 140, 0.3)" : "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              ✦ 04. CORE VALUES &amp; CHARTER
            </button>
          </div>

          {/* TAB 1: HERITAGE & KOLKATA STORY */}
          {activeTab === "heritage" && (
            <div
              style={{
                borderRadius: "28px",
                background: "linear-gradient(145deg, rgba(16, 185, 129, 0.08) 0%, #ffffff 100%)",
                border: "2px solid #10b981",
                padding: "clamp(24px, 4vw, 48px)",
                boxShadow: "0 18px 45px rgba(16, 185, 129, 0.12)",
              }}
            >
              <div className="grid-split" style={{ alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: "11px", fontWeight: "900", letterSpacing: "0.14em", color: "#10b981", textTransform: "uppercase" }}>
                    ✦ HERITAGE &amp; FOUNDATION
                  </span>
                  <h3 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", margin: "8px 0 16px 0" }}>
                    Originating from Kolkata, India
                  </h3>
                  <p style={{ fontSize: "0.98rem", color: "var(--color-text-muted)", lineHeight: "1.75", marginBottom: "16px" }}>
                    Founded in Kolkata, Marselus Pharmaceuticals began with a passionate commitment to evidence-led formulation science. Over 20 years of relentless dedication, we have built a reputation for therapeutic integrity, ethical compliance, and uncompromised quality.
                  </p>
                  <p style={{ fontSize: "0.92rem", color: "var(--color-text-muted)", lineHeight: "1.75", margin: 0 }}>
                    Our formulation philosophy combines advanced drug delivery technology (such as pH-dependent colonic targeting and 40:1 inositol ratios) with WHO-GMP sterile manufacturing.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ padding: "18px", borderRadius: "18px", background: "#ffffff", borderLeft: "5px solid #10b981", boxShadow: "0 8px 20px rgba(0,0,0,0.04)" }}>
                    <div style={{ fontSize: "1.1rem", fontWeight: "900", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}>
                      2003 · Kolkata Foundation
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>
                      Established to serve healthcare providers across Eastern India with specialty prescription drugs.
                    </p>
                  </div>

                  <div style={{ padding: "18px", borderRadius: "18px", background: "#ffffff", borderLeft: "5px solid var(--color-gold)", boxShadow: "0 8px 20px rgba(0,0,0,0.04)" }}>
                    <div style={{ fontSize: "1.1rem", fontWeight: "900", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}>
                      Specialty Expansion
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>
                      Expanded into Gastroenterology, Women&apos;s Health, Clinical Nutrition, and Vitamin Therapy.
                    </p>
                  </div>

                  <div style={{ padding: "18px", borderRadius: "18px", background: "#ffffff", borderLeft: "5px solid #2488a6", boxShadow: "0 8px 20px rgba(0,0,0,0.04)" }}>
                    <div style={{ fontSize: "1.1rem", fontWeight: "900", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}>
                      WHO-GMP Accreditation
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>
                      Certified WHO-GMP manufacturing compliance and ISO 9001:2015 Quality Management System.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SPECIALTY DOMAINS */}
          {activeTab === "formulations" && (
            <div
              style={{
                borderRadius: "28px",
                background: "linear-gradient(145deg, rgba(217, 164, 65, 0.08) 0%, #ffffff 100%)",
                border: "2px solid #d9a441",
                padding: "clamp(24px, 4vw, 48px)",
                boxShadow: "0 18px 45px rgba(217, 164, 65, 0.12)",
              }}
            >
              <div style={{ marginBottom: "20px" }}>
                <span style={{ fontSize: "11px", fontWeight: "900", letterSpacing: "0.14em", color: "#d9a441", textTransform: "uppercase" }}>
                  ✦ FOUR SPECIALTY BRAND FORMULATIONS
                </span>
                <h3 style={{ fontSize: "1.8rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", marginTop: "4px" }}>
                  Targeted Clinical Care Portfolio
                </h3>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                
                {/* Brand 1 */}
                <div style={{ padding: "20px", borderRadius: "18px", background: "#ffffff", border: "1.5px solid rgba(16, 185, 129, 0.3)", boxShadow: "0 8px 20px rgba(0,0,0,0.04)" }}>
                  <span style={{ fontSize: "10px", fontWeight: "900", padding: "4px 10px", borderRadius: "12px", background: "rgba(16, 185, 129, 0.12)", color: "#10b981" }}>GASTROENTEROLOGY</span>
                  <h4 style={{ fontSize: "1.3rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", margin: "10px 0 4px 0" }}>ARTEMES™ 1.2g</h4>
                  <p style={{ fontSize: "0.84rem", color: "var(--color-text-muted)", lineHeight: 1.5, margin: "0 0 12px 0" }}>Mesalamine 1.2g Prolonged Release Tablets with pH &gt; 6.8 targeted colonic dissolution.</p>
                  <Link href="/products/artemes" style={{ fontSize: "11.5px", fontWeight: "900", color: "#10b981", textDecoration: "none" }}>Inspect Monograph →</Link>
                </div>

                {/* Brand 2 */}
                <div style={{ padding: "20px", borderRadius: "18px", background: "#ffffff", border: "1.5px solid rgba(214, 67, 140, 0.3)", boxShadow: "0 8px 20px rgba(0,0,0,0.04)" }}>
                  <span style={{ fontSize: "10px", fontWeight: "900", padding: "4px 10px", borderRadius: "12px", background: "rgba(214, 67, 140, 0.12)", color: "#d6438c" }}>WOMEN&apos;S HEALTH</span>
                  <h4 style={{ fontSize: "1.3rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", margin: "10px 0 4px 0" }}>SARANYA®</h4>
                  <p style={{ fontSize: "0.84rem", color: "var(--color-text-muted)", lineHeight: 1.5, margin: "0 0 12px 0" }}>Myo-Inositol + D-Chiro Inositol (40:1) + Vit D2 for PCOS &amp; endocrine harmony.</p>
                  <Link href="/products/saranya" style={{ fontSize: "11.5px", fontWeight: "900", color: "#d6438c", textDecoration: "none" }}>Inspect Monograph →</Link>
                </div>

                {/* Brand 3 */}
                <div style={{ padding: "20px", borderRadius: "18px", background: "#ffffff", border: "1.5px solid rgba(224, 138, 46, 0.3)", boxShadow: "0 8px 20px rgba(0,0,0,0.04)" }}>
                  <span style={{ fontSize: "10px", fontWeight: "900", padding: "4px 10px", borderRadius: "12px", background: "rgba(224, 138, 46, 0.12)", color: "#e08a2e" }}>CLINICAL NUTRITION</span>
                  <h4 style={{ fontSize: "1.3rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", margin: "10px 0 4px 0" }}>IMMUNOMARS™</h4>
                  <p style={{ fontSize: "0.84rem", color: "var(--color-text-muted)", lineHeight: 1.5, margin: "0 0 12px 0" }}>L-Glutamine 15g + Micronutrient Sachets for gut epithelial barrier repair.</p>
                  <Link href="/products/immunomars" style={{ fontSize: "11.5px", fontWeight: "900", color: "#e08a2e", textDecoration: "none" }}>Inspect Monograph →</Link>
                </div>

                {/* Brand 4 */}
                <div style={{ padding: "20px", borderRadius: "18px", background: "#ffffff", border: "1.5px solid rgba(36, 136, 166, 0.3)", boxShadow: "0 8px 20px rgba(0,0,0,0.04)" }}>
                  <span style={{ fontSize: "10px", fontWeight: "900", padding: "4px 10px", borderRadius: "12px", background: "rgba(36, 136, 166, 0.12)", color: "#2488a6" }}>VITAMIN THERAPY</span>
                  <h4 style={{ fontSize: "1.3rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", margin: "10px 0 4px 0" }}>UV 60K®</h4>
                  <p style={{ fontSize: "0.84rem", color: "var(--color-text-muted)", lineHeight: 1.5, margin: "0 0 12px 0" }}>Cholecalciferol (Vitamin D3) 60,000 IU Softgel Capsule for rapid deficiency restore.</p>
                  <Link href="/products/uv60k" style={{ fontSize: "11.5px", fontWeight: "900", color: "#2488a6", textDecoration: "none" }}>Inspect Monograph →</Link>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: WHO-GMP QUALITY LAB */}
          {activeTab === "quality" && (
            <div
              style={{
                borderRadius: "28px",
                background: "linear-gradient(145deg, rgba(36, 136, 166, 0.08) 0%, #ffffff 100%)",
                border: "2px solid #2488a6",
                padding: "clamp(24px, 4vw, 48px)",
                boxShadow: "0 18px 45px rgba(36, 136, 166, 0.12)",
              }}
            >
              <div className="grid-split" style={{ alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: "11px", fontWeight: "900", letterSpacing: "0.14em", color: "#2488a6", textTransform: "uppercase" }}>
                    ✦ ACCREDITED QUALITY MANAGEMENT
                  </span>
                  <h3 style={{ fontSize: "1.8rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", margin: "8px 0 16px 0" }}>
                    WHO-GMP &amp; ISO 9001:2015 Standards
                  </h3>

                  <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
                    <button onClick={() => setActiveQualityDetail("gmp")} style={{ padding: "6px 14px", borderRadius: "14px", fontSize: "11px", fontWeight: "900", border: "1px solid #10b981", background: activeQualityDetail === "gmp" ? "#10b981" : "#ffffff", color: activeQualityDetail === "gmp" ? "#ffffff" : "#10b981", cursor: "pointer" }}>WHO-GMP CLEANROOM</button>
                    <button onClick={() => setActiveQualityDetail("iso")} style={{ padding: "6px 14px", borderRadius: "14px", fontSize: "11px", fontWeight: "900", border: "1px solid #2488a6", background: activeQualityDetail === "iso" ? "#2488a6" : "#ffffff", color: activeQualityDetail === "iso" ? "#ffffff" : "#2488a6", cursor: "pointer" }}>ISO 9001:2015</button>
                    <button onClick={() => setActiveQualityDetail("qc")} style={{ padding: "6px 14px", borderRadius: "14px", fontSize: "11px", fontWeight: "900", border: "1px solid #d9a441", background: activeQualityDetail === "qc" ? "#d9a441" : "#ffffff", color: activeQualityDetail === "qc" ? "#ffffff" : "#d9a441", cursor: "pointer" }}>USP DISSOLUTION</button>
                  </div>

                  <div style={{ padding: "18px", borderRadius: "16px", background: "#ffffff", border: "1.5px solid rgba(15,61,40,0.12)" }}>
                    {activeQualityDetail === "gmp" && <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", margin: 0, lineHeight: 1.6 }}>Class 10,000 / ISO 7 cleanroom environment with positive differential pressure HEPA filtration for sterile processing.</p>}
                    {activeQualityDetail === "iso" && <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", margin: 0, lineHeight: 1.6 }}>ISO 9001:2015 certified raw API vendor auditing, batch control testing, and climate stability profiling.</p>}
                    {activeQualityDetail === "qc" && <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", margin: 0, lineHeight: 1.6 }}>USP Dissolution Apparatus testing verifying zero gastric release at pH 1.2 and targeted dissolution at colonic pH &gt; 6.8.</p>}
                  </div>
                </div>

                <div style={{ textAlign: "center" }}>
                  <div style={{ padding: "24px", borderRadius: "24px", background: "#ffffff", border: "2px solid #2488a6", boxShadow: "0 12px 30px rgba(36,136,166,0.15)" }}>
                    <div style={{ fontSize: "2rem", fontWeight: "900", color: "#2488a6", fontFamily: "var(--font-heading)" }}>99.9%</div>
                    <div style={{ fontSize: "0.85rem", fontWeight: "800", color: "var(--color-forest-dark)" }}>Sterility &amp; Purity Index</div>
                    <div style={{ height: "6px", width: "100%", background: "rgba(36,136,166,0.15)", borderRadius: "10px", marginTop: "12px", overflow: "hidden" }}>
                      <div style={{ height: "100%", width: "99.9%", background: "#2488a6" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CORE VALUES & CHARTER */}
          {activeTab === "values" && (
            <div
              style={{
                borderRadius: "28px",
                background: "linear-gradient(145deg, rgba(214, 67, 140, 0.08) 0%, #ffffff 100%)",
                border: "2px solid #d6438c",
                padding: "clamp(24px, 4vw, 48px)",
                boxShadow: "0 18px 45px rgba(214, 67, 140, 0.12)",
              }}
            >
              <div style={{ marginBottom: "20px" }}>
                <span style={{ fontSize: "11px", fontWeight: "900", letterSpacing: "0.14em", color: "#d6438c", textTransform: "uppercase" }}>
                  ✦ GUIDING CORPORATE CHARTER &amp; PILLARS
                </span>
                <h3 style={{ fontSize: "1.8rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", marginTop: "4px" }}>
                  What Drives Marselus Pharmaceuticals
                </h3>
              </div>

              <blockquote style={{ fontSize: "1.25rem", fontFamily: "var(--font-heading)", fontStyle: "italic", color: "var(--color-forest-dark)", borderLeft: "4px solid #d6438c", paddingLeft: "16px", margin: "0 0 24px 0", lineHeight: 1.6 }}>
                &ldquo;To set a global benchmark in the pharmaceutical industry for innovation, ethical practices, and collaborative excellence — fostering a culture that values integrity, respect, and teamwork.&rdquo;
              </blockquote>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
                <div style={{ padding: "16px", borderRadius: "14px", background: "#ffffff", borderTop: "3px solid #10b981" }}>
                  <strong style={{ display: "block", color: "#10b981", fontSize: "0.95rem" }}>01. Ethics &amp; Compliance</strong>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>WHO-GMP compliance &amp; transparent analytical testing.</p>
                </div>
                <div style={{ padding: "16px", borderRadius: "14px", background: "#ffffff", borderTop: "3px solid #d9a441" }}>
                  <strong style={{ display: "block", color: "#d9a441", fontSize: "0.95rem" }}>02. Team Respect</strong>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>Inclusive workplace culture driven by shared purpose.</p>
                </div>
                <div style={{ padding: "16px", borderRadius: "14px", background: "#ffffff", borderTop: "3px solid #2488a6" }}>
                  <strong style={{ display: "block", color: "#2488a6", fontSize: "0.95rem" }}>03. Scientific Rigor</strong>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>Site-specific drug release kinetics.</p>
                </div>
                <div style={{ padding: "16px", borderRadius: "14px", background: "#ffffff", borderTop: "3px solid #d6438c" }}>
                  <strong style={{ display: "block", color: "#d6438c", fontSize: "0.95rem" }}>04. Patient Centricity</strong>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>Once-daily compliance &amp; minimal gastric side effects.</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ═══ 3. REGULATORY COMPLIANCE NOTICE ═══ */}
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

      {/* ═══ 4. GIANT WORDMARK FOOTER REVEAL ═══ */}
      <GiantWordmark />

    </main>
  );
}
