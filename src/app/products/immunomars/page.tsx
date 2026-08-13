"use client";

import { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";

export default function ImmunomarsMasterLuxuryPage() {
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>("discover");

  const images = [
    "/assets/images/nutrition-therapy.png",
    "/assets/images/3d-shield.png",
    "/assets/images/3d-dna.png",
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)", background: "#FAF8F5" }}>
      
      {/* ═══ 1. FABLE & MANE STYLE LUXURY PRODUCT HERO (REAL SACHET FORMAT) ═══ */}
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
            <div className="fable-arch-stage" style={{ background: "linear-gradient(180deg, rgba(249, 115, 22, 0.25) 0%, rgba(30, 58, 138, 0.12) 100%)" }}>
              <img src={images[selectedThumb]} alt="IMMUNOMARS Box and Real Sachet Format" />
            </div>

            {/* Right Product Specs & Accordion List */}
            <div className="fable-product-info">
              
              <div className="fable-rating-row">
                <div className="fable-star-rating">★★★★★</div>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#F97316" }}>(Advanced Immunonutrition Sachet)</span>
              </div>

              <span className="eyebrow-badge" style={{ color: "#F97316", borderColor: "rgba(249, 115, 22, 0.3)", marginBottom: "8px", width: "fit-content" }}>
                CLINICAL NUTRITION · 15G DRINK MIX SACHET
              </span>

              <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontFamily: "var(--font-heading)", color: "#1E3A8A", marginBottom: "6px", lineHeight: "1.1" }}>
                IMMUNOMARS<span style={{ fontSize: "1.2rem", verticalAlign: "super", color: "#F97316" }}>™</span> SACHETS
              </h1>

              <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#F97316", marginBottom: "var(--space-2)" }}>
                L-Glutamine + L-Arginine + L-Lysine + Vitamins + Zinc + Selenium
              </p>

              <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1E3A8A", marginBottom: "var(--space-4)" }}>
                Advanced Immunonutrition &amp; Nutritional Support (Orange Flavour · Sugar Free)
              </p>

              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.65", marginBottom: "var(--space-6)" }}>
                Engineered with high-dose L-Glutamine (10 g) as the hero nutrient for intestinal cell substrate and nitrogen balance in clinical settings.
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
                      IMMUNOMARS™ combines L-Glutamine (10 g hero nutrient), L-Arginine (1.5 g), L-Lysine HCl (0.5 g), Vitamin C (80 mg), Vitamin E (6.7 mg), B6 (1.5 mg), B12 (2.2 mcg), Zinc (12 mg), and Selenium (40 mcg) per 15 g sugar-free sachet.
                    </div>
                  )}
                </div>

                <div className="fable-accordion-item">
                  <button className="fable-accordion-header" onClick={() => toggleAccordion("formulation")}>
                    <span>PER 15G SACHET FORMULATION</span>
                    <span>{openAccordion === "formulation" ? "−" : "+"}</span>
                  </button>
                  {openAccordion === "formulation" && (
                    <div className="fable-accordion-content">
                      <ul style={{ paddingLeft: "18px", margin: 0 }}>
                        <li><strong>L-Glutamine (Hero Nutrient):</strong> 10 g</li>
                        <li><strong>L-Arginine:</strong> 1.5 g</li>
                        <li><strong>L-Lysine HCl:</strong> 0.5 g</li>
                        <li><strong>Vitamin C:</strong> 80 mg</li>
                        <li><strong>Vitamin E:</strong> 6.7 mg</li>
                        <li><strong>Vitamin B6:</strong> 1.5 mg</li>
                        <li><strong>Vitamin B12:</strong> 2.2 mcg</li>
                        <li><strong>Zinc:</strong> 12 mg</li>
                        <li><strong>Selenium:</strong> 40 mcg</li>
                        <li><strong>Flavor &amp; Sugar:</strong> Refreshing Orange Flavour, 100% Sugar-Free</li>
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
                      Immunonutrition is relevant in selected clinical nutrition settings, especially around major surgery and catabolic nutritional risk. <em>Note: Evidence varies by formula and population; avoid claims such as &apos;cures infection&apos; or guaranteed faster recovery.</em>
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

      {/* ═══ 2. NUTRITIONAL CONCEPT (GUT + AMINO ACIDS + MICRONUTRIENTS) ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto var(--space-12)" }}>
            <span className="eyebrow-label" style={{ color: "#F97316" }}>IMMUNONUTRITION CONCEPT</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontFamily: "var(--font-heading)", color: "#1E3A8A" }}>
              Gut + Amino Acids + Micronutrients
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7" }}>
              Engineered with <strong>L-Glutamine 10 g as the hero nutrient</strong>, supported by L-Arginine, L-Lysine, and selected antioxidant micronutrients.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            <div style={{ background: "rgba(249, 115, 22, 0.05)", padding: "24px", borderRadius: "20px", borderLeft: "4px solid #F97316" }}>
              <strong style={{ color: "#1E3A8A", fontSize: "1.1rem", display: "block", marginBottom: "6px" }}>L-Glutamine (10 g)</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Primary respiratory fuel substrate for intestinal epithelial cells (enterocytes) &amp; mucosal integrity.</p>
            </div>

            <div style={{ background: "rgba(249, 115, 22, 0.05)", padding: "24px", borderRadius: "20px", borderLeft: "4px solid #1E3A8A" }}>
              <strong style={{ color: "#1E3A8A", fontSize: "1.1rem", display: "block", marginBottom: "6px" }}>L-Arginine (1.5 g)</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Participates in cellular protein synthesis and nitric oxide vasodilation pathways.</p>
            </div>

            <div style={{ background: "rgba(249, 115, 22, 0.05)", padding: "24px", borderRadius: "20px", borderLeft: "4px solid #E08A2E" }}>
              <strong style={{ color: "#1E3A8A", fontSize: "1.1rem", display: "block", marginBottom: "6px" }}>L-Lysine HCl (0.5 g)</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Essential amino acid necessary for tissue collagen cross-linking and protein synthesis.</p>
            </div>

            <div style={{ background: "rgba(249, 115, 22, 0.05)", padding: "24px", borderRadius: "20px", borderLeft: "4px solid #0F3D28" }}>
              <strong style={{ color: "#1E3A8A", fontSize: "1.1rem", display: "block", marginBottom: "6px" }}>Micronutrient Matrix</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Vitamin C (80mg), E (6.7mg), B6, B12, Zinc (12mg), and Selenium (40mcg) for antioxidant defense.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. FORMULATION TABLE (PER 15G SACHET) ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#F97316" }}>FORMULATION CONTENT</span>
            <h2 style={{ fontSize: "1.75rem", color: "#1E3A8A", marginBottom: "var(--space-4)" }}>Per 15 g Sachet Content</h2>
            
            <table className="ingredient-table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Quantity Per 15g Sachet</th>
                  <th>Nutritional / Biological Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>L-Glutamine (Hero Nutrient)</strong></td>
                  <td>10.0 g (10,000 mg)</td>
                  <td>Amino-acid / nitrogen metabolism &amp; intestinal-cell substrate</td>
                </tr>
                <tr>
                  <td><strong>L-Arginine</strong></td>
                  <td>1.5 g (1500 mg)</td>
                  <td>Protein synthesis / nitric-oxide pathways</td>
                </tr>
                <tr>
                  <td><strong>L-Lysine HCl</strong></td>
                  <td>0.5 g (500 mg)</td>
                  <td>Essential amino acid for structural protein synthesis</td>
                </tr>
                <tr>
                  <td><strong>Vitamin C</strong></td>
                  <td>80.0 mg</td>
                  <td>Antioxidant &amp; immune function support</td>
                </tr>
                <tr>
                  <td><strong>Vitamin E</strong></td>
                  <td>6.7 mg</td>
                  <td>Cellular lipid membrane protection</td>
                </tr>
                <tr>
                  <td><strong>Vitamin B6 &amp; B12</strong></td>
                  <td>1.5 mg &amp; 2.2 mcg</td>
                  <td>Amino acid metabolism cofactors</td>
                </tr>
                <tr>
                  <td><strong>Zinc &amp; Selenium</strong></td>
                  <td>12.0 mg &amp; 40.0 mcg</td>
                  <td>Antioxidant enzyme cofactors &amp; cellular protection</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ 4. CLINICAL NUTRITION CONTEXT ═══ */}
      <section className="section" style={{ padding: "var(--space-12) 0", background: "#ffffff" }}>
        <div className="container">
          <div className="monograph-card" style={{ borderLeft: "5px solid #F97316" }}>
            <span className="eyebrow-label" style={{ color: "#F97316" }}>CLINICAL NUTRITION CONTEXT</span>
            <h2 style={{ fontSize: "1.75rem", color: "#1E3A8A", marginBottom: "var(--space-4)" }}>Selected Clinical Settings</h2>
            
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.7" }}>
              Immunonutrition is relevant in selected clinical nutrition settings, especially around major surgery and catabolic nutritional risk. <em>Note: Evidence varies by formula and patient population; avoid unsupported claims such as &apos;cures infection&apos; or guaranteed faster recovery.</em>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 5. PREPARATION & SAFETY ═══ */}
      <section className="section" style={{ padding: "var(--space-12) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="monograph-card" style={{ borderLeft: "5px solid #1E3A8A" }}>
            <span className="eyebrow-label" style={{ color: "#1E3A8A" }}>USE &amp; SAFETY PRECAUTIONS</span>
            <h2 style={{ fontSize: "1.75rem", color: "#1E3A8A", marginBottom: "var(--space-4)" }}>Preparation &amp; Label Warnings</h2>
            
            <ul style={{ paddingLeft: "20px", color: "var(--color-text-muted)", lineHeight: "1.7", fontSize: "0.95rem", marginBottom: "var(--space-6)" }}>
              <li style={{ marginBottom: "8px" }}><strong>Preparation [Preparation Icon]:</strong> Mix 1 sachet (15 g) in cool drinking water as directed by current approved label or healthcare-professional advice.</li>
              <li style={{ marginBottom: "8px" }}><strong>Flavor &amp; Formula:</strong> Refreshing Orange Flavour, 100% Sugar-Free.</li>
              <li style={{ marginBottom: "8px" }}><strong>Safety Warnings:</strong> Use current approved label warnings and appropriate professional guidance, particularly in patients with significant renal, hepatic, or metabolic conditions.</li>
              <li style={{ marginBottom: "8px" }}><strong>Statutory Disclaimer:</strong> Food supplement / nutraceutical — not for medicinal use. Not intended to diagnose, treat, cure, or prevent any disease.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ 6. SYNERGISTIC CARE ═══ */}
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

      {/* ═══ 7. STICKY BOTTOM FLOATING BAR ═══ */}
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
