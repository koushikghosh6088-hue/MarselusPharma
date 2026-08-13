"use client";

import Link from "next/link";
import SpineTab from "@/components/SpineTab";

export default function ArtemesMasterPage() {
  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: 0, background: "var(--color-cream)" }}>
      
      {/* ═══ SECTION 1: HERO (PRODUCT PHOTO + POSITIONING) ═══ */}
      <section className="monograph-section spine-tab-container" style={{ background: "linear-gradient(135deg, #0F3D28 0%, #1D9E75 100%)", color: "#ffffff", padding: "var(--space-16) 0" }}>
        <SpineTab label="ARTEMES™ — 5-ASA MONOGRAPH" />

        <div className="container">
          <div className="grid-split">
            
            {/* Left Column: Copy & Positioning */}
            <div>
              <span className="eyebrow-badge" style={{ background: "rgba(132, 204, 22, 0.2)", color: "#84CC16", borderColor: "rgba(132, 204, 22, 0.4)", marginBottom: "var(--space-4)" }}>
                GASTROENTEROLOGY · PROLONGED RELEASE
              </span>
              
              <h1 style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", marginBottom: "var(--space-2)", color: "#ffffff" }}>
                ARTEMES<span style={{ fontSize: "1.5rem", verticalAlign: "super", color: "#84CC16" }}>™</span>
              </h1>
              
              <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "#84CC16", marginBottom: "var(--space-4)" }}>
                Mesalamine Prolonged Release Tablets IP 1.2 g
              </p>

              <p style={{ fontSize: "var(--text-xl)", color: "rgba(255, 255, 255, 0.9)", lineHeight: "1.65", marginBottom: "var(--space-6)" }}>
                Targeted 5-ASA therapy for appropriately selected patients with mild-to-moderate ulcerative colitis.
              </p>

              <div className="composition-pill-list" style={{ marginBottom: "var(--space-8)" }}>
                <span className="composition-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}>✓ Mesalamine 1.2 g</span>
                <span className="composition-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}>✓ Prolonged Release Enteric Matrix</span>
                <span className="composition-pill" style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}>✓ Once-Daily Dosing</span>
              </div>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#84CC16", color: "#0F3D28", fontWeight: 800 }}>
                  Prescribing Information →
                </Link>
                <span className="verify-tag" style={{ background: "rgba(255, 255, 255, 0.1)", color: "#ffffff", borderColor: "rgba(255, 255, 255, 0.3)" }}>
                  HERITAGE OF HEALING
                </span>
              </div>
            </div>

            {/* Right Column: Actual ARTEMES Product Photo Stage */}
            <div style={{ textAlign: "center" }}>
              <div style={{ background: "rgba(255, 255, 255, 0.08)", backdropFilter: "blur(12px)", borderRadius: "32px", padding: "var(--space-8)", border: "1px solid rgba(255, 255, 255, 0.15)", textAlign: "center" }}>
                <img src="/assets/images/atrimus-capsule.png" alt="ARTEMES 1.2g Pack & Tablet" style={{ width: "85%", height: "auto", maxHeight: "240px", objectFit: "contain", margin: "0 auto", filter: "drop-shadow(0 20px 35px rgba(0,0,0,0.35))" }} />
                <div style={{ marginTop: "var(--space-4)", display: "flex", justifyContent: "center", gap: "8px" }}>
                  <span className="slide-badge" style={{ fontSize: "11px", background: "rgba(132, 204, 22, 0.25)", color: "#ffffff" }}>Actual Pack Artwork</span>
                  <span className="slide-badge" style={{ fontSize: "11px", background: "rgba(255, 255, 255, 0.15)", color: "#ffffff" }}>Targeted Colonic Delivery</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: DISEASE / HEALTH NEED (UNDERSTANDING ULCERATIVE COLITIS) ═══ */}
      <section className="monograph-section">
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#1D9E75" }}>DISEASE OVERVIEW &amp; HEALTH NEED</span>
            <h2 style={{ fontSize: "2rem", marginBottom: "var(--space-4)" }}>Understanding Ulcerative Colitis (UC)</h2>
            
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-6)" }}>
              Ulcerative colitis is a chronic inflammatory bowel disease affecting the colon and rectum, characterized by mucosal inflammation, intestinal ulceration, rectal bleeding, and persistent diarrhea.
            </p>

            {/* Disease Progression Infographic Stage */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginTop: "var(--space-6)" }}>
              <div style={{ background: "var(--color-cream-light)", padding: "20px", borderRadius: "16px", borderLeft: "4px solid #1D9E75" }}>
                <strong style={{ color: "#0F3D28", display: "block", marginBottom: "4px" }}>1. Mucosal Inflammation</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Immune-mediated leukotriene and prostaglandin elevation in the colonic epithelium.</p>
              </div>

              <div style={{ background: "var(--color-cream-light)", padding: "20px", borderRadius: "16px", borderLeft: "4px solid #84CC16" }}>
                <strong style={{ color: "#0F3D28", display: "block", marginBottom: "4px" }}>2. Epithelial Injury</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Loss of intestinal tight junction integrity, mucosal erosion, and ulcer formation.</p>
              </div>

              <div style={{ background: "var(--color-cream-light)", padding: "20px", borderRadius: "16px", borderLeft: "4px solid #D6438C" }}>
                <strong style={{ color: "#0F3D28", display: "block", marginBottom: "4px" }}>3. Clinical Symptoms</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Rectal bleeding, stool urgency, abdominal cramping, and systemic fatigue.</p>
              </div>

              <div style={{ background: "var(--color-cream-light)", padding: "20px", borderRadius: "16px", borderLeft: "4px solid #0F3D28" }}>
                <strong style={{ color: "#0F3D28", display: "block", marginBottom: "4px" }}>4. Therapeutic Goal</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Induction and long-term maintenance of mucosal healing and clinical remission.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: SCIENTIFIC STORY (A-R-T-E-M-E-S INFOGRAPHIC) ═══ */}
      <section className="monograph-section" style={{ background: "var(--color-cream-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto var(--space-8)" }}>
            <span className="eyebrow-label" style={{ color: "#1D9E75" }}>BRAND COMMUNICATION MNEMONIC</span>
            <h2>ARTEMES<span style={{ fontSize: "1.2rem" }}>™</span> <span className="italic-accent">Scientific Story</span></h2>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)" }}>
              <em>Note: The A-R-T-E-M-E-S mnemonic represents a promotional brand communication story and is not the generic full form of mesalamine.</em>
            </p>
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

            <div className="mnemonic-item" style={{ gridColumn: "span 1" }}>
              <div className="mnemonic-letter">S</div>
              <strong style={{ color: "#0F3D28", display: "block", marginBottom: "4px" }}>Simplified Therapy</strong>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>Convenient once-daily dosing regimen for patient compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: COMPOSITION TABLE ═══ */}
      <section className="monograph-section">
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#1D9E75" }}>FORMULATION BREAKDOWN</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Ingredient &amp; Strength Specification</h2>
            
            <table className="ingredient-table">
              <thead>
                <tr>
                  <th>Active Ingredient</th>
                  <th>Pharmacological Strength</th>
                  <th>Dosage Form</th>
                  <th>Delivery Matrix</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Mesalamine IP (5-Aminosalicylic Acid)</strong></td>
                  <td>1.2 g (1200 mg) per tablet</td>
                  <td>Prolonged Release Tablet IP</td>
                  <td>Enteric Coated Multi-Matrix Polymer</td>
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
            <span className="eyebrow-label" style={{ color: "#1D9E75" }}>SCIENTIFIC MECHANISM</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>How Mesalamine Works in Ulcerative Colitis</h2>
            
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-6)" }}>
              Oral Mesalamine (5-ASA) acts topically on colonic epithelial cells to inhibit cyclooxygenase (COX) and lipoxygenase (LOX) pathways, reducing local prostaglandin and leukotriene B4 synthesis.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
              <div style={{ background: "rgba(15, 61, 40, 0.04)", padding: "20px", borderRadius: "16px" }}>
                <strong style={{ color: "#0F3D28" }}>Step 1: Oral Administration</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>Enteric coating protects active 5-ASA through gastric acidic pH.</p>
              </div>

              <div style={{ background: "rgba(15, 61, 40, 0.04)", padding: "20px", borderRadius: "16px" }}>
                <strong style={{ color: "#0F3D28" }}>Step 2: Colonic Dissolution</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>Triggers prolonged drug release in distal ileum &amp; colon (pH &gt; 6.8).</p>
              </div>

              <div style={{ background: "rgba(15, 61, 40, 0.04)", padding: "20px", borderRadius: "16px" }}>
                <strong style={{ color: "#0F3D28" }}>Step 3: Topical Anti-Inflammatory</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>Direct mucosal scavenging of reactive oxygen species (ROS).</p>
              </div>

              <div style={{ background: "rgba(15, 61, 40, 0.04)", padding: "20px", borderRadius: "16px" }}>
                <strong style={{ color: "#0F3D28" }}>Step 4: Disease Control</strong>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: "4px 0 0 0" }}>Reduction in bleeding, stool frequency, and colonic mucosal damage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6: CLINICAL / NUTRITIONAL ROLE ═══ */}
      <section className="monograph-section">
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#1D9E75" }}>CLINICAL POSITIONING</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Physician-Directed Therapeutic Role</h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.7" }}>
              ARTEMES™ is indicated for physician-directed use in appropriately selected patients with mild-to-moderate ulcerative colitis. Therapeutic objectives include the induction and long-term maintenance of clinical and endoscopic mucosal remission.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7: EVIDENCE & GUIDELINES ═══ */}
      <section className="monograph-section" style={{ background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="monograph-card">
            <span className="eyebrow-label" style={{ color: "#1D9E75" }}>CLINICAL EVIDENCE &amp; GUIDELINES</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Evidence-Informed Practice</h2>
            
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-6)" }}>
              Current American College of Gastroenterology (ACG) guidelines recognize 5-ASA therapy as a foundational first-line option in appropriately selected mild-to-moderate ulcerative colitis. Once-daily oral dosing regimens may be utilized when clinically appropriate to enhance long-term treatment adherence.
            </p>

            <div style={{ padding: "16px 20px", background: "rgba(29, 158, 117, 0.1)", borderRadius: "12px", borderLeft: "4px solid #1D9E75" }}>
              <strong style={{ fontSize: "0.9rem", color: "#0F3D28", display: "block" }}>Reference Citation:</strong>
              <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                Rubin DT, et al. ACG Clinical Guideline: Ulcerative Colitis in Adults. <em>Am J Gastroenterol.</em> 2019;114(3):384-413.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8: USE & SAFETY ═══ */}
      <section className="monograph-section">
        <div className="container">
          <div className="monograph-card" style={{ borderLeft: "5px solid #0F3D28" }}>
            <span className="eyebrow-label" style={{ color: "#0F3D28" }}>PRESCRIBING SAFETY &amp; PRECAUTIONS</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Use, Dosage &amp; Safety Profile</h2>
            
            <ul style={{ paddingLeft: "20px", color: "var(--color-text-muted)", lineHeight: "1.7", fontSize: "0.95rem" }}>
              <li style={{ marginBottom: "8px" }}><strong>Dosage:</strong> As directed by the attending physician. Refer to approved package insert.</li>
              <li style={{ marginBottom: "8px" }}><strong>Renal Considerations:</strong> Renal function (serum creatinine, eGFR) should be evaluated prior to initiation and periodically during therapy. Use with caution in known renal impairment.</li>
              <li style={{ marginBottom: "8px" }}><strong>Hepatic Considerations:</strong> Caution is advised in patients with impaired hepatic function.</li>
              <li style={{ marginBottom: "8px" }}><strong>Contraindications:</strong> Hypersensitivity to mesalamine, salicylates, or any excipients.</li>
              <li style={{ marginBottom: "8px" }}><strong>Adverse Effects:</strong> Headache, abdominal pain, nausea, diarrhea, and rare hypersensitivity reactions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9: CLOSING & STATUTORY DISCLAIMER ═══ */}
      <section className="monograph-section" style={{ background: "#0F3D28", color: "#ffffff", padding: "var(--space-12) 0", textAlign: "center" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <img src="/assets/images/atrimus-capsule.png" alt="ARTEMES 1.2g Pack" style={{ width: "120px", height: "auto", margin: "0 auto var(--space-4)", filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.4))" }} />
          
          <h3 style={{ fontSize: "1.75rem", color: "#ffffff", marginBottom: "4px" }}>
            MARSELUS PHARMACEUTICALS PVT. LTD.
          </h3>
          <span style={{ fontSize: "0.9rem", color: "#84CC16", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            HERITAGE OF HEALING
          </span>

          <p style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.75)", maxWidth: "70ch", margin: "var(--space-6) auto 0 auto", lineHeight: "1.6" }}>
            The information presented is intended for healthcare-professional and general educational purposes and should not be construed as a substitute for professional medical advice, diagnosis, or treatment. Use products strictly according to applicable prescribing and regulatory label requirements.
          </p>
        </div>
      </section>

    </main>
  );
}
