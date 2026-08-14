"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Domain {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  color: string;
  secondaryColor: string;
  accentGradient: string;
  glowColor: string;
  badgeBg: string;
  image: string;
  href: string;
  statChip: string;
  description: string;
  molecularTarget: string;
  clinicalMetrics: { label: string; val: string }[];
  keyFormulations: string[];
  pathwayDetails: string;
  patientImpact: string;
}

const SPECIALTY_DOMAINS: Domain[] = [
  {
    id: "gastroenterology",
    title: "Gut Mucosal Healing & IBD",
    subtitle: "Site-Specific Colonic Targeting & Inflammatory Bowel Remission",
    category: "GASTROENTEROLOGY",
    color: "#10b981",
    secondaryColor: "#34d399",
    accentGradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(6, 30, 24, 0.95) 100%)",
    glowColor: "rgba(16, 185, 129, 0.55)",
    badgeBg: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    image: "/assets/images/gastro-therapy.png",
    href: "/therapy-areas/gastroenterology",
    statChip: "✦ pH > 6.8 COLONIC TARGETED RELEASE",
    description: "Engineered drug delivery systems designed to bypass gastric acid degradation and deliver therapeutic mesalamine directly to inflamed colonic mucosa.",
    molecularTarget: "5-ASA Colonic Mucosal Absorption",
    clinicalMetrics: [
      { label: "TARGET DISSOLUTION", val: "pH > 6.8" },
      { label: "MUCOSAL PRECISION", val: "99.2%" },
    ],
    keyFormulations: ["ARTEMES 1.2g Prolonged Release", "Mesalamine MMX Colonic Matrix", "Mucosal Remission Protocol"],
    pathwayDetails: "pH-dependent enteric multi-matrix coating dissolves specifically at the distal ileum & colon, achieving localized anti-inflammatory therapeutic concentration.",
    patientImpact: "Provides once-daily dosing convenience, reducing systemic side effects and sustaining long-term ulcerative colitis remission.",
  },
  {
    id: "womens-health",
    title: "Hormonal & Metabolic Balance",
    subtitle: "Physiological Inositol Ratios & Metabolic Endocrine Restore",
    category: "WOMEN'S HEALTH",
    color: "#d6438c",
    secondaryColor: "#f472b6",
    accentGradient: "linear-gradient(135deg, rgba(214, 67, 140, 0.25) 0%, rgba(30, 6, 24, 0.95) 100%)",
    glowColor: "rgba(214, 67, 140, 0.55)",
    badgeBg: "linear-gradient(135deg, #d6438c 0%, #be185d 100%)",
    image: "/assets/images/womens-therapy.png",
    href: "/therapy-areas/womens-health",
    statChip: "✦ 40:1 PHYSIOLOGICAL INOSITOL RATIO",
    description: "Targeted combination therapy restoring insulin sensitivity, reducing hyperandrogenism, and optimizing follicular maturation in PCOS.",
    molecularTarget: "Ovarian Insulin & Endocrine Signaling",
    clinicalMetrics: [
      { label: "INOSITOL RATIO", val: "40 : 1" },
      { label: "OVULATORY HARMONY", val: "Clinical Grade" },
    ],
    keyFormulations: ["SARANYA 40:1 Inositol Blend", "Ovulatory Support Matrix", "Metabolic Endocrine Restore"],
    pathwayDetails: "Mirrors physiological plasma 40:1 ratio of Myo to D-Chiro Inositol to enhance intracellular GLUT-4 glucose transport and ovarian steroidogenesis.",
    patientImpact: "Restores regular menstrual cycles, improves ovulatory function, and addresses metabolic dermatological symptoms.",
  },
  {
    id: "clinical-nutrition",
    title: "Immunonutrition & Barrier Care",
    subtitle: "Epithelial Barrier Rebuild & Critical Mucosal Recovery",
    category: "CLINICAL NUTRITION",
    color: "#e08a2e",
    secondaryColor: "#fbbf24",
    accentGradient: "linear-gradient(135deg, rgba(224, 138, 46, 0.25) 0%, rgba(30, 18, 6, 0.95) 100%)",
    glowColor: "rgba(224, 138, 46, 0.55)",
    badgeBg: "linear-gradient(135deg, #e08a2e 0%, #c2410c 100%)",
    image: "/assets/images/nutrition-therapy.png",
    href: "/therapy-areas/clinical-nutrition",
    statChip: "✦ 15g L-GLUTAMINE BARRIER REBUILD",
    description: "High-potency immunonutrition engineered to fuel enterocyte repair, maintain gut junction integrity, and prevent bacterial translocation.",
    molecularTarget: "Enterocyte Tight Junction Protein Repair",
    clinicalMetrics: [
      { label: "L-GLUTAMINE DOSE", val: "15g / Sachet" },
      { label: "BARRIER DEFENSE", val: "Fast-Acting" },
    ],
    keyFormulations: ["IMMUNOMARS 15g L-Glutamine Sachet", "Amino Acid Barrier Defense", "Post-Surgical Mucosal Recovery"],
    pathwayDetails: "Upregulates tight junction proteins (occludin & claudin-1) while supplying metabolic fuel for rapidly dividing intestinal epithelial cells.",
    patientImpact: "Accelerates recovery post-surgery or gastrointestinal illness, supporting GI mucosal healing and immune resilience.",
  },
];

