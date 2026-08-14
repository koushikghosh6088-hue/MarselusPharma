"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProductItem {
  id: string;
  name: string;
  dosage: string;
  generic: string;
  category: string;
  categoryColor: string;
  brandTint: string;
  cardGrad: string;
  glowColor: string;
  description: string;
  image: string;
  href: string;
  badgeText: string;
  badgeBg: string;
  metrics: { label: string; val: string; color: string; bg: string }[];
  clinicalHighlights: string[];
  mechanism: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: "artemes",
    name: "ARTEMES",
    dosage: "1.2g",
    generic: "Mesalamine 1.2 g Prolonged Release Tablets",
    category: "GASTROENTEROLOGY",
    categoryColor: "#10b981",
    brandTint: "rgba(16, 185, 129, 0.12)",
    cardGrad: "linear-gradient(145deg, rgba(16, 185, 129, 0.1) 0%, rgba(255, 255, 255, 0.98) 55%, rgba(16, 185, 129, 0.05) 100%)",
    glowColor: "rgba(16, 185, 129, 0.45)",
    description: "Prolonged-release colonic targeted delivery engineered for ulcerative colitis induction & long-term maintenance of remission.",
    image: "/assets/images/capsule-release.png",
    href: "/products/artemes",
    badgeText: "FLAGSHIP COLONIC RELEASE",
    badgeBg: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    metrics: [
      { label: "TARGET DISSOLUTION", val: "pH > 6.8", color: "#10b981", bg: "rgba(16, 185, 129, 0.12)" },
      { label: "CLINICAL EFFICACY", val: "99.2%", color: "#047857", bg: "rgba(4, 120, 87, 0.1)" },
    ],
    clinicalHighlights: [
      "Multi-matrix technology avoids premature gastric breakdown",
      "Delivers therapeutic mesalamine directly to colonic mucosa",
      "Reduces systemic side effects with once-daily compliance",
    ],
    mechanism: "pH-dependent enteric coating dissolves specifically at distal ileum & colon, ensuring localized anti-inflammatory action.",
  },
  {
    id: "saranya",
    name: "SARANYA®",
    dosage: "TABLETS",
    generic: "Myo-Inositol + D-Chiro Inositol (40:1) + Chromium + Vit D2",
    category: "WOMEN'S HEALTH",
    categoryColor: "#d6438c",
    brandTint: "rgba(214, 67, 140, 0.12)",
    cardGrad: "linear-gradient(145deg, rgba(214, 67, 140, 0.1) 0%, rgba(255, 255, 255, 0.98) 55%, rgba(214, 67, 140, 0.05) 100%)",
    glowColor: "rgba(214, 67, 140, 0.45)",
    description: "Formulated for physiological hormonal & metabolic balance in PCOS management and metabolic endocrine restore.",
    image: "/assets/images/capsules-dual.png",
    href: "/products/saranya",
    badgeText: "40:1 PHYSIOLOGICAL RATIO",
    badgeBg: "linear-gradient(135deg, #d6438c 0%, #be185d 100%)",
    metrics: [
      { label: "INOSITOL RATIO", val: "40 : 1", color: "#d6438c", bg: "rgba(214, 67, 140, 0.12)" },
      { label: "OVULATORY RESTORE", val: "Clinical Grade", color: "#9d174d", bg: "rgba(157, 23, 77, 0.1)" },
    ],
    clinicalHighlights: [
      "Mirrors physiological plasma ratio of Myo to D-Chiro Inositol",
      "Enhances insulin sensitivity & reduces androgen levels",
      "Fortified with Vitamin D2 and Chromium Picolinate",
    ],
    mechanism: "Restores follicular microenvironment and insulin receptor sensitivity in ovarian tissue.",
  },
  {
    id: "immunomars",
    name: "IMMUNOMARS™",
    dosage: "SACHETS",
    generic: "L-Glutamine + Amino Acids + Micronutrient Sachet",
    category: "CLINICAL NUTRITION",
    categoryColor: "#e08a2e",
    brandTint: "rgba(224, 138, 46, 0.12)",
    cardGrad: "linear-gradient(145deg, rgba(224, 138, 46, 0.1) 0%, rgba(255, 255, 255, 0.98) 55%, rgba(224, 138, 46, 0.05) 100%)",
    glowColor: "rgba(224, 138, 46, 0.45)",
    description: "Targeted immunonutrition blend engineered to rebuild mucosal barrier integrity, support cell repair & accelerate recovery.",
    image: "/assets/images/3d-shield.png",
    href: "/products/immunomars",
    badgeText: "BARRIER PROTECTION",
    badgeBg: "linear-gradient(135deg, #e08a2e 0%, #c2410c 100%)",
    metrics: [
      { label: "L-GLUTAMINE", val: "15g / Dose", color: "#e08a2e", bg: "rgba(224, 138, 46, 0.12)" },
      { label: "MUCOSAL REBUILD", val: "Fast-Acting", color: "#b45309", bg: "rgba(180, 83, 9, 0.1)" },
    ],
    clinicalHighlights: [
      "Provides primary energy source for enterocytes & lymphocytes",
      "Prevents intestinal permeability & bacterial translocation",
      "Ideal for post-surgical, critical care & gastro recovery",
    ],
    mechanism: "Promotes tight junction protein expression (occludin & claudin) in gut epithelial mucosa.",
  },
  {
    id: "uv60k",
    name: "UV 60K®",
    dosage: "SOFTGELS",
    generic: "Cholecalciferol (Vitamin D3) 60,000 IU Softgel Capsule",
    category: "VITAMIN THERAPY",
    categoryColor: "#2488a6",
    brandTint: "rgba(36, 136, 166, 0.12)",
    cardGrad: "linear-gradient(145deg, rgba(36, 136, 166, 0.1) 0%, rgba(255, 255, 255, 0.98) 55%, rgba(36, 136, 166, 0.05) 100%)",
    glowColor: "rgba(36, 136, 166, 0.45)",
    description: "High-potency softgel formulation for rapid clinical correction of severe Vitamin D deficiency and immune modulation.",
    image: "/assets/images/atrimus-capsule.png",
    href: "/products/uv60k",
    badgeText: "HIGH POTENCY 60K IU",
    badgeBg: "linear-gradient(135deg, #2488a6 0%, #0369a1 100%)",
    metrics: [
      { label: "CHOLECALCIFEROL", val: "60,000 IU", color: "#2488a6", bg: "rgba(36, 136, 166, 0.12)" },
      { label: "BIOAVAILABILITY", val: "Enhanced Softgel", color: "#0284c7", bg: "rgba(2, 132, 199, 0.1)" },
    ],
    clinicalHighlights: [
      "Rapidly raises serum 25(OH)D to therapeutic levels",
      "Formulated in high-grade liquid vehicle for maximum absorption",
      "Supports bone mineralization, muscle tone & immune defense",
    ],
    mechanism: "Enhances intestinal absorption of calcium and phosphorus while modulating T-cell immune responses.",
  },
];

