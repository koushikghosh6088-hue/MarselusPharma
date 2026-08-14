"use client";

import React, { useState } from "react";
import Link from "next/link";

interface DomainItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  color: string;
  gradient: string;
  glowColor: string;
  badgeBg: string;
  image: string;
  href: string;
  statChip: string;
  description: string;
  monographs: string[];
  pathway: string;
  efficacyStat: string;
}

const DOMAINS: DomainItem[] = [
  {
    id: "gastroenterology",
    title: "Gut Mucosal Healing & IBD",
    subtitle: "Targeted Colonic Release & Inflammatory Disease Management",
    category: "GASTROENTEROLOGY",
    color: "#10b981",
    gradient: "linear-gradient(145deg, rgba(16, 185, 129, 0.12) 0%, rgba(255, 255, 255, 0.98) 60%, rgba(16, 185, 129, 0.06) 100%)",
    glowColor: "rgba(16, 185, 129, 0.45)",
    badgeBg: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    image: "/assets/images/gastro-therapy.png",
    href: "/therapy-areas/gastroenterology",
    statChip: "✦ IBD REMISSION & COLONIC TARGETED",
    description: "Formulations engineered to deliver site-specific mesalamine to inflamed colonic mucosa, bypassing premature stomach degradation.",
    monographs: ["ARTEMES 1.2g Prolonged Release", "Colonic Targeted Matrix", "Mucosal Remission Protocol"],
    pathway: "pH > 6.8 dependent release delivers high local drug concentration directly to distal ileum & colon.",
    efficacyStat: "99.2% Mucosal Targeted Precision",
  },
  {
    id: "womens-health",
    title: "Hormonal & Metabolic Balance",
    subtitle: "Endocrine Harmony & Physiological Inositol Ratios in PCOS",
    category: "WOMEN'S HEALTH",
    color: "#d6438c",
    gradient: "linear-gradient(145deg, rgba(214, 67, 140, 0.12) 0%, rgba(255, 255, 255, 0.98) 60%, rgba(214, 67, 140, 0.06) 100%)",
    glowColor: "rgba(214, 67, 140, 0.45)",
    badgeBg: "linear-gradient(135deg, #d6438c 0%, #be185d 100%)",
    image: "/assets/images/womens-therapy.png",
    href: "/therapy-areas/womens-health",
    statChip: "✦ 40:1 PHYSIOLOGICAL INOSITOL RATIO",
    description: "Specialized combination therapy targeting insulin resistance, hyperandrogenism, and follicular maturation in PCOS.",
    monographs: ["SARANYA 40:1 Inositol Blend", "Ovulatory Support Matrix", "Metabolic Endocrine Restore"],
    pathway: "Mirrors physiological plasma 40:1 ratio to restore insulin signaling and ovarian steroidogenesis.",
    efficacyStat: "Clinical Grade Endocrine Balance",
  },
  {
    id: "clinical-nutrition",
    title: "Immunonutrition & Recovery",
    subtitle: "Mucosal Barrier Integrity & Critical Care Nutritional Support",
    category: "CLINICAL NUTRITION",
    color: "#e08a2e",
    gradient: "linear-gradient(145deg, rgba(224, 138, 46, 0.12) 0%, rgba(255, 255, 255, 0.98) 60%, rgba(224, 138, 46, 0.06) 100%)",
    glowColor: "rgba(224, 138, 46, 0.45)",
    badgeBg: "linear-gradient(135deg, #e08a2e 0%, #c2410c 100%)",
    image: "/assets/images/nutrition-therapy.png",
    href: "/therapy-areas/clinical-nutrition",
    statChip: "✦ MUCOSAL BARRIER REBUILD",
    description: "High-dose L-Glutamine and essential amino acid formulations engineered to restore tight junctions and prevent gut barrier breakdown.",
    monographs: ["IMMUNOMARS 15g L-Glutamine Sachet", "Amino Acid Recovery Matrix", "Epithelial Barrier Defense"],
    pathway: "Fuels enterocytes and upregulates tight junction occludin proteins under severe metabolic stress.",
    efficacyStat: "Rapid Mucosal Epithelial Repair",
  },
];

