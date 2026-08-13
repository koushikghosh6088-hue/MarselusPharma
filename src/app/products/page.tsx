"use client";

import { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";

type CategoryFilter = "ALL" | "GASTRO" | "WOMEN" | "NUTRITION" | "VITAMIN";

export default function ProductsCataloguePage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("ALL");

  const products = [
    {
      id: "artemes",
      name: "ARTEMES™ 1.2g",
      tag: "GASTROENTEROLOGY · PROLONGED RELEASE",
      category: "GASTRO",
      generic: "Mesalamine Prolonged Release Tablets IP 1.2 g",
      pills: ["Mesalamine 1.2g", "Colonic Release Matrix", "Once-Daily Dosing"],
      positioning: "Targeted 5-ASA therapy for appropriately selected mild-to-moderate ulcerative colitis.",
      brandColors: { primary: "#0F3D28", accent: "#84CC16", bg: "linear-gradient(180deg, rgba(132, 204, 22, 0.2) 0%, rgba(15, 61, 40, 0.08) 100%)" },
      image: "/assets/images/atrimus-capsule.png",
      link: "/products/artemes",
    },
    {
      id: "saranya",
      name: "SARANYA®",
      tag: "WOMEN'S HEALTH · 40:1 INOSITOL TABLETS",
      category: "WOMEN",
      generic: "Myo-Inositol + D-Chiro Inositol + Chromium Picolinate + Vitamin D2 Tablets",
      pills: ["Myo-Inositol 1100mg", "D-Chiro 27.6mg (~40:1)", "Pink Strip Pack"],
      positioning: "A balanced nutritional approach to women's metabolic & reproductive wellness in PCOS care.",
      brandColors: { primary: "#1E3A8A", accent: "#D6438C", bg: "linear-gradient(180deg, rgba(244, 114, 182, 0.2) 0%, rgba(30, 58, 138, 0.08) 100%)" },
      image: "/assets/images/womens-therapy.png",
      link: "/products/saranya",
    },
    {
      id: "immunomars",
      name: "IMMUNOMARS™",
      tag: "CLINICAL NUTRITION · 15G SACHET",
      category: "NUTRITION",
      generic: "L-Glutamine + L-Arginine + L-Lysine + Vitamins + Zinc + Selenium Sachets",
      pills: ["L-Glutamine 10g (Hero)", "L-Arginine 1.5g", "Real Sachet Format"],
      positioning: "Advanced immunonutrition & targeted amino acid support in clinical nutrition settings.",
      brandColors: { primary: "#F97316", accent: "#1E3A8A", bg: "linear-gradient(180deg, rgba(249, 115, 22, 0.2) 0%, rgba(30, 58, 138, 0.08) 100%)" },
      image: "/assets/images/nutrition-therapy.png",
      link: "/products/immunomars",
    },
    {
      id: "uv60k",
      name: "UV 60K",
      tag: "VITAMIN THERAPY · HIGH-STRENGTH SOFTGEL",
      category: "VITAMIN",
      generic: "Cholecalciferol 60,000 IU Softgel Capsules",
      pills: ["Cholecalciferol 60,000 IU", "Softgel Bioavailability", "Weekly Dosing"],
      positioning: "High-strength Vitamin D3 supplementation for clinical deficiency correction & calcium homeostasis.",
      brandColors: { primary: "#2E7FE0", accent: "#EAB308", bg: "linear-gradient(180deg, rgba(234, 179, 8, 0.25) 0%, rgba(46, 127, 224, 0.08) 100%)" },
      image: "/assets/images/3d-pharma-bottle.png",
      link: "/products/uv60k",
    },
  ];

  const filteredProducts = activeFilter === "ALL" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)", background: "#FAF8F5" }}>
      
      {/* ═══ 1. FABLE & MANE STYLE LUXURY CATALOGUE HEADER ═══ */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="SPECIALITY PHARMACEUTICAL CATALOGUE" />

        <div className="container">
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow-badge" style={{ marginBottom: "var(--space-4)", color: "#0F3D28" }}>
              ✦ SPECIALITY PHARMACEUTICAL CATALOGUE
            </span>
            <h1 style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", fontFamily: "var(--font-heading)", color: "#0F3D28", marginBottom: "var(--space-4)" }}>
              Speciality Formulations.<br />
              <span className="italic-accent" style={{ color: "#1D9E75" }}>Heritage of Healing.</span>
            </h1>
            <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-muted)", lineHeight: "1.65" }}>
              Explore Marselus Pharmaceuticals&apos; four hero formulations — presented in arched luxury architectural showcases with interactive prescribing monographs.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
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

      {/* ═══ 2. ARCHED LUXURY PRODUCT CATALOGUE GRID ═══ */}
      <section className="section" style={{ padding: "0 0 var(--space-20) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "36px" }}>
            {filteredProducts.map((p) => (
              <div key={p.id} className="product-card-luxury" style={{ background: "#ffffff", borderRadius: "32px", border: "1px solid rgba(15, 61, 40, 0.08)", padding: "28px" }}>
                
                {/* Arched Architectural Product Stage */}
                <div className="fable-arch-stage" style={{ height: "300px", borderRadius: "140px 140px 24px 24px", background: p.brandColors.bg, marginBottom: "20px" }}>
                  <img src={p.image} alt={p.name} style={{ maxHeight: "220px" }} />
                </div>

                <span className="slide-badge" style={{ fontSize: "11px", color: p.brandColors.primary, background: "rgba(15,61,40,0.04)", border: `1px solid ${p.brandColors.primary}`, marginBottom: "12px", width: "fit-content" }}>
                  {p.tag}
                </span>

                <h3 style={{ fontSize: "1.75rem", fontFamily: "var(--font-heading)", color: p.brandColors.primary, marginBottom: "4px" }}>
                  {p.name}
                </h3>

                <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-forest)", marginBottom: "16px" }}>
                  {p.generic}
                </p>

                <div className="composition-pill-list" style={{ marginBottom: "20px" }}>
                  {p.pills.map((pill, idx) => (
                    <span key={idx} className="composition-pill">✓ {pill}</span>
                  ))}
                </div>

                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6", marginBottom: "24px", flexGrow: 1 }}>
                  {p.positioning}
                </p>

                <Link 
                  href={p.link} 
                  className="btn-connected-pill btn-connected-pill--primary"
                  style={{ 
                    background: p.brandColors.primary, 
                    color: "#ffffff", 
                    textAlign: "center",
                    justifyContent: "center",
                    padding: "12px 24px",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    width: "100%"
                  }}
                >
                  DISCOVER MONOGRAPH →
                </Link>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. COMMON FOOTER DISCLAIMER BANNER ═══ */}
      <section className="section" style={{ padding: "0 0 var(--space-12) 0" }}>
        <div className="container">
          <div style={{ background: "#0F3D28", padding: "var(--space-12)", borderRadius: "32px", textAlign: "center", color: "#ffffff" }}>
            <span className="eyebrow-badge" style={{ background: "rgba(255, 255, 255, 0.1)", color: "#84CC16", borderColor: "rgba(132, 204, 22, 0.3)", marginBottom: "var(--space-4)" }}>
              MARSELUS PHARMACEUTICALS PVT. LTD.
            </span>
            <h2 style={{ color: "#ffffff", fontSize: "clamp(2rem, 4vw, 3.25rem)", fontFamily: "var(--font-heading)", marginBottom: "var(--space-4)" }}>
              HERITAGE OF <span className="italic-accent" style={{ color: "#84CC16" }}>HEALING.</span>
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "var(--text-lg)", maxWidth: "60ch", margin: "0 auto var(--space-8)" }}>
              The information presented on the website is intended for healthcare-professional and general educational purposes and should not be construed as a substitute for professional medical advice.
            </p>
            <div className="btn-connected-group" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#84CC16", color: "#0F3D28", fontWeight: 800 }}>
                Request Prescribing Information →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
