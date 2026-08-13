"use client";

import Link from "next/link";
import SpineTab from "@/components/SpineTab";

export default function TherapyAreas() {
  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="THERAPY AREAS — MARSELUS" />

        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow-badge" style={{ marginBottom: "var(--space-4)" }}>
              ✦ CLINICAL DOMAINS
            </span>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "var(--space-6)" }}>
              Therapy <span className="italic-accent">Areas.</span>
            </h1>
            <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-muted)" }}>
              Three speciality focuses. One scientific standard.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: "var(--space-12) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-8)" }}>
            
            {/* Gastroenterology */}
            <div className="atrimus-glass-card glow-border glow-border--artemes" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-xl)", background: "rgba(29, 158, 117, 0.05)", borderTop: "4px solid var(--color-artemes)" }}>
              <span className="eyebrow-label" style={{ color: "var(--color-artemes)" }}>GASTROENTEROLOGY</span>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-3)" }}>Gut Mucosal Healing &amp; Remission</h2>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                Targeted, prolonged-release formulations for inflammatory bowel disease, ulcerative colitis, and gut mucosal recovery.
              </p>
              <div style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Featured Products:</strong>
                <div style={{ display: "flex", gap: "8px", marginTop: "8px", flexWrap: "wrap" }}>
                  <span className="slide-badge" style={{ fontSize: "11px", background: "rgba(29, 158, 117, 0.15)", color: "var(--color-artemes)" }}>ARTEMES 1.2g</span>
                  <span className="slide-badge" style={{ fontSize: "11px", background: "rgba(46, 127, 224, 0.15)", color: "var(--color-uv60k)" }}>UV 60K</span>
                  <span className="slide-badge" style={{ fontSize: "11px", background: "rgba(224, 138, 46, 0.15)", color: "var(--color-immunomars)" }}>IMMUNOMARS</span>
                </div>
              </div>
              <Link href="/therapy-areas/gastroenterology" style={{ fontWeight: 700, color: "var(--color-artemes)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Explore Gastroenterology →
              </Link>
            </div>

            {/* Women's Health */}
            <div className="atrimus-glass-card glow-border glow-border--saranya" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-xl)", background: "rgba(214, 67, 140, 0.05)", borderTop: "4px solid var(--color-saranya)" }}>
              <span className="eyebrow-label" style={{ color: "var(--color-saranya)" }}>WOMEN&apos;S HEALTH</span>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-3)" }}>Hormonal &amp; Metabolic Balance</h2>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                Formulations supporting hormonal and metabolic balance in conditions such as PCOS, addressing fertility and endocrine equilibrium.
              </p>
              <div style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Featured Products:</strong>
                <div style={{ display: "flex", gap: "8px", marginTop: "8px", flexWrap: "wrap" }}>
                  <span className="slide-badge" style={{ fontSize: "11px", background: "rgba(214, 67, 140, 0.15)", color: "var(--color-saranya)" }}>SARANYA</span>
                  <span className="slide-badge" style={{ fontSize: "11px", background: "rgba(46, 127, 224, 0.15)", color: "var(--color-uv60k)" }}>UV 60K</span>
                </div>
              </div>
              <Link href="/therapy-areas/womens-health" style={{ fontWeight: 700, color: "var(--color-saranya)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Explore Women&apos;s Health →
              </Link>
            </div>

            {/* Clinical Nutrition */}
            <div className="atrimus-glass-card glow-border glow-border--immunomars" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-xl)", background: "rgba(224, 138, 46, 0.05)", borderTop: "4px solid var(--color-immunomars)" }}>
              <span className="eyebrow-label" style={{ color: "var(--color-immunomars)" }}>CLINICAL NUTRITION</span>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-3)" }}>Immunonutrition &amp; Recovery</h2>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                Amino-acid and micronutrient immunonutrition formulated to support recovery, immune function, and nutritional status.
              </p>
              <div style={{ marginBottom: "var(--space-6)" }}>
                <strong style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Featured Products:</strong>
                <div style={{ display: "flex", gap: "8px", marginTop: "8px", flexWrap: "wrap" }}>
                  <span className="slide-badge" style={{ fontSize: "11px", background: "rgba(224, 138, 46, 0.15)", color: "var(--color-immunomars)" }}>IMMUNOMARS</span>
                </div>
              </div>
              <Link href="/therapy-areas/clinical-nutrition" style={{ fontWeight: 700, color: "var(--color-immunomars)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Explore Clinical Nutrition →
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
