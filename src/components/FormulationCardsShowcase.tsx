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
  glowColor: string;
  description: string;
  image: string;
  href: string;
  badgeText: string;
  metrics: { label: string; val: string }[];
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
    categoryColor: "#1D9E75",
    brandTint: "rgba(29, 158, 117, 0.08)",
    glowColor: "rgba(29, 158, 117, 0.35)",
    description: "Prolonged-release colonic targeted delivery engineered for ulcerative colitis induction & long-term maintenance of remission.",
    image: "/assets/images/capsule-release.png",
    href: "/products/artemes",
    badgeText: "FLAGSHIP COLONIC RELEASE",
    metrics: [
      { label: "TARGET DISSOLUTION", val: "pH > 6.8" },
      { label: "CLINICAL EFFICACY", val: "99.2%" },
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
    categoryColor: "#D6438C",
    brandTint: "rgba(214, 67, 140, 0.08)",
    glowColor: "rgba(214, 67, 140, 0.35)",
    description: "Formulated for physiological hormonal & metabolic balance in PCOS management and metabolic endocrine restore.",
    image: "/assets/images/capsules-dual.png",
    href: "/products/saranya",
    badgeText: "40:1 PHYSIOLOGICAL RATIO",
    metrics: [
      { label: "INOSITOL RATIO", val: "40 : 1" },
      { label: "OVULATORY RESTORE", val: "Clinical Grade" },
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
    categoryColor: "#E08A2E",
    brandTint: "rgba(224, 138, 46, 0.08)",
    glowColor: "rgba(224, 138, 46, 0.35)",
    description: "Targeted immunonutrition blend engineered to rebuild mucosal barrier integrity, support cell repair & accelerate recovery.",
    image: "/assets/images/3d-shield.png",
    href: "/products/immunomars",
    badgeText: "BARRIER PROTECTION",
    metrics: [
      { label: "L-GLUTAMINE", val: "15g / Dose" },
      { label: "MUCOSAL REBUILD", val: "Fast-Acting" },
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
    categoryColor: "#2488A6",
    brandTint: "rgba(36, 136, 166, 0.08)",
    glowColor: "rgba(36, 136, 166, 0.35)",
    description: "High-potency softgel formulation for rapid clinical correction of severe Vitamin D deficiency and immune modulation.",
    image: "/assets/images/atrimus-capsule.png",
    href: "/products/uv60k",
    badgeText: "HIGH POTENCY 60K IU",
    metrics: [
      { label: "CHOLECALCIFEROL", val: "60,000 IU" },
      { label: "BIOAVAILABILITY", val: "Enhanced Softgel" },
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
    { label: "ALL FORMULATIONS", val: "ALL" },
    { label: "GASTROENTEROLOGY", val: "GASTROENTEROLOGY" },
    { label: "WOMEN'S HEALTH", val: "WOMEN'S HEALTH" },
    { label: "CLINICAL NUTRITION", val: "CLINICAL NUTRITION" },
    { label: "VITAMIN THERAPY", val: "VITAMIN THERAPY" },
  ];

  return (
    <div className="formulation-showcase-wrap" style={{ position: "relative", zIndex: 1 }}>
      
      {/* Category Navigation Filter Pills */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
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
                padding: "8px 18px",
                borderRadius: "30px",
                fontSize: "11px",
                fontWeight: "900",
                letterSpacing: "0.12em",
                border: isActive ? "1.5px solid var(--color-forest)" : "1px solid rgba(15, 61, 40, 0.15)",
                background: isActive ? "var(--color-forest)" : "rgba(255, 255, 255, 0.8)",
                color: isActive ? "#ffffff" : "var(--color-forest-dark)",
                boxShadow: isActive ? "0 8px 20px rgba(15, 61, 40, 0.2)" : "none",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Interactive 3D Product Cards */}
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
                borderRadius: "24px",
                background: "#ffffff",
                border: `1.5px solid ${prod.glowColor}`,
                boxShadow: `0 16px 45px rgba(0, 0, 0, 0.06), 0 0 25px ${prod.glowColor}15`,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Top Accent Bar */}
              <div
                style={{
                  height: "5px",
                  width: "100%",
                  background: prod.categoryColor,
                }}
              />

              <div style={{ padding: "28px" }}>
                
                {/* Header Badge Row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: "900",
                      letterSpacing: "0.14em",
                      color: prod.categoryColor,
                      background: prod.brandTint,
                      padding: "4px 12px",
                      borderRadius: "14px",
                      border: `1px solid ${prod.glowColor}`,
                      textTransform: "uppercase",
                    }}
                  >
                    {prod.category}
                  </span>

                  <span style={{ fontSize: "10px", fontWeight: "800", color: "var(--color-gold)", letterSpacing: "0.08em" }}>
                    ✦ {prod.badgeText}
                  </span>
                </div>

                {/* 3D Product Image & Title Split */}
                <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "20px" }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "1.85rem", fontFamily: "var(--font-heading)", fontWeight: "900", color: "var(--color-forest-dark)", margin: 0, lineHeight: 1.1 }}>
                      {prod.name} {prod.dosage && <small style={{ fontSize: "1rem", color: prod.categoryColor }}>{prod.dosage}</small>}
                    </h3>
                    <p style={{ fontSize: "0.82rem", fontWeight: "700", color: "var(--color-text-muted)", marginTop: "6px" }}>
                      {prod.generic}
                    </p>
                  </div>

                  {/* Render Image Box */}
                  <div
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "18px",
                      background: prod.brandTint,
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
                        filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.15))",
                      }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: "0.92rem", color: "var(--color-text-muted)", lineHeight: "1.6", marginBottom: "20px" }}>
                  {prod.description}
                </p>

                {/* Key Metrics Chips */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
                  {prod.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "10px 12px",
                        borderRadius: "12px",
                        background: "rgba(247, 244, 236, 0.8)",
                        border: "1px solid rgba(15, 61, 40, 0.08)",
                      }}
                    >
                      <div style={{ fontSize: "9px", fontWeight: "900", letterSpacing: "0.1em", color: "var(--color-text-muted)", textTransform: "uppercase" }}>
                        {m.label}
                      </div>
                      <div style={{ fontSize: "1.05rem", fontWeight: "900", color: prod.categoryColor, fontFamily: "var(--font-heading)" }}>
                        {m.val}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Expanded Clinical Details Drawer */}
                {isExpanded && (
                  <div
                    style={{
                      padding: "16px",
                      borderRadius: "14px",
                      background: "rgba(8, 30, 24, 0.95)",
                      color: "#ffffff",
                      marginBottom: "20px",
                      animation: "fadeIn 0.3s ease-in-out",
                    }}
                  >
                    <div style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.14em", color: "var(--color-gold)", textTransform: "uppercase", marginBottom: "8px" }}>
                      ✦ CLINICAL HIGHLIGHTS
                    </div>
                    <ul style={{ paddingLeft: "16px", margin: "0 0 12px 0", fontSize: "0.82rem", color: "rgba(255,255,255,0.9)", lineHeight: "1.5" }}>
                      {prod.clinicalHighlights.map((hl, i) => (
                        <li key={i} style={{ marginBottom: "4px" }}>{hl}</li>
                      ))}
                    </ul>
                    <div style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.14em", color: prod.categoryColor, textTransform: "uppercase", marginBottom: "4px" }}>
                      MECHANISM OF ACTION
                    </div>
                    <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: "1.4" }}>
                      {prod.mechanism}
                    </p>
                  </div>
                )}

              </div>

              {/* Card Footer Actions */}
              <div
                style={{
                  padding: "16px 28px",
                  background: "rgba(247, 244, 236, 0.5)",
                  borderTop: "1px solid rgba(15, 61, 40, 0.08)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : prod.id)}
                  style={{
                    fontSize: "11px",
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
                    fontSize: "12px",
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
