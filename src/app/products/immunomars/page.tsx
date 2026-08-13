"use client";

import Link from "next/link";
import SpineTab from "@/components/SpineTab";
import AnnotationLeader from "@/components/AnnotationLeader";

export default function ImmunomarsPage() {
  return (
    <main className="page-content section-tint--immunomars" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      
      {/* Hero Banner with Spine Tab */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="IMMUNOMARS — MONOGRAPH" />

        <div className="container">
          <div className="grid-split">
            
            {/* Left Column: Pack Artwork */}
            <div>
              <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)", textAlign: "center" }}>
                <img src="/assets/images/nutrition-therapy.png" alt="IMMUNOMARS Pack Render" style={{ width: "75%", height: "auto", margin: "0 auto var(--space-4)" }} />
                <span className="eyebrow-badge" style={{ color: "var(--color-immunomars)", borderColor: "rgba(224, 138, 46, 0.3)" }}>
                  Clinical Immunonutrition Sachet
                </span>
              </div>
            </div>

            {/* Right Column: Composition & Overview */}
            <div>
              <span className="slide-badge" style={{ background: "rgba(224, 138, 46, 0.15)", color: "var(--color-immunomars)", marginBottom: "var(--space-4)" }}>
                CLINICAL NUTRITION · CLINICAL SACHET
              </span>
              <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)", marginBottom: "var(--space-2)", color: "var(--color-forest)" }}>
                IMMUNOMARS
              </h1>
              <p style={{ fontSize: "1.25rem", fontFamily: "var(--font-heading)", fontStyle: "italic", color: "var(--color-immunomars)", marginBottom: "var(--space-4)" }}>
                Rebuild. Protect. Recover.
              </p>
              <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-forest)", marginBottom: "var(--space-4)" }}>
                Composition: L-Glutamine + L-Lysine + L-Arginine + Multivitamins + Zinc + Selenium + Vitamin-C Sachet
              </p>

              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                <strong>What it is:</strong> An immunonutrition blend engineered to support clinical recovery, gut mucosal barrier defence, and healing.
              </p>

              <div style={{ padding: "var(--space-4) var(--space-6)", background: "#ffffff", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--color-immunomars)" }}>
                <strong style={{ fontSize: "0.95rem", color: "var(--color-forest)" }}>Suggested Use:</strong>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>
                  1 sachet/day mixed in 150–200 ml water or juice. Duration: 7–14 days / months, or as advised by physician.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Information & Verbatim Safety */}
      <section className="section" style={{ padding: "var(--space-12) 0" }}>
        <div className="container">
          <h2 style={{ marginBottom: "var(--space-8)" }}>Targeted Actions &amp; Safety Profile</h2>

          <div style={{ background: "#ffffff", padding: "var(--space-8)", borderRadius: "var(--radius-lg)", marginBottom: "var(--space-8)" }}>
            <AnnotationLeader title="Intestinal & Mucosal Barrier Defense" description="Formulated to support gut integrity and enterocyte repair during metabolic stress." accentColor="var(--color-immunomars)" />
            <AnnotationLeader title="Immune Modulation & Antioxidant Shield" description="L-Lysine, L-Arginine, Zinc, Selenium, and Vit-C provide comprehensive antioxidant defence." accentColor="var(--color-immunomars)" />
            <AnnotationLeader title="Nutritional Recovery Support" description="Aids tissue restitution and protein synthesis in post-operative and post-illness contexts." accentColor="var(--color-immunomars)" />
          </div>

          {/* VERBATIM SAFETY CAUTION */}
          <div style={{ padding: "var(--space-6)", background: "rgba(224, 138, 46, 0.1)", borderRadius: "var(--radius-lg)", borderLeft: "4px solid var(--color-immunomars)" }}>
            <strong style={{ fontSize: "1rem", color: "var(--color-immunomars)", display: "block", marginBottom: "4px" }}>Safety Caution (Verbatim):</strong>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-dark)", margin: 0, fontWeight: 600 }}>
              Caution in renal impairment. Not for severe hepatic dysfunction unless advised.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
