"use client";

import { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";

export default function SaranyaMasterLuxuryPage() {
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>("discover");

  const images = [
    "/assets/images/womens-therapy.png",
    "/assets/images/research-labs.png",
    "/assets/images/3d-dna.png",
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)", background: "#FAF8F5" }}>
      
      {/* ═══ 1. FABLE & MANE STYLE LUXURY PRODUCT HERO ═══ */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-8) 0 var(--space-16) 0" }}>
        <SpineTab label="SARANYA® — NUTRITIONAL MONOGRAPH" />

        <div className="container">
          <div className="fable-product-grid">
            
            {/* Left Vertical Thumbnails Strip */}
            <div className="fable-thumb-column">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  className={`fable-thumb-btn ${selectedThumb === idx ? "active" : ""}`}
                  onClick={() => setSelectedThumb(idx)}
                >
                  <img src={img} alt={`SARANYA View ${idx + 1}`} />
                </button>
              ))}
            </div>

            {/* Middle Arched Architectural Product Stage (Royal Blue + Soft Pink) */}
            <div className="fable-arch-stage" style={{ background: "linear-gradient(180deg, rgba(244, 114, 182, 0.25) 0%, rgba(30, 58, 138, 0.12) 100%)" }}>
              <img src={images[selectedThumb]} alt="SARANYA Box and Pink Strip Pack" />
            </div>

            {/* Right Product Specs & Accordion List */}
            <div className="fable-product-info">
              
              <div className="fable-rating-row">
                <div className="fable-star-rating">★★★★★</div>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1E3A8A" }}>(PCOS Nutritional Wellness)</span>
              </div>

              <span className="eyebrow-badge" style={{ color: "#D6438C", borderColor: "rgba(214, 67, 140, 0.3)", marginBottom: "8px", width: "fit-content" }}>
                WOMEN&apos;S HEALTH · 40:1 INOSITOL RATIO TABLETS
              </span>

              <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontFamily: "var(--font-heading)", color: "#1E3A8A", marginBottom: "6px", lineHeight: "1.1" }}>
                SARANYA<span style={{ fontSize: "1.2rem", verticalAlign: "super", color: "#D6438C" }}>®</span>
              </h1>

              <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#D6438C", marginBottom: "var(--space-2)" }}>
                Myo-Inositol + D-Chiro Inositol + Chromium Picolinate + Vitamin D2 Tablets
              </p>

              <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1E3A8A", marginBottom: "var(--space-4)" }}>
                A Balanced Nutritional Approach to Women&apos;s Metabolic &amp; Reproductive Wellness
              </p>

              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.65", marginBottom: "var(--space-6)" }}>
                Formulated as a nutritional support option within individualized PCOS management. Supplied in tablets inside pink strip packs (never as a sachet or Alu-Alu blister).
              </p>

              <div style={{ display: "flex", gap: "12px", marginBottom: "var(--space-6)" }}>
                <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#1E3A8A", color: "#ffffff", padding: "14px 32px", fontSize: "0.95rem", fontWeight: 800 }}>
                  REQUEST PRESCRIBING MONOGRAPH →
                </Link>
              </div>

              {/* Accordions */}
              <div className="fable-accordion-wrap">
                
                <div className="fable-accordion-item">
                  <button className="fable-accordion-header" onClick={() => toggleAccordion("discover")}>
                    <span>DISCOVER MORE</span>
                    <span>{openAccordion === "discover" ? "−" : "+"}</span>
                  </button>
                  {openAccordion === "discover" && (
                    <div className="fable-accordion-content">
                      SARANYA® combines Myo-Inositol (1100 mg) and D-Chiro Inositol (27.6 mg) in an approximate 40:1 ratio, complemented by Chromium Picolinate (400 mcg) and Vitamin D2 (400 IU).
                    </div>
                  )}
                </div>

                <div className="fable-accordion-item">
                  <button className="fable-accordion-header" onClick={() => toggleAccordion("ratio")}>
                    <span>THE 40:1 INOSITOL CONCEPT</span>
                    <span>{openAccordion === "ratio" ? "−" : "+"}</span>
                  </button>
                  {openAccordion === "ratio" && (
                    <div className="fable-accordion-content">
                      Myo-Inositol 1100 mg + D-Chiro Inositol 27.6 mg ≈ 40:1. <em>International Guidance Clarification: State clearly that current international PCOS guidance does not establish one specific inositol formulation, dose, or ratio as universally superior.</em>
                    </div>
                  )}
                </div>

                <div className="fable-accordion-item">
                  <button className="fable-accordion-header" onClick={() => toggleAccordion("role")}>
                    <span>NUTRITIONAL ROLE POSITIONING</span>
                    <span>{openAccordion === "role" ? "−" : "+"}</span>
                  </button>
                  {openAccordion === "role" && (
                    <div className="fable-accordion-content">
                      Positioned as nutritional support within individualized PCOS care — not as a cure, infertility treatment, or replacement for prescribed medical/lifestyle management.
                    </div>
                  )}
                </div>

                <div className="fable-accordion-item">
                  <button className="fable-accordion-header" onClick={() => toggleAccordion("pack")}>
                    <span>PACKAGING FORMAT</span>
                    <span>{openAccordion === "pack" ? "−" : "+"}</span>
                  </button>
                  {openAccordion === "pack" && (
                    <div className="fable-accordion-content">
                      Supplied in tablets inside pink strip packs. <em>Designer note: Preserve actual strip-pack appearance; do not substitute an Alu-Alu blister or sachet.</em>
                    </div>
                  )}
                </div>

              </div>

              {/* Our Promises Circular Badges */}
              <div className="fable-promises-row">
                <div className="fable-promise-badge">
                  <div className="fable-promise-icon">🌸</div>
                  <span className="fable-promise-label">PINK STRIP PACK</span>
                </div>
                <div className="fable-promise-badge">
                  <div className="fable-promise-icon">⚖️</div>
                  <span className="fable-promise-label">40:1 RATIO</span>
                </div>
                <div className="fable-promise-badge">
                  <div className="fable-promise-icon">✨</div>
                  <span className="fable-promise-label">CHROMIUM 400MCG</span>
                </div>
                <div className="fable-promise-badge">
                  <div className="fable-promise-icon">☀️</div>
                  <span className="fable-promise-label">VIT D2 400IU</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═══ 2. UNDERSTANDING PCOS (FEMALE REPRODUCTIVE & METABOLIC OVERVIEW) ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto var(--space-12)" }}>
            <span className="eyebrow-label" style={{ color: "#D6438C" }}>WOMEN&apos;S HEALTH OVERVIEW</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontFamily: "var(--font-heading)", color: "#1E3A8A" }}>
              Understanding PCOS
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7" }}>
              Polycystic Ovary Syndrome (PCOS) is a common complex endocrine and metabolic condition featuring reproductive, hormonal, and metabolic dimensions.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            <div style={{ background: "rgba(214, 67, 140, 0.05)", padding: "24px", borderRadius: "20px", borderLeft: "4px solid #D6438C" }}>
              <strong style={{ color: "#1E3A8A", fontSize: "1.1rem", display: "block", marginBottom: "6px" }}>Hormonal Health</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Elevated LH/FSH ratio &amp; peripheral hyperandrogenism markers.</p>
            </div>

            <div style={{ background: "rgba(214, 67, 140, 0.05)", padding: "24px", borderRadius: "20px", borderLeft: "4px solid #1E3A8A" }}>
              <strong style={{ color: "#1E3A8A", fontSize: "1.1rem", display: "block", marginBottom: "6px" }}>Metabolic Health</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Cellular insulin resistance &amp; glucose transporter sensitivity.</p>
            </div>

            <div style={{ background: "rgba(214, 67, 140, 0.05)", padding: "24px", borderRadius: "20px", borderLeft: "4px solid #F472B6" }}>
              <strong style={{ color: "#1E3A8A", fontSize: "1.1rem", display: "block", marginBottom: "6px" }}>Reproductive Health</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Anovulatory menstrual cycle irregularity &amp; follicular growth delay.</p>
            </div>

            <div style={{ background: "rgba(214, 67, 140, 0.05)", padding: "24px", borderRadius: "20px", borderLeft: "4px solid #0F3D28" }}>
              <strong style={{ color: "#1E3A8A", fontSize: "1.1rem", display: "block", marginBottom: "6px" }}>Lifestyle Integration</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Complemented by nutritional support, diet, &amp; physical exercise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. THE 40:1 INOSITOL CONCEPT ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#D6438C" }}>THE 40:1 INOSITOL CONCEPT</span>
            <h2 style={{ fontSize: "1.75rem", color: "#1E3A8A", marginBottom: "var(--space-4)" }}>Physiological Inositol Ratio</h2>
            
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-6)" }}>
              SARANYA® provides <strong>Myo-Inositol 1100 mg</strong> + <strong>D-Chiro Inositol 27.6 mg</strong> (approximating the ~40:1 ratio observed in human plasma).
            </p>

            <div style={{ padding: "20px", background: "rgba(30, 58, 138, 0.06)", borderRadius: "16px", borderLeft: "4px solid #1E3A8A" }}>
              <strong style={{ fontSize: "0.95rem", color: "#1E3A8A", display: "block", marginBottom: "4px" }}>International Guidance Clarification:</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>
                State clearly that current international PCOS guidance does not establish one specific inositol formulation, dose, or ratio as universally superior. SARANYA® provides a balanced nutritional choice designed for patient suitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. FOUR COMPONENTS (FOUR-NUTRIENT ICON MATRIX) ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto var(--space-10)" }}>
            <span className="eyebrow-label" style={{ color: "#D6438C" }}>FOUR-NUTRIENT MATRIX</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontFamily: "var(--font-heading)", color: "#1E3A8A" }}>
              Four Essential Components
            </h2>
          </div>

          <div className="nutrient-matrix-grid">
            <div className="nutrient-card">
              <span className="slide-badge" style={{ background: "rgba(214, 67, 140, 0.15)", color: "#D6438C", marginBottom: "8px" }}>1100 mg</span>
              <h4 style={{ color: "#1E3A8A", fontSize: "1.1rem", marginBottom: "4px" }}>Myo-Inositol</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Cellular second messenger involved in FSH signal transduction &amp; oocyte growth.</p>
            </div>

            <div className="nutrient-card">
              <span className="slide-badge" style={{ background: "rgba(214, 67, 140, 0.15)", color: "#D6438C", marginBottom: "8px" }}>27.6 mg</span>
              <h4 style={{ color: "#1E3A8A", fontSize: "1.1rem", marginBottom: "4px" }}>D-Chiro Inositol</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Participates in cellular glycogen synthesis and peripheral insulin action.</p>
            </div>

            <div className="nutrient-card">
              <span className="slide-badge" style={{ background: "rgba(30, 58, 138, 0.15)", color: "#1E3A8A", marginBottom: "8px" }}>400 mcg</span>
              <h4 style={{ color: "#1E3A8A", fontSize: "1.1rem", marginBottom: "4px" }}>Chromium Picolinate</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Essential trace mineral involved in normal macronutrient and carbohydrate metabolism.</p>
            </div>

            <div className="nutrient-card">
              <span className="slide-badge" style={{ background: "rgba(30, 58, 138, 0.15)", color: "#1E3A8A", marginBottom: "8px" }}>400 IU</span>
              <h4 style={{ color: "#1E3A8A", fontSize: "1.1rem", marginBottom: "4px" }}>Vitamin D2</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Provides nutritional support for daily Vitamin D requirements and endocrine health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. SCIENTIFIC RATIONALE ═══ */}
      <section className="section" style={{ padding: "var(--space-12) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#D6438C" }}>SCIENTIFIC RATIONALE</span>
            <h2 style={{ fontSize: "1.75rem", color: "#1E3A8A", marginBottom: "var(--space-4)" }}>Metabolic &amp; Nutrition Pathway</h2>
            
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7" }}>
              Myo- and D-Chiro Inositol participate in intracellular inositol-phosphoglycan (IPG) secondary signaling pathways; chromium is a trace mineral involved in normal macronutrient metabolism; and vitamin D provides nutritional support for daily vitamin D requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 6. NUTRITIONAL ROLE (WOMEN'S HEALTH JOURNEY) ═══ */}
      <section className="section" style={{ padding: "var(--space-12) 0", background: "#ffffff" }}>
        <div className="container">
          <div className="monograph-card" style={{ borderLeft: "5px solid #D6438C" }}>
            <span className="eyebrow-label" style={{ color: "#D6438C" }}>NUTRITIONAL ROLE POSITIONING</span>
            <h2 style={{ fontSize: "1.75rem", color: "#1E3A8A", marginBottom: "var(--space-4)" }}>Support Within Individualized PCOS Care</h2>
            
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.7" }}>
              Positioned strictly as <strong>nutritional support</strong> within individualized PCOS management — not as a cure, infertility treatment, or replacement for prescribed medical or lifestyle management.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 7. USE & SAFETY (PRECAUTIONS & DISCLAIMERS) ═══ */}
      <section className="section" style={{ padding: "var(--space-12) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="monograph-card" style={{ borderLeft: "5px solid #1E3A8A" }}>
            <span className="eyebrow-label" style={{ color: "#1E3A8A" }}>USE &amp; SAFETY GUIDANCE</span>
            <h2 style={{ fontSize: "1.75rem", color: "#1E3A8A", marginBottom: "var(--space-4)" }}>Usage Instructions &amp; Label Wording</h2>
            
            <ul style={{ paddingLeft: "20px", color: "var(--color-text-muted)", lineHeight: "1.7", fontSize: "0.95rem", marginBottom: "var(--space-6)" }}>
              <li style={{ marginBottom: "8px" }}><strong>Dose:</strong> Take as directed by the healthcare professional.</li>
              <li style={{ marginBottom: "8px" }}><strong>Packaging Format:</strong> Supplied in tablets inside pink strip packs (never as a sachet or Alu-Alu blister).</li>
              <li style={{ marginBottom: "8px" }}><strong>Pregnancy &amp; Fertility Wording:</strong> Consult a healthcare professional prior to use during pregnancy or when planning pregnancy.</li>
              <li style={{ marginBottom: "8px" }}><strong>Statutory Disclaimer:</strong> Dietary food supplement / nutraceutical — not for medicinal use. Not intended to diagnose, treat, cure, or prevent any disease.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ 8. SYNERGISTIC CARE ═══ */}
      <section className="fable-ritual-section">
        <div className="container">
          <span className="eyebrow-label" style={{ color: "#1E3A8A" }}>SYNERGISTIC CARE</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontFamily: "var(--font-heading)", color: "#1E3A8A" }}>
            Complete Women&apos;s Wellness
          </h2>

          <div className="fable-ritual-card">
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src="/assets/images/womens-therapy.png" alt="SARANYA" style={{ width: "40px", height: "auto" }} />
              <span style={{ fontWeight: 800, color: "#1E3A8A" }}>SARANYA® Tablets</span>
            </div>
            <span style={{ fontSize: "1.2rem", fontWeight: 900, color: "#D6438C" }}>+</span>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src="/assets/images/3d-pharma-bottle.png" alt="UV 60K" style={{ width: "35px", height: "auto" }} />
              <span style={{ fontWeight: 800, color: "#2E7FE0" }}>UV 60K Softgel</span>
            </div>

            <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#1E3A8A", color: "#ffffff", padding: "10px 24px", fontSize: "0.85rem" }}>
              REQUEST COMBINED SAMPLE →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 9. STICKY BOTTOM FLOATING BAR ═══ */}
      <div className="fable-sticky-bar">
        <img src="/assets/images/womens-therapy.png" alt="SARANYA Mini" />
        <div>
          <strong style={{ fontSize: "0.85rem", color: "#1E3A8A", display: "block" }}>SARANYA®</strong>
          <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Pink Strip Pack Tablets</span>
        </div>
        <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#1E3A8A", color: "#ffffff", padding: "8px 18px", fontSize: "0.8rem", fontWeight: 800, marginLeft: "auto" }}>
          REQUEST SAMPLE
        </Link>
      </div>

    </main>
  );
}
