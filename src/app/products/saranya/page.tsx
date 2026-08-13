"use client";

import { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";
import AnnotationLeader from "@/components/AnnotationLeader";

export default function SaranyaPage() {
  const [activeTab, setActiveTab] = useState<"formula" | "mechanism" | "pcos">("formula");

  return (
    <main className="page-content section-tint--saranya" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      
      {/* ═══ 1. HERO SHOWCASE ═══ */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="SARANYA — MONOGRAPH" />

        <div className="container">
          <div className="grid-split">
            
            {/* Left 3D Stage Render */}
            <div>
              <div className="atrimus-glass-card" style={{ padding: "var(--space-10)", background: "#ffffff", borderRadius: "32px", textAlign: "center", border: "1px solid rgba(214, 67, 140, 0.2)", boxShadow: "0 20px 40px rgba(214, 67, 140, 0.12)" }}>
                <div style={{ position: "relative", width: "100%", height: "260px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ position: "absolute", width: "180px", height: "180px", borderRadius: "50%", background: "var(--color-saranya)", filter: "blur(60px)", opacity: 0.2, pointerEvents: "none" }}></div>
                  <img src="/assets/images/womens-therapy.png" alt="SARANYA 3D Pack Render" style={{ width: "85%", height: "auto", maxHeight: "220px", objectFit: "contain", filter: "drop-shadow(0 16px 25px rgba(214, 67, 140, 0.2))" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "var(--space-4)", flexWrap: "wrap" }}>
                  <span className="eyebrow-badge" style={{ color: "var(--color-saranya)", borderColor: "rgba(214, 67, 140, 0.3)" }}>
                    40:1 Physiological Inositol Ratio
                  </span>
                  <span className="eyebrow-badge" style={{ color: "var(--color-forest)", borderColor: "rgba(15, 61, 40, 0.2)" }}>
                    PCOS Metabolic Restore
                  </span>
                </div>
              </div>
            </div>

            {/* Right Product Copy */}
            <div>
              <span className="slide-badge" style={{ background: "rgba(214, 67, 140, 0.15)", color: "var(--color-saranya)", marginBottom: "var(--space-4)" }}>
                WOMEN&apos;S HEALTH · 40:1 RATIO FORMULA
              </span>
              
              <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4rem)", marginBottom: "var(--space-2)", color: "var(--color-forest)" }}>
                SARANYA
              </h1>
              
              <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-forest)", marginBottom: "var(--space-4)" }}>
                Myo-Inositol 1100 mg + D-Chiro Inositol 27.6 mg + Chromium Picolinate 400 mcg + Vit D2 400 IU
              </p>

              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.65", marginBottom: "var(--space-6)" }}>
                SARANYA is engineered for physiological hormonal and metabolic balance in Polycystic Ovary Syndrome (PCOS), restoring endocrine equilibrium and insulin sensitivity.
              </p>

              <div className="composition-pill-list" style={{ marginBottom: "var(--space-6)" }}>
                <span className="composition-pill">✓ Myo-Inositol 1100mg</span>
                <span className="composition-pill">✓ D-Chiro-Inositol 27.6mg (40:1)</span>
                <span className="composition-pill">✓ Chromium Picolinate 400mcg</span>
                <span className="composition-pill">✓ Vit D2 400IU</span>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-saranya)", color: "#ffffff" }}>
                  Request Prescribing Monograph →
                </Link>
                <span className="verify-tag" title="Comparative claims held back pending approval">[VERIFY: Comparative Claims Held Back]</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 2. INTERACTIVE COMPOSITION & MECHANISM TABS ═══ */}
      <section className="section" style={{ padding: "var(--space-12) 0" }}>
        <div className="container">
          
          <div className="indication-tabs-row" style={{ justifyContent: "center", marginBottom: "var(--space-8)" }}>
            <button 
              className={`indication-tab-btn ${activeTab === "formula" ? "active" : ""}`}
              onClick={() => setActiveTab("formula")}
              style={{ background: activeTab === "formula" ? "var(--color-saranya)" : "" }}
            >
              Composition &amp; 40:1 Ratio
            </button>
            <button 
              className={`indication-tab-btn ${activeTab === "mechanism" ? "active" : ""}`}
              onClick={() => setActiveTab("mechanism")}
              style={{ background: activeTab === "mechanism" ? "var(--color-saranya)" : "" }}
            >
              Insulin Pathway Signaling
            </button>
            <button 
              className={`indication-tab-btn ${activeTab === "pcos" ? "active" : ""}`}
              onClick={() => setActiveTab("pcos")}
              style={{ background: activeTab === "pcos" ? "var(--color-saranya)" : "" }}
            >
              PCOS Endocrine Recovery
            </button>
          </div>

          {activeTab === "formula" && (
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-10)", background: "#ffffff", borderRadius: "28px" }}>
              <span className="eyebrow-label" style={{ color: "var(--color-saranya)" }}>40:1 PHYSIOLOGICAL RATIO</span>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Plasma Ratio Alignment</h3>
              <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                The 40:1 ratio of Myo-Inositol to D-Chiro-Inositol mirrors the natural physiological ratio in human plasma, essential for restoring normal ovarian physiology without inducing epimerase exhaustion.
              </p>
              <AnnotationLeader title="Myo-Inositol (1100 mg)" description="Primary secondary messenger in FSH receptor signaling, driving follicular growth." accentColor="var(--color-saranya)" />
              <AnnotationLeader title="D-Chiro Inositol (27.6 mg)" description="Modulates glycogen synthesis and peripheral insulin receptor activation." accentColor="var(--color-saranya)" />
            </div>
          )}

          {activeTab === "mechanism" && (
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-10)", background: "#ffffff", borderRadius: "28px" }}>
              <span className="eyebrow-label" style={{ color: "var(--color-saranya)" }}>INSULIN SENSITIZING</span>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Chromium &amp; Vitamin D2 Synergism</h3>
              <AnnotationLeader title="Chromium Picolinate (400 mcg)" description="Potentiates insulin action by increasing GLUT4 transporter translocation." accentColor="var(--color-saranya)" />
              <AnnotationLeader title="Vitamin D2 (400 IU)" description="Critical co-factor for insulin secretion and anti-Müllerian hormone regulation." accentColor="var(--color-saranya)" />
            </div>
          )}

          {activeTab === "pcos" && (
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-10)", background: "#ffffff", borderRadius: "28px" }}>
              <span className="eyebrow-label" style={{ color: "var(--color-saranya)" }}>CLINICAL GOALS</span>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Ovulatory &amp; Endocrine Balance</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                Formulated to support menstrual regularity, reduce hyperandrogenism signs, and promote metabolic wellness.
              </p>
              <div style={{ padding: "var(--space-4) var(--space-6)", background: "rgba(15, 61, 40, 0.05)", borderRadius: "var(--radius-md)" }}>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>
                  <em>Disclaimer: For healthcare professionals. Please refer to full prescribing information before use.</em>
                </p>
              </div>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}
