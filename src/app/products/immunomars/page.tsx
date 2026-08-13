"use client";

import { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";

export default function ImmunomarsLuxuryPage() {
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>("discover");

  const images = [
    "/assets/images/nutrition-therapy.png",
    "/assets/images/3d-shield.png",
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)", background: "#FAF8F5" }}>
      
      {/* ═══ 1. FABLE & MANE STYLE LUXURY PRODUCT HERO ═══ */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-8) 0 var(--space-16) 0" }}>
        <SpineTab label="IMMUNOMARS™ — CLINICAL SACHET MONOGRAPH" />

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
                  <img src={img} alt={`IMMUNOMARS View ${idx + 1}`} />
                </button>
              ))}
            </div>

            {/* Middle Arched Architectural Product Stage (Orange + Royal Blue) */}
            <div className="fable-arch-stage" style={{ background: "linear-gradient(180deg, rgba(249, 115, 22, 0.2) 0%, rgba(30, 58, 138, 0.1) 100%)" }}>
              <img src={images[selectedThumb]} alt="IMMUNOMARS Box and Real Sachet Format" />
            </div>

            {/* Right Product Specs & Accordion List */}
            <div className="fable-product-info">
              
              <div className="fable-rating-row">
                <div className="fable-star-rating">★★★★★</div>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#F97316" }}>(Clinical Immunonutrition Sachet)</span>
              </div>

              <span className="eyebrow-badge" style={{ color: "#F97316", borderColor: "rgba(249, 115, 22, 0.3)", marginBottom: "8px", width: "fit-content" }}>
                CLINICAL NUTRITION · 15G DRINK MIX SACHET
              </span>

              <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontFamily: "var(--font-heading)", color: "#1E3A8A", marginBottom: "6px", lineHeight: "1.1" }}>
                IMMUNOMARS<span style={{ fontSize: "1.2rem", verticalAlign: "super", color: "#F97316" }}>™</span>
              </h1>

              <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#F97316", marginBottom: "var(--space-4)" }}>
                L-Glutamine 10g + L-Arginine 1.5g + L-Lysine + Vitamins + Zinc + Selenium
              </p>

              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.65", marginBottom: "var(--space-6)" }}>
                Advanced immunonutrition &amp; targeted amino acid support in clinical nutrition settings. Orange flavour, sugar-free 15g sachet.
              </p>

              <div style={{ display: "flex", gap: "12px", marginBottom: "var(--space-6)" }}>
                <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#F97316", color: "#ffffff", padding: "14px 32px", fontSize: "0.95rem", fontWeight: 800 }}>
                  REQUEST NUTRITIONAL MONOGRAPH →
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
                      IMMUNOMARS™ combines L-Glutamine 10 g as the hero mucosal substrate, supported by L-Arginine, L-Lysine, Vitamin C 80mg, Vit E 6.7mg, B6 1.5mg, B12 2.2mcg, Zinc 12mg, and Selenium 40mcg per 15g sachet.
                    </div>
                  )}
                </div>

                <div className="fable-accordion-item">
                  <button className="fable-accordion-header" onClick={() => toggleAccordion("ingredients")}>
                    <span>FULL COMPOSITION PER 15G SACHET</span>
                    <span>{openAccordion === "ingredients" ? "−" : "+"}</span>
                  </button>
                  {openAccordion === "ingredients" && (
                    <div className="fable-accordion-content">
                      <ul style={{ paddingLeft: "18px", margin: 0 }}>
                        <li><strong>L-Glutamine (Hero):</strong> 10.0 g</li>
                        <li><strong>L-Arginine:</strong> 1.5 g</li>
                        <li><strong>L-Lysine HCl:</strong> 0.5 g</li>
                        <li><strong>Antioxidant Matrix:</strong> Vit C 80mg, Vit E 6.7mg, B6 1.5mg, B12 2.2mcg, Zinc 12mg, Selenium 40mcg</li>
                        <li><strong>Flavour:</strong> Orange flavour, 100% Sugar-Free</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="fable-accordion-item">
                  <button className="fable-accordion-header" onClick={() => toggleAccordion("context")}>
                    <span>CLINICAL NUTRITION CONTEXT</span>
                    <span>{openAccordion === "context" ? "−" : "+"}</span>
                  </button>
                  {openAccordion === "context" && (
                    <div className="fable-accordion-content">
                      Immunonutrition is relevant in selected clinical settings, especially around major surgery and catabolic nutritional risk. (Evidence varies by formula and population).
                    </div>
                  )}
                </div>

                <div className="fable-accordion-item">
                  <button className="fable-accordion-header" onClick={() => toggleAccordion("safety")}>
                    <span>PRECAUTIONS &amp; SAFETY</span>
                    <span>{openAccordion === "safety" ? "−" : "+"}</span>
                  </button>
                  {openAccordion === "safety" && (
                    <div className="fable-accordion-content">
                      Use current approved label warnings and appropriate professional guidance, particularly in patients with significant renal, hepatic, or metabolic conditions.
                    </div>
                  )}
                </div>

              </div>

              {/* Our Promises Circular Badges */}
              <div className="fable-promises-row">
                <div className="fable-promise-badge">
                  <div className="fable-promise-icon">🥤</div>
                  <span className="fable-promise-label">15G REAL SACHET</span>
                </div>
                <div className="fable-promise-badge">
                  <div className="fable-promise-icon">⚡</div>
                  <span className="fable-promise-label">10G GLUTAMINE</span>
                </div>
                <div className="fable-promise-badge">
                  <div className="fable-promise-icon">🍊</div>
                  <span className="fable-promise-label">SUGAR FREE</span>
                </div>
                <div className="fable-promise-badge">
                  <div className="fable-promise-icon">🛡️</div>
                  <span className="fable-promise-label">ZINC + SELENIUM</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═══ 2. FEATURE HIGHLIGHT GRID ═══ */}
      <section className="fable-spotlight-section">
        <div className="container">
          <span className="eyebrow-label" style={{ color: "#F97316" }}>IMMUNONUTRITION &amp; ENTEROCYTE SUBSTRATE</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontFamily: "var(--font-heading)", color: "#1E3A8A" }}>
            Rebuild, Protect &amp; Recover
          </h2>

          <div className="fable-spotlight-grid">
            <div className="fable-spotlight-item">
              <img src="/assets/images/nutrition-therapy.png" alt="Sachet Mix" className="fable-circle-img" />
              <div>
                <strong style={{ color: "#1E3A8A", fontSize: "1.05rem", display: "block", marginBottom: "4px" }}>
                  Intestinal Mucosal Substrate
                </strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>
                  L-Glutamine 10 g serves as the primary energy substrate for enterocytes.
                </p>
              </div>
            </div>

            <div className="fable-spotlight-item">
              <img src="/assets/images/3d-shield.png" alt="Antioxidant Co-factors" className="fable-circle-img" />
              <div>
                <strong style={{ color: "#1E3A8A", fontSize: "1.05rem", display: "block", marginBottom: "4px" }}>
                  Antioxidant Micronutrients
                </strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>
                  Zinc, Selenium, Vitamin C, and E support cellular antioxidant defenses.
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
            Complete Nutritional Therapy
          </h2>

          <div className="fable-ritual-card">
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src="/assets/images/nutrition-therapy.png" alt="IMMUNOMARS" style={{ width: "40px", height: "auto" }} />
              <span style={{ fontWeight: 800, color: "#F97316" }}>IMMUNOMARS™ Sachet</span>
            </div>
            <span style={{ fontSize: "1.2rem", fontWeight: 900, color: "#1E3A8A" }}>+</span>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src="/assets/images/3d-pharma-bottle.png" alt="UV 60K" style={{ width: "35px", height: "auto" }} />
              <span style={{ fontWeight: 800, color: "#2E7FE0" }}>UV 60K Softgel</span>
            </div>

            <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#F97316", color: "#ffffff", padding: "10px 24px", fontSize: "0.85rem" }}>
              REQUEST COMBINED SAMPLE →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 4. STICKY BOTTOM FLOATING BAR ═══ */}
      <div className="fable-sticky-bar">
        <img src="/assets/images/nutrition-therapy.png" alt="IMMUNOMARS Mini" />
        <div>
          <strong style={{ fontSize: "0.85rem", color: "#F97316", display: "block" }}>IMMUNOMARS™</strong>
          <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>15g Sugar-Free Sachet</span>
        </div>
        <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#F97316", color: "#ffffff", padding: "8px 18px", fontSize: "0.8rem", fontWeight: 800, marginLeft: "auto" }}>
          REQUEST SAMPLE
        </Link>
      </div>

    </main>
  );
}
