"use client";

import Link from "next/link";
import SpineTab from "@/components/SpineTab";
import AnnotationLeader from "@/components/AnnotationLeader";

export default function GastroenterologyPage() {
  return (
    <main className="page-content section-tint--artemes" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      
      {/* Hero Banner with Spine Tab */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="GASTROENTEROLOGY — SPECIALITY CARE" />

        <div className="container">
          <div style={{ maxWidth: "840px" }}>
            <span className="slide-badge" style={{ background: "rgba(29, 158, 117, 0.15)", color: "var(--color-artemes)", marginBottom: "var(--space-4)" }}>
              ✦ SPECIALITY THERAPY DOMAIN
            </span>
            <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4.25rem)", marginBottom: "var(--space-6)", color: "var(--color-forest)" }}>
              Gastroenterology &amp; <span className="italic-accent" style={{ color: "var(--color-artemes)" }}>Mucosal Healing.</span>
            </h1>
            <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-muted)", lineHeight: "1.65" }}>
              Targeted, prolonged-release formulations for inflammatory bowel disease, ulcerative colitis, and gut mucosal recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Scientific Rationale with Annotation Leader Lines */}
      <section className="section" style={{ padding: "var(--space-12) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-12)", alignItems: "center" }}>
            
            <div>
              <span className="eyebrow-label" style={{ color: "var(--color-artemes)" }}>SCIENTIFIC RATIONALE</span>
              <h2 style={{ marginBottom: "var(--space-6)" }}>Site-Specific Delivery</h2>
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", marginBottom: "var(--space-8)" }}>
                Localized, site-specific drug delivery reduces systemic exposure while concentrating therapeutic action where the disease is active — supporting mucosal healing and sustained remission.
              </p>

              <div style={{ background: "#ffffff", padding: "var(--space-8)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)" }}>
                <AnnotationLeader 
                  title="Targeted Colonic Dissolution" 
                  description="Matrix technology engineered for precise release along colonic mucosa."
                  accentColor="var(--color-artemes)" 
                />
                <AnnotationLeader 
                  title="Mucosal Barrier Healing" 
                  description="Optimized local anti-inflammatory concentration promoting tissue repair."
                  accentColor="var(--color-artemes)" 
                />
                <AnnotationLeader 
                  title="Minimal Systemic Exposure" 
                  description="Reduces systemic side effects while enhancing clinical compliance."
                  accentColor="var(--color-artemes)" 
                />
              </div>
            </div>

            <div>
              <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-xl)", background: "#ffffff", textAlign: "center" }}>
                <img src="/assets/images/gastro-therapy.png" alt="Gastroenterology Therapy Render" style={{ width: "85%", height: "auto", margin: "0 auto var(--space-4)" }} />
                <span className="eyebrow-badge" style={{ color: "var(--color-artemes)", borderColor: "rgba(29, 158, 117, 0.3)" }}>
                  Gastroenterology Portfolio
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
              <span className="slide-badge" style={{ background: "rgba(29, 158, 117, 0.15)", color: "var(--color-artemes)", marginBottom: "var(--space-2)" }}>HERO BRAND</span>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "4px" }}>ARTEMES 1.2g</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>Mesalamine 1.2 g Prolonged Release Tablets</p>
              <Link href="/products/artemes" style={{ fontWeight: 700, color: "var(--color-artemes)" }}>View Monograph →</Link>
            </div>

            <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderRadius: "var(--radius-lg)", background: "#ffffff" }}>
              <span className="slide-badge" style={{ background: "rgba(46, 127, 224, 0.15)", color: "var(--color-uv60k)", marginBottom: "var(--space-2)" }}>VITAMIN THERAPY</span>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "4px" }}>UV 60K</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>Cholecalciferol (Vitamin D3) 60,000 IU Softgel</p>
              <Link href="/products/uv60k" style={{ fontWeight: 700, color: "var(--color-uv60k)" }}>View Monograph →</Link>
            </div>

            <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderRadius: "var(--radius-lg)", background: "#ffffff" }}>
              <span className="slide-badge" style={{ background: "rgba(224, 138, 46, 0.15)", color: "var(--color-immunomars)", marginBottom: "var(--space-2)" }}>CLINICAL NUTRITION</span>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "4px" }}>IMMUNOMARS</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>L-Glutamine &amp; Immunonutrition Sachet</p>
              <Link href="/products/immunomars" style={{ fontWeight: 700, color: "var(--color-immunomars)" }}>View Monograph →</Link>
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
