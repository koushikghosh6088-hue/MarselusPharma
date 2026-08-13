"use client";

import Link from "next/link";
import SpineTab from "@/components/SpineTab";

export default function UV60KMasterPage() {
  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: 0, background: "var(--color-cream)" }}>
      
      {/* ═══ SECTION 1: HERO (ACTUAL UV 60K PRODUCT PHOTO + SUNLIGHT VISUAL) ═══ */}
      <section className="monograph-section spine-tab-container" style={{ background: "linear-gradient(135deg, #2E7FE0 0%, #EAB308 100%)", color: "#ffffff", padding: "var(--space-16) 0" }}>
        <SpineTab label="UV 60K — HIGH STRENGTH VITAMIN D3 MONOGRAPH" />

        <div className="container">
          <div className="grid-split">
            
            {/* Left Column: Copy & Positioning */}
            <div>
              <span className="eyebrow-badge" style={{ background: "rgba(255, 255, 255, 0.25)", color: "#ffffff", borderColor: "rgba(255, 255, 255, 0.4)", marginBottom: "var(--space-4)" }}>
                VITAMIN THERAPY · HIGH-STRENGTH SOFTGEL
              </span>
              
              <h1 style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", marginBottom: "var(--space-2)", color: "#ffffff" }}>
                UV 60K
              </h1>
              
              <p style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", marginBottom: "var(--space-4)" }}>
                Cholecalciferol 60,000 IU Softgel Capsules
              </p>

              <p style={{ fontSize: "var(--text-xl)", color: "rgba(255, 255, 255, 0.95)", lineHeight: "1.65", marginBottom: "var(--space-6)" }}>
                High-strength Vitamin D3 supplementation engineered for clinical deficiency correction &amp; calcium homeostasis.
              </p>

              <div className="composition-pill-list" style={{ marginBottom: "var(--space-8)" }}>
                <span className="composition-pill" style={{ background: "rgba(255,255,255,0.2)", color: "#ffffff", borderColor: "rgba(255,255,255,0.4)" }}>✓ Cholecalciferol 60,000 IU</span>
                <span className="composition-pill" style={{ background: "rgba(255,255,255,0.2)", color: "#ffffff", borderColor: "rgba(255,255,255,0.4)" }}>✓ High Bioavailability Softgel</span>
                <span className="composition-pill" style={{ background: "rgba(255,255,255,0.2)", color: "#ffffff", borderColor: "rgba(255,255,255,0.4)" }}>✓ Weekly Clinical Dosing</span>
              </div>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#ffffff", color: "#2E7FE0", fontWeight: 800 }}>
                  Prescribing Monograph →
                </Link>
                <span className="verify-tag" style={{ background: "rgba(255, 255, 255, 0.15)", color: "#ffffff", borderColor: "rgba(255, 255, 255, 0.3)" }}>
                  HERITAGE OF HEALING
                </span>
              </div>
            </div>

            {/* Right Column: Actual UV 60K Product Photo Render Stage */}
            <div style={{ textAlign: "center" }}>
              <div style={{ background: "rgba(255, 255, 255, 0.12)", backdropFilter: "blur(12px)", borderRadius: "32px", padding: "var(--space-8)", border: "1px solid rgba(255, 255, 255, 0.25)" }}>
                <img src="/assets/images/3d-pharma-bottle.png" alt="UV 60K Softgel Render" style={{ width: "85%", height: "auto", maxHeight: "240px", objectFit: "contain", margin: "0 auto", filter: "drop-shadow(0 20px 35px rgba(0,0,0,0.35))" }} />
                <div style={{ marginTop: "var(--space-4)", display: "flex", justifyContent: "center", gap: "8px" }}>
                  <span className="slide-badge" style={{ fontSize: "11px", background: "rgba(234, 179, 8, 0.4)", color: "#ffffff" }}>Actual Product Artwork</span>
                  <span className="slide-badge" style={{ fontSize: "11px", background: "rgba(255, 255, 255, 0.2)", color: "#ffffff" }}>60,000 IU Softgel</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: WHY VITAMIN D MATTERS ═══ */}
      <section className="monograph-section">
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#2E7FE0" }}>PHYSIOLOGICAL ROLE</span>
            <h2 style={{ fontSize: "2rem", marginBottom: "var(--space-4)" }}>Why Vitamin D Matters</h2>
            
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-6)" }}>
              Vitamin D is a pro-hormone that contributes to calcium &amp; phosphorus metabolism, bone mineralization, skeletal muscle strength, and normal immune system function.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
              <div style={{ background: "rgba(46, 127, 224, 0.05)", padding: "20px", borderRadius: "16px", borderLeft: "4px solid #2E7FE0" }}>
                <strong style={{ color: "#2E7FE0", display: "block", marginBottom: "4px" }}>Calcium Homeostasis</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Active intestinal calcium &amp; phosphate absorption.</p>
              </div>

              <div style={{ background: "rgba(46, 127, 224, 0.05)", padding: "20px", borderRadius: "16px", borderLeft: "4px solid #EAB308" }}>
                <strong style={{ color: "#2E7FE0", display: "block", marginBottom: "4px" }}>Normal Bone Structure</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Bone mineralization &amp; prevention of osteomalacia/osteoporosis.</p>
              </div>

              <div style={{ background: "rgba(46, 127, 224, 0.05)", padding: "20px", borderRadius: "16px", borderLeft: "4px solid #1D9E75" }}>
                <strong style={{ color: "#2E7FE0", display: "block", marginBottom: "4px" }}>Muscle Function</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Supports neuromuscular strength &amp; muscle cell protein synthesis.</p>
              </div>

              <div style={{ background: "rgba(46, 127, 224, 0.05)", padding: "20px", borderRadius: "16px", borderLeft: "4px solid #0F3D28" }}>
                <strong style={{ color: "#2E7FE0", display: "block", marginBottom: "4px" }}>Immune Regulation</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Modulates innate &amp; adaptive immune antimicrobial peptides.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: SCIENTIFIC STORY (VITAMIN D JOURNEY & 4-STEP PATHWAY) ═══ */}
      <section className="monograph-section" style={{ background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#2E7FE0" }}>VITAMIN D JOURNEY</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Sunlight to Physiological Activation</h2>
            
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-6)" }}>
              Sunlight / Supplementation → Vitamin D3 (Cholecalciferol) → Hepatic 25-hydroxylation to 25(OH)D → Renal 1-alpha-hydroxylation to active 1,25(OH)2D3 → Calcium &amp; bone homeostasis.
            </p>

            <div style={{ textAlign: "center", padding: "24px", background: "rgba(234, 179, 8, 0.1)", borderRadius: "20px", marginBottom: "var(--space-6)" }}>
              <span className="slide-badge" style={{ fontSize: "12px", background: "#EAB308", color: "#0F3D28", marginBottom: "8px" }}>HERO DOSAGE STRENGTH</span>
              <div style={{ fontSize: "3rem", fontFamily: "var(--font-heading)", fontWeight: 900, color: "#2E7FE0" }}>
                60,000 IU
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", margin: 0 }}>Cholecalciferol High-Potency Softgel Capsule</p>
            </div>

            {/* 4-Step Clinical Pathway */}
            <h4 style={{ fontSize: "1.2rem", color: "#2E7FE0", marginBottom: "var(--space-2)" }}>Physician-Directed Clinical Pathway</h4>
            <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
              <em>Physician-directed dosing only; do not imply self-medication with high-dose Vitamin D3.</em>
            </p>

            <div className="clinical-pathway-grid">
              <div className="pathway-step-card">
                <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#2E7FE0", display: "block" }}>1. ASSESS</span>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>Check baseline serum 25(OH)D level.</p>
              </div>

              <div className="pathway-step-card">
                <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#EAB308", display: "block" }}>2. CORRECT</span>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>Weekly 60,000 IU dosing as prescribed.</p>
              </div>

              <div className="pathway-step-card">
                <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#1D9E75", display: "block" }}>3. REASSESS</span>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>Re-check 25(OH)D levels after 8–12 weeks.</p>
              </div>

              <div className="pathway-step-card">
                <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#0F3D28", display: "block" }}>4. MAINTAIN</span>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>Transition to maintenance dosing schedule.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: COMPOSITION SPECIFICATION ═══ */}
      <section className="monograph-section">
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#2E7FE0" }}>COMPOSITION SPECIFICATION</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Ingredient &amp; Strength Breakdown</h2>
            
            <table className="ingredient-table">
              <thead>
                <tr>
                  <th>Active Component</th>
                  <th>Strength</th>
                  <th>Dosage Form</th>
                  <th>Indication Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Cholecalciferol IP (Vitamin D3)</strong></td>
                  <td>60,000 IU (International Units)</td>
                  <td>Softgel Capsule</td>
                  <td>Correction of severe deficiency &amp; maintenance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: MECHANISM / RATIONALE ═══ */}
      <section className="monograph-section" style={{ background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#2E7FE0" }}>SCIENTIFIC MECHANISM</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>VDR Receptor Gene Transcription</h2>
            
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7" }}>
              Active 1,25(OH)2D3 binds to nuclear Vitamin D Receptors (VDR), forming a heterodimer with RXR to upregulate intestinal calcium-binding protein (Calbindin-9k) and osteoblast mineralization proteins.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 & 7: EVIDENCE & INDIAN EXPERT CONSENSUS ═══ */}
      <section className="monograph-section">
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#2E7FE0" }}>EVIDENCE &amp; EXPERT CONSENSUS</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Indian Clinical Consensus Guidelines</h2>
            
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-4)" }}>
              Current Indian expert consensus guidelines recommend 60,000 IU weekly Cholecalciferol supplementation for 8 weeks for the treatment of Vitamin D deficiency (&lt;20 ng/mL), followed by maintenance therapy.
            </p>

            <div style={{ padding: "16px 20px", background: "rgba(46, 127, 224, 0.1)", borderRadius: "12px", borderLeft: "4px solid #2E7FE0" }}>
              <strong style={{ fontSize: "0.9rem", color: "#2E7FE0", display: "block" }}>Consensus Reference:</strong>
              <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                Indian Expert Consensus Statement on Management of Vitamin D Deficiency. <em>J Assoc Physicians India.</em>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8: USE & SAFETY ═══ */}
      <section className="monograph-section" style={{ background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="monograph-card" style={{ borderLeft: "5px solid #EAB308" }}>
            <span className="eyebrow-label" style={{ color: "#2E7FE0" }}>PRESCRIBING PRECAUTIONS</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Use, Dosage &amp; Safety Profile</h2>
            
            <ul style={{ paddingLeft: "20px", color: "var(--color-text-muted)", lineHeight: "1.7", fontSize: "0.95rem" }}>
              <li style={{ marginBottom: "8px" }}><strong>Dose:</strong> As directed by the physician or healthcare professional.</li>
              <li style={{ marginBottom: "8px" }}><strong>Precautions:</strong> Monitor serum calcium and phosphorus levels in high-dose / long-term therapy.</li>
              <li style={{ marginBottom: "8px" }}><strong>Contraindications:</strong> Hypercalcaemia, hypervitaminosis D, or severe renal osteodystrophy with hyperphosphatemia.</li>
              <li style={{ marginBottom: "8px" }}><strong>Renal Considerations:</strong> Caution in patients with nephrolithiasis or impaired renal function.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9: CLOSING & STATUTORY DISCLAIMER ═══ */}
      <section className="monograph-section" style={{ background: "#2E7FE0", color: "#ffffff", padding: "var(--space-12) 0", textAlign: "center" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <img src="/assets/images/3d-pharma-bottle.png" alt="UV 60K Softgel Render" style={{ width: "120px", height: "auto", margin: "0 auto var(--space-4)", filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.4))" }} />
          
          <h3 style={{ fontSize: "1.75rem", color: "#ffffff", marginBottom: "4px" }}>
            MARSELUS PHARMACEUTICALS PVT. LTD.
          </h3>
          <span style={{ fontSize: "0.9rem", color: "#EAB308", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            HERITAGE OF HEALING
          </span>

          <p style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.8)", maxWidth: "70ch", margin: "var(--space-6) auto 0 auto", lineHeight: "1.6" }}>
            The information presented is intended for healthcare-professional and general educational purposes and should not be construed as a substitute for professional medical advice, diagnosis, or treatment. Use products according to applicable prescribing and product-label requirements.
          </p>
        </div>
      </section>

    </main>
  );
}
