"use client";

import Link from "next/link";
import SpineTab from "@/components/SpineTab";

export default function Products() {
  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="OUR PRODUCTS — PORTFOLIO" />

        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow-badge" style={{ marginBottom: "var(--space-4)" }}>
              ✦ FORMULATION PORTFOLIO
            </span>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "var(--space-6)" }}>
              Our <span className="italic-accent">Products.</span>
            </h1>
            <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-muted)" }}>
              Four precision-engineered formulations. Developed for real, unmet clinical needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: "var(--space-12) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-8)" }}>
            
            {/* Product 1: ARTEMES */}
            <div className="atrimus-glass-card glow-border glow-border--artemes" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-xl)", background: "var(--color-artemes-tint)", borderTop: "4px solid var(--color-artemes)" }}>
              <span className="slide-badge" style={{ background: "rgba(29, 158, 117, 0.15)", color: "var(--color-artemes)", marginBottom: "var(--space-4)" }}>
                GASTROENTEROLOGY
              </span>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "4px" }}>
                ARTEMES <small style={{ fontSize: "0.9rem", color: "var(--color-artemes)" }}>1.2g</small>
              </h2>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-forest)", marginBottom: "var(--space-4)" }}>
                Mesalamine 1.2 g Prolonged Release Tablets
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                Prolonged-release mesalamine formulation developed for the management of ulcerative colitis (mild to moderate).
              </p>
              <Link href="/products/artemes" style={{ fontWeight: 700, color: "var(--color-artemes)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Monograph &amp; Product Details →
              </Link>
            </div>

            {/* Product 2: SARANYA */}
            <div className="atrimus-glass-card glow-border glow-border--saranya" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-xl)", background: "var(--color-saranya-tint)", borderTop: "4px solid var(--color-saranya)" }}>
              <span className="slide-badge" style={{ background: "rgba(214, 67, 140, 0.15)", color: "var(--color-saranya)", marginBottom: "var(--space-4)" }}>
                WOMEN&apos;S HEALTH
              </span>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "4px" }}>
                SARANYA
              </h2>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-forest)", marginBottom: "var(--space-4)" }}>
                Myo-Inositol 1100 mg + D-Chiro Inositol 27.6 mg + Chromium + Vit D2
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                Formulated for physiological hormonal &amp; metabolic balance in PCOS management.
              </p>
              <Link href="/products/saranya" style={{ fontWeight: 700, color: "var(--color-saranya)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Monograph &amp; Product Details →
              </Link>
            </div>

            {/* Product 3: IMMUNOMARS */}
            <div className="atrimus-glass-card glow-border glow-border--immunomars" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-xl)", background: "var(--color-immunomars-tint)", borderTop: "4px solid var(--color-immunomars)" }}>
              <span className="slide-badge" style={{ background: "rgba(224, 138, 46, 0.15)", color: "var(--color-immunomars)", marginBottom: "var(--space-4)" }}>
                CLINICAL NUTRITION
              </span>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "4px" }}>
                IMMUNOMARS
              </h2>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-forest)", marginBottom: "var(--space-4)" }}>
                L-Glutamine + L-Lysine + L-Arginine + Multivitamins + Minerals Sachet
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                An immunonutrition blend engineered to support clinical recovery: Rebuild. Protect. Recover.
              </p>
              <Link href="/products/immunomars" style={{ fontWeight: 700, color: "var(--color-immunomars)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Monograph &amp; Product Details →
              </Link>
            </div>

            {/* Product 4: UV 60K */}
            <div className="atrimus-glass-card glow-border glow-border--uv60k" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-xl)", background: "var(--color-uv60k-tint)", borderTop: "4px solid var(--color-uv60k)" }}>
              <span className="slide-badge" style={{ background: "rgba(46, 127, 224, 0.15)", color: "var(--color-uv60k)", marginBottom: "var(--space-4)" }}>
                VITAMIN THERAPY
              </span>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "4px" }}>
                UV 60K
              </h2>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-forest)", marginBottom: "var(--space-4)" }}>
                Cholecalciferol (Vitamin D3) 60,000 IU Softgel Capsule
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                High-potency softgel formulation for rapid clinical correction of severe Vitamin D deficiency.
              </p>
              <Link href="/products/uv60k" style={{ fontWeight: 700, color: "var(--color-uv60k)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Monograph &amp; Product Details →
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
