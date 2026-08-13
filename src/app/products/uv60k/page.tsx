"use client";

import { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";
import AnnotationLeader from "@/components/AnnotationLeader";

export default function UV60KPage() {
  const [activeTab, setActiveTab] = useState<"gut" | "women" | "bone">("gut");

  return (
    <main className="page-content section-tint--uv60k" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      
      {/* Hero Banner with Spine Tab */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="UV 60K — HIGH POTENCY VITAMIN D3" />

        <div className="container">
          <div className="grid-split">
            
            {/* Left Column: Pack Artwork */}
            <div>
              <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)", textAlign: "center" }}>
                <img src="/assets/images/3d-pharma-bottle.png" alt="UV 60K Softgel Render" style={{ width: "70%", height: "auto", margin: "0 auto var(--space-4)" }} />
                <span className="eyebrow-badge" style={{ color: "var(--color-uv60k)", borderColor: "rgba(46, 127, 224, 0.3)" }}>
                  60,000 IU High-Potency Softgel
                </span>
              </div>
            </div>

            {/* Right Column: Composition & Overview */}
            <div>
              <span className="slide-badge" style={{ background: "rgba(46, 127, 224, 0.15)", color: "var(--color-uv60k)", marginBottom: "var(--space-4)" }}>
                VITAMIN THERAPY · SOFTGEL CAPSULE
              </span>
              <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)", marginBottom: "var(--space-2)", color: "var(--color-forest)" }}>
                UV 60K
              </h1>
              <p style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-forest)", marginBottom: "var(--space-4)" }}>
                Composition: Cholecalciferol (Vitamin D3) 60,000 IU Softgel Capsule
              </p>

              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                <strong>What it is:</strong> A high-potency Vitamin D3 softgel for rapid correction of severe deficiency.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Selectable Indication Tabs Section */}
      <section className="section" style={{ padding: "var(--space-12) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto var(--space-8)" }}>
            <span className="eyebrow-label" style={{ color: "var(--color-uv60k)" }}>INDICATION MODULES</span>
            <h2>Therapeutic <span className="italic-accent" style={{ color: "var(--color-uv60k)" }}>Contexts.</span></h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)" }}>
              Select an indication tab to view relevant scientific context and clinical applications.
            </p>
          </div>

          {/* Interactive Indication Tab Controls */}
          <div className="indication-tabs-row" style={{ justifyContent: "center" }}>
            <button 
              className={`indication-tab-btn ${activeTab === "gut" ? "active" : ""}`}
              onClick={() => setActiveTab("gut")}
            >
              Tab 1 — Gut Immunity &amp; Mucosa
            </button>
            <button 
              className={`indication-tab-btn ${activeTab === "women" ? "active" : ""}`}
              onClick={() => setActiveTab("women")}
            >
              Tab 2 — Women&apos;s Wellness &amp; Fertility
            </button>
            <button 
              className={`indication-tab-btn ${activeTab === "bone" ? "active" : ""}`}
              onClick={() => setActiveTab("bone")}
            >
              Tab 3 — Bone &amp; Muscle Health
            </button>
          </div>

          {/* Tab 1 Content: Gut Immunity */}
          {activeTab === "gut" && (
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)" }}>
              <span className="eyebrow-label" style={{ color: "var(--color-uv60k)" }}>GUT IMMUNITY CONTEXT</span>
              <h3 style={{ marginBottom: "var(--space-4)" }}>Gut Immunity &amp; Mucosal Barrier Healing</h3>
              <AnnotationLeader title="Intestinal Tight Junction Integrity" description="Vitamin D receptor activation upregulates claudin and occludin expression along mucosal barrier." accentColor="var(--color-uv60k)" />
              <AnnotationLeader title="IBD Anti-Inflammatory Modulation" description="Suppresses pro-inflammatory cytokines while supporting regulatory T-cell response in colonic mucosa." accentColor="var(--color-uv60k)" />
              <span className="verify-tag" style={{ marginTop: "12px" }}>Tab claim approved independently</span>
            </div>
          )}

          {/* Tab 2 Content: Women's Wellness */}
          {activeTab === "women" && (
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)" }}>
              <span className="eyebrow-label" style={{ color: "var(--color-uv60k)" }}>WOMEN'S WELLNESS CONTEXT</span>
              <h3 style={{ marginBottom: "var(--space-4)" }}>Women&apos;s Wellness &amp; Endocrine Balance</h3>
              <AnnotationLeader title="PCOS Endocrine & Ovarian Function" description="Complements inositol therapy by modulating androgen synthesis and insulin sensitivity." accentColor="var(--color-uv60k)" />
              <AnnotationLeader title="Follicular Maturation Support" description="Essential for optimal oocyte development and reproductive endocrine equilibrium." accentColor="var(--color-uv60k)" />
              <span className="verify-tag" style={{ marginTop: "12px" }}>Tab claim approved independently</span>
            </div>
          )}

          {/* Tab 3 Content: Bone & Muscle Health */}
          {activeTab === "bone" && (
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)" }}>
              <span className="eyebrow-label" style={{ color: "var(--color-uv60k)" }}>BONE & MUSCLE CONTEXT</span>
              <h3 style={{ marginBottom: "var(--space-4)" }}>Bone Mineralization &amp; Musculoskeletal Function</h3>
              <AnnotationLeader title="Calcium & Phosphate Homeostasis" description="Stimulates intestinal calcium absorption and maintains physiological serum calcium levels." accentColor="var(--color-uv60k)" />
              <AnnotationLeader title="Neuromuscular Strength & Stability" description="Supports muscle fiber protein synthesis and reduces risk of osteomalacia and fatigue." accentColor="var(--color-uv60k)" />
              <span className="verify-tag" style={{ marginTop: "12px" }}>Tab claim approved independently</span>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}
