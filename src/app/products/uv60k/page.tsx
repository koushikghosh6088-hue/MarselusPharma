"use client";

import { useState } from "react";
import Link from "next/link";

export default function UV60K() {
  const [activeTab, setActiveTab] = useState<"gut" | "women" | "bone">("gut");

  return (
    <main className="page-content atrimus-white-bg" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      <div className="container">
        
        {/* Product Hero Split */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "var(--space-12)", alignItems: "center", marginBottom: "var(--space-16)" }}>
          
          {/* Pack Artwork Column */}
          <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", textAlign: "center", borderRadius: "28px", borderTop: "4px solid #2e7fe0", background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(239, 246, 255, 0.8) 100%)" }}>
            <img src="/assets/images/3d_pharmaceutical_bottle_1786571813302.png" alt="UV 60K Pack Artwork" style={{ maxWidth: "280px", height: "auto", margin: "0 auto var(--space-6)" }} />
            <span className="slide-badge slide-badge--4" style={{ background: "rgba(46, 127, 224, 0.12)", color: "#2e7fe0", border: "1px solid rgba(46, 127, 224, 0.3)" }}>
              CHOLECALCIFEROL 60,000 IU SOFTGEL
            </span>
          </div>

          {/* Details Column */}
          <div>
            <span className="slide-badge slide-badge--4" style={{ background: "rgba(46, 127, 224, 0.12)", color: "#2e7fe0", border: "1px solid rgba(46, 127, 224, 0.3)", marginBottom: "var(--space-3)" }}>
              VITAMIN THERAPY · SOFTGEL CAPSULE
            </span>
            <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)", fontWeight: 900, color: "var(--color-navy)", lineHeight: 1.05, marginBottom: "var(--space-4)" }}>
              UV 60K
            </h1>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-gray-600)", lineHeight: "1.6", marginBottom: "var(--space-6)" }}>
              Cholecalciferol (Vitamin D3) 60,000 IU Softgel Capsule formulated for rapid correction of severe Vitamin D deficiency and sustained clinical recovery.
            </p>

            {/* Indication Selectable Tabs */}
            <div style={{ marginBottom: "var(--space-6)" }}>
              <div className="indication-tabs-row">
                <button
                  className={`indication-tab-btn ${activeTab === "gut" ? "active" : ""}`}
                  onClick={() => setActiveTab("gut")}
                >
                  Tab 1: Gut Immunity
                </button>
                <button
                  className={`indication-tab-btn ${activeTab === "women" ? "active" : ""}`}
                  onClick={() => setActiveTab("women")}
                >
                  Tab 2: Women&apos;s Wellness &amp; Fertility
                </button>
                <button
                  className={`indication-tab-btn ${activeTab === "bone" ? "active" : ""}`}
                  onClick={() => setActiveTab("bone")}
                >
                  Tab 3: Bone &amp; Muscle Health
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderRadius: "18px", transition: "all 0.2s ease" }}>
                {activeTab === "gut" && (
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "6px" }}>Gut Immunity &amp; Mucosal Recovery</h4>
                    <p style={{ fontSize: "14px", color: "var(--color-gray-600)", lineHeight: "1.6", margin: 0 }}>
                      Supports mucosal immune modulation, tight junction repair, and intestinal barrier defense during gastroenterological remission maintenance.
                    </p>
                  </div>
                )}

                {activeTab === "women" && (
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "6px" }}>Women&apos;s Wellness &amp; Endocrine Balance</h4>
                    <p style={{ fontSize: "14px", color: "var(--color-gray-600)", lineHeight: "1.6", margin: 0 }}>
                      Supports follicular maturation, insulin receptor sensitivity, and hormonal equilibrium in PCOS and fertility management protocols.
                    </p>
                  </div>
                )}

                {activeTab === "bone" && (
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "6px" }}>Musculoskeletal Integrity &amp; Bone Density</h4>
                    <p style={{ fontSize: "14px", color: "var(--color-gray-600)", lineHeight: "1.6", margin: 0 }}>
                      Optimizes intestinal calcium absorption, enhances bone mineral density, and preserves neuromuscular function.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="btn-connected-group">
              <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#2e7fe0", border: "none" }}>
                Request Prescribing Guide →
              </Link>
              <Link href="/products" className="btn-connected-pill btn-connected-pill--secondary">
                View All Products
              </Link>
            </div>

          </div>

        </div>

        {/* Composition & Compliance Notice */}
        <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", borderRadius: "24px" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-4)" }}>
            Composition &amp; Healthcare Professional Disclaimer
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)" }}>
            <div>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-navy)", marginBottom: "4px" }}>Active Ingredient:</p>
              <p style={{ fontSize: "14px", color: "var(--color-gray-600)" }}>Cholecalciferol (Vitamin D3) 60,000 IU Softgel Capsule</p>
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "var(--color-gray-500)", lineHeight: "1.5" }}>
                *This information is intended exclusively for registered medical practitioners and healthcare professionals. Please refer to full prescribing information before administration.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
