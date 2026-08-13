"use client";

import { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";
import AnnotationLeader from "@/components/AnnotationLeader";

export default function ArtemesPage() {
  const [activeSection, setActiveSection] = useState<"overview" | "pharmacology" | "evidence">("overview");

  return (
    <main className="page-content section-tint--artemes" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      
      {/* ═══ 1. HERO SHOWCASE WITH FLOATING 3D RENDER ═══ */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="ARTEMES 1.2G — MONOGRAPH" />

        <div className="container">
          <div className="grid-split">
            
            {/* Left 3D Stage Render */}
            <div>
              <div className="atrimus-glass-card" style={{ padding: "var(--space-10)", background: "#ffffff", borderRadius: "32px", textAlign: "center", border: "1px solid rgba(29, 158, 117, 0.2)", boxShadow: "0 20px 40px rgba(29, 158, 117, 0.12)" }}>
                <div style={{ position: "relative", width: "100%", height: "260px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ position: "absolute", width: "180px", height: "180px", borderRadius: "50%", background: "var(--color-artemes)", filter: "blur(60px)", opacity: 0.2, pointerEvents: "none" }}></div>
                  <img src="/assets/images/atrimus-capsule.png" alt="ARTEMES 1.2g Pack & Tablet Render" style={{ width: "85%", height: "auto", maxHeight: "220px", objectFit: "contain", filter: "drop-shadow(0 16px 25px rgba(15, 61, 40, 0.15))" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "var(--space-4)", flexWrap: "wrap" }}>
                  <span className="eyebrow-badge" style={{ color: "var(--color-artemes)", borderColor: "rgba(29, 158, 117, 0.3)" }}>
                    Targeted Colonic Dissolution
                  </span>
                  <span className="eyebrow-badge" style={{ color: "var(--color-forest)", borderColor: "rgba(15, 61, 40, 0.2)" }}>
                    WHO-GMP Certified
                  </span>
                </div>
              </div>
            </div>

            {/* Right Product Copy & Badges */}
            <div>
              <span className="slide-badge" style={{ background: "rgba(29, 158, 117, 0.15)", color: "var(--color-artemes)", marginBottom: "var(--space-4)" }}>
                GASTROENTEROLOGY · PROLONGED RELEASE
              </span>
              
              <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4rem)", marginBottom: "var(--space-2)", color: "var(--color-forest)" }}>
                ARTEMES <small style={{ fontSize: "1.3rem", color: "var(--color-artemes)" }}>1.2g</small>
              </h1>
              
              <p style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--color-forest)", marginBottom: "var(--space-4)" }}>
                Composition: Mesalamine 1.2 g Prolonged Release Tablets
              </p>

              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.65", marginBottom: "var(--space-6)" }}>
                ARTEMES is a prolonged-release colonic targeted mesalamine formulation engineered for the induction and long-term maintenance of remission in mild-to-moderate ulcerative colitis.
              </p>

              {/* Composition Pill Badges */}
              <div className="composition-pill-list" style={{ marginBottom: "var(--space-6)" }}>
                <span className="composition-pill">✓ Active: Mesalamine 1.2g</span>
                <span className="composition-pill">✓ Colonic Target Matrix</span>
                <span className="composition-pill">✓ Enteric Coated Precision</span>
                <span className="composition-pill">✓ Minimal Systemic Exposure</span>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-artemes)", color: "#ffffff" }}>
                  Request Prescribing Sample →
                </Link>
                <span className="verify-tag" title="Confirm pricing before publication">[VERIFY: Pricing Rs. 33/tab]</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 2. INTERACTIVE MONOGRAPH DATA TABS ═══ */}
      <section className="section" style={{ padding: "var(--space-12) 0" }}>
        <div className="container">
          
          {/* Tab Navigation */}
          <div className="indication-tabs-row" style={{ justifyContent: "center", marginBottom: "var(--space-8)" }}>
            <button 
              className={`indication-tab-btn ${activeSection === "overview" ? "active" : ""}`}
              onClick={() => setActiveSection("overview")}
              style={{ background: activeSection === "overview" ? "var(--color-artemes)" : "" }}
            >
              Therapeutic Indications &amp; Usage
            </button>
            <button 
              className={`indication-tab-btn ${activeSection === "pharmacology" ? "active" : ""}`}
              onClick={() => setActiveSection("pharmacology")}
              style={{ background: activeSection === "pharmacology" ? "var(--color-artemes)" : "" }}
            >
              Drug Delivery Mechanism &amp; Kinetics
            </button>
            <button 
              className={`indication-tab-btn ${activeSection === "evidence" ? "active" : ""}`}
              onClick={() => setActiveSection("evidence")}
              style={{ background: activeSection === "evidence" ? "var(--color-artemes)" : "" }}
            >
              Clinical Data &amp; Safety Profile
            </button>
          </div>

          {/* Section 1: Overview */}
          {activeSection === "overview" && (
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-10)", background: "#ffffff", borderRadius: "28px" }}>
              <span className="eyebrow-label" style={{ color: "var(--color-artemes)" }}>CLINICAL INDICATIONS</span>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Ulcerative Colitis Remission &amp; Healing</h3>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-6)", marginBottom: "var(--space-8)" }}>
                <div style={{ padding: "var(--space-6)", background: "var(--color-artemes-soft)", borderRadius: "var(--radius-lg)" }}>
                  <h4 style={{ color: "var(--color-artemes)", marginBottom: "4px" }}>Remission Induction</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", margin: 0 }}>Rapid reduction in rectal bleeding, stool frequency, and colonic mucosal inflammation.</p>
                </div>
                <div style={{ padding: "var(--space-6)", background: "var(--color-artemes-soft)", borderRadius: "var(--radius-lg)" }}>
                  <h4 style={{ color: "var(--color-artemes)", marginBottom: "4px" }}>Maintenance of Remission</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", margin: 0 }}>Sustained epithelial integrity preventing clinical flare-ups over long-term therapy.</p>
                </div>
              </div>

              <AnnotationLeader title="Site-Specific Colonic Action" description="Enteric coated matrix prevents upper GI dissolution, releasing active mesalamine directly at colonic pH (>6.8)." accentColor="var(--color-artemes)" />
              <AnnotationLeader title="Mucosal Barrier Restitution" description="Inhibits cyclooxygenase and lipoxygenase pathways in inflamed intestinal mucosa." accentColor="var(--color-artemes)" />
            </div>
          )}

          {/* Section 2: Pharmacology */}
          {activeSection === "pharmacology" && (
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-10)", background: "#ffffff", borderRadius: "28px" }}>
              <span className="eyebrow-label" style={{ color: "var(--color-artemes)" }}>PHARMACOKINETICS & RELEASE</span>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Multi-Matrix Polymer Precision</h3>
              
              <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                ARTEMES uses a specialized enteric-coated polymer matrix that delays dissolution until the tablet encounters the distal ileum and colon.
              </p>

              <div style={{ background: "var(--color-cream-light)", padding: "var(--space-6)", borderRadius: "var(--radius-lg)", marginBottom: "var(--space-6)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ fontWeight: 700, fontSize: "0.85rem" }}>Targeted Colonic Release Concentration</span>
                  <span style={{ fontWeight: 800, color: "var(--color-artemes)" }}>High Colonic Site Density</span>
                </div>
                <div style={{ width: "100%", height: "8px", background: "rgba(15, 61, 40, 0.1)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{ width: "92%", height: "100%", background: "var(--color-artemes)", borderRadius: "4px" }}></div>
                </div>
              </div>

              <AnnotationLeader title="Enteric pH Trigger (pH > 6.8)" description="Resists gastric acid in stomach and upper small intestine for site-specific delivery." accentColor="var(--color-artemes)" />
              <AnnotationLeader title="Low Systemic Absorption" description="Minimizes systemic blood levels, lowering renal and systemic adverse effect risks." accentColor="var(--color-artemes)" />
            </div>
          )}

          {/* Section 3: Evidence */}
          {activeSection === "evidence" && (
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-10)", background: "#ffffff", borderRadius: "28px" }}>
              <span className="eyebrow-label" style={{ color: "var(--color-artemes)" }}>CLINICAL TRIALS</span>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Clinical Evidence &amp; Monograph References</h3>
              
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                Published multicenter clinical trials demonstrate high efficacy in clinical remission and mucosal healing timelines for 1.2g daily mesalamine formulations.
              </p>

              <div style={{ padding: "var(--space-4) var(--space-6)", background: "rgba(29, 158, 117, 0.1)", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--color-artemes)", marginBottom: "var(--space-6)" }}>
                <span className="verify-tag" style={{ margin: 0 }}>Full clinical reference citations under medical/regulatory sign-off prior to public publication.</span>
              </div>

              <div style={{ padding: "var(--space-4) var(--space-6)", background: "rgba(15, 61, 40, 0.05)", borderRadius: "var(--radius-md)" }}>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>
                  <em>Disclaimer: For healthcare professionals. Please refer to full prescribing information before use.</em>
                </p>
              </div>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}