export default function SpecialtyFocusShowcase() {
  const [activeTabId, setActiveTabId] = useState<string | null>(null);

  return (
    <div className="specialty-showcase-wrap" style={{ position: "relative", zIndex: 1 }}>
      
      {/* 3 Domain Colorful Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
          gap: "var(--space-8)",
        }}
      >
        {DOMAINS.map((domain) => {
          const isActive = activeTabId === domain.id;

          return (
            <div
              key={domain.id}
              className="reveal"
              style={{
                borderRadius: "28px",
                background: domain.gradient,
                border: `2px solid ${domain.glowColor}`,
                boxShadow: `0 22px 55px rgba(0, 0, 0, 0.08), 0 0 35px ${domain.glowColor}22`,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Image & Category Overlay */}
              <div style={{ position: "relative", width: "100%", height: "230px", overflow: "hidden" }}>
                <img
                  src={domain.image}
                  alt={domain.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                  }}
                />
                
                {/* Category Floating Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "18px",
                    left: "18px",
                    background: domain.badgeBg,
                    color: "#ffffff",
                    fontSize: "10.5px",
                    fontWeight: "900",
                    letterSpacing: "0.14em",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    boxShadow: `0 6px 18px ${domain.glowColor}`,
                    textTransform: "uppercase",
                  }}
                >
                  {domain.category}
                </div>

                {/* Efficacy Chip Floating Overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "14px",
                    right: "14px",
                    background: "rgba(8, 30, 24, 0.88)",
                    backdropFilter: "blur(12px)",
                    color: "var(--color-gold)",
                    fontSize: "10px",
                    fontWeight: "900",
                    padding: "5px 12px",
                    borderRadius: "14px",
                    border: `1px solid ${domain.color}`,
                  }}
                >
                  ✦ {domain.efficacyStat}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                
                <div>
                  <h3
                    style={{
                      fontSize: "1.65rem",
                      fontFamily: "var(--font-heading)",
                      fontWeight: "900",
                      color: "var(--color-forest-dark)",
                      marginBottom: "6px",
                      lineHeight: 1.2,
                    }}
                  >
                    {domain.title}
                  </h3>
                  <p style={{ fontSize: "0.82rem", fontWeight: "800", color: domain.color, marginBottom: "14px" }}>
                    {domain.subtitle}
                  </p>
                  
                  <p style={{ fontSize: "0.93rem", color: "var(--color-text-muted)", lineHeight: "1.65", marginBottom: "20px" }}>
                    {domain.description}
                  </p>

                  {/* Stat Chip Pill */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "10.5px",
                      fontWeight: "900",
                      letterSpacing: "0.08em",
                      padding: "6px 14px",
                      borderRadius: "20px",
                      background: `rgba(${domain.id === "gastroenterology" ? "16, 185, 129" : domain.id === "womens-health" ? "214, 67, 140" : "224, 138, 46"}, 0.15)`,
                      color: domain.color,
                      border: `1px solid ${domain.color}44`,
                      marginBottom: "20px",
                    }}
                  >
                    {domain.statChip}
                  </div>
                </div>

                {/* Interactive Expandable Monograph List */}
                {isActive && (
                  <div
                    style={{
                      padding: "16px",
                      borderRadius: "16px",
                      background: "linear-gradient(145deg, #092820 0%, #0d3844 100%)",
                      color: "#ffffff",
                      marginBottom: "20px",
                      border: `1.5px solid ${domain.color}`,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                      animation: "fadeIn 0.3s ease-in-out",
                    }}
                  >
                    <div style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.14em", color: "var(--color-gold)", textTransform: "uppercase", marginBottom: "8px" }}>
                      ✦ KEY FORMULATIONS &amp; MONOGRAPHS
                    </div>
                    <ul style={{ paddingLeft: "16px", margin: "0 0 10px 0", fontSize: "0.83rem", color: "rgba(255,255,255,0.9)", lineHeight: "1.5" }}>
                      {domain.monographs.map((m, idx) => (
                        <li key={idx} style={{ marginBottom: "4px" }}>{m}</li>
                      ))}
                    </ul>
                    <div style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.14em", color: domain.color, textTransform: "uppercase", marginBottom: "4px" }}>
                      MOLECULAR PATHWAY
                    </div>
                    <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: "1.4" }}>
                      {domain.pathway}
                    </p>
                  </div>
                )}

              </div>

              {/* Card Footer Actions */}
              <div
                style={{
                  padding: "16px 28px",
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  borderTop: `1px solid ${domain.glowColor}`,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={() => setActiveTabId(isActive ? null : domain.id)}
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
                  {isActive ? "Hide Details ▲" : "Monographs & Pathways ✦"}
                </button>

                <Link
                  href={domain.href}
                  style={{
                    fontSize: "12.5px",
                    fontWeight: "900",
                    color: domain.color,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    textDecoration: "none",
                  }}
                >
                  Explore Domain →
                </Link>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
