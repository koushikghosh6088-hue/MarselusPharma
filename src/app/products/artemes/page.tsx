"use client";

import { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";

export default function ArtemesMasterLuxuryPage() {
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>("discover");

  const images = [
    "/assets/images/atrimus-capsule.png",
    "/assets/images/gastro-therapy.png",
    "/assets/images/capsule-release.png",
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

            {/* Middle Arched Architectural Product Stage (Deep Green + Lime) */}
            <div className="fable-arch-stage" style={{ background: "linear-gradient(180deg, rgba(132, 204, 22, 0.2) 0%, rgba(15, 61, 40, 0.1) 100%)" }}>
              <img src={images[selectedThumb]} alt="ARTEMES 1.2g Main Render" />
            </div>

            {/* Right Product Specs & Accordion List */}
            <div className="fable-product-info">
              
              <div className="fable-rating-row">
                <div className="fable-star-rating">★★★★★</div>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0F3D28" }}>(WHO-GMP Certified 5-ASA Therapy)</span>
              </div>

              <span className="eyebrow-badge" style={{ color: "#1D9E75", borderColor: "rgba(29, 158, 117, 0.3)", marginBottom: "8px", width: "fit-content" }}>
                GASTROENTEROLOGY · PROLONGED RELEASE
              </span>

              <h1 style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontFamily: "var(--font-heading)", color: "#0F3D28", marginBottom: "6px", lineHeight: "1.1" }}>
                ARTEMES<span style={{ fontSize: "1.2rem", verticalAlign: "super", color: "#84CC16" }}>™</span> 1.2g
              </h1>

              <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1D9E75", marginBottom: "var(--space-2)" }}>
                Mesalamine Prolonged Release Tablets IP 1.2 g
              </p>

              <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#84CC16", marginBottom: "var(--space-4)" }}>
                Targeted 5-ASA Therapy for Ulcerative Colitis
              </p>

              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.65", marginBottom: "var(--space-6)" }}>
                Targeted prolonged-release formulation engineered for site-specific colonic delivery in mild-to-moderate ulcerative colitis.
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
                      ARTEMES™ acts topically on colonic epithelial mucosa to suppress prostaglandin and leukotriene inflammatory cascades, achieving mucosal healing with minimal systemic exposure.
                    </div>
                  )}
                </div>

                <div className="fable-accordion-item">
                  <button className="fable-accordion-header" onClick={() => toggleAccordion("ingredients")}>
                    <span>KEY INGREDIENTS &amp; STRENGTH</span>
                    <span>{openAccordion === "ingredients" ? "−" : "+"}</span>
                  </button>
                  {openAccordion === "ingredients" && (
                    <div className="fable-accordion-content">
                      <strong>Active Ingredient:</strong> Mesalamine IP (5-Aminosalicylic Acid) 1.2 g (1200 mg) per tablet inside a prolonged-release enteric polymer matrix.
                    </div>
                  )}
                </div>

                <div className="fable-accordion-item">
                  <button className="fable-accordion-header" onClick={() => toggleAccordion("guidelines")}>
                    <span>ACG CLINICAL GUIDELINES</span>
                    <span>{openAccordion === "guidelines" ? "−" : "+"}</span>
                  </button>
                  {openAccordion === "guidelines" && (
                    <div className="fable-accordion-content">
                      Current ACG guidance recognizes 5-ASA therapy as a foundational option in mild-to-moderate UC. Once-daily oral dosing may be used when clinically appropriate.
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

      {/* ═══ 2. UNDERSTANDING ULCERATIVE COLITIS (DISEASE & MUCOSA VISUAL) ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto var(--space-12)" }}>
            <span className="eyebrow-label" style={{ color: "#1D9E75" }}>DISEASE OVERVIEW</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontFamily: "var(--font-heading)", color: "#0F3D28" }}>
              Understanding Ulcerative Colitis
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7" }}>
              Ulcerative colitis (UC) is a chronic inflammatory bowel disease affecting the colon and rectum, marked by mucosal inflammation, erosion, and recurring disease activity.
            </p>
          </div>

          {/* Disease Progression Visual Stage */}
          <div className="grid-split" style={{ alignItems: "center", gap: "32px" }}>
            
            <div>
              <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", background: "#FAF8F5", borderRadius: "24px", textAlign: "center" }}>
                <img src="/assets/images/gastro-therapy.png" alt="Healthy vs Inflamed Colonic Mucosa" style={{ width: "90%", height: "auto", borderRadius: "16px", margin: "0 auto", filter: "drop-shadow(0 12px 25px rgba(0,0,0,0.1))" }} />
                <span className="slide-badge" style={{ marginTop: "12px", background: "rgba(15, 61, 40, 0.08)", color: "#0F3D28", fontSize: "11px" }}>
                  Healthy vs. Inflamed Mucosal Visual
                </span>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: "1.5rem", color: "#0F3D28", marginBottom: "var(--space-4)" }}>Colonic Disease Progression</h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ padding: "16px 20px", background: "rgba(15, 61, 40, 0.04)", borderRadius: "16px", borderLeft: "4px solid #1D9E75" }}>
                  <strong style={{ color: "#0F3D28", display: "block" }}>1. Mucosal Inflammation</strong>
                  <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Elevated leukotrienes and prostaglandins in mucosal tissue.</span>
                </div>

                <div style={{ padding: "16px 20px", background: "rgba(15, 61, 40, 0.04)", borderRadius: "16px", borderLeft: "4px solid #84CC16" }}>
                  <strong style={{ color: "#0F3D28", display: "block" }}>2. Mucosal Injury</strong>
                  <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Loss of epithelial integrity, mucosal erosion, and ulceration.</span>
                </div>

                <div style={{ padding: "16px 20px", background: "rgba(15, 61, 40, 0.04)", borderRadius: "16px", borderLeft: "4px solid #D6438C" }}>
                  <strong style={{ color: "#0F3D28", display: "block" }}>3. Clinical Symptoms</strong>
                  <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Rectal bleeding, stool urgency, abdominal cramping, and fatigue.</span>
                </div>

                <div style={{ padding: "16px 20px", background: "rgba(15, 61, 40, 0.04)", borderRadius: "16px", borderLeft: "4px solid #0F3D28" }}>
                  <strong style={{ color: "#0F3D28", display: "block" }}>4. Fluctuating Disease Activity</strong>
                  <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Active disease flares requiring physician-directed remission therapy.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 3. ARTEMES™ SCIENTIFIC STORY (LARGE A-R-T-E-M-E-S INFOGRAPHIC) ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          
          <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto var(--space-8)" }}>
            <span className="eyebrow-label" style={{ color: "#1D9E75" }}>BRAND COMMUNICATION MNEMONIC</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontFamily: "var(--font-heading)", color: "#0F3D28" }}>
              ARTEMES<span style={{ fontSize: "1.2rem" }}>™</span> Scientific Story
            </h2>
            <div style={{ padding: "8px 16px", background: "rgba(132, 204, 22, 0.15)", borderRadius: "20px", display: "inline-block", marginTop: "8px" }}>
              <span style={{ fontSize: "0.85rem", color: "#0F3D28", fontWeight: 700 }}>
                 Designer Note: Brand communication mnemonic only; not the generic full form of mesalamine.
              </span>
            </div>
          </div>

          <div className="mnemonic-grid">
            <div className="mnemonic-item">
              <div className="mnemonic-letter">A</div>
              <strong style={{ color: "#0F3D28", display: "block", marginBottom: "4px" }}>Anti-inflammatory Action</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Local inhibition of colonic mucosal inflammatory cascade.</p>
            </div>

            <div className="mnemonic-item">
              <div className="mnemonic-letter">R</div>
              <strong style={{ color: "#0F3D28", display: "block", marginBottom: "4px" }}>Remission</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Targeted clinical and endoscopic mucosal remission.</p>
            </div>

            <div className="mnemonic-item">
              <div className="mnemonic-letter">T</div>
              <strong style={{ color: "#0F3D28", display: "block", marginBottom: "4px" }}>Targeted Release</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Site-specific delivery to inflamed colonic tissue.</p>
            </div>

            <div className="mnemonic-item">
              <div className="mnemonic-letter">E</div>
              <strong style={{ color: "#0F3D28", display: "block", marginBottom: "4px" }}>Enteric Protection</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>pH-triggered polymer matrix shielding upper GI tract.</p>
            </div>

            <div className="mnemonic-item">
              <div className="mnemonic-letter">M</div>
              <strong style={{ color: "#0F3D28", display: "block", marginBottom: "4px" }}>Mucosal Improvement</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Supportive mucosal barrier restoration and restitution.</p>
            </div>

            <div className="mnemonic-item">
              <div className="mnemonic-letter">E</div>
              <strong style={{ color: "#0F3D28", display: "block", marginBottom: "4px" }}>Efficacy</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Proven 5-ASA clinical therapeutic disease control.</p>
            </div>

            <div className="mnemonic-item">
              <div className="mnemonic-letter">S</div>
              <strong style={{ color: "#0F3D28", display: "block", marginBottom: "4px" }}>Simplified Therapy</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Convenient once-daily dosing regimen for patient compliance.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ 4. HOW MESALAMINE WORKS (GI TRACT MECHANISM GRAPHIC) ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto var(--space-10)" }}>
            <span className="eyebrow-label" style={{ color: "#1D9E75" }}>GI TRACT MECHANISM</span>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontFamily: "var(--font-heading)", color: "#0F3D28" }}>
              How Mesalamine Works
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            <div style={{ background: "rgba(15, 61, 40, 0.04)", padding: "24px", borderRadius: "20px", borderTop: "4px solid #1D9E75" }}>
              <strong style={{ color: "#0F3D28", fontSize: "1.05rem", display: "block", marginBottom: "6px" }}>5-ASA Active Molecule</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Oral administration protected by enteric polymer coating.</p>
            </div>

            <div style={{ background: "rgba(15, 61, 40, 0.04)", padding: "24px", borderRadius: "20px", borderTop: "4px solid #84CC16" }}>
              <strong style={{ color: "#0F3D28", fontSize: "1.05rem", display: "block", marginBottom: "6px" }}>Local Anti-Inflammatory</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Topical colonic activity reducing COX &amp; LOX inflammatory pathways.</p>
            </div>

            <div style={{ background: "rgba(15, 61, 40, 0.04)", padding: "24px", borderRadius: "20px", borderTop: "4px solid #1D9E75" }}>
              <strong style={{ color: "#0F3D28", fontSize: "1.05rem", display: "block", marginBottom: "6px" }}>Reduction of Cascade</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Decreased leukotriene B4 &amp; prostaglandin tissue levels.</p>
            </div>

            <div style={{ background: "rgba(15, 61, 40, 0.04)", padding: "24px", borderRadius: "20px", borderTop: "4px solid #0F3D28" }}>
              <strong style={{ color: "#0F3D28", fontSize: "1.05rem", display: "block", marginBottom: "6px" }}>Improved Disease Control</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Mucosal barrier healing &amp; sustained clinical remission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. CLINICAL POSITIONING & OBJECTIVES ═══ */}
      <section className="section" style={{ padding: "var(--space-12) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="monograph-card" style={{ borderLeft: "5px solid #0F3D28" }}>
            <span className="eyebrow-label" style={{ color: "#0F3D28" }}>CLINICAL POSITIONING</span>
            <h2 style={{ fontSize: "1.75rem", color: "#0F3D28", marginBottom: "var(--space-4)" }}>Physician-Directed Therapeutic Role</h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.7" }}>
              Physician-directed use in appropriately selected mild-to-moderate ulcerative colitis; therapeutic objectives may include the induction and maintenance of remission. Please refer to current approved prescribing information.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 6. EVIDENCE & ACG GUIDANCE (REFERENCE & QR AREA) ═══ */}
      <section className="section" style={{ padding: "var(--space-12) 0", background: "#ffffff" }}>
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#1D9E75" }}>EVIDENCE &amp; PRACTICE GUIDELINES</span>
            <h2 style={{ fontSize: "1.75rem", color: "#0F3D28", marginBottom: "var(--space-4)" }}>ACG Guideline Recognition</h2>
            
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-6)" }}>
              Current American College of Gastroenterology (ACG) guidance recognizes 5-ASA therapy as an important option in appropriately selected mild-to-moderate UC. Once-daily oral dosing may be used when clinically appropriate.
            </p>

            <div style={{ padding: "20px", background: "rgba(29, 158, 117, 0.1)", borderRadius: "16px", borderLeft: "4px solid #1D9E75", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <strong style={{ fontSize: "0.95rem", color: "#0F3D28", display: "block" }}>Reference Citation:</strong>
                <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                  Rubin DT, et al. ACG Clinical Guideline: Ulcerative Colitis in Adults. <em>Am J Gastroenterol.</em> 2019;114(3):384-413.
                </span>
              </div>
              <div style={{ padding: "8px 16px", background: "#ffffff", borderRadius: "12px", border: "1px solid rgba(15,61,40,0.15)", fontSize: "0.8rem", fontWeight: 800, color: "#0F3D28" }}>
                [Reference / QR Area]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. USE & SAFETY (PRECAUTIONS & ICONS) ═══ */}
      <section className="section" style={{ padding: "var(--space-12) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="monograph-card" style={{ borderLeft: "5px solid #1D9E75" }}>
            <span className="eyebrow-label" style={{ color: "#1D9E75" }}>PRESCRIBING SAFETY &amp; PRECAUTIONS</span>
            <h2 style={{ fontSize: "1.75rem", color: "#0F3D28", marginBottom: "var(--space-4)" }}>Use &amp; Safety Profile</h2>
            
            <ul style={{ paddingLeft: "20px", color: "var(--color-text-muted)", lineHeight: "1.7", fontSize: "0.95rem", marginBottom: "var(--space-6)" }}>
              <li style={{ marginBottom: "8px" }}><strong>Dosing:</strong> As directed by the physician.</li>
              <li style={{ marginBottom: "8px" }}><strong>Label Warnings:</strong> Evaluate renal function (serum creatinine, eGFR) prior to initiation and periodically during therapy.</li>
              <li style={{ marginBottom: "8px" }}><strong>Contraindications:</strong> Hypersensitivity to mesalamine, salicylates, or any formulation components.</li>
              <li style={{ marginBottom: "8px" }}><strong>Renal &amp; Hepatic Considerations:</strong> Caution in known renal or hepatic impairment.</li>
              <li style={{ marginBottom: "8px" }}><strong>Adverse Effects:</strong> Headache, abdominal pain, nausea, diarrhea, and rare hypersensitivity reactions.</li>
            </ul>

            {/* Safety Icons Badge Row */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", borderTop: "1px solid rgba(15,61,40,0.1)", paddingTop: "16px" }}>
              <span className="slide-badge" style={{ background: "rgba(15,61,40,0.08)", color: "#0F3D28" }}>🛡️ Renal Function Check</span>
              <span className="slide-badge" style={{ background: "rgba(15,61,40,0.08)", color: "#0F3D28" }}>⚠️ Hepatic Caution</span>
              <span className="slide-badge" style={{ background: "rgba(15,61,40,0.08)", color: "#0F3D28" }}>🚫 Salicylate Allergy Warning</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 8. SYNERGISTIC CARE ═══ */}
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

      {/* ═══ 9. STICKY BOTTOM FLOATING BAR ═══ */}
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
