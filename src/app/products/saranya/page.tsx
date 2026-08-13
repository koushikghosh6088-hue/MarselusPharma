"use client";

import { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";

export default function SaranyaLuxuryPage() {
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>("discover");

  const images = [
    "/assets/images/womens-therapy.png",
    "/assets/images/research-labs.png",
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
            <div className="fable-arch-stage" style={{ background: "linear-gradient(180deg, rgba(244, 114, 182, 0.2) 0%, rgba(30, 58, 138, 0.1) 100%)" }}>
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

              <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#D6438C", marginBottom: "var(--space-4)" }}>
                Myo-Inositol + D-Chiro Inositol + Chromium Picolinate + Vitamin D2 Tablets
              </p>

              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.65", marginBottom: "var(--space-6)" }}>
                A balanced nutritional approach to women&apos;s metabolic &amp; reproductive wellness in PCOS management. Supplied in tablets inside pink strip packs.
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
                      SARANYA® provides Myo-Inositol 1100 mg + D-Chiro Inositol 27.6 mg (~40:1 ratio), Chromium Picolinate 400 mcg, and Vitamin D2 400 IU for nutritional support in PCOS care.
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
                      State clearly that current international PCOS guidance does not establish one specific inositol formulation, dose, or ratio as universally superior. SARANYA® provides a balanced nutritional option mirroring natural plasma ratio.
                    </div>
                  )}
                </div>

                <div className="fable-accordion-item">
                  <button className="fable-accordion-header" onClick={() => toggleAccordion("ingredients")}>
                    <span>FOUR-NUTRIENT COMPOSITION</span>
                    <span>{openAccordion === "ingredients" ? "−" : "+"}</span>
                  </button>
                  {openAccordion === "ingredients" && (
                    <div className="fable-accordion-content">
                      <ul style={{ paddingLeft: "18px", margin: 0 }}>
                        <li><strong>Myo-Inositol:</strong> 1100 mg</li>
                        <li><strong>D-Chiro Inositol:</strong> 27.6 mg</li>
                        <li><strong>Chromium Picolinate:</strong> 400 mcg</li>
                        <li><strong>Vitamin D2:</strong> 400 IU</li>
                      </ul>
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
                      Supplied in tablets packaged inside pink strip packs (never as a sachet or Alu-Alu blister).
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

      {/* ═══ 2. FEATURE HIGHLIGHT GRID ═══ */}
      <section className="fable-spotlight-section">
        <div className="container">
          <span className="eyebrow-label" style={{ color: "#D6438C" }}>METABOLIC &amp; REPRODUCTIVE WELLNESS</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontFamily: "var(--font-heading)", color: "#1E3A8A" }}>
            Hormonal &amp; Cellular Equilibrium
          </h2>

          <div className="fable-spotlight-grid">
            <div className="fable-spotlight-item">
              <img src="/assets/images/womens-therapy.png" alt="PCOS Care" className="fable-circle-img" />
              <div>
                <strong style={{ color: "#1E3A8A", fontSize: "1.05rem", display: "block", marginBottom: "4px" }}>
                  Cellular Second Messengers
                </strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>
                  Participates in intracellular inositol-phosphoglycan signaling pathways.
                </p>
              </div>
            </div>

            <div className="fable-spotlight-item">
              <img src="/assets/images/research-labs.png" alt="Chromium Action" className="fable-circle-img" />
              <div>
                <strong style={{ color: "#1E3A8A", fontSize: "1.05rem", display: "block", marginBottom: "4px" }}>
                  Macronutrient Metabolism
                </strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>
                  Chromium picolinate contributes to normal macronutrient and glucose metabolism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. SYNERGISTIC THERAPY ═══ */}
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

      {/* ═══ 4. STICKY BOTTOM FLOATING BAR ═══ */}
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
