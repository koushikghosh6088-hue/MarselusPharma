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
  const [activeDrawerId, setActiveDrawerId] = useState<string | null>("gastroenterology");

  const activeDomain = SPECIALTY_DOMAINS.find((d) => d.id === selectedDomainId) || SPECIALTY_DOMAINS[0];

  return (
    <div
      className="specialty-focus-redesign-wrap"
      style={{
        position: "relative",
        zIndex: 1,
        borderRadius: "32px",
        background: "linear-gradient(135deg, #051a14 0%, #092c34 50%, #051a14 100%)",
        border: "1.5px solid rgba(217, 164, 65, 0.4)",
        boxShadow: "0 25px 70px rgba(0, 0, 0, 0.45), 0 0 40px rgba(16, 185, 129, 0.15) inset",
        padding: "clamp(24px, 4vw, 48px)",
        color: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* Background Radial Glow Orbs */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "20%",
          width: "450px",
          height: "450px",
          background: `radial-gradient(circle, ${activeDomain.glowColor} 0%, transparent 70%)`,
          pointerEvents: "none",
          transition: "all 0.6s ease",
          opacity: 0.6,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(217, 164, 65, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Top Header Badge Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: "var(--space-10)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: activeDomain.color,
              boxShadow: `0 0 14px ${activeDomain.color}`,
            }}
          />
          <span style={{ fontSize: "11px", fontWeight: "900", letterSpacing: "0.18em", color: "var(--color-gold)", textTransform: "uppercase" }}>
            HIGH-PRECISION SPECIALTY DOMAINS
          </span>
        </div>

        {/* Domain Navigation Selector Pills */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {SPECIALTY_DOMAINS.map((domain) => {
            const isSelected = domain.id === selectedDomainId;
            return (
              <button
                key={domain.id}
                onClick={() => {
                  setSelectedDomainId(domain.id);
                  setActiveDrawerId(domain.id);
                }}
                style={{
                  padding: "8px 16px",
                  borderRadius: "24px",
                  fontSize: "11px",
                  fontWeight: "900",
                  letterSpacing: "0.1em",
                  border: isSelected ? `2px solid ${domain.color}` : "1px solid rgba(255, 255, 255, 0.15)",
                  background: isSelected ? domain.color : "rgba(255, 255, 255, 0.06)",
                  color: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.75)",
                  boxShadow: isSelected ? `0 6px 20px ${domain.glowColor}` : "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {domain.category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Split Showcase Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "var(--space-8)",
          alignItems: "stretch",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Left Interactive 3D Card (Spans 5 Columns) */}
        <div
          className="reveal"
          style={{
            gridColumn: "span 5",
            borderRadius: "24px",
            background: activeDomain.accentGradient,
            border: `1.5px solid ${activeDomain.color}`,
            boxShadow: `0 18px 45px rgba(0, 0, 0, 0.4), 0 0 30px ${activeDomain.glowColor}25`,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Image Banner */}
          <div style={{ position: "relative", width: "100%", height: "220px", overflow: "hidden" }}>
            <img
              src={activeDomain.image}
              alt={activeDomain.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.9) contrast(1.1)",
              }}
            />
            
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                background: activeDomain.badgeBg,
                color: "#ffffff",
                fontSize: "10px",
                fontWeight: "900",
                letterSpacing: "0.14em",
                padding: "5px 14px",
                borderRadius: "18px",
                boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
              }}
            >
              {activeDomain.category}
            </div>
          </div>

          {/* Card Body Copy */}
          <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ fontSize: "1.75rem", fontFamily: "var(--font-heading)", fontWeight: "900", color: "#ffffff", marginBottom: "6px" }}>
                {activeDomain.title}
              </h3>
              <p style={{ fontSize: "0.82rem", fontWeight: "800", color: activeDomain.secondaryColor, marginBottom: "14px" }}>
                {activeDomain.subtitle}
              </p>
              <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.85)", lineHeight: "1.6", marginBottom: "20px" }}>
                {activeDomain.description}
              </p>

              {/* Stat Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontSize: "10px",
                  fontWeight: "900",
                  letterSpacing: "0.08em",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "var(--color-gold)",
                  border: "1px solid rgba(217, 164, 65, 0.4)",
                }}
              >
                {activeDomain.statChip}
              </div>
            </div>

            <div style={{ marginTop: "24px" }}>
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
                }}
              >
                Explore {activeDomain.category} Monographs →
              </Link>
            </div>
          </div>
        </div>

        {/* Right Interactive Laboratory HUD (Spans 7 Columns) */}
        <div
          className="reveal"
          style={{
            gridColumn: "span 7",
            borderRadius: "24px",
            background: "rgba(8, 30, 24, 0.85)",
            backdropFilter: "blur(20px)",
            border: "1.5px solid rgba(255, 255, 255, 0.14)",
            boxShadow: "0 18px 45px rgba(0, 0, 0, 0.35)",
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            
            {/* Header Telemetry Badge */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "14px" }}>
              <div style={{ fontSize: "11px", fontWeight: "900", letterSpacing: "0.14em", color: activeDomain.color, textTransform: "uppercase" }}>
                ✦ MOLECULAR LAB PROFILE: {activeDomain.title}
              </div>
              <span style={{ fontSize: "10px", fontWeight: "800", color: "var(--color-gold)", letterSpacing: "0.08em" }}>
                WHO-GMP CLINICAL EVIDENCE
              </span>
            </div>

            {/* Metrics Chips Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "24px" }}>
              {activeDomain.clinicalMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "14px 18px",
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: `1px solid ${activeDomain.color}44`,
                  }}
                >
                  <div style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.12em", color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase" }}>
                    {metric.label}
                  </div>
                  <div style={{ fontSize: "1.35rem", fontWeight: "900", fontFamily: "var(--font-heading)", color: activeDomain.color, marginTop: "2px" }}>
                    {metric.val}
                  </div>
                </div>
              ))}
            </div>

            {/* Target Mechanism Section */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.14em", color: "var(--color-gold)", textTransform: "uppercase", marginBottom: "8px" }}>
                ✦ TARGET MOLECULAR MECHANISM
              </div>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "16px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  fontSize: "0.9rem",
                  color: "rgba(255, 255, 255, 0.9)",
                  lineHeight: "1.65",
                }}
              >
                {activeDomain.pathwayDetails}
              </div>
            </div>

            {/* Patient Clinical Impact */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.14em", color: activeDomain.secondaryColor, textTransform: "uppercase", marginBottom: "8px" }}>
                ✦ CLINICAL PATIENT IMPACT
              </div>
              <div style={{ fontSize: "0.88rem", color: "rgba(255, 255, 255, 0.85)", lineHeight: "1.6" }}>
                {activeDomain.patientImpact}
              </div>
            </div>

            {/* Key Formulations Badges */}
            <div>
              <div style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.14em", color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase", marginBottom: "10px" }}>
                CORE FORMULATIONS IN DOMAIN
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {activeDomain.keyFormulations.map((form, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: "11px",
                      fontWeight: "800",
                      padding: "6px 14px",
                      borderRadius: "14px",
                      background: `rgba(${activeDomain.id === "gastroenterology" ? "16, 185, 129" : activeDomain.id === "womens-health" ? "214, 67, 140" : "224, 138, 46"}, 0.15)`,
                      color: activeDomain.secondaryColor,
                      border: `1px solid ${activeDomain.color}44`,
                    }}
                  >
                    ✦ {form}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* HUD Footer Action Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "28px",
              paddingTop: "16px",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.6)", fontWeight: "700" }}>
              SELECT DOMAIN TO INSPECT MOLECULAR DATA
            </span>

            <Link
              href="/science"
              style={{
                fontSize: "12px",
                fontWeight: "900",
                color: "var(--color-gold)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                textDecoration: "none",
              }}
            >
              Scientific Research Papers →
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
