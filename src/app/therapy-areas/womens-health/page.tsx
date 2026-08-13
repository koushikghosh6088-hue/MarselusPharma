"use client";

import Link from "next/link";
import SpineTab from "@/components/SpineTab";
import AnnotationLeader from "@/components/AnnotationLeader";

export default function WomensHealthPage() {
  return (
    <main className="page-content section-tint--saranya" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      
      {/* Hero Banner with Spine Tab */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="WOMEN'S HEALTH — HORMONAL WELLNESS" />

        <div className="container">
          <div style={{ maxWidth: "840px" }}>
            <span className="slide-badge" style={{ background: "rgba(214, 67, 140, 0.15)", color: "var(--color-saranya)", marginBottom: "var(--space-4)" }}>
              ✦ SPECIALITY THERAPY DOMAIN
            </span>
            <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4.25rem)", marginBottom: "var(--space-6)", color: "var(--color-forest)" }}>
              Women&apos;s Health &amp; <span className="italic-accent" style={{ color: "var(--color-saranya)" }}>Metabolic Balance.</span>
            </h1>
            <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-muted)", lineHeight: "1.65" }}>
              Formulations supporting hormonal and metabolic balance in conditions such as PCOS, addressing fertility and endocrine equilibrium.
            </p>
          </div>
        </div>
      </section>

      {/* Scientific Rationale with Annotation Leader Lines */}
      <section className="section" style={{ padding: "var(--space-12) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-12)", alignItems: "center" }}>
            
            <div>
              <span className="eyebrow-label" style={{ color: "var(--color-saranya)" }}>SCIENTIFIC RATIONALE</span>
              <h2 style={{ marginBottom: "var(--space-6)" }}>Dual Inositol Synergy</h2>
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", marginBottom: "var(--space-8)" }}>
                Combination inositol and micronutrient therapy is studied for its role in restoring ovulatory function and insulin sensitivity in PCOS.
              </p>

              <div style={{ background: "#ffffff", padding: "var(--space-8)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)" }}>
                <AnnotationLeader 
                  title="40:1 Physiological Inositol Ratio" 
                  description="Restores physiological Myo-Inositol to D-Chiro-Inositol plasma concentrations."
                  accentColor="var(--color-saranya)" 
                />
                <AnnotationLeader 
                  title="Insulin Sensitizing Action" 
                  description="Chromium picolinate enhances glucose transporter recruitment and cellular sensitivity."
                  accentColor="var(--color-saranya)" 
                />
                <AnnotationLeader 
                  title="Endocrine & Ovulatory Restore" 
                  description="Vitamin D2 co-factor supports follicular maturation and endocrine homeostasis."
                  accentColor="var(--color-saranya)" 
                />
              </div>
            </div>

            <div>
              <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-xl)", background: "#ffffff", textAlign: "center" }}>
                <img src="/assets/images/womens-therapy.png" alt="Women's Health Therapy Render" style={{ width: "85%", height: "auto", margin: "0 auto var(--space-4)" }} />
                <span className="eyebrow-badge" style={{ color: "var(--color-saranya)", borderColor: "rgba(214, 67, 140, 0.3)" }}>
                  Women&apos;s Health Portfolio
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" style={{ padding: "var(--space-12) 0" }}>
        <div className="container">
          <h2 style={{ marginBottom: "var(--space-8)" }}>Featured Formulations</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-8)" }}>
            <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderRadius: "var(--radius-lg)", background: "#ffffff" }}>
              <span className="slide-badge" style={{ background: "rgba(214, 67, 140, 0.15)", color: "var(--color-saranya)", marginBottom: "var(--space-2)" }}>HERO BRAND</span>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "4px" }}>SARANYA</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>Myo-Inositol 1100mg + D-Chiro 27.6mg Formula</p>
              <Link href="/products/saranya" style={{ fontWeight: 700, color: "var(--color-saranya)" }}>View Monograph →</Link>
            </div>

            <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderRadius: "var(--radius-lg)", background: "#ffffff" }}>
              <span className="slide-badge" style={{ background: "rgba(46, 127, 224, 0.15)", color: "var(--color-uv60k)", marginBottom: "var(--space-2)" }}>VITAMIN THERAPY</span>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "4px" }}>UV 60K</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>Cholecalciferol (Vitamin D3) 60,000 IU Softgel</p>
              <Link href="/products/uv60k" style={{ fontWeight: 700, color: "var(--color-uv60k)" }}>View Monograph →</Link>
            </div>
          </div>

          {/* Healthcare Disclaimer */}
          <div style={{ marginTop: "var(--space-12)", padding: "var(--space-4) var(--space-6)", background: "rgba(15, 61, 40, 0.05)", borderRadius: "var(--radius-md)", borderLeft: "3px solid var(--color-forest)" }}>
            <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>
              <em>Disclaimer: This information is intended for healthcare professionals and for educational purposes. It does not constitute medical advice.</em>
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