export default function SpecialtyFocusShowcase() {
  const [selectedDomainId, setSelectedDomainId] = useState<string>("gastroenterology");

  const activeDomain = SPECIALTY_DOMAINS.find((d) => d.id === selectedDomainId) || SPECIALTY_DOMAINS[0];

  return (
    <div
      className="specialty-focus-redesign-wrap"
      style={{
        position: "relative",
        zIndex: 1,
        borderRadius: "24px",
        background: "linear-gradient(135deg, #051a14 0%, #092c34 50%, #051a14 100%)",
        border: "1.5px solid rgba(217, 164, 65, 0.4)",
        boxShadow: "0 25px 70px rgba(0, 0, 0, 0.45)",
        padding: "clamp(16px, 3vw, 40px)",
        color: "#ffffff",
        overflow: "hidden",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Background Radial Glow Orbs */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "20%",
          width: "350px",
          height: "350px",
          background: `radial-gradient(circle, ${activeDomain.glowColor} 0%, transparent 70%)`,
          pointerEvents: "none",
          transition: "all 0.6s ease",
          opacity: 0.5,
        }}
      />

      {/* Top Header & Category Selector Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "var(--space-6)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: activeDomain.color,
              boxShadow: `0 0 12px ${activeDomain.color}`,
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: "11px", fontWeight: "900", letterSpacing: "0.14em", color: "var(--color-gold)", textTransform: "uppercase" }}>
            SPECIALTY FOCUS SHOWCASE
          </span>
        </div>

        {/* Category Filter Pills (Fully Responsive) */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", width: "100%", maxWidth: "100%" }}>
          {SPECIALTY_DOMAINS.map((domain) => {
            const isSelected = domain.id === selectedDomainId;
            return (
              <button
                key={domain.id}
                onClick={() => setSelectedDomainId(domain.id)}
                style={{
                  padding: "8px 14px",
                  borderRadius: "20px",
                  fontSize: "10.5px",
                  fontWeight: "900",
                  letterSpacing: "0.08em",
                  border: isSelected ? `2px solid ${domain.color}` : "1px solid rgba(255, 255, 255, 0.18)",
                  background: isSelected ? domain.color : "rgba(255, 255, 255, 0.08)",
                  color: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.85)",
                  boxShadow: isSelected ? `0 6px 18px ${domain.glowColor}` : "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  flex: "1 1 auto",
                  textAlign: "center",
                }}
              >
                {domain.category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Responsive Grid Layout (Stacks on mobile screens <= 992px) */}
      <div
        className="specialty-split-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "20px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Domain Card & Lab Details Stack */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "20px",
            alignItems: "stretch",
          }}
        >
          
          {/* Left Domain Overview Card */}
          <div
            style={{
              borderRadius: "20px",
              background: activeDomain.accentGradient,
              border: `1.5px solid ${activeDomain.color}`,
              boxShadow: `0 16px 40px rgba(0, 0, 0, 0.4)`,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "200px", overflow: "hidden" }}>
              <img
                src={activeDomain.image}
                alt={activeDomain.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "14px",
                  background: activeDomain.badgeBg,
                  color: "#ffffff",
                  fontSize: "10px",
                  fontWeight: "900",
                  letterSpacing: "0.12em",
                  padding: "5px 12px",
                  borderRadius: "16px",
                }}
              >
                {activeDomain.category}
              </div>
            </div>

            <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.5rem", fontFamily: "var(--font-heading)", fontWeight: "900", color: "#ffffff", marginBottom: "4px" }}>
                  {activeDomain.title}
                </h3>
                <p style={{ fontSize: "0.82rem", fontWeight: "800", color: activeDomain.secondaryColor, marginBottom: "12px" }}>
                  {activeDomain.subtitle}
                </p>
                <p style={{ fontSize: "0.88rem", color: "rgba(255, 255, 255, 0.85)", lineHeight: "1.55", marginBottom: "16px" }}>
                  {activeDomain.description}
                </p>

                <div
                  style={{
                    display: "inline-block",
                    fontSize: "10px",
                    fontWeight: "900",
                    letterSpacing: "0.06em",
                    padding: "6px 12px",
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "var(--color-gold)",
                    border: "1px solid rgba(217, 164, 65, 0.4)",
                    marginBottom: "16px",
                  }}
                >
                  {activeDomain.statChip}
                </div>
              </div>

              <div>
                <Link
                  href={activeDomain.href}
                  className="btn-connected-pill btn-connected-pill--primary"
                  style={{
                    background: activeDomain.color,
                    color: "#ffffff",
                    fontWeight: "900",
                    width: "100%",
                    textAlign: "center",
                    justifyContent: "center",
                    padding: "10px 16px",
                    fontSize: "12px",
                  }}
                >
                  Explore {activeDomain.category} Monographs →
                </Link>
              </div>
            </div>
          </div>

          {/* Right Laboratory HUD Panel */}
          <div
            style={{
              borderRadius: "20px",
              background: "rgba(8, 30, 24, 0.9)",
              backdropFilter: "blur(16px)",
              border: "1.5px solid rgba(255, 255, 255, 0.14)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontSize: "11px", fontWeight: "900", letterSpacing: "0.12em", color: activeDomain.color, textTransform: "uppercase", marginBottom: "14px", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "10px" }}>
                ✦ CLINICAL METRICS &amp; MOLECULAR PATHWAY
              </div>

              {/* Metrics Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
                {activeDomain.clinicalMetrics.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "10px 14px",
                      borderRadius: "14px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: `1px solid ${activeDomain.color}44`,
                    }}
                  >
                    <div style={{ fontSize: "9.5px", fontWeight: "900", letterSpacing: "0.1em", color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase" }}>
                      {m.label}
                    </div>
                    <div style={{ fontSize: "1.2rem", fontWeight: "900", fontFamily: "var(--font-heading)", color: activeDomain.color, marginTop: "2px" }}>
                      {m.val}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mechanism */}
              <div style={{ marginBottom: "16px" }}>
                <div style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.12em", color: "var(--color-gold)", textTransform: "uppercase", marginBottom: "6px" }}>
                  ✦ MOLECULAR MECHANISM OF ACTION
                </div>
                <p style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.88)", lineHeight: "1.55", margin: 0 }}>
                  {activeDomain.pathwayDetails}
                </p>
              </div>

              {/* Core Formulations Pills */}
              <div>
                <div style={{ fontSize: "9.5px", fontWeight: "900", letterSpacing: "0.1em", color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase", marginBottom: "8px" }}>
                  CORE FORMULATIONS
                </div>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {activeDomain.keyFormulations.map((form, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "10.5px",
                        fontWeight: "800",
                        padding: "5px 12px",
                        borderRadius: "12px",
                        background: "rgba(255, 255, 255, 0.08)",
                        color: activeDomain.secondaryColor,
                        border: `1px solid ${activeDomain.color}33`,
                      }}
                    >
                      ✦ {form}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div style={{ marginTop: "20px", paddingTop: "12px", borderTop: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "10.5px", color: "rgba(255, 255, 255, 0.6)", fontWeight: "700" }}>
                WHO-GMP CLINICAL DATA
              </span>
              <Link href="/science" style={{ fontSize: "11.5px", fontWeight: "900", color: "var(--color-gold)", textDecoration: "none" }}>
                Research Papers →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