export default function FormulationCardsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProducts = activeCategory === "ALL" 
    ? PRODUCTS 
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const categories = [
    { label: "ALL FORMULATIONS", val: "ALL", color: "var(--color-forest)" },
    { label: "GASTROENTEROLOGY", val: "GASTROENTEROLOGY", color: "#10b981" },
    { label: "WOMEN'S HEALTH", val: "WOMEN'S HEALTH", color: "#d6438c" },
    { label: "CLINICAL NUTRITION", val: "CLINICAL NUTRITION", color: "#e08a2e" },
    { label: "VITAMIN THERAPY", val: "VITAMIN THERAPY", color: "#2488a6" },
  ];

  return (
    <div className="formulation-showcase-wrap" style={{ position: "relative", zIndex: 1 }}>
      
      {/* Category Navigation Filter Pills */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "var(--space-12)",
        }}
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat.val;
          return (
            <button
              key={cat.val}
              onClick={() => setActiveCategory(cat.val)}
              style={{
                padding: "10px 22px",
                borderRadius: "30px",
                fontSize: "11px",
                fontWeight: "900",
                letterSpacing: "0.12em",
                border: isActive ? `2px solid ${cat.color}` : "1.5px solid rgba(15, 61, 40, 0.12)",
                background: isActive ? cat.color : "rgba(255, 255, 255, 0.9)",
                color: isActive ? "#ffffff" : "var(--color-forest-dark)",
                boxShadow: isActive ? `0 8px 25px ${cat.color}44` : "0 4px 12px rgba(0,0,0,0.03)",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Colorful Interactive Product Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "var(--space-8)",
        }}
      >
        {filteredProducts.map((prod) => {
          const isExpanded = expandedId === prod.id;

          return (
            <div
              key={prod.id}
              className="reveal"
              style={{
                borderRadius: "26px",
                background: prod.cardGrad,
                border: `2px solid ${prod.glowColor}`,
                boxShadow: `0 20px 50px rgba(0, 0, 0, 0.07), 0 0 30px ${prod.glowColor}22`,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Top Vibrant Accent Bar */}
              <div
                style={{
                  height: "6px",
                  width: "100%",
                  background: prod.categoryColor,
                }}
              />

              <div style={{ padding: "28px" }}>
                
                {/* Header Badge Row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                  <span
                    style={{
                      fontSize: "10.5px",
                      fontWeight: "900",
                      letterSpacing: "0.14em",
                      color: "#ffffff",
                      background: prod.badgeBg,
                      padding: "5px 14px",
                      borderRadius: "16px",
                      boxShadow: `0 4px 14px ${prod.glowColor}`,
                      textTransform: "uppercase",
                    }}
                  >
                    {prod.category}
                  </span>

                  <span style={{ fontSize: "10.5px", fontWeight: "900", color: prod.categoryColor, letterSpacing: "0.08em" }}>
                    ✦ {prod.badgeText}
                  </span>
                </div>

                {/* Product Image & Title Split */}
                <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "20px" }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "1.9rem", fontFamily: "var(--font-heading)", fontWeight: "900", color: "var(--color-forest-dark)", margin: 0, lineHeight: 1.1 }}>
                      {prod.name} {prod.dosage && <small style={{ fontSize: "1rem", color: prod.categoryColor, fontWeight: "800" }}>{prod.dosage}</small>}
                    </h3>
                    <p style={{ fontSize: "0.84rem", fontWeight: "700", color: "var(--color-forest)", marginTop: "6px", opacity: 0.95 }}>
                      {prod.generic}
                    </p>
                  </div>

                  {/* Render Image Box with Subtle Float */}
                  <div
                    style={{
                      width: "95px",
                      height: "95px",
                      borderRadius: "20px",
                      background: "rgba(255, 255, 255, 0.9)",
                      border: `1.5px solid ${prod.glowColor}`,
                      boxShadow: `0 10px 25px ${prod.glowColor}33`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.18))",
                      }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: "0.93rem", color: "var(--color-text-muted)", lineHeight: "1.65", marginBottom: "22px" }}>
                  {prod.description}
                </p>

                {/* Colorful Key Metrics Chips */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "22px" }}>
                  {prod.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "12px 14px",
                        borderRadius: "14px",
                        background: m.bg,
                        border: `1px solid ${m.color}33`,
                      }}
                    >
                      <div style={{ fontSize: "9.5px", fontWeight: "900", letterSpacing: "0.12em", color: m.color, textTransform: "uppercase" }}>
                        {m.label}
                      </div>
                      <div style={{ fontSize: "1.1rem", fontWeight: "900", color: m.color, fontFamily: "var(--font-heading)", marginTop: "2px" }}>
                        {m.val}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Expanded Clinical Details Drawer */}
                {isExpanded && (
                  <div
                    style={{
                      padding: "18px",
                      borderRadius: "16px",
                      background: "linear-gradient(145deg, #092820 0%, #0d3844 100%)",
                      color: "#ffffff",
                      marginBottom: "20px",
                      border: `1.5px solid ${prod.categoryColor}`,
                      boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
                    }}
                  >
                    <div style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.14em", color: "var(--color-gold)", textTransform: "uppercase", marginBottom: "8px" }}>
                      ✦ CLINICAL HIGHLIGHTS
                    </div>
                    <ul style={{ paddingLeft: "16px", margin: "0 0 12px 0", fontSize: "0.83rem", color: "rgba(255,255,255,0.92)", lineHeight: "1.55" }}>
                      {prod.clinicalHighlights.map((hl, i) => (
                        <li key={i} style={{ marginBottom: "5px" }}>{hl}</li>
                      ))}
                    </ul>
                    <div style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.14em", color: prod.categoryColor, textTransform: "uppercase", marginBottom: "4px" }}>
                      MECHANISM OF ACTION
                    </div>
                    <p style={{ fontSize: "0.81rem", color: "rgba(255,255,255,0.85)", margin: 0, lineHeight: "1.45" }}>
                      {prod.mechanism}
                    </p>
                  </div>
                )}

              </div>

              {/* Card Footer Actions */}
              <div
                style={{
                  padding: "16px 28px",
                  background: "rgba(255, 255, 255, 0.75)",
                  backdropFilter: "blur(10px)",
                  borderTop: `1px solid ${prod.glowColor}`,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : prod.id)}
                  style={{
                    fontSize: "11.5px",
                    fontWeight: "800",
                    letterSpacing: "0.06em",
                    color: "var(--color-forest-dark)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {isExpanded ? "Hide Details ▲" : "Quick Inspect 🔍"}
                </button>

                <Link
                  href={prod.href}
                  style={{
                    fontSize: "12.5px",
                    fontWeight: "900",
                    color: prod.categoryColor,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    textDecoration: "none",
                  }}
                >
                  Monograph Data →
                </Link>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
