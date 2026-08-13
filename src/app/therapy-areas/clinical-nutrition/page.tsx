"use client";

import Link from "next/link";
import SpineTab from "@/components/SpineTab";
import AnnotationLeader from "@/components/AnnotationLeader";

export default function ClinicalNutritionPage() {
  return (
    <main className="page-content section-tint--immunomars" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      
      {/* Hero Banner with Spine Tab */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="CLINICAL NUTRITION — IMMUNONUTRITION" />

        <div className="container">
          <div style={{ maxWidth: "840px" }}>
            <span className="slide-badge" style={{ background: "rgba(224, 138, 46, 0.15)", color: "var(--color-immunomars)", marginBottom: "var(--space-4)" }}>
              ✦ SPECIALITY THERAPY DOMAIN
            </span>
            <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4.25rem)", marginBottom: "var(--space-6)", color: "var(--color-forest)" }}>
              Clinical Nutrition &amp; <span className="italic-accent" style={{ color: "var(--color-immunomars)" }}>Immunonutrition.</span>
            </h1>
            <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-muted)", lineHeight: "1.65" }}>
              Amino-acid and micronutrient immunonutrition formulated to support recovery, immune function, and nutritional status — including post-operative and post-illness contexts.
            </p>
          </div>
        </div>
      </section>

      {/* Scientific Rationale with Annotation Leader Lines */}
      <section className="section" style={{ padding: "var(--space-12) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-12)", alignItems: "center" }}>
            
            <div>
              <span className="eyebrow-label" style={{ color: "var(--color-immunomars)" }}>SCIENTIFIC RATIONALE</span>
              <h2 style={{ marginBottom: "var(--space-6)" }}>Barrier Integrity &amp; Tissue Repair</h2>
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", marginBottom: "var(--space-8)" }}>
                Targeted amino acid and micronutrient supplementation supports mucosal barrier integrity, immune modulation, and tissue repair during recovery.
              </p>

              <div style={{ background: "#ffffff", padding: "var(--space-8)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)" }}>
                <AnnotationLeader 
                  title="Mucosal Barrier Fuel" 
                  description="L-Glutamine serves as primary metabolic substrate for enterocytes and immune lymphocytes."
                  accentColor="var(--color-immunomars)" 
                />
                <AnnotationLeader 
                  title="Tissue & Collagen Synthesis" 
                  description="L-Lysine and L-Arginine drive nitrogen balance, protein synthesis, and wound repair."
                  accentColor="var(--color-immunomars)" 
                />
                <AnnotationLeader 
                  title="Antioxidant Defense Shield" 
                  description="Zinc, Selenium, and Vit-C neutralize oxidative stress during catabolic recovery phases."
                  accentColor="var(--color-immunomars)" 
                />
              </div>
            </div>

            <div>
              <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", borderRadius: "var(--radius-xl)", background: "#ffffff", textAlign: "center" }}>
                <img src="/assets/images/nutrition-therapy.png" alt="Clinical Nutrition Therapy Render" style={{ width: "85%", height: "auto", margin: "0 auto var(--space-4)" }} />
                <span className="eyebrow-badge" style={{ color: "var(--color-immunomars)", borderColor: "rgba(224, 138, 46, 0.3)" }}>
                  Clinical Nutrition Portfolio
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
              <span className="slide-badge" style={{ background: "rgba(224, 138, 46, 0.15)", color: "var(--color-immunomars)", marginBottom: "var(--space-2)" }}>HERO BRAND</span>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "4px" }}>IMMUNOMARS</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>L-Glutamine + L-Lysine + L-Arginine + Multivitamins + Zinc + Selenium + Vit-C Sachet</p>
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
