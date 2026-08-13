"use client";

import Link from "next/link";
import SpineTab from "@/components/SpineTab";
import AnnotationLeader from "@/components/AnnotationLeader";

export default function ArtemesPage() {
  return (
    <main className="page-content section-tint--artemes" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      
      {/* Hero Banner with Spine Tab */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="ARTEMES 1.2G — MONOGRAPH" />

        <div className="container">
          <div className="grid-split">
            
            {/* Left Column: Pack Artwork & Tablet Animation */}
            <div>
              <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)", textAlign: "center" }}>
                <img src="/assets/images/atrimus-capsule.png" alt="ARTEMES Pack & Tablet Render" style={{ width: "75%", height: "auto", margin: "0 auto var(--space-4)" }} />
                <span className="eyebrow-badge" style={{ color: "var(--color-artemes)", borderColor: "rgba(29, 158, 117, 0.3)" }}>
                  Targeted Prolonged Release Tablet
                </span>
              </div>
            </div>

            {/* Right Column: Composition & Overview */}
            <div>
              <span className="slide-badge" style={{ background: "rgba(29, 158, 117, 0.15)", color: "var(--color-artemes)", marginBottom: "var(--space-4)" }}>
                GASTROENTEROLOGY · PROLONGED RELEASE
              </span>
              <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)", marginBottom: "var(--space-3)", color: "var(--color-forest)" }}>
                ARTEMES <small style={{ fontSize: "1.2rem", color: "var(--color-artemes)" }}>1.2g</small>
              </h1>
              <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-forest)", marginBottom: "var(--space-4)" }}>
                Composition: Mesalamine 1.2 g Prolonged Release Tablets
              </p>

              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                <strong>What it is:</strong> ARTEMES is a prolonged-release mesalamine formulation developed for the management of ulcerative colitis (mild to moderate).
              </p>

              <div style={{ padding: "var(--space-4) var(--space-6)", background: "#ffffff", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--color-artemes)", marginBottom: "var(--space-6)" }}>
                <strong style={{ fontSize: "0.95rem", color: "var(--color-forest)" }}>Indications:</strong>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>
                  In the management of Ulcerative Colitis (Mild to Moderate).
                </p>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <span className="verify-tag" title="Confirm pricing before publication">[VERIFY: Pricing Rs. 33]</span>
                <span className="slide-badge" style={{ fontSize: "11px" }}>WHO-GMP CERTIFIED PLANT</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Information with Annotation Leader Lines */}
      <section className="section" style={{ padding: "var(--space-12) 0" }}>
        <div className="container">
          <h2 style={{ marginBottom: "var(--space-8)" }}>Key Clinical Information</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-12)" }}>
            <div style={{ background: "#ffffff", padding: "var(--space-8)", borderRadius: "var(--radius-lg)" }}>
              <AnnotationLeader title="Anti-Inflammatory Action" description="Direct topically active 5-ASA concentration along inflamed colonic mucosa." accentColor="var(--color-artemes)" />
              <AnnotationLeader title="Remission Induction" description="Supports rapid induction and long-term maintenance of ulcerative colitis remission." accentColor="var(--color-artemes)" />
              <AnnotationLeader title="Targeted Release Precision" description="Enteric-coated prolonged release system ensures active drug delivers directly to target site." accentColor="var(--color-artemes)" />
            </div>

            <div style={{ background: "#ffffff", padding: "var(--space-8)", borderRadius: "var(--radius-lg)" }}>
              <AnnotationLeader title="Mucosal Healing Optimized" description="Promotes epithelial barrier recovery and mucosal restitution." accentColor="var(--color-artemes)" />
              <AnnotationLeader title="Efficacy Sustained" description="Sustained therapeutic effect enhances daily symptom relief and patient comfort." accentColor="var(--color-artemes)" />
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Science */}
      <section className="section" style={{ padding: "var(--space-12) 0" }}>
        <div className="container">
          <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)" }}>
            <h3 style={{ marginBottom: "var(--space-4)" }}>Manufacturing &amp; Scientific Data</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
              <strong>Manufacturing:</strong> Manufactured in India at a WHO-GMP certified facility enforcing international quality control standards.
            </p>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
              <strong>Science:</strong> Study references supporting remission induction and mucosal healing timelines are available in the product monograph.
              <span className="verify-tag" style={{ marginLeft: "8px" }}>Citations subject to medical sign-off</span>
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
