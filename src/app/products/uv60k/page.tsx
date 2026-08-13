"use client";

import { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";
import AnnotationLeader from "@/components/AnnotationLeader";

export default function UV60KPage() {
  const [activeTab, setActiveTab] = useState<"gut" | "women" | "bone">("gut");

  return (
    <main className="page-content section-tint--uv60k" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      
      {/* ═══ 1. HERO SHOWCASE ═══ */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="UV 60K — HIGH POTENCY VITAMIN D3" />

        <div className="container">
          <div className="grid-split">
            
            {/* Left 3D Stage Render */}
            <div>
              <div className="atrimus-glass-card" style={{ padding: "var(--space-10)", background: "#ffffff", borderRadius: "32px", textAlign: "center", border: "1px solid rgba(46, 127, 224, 0.2)", boxShadow: "0 20px 40px rgba(46, 127, 224, 0.12)" }}>
                <div style={{ position: "relative", width: "100%", height: "260px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ position: "absolute", width: "180px", height: "180px", borderRadius: "50%", background: "var(--color-uv60k)", filter: "blur(60px)", opacity: 0.2, pointerEvents: "none" }}></div>
                  <img src="/assets/images/3d-pharma-bottle.png" alt="UV 60K 3D Render" style={{ width: "85%", height: "auto", maxHeight: "220px", objectFit: "contain", filter: "drop-shadow(0 16px 25px rgba(46, 127, 224, 0.2))" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "var(--space-4)", flexWrap: "wrap" }}>
                  <span className="eyebrow-badge" style={{ color: "var(--color-uv60k)", borderColor: "rgba(46, 127, 224, 0.3)" }}>
                    60,000 IU Cholecalciferol
                  </span>
                  <span className="eyebrow-badge" style={{ color: "var(--color-forest)", borderColor: "rgba(15, 61, 40, 0.2)" }}>
                    High-Bioavailability Softgel
                  </span>
                </div>
              </div>
            </div>

            {/* Right Product Copy */}
            <div>
              <span className="slide-badge" style={{ background: "rgba(46, 127, 224, 0.15)", color: "var(--color-uv60k)", marginBottom: "var(--space-4)" }}>
                VITAMIN THERAPY · SOFTGEL CAPSULE
              </span>
              
              <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4rem)", marginBottom: "var(--space-2)", color: "var(--color-forest)" }}>
                UV 60K
              </h1>
              
              <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-forest)", marginBottom: "var(--space-4)" }}>
                Composition: Cholecalciferol (Vitamin D3) 60,000 IU Softgel Capsule
              </p>

              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.65", marginBottom: "var(--space-6)" }}>
                UV 60K is a high-potency softgel formulation developed for rapid clinical correction of severe Vitamin D deficiency across gastroenterology, women&apos;s health, and bone health contexts.
              </p>

              <div className="composition-pill-list" style={{ marginBottom: "var(--space-6)" }}>
                <span className="composition-pill">✓ Cholecalciferol 60,000 IU</span>
                <span className="composition-pill">✓ Rapid Correction Dose</span>
                <span className="composition-pill">✓ Softgel Bioavailability</span>
                <span className="composition-pill">✓ Weekly Clinical Dosing</span>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-uv60k)", color: "#ffffff" }}>
                  Request Prescribing Monograph →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 2. SELECTABLE INDICATION TABS ═══ */}
      <section className="section" style={{ padding: "var(--space-12) 0" }}>
        <div className="container">
          
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto var(--space-8)" }}>
            <span className="eyebrow-label" style={{ color: "var(--color-uv60k)" }}>INDICATION MODULES</span>
            <h2>Selectable Therapeutic <span className="italic-accent" style={{ color: "var(--color-uv60k)" }}>Contexts.</span></h2>
          </div>

          <div className="indication-tabs-row" style={{ justifyContent: "center", marginBottom: "var(--space-8)" }}>
            <button 
              className={`indication-tab-btn ${activeTab === "gut" ? "active" : ""}`}
              onClick={() => setActiveTab("gut")}
              style={{ background: activeTab === "gut" ? "var(--color-uv60k)" : "" }}
            >
              Tab 1 — Gut Immunity &amp; Mucosa
            </button>
            <button 
              className={`indication-tab-btn ${activeTab === "women" ? "active" : ""}`}
              onClick={() => setActiveTab("women")}
              style={{ background: activeTab === "women" ? "var(--color-uv60k)" : "" }}
            >
              Tab 2 — Women&apos;s Wellness &amp; Fertility
            </button>
            <button 
              className={`indication-tab-btn ${activeTab === "bone" ? "active" : ""}`}
              onClick={() => setActiveTab("bone")}
              style={{ background: activeTab === "bone" ? "var(--color-uv60k)" : "" }}
            >
              Tab 3 — Bone &amp; Muscle Health
            </button>
          </div>

          {activeTab === "gut" && (
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-10)", background: "#ffffff", borderRadius: "28px" }}>
              <span className="eyebrow-label" style={{ color: "var(--color-uv60k)" }}>TAB 1 · GUT IMMUNITY</span>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Intestinal Mucosal Immunity</h3>
              <AnnotationLeader title="Tight Junction Claudin Upregulation" description="Vitamin D receptor activation upregulates claudin and occludin expression along intestinal mucosa." accentColor="var(--color-uv60k)" />
              <AnnotationLeader title="IBD Anti-Inflammatory Regulation" description="Modulates pro-inflammatory cytokines while supporting regulatory T-cell response in colonic tissue." accentColor="var(--color-uv60k)" />
              <div style={{ marginTop: "12px" }}>
                <span className="verify-tag">Tab claim approved independently</span>
              </div>
            </div>
          )}

          {activeTab === "women" && (
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-10)", background: "#ffffff", borderRadius: "28px" }}>
              <span className="eyebrow-label" style={{ color: "var(--color-uv60k)" }}>TAB 2 · WOMEN'S WELLNESS</span>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Endocrine &amp; Ovarian Function</h3>
              <AnnotationLeader title="PCOS Endocrine Synergy" description="Complements inositol therapy by modulating androgen synthesis and cellular insulin sensitivity." accentColor="var(--color-uv60k)" />
              <AnnotationLeader title="Follicular Maturation Support" description="Essential for oocyte quality and reproductive endocrine homeostasis." accentColor="var(--color-uv60k)" />
              <div style={{ marginTop: "12px" }}>
                <span className="verify-tag">Tab claim approved independently</span>
              </div>
            </div>
          )}

          {activeTab === "bone" && (
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-10)", background: "#ffffff", borderRadius: "28px" }}>
              <span className="eyebrow-label" style={{ color: "var(--color-uv60k)" }}>TAB 3 · BONE & MUSCLE</span>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>Calcium Homeostasis &amp; Strength</h3>
              <AnnotationLeader title="Intestinal Calcium Absorption" description="Stimulates active calcium transport proteins across intestinal enterocytes." accentColor="var(--color-uv60k)" />
              <AnnotationLeader title="Neuromuscular Stability" description="Supports muscle cell protein synthesis, reducing fatigue and musculoskeletal weakness." accentColor="var(--color-uv60k)" />
              <div style={{ marginTop: "12px" }}>
                <span className="verify-tag">Tab claim approved independently</span>
              </div>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}
