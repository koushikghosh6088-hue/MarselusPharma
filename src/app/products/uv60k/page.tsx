"use client";

import { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";

export default function UV60KLuxuryPage() {
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>("discover");

  const images = [
    "/assets/images/3d-pharma-bottle.png",
    "/assets/images/3d-shield.png",
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)", background: "#FAF8F5" }}>
      
      {/* ═══ 1. FABLE & MANE STYLE LUXURY PRODUCT HERO ═══ */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-8) 0 var(--space-16) 0" }}>
        <SpineTab label="UV 60K — HIGH STRENGTH VITAMIN D3 MONOGRAPH" />

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
                  <img src={img} alt={`UV 60K View ${idx + 1}`} />
                </button>
              ))}
            </div>

            {/* Middle Arched Architectural Product Stage (Sun Yellow + Blue) */}
            <div className="fable-arch-stage" style={{ background: "linear-gradient(180deg, rgba(234, 179, 8, 0.25) 0%, rgba(46, 127, 224, 0.1) 100%)" }}>
              <img src={images[selectedThumb]} alt="UV 60K Softgel Render" />
            </div>

            {/* Right Product Specs & Accordion List */}
            <div className="fable-product-info">
              
              <div className="fable-rating-row">
                <div className="fable-star-rating">★★★★★</div>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#2E7FE0" }}>(High-Potency Softgel Capsule)</span>
              </div>

              <span className="eyebrow-badge" style={{ color: "#2E7FE0", borderColor: "rgba(46, 127, 224, 0.3)", marginBottom: "8px", width: "fit-content" }}>
                VITAMIN THERAPY · HIGH-STRENGTH SOFTGEL
              </span>

              <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontFamily: "var(--font-heading)", color: "#2E7FE0", marginBottom: "6px", lineHeight: "1.1" }}>
                UV 60K
              </h1>

              <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#EAB308", marginBottom: "var(--space-4)" }}>
                Cholecalciferol (Vitamin D3) 60,000 IU Softgel Capsule
              </p>

              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.65", marginBottom: "var(--space-6)" }}>
                High-strength Vitamin D3 supplementation engineered for rapid clinical deficiency correction &amp; calcium homeostasis.
              </p>

              <div style={{ display: "flex", gap: "12px", marginBottom: "var(--space-6)" }}>
                <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#2E7FE0", color: "#ffffff", padding: "14px 32px", fontSize: "0.95rem", fontWeight: 800 }}>
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
                      Vitamin D contributes to calcium/phosphorus metabolism, normal bones, normal muscle function, and normal immune system function.
                    </div>
                  )}
                </div>

                <div className="fable-accordion-item">
                  <button className="fable-accordion-header" onClick={() => toggleAccordion("pathway")}>
                    <span>ASSESS → CORRECT → REASSESS → MAINTAIN</span>
                    <span>{openAccordion === "pathway" ? "−" : "+"}</span>
                  </button>
                  {openAccordion === "pathway" && (
                    <div className="fable-accordion-content">
                      Physician-directed 4-step clinical pathway: Assess baseline serum 25(OH)D → Correct with 60,000 IU weekly → Reassess after 8-12 weeks → Maintain long-term bone/muscle health.
                    </div>
                  )}
                </div>

                <div className="fable-accordion-item">
                  <button className="fable-accordion-header" onClick={() => toggleAccordion("consensus")}>
                    <span>INDIAN EXPERT CONSENSUS EVIDENCE</span>
                    <span>{openAccordion === "consensus" ? "−" : "+"}</span>
                  </button>
                  {openAccordion === "consensus" && (
                    <div className="fable-accordion-content">
                      Current Indian expert consensus and approved product information recommend 60,000 IU weekly Cholecalciferol for deficiency treatment followed by maintenance dosing.
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
                      Include current label precautions concerning hypercalcaemia, renal stone risk, and high-dose/long-term use monitoring.
                    </div>
                  )}
                </div>

              </div>

              {/* Our Promises Circular Badges */}
              <div className="fable-promises-row">
                <div className="fable-promise-badge">
                  <div className="fable-promise-icon">☀️</div>
                  <span className="fable-promise-label">60,000 IU</span>
                </div>
                <div className="fable-promise-badge">
                  <div className="fable-promise-icon">💊</div>
                  <span className="fable-promise-label">SOFTGEL</span>
                </div>
                <div className="fable-promise-badge">
                  <div className="fable-promise-icon">🦴</div>
                  <span className="fable-promise-label">BONE HEALTH</span>
                </div>
                <div className="fable-promise-badge">
                  <div className="fable-promise-icon">💪</div>
                  <span className="fable-promise-label">MUSCLE STRENGTH</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═══ 2. FEATURE HIGHLIGHT GRID ═══ */}
      <section className="fable-spotlight-section">
        <div className="container">
          <span className="eyebrow-label" style={{ color: "#2E7FE0" }}>CALCIUM HOMEOSTASIS &amp; IMMUNITY</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontFamily: "var(--font-heading)", color: "#2E7FE0" }}>
            High-Potency Vitamin D3 Action
          </h2>

          <div className="fable-spotlight-grid">
            <div className="fable-spotlight-item">
              <img src="/assets/images/3d-pharma-bottle.png" alt="UV 60K Softgel" className="fable-circle-img" />
              <div>
                <strong style={{ color: "#2E7FE0", fontSize: "1.05rem", display: "block", marginBottom: "4px" }}>
                  Intestinal Calcium Absorption
                </strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>
                  Active 1,25(OH)2D3 upregulates intestinal enterocyte calcium transport proteins.
                </p>
              </div>
            </div>

            <div className="fable-spotlight-item">
              <img src="/assets/images/3d-shield.png" alt="Immune Protection" className="fable-circle-img" />
              <div>
                <strong style={{ color: "#2E7FE0", fontSize: "1.05rem", display: "block", marginBottom: "4px" }}>
                  Neuromuscular &amp; Immune Support
                </strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>
                  Supports muscle cell protein synthesis and immune cell antimicrobial peptide expression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. SYNERGISTIC THERAPY ═══ */}
      <section className="fable-ritual-section">
        <div className="container">
          <span className="eyebrow-label" style={{ color: "#2E7FE0" }}>SYNERGISTIC CARE</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontFamily: "var(--font-heading)", color: "#2E7FE0" }}>
            Complete Calcium &amp; Vitamin D Ritual
          </h2>

          <div className="fable-ritual-card">
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src="/assets/images/3d-pharma-bottle.png" alt="UV 60K" style={{ width: "40px", height: "auto" }} />
              <span style={{ fontWeight: 800, color: "#2E7FE0" }}>UV 60K Softgel</span>
            </div>
            <span style={{ fontSize: "1.2rem", fontWeight: 900, color: "#EAB308" }}>+</span>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src="/assets/images/atrimus-capsule.png" alt="ARTEMES" style={{ width: "35px", height: "auto" }} />
              <span style={{ fontWeight: 800, color: "#0F3D28" }}>ARTEMES™ 1.2g</span>
            </div>

            <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#2E7FE0", color: "#ffffff", padding: "10px 24px", fontSize: "0.85rem" }}>
              REQUEST COMBINED SAMPLE →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 4. STICKY BOTTOM FLOATING BAR ═══ */}
      <div className="fable-sticky-bar">
        <img src="/assets/images/3d-pharma-bottle.png" alt="UV 60K Mini" />
        <div>
          <strong style={{ fontSize: "0.85rem", color: "#2E7FE0", display: "block" }}>UV 60K</strong>
          <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>60,000 IU Softgel Capsule</span>
        </div>
        <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#2E7FE0", color: "#ffffff", padding: "8px 18px", fontSize: "0.8rem", fontWeight: 800, marginLeft: "auto" }}>
          REQUEST SAMPLE
        </Link>
      </div>

    </main>
  );
}
