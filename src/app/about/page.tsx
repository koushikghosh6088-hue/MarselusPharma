"use client";

import React, { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";
import GiantWordmark from "@/components/GiantWordmark";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"gmp" | "iso" | "qc">("gmp");

  return (
    <main className="page-content" style={{ paddingTop: "110px", paddingBottom: 0, background: "var(--color-cream)" }}>
      
      {/* ═══ 1. HERO SHOWCASE & HERITAGE BANNER ═══ */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0 var(--space-10) 0", background: "linear-gradient(180deg, #f7f4ec 0%, #ffffff 100%)", borderBottom: "1px solid rgba(15, 61, 40, 0.08)" }}>
        <SpineTab label="ABOUT MARSELUS PHARMACEUTICALS" />

        <div className="container">
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
            <span
              className="eyebrow-badge"
              style={{
                background: "rgba(16, 185, 129, 0.12)",
                color: "#047857",
                borderColor: "rgba(16, 185, 129, 0.3)",
                marginBottom: "var(--space-4)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              ✦ ESTABLISHED IN KOLKATA, INDIA · SPECIALIST PHARMACEUTICAL ENTERPRISE
            </span>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                color: "var(--color-forest-dark)",
                marginBottom: "var(--space-6)",
                lineHeight: 1.15,
                fontFamily: "var(--font-heading)",
                fontWeight: "900",
              }}
            >
              Rooted in Kolkata.<br />
              <span className="italic-accent" style={{ color: "#10b981" }}>Driven by Scientific Excellence.</span>
            </h1>

            <p style={{ fontSize: "clamp(1.05rem, 2vw, 1.25rem)", color: "var(--color-text-muted)", lineHeight: "1.75", maxWidth: "72ch", margin: "0 auto var(--space-8)" }}>
              Originating from Kolkata, Marselus Pharmaceuticals is a specialist pharmaceutical enterprise dedicated to evidence-based formulation science, uncompromised WHO-GMP quality, and patient-centric therapeutic care across Eastern India and beyond.
            </p>

            {/* Statistics Bar Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
                marginTop: "var(--space-8)",
              }}
            >
              <div style={{ padding: "18px", borderRadius: "18px", background: "#ffffff", border: "1.5px solid rgba(16, 185, 129, 0.25)", boxShadow: "0 10px 25px rgba(16, 185, 129, 0.08)", textAlign: "center" }}>
                <div style={{ fontSize: "1.8rem", fontWeight: "900", color: "#10b981", fontFamily: "var(--font-heading)" }}>20+ Years</div>
                <div style={{ fontSize: "0.82rem", fontWeight: "800", color: "var(--color-forest-dark)", marginTop: "2px" }}>Formulation Heritage</div>
              </div>

              <div style={{ padding: "18px", borderRadius: "18px", background: "#ffffff", border: "1.5px solid rgba(217, 164, 65, 0.3)", boxShadow: "0 10px 25px rgba(217, 164, 65, 0.08)", textAlign: "center" }}>
                <div style={{ fontSize: "1.8rem", fontWeight: "900", color: "var(--color-gold)", fontFamily: "var(--font-heading)" }}>WHO-GMP</div>
                <div style={{ fontSize: "0.82rem", fontWeight: "800", color: "var(--color-forest-dark)", marginTop: "2px" }}>Compliant Manufacturing</div>
              </div>

              <div style={{ padding: "18px", borderRadius: "18px", background: "#ffffff", border: "1.5px solid rgba(36, 136, 166, 0.25)", boxShadow: "0 10px 25px rgba(36, 136, 166, 0.08)", textAlign: "center" }}>
                <div style={{ fontSize: "1.8rem", fontWeight: "900", color: "#2488a6", fontFamily: "var(--font-heading)" }}>ISO 9001:2015</div>
                <div style={{ fontSize: "0.82rem", fontWeight: "800", color: "var(--color-forest-dark)", marginTop: "2px" }}>Quality Management</div>
              </div>

              <div style={{ padding: "18px", borderRadius: "18px", background: "#ffffff", border: "1.5px solid rgba(214, 67, 140, 0.25)", boxShadow: "0 10px 25px rgba(214, 67, 140, 0.08)", textAlign: "center" }}>
                <div style={{ fontSize: "1.8rem", fontWeight: "900", color: "#d6438c", fontFamily: "var(--font-heading)" }}>4 Hero Brands</div>
                <div style={{ fontSize: "0.82rem", fontWeight: "800", color: "var(--color-forest-dark)", marginTop: "2px" }}>Targeted Formulations</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 2. OUR STORY & HERITAGE NARRATIVE ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="grid-split" style={{ alignItems: "center" }}>
            
            {/* Left Column Narrative */}
            <div>
              <span className="eyebrow-label" style={{ color: "#10b981" }}>OUR CORPORATE JOURNEY</span>
              <h2 style={{ marginBottom: "var(--space-6)", fontSize: "clamp(2rem, 3.8vw, 3.25rem)" }}>
                A Heritage of <span className="italic-accent" style={{ color: "#10b981" }}>Healing &amp; Trust.</span>
              </h2>
              
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.75", marginBottom: "var(--space-4)" }}>
                Founded in Kolkata, India, Marselus Pharmaceuticals began with a singular vision: to bridge the gap between high-level pharmaceutical research and accessible, patient-friendly therapeutic options.
              </p>
              
              <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.75", marginBottom: "var(--space-6)" }}>
                Over the decades, we have maintained an unyielding focus on quality, ethical compliance, and clinical evidence. By collaborating with leading clinicians and certified manufacturing units, Marselus has established a strong presence in Gastroenterology, Women&apos;s Health, Clinical Nutrition, and Vitamin Therapy.
              </p>

              <div style={{ padding: "18px 24px", background: "#ffffff", borderRadius: "16px", borderLeft: "4px solid #10b981", boxShadow: "0 8px 24px rgba(15, 61, 40, 0.06)" }}>
                <div style={{ fontSize: "0.95rem", fontWeight: "800", color: "var(--color-forest-dark)" }}>
                  ✦ &ldquo;Ethics, team respect, and quality control remain the cornerstone of every tablet, capsule, and sachet we produce.&rdquo;
                </div>
              </div>
            </div>

            {/* Right Column Milestone Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              
              {/* Milestone 1 */}
              <div style={{ padding: "20px", borderRadius: "18px", background: "#ffffff", border: "1.5px solid rgba(16, 185, 129, 0.2)", borderLeft: "5px solid #10b981", boxShadow: "0 10px 25px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <strong style={{ fontSize: "1.1rem", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}>Kolkata Founding</strong>
                  <span style={{ fontSize: "10px", fontWeight: "900", padding: "4px 10px", borderRadius: "12px", background: "rgba(16, 185, 129, 0.15)", color: "#10b981" }}>ESTABLISHED</span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", margin: 0, lineHeight: "1.5" }}>
                  Inception in Kolkata with a focus on delivering high-integrity formulations across Eastern India.
                </p>
              </div>

              {/* Milestone 2 */}
              <div style={{ padding: "20px", borderRadius: "18px", background: "#ffffff", border: "1.5px solid rgba(217, 164, 65, 0.25)", borderLeft: "5px solid var(--color-gold)", boxShadow: "0 10px 25px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <strong style={{ fontSize: "1.1rem", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}>Specialty Portfolio Launch</strong>
                  <span style={{ fontSize: "10px", fontWeight: "900", padding: "4px 10px", borderRadius: "12px", background: "rgba(217, 164, 65, 0.15)", color: "var(--color-forest-dark)" }}>PORTFOLIO</span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", margin: 0, lineHeight: "1.5" }}>
                  Engineered flagship brands ARTEMES™ 1.2g (Mesalamine), SARANYA® (Inositol 40:1), IMMUNOMARS™ (L-Glutamine), and UV 60K® (Vitamin D3).
                </p>
              </div>

              {/* Milestone 3 */}
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

      {/* ═══ 3. FOUR CORE SPECIALTY DOMAINS SHOWCASE ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "740px", margin: "0 auto var(--space-12)" }}>
            <span className="eyebrow-label">SPECIALTY FOCUS AREAS</span>
            <h2>Targeted Therapeutic <span className="italic-accent" style={{ color: "#10b981" }}>Expertise.</span></h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)" }}>
              We focus our formulation capabilities on four key clinical areas with high unmet patient needs.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            
            {/* Domain 1 */}
            <div style={{ padding: "24px", borderRadius: "20px", background: "linear-gradient(145deg, rgba(16, 185, 129, 0.06) 0%, #ffffff 100%)", border: "1.5px solid rgba(16, 185, 129, 0.3)", boxShadow: "0 12px 30px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.14em", color: "#10b981", marginBottom: "8px", textTransform: "uppercase" }}>
                GASTROENTEROLOGY
              </div>
              <h3 style={{ fontSize: "1.35rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", marginBottom: "8px" }}>
                Gut Mucosal Healing &amp; IBD
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: "1.6", marginBottom: "16px" }}>
                pH-dependent colonic targeted release formulations engineered for ulcerative colitis remission and Crohn&apos;s support.
              </p>
              <Link href="/products/artemes" style={{ fontSize: "12px", fontWeight: "900", color: "#10b981", textDecoration: "none" }}>
                View ARTEMES™ 1.2g Monograph →
              </Link>
            </div>

            {/* Domain 2 */}
            <div style={{ padding: "24px", borderRadius: "20px", background: "linear-gradient(145deg, rgba(214, 67, 140, 0.06) 0%, #ffffff 100%)", border: "1.5px solid rgba(214, 67, 140, 0.3)", boxShadow: "0 12px 30px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.14em", color: "#d6438c", marginBottom: "8px", textTransform: "uppercase" }}>
                WOMEN&apos;S HEALTH
              </div>
              <h3 style={{ fontSize: "1.35rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", marginBottom: "8px" }}>
                PCOS &amp; Endocrine Balance
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: "1.6", marginBottom: "16px" }}>
                Physiological 40:1 Myo-Inositol to D-Chiro Inositol ratio for ovarian insulin sensitivity and menstrual regularity.
              </p>
              <Link href="/products/saranya" style={{ fontSize: "12px", fontWeight: "900", color: "#d6438c", textDecoration: "none" }}>
                View SARANYA® Monograph →
              </Link>
            </div>

            {/* Domain 3 */}
            <div style={{ padding: "24px", borderRadius: "20px", background: "linear-gradient(145deg, rgba(224, 138, 46, 0.06) 0%, #ffffff 100%)", border: "1.5px solid rgba(224, 138, 46, 0.3)", boxShadow: "0 12px 30px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.14em", color: "#e08a2e", marginBottom: "8px", textTransform: "uppercase" }}>
                CLINICAL NUTRITION
              </div>
              <h3 style={{ fontSize: "1.35rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", marginBottom: "8px" }}>
                Immunonutrition &amp; Recovery
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: "1.6", marginBottom: "16px" }}>
                High-dose L-Glutamine sachets engineered to fuel enterocytes and rebuild tight junction mucosal barrier integrity.
              </p>
              <Link href="/products/immunomars" style={{ fontSize: "12px", fontWeight: "900", color: "#e08a2e", textDecoration: "none" }}>
                View IMMUNOMARS™ Monograph →
              </Link>
            </div>

            {/* Domain 4 */}
            <div style={{ padding: "24px", borderRadius: "20px", background: "linear-gradient(145deg, rgba(36, 136, 166, 0.06) 0%, #ffffff 100%)", border: "1.5px solid rgba(36, 136, 166, 0.3)", boxShadow: "0 12px 30px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.14em", color: "#2488a6", marginBottom: "8px", textTransform: "uppercase" }}>
                VITAMIN THERAPY
              </div>
              <h3 style={{ fontSize: "1.35rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", marginBottom: "8px" }}>
                High-Potency Vitamin D3
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: "1.6", marginBottom: "16px" }}>
                Cholecalciferol 60,000 IU softgel capsules for rapid clinical correction of severe deficiency and immune modulation.
              </p>
              <Link href="/products/uv60k" style={{ fontSize: "12px", fontWeight: "900", color: "#2488a6", textDecoration: "none" }}>
                View UV 60K® Monograph →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 4. FOUR CORE CORPORATE VALUES ═══ */}
      <section className="section" style={{ padding: "0 0 var(--space-20) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto var(--space-12)" }}>
            <span className="eyebrow-label">OUR GUIDING PRINCIPLES</span>
            <h2>Four Pillars of <span className="italic-accent">Excellence.</span></h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)" }}>
              The operational values that dictate our drug development, employee workplace culture, and clinical distribution.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
            
            {/* Pillar 1 */}
            <div style={{ padding: "28px", borderRadius: "20px", background: "#ffffff", borderTop: "4px solid #10b981", boxShadow: "0 12px 30px rgba(0,0,0,0.04)" }}>
              <div style={{ fontSize: "1.25rem", fontWeight: "900", color: "#10b981", marginBottom: "8px" }}>01</div>
              <h3 style={{ fontSize: "1.3rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", marginBottom: "8px" }}>Ethics &amp; Compliance</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                Rigorous compliance with WHO-GMP regulations, ethical marketing practices, and full batch traceability.
              </p>
            </div>

            {/* Pillar 2 */}
            <div style={{ padding: "28px", borderRadius: "20px", background: "#ffffff", borderTop: "4px solid var(--color-gold)", boxShadow: "0 12px 30px rgba(0,0,0,0.04)" }}>
              <div style={{ fontSize: "1.25rem", fontWeight: "900", color: "var(--color-gold)", marginBottom: "8px" }}>02</div>
              <h3 style={{ fontSize: "1.3rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", marginBottom: "8px" }}>Collaborative Culture</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                Fostering teamwork, self-respect, and inclusive collaboration among medical representatives, pharmacists, and research staff.
              </p>
            </div>

            {/* Pillar 3 */}
            <div style={{ padding: "28px", borderRadius: "20px", background: "#ffffff", borderTop: "4px solid #2488a6", boxShadow: "0 12px 30px rgba(0,0,0,0.04)" }}>
              <div style={{ fontSize: "1.25rem", fontWeight: "900", color: "#2488a6", marginBottom: "8px" }}>03</div>
              <h3 style={{ fontSize: "1.3rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", marginBottom: "8px" }}>Scientific Innovation</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                Continuously advancing targeted oral delivery kinetics to maximize mucosal bio-availability and clinical outcomes.
              </p>
            </div>

            {/* Pillar 4 */}
            <div style={{ padding: "28px", borderRadius: "20px", background: "#ffffff", borderTop: "4px solid #d6438c", boxShadow: "0 12px 30px rgba(0,0,0,0.04)" }}>
              <div style={{ fontSize: "1.25rem", fontWeight: "900", color: "#d6438c", marginBottom: "8px" }}>04</div>
              <h3 style={{ fontSize: "1.3rem", fontFamily: "var(--font-heading)", color: "var(--color-forest-dark)", marginBottom: "8px" }}>Patient Centricity</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                Prioritizing once-daily dosing regimens, patient compliance, minimal gastric irritation, and long-term remission.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 5. MANUFACTURING EXCELLENCE & QUALITY ASSURANCE LAB ═══ */}
      <section className="section" style={{ padding: "0 0 var(--space-20) 0" }}>
        <div className="container">
          <div className="grid-split" style={{ alignItems: "center" }}>
            
            {/* Left Quality Interactive Tab Display */}
            <div>
              <span className="eyebrow-label" style={{ color: "#10b981" }}>MANUFACTURING RIGOR</span>
              <h2 style={{ marginBottom: "var(--space-6)", fontSize: "clamp(2rem, 3.8vw, 3.25rem)" }}>
                Uncompromised <span className="italic-accent" style={{ color: "#10b981" }}>Quality Control.</span>
              </h2>
              
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-6)" }}>
                Our accredited manufacturing partners adhere strictly to WHO-GMP standards and operate ISO 9001:2015 certified Quality Management Systems.
              </p>

              {/* Quality Tabs */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                <button
                  onClick={() => setActiveTab("gmp")}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "18px",
                    fontSize: "11px",
                    fontWeight: "900",
                    border: activeTab === "gmp" ? "2px solid #10b981" : "1px solid rgba(15,61,40,0.15)",
                    background: activeTab === "gmp" ? "#10b981" : "#ffffff",
                    color: activeTab === "gmp" ? "#ffffff" : "var(--color-forest-dark)",
                    cursor: "pointer",
                  }}
                >
                  WHO-GMP STANDARDS
                </button>
                <button
                  onClick={() => setActiveTab("iso")}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "18px",
                    fontSize: "11px",
                    fontWeight: "900",
                    border: activeTab === "iso" ? "2px solid #2488a6" : "1px solid rgba(15,61,40,0.15)",
                    background: activeTab === "iso" ? "#2488a6" : "#ffffff",
                    color: activeTab === "iso" ? "#ffffff" : "var(--color-forest-dark)",
                    cursor: "pointer",
                  }}
                >
                  ISO 9001:2015 SYSTEM
                </button>
                <button
                  onClick={() => setActiveTab("qc")}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "18px",
                    fontSize: "11px",
                    fontWeight: "900",
                    border: activeTab === "qc" ? "2px solid #d9a441" : "1px solid rgba(15,61,40,0.15)",
                    background: activeTab === "qc" ? "#d9a441" : "#ffffff",
                    color: activeTab === "qc" ? "#ffffff" : "var(--color-forest-dark)",
                    cursor: "pointer",
                  }}
                >
                  DISSOLUTION PROFILING
                </button>
              </div>

              {/* Tab Content Box */}
              <div style={{ padding: "24px", borderRadius: "18px", background: "#ffffff", border: "1.5px solid rgba(15, 61, 40, 0.12)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                {activeTab === "gmp" && (
                  <div>
                    <h4 style={{ fontSize: "1.2rem", color: "#10b981", fontFamily: "var(--font-heading)", marginBottom: "8px" }}>
                      WHO-GMP Cleanroom &amp; Sterility Standards
                    </h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                      Class 10,000 / ISO 7 cleanroom environmental controls equipped with HEPA filtration and positive pressure differentials to eliminate micro-particulate contamination.
                    </p>
                  </div>
                )}

                {activeTab === "iso" && (
                  <div>
                    <h4 style={{ fontSize: "1.2rem", color: "#2488a6", fontFamily: "var(--font-heading)", marginBottom: "8px" }}>
                      ISO 9001:2015 Raw Material &amp; API Traceability
                    </h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                      100% verified vendor auditing for raw Active Pharmaceutical Ingredients (APIs), ensuring complete batch traceability from raw synthesis to final clinical release.
                    </p>
                  </div>
                )}

                {activeTab === "qc" && (
                  <div>
                    <h4 style={{ fontSize: "1.2rem", color: "#d9a441", fontFamily: "var(--font-heading)", marginBottom: "8px" }}>
                      In-Vitro USP Dissolution Kinetics Testing
                    </h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                      Every batch undergoes USP Dissolution Apparatus testing to guarantee pH-dependent zero gastric release (pH 1.2) and targeted dissolution at colonic pH (&gt; 6.8).
                    </p>
                  </div>
                )}
              </div>

            </div>

            {/* Right Column 3D Shield Box */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  padding: "32px",
                  borderRadius: "28px",
                  background: "#ffffff",
                  border: "2px solid rgba(16, 185, 129, 0.25)",
                  boxShadow: "0 20px 45px rgba(15, 61, 40, 0.08)",
                }}
              >
                <img
                  src="/assets/images/3d-shield.png"
                  alt="3D Quality Shield Render"
                  style={{
                    width: "60%",
                    maxHeight: "200px",
                    objectFit: "contain",
                    margin: "0 auto 20px",
                    filter: "drop-shadow(0 14px 28px rgba(15, 61, 40, 0.15))",
                  }}
                />

                <span
                  style={{
                    fontSize: "10.5px",
                    fontWeight: "900",
                    letterSpacing: "0.12em",
                    color: "#10b981",
                    background: "rgba(16, 185, 129, 0.12)",
                    padding: "5px 14px",
                    borderRadius: "16px",
                    display: "inline-block",
                    marginBottom: "10px",
                  }}
                >
                  ✦ 100% BATCH CHEMICAL VERIFICATION
                </span>

                <h4 style={{ fontSize: "1.25rem", color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)", marginBottom: "4px" }}>
                  Analytical Quality Audits
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>
                  Every single batch receives a Certificate of Analysis prior to hospital &amp; pharmacy distribution.
                </p>
              </div>
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
