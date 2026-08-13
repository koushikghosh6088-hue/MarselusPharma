"use client";

import Link from "next/link";
import SpineTab from "@/components/SpineTab";

export default function ImmunomarsMasterPage() {
  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: 0, background: "var(--color-cream)" }}>
      
      {/* ═══ SECTION 1: HERO (ACTUAL SACHET FORMAT) ═══ */}
      <section className="monograph-section spine-tab-container" style={{ background: "linear-gradient(135deg, #F97316 0%, #1E3A8A 100%)", color: "#ffffff", padding: "var(--space-16) 0" }}>
        <SpineTab label="IMMUNOMARS™ — CLINICAL SACHET MONOGRAPH" />

        <div className="container">
          <div className="grid-split">
            
            {/* Left Column: Copy & Positioning */}
            <div>
              <span className="eyebrow-badge" style={{ background: "rgba(255, 255, 255, 0.2)", color: "#ffffff", borderColor: "rgba(255, 255, 255, 0.4)", marginBottom: "var(--space-4)" }}>
                CLINICAL NUTRITION · 15G SACHET DRINK MIX
              </span>
              
              <h1 style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", marginBottom: "var(--space-2)", color: "#ffffff" }}>
                IMMUNOMARS<span style={{ fontSize: "1.5rem", verticalAlign: "super", color: "#F97316" }}>™</span>
              </h1>
              
              <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#FFE4E6", marginBottom: "var(--space-4)" }}>
                L-Glutamine + L-Arginine + L-Lysine + Vitamins + Zinc + Selenium Sachets
              </p>

              <p style={{ fontSize: "var(--text-xl)", color: "rgba(255, 255, 255, 0.95)", lineHeight: "1.65", marginBottom: "var(--space-6)" }}>
                Advanced immunonutrition &amp; targeted amino acid support. Orange flavour, sugar-free.
              </p>

              <div className="composition-pill-list" style={{ marginBottom: "var(--space-8)" }}>
                <span className="composition-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}>✓ L-Glutamine 10 g (Hero Nutrient)</span>
                <span className="composition-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}>✓ L-Arginine 1.5 g + L-Lysine 0.5 g</span>
                <span className="composition-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}>✓ Real Sachet Format</span>
              </div>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#ffffff", color: "#F97316", fontWeight: 800 }}>
                  Nutritional Monograph →
                </Link>
                <span className="verify-tag" style={{ background: "rgba(255, 255, 255, 0.1)", color: "#ffffff", borderColor: "rgba(255, 255, 255, 0.3)" }}>
                  HERITAGE OF HEALING
                </span>
              </div>
            </div>

            {/* Right Column: Actual IMMUNOMARS Box & Real Sachet Format Render Stage */}
            <div style={{ textAlign: "center" }}>
              <div style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(12px)", borderRadius: "32px", padding: "var(--space-8)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                <img src="/assets/images/nutrition-therapy.png" alt="IMMUNOMARS Box & Real Sachet Format" style={{ width: "85%", height: "auto", maxHeight: "240px", objectFit: "contain", margin: "0 auto", filter: "drop-shadow(0 20px 35px rgba(0,0,0,0.35))" }} />
                <div style={{ marginTop: "var(--space-4)", display: "flex", justifyContent: "center", gap: "8px" }}>
                  <span className="slide-badge" style={{ fontSize: "11px", background: "rgba(249, 115, 22, 0.4)", color: "#ffffff" }}>Real Sachet Format</span>
                  <span className="slide-badge" style={{ fontSize: "11px", background: "rgba(255, 255, 255, 0.15)", color: "#ffffff" }}>15g Drink Mix</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: NUTRITIONAL CONCEPT (GUT + AMINO ACIDS) ═══ */}
      <section className="monograph-section">
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#F97316" }}>IMMUNONUTRITION CONCEPT</span>
            <h2 style={{ fontSize: "2rem", marginBottom: "var(--space-4)" }}>Gut Barrier &amp; Metabolic Support</h2>
            
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-6)" }}>
              IMMUNOMARS™ combines high-dose <strong>L-Glutamine (10 g)</strong> as the hero mucosal substrate, supported by L-Arginine, L-Lysine, and targeted antioxidant micronutrients for clinical metabolic conditions.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
              <div style={{ background: "rgba(249, 115, 22, 0.05)", padding: "20px", borderRadius: "16px", borderLeft: "4px solid #F97316" }}>
                <strong style={{ color: "#1E3A8A", display: "block", marginBottom: "4px" }}>Enterocyte Substrate</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>L-Glutamine 10 g fuels rapid intestinal mucosal cell turnover.</p>
              </div>

              <div style={{ background: "rgba(249, 115, 22, 0.05)", padding: "20px", borderRadius: "16px", borderLeft: "4px solid #1E3A8A" }}>
                <strong style={{ color: "#1E3A8A", display: "block", marginBottom: "4px" }}>Nitrogen &amp; Nitric Oxide</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>L-Arginine 1.5 g supports protein synthesis pathways.</p>
              </div>

              <div style={{ background: "rgba(249, 115, 22, 0.05)", padding: "20px", borderRadius: "16px", borderLeft: "4px solid #E08A2E" }}>
                <strong style={{ color: "#1E3A8A", display: "block", marginBottom: "4px" }}>Essential Protein Synthesis</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>L-Lysine HCl 0.5 g provides essential amino acid balance.</p>
              </div>

              <div style={{ background: "rgba(249, 115, 22, 0.05)", padding: "20px", borderRadius: "16px", borderLeft: "4px solid #0F3D28" }}>
                <strong style={{ color: "#1E3A8A", display: "block", marginBottom: "4px" }}>Antioxidant Micronutrients</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Zinc, Selenium, Vit C, Vit E, B6, B12 cofactor matrix.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: FORMULATION SPECIFICATION (PER 15G SACHET) ═══ */}
      <section className="monograph-section" style={{ background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#F97316" }}>COMPOSITION SPECIFICATION</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Per 15 g Sachet Content</h2>
            
            <table className="ingredient-table">
              <thead>
                <tr>
                  <th>Component Category</th>
                  <th>Active Nutrient</th>
                  <th>Quantity Per Sachet</th>
                  <th>Nutritional Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Hero Amino Acid</strong></td>
                  <td>L-Glutamine</td>
                  <td>10.0 g (10,000 mg)</td>
                  <td>Enterocyte respiratory substrate</td>
                </tr>
                <tr>
                  <td><strong>Supporting Amino Acid</strong></td>
                  <td>L-Arginine</td>
                  <td>1.5 g (1500 mg)</td>
                  <td>Nitric oxide &amp; collagen precursor</td>
                </tr>
                <tr>
                  <td><strong>Essential Amino Acid</strong></td>
                  <td>L-Lysine HCl</td>
                  <td>0.5 g (500 mg)</td>
                  <td>Essential amino acid substrate</td>
                </tr>
                <tr>
                  <td><strong>Vitamins</strong></td>
                  <td>Vit C, Vit E, B6, B12</td>
                  <td>80mg, 6.7mg, 1.5mg, 2.2mcg</td>
                  <td>Antioxidant &amp; metabolic cofactors</td>
                </tr>
                <tr>
                  <td><strong>Trace Minerals</strong></td>
                  <td>Zinc &amp; Selenium</td>
                  <td>12 mg &amp; 40 mcg</td>
                  <td>Immune function &amp; enzyme cofactors</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 & 5: SCIENTIFIC STORY & MECHANISM ═══ */}
      <section className="monograph-section">
        <div className="container">
          <div className="amino-matrix-grid">
            <div className="amino-card">
              <strong style={{ color: "#F97316", display: "block", marginBottom: "4px" }}>L-Glutamine (10 g)</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Amino acid substrate vital for enterocyte energy &amp; intestinal mucosal barrier seal.</p>
            </div>

            <div className="amino-card">
              <strong style={{ color: "#F97316", display: "block", marginBottom: "4px" }}>L-Arginine (1.5 g)</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Nitric oxide pathway precursor facilitating microvascular perfusion &amp; tissue repair.</p>
            </div>

            <div className="amino-card">
              <strong style={{ color: "#F97316", display: "block", marginBottom: "4px" }}>L-Lysine HCl (0.5 g)</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Essential amino acid necessary for structural protein synthesis.</p>
            </div>

            <div className="amino-card">
              <strong style={{ color: "#1E3A8A", display: "block", marginBottom: "4px" }}>Antioxidant Co-factors</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Zinc (12mg) + Selenium (40mcg) + Vitamin C (80mg) support cellular antioxidant defenses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6: CLINICAL NUTRITION CONTEXT ═══ */}
      <section className="monograph-section" style={{ background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#F97316" }}>CLINICAL NUTRITION CONTEXT</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Selected Clinical Settings</h2>
            
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.7" }}>
              Immunonutrition is relevant in selected clinical settings, especially around major surgery and catabolic nutritional risk. <em>Note: Evidence varies by formula and patient population; avoid unsupported claims such as &apos;cures infection&apos; or guaranteed faster recovery.</em>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 & 8: USE & PRECAUTIONS / SAFETY ═══ */}
      <section className="monograph-section">
        <div className="container">
          <div className="monograph-card" style={{ borderLeft: "5px solid #F97316" }}>
            <span className="eyebrow-label" style={{ color: "#F97316" }}>USE &amp; SAFETY GUIDANCE</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Preparation &amp; Precautions</h2>
            
            <ul style={{ paddingLeft: "20px", color: "var(--color-text-muted)", lineHeight: "1.7", fontSize: "0.95rem" }}>
              <li style={{ marginBottom: "8px" }}><strong>Preparation:</strong> Mix 1 sachet (15 g) in a glass of cool drinking water as directed by a healthcare professional.</li>
              <li style={{ marginBottom: "8px" }}><strong>Flavour &amp; Formulation:</strong> Refreshing orange flavour, 100% sugar-free.</li>
              <li style={{ marginBottom: "8px" }}><strong>Renal &amp; Hepatic Precautions:</strong> Use under strict medical supervision in patients with significant renal impairment, severe hepatic dysfunction, or amino acid metabolic disorders.</li>
              <li style={{ marginBottom: "8px" }}><strong>Statutory Caution:</strong> Food supplement / nutraceutical — not for medicinal use. Not to exceed recommended daily usage.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9: CLOSING & STATUTORY DISCLAIMER ═══ */}
      <section className="monograph-section" style={{ background: "#1E3A8A", color: "#ffffff", padding: "var(--space-12) 0", textAlign: "center" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <img src="/assets/images/nutrition-therapy.png" alt="IMMUNOMARS Box & Sachet" style={{ width: "120px", height: "auto", margin: "0 auto var(--space-4)", filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.4))" }} />
          
          <h3 style={{ fontSize: "1.75rem", color: "#ffffff", marginBottom: "4px" }}>
            MARSELUS PHARMACEUTICALS PVT. LTD.
          </h3>
          <span style={{ fontSize: "0.9rem", color: "#F97316", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            HERITAGE OF HEALING
          </span>

          <p style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.75)", maxWidth: "70ch", margin: "var(--space-6) auto 0 auto", lineHeight: "1.6" }}>
            The information presented is intended for healthcare-professional and general educational purposes. Products should be used according to applicable prescribing, regulatory, and product-label requirements.
          </p>
        </div>
      </section>

    </main>
  );
}
