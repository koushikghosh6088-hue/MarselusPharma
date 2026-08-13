"use client";

import { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";
import AnnotationLeader from "@/components/AnnotationLeader";

export default function ImmunomarsPage() {
  const [activeStage, setActiveStage] = useState<"rebuild" | "protect" | "recover">("rebuild");

  return (
    <main className="page-content section-tint--immunomars" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      
      {/* ═══ 1. HERO SHOWCASE ═══ */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="IMMUNOMARS — MONOGRAPH" />

        <div className="container">
          <div className="grid-split">
            
            {/* Left 3D Stage Render */}
            <div>
              <div className="atrimus-glass-card" style={{ padding: "var(--space-10)", background: "#ffffff", borderRadius: "32px", textAlign: "center", border: "1px solid rgba(224, 138, 46, 0.2)", boxShadow: "0 20px 40px rgba(224, 138, 46, 0.12)" }}>
                <div style={{ position: "relative", width: "100%", height: "260px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ position: "absolute", width: "180px", height: "180px", borderRadius: "50%", background: "var(--color-immunomars)", filter: "blur(60px)", opacity: 0.2, pointerEvents: "none" }}></div>
                  <img src="/assets/images/nutrition-therapy.png" alt="IMMUNOMARS 3D Pack Render" style={{ width: "85%", height: "auto", maxHeight: "220px", objectFit: "contain", filter: "drop-shadow(0 16px 25px rgba(224, 138, 46, 0.2))" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "var(--space-4)", flexWrap: "wrap" }}>
                  <span className="eyebrow-badge" style={{ color: "var(--color-immunomars)", borderColor: "rgba(224, 138, 46, 0.3)" }}>
                    Clinical Immunonutrition Sachet
                  </span>
                  <span className="eyebrow-badge" style={{ color: "var(--color-forest)", borderColor: "rgba(15, 61, 40, 0.2)" }}>
                    Mucosal Barrier Shield
                  </span>
                </div>
              </div>
            </div>

            {/* Right Product Copy */}
            <div>
              <span className="slide-badge" style={{ background: "rgba(224, 138, 46, 0.15)", color: "var(--color-immunomars)", marginBottom: "var(--space-4)" }}>
                CLINICAL NUTRITION · CLINICAL SACHET
              </span>
              
              <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4rem)", marginBottom: "var(--space-1)", color: "var(--color-forest)" }}>
                IMMUNOMARS
              </h1>
              
              <p style={{ fontSize: "1.25rem", fontFamily: "var(--font-heading)", fontStyle: "italic", color: "var(--color-immunomars)", marginBottom: "var(--space-4)" }}>
                Rebuild. Protect. Recover.
              </p>
              
              <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--color-forest)", marginBottom: "var(--space-4)" }}>
                Composition: L-Glutamine + L-Lysine + L-Arginine + Multivitamins + Zinc + Selenium + Vit-C Sachet
              </p>

              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.65", marginBottom: "var(--space-6)" }}>
                IMMUNOMARS is an advanced clinical immunonutrition blend engineered to support clinical recovery, intestinal mucosal barrier integrity, and immune restitution.
              </p>

              <div className="composition-pill-list" style={{ marginBottom: "var(--space-6)" }}>
                <span className="composition-pill">✓ L-Glutamine</span>
                <span className="composition-pill">✓ L-Lysine</span>
                <span className="composition-pill">✓ L-Arginine</span>
                <span className="composition-pill">✓ Zinc + Selenium + Vit-C</span>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-immunomars)", color: "#ffffff" }}>
                  Request Prescribing Monograph →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 2. 3-STAGE RECOVERY TIMELINE TABS ═══ */}
      <section className="section" style={{ padding: "var(--space-12) 0" }}>
        <div className="container">
          
          <div className="indication-tabs-row" style={{ justifyContent: "center", marginBottom: "var(--space-8)" }}>
            <button 
              className={`indication-tab-btn ${activeStage === "rebuild" ? "active" : ""}`}
              onClick={() => setActiveStage("rebuild")}
              style={{ background: activeStage === "rebuild" ? "var(--color-immunomars)" : "" }}
            >
              Stage 1: Rebuild Mucosal Integrity
            </button>
            <button 
              className={`indication-tab-btn ${activeStage === "protect" ? "active" : ""}`}
              onClick={() => setActiveStage("protect")}
              style={{ background: activeStage === "protect" ? "var(--color-immunomars)" : "" }}
            >
              Stage 2: Protect with Antioxidants
            </button>
            <button 
              className={`indication-tab-btn ${activeStage === "recover" ? "active" : ""}`}
              onClick={() => setActiveStage("recover")}
              style={{ background: activeStage === "recover" ? "var(--color-immunomars)" : "" }}
            >
              Stage 3: Recover Protein Synthesis
            </button>
          </div>

          {activeStage === "rebuild" && (
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-10)", background: "#ffffff", borderRadius: "28px" }}>
              <span className="eyebrow-label" style={{ color: "var(--color-immunomars)" }}>STAGE 1 · REBUILD</span>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>L-Glutamine Fuel for Enterocytes</h3>
              <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                L-Glutamine acts as the primary respiratory fuel for intestinal epithelial cells (enterocytes) and immune lymphocytes, preserving villous atrophy and barrier seal.
              </p>
              <AnnotationLeader title="Mucosal Restitution" description="Promotes enterocyte proliferation and tight junction repair during catabolic stress." accentColor="var(--color-immunomars)" />
            </div>
          )}

          {activeStage === "protect" && (
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-10)", background: "#ffffff", borderRadius: "28px" }}>
              <span className="eyebrow-label" style={{ color: "var(--color-immunomars)" }}>STAGE 2 · PROTECT</span>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Antioxidant Shield (Zinc + Selenium + Vit-C)</h3>
              <AnnotationLeader title="Cellular Free Radical Scavenging" description="Zinc and Selenium co-factors activate superoxide dismutase and glutathione peroxidase." accentColor="var(--color-immunomars)" />
              <AnnotationLeader title="Immune Lymphocyte Support" description="Vitamin C potentiates neutrophil chemotaxis and phagocytic capacity." accentColor="var(--color-immunomars)" />
            </div>
          )}

          {activeStage === "recover" && (
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-10)", background: "#ffffff", borderRadius: "28px" }}>
              <span className="eyebrow-label" style={{ color: "var(--color-immunomars)" }}>STAGE 3 · RECOVER</span>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>L-Arginine &amp; L-Lysine Nitrogen Balance</h3>
              <AnnotationLeader title="Collagen & Tissue Synthesis" description="L-Lysine accelerates tissue collagen cross-linking during post-illness recovery." accentColor="var(--color-immunomars)" />
              <AnnotationLeader title="Vasodilation & Wound Repair" description="L-Arginine serves as nitric oxide precursor, enhancing localized microvascular tissue perfusion." accentColor="var(--color-immunomars)" />
            </div>
          )}

          {/* VERBATIM SAFETY CAUTION */}
          <div style={{ marginTop: "var(--space-10)", padding: "var(--space-6)", background: "rgba(224, 138, 46, 0.12)", borderRadius: "var(--radius-lg)", borderLeft: "4px solid var(--color-immunomars)" }}>
            <strong style={{ fontSize: "1rem", color: "var(--color-immunomars)", display: "block", marginBottom: "4px" }}>Safety Caution (Verbatim):</strong>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-dark)", margin: 0, fontWeight: 700 }}>
              Caution in renal impairment. Not for severe hepatic dysfunction unless advised.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
