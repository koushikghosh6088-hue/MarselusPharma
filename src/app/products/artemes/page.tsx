"use client";

import { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";

export default function ArtemesLuxuryPage() {
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>("discover");

  const images = [
    "/assets/images/atrimus-capsule.png",
    "/assets/images/capsule-release.png",
    "/assets/images/gastro-therapy.png",
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)", background: "#FAF8F5" }}>
      
      {/* ═══ 1. FABLE & MANE STYLE LUXURY PRODUCT HERO ═══ */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-8) 0 var(--space-16) 0" }}>
        <SpineTab label="ARTEMES™ — 5-ASA MONOGRAPH" />

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
                  <img src={img} alt={`ARTEMES View ${idx + 1}`} />
                </button>
              ))}
            </div>

            {/* Middle Arched Architectural Product Stage */}
            <div className="fable-arch-stage" style={{ background: "linear-gradient(180deg, rgba(132, 204, 22, 0.15) 0%, rgba(15, 61, 40, 0.08) 100%)" }}>
              <img src={images[selectedThumb]} alt="ARTEMES 1.2g Main Render" />
            </div>

            {/* Right Product Specs & Accordion List */}
            <div className="fable-product-info">
              
              <div className="fable-rating-row">
                <div className="fable-star-rating">★★★★★</div>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-forest)" }}>(WHO-GMP Certified)</span>
              </div>

              <span className="eyebrow-badge" style={{ color: "#1D9E75", borderColor: "rgba(29, 158, 117, 0.3)", marginBottom: "8px", width: "fit-content" }}>
                GASTROENTEROLOGY · PROLONGED RELEASE
              </span>

              <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontFamily: "var(--font-heading)", color: "#0F3D28", marginBottom: "6px", lineHeight: "1.1" }}>
                ARTEMES<span style={{ fontSize: "1.2rem", verticalAlign: "super", color: "#84CC16" }}>™</span> 1.2g
              </h1>

              <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1D9E75", marginBottom: "var(--space-4)" }}>
                Mesalamine Prolonged Release Tablets IP 1.2 g
              </p>

              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.65", marginBottom: "var(--space-6)" }}>
                Targeted 5-ASA prolonged-release formulation engineered for site-specific colonic delivery in mild-to-moderate ulcerative colitis.
              </p>

              <div style={{ display: "flex", gap: "12px", marginBottom: "var(--space-6)" }}>
                <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#0F3D28", color: "#ffffff", padding: "14px 32px", fontSize: "0.95rem", fontWeight: 800 }}>
                  REQUEST PRESCRIBING SAMPLE →
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
                      ARTEMES™ delivers high-density 5-ASA directly to inflamed colonic mucosa, suppressing local prostaglandin and leukotriene inflammatory cascades while keeping systemic absorption low.
                    </div>
                  )}
                </div>

                <div className="fable-accordion-item">
                  <button className="fable-accordion-header" onClick={() => toggleAccordion("why")}>
                    <span>WHY CLINICIANS TRUST ARTEMES™</span>
                    <span>{openAccordion === "why" ? "−" : "+"}</span>
                  </button>
                  {openAccordion === "why" && (
                    <div className="fable-accordion-content">
                      <ul style={{ paddingLeft: "18px", margin: 0 }}>
                        <li>Site-specific colonic release at pH &gt; 6.8</li>
                        <li>Induction and maintenance of ulcerative colitis remission</li>
                        <li>Convenient once-daily dosing regimen</li>
                        <li>Manufactured in WHO-GMP certified facilities</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="fable-accordion-item">
                  <button className="fable-accordion-header" onClick={() => toggleAccordion("mnemonic")}>
                    <span>A-R-T-E-M-E-S BRAND STORY</span>
                    <span>{openAccordion === "mnemonic" ? "−" : "+"}</span>
                  </button>
                  {openAccordion === "mnemonic" && (
                    <div className="fable-accordion-content">
                      <strong>A</strong>—Anti-inflammatory Action · <strong>R</strong>—Remission · <strong>T</strong>—Targeted Release · <strong>E</strong>—Enteric Protection · <strong>M</strong>—Mucosal Improvement · <strong>E</strong>—Efficacy · <strong>S</strong>—Simplified Therapy.
                    </div>
                  )}
                </div>

                <div className="fable-accordion-item">
                  <button className="fable-accordion-header" onClick={() => toggleAccordion("ingredients")}>
                    <span>KEY INGREDIENT &amp; STRENGTH</span>
                    <span>{openAccordion === "ingredients" ? "−" : "+"}</span>
                  </button>
                  {openAccordion === "ingredients" && (
                    <div className="fable-accordion-content">
                      <strong>Mesalamine IP (5-Aminosalicylic Acid):</strong> 1.2 g (1200 mg) per tablet inside an enteric-coated multi-matrix polymer core.
                    </div>
                  )}
                </div>

              </div>

              {/* Our Promises Circular Badges */}
              <div className="fable-promises-row">
                <div className="fable-promise-badge">
                  <div className="fable-promise-icon">🌿</div>
                  <span className="fable-promise-label">WHO-GMP</span>
                </div>
                <div className="fable-promise-badge">
                  <div className="fable-promise-icon">🎯</div>
                  <span className="fable-promise-label">COLONIC TARGET</span>
                </div>
                <div className="fable-promise-badge">
                  <div className="fable-promise-icon">✨</div>
                  <span className="fable-promise-label">ONCE DAILY</span>
                </div>
                <div className="fable-promise-badge">
                  <div className="fable-promise-icon">🛡️</div>
                  <span className="fable-promise-label">ISO 9001</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═══ 2. FEATURE HIGHLIGHT GRID ("Hydrate & Shine" Style) ═══ */}
      <section className="fable-spotlight-section">
        <div className="container">
          <span className="eyebrow-label" style={{ color: "#1D9E75" }}>CLINICAL ADVANTAGES</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontFamily: "var(--font-heading)", color: "#0F3D28" }}>
            Targeted Efficacy &amp; Healing
          </h2>

          <div className="fable-spotlight-grid">
            <div className="fable-spotlight-item">
              <img src="/assets/images/gastro-therapy.png" alt="Colonic Mucosa" className="fable-circle-img" />
              <div>
                <strong style={{ color: "#0F3D28", fontSize: "1.05rem", display: "block", marginBottom: "4px" }}>
                  Mucosal Barrier Restitution
                </strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>
                  Promotes epithelial tissue healing and suppresses colonic mucosal oxidative damage.
                </p>
              </div>
            </div>

            <div className="fable-spotlight-item">
              <img src="/assets/images/3d-dna.png" alt="Enteric Matrix" className="fable-circle-img" />
              <div>
                <strong style={{ color: "#0F3D28", fontSize: "1.05rem", display: "block", marginBottom: "4px" }}>
                  pH-Triggered Release
                </strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>
                  Resists gastric acid in upper GI, dissolving precisely at colonic pH &gt; 6.8.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. SYNERGISTIC THERAPY ("Complete Your Ritual" Style) ═══ */}
      <section className="fable-ritual-section">
        <div className="container">
          <span className="eyebrow-label" style={{ color: "#0F3D28" }}>SYNERGISTIC CARE</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontFamily: "var(--font-heading)", color: "#0F3D28" }}>
            Complete Your GI Therapy
          </h2>

          <div className="fable-ritual-card">
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src="/assets/images/atrimus-capsule.png" alt="ARTEMES" style={{ width: "40px", height: "auto" }} />
              <span style={{ fontWeight: 800, color: "#0F3D28" }}>ARTEMES™ 1.2g</span>
            </div>
            <span style={{ fontSize: "1.2rem", fontWeight: 900, color: "#1D9E75" }}>+</span>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src="/assets/images/3d-pharma-bottle.png" alt="UV 60K" style={{ width: "35px", height: "auto" }} />
              <span style={{ fontWeight: 800, color: "#2E7FE0" }}>UV 60K Softgel</span>
            </div>

            <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#0F3D28", color: "#ffffff", padding: "10px 24px", fontSize: "0.85rem" }}>
              REQUEST COMBINED SAMPLE →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 4. STICKY BOTTOM FLOATING BAR ═══ */}
      <div className="fable-sticky-bar">
        <img src="/assets/images/atrimus-capsule.png" alt="ARTEMES Mini" />
        <div>
          <strong style={{ fontSize: "0.85rem", color: "#0F3D28", display: "block" }}>ARTEMES™ 1.2g</strong>
          <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Mesalamine PR Tablet IP</span>
        </div>
        <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#0F3D28", color: "#ffffff", padding: "8px 18px", fontSize: "0.8rem", fontWeight: 800, marginLeft: "auto" }}>
          REQUEST SAMPLE
        </Link>
      </div>

    </main>
  );
}
