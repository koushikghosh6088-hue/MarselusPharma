"use client";

import { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";

type CategoryFilter = "ALL" | "GASTRO" | "WOMEN" | "NUTRITION" | "VITAMIN";

export default function ProductsMasterCataloguePage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("ALL");

  const products = [
    {
      id: "artemes",
      name: "ARTEMES™",
      tag: "GASTROENTEROLOGY · PROLONGED RELEASE",
      category: "GASTRO",
      generic: "Mesalamine Prolonged Release Tablets IP 1.2 g",
      pills: ["Mesalamine 1.2g", "Colonic Release Matrix", "Once-Daily Dosing"],
      positioning: "Targeted 5-ASA therapy for appropriately selected mild-to-moderate ulcerative colitis.",
      brandColors: { primary: "#0F3D28", accent: "#84CC16", teal: "#1D9E75" },
      image: "/assets/images/atrimus-capsule.png",
      link: "/products/artemes",
      mnemonic: "A-R-T-E-M-E-S Brand Communication Mnemonic",
    },
    {
      id: "saranya",
      name: "SARANYA®",
      tag: "WOMEN'S HEALTH · 40:1 INOSITOL TABLETS",
      category: "WOMEN",
      generic: "Myo-Inositol + D-Chiro Inositol + Chromium Picolinate + Vitamin D2 Tablets",
      pills: ["Myo-Inositol 1100mg", "D-Chiro 27.6mg (~40:1)", "Pink Strip Pack"],
      positioning: "A balanced nutritional approach to women's metabolic & reproductive wellness in PCOS care.",
      brandColors: { primary: "#1E3A8A", accent: "#D6438C", rose: "#F472B6" },
      image: "/assets/images/womens-therapy.png",
      link: "/products/saranya",
      mnemonic: "Supplied in Pink Strip Pack (Not a sachet/Alu-Alu)",
    },
    {
      id: "immunomars",
      name: "IMMUNOMARS™",
      tag: "CLINICAL NUTRITION · 15G SACHET",
      category: "NUTRITION",
      generic: "L-Glutamine + L-Arginine + L-Lysine + Vitamins + Zinc + Selenium Sachets",
      pills: ["L-Glutamine 10g (Hero)", "L-Arginine 1.5g", "Real Sachet Format"],
      positioning: "Advanced immunonutrition & targeted amino acid support in clinical nutrition settings.",
      brandColors: { primary: "#F97316", accent: "#1E3A8A", amber: "#E08A2E" },
      image: "/assets/images/nutrition-therapy.png",
      link: "/products/immunomars",
      mnemonic: "Orange Flavour · Sugar Free 15g Sachet",
    },
    {
      id: "uv60k",
      name: "UV 60K",
      tag: "VITAMIN THERAPY · HIGH-STRENGTH SOFTGEL",
      category: "VITAMIN",
      generic: "Cholecalciferol 60,000 IU Softgel Capsules",
      pills: ["Cholecalciferol 60,000 IU", "Softgel Bioavailability", "Weekly Dosing"],
      positioning: "High-strength Vitamin D3 supplementation for clinical deficiency correction & calcium homeostasis.",
      brandColors: { primary: "#2E7FE0", accent: "#EAB308", blue: "#2E7FE0" },
      image: "/assets/images/3d-pharma-bottle.png",
      link: "/products/uv60k",
      mnemonic: "ASSESS → CORRECT → REASSESS → MAINTAIN Pathway",
    },
  ];

  const filteredProducts = activeFilter === "ALL" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)", background: "var(--color-cream)" }}>
      
      {/* ═══ 1. HERO SHOWCASE & CATALOGUE HEADER ═══ */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="MARSELUS SPECIALITY PORTFOLIO" />

        <div className="container">
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow-badge" style={{ marginBottom: "var(--space-4)" }}>
              ✦ SPECIALITY PHARMACEUTICAL PORTFOLIO
            </span>
            <h1 style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", marginBottom: "var(--space-4)" }}>
              Precision Formulations.<br />
              <span className="italic-accent">Heritage of Healing.</span>
            </h1>
            <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-muted)", lineHeight: "1.65" }}>
              Explore Marselus Pharmaceuticals&apos; four hero speciality formulations — built with distinct visual identities, master 9-section monographs, and evidence-informed clinical positioning.
            </p>
          </div>

          {/* Interactive Category Filter Bar */}
          <div className="filter-pill-bar" style={{ marginTop: "var(--space-10)" }}>
            <button 
              className={`filter-btn ${activeFilter === "ALL" ? "active" : ""}`}
              onClick={() => setActiveFilter("ALL")}
            >
              All Formulations (4)
            </button>
            <button 
              className={`filter-btn ${activeFilter === "GASTRO" ? "active" : ""}`}
              onClick={() => setActiveFilter("GASTRO")}
            >
              Gastroenterology (ARTEMES™)
            </button>
            <button 
              className={`filter-btn ${activeFilter === "WOMEN" ? "active" : ""}`}
              onClick={() => setActiveFilter("WOMEN")}
            >
              Women&apos;s Health (SARANYA®)
            </button>
            <button 
              className={`filter-btn ${activeFilter === "NUTRITION" ? "active" : ""}`}
              onClick={() => setActiveFilter("NUTRITION")}
            >
              Clinical Nutrition (IMMUNOMARS™)
            </button>
            <button 
              className={`filter-btn ${activeFilter === "VITAMIN" ? "active" : ""}`}
              onClick={() => setActiveFilter("VITAMIN")}
            >
              Vitamin Therapy (UV 60K)
            </button>
          </div>
        </div>
      </section>

      {/* ═══ 2. HERO FEATURE SPOTLIGHT (ARTEMES 1.2G FOCUS) ═══ */}
      {activeFilter === "ALL" && (
        <section className="section" style={{ padding: "0 0 var(--space-16) 0" }}>
          <div className="container">
            <div className="grid-split" style={{ background: "linear-gradient(135deg, #0F3D28 0%, #1D9E75 100%)", borderRadius: "32px", padding: "var(--space-10)", color: "#ffffff", boxShadow: "0 20px 50px rgba(15, 61, 40, 0.2)", position: "relative", overflow: "hidden" }}>
              
              <div>
                <span className="eyebrow-badge" style={{ background: "rgba(132, 204, 22, 0.2)", color: "#84CC16", borderColor: "rgba(132, 204, 22, 0.4)", marginBottom: "var(--space-4)" }}>
                  FEATURED SPOTLIGHT FORMULATION
                </span>
                <h2 style={{ color: "#ffffff", fontSize: "clamp(2rem, 4vw, 3.25rem)", marginBottom: "var(--space-3)" }}>
                  ARTEMES<span style={{ fontSize: "1.2rem", verticalAlign: "super", color: "#84CC16" }}>™</span>
                </h2>
                <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#84CC16", marginBottom: "var(--space-4)" }}>
                  Mesalamine Prolonged Release Tablets IP 1.2 g
                </p>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(255, 255, 255, 0.9)", lineHeight: "1.7", marginBottom: "var(--space-8)" }}>
                  Targeted 5-ASA therapy for mild-to-moderate ulcerative colitis. Engineered with A-R-T-E-M-E-S brand communication mnemonic &amp; prolonged release colonic matrix.
                </p>
                
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link href="/products/artemes" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#84CC16", color: "#0F3D28", fontWeight: 800 }}>
                    View Full 9-Section Monograph →
                  </Link>
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <div style={{ background: "rgba(255, 255, 255, 0.08)", backdropFilter: "blur(12px)", borderRadius: "24px", padding: "var(--space-8)", border: "1px solid rgba(255, 255, 255, 0.15)" }}>
                  <img src="/assets/images/atrimus-capsule.png" alt="ARTEMES Pack Render" style={{ width: "80%", height: "auto", margin: "0 auto", filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.4))" }} />
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ═══ 3. LUXURY 4-PRODUCT GRID (EXACT BRAND COLOUR IDENTITIES) ═══ */}
      <section className="section" style={{ padding: "0 0 var(--space-20) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-8)" }}>
            {filteredProducts.map((p) => (
              <div key={p.id} className="product-card-luxury" style={{ borderTop: `5px solid ${p.brandColors.primary}` }}>
                
                {/* Product Image Stage */}
                <div className="product-image-stage">
                  <img src={p.image} alt={`${p.name} Packaging`} />
                </div>

                <span className="slide-badge" style={{ fontSize: "11px", color: p.brandColors.primary, background: "var(--color-cream-light)", border: `1px solid ${p.brandColors.primary}`, marginBottom: "var(--space-3)", width: "fit-content" }}>
                  {p.tag}
                </span>

                <h3 style={{ fontSize: "1.75rem", fontFamily: "var(--font-heading)", color: p.brandColors.primary, marginBottom: "6px" }}>
                  {p.name}
                </h3>

                <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-forest)", marginBottom: "var(--space-3)" }}>
                  {p.generic}
                </p>

                <div className="composition-pill-list">
                  {p.pills.map((pill, idx) => (
                    <span key={idx} className="composition-pill">✓ {pill}</span>
                  ))}
                </div>

                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6", marginBottom: "var(--space-6)", flexGrow: 1 }}>
                  {p.positioning}
                </p>

                <Link 
                  href={p.link} 
                  style={{ 
                    fontWeight: 800, 
                    color: p.brandColors.primary, 
                    display: "inline-flex", 
                    alignItems: "center", 
                    gap: "6px",
                    marginTop: "auto",
                    fontSize: "0.95rem"
                  }}
                >
                  Explore 9-Section Monograph →
                </Link>

              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ 5. COMMON FOOTER DISCLAIMER BANNER ═══ */}
      <section className="section" style={{ padding: "0 0 var(--space-12) 0" }}>
        <div className="container">
          <div style={{ background: "var(--color-forest)", padding: "var(--space-12)", borderRadius: "32px", textAlign: "center", color: "#ffffff" }}>
            <span className="eyebrow-badge" style={{ background: "rgba(255, 255, 255, 0.1)", color: "var(--color-gold)", borderColor: "rgba(217, 164, 65, 0.3)", marginBottom: "var(--space-4)" }}>
              MARSELUS PHARMACEUTICALS PVT. LTD.
            </span>
            <h2 style={{ color: "#ffffff", fontSize: "clamp(2rem, 4vw, 3.25rem)", marginBottom: "var(--space-4)" }}>
              HERITAGE OF <span className="italic-accent" style={{ color: "var(--color-gold)" }}>HEALING.</span>
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "var(--text-lg)", maxWidth: "60ch", margin: "0 auto var(--space-8)" }}>
              The information presented on the website is intended for healthcare-professional and general educational purposes and should not be construed as a substitute for professional medical advice.
            </p>
            <div className="btn-connected-group" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-gold)", color: "var(--color-forest)", fontWeight: 800 }}>
                Request Prescribing Information →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
