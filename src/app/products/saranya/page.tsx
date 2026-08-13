"use client";

import Link from "next/link";
import SpineTab from "@/components/SpineTab";
import AnnotationLeader from "@/components/AnnotationLeader";

export default function SaranyaPage() {
  return (
    <main className="page-content section-tint--saranya" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      
      {/* Hero Banner with Spine Tab */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="SARANYA — MONOGRAPH" />

        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-12)", alignItems: "center" }}>
            
            {/* Left Column: Pack Artwork */}
            <div>
              <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)", textAlign: "center" }}>
                <img src="/assets/images/womens-therapy.png" alt="SARANYA Pack Render" style={{ width: "75%", height: "auto", margin: "0 auto var(--space-4)" }} />
                <span className="eyebrow-badge" style={{ color: "var(--color-saranya)", borderColor: "rgba(214, 67, 140, 0.3)" }}>
                  40:1 Physiological Inositol Formula
                </span>
              </div>
            </div>

            {/* Right Column: Composition & Overview */}
            <div>
              <span className="slide-badge" style={{ background: "rgba(214, 67, 140, 0.15)", color: "var(--color-saranya)", marginBottom: "var(--space-4)" }}>
                WOMEN&apos;S HEALTH · 40:1 RATIO FORMULA
              </span>
              <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)", marginBottom: "var(--space-3)", color: "var(--color-forest)" }}>
                SARANYA
              </h1>
              <p style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-forest)", marginBottom: "var(--space-4)" }}>
                Composition: Myo-Inositol 1100 mg, D-Chiro Inositol 27.6 mg, Chromium Picolinate 400 mcg, Vitamin D2 400 IU
              </p>

              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                <strong>What it is:</strong> SARANYA is formulated for hormonal and metabolic balance in PCOS.
              </p>

              <div style={{ padding: "var(--space-4) var(--space-6)", background: "#ffffff", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--color-saranya)", marginBottom: "var(--space-6)" }}>
                <strong style={{ fontSize: "0.95rem", color: "var(--color-forest)" }}>Indications:</strong>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>
                  Hormonal &amp; metabolic balance for PCOS.
                </p>
              </div>

              <span className="verify-tag" title="Comparative claims held back pending approval">[VERIFY: Comparative Claims Held Back]</span>
            </div>

          </div>
        </div>
      </section>

      {/* Key Information & Evidence */}
      <section className="section" style={{ padding: "var(--space-12) 0" }}>
        <div className="container">
          <h2 style={{ marginBottom: "var(--space-8)" }}>Composition &amp; Synergistic Actions</h2>

          <div style={{ background: "#ffffff", padding: "var(--space-8)", borderRadius: "var(--radius-lg)", marginBottom: "var(--space-8)" }}>
            <AnnotationLeader title="Myo-Inositol & D-Chiro-Inositol (40:1)" description="Formulated to reflect the natural plasma ratio required for follicular health and insulin pathway signaling." accentColor="var(--color-saranya)" />
            <AnnotationLeader title="Chromium Picolinate (400 mcg)" description="Enhances cellular glucose uptake and insulin receptor activity." accentColor="var(--color-saranya)" />
            <AnnotationLeader title="Vitamin D2 (400 IU)" description="Essential co-factor supporting follicular development and endocrine equilibrium." accentColor="var(--color-saranya)" />
          </div>

          <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)" }}>
            <h3 style={{ marginBottom: "var(--space-4)" }}>Clinical Resources &amp; Prescribing Note</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
              Detailed comparative trial summaries and prescribing guidelines are available for registered healthcare professionals.
            </p>
            <div style={{ padding: "var(--space-4) var(--space-6)", background: "rgba(15, 61, 40, 0.05)", borderRadius: "var(--radius-md)" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>
                <em>Disclaimer: For healthcare professionals. Please refer to full prescribing information before use.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
