"use client";

import { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";

export default function UV60KMasterLuxuryPage() {
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>("discover");

  const images = [
    "/assets/images/3d-pharma-bottle.png",
    "/assets/images/3d-shield.png",
    "/assets/images/3d-dna.png",
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)", background: "#FAF8F5" }}>
      
      {/* ═══ 1. FABLE & MANE STYLE LUXURY PRODUCT HERO (ACTUAL UV 60K IMAGE + SUNLIGHT VISUAL) ═══ */}
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
            <div className="fable-arch-stage" style={{ background: "linear-gradient(180deg, rgba(234, 179, 8, 0.28) 0%, rgba(46, 127, 224, 0.12) 100%)" }}>
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

              <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#EAB308", marginBottom: "var(--space-2)" }}>
                Cholecalciferol 60,000 IU Softgel Capsules
              </p>

              <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#2E7FE0", marginBottom: "var(--space-4)" }}>
                High-Strength Vitamin D3 Supplementation
              </p>

              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.65", marginBottom: "var(--space-6)" }}>
                Engineered for rapid clinical correction of severe Vitamin D deficiency, supporting calcium/phosphorus metabolism, normal bones, muscle function, and immunity.
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
                      Vitamin D contributes to calcium/phosphorus metabolism, normal bones, normal muscle function, and normal immune function.
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
                      Physician-directed 4-step clinical pathway: Assess baseline serum 25(OH)D → Correct with 60,000 IU weekly → Reassess after 8–12 weeks → Maintain long-term bone/muscle health. <em>Use physician-directed dosing only; do not imply self-medication with high-dose Vitamin D.</em>
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
                      Uses current Indian expert consensus and approved product information for deficiency/insufficiency treatment and maintenance language.
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
                      As directed by the physician/healthcare professional. Includes current label precautions concerning hypercalcaemia, renal issues, and high-dose/long-term use monitoring.
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

      {/* ═══ 2. WHY VITAMIN D MATTERS (CALCIUM, BONES, MUSCLE & IMMUNITY) ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto var(--space-12)" }}>
            <span className="eyebrow-label" style={{ color: "#2E7FE0" }}>PHYSIOLOGICAL ROLE</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontFamily: "var(--font-heading)", color: "#2E7FE0" }}>
              Why Vitamin D Matters
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7" }}>
              Vitamin D is an essential pro-hormone contributing to systemic calcium/phosphorus metabolism, skeletal bone density, normal muscle function, and immune defense.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            <div style={{ background: "rgba(46, 127, 224, 0.05)", padding: "24px", borderRadius: "20px", borderLeft: "4px solid #2E7FE0" }}>
              <strong style={{ color: "#2E7FE0", fontSize: "1.1rem", display: "block", marginBottom: "6px" }}>Calcium &amp; Phosphorus</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Drives active intestinal calcium &amp; phosphate absorption for bone homeostasis.</p>
            </div>

            <div style={{ background: "rgba(46, 127, 224, 0.05)", padding: "24px", borderRadius: "20px", borderLeft: "4px solid #EAB308" }}>
              <strong style={{ color: "#2E7FE0", fontSize: "1.1rem", display: "block", marginBottom: "6px" }}>Normal Bones</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Supports osteoblast mineralization &amp; prevents bone turnover loss.</p>
            </div>

            <div style={{ background: "rgba(46, 127, 224, 0.05)", padding: "24px", borderRadius: "20px", borderLeft: "4px solid #1D9E75" }}>
              <strong style={{ color: "#2E7FE0", fontSize: "1.1rem", display: "block", marginBottom: "6px" }}>Normal Muscle Function</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Enhances muscle protein synthesis &amp; neuromuscular strength.</p>
            </div>

            <div style={{ background: "rgba(46, 127, 224, 0.05)", padding: "24px", borderRadius: "20px", borderLeft: "4px solid #0F3D28" }}>
              <strong style={{ color: "#2E7FE0", fontSize: "1.1rem", display: "block", marginBottom: "6px" }}>Normal Immune Function</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Modulates innate &amp; adaptive immune antimicrobial peptide expression.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. VITAMIN D JOURNEY & 60,000 IU HERO GRAPHIC ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#2E7FE0" }}>PATHWAY INFOGRAPHIC</span>
            <h2 style={{ fontSize: "1.75rem", color: "#2E7FE0", marginBottom: "var(--space-4)" }}>Vitamin D Physiological Journey</h2>
            
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-6)" }}>
              Sunlight / Supplementation → Vitamin D3 (Cholecalciferol) → 25-hydroxy vitamin D → Physiological vitamin D activity → Bone / muscle / calcium homeostasis.
            </p>

            {/* 60,000 IU Large Hero Graphic Card */}
            <div style={{ textAlign: "center", padding: "32px", background: "linear-gradient(135deg, rgba(234, 179, 8, 0.2) 0%, rgba(46, 127, 224, 0.15) 100%)", borderRadius: "24px", marginBottom: "var(--space-8)" }}>
              <span className="slide-badge" style={{ fontSize: "12px", background: "#EAB308", color: "#0F3D28", marginBottom: "8px" }}>HERO DOSAGE STRENGTH</span>
              <div style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", fontFamily: "var(--font-heading)", fontWeight: 900, color: "#2E7FE0", lineHeight: "1" }}>
                60,000 IU
              </div>
              <p style={{ fontSize: "1rem", fontWeight: 700, color: "#0F3D28", marginTop: "8px", margin: 0 }}>
                Cholecalciferol High-Potency Softgel Capsule
              </p>
            </div>

            {/* 4-Step Clinical Pathway (ASSESS → CORRECT → REASSESS → MAINTAIN) */}
            <h3 style={{ fontSize: "1.4rem", color: "#2E7FE0", marginBottom: "var(--space-2)" }}>4-Step Clinical Pathway</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
              <em>Use physician-directed dosing only; do not imply that everyone should self-medicate with high-dose Vitamin D.</em>
            </p>

            <div className="clinical-pathway-grid">
              <div className="pathway-step-card">
                <span style={{ fontSize: "1.4rem", fontWeight: 900, color: "#2E7FE0", display: "block" }}>1. ASSESS</span>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>Check baseline serum 25(OH)D levels.</p>
              </div>

              <div className="pathway-step-card">
                <span style={{ fontSize: "1.4rem", fontWeight: 900, color: "#EAB308", display: "block" }}>2. CORRECT</span>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>Weekly 60,000 IU dosing as prescribed.</p>
              </div>

              <div className="pathway-step-card">
                <span style={{ fontSize: "1.4rem", fontWeight: 900, color: "#1D9E75", display: "block" }}>3. REASSESS</span>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>Re-check 25(OH)D levels after 8–12 weeks.</p>
              </div>

              <div className="pathway-step-card">
                <span style={{ fontSize: "1.4rem", fontWeight: 900, color: "#0F3D28", display: "block" }}>4. MAINTAIN</span>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>Transition to maintenance dosing schedule.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 4. EVIDENCE & INDIAN EXPERT CONSENSUS ═══ */}
      <section className="section" style={{ padding: "var(--space-12) 0", background: "#ffffff" }}>
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#2E7FE0" }}>EVIDENCE &amp; PRACTICE GUIDELINES</span>
            <h2 style={{ fontSize: "1.75rem", color: "#2E7FE0", marginBottom: "var(--space-4)" }}>Indian Clinical Consensus Evidence</h2>
            
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-4)" }}>
              Uses current Indian expert consensus and approved product information for deficiency/insufficiency treatment and maintenance language.
            </p>

            <div style={{ padding: "20px", background: "rgba(46, 127, 224, 0.1)", borderRadius: "16px", borderLeft: "4px solid #2E7FE0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <strong style={{ fontSize: "0.95rem", color: "#2E7FE0", display: "block" }}>Reference Citation:</strong>
                <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                  Indian Expert Consensus Statement on Management of Vitamin D Deficiency. <em>J Assoc Physicians India.</em>
                </span>
              </div>
              <div style={{ padding: "8px 16px", background: "#ffffff", borderRadius: "12px", border: "1px solid rgba(46, 127, 224, 0.2)", fontSize: "0.8rem", fontWeight: 800, color: "#2E7FE0" }}>
                [Reference / QR Area]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. USE & SAFETY ═══ */}
      <section className="section" style={{ padding: "var(--space-12) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="monograph-card" style={{ borderLeft: "5px solid #EAB308" }}>
            <span className="eyebrow-label" style={{ color: "#2E7FE0" }}>USE &amp; SAFETY PRECAUTIONS</span>
            <h2 style={{ fontSize: "1.75rem", color: "#2E7FE0", marginBottom: "var(--space-4)" }}>Use &amp; Label Precautions</h2>
            
            <ul style={{ paddingLeft: "20px", color: "var(--color-text-muted)", lineHeight: "1.7", fontSize: "0.95rem", marginBottom: "var(--space-6)" }}>
              <li style={{ marginBottom: "8px" }}><strong>Dose:</strong> As directed by the physician/healthcare professional.</li>
              <li style={{ marginBottom: "8px" }}><strong>Precautions:</strong> Include current label precautions concerning hypercalcaemia, renal issues, and high-dose/long-term use monitoring.</li>
              <li style={{ marginBottom: "8px" }}><strong>Contraindications:</strong> Hypercalcaemia, hypervitaminosis D, or severe renal osteodystrophy with hyperphosphatemia.</li>
            </ul>

            {/* Safety Infographic Badges */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", borderTop: "1px solid rgba(46,127,224,0.1)", paddingTop: "16px" }}>
              <span className="slide-badge" style={{ background: "rgba(46,127,224,0.08)", color: "#2E7FE0" }}>⚠️ Monitor Serum Calcium</span>
              <span className="slide-badge" style={{ background: "rgba(46,127,224,0.08)", color: "#2E7FE0" }}>🛡️ Renal Stone Precautions</span>
              <span className="slide-badge" style={{ background: "rgba(46,127,224,0.08)", color: "#2E7FE0" }}>🚫 Avoid Hypercalcaemia</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. SYNERGISTIC CARE ═══ */}
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

      {/* ═══ 7. STICKY BOTTOM FLOATING BAR ═══ */}
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
