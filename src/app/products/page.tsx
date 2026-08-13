"use client";

import { useState } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";

type CategoryFilter = "ALL" | "GASTRO" | "WOMEN" | "NUTRITION" | "VITAMIN";

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("ALL");

  const products = [
    {
      id: "artemes",
      name: "ARTEMES 1.2g",
      tag: "GASTROENTEROLOGY · PROLONGED RELEASE",
      category: "GASTRO",
      composition: "Mesalamine 1.2 g Prolonged Release Tablets",
      pills: ["Mesalamine 1.2g", "Colonic Matrix", "PR Enteric Coated"],
      differentiator: "Site-specific colonic targeted drug delivery for induction & maintenance of ulcerative colitis remission.",
      accent: "var(--color-artemes)",
      tintClass: "product-card-luxury--artemes",
      glowClass: "product-ambient-glow--artemes",
      image: "/assets/images/atrimus-capsule.png",
      link: "/products/artemes",
    },
    {
      id: "saranya",
      name: "SARANYA",
      tag: "WOMEN'S HEALTH · 40:1 RATIO FORMULA",
      category: "WOMEN",
      composition: "Myo-Inositol 1100 mg, D-Chiro Inositol 27.6 mg, Chromium Picolinate 400 mcg, Vit D2 400 IU",
      pills: ["Myo-Inositol 1100mg", "D-Chiro 27.6mg (40:1)", "Chromium 400mcg", "Vit D2 400IU"],
      differentiator: "Formulated for physiological endocrine & metabolic balance in PCOS management.",
      accent: "var(--color-saranya)",
      tintClass: "product-card-luxury--saranya",
      glowClass: "product-ambient-glow--saranya",
      image: "/assets/images/womens-therapy.png",
      link: "/products/saranya",
    },
    {
      id: "immunomars",
      name: "IMMUNOMARS",
      tag: "CLINICAL NUTRITION · CLINICAL SACHET",
      category: "NUTRITION",
      composition: "L-Glutamine + L-Lysine + L-Arginine + Multivitamins + Zinc + Selenium + Vit-C Sachet",
      pills: ["L-Glutamine", "L-Lysine", "L-Arginine", "Zinc + Selenium + Vit-C"],
      differentiator: "Targeted immunonutrition blend: Rebuild. Protect. Recover. Essential mucosal barrier fuel.",
      accent: "var(--color-immunomars)",
      tintClass: "product-card-luxury--immunomars",
      glowClass: "product-ambient-glow--immunomars",
      image: "/assets/images/nutrition-therapy.png",
      link: "/products/immunomars",
    },
    {
      id: "uv60k",
      name: "UV 60K",
      tag: "VITAMIN THERAPY · SOFTGEL CAPSULE",
      category: "VITAMIN",
      composition: "Cholecalciferol (Vitamin D3) 60,000 IU Softgel Capsule",
      pills: ["Cholecalciferol 60,000 IU", "Softgel Capsule", "High Potency"],
      differentiator: "High-potency Vitamin D3 softgel for rapid clinical correction of severe deficiency.",
      accent: "var(--color-uv60k)",
      tintClass: "product-card-luxury--uv60k",
      glowClass: "product-ambient-glow--uv60k",
      image: "/assets/images/3d-pharma-bottle.png",
      link: "/products/uv60k",
    },
  ];

  const filteredProducts = activeFilter === "ALL" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)", background: "var(--color-cream)" }}>
      
      {/* ═══ 1. HERO SHOWCASE & SPOTLIGHT BANNER ═══ */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="PRODUCTS — SPECIALITY FORMULATIONS" />

        <div className="container">
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow-badge" style={{ marginBottom: "var(--space-4)" }}>
              ✦ SPECIALITY FORMULATION PORTFOLIO
            </span>
            <h1 style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", marginBottom: "var(--space-6)" }}>
              Precision Formulations.<br />
              <span className="italic-accent">Unrivaled Efficacy.</span>
            </h1>
            <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-muted)", lineHeight: "1.65" }}>
              Explore Marselus&apos;s four hero formulations — precision-engineered for gastroenterology, women&apos;s health, and clinical nutrition.
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
              Gastroenterology
            </button>
            <button 
              className={`filter-btn ${activeFilter === "WOMEN" ? "active" : ""}`}
              onClick={() => setActiveFilter("WOMEN")}
            >
              Women&apos;s Health
            </button>
            <button 
              className={`filter-btn ${activeFilter === "NUTRITION" ? "active" : ""}`}
              onClick={() => setActiveFilter("NUTRITION")}
            >
              Clinical Nutrition
            </button>
            <button 
              className={`filter-btn ${activeFilter === "VITAMIN" ? "active" : ""}`}
              onClick={() => setActiveFilter("VITAMIN")}
            >
              Vitamin Therapy
            </button>
          </div>
        </div>
      </section>

      {/* ═══ 2. HERO FEATURE SPOTLIGHT (ARTEMES 1.2G FOCUS) ═══ */}
      {activeFilter === "ALL" && (
        <section className="section" style={{ padding: "0 0 var(--space-16) 0" }}>
          <div className="container">
            <div className="grid-split" style={{ background: "linear-gradient(135deg, rgba(15, 61, 40, 0.95) 0%, rgba(9, 38, 25, 0.98) 100%)", borderRadius: "32px", padding: "var(--space-10)", color: "var(--color-text-on-dark)", boxShadow: "0 20px 50px rgba(15, 61, 40, 0.2)", position: "relative", overflow: "hidden" }}>
              
              {/* Background ambient glow */}
              <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "300px", height: "300px", borderRadius: "50%", background: "var(--color-artemes)", filter: "blur(80px)", opacity: 0.3, pointerEvents: "none" }}></div>

              {/* Left Copy */}
              <div>
                <span className="eyebrow-badge" style={{ background: "rgba(29, 158, 117, 0.2)", color: "var(--color-artemes)", borderColor: "rgba(29, 158, 117, 0.4)", marginBottom: "var(--space-4)" }}>
                  FEATURED SPOTLIGHT FORMULATION
                </span>
                <h2 style={{ color: "var(--color-text-on-dark)", fontSize: "clamp(2rem, 4vw, 3.25rem)", marginBottom: "var(--space-4)" }}>
                  ARTEMES <span className="italic-accent" style={{ color: "var(--color-artemes)" }}>1.2g</span>
                </h2>
                <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-gold)", marginBottom: "var(--space-4)" }}>
                  Mesalamine 1.2 g Prolonged Release Tablets
                </p>
                <p style={{ fontSize: "var(--text-base)", color: "rgba(247, 244, 236, 0.85)", lineHeight: "1.7", marginBottom: "var(--space-8)" }}>
                  Targeted prolonged-release formulation engineered for site-specific colonic delivery. Indicated for mild-to-moderate ulcerative colitis remission induction and long-term maintenance.
                </p>
                
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link href="/products/artemes" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-artemes)", color: "#ffffff" }}>
                    Explore ARTEMES Monograph →
                  </Link>
                  <span className="verify-tag" style={{ background: "rgba(255, 255, 255, 0.1)", color: "var(--color-gold)", borderColor: "rgba(217, 164, 65, 0.3)" }}>
                    WHO-GMP Certified Facility
                  </span>
                </div>
              </div>

              {/* Right 3D Stage Render */}
              <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
                <div style={{ background: "rgba(255, 255, 255, 0.06)", backdropFilter: "blur(12px)", borderRadius: "24px", padding: "var(--space-8)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                  <img src="/assets/images/atrimus-capsule.png" alt="ARTEMES 1.2g Render" style={{ width: "80%", height: "auto", margin: "0 auto", filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.4))" }} />
                  <div style={{ marginTop: "var(--space-4)", display: "flex", justifyContent: "center", gap: "8px" }}>
                    <span className="slide-badge" style={{ fontSize: "11px", background: "rgba(29, 158, 117, 0.3)", color: "#ffffff" }}>Targeted Release Matrix</span>
                    <span className="slide-badge" style={{ fontSize: "11px", background: "rgba(255, 255, 255, 0.15)", color: "#ffffff" }}>Mucosal Healing</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ═══ 3. LUXURY 4-PRODUCT GRID ═══ */}
      <section className="section" style={{ padding: "0 0 var(--space-20) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-8)" }}>
            {filteredProducts.map((p) => (
              <div key={p.id} className={`product-card-luxury ${p.tintClass}`}>
                
                {/* 3D Render Stage */}
                <div className="product-image-stage">
                  <div className={`product-ambient-glow ${p.glowClass}`}></div>
                  <img src={p.image} alt={`${p.name} 3D Render`} />
                </div>

                {/* Content */}
                <span className="slide-badge" style={{ fontSize: "11px", color: p.accent, background: "var(--color-cream-light)", border: `1px solid ${p.accent}`, marginBottom: "var(--space-3)", width: "fit-content" }}>
                  {p.tag}
                </span>

                <h3 style={{ fontSize: "1.75rem", fontFamily: "var(--font-heading)", color: "var(--color-forest)", marginBottom: "6px" }}>
                  {p.name}
                </h3>

                <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-forest)", marginBottom: "var(--space-3)" }}>
                  {p.composition}
                </p>

                {/* Composition Pills */}
                <div className="composition-pill-list">
                  {p.pills.map((pill, idx) => (
                    <span key={idx} className="composition-pill">✓ {pill}</span>
                  ))}
                </div>

                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6", marginBottom: "var(--space-6)", flexGrow: 1 }}>
                  {p.differentiator}
                </p>

                <Link 
                  href={p.link} 
                  style={{ 
                    fontWeight: 700, 
                    color: p.accent, 
                    display: "inline-flex", 
                    alignItems: "center", 
                    gap: "6px",
                    marginTop: "auto",
                    fontSize: "0.95rem"
                  }}
                >
                  Monograph &amp; Full Specs →
                </Link>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. FORMULATION COMPARISON MATRIX ═══ */}
      <section className="section" style={{ padding: "0 0 var(--space-20) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto var(--space-12)" }}>
            <span className="eyebrow-label">TECHNICAL SPECIFICATIONS</span>
            <h2>Formulation <span className="italic-accent">Comparison Matrix.</span></h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)" }}>
              Side-by-side technical breakdown across our 4 core speciality formulations.
            </p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Brand Name</th>
                  <th>Therapeutic Area</th>
                  <th>Active Molecule / Composition</th>
                  <th>Delivery Mechanism</th>
                  <th>WHO-GMP Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style={{ color: "var(--color-artemes)" }}>ARTEMES 1.2g</strong></td>
                  <td>Gastroenterology</td>
                  <td>Mesalamine 1.2 g</td>
                  <td>Prolonged Release Enteric Matrix</td>
                  <td><span className="verify-tag" style={{ background: "rgba(29, 158, 117, 0.15)", color: "var(--color-artemes)" }}>WHO-GMP Certified</span></td>
                </tr>
                <tr>
                  <td><strong style={{ color: "var(--color-saranya)" }}>SARANYA</strong></td>
                  <td>Women&apos;s Health</td>
                  <td>Myo-Inositol 1100mg + D-Chiro 27.6mg (40:1)</td>
                  <td>Synergistic Micronutrient Sachet</td>
                  <td><span className="verify-tag" style={{ background: "rgba(214, 67, 140, 0.15)", color: "var(--color-saranya)" }}>WHO-GMP Certified</span></td>
                </tr>
                <tr>
                  <td><strong style={{ color: "var(--color-immunomars)" }}>IMMUNOMARS</strong></td>
                  <td>Clinical Nutrition</td>
                  <td>L-Glutamine + L-Lysine + L-Arginine + Zinc</td>
                  <td>Immunonutrition Drink Mix Sachet</td>
                  <td><span className="verify-tag" style={{ background: "rgba(224, 138, 46, 0.15)", color: "var(--color-immunomars)" }}>WHO-GMP Certified</span></td>
                </tr>
                <tr>
                  <td><strong style={{ color: "var(--color-uv60k)" }}>UV 60K</strong></td>
                  <td>Vitamin Therapy</td>
                  <td>Cholecalciferol (Vitamin D3) 60,000 IU</td>
                  <td>High-Potency Softgel Capsule</td>
                  <td><span className="verify-tag" style={{ background: "rgba(46, 127, 224, 0.15)", color: "var(--color-uv60k)" }}>WHO-GMP Certified</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ 5. PRESCRIBER PORTAL & MONOGRAPH CALLOUT ═══ */}
      <section className="section" style={{ padding: "0 0 var(--space-12) 0" }}>
        <div className="container">
          <div style={{ background: "var(--color-forest)", padding: "var(--space-12)", borderRadius: "32px", textAlign: "center", color: "var(--color-text-on-dark)" }}>
            <span className="eyebrow-badge" style={{ background: "rgba(255, 255, 255, 0.1)", color: "var(--color-gold)", borderColor: "rgba(217, 164, 65, 0.3)", marginBottom: "var(--space-4)" }}>
              PRESCRIBER RESOURCE PORTAL
            </span>
            <h2 style={{ color: "var(--color-text-on-dark)", fontSize: "clamp(2rem, 4vw, 3.25rem)", marginBottom: "var(--space-4)" }}>
              Request Full Prescribing <span className="italic-accent" style={{ color: "var(--color-gold)" }}>Monographs.</span>
            </h2>
            <p style={{ color: "rgba(247, 244, 236, 0.85)", fontSize: "var(--text-lg)", maxWidth: "56ch", margin: "0 auto var(--space-8)" }}>
              Contact our clinical affairs team to request product samples, version-controlled PDF monographs, or prescribing guides for your clinical practice.
            </p>
            <div className="btn-connected-group" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-gold)", color: "var(--color-forest)", fontWeight: 800 }}>
                Request Prescribing Monograph →
              </Link>
              <Link href="/science" className="btn-connected-pill btn-connected-pill--secondary" style={{ borderColor: "#ffffff", color: "#ffffff" }}>
                Scientific Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
