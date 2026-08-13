"use client";

import Link from "next/link";
import SpineTab from "@/components/SpineTab";

export default function SaranyaMasterPage() {
  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: 0, background: "var(--color-cream)" }}>
      
      {/* ═══ SECTION 1: HERO (PRODUCT BOX + PINK STRIP PACK) ═══ */}
      <section className="monograph-section spine-tab-container" style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #D6438C 100%)", color: "#ffffff", padding: "var(--space-16) 0" }}>
        <SpineTab label="SARANYA® — NUTRITIONAL MONOGRAPH" />

        <div className="container">
          <div className="grid-split">
            
            {/* Left Column: Copy & Positioning */}
            <div>
              <span className="eyebrow-badge" style={{ background: "rgba(244, 114, 182, 0.25)", color: "#ffffff", borderColor: "rgba(244, 114, 182, 0.4)", marginBottom: "var(--space-4)" }}>
                WOMEN&apos;S HEALTH · 40:1 INOSITOL RATIO TABLETS
              </span>
              
              <h1 style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", marginBottom: "var(--space-2)", color: "#ffffff" }}>
                SARANYA<span style={{ fontSize: "1.5rem", verticalAlign: "super", color: "#F472B6" }}>®</span>
              </h1>
              
              <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#F472B6", marginBottom: "var(--space-4)" }}>
                Myo-Inositol + D-Chiro Inositol + Chromium Picolinate + Vitamin D2 Tablets
              </p>

              <p style={{ fontSize: "var(--text-xl)", color: "rgba(255, 255, 255, 0.95)", lineHeight: "1.65", marginBottom: "var(--space-6)" }}>
                A balanced nutritional approach to women&apos;s metabolic &amp; reproductive wellness in PCOS management.
              </p>

              <div className="composition-pill-list" style={{ marginBottom: "var(--space-8)" }}>
                <span className="composition-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}>✓ Myo-Inositol 1100 mg</span>
                <span className="composition-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}>✓ D-Chiro Inositol 27.6 mg (~40:1)</span>
                <span className="composition-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}>✓ Pink Strip Pack Tablets</span>
              </div>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#F472B6", color: "#1E3A8A", fontWeight: 800 }}>
                  Product Monograph →
                </Link>
                <span className="verify-tag" style={{ background: "rgba(255, 255, 255, 0.1)", color: "#ffffff", borderColor: "rgba(255, 255, 255, 0.3)" }}>
                  HERITAGE OF HEALING
                </span>
              </div>
            </div>

            {/* Right Column: Actual Box & Pink Strip Pack Render Stage */}
            <div style={{ textAlign: "center" }}>
              <div style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(12px)", borderRadius: "32px", padding: "var(--space-8)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                <img src="/assets/images/womens-therapy.png" alt="SARANYA Box and Pink Strip Pack" style={{ width: "85%", height: "auto", maxHeight: "240px", objectFit: "contain", margin: "0 auto", filter: "drop-shadow(0 20px 35px rgba(0,0,0,0.35))" }} />
                <div style={{ marginTop: "var(--space-4)", display: "flex", justifyContent: "center", gap: "8px" }}>
                  <span className="slide-badge" style={{ fontSize: "11px", background: "rgba(244, 114, 182, 0.3)", color: "#ffffff" }}>Actual Pink Strip Pack</span>
                  <span className="slide-badge" style={{ fontSize: "11px", background: "rgba(255, 255, 255, 0.15)", color: "#ffffff" }}>40:1 Ratio Tablets</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: DISEASE / HEALTH NEED (UNDERSTANDING PCOS) ═══ */}
      <section className="monograph-section">
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#D6438C" }}>WOMEN&apos;S METABOLIC HEALTH</span>
            <h2 style={{ fontSize: "2rem", marginBottom: "var(--space-4)" }}>Understanding PCOS</h2>
            
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-6)" }}>
              Polycystic Ovary Syndrome (PCOS) is a common complex endocrine and metabolic condition characterized by reproductive, hormonal, and metabolic features including peripheral insulin resistance and ovarian dysfunction.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
              <div style={{ background: "rgba(214, 67, 140, 0.05)", padding: "20px", borderRadius: "16px", borderLeft: "4px solid #D6438C" }}>
                <strong style={{ color: "#1E3A8A", display: "block", marginBottom: "4px" }}>Hormonal Health</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Elevated LH/FSH ratio and hyperandrogenism.</p>
              </div>

              <div style={{ background: "rgba(214, 67, 140, 0.05)", padding: "20px", borderRadius: "16px", borderLeft: "4px solid #1E3A8A" }}>
                <strong style={{ color: "#1E3A8A", display: "block", marginBottom: "4px" }}>Metabolic Health</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Compromised cellular insulin receptor signaling.</p>
              </div>

              <div style={{ background: "rgba(214, 67, 140, 0.05)", padding: "20px", borderRadius: "16px", borderLeft: "4px solid #F472B6" }}>
                <strong style={{ color: "#1E3A8A", display: "block", marginBottom: "4px" }}>Reproductive Health</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Anovulatory menstrual irregularity &amp; follicular delay.</p>
              </div>

              <div style={{ background: "rgba(214, 67, 140, 0.05)", padding: "20px", borderRadius: "16px", borderLeft: "4px solid #0F3D28" }}>
                <strong style={{ color: "#1E3A8A", display: "block", marginBottom: "4px" }}>Nutritional Strategy</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Inositol and micronutrient nutritional support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: SCIENTIFIC STORY (THE 40:1 INOSITOL CONCEPT) ═══ */}
      <section className="monograph-section" style={{ background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#D6438C" }}>THE 40:1 INOSITOL CONCEPT</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Physiological Inositol Alignment</h2>
            
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-6)" }}>
              SARANYA® provides <strong>Myo-Inositol 1100 mg</strong> + <strong>D-Chiro Inositol 27.6 mg</strong> (approximating the 40:1 ratio observed in human plasma).
            </p>

            <div style={{ padding: "20px", background: "rgba(30, 58, 138, 0.05)", borderRadius: "16px", borderLeft: "4px solid #1E3A8A", marginBottom: "var(--space-6)" }}>
              <strong style={{ fontSize: "0.95rem", color: "#1E3A8A", display: "block", marginBottom: "4px" }}>International Guideline Clarification:</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>
                State clearly that current international PCOS guidance does not establish one specific inositol formulation, dose, or ratio as universally superior. SARANYA® provides a balanced nutritional option designed for individual patient suitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: FOUR COMPONENTS MATRIX ═══ */}
      <section className="monograph-section">
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#D6438C" }}>FOUR-NUTRIENT MATRIX</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Ingredient &amp; Strength Breakdown</h2>
            
            <div className="nutrient-matrix-grid">
              <div className="nutrient-card">
                <span className="slide-badge" style={{ background: "rgba(214, 67, 140, 0.15)", color: "#D6438C", marginBottom: "8px" }}>1100 mg</span>
                <h4 style={{ color: "#1E3A8A", marginBottom: "4px" }}>Myo-Inositol</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Cellular second messenger involved in FSH signal transduction.</p>
              </div>

              <div className="nutrient-card">
                <span className="slide-badge" style={{ background: "rgba(214, 67, 140, 0.15)", color: "#D6438C", marginBottom: "8px" }}>27.6 mg</span>
                <h4 style={{ color: "#1E3A8A", marginBottom: "4px" }}>D-Chiro Inositol</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Participates in glycogen synthesis &amp; insulin action.</p>
              </div>

              <div className="nutrient-card">
                <span className="slide-badge" style={{ background: "rgba(30, 58, 138, 0.15)", color: "#1E3A8A", marginBottom: "8px" }}>400 mcg</span>
                <h4 style={{ color: "#1E3A8A", marginBottom: "4px" }}>Chromium Picolinate</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Trace mineral involved in normal macronutrient metabolism.</p>
              </div>

              <div className="nutrient-card">
                <span className="slide-badge" style={{ background: "rgba(30, 58, 138, 0.15)", color: "#1E3A8A", marginBottom: "8px" }}>400 IU</span>
                <h4 style={{ color: "#1E3A8A", marginBottom: "4px" }}>Vitamin D2</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Provides nutritional support for daily Vitamin D requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: MECHANISM / RATIONALE ═══ */}
      <section className="monograph-section" style={{ background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#D6438C" }}>SCIENTIFIC RATIONALE</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Cellular Signaling &amp; Metabolism</h2>
            
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7" }}>
              Myo- and D-Chiro Inositol participate in intracellular inositol-phosphoglycan (IPG) second messenger signaling pathways. Chromium contributes to normal macronutrient metabolism, and Vitamin D supports endocrine homeostasis.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6: NUTRITIONAL ROLE ═══ */}
      <section className="monograph-section">
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#D6438C" }}>NUTRITIONAL ROLE POSITIONING</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Support Within Comprehensive PCOS Care</h2>
            
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.7" }}>
              Positioned strictly as <strong>nutritional support</strong> within individualized PCOS management — not as a cure, infertility treatment, or replacement for prescribed medical or lifestyle management.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7: EVIDENCE & GUIDELINES ═══ */}
      <section className="monograph-section" style={{ background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#D6438C" }}>CLINICAL GUIDELINES</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>International PCOS Consensus Context</h2>
            
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-4)" }}>
              International evidence-based guidelines for PCOS acknowledge inositols as nutritional options for metabolic wellness under professional guidance.
            </p>

            <div style={{ padding: "16px 20px", background: "rgba(214, 67, 140, 0.1)", borderRadius: "12px", borderLeft: "4px solid #D6438C" }}>
              <strong style={{ fontSize: "0.9rem", color: "#1E3A8A", display: "block" }}>Reference Citation:</strong>
              <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                Teede HJ, et al. Recommendations from the international evidence-based guideline for the assessment and management of polycystic ovary syndrome. <em>Hum Reprod.</em> 2023.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8: USE & SAFETY ═══ */}
      <section className="monograph-section">
        <div className="container">
          <div className="monograph-card" style={{ borderLeft: "5px solid #1E3A8A" }}>
            <span className="eyebrow-label" style={{ color: "#1E3A8A" }}>USE &amp; SAFETY GUIDANCE</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Usage Instructions &amp; Precautions</h2>
            
            <ul style={{ paddingLeft: "20px", color: "var(--color-text-muted)", lineHeight: "1.7", fontSize: "0.95rem" }}>
              <li style={{ marginBottom: "8px" }}><strong>Dose:</strong> Take as directed by the healthcare professional.</li>
              <li style={{ marginBottom: "8px" }}><strong>Packaging Format:</strong> Supplied in tablets inside pink strip packs (never as a sachet).</li>
              <li style={{ marginBottom: "8px" }}><strong>Pregnancy &amp; Fertility:</strong> Consult a healthcare provider prior to use during pregnancy or when planning pregnancy.</li>
              <li style={{ marginBottom: "8px" }}><strong>General Precaution:</strong> Dietary food supplement / nutraceutical — not for medicinal use.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9: CLOSING & STATUTORY DISCLAIMER ═══ */}
      <section className="monograph-section" style={{ background: "#1E3A8A", color: "#ffffff", padding: "var(--space-12) 0", textAlign: "center" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <img src="/assets/images/womens-therapy.png" alt="SARANYA Box & Strip" style={{ width: "120px", height: "auto", margin: "0 auto var(--space-4)", filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.4))" }} />
          
          <h3 style={{ fontSize: "1.75rem", color: "#ffffff", marginBottom: "4px" }}>
            MARSELUS PHARMACEUTICALS PVT. LTD.
          </h3>
          <span style={{ fontSize: "0.9rem", color: "#F472B6", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            HERITAGE OF HEALING
          </span>

          <p style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.75)", maxWidth: "70ch", margin: "var(--space-6) auto 0 auto", lineHeight: "1.6" }}>
            The information presented is intended for healthcare-professional and general educational purposes. Products should be used according to applicable prescribing, regulatory, and label requirements.
          </p>
        </div>
      </section>

    </main>
  );
}
