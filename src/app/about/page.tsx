"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Metadata } from "next";

export default function About() {
  useEffect(() => {
    import("@/lib/scroll-animations").then((mod) => mod.initScrollAnimations());
  }, []);

  return (
    <main className="page-content atrimus-white-bg" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)", position: "relative", overflow: "hidden" }}>
      
      {/* Background Glow Mesh Orbs */}
      <div className="hero-glow-orb hero-glow-orb--1" style={{ top: "5%", left: "-10%", opacity: 0.6 }}></div>
      <div className="hero-glow-orb hero-glow-orb--2" style={{ top: "35%", right: "-10%", opacity: 0.6 }}></div>
      <div className="hero-glow-orb hero-glow-orb--3" style={{ bottom: "10%", left: "30%", opacity: 0.5 }}></div>
      <div className="hero-grid-matrix"></div>

      {/* ═══ 1. VIBRANT GLASSMOPHIC HERO BANNER ═══ */}
      <section className="section" style={{ padding: "0 0 var(--space-12) 0", position: "relative", zIndex: 10 }}>
        <div className="container">
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
            <span className="slide-badge slide-badge--1" style={{ marginBottom: "var(--space-4)" }}>
              ✦ ESTABLISHED 2003 IN KOLKATA
            </span>
            <h1
              style={{
                fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)",
                fontWeight: 900,
                color: "var(--color-navy)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                marginBottom: "var(--space-6)",
                textTransform: "uppercase",
              }}
            >
              HERITAGE OF <span className="gradient-accent-1">HEALING.</span><br />
              DRIVEN BY <span className="gradient-accent-2">SCIENCE.</span>
            </h1>
            <p style={{ fontSize: "var(--text-xl)", color: "var(--color-gray-600)", lineHeight: "1.65", marginBottom: "var(--space-8)" }}>
              A specialist pharmaceutical company committed to evidence-based innovation across Gastroenterology, Women&apos;s Health, and Clinical Nutrition for over two decades.
            </p>

            {/* Quick Stats Pill Row */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
              <span className="slide-badge slide-badge--1">✓ 20+ YEARS EXCELLENCE</span>
              <span className="slide-badge slide-badge--2">✓ 20,000+ PATIENTS SERVED</span>
              <span className="slide-badge slide-badge--3">✓ 4 CORE HERO FORMULATIONS</span>
              <span className="slide-badge slide-badge--4">✓ ISO 9001:2015 CERTIFIED</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. INTERACTIVE 3D VISUAL NARRATIVE & TIMELINE ═══ */}
      <section className="section" style={{ padding: "var(--space-12) 0", position: "relative", zIndex: 10 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-12)", alignItems: "center" }}>
            
            {/* Left Column: Story & 3D Capsule Render */}
            <div className="reveal">
              <span className="slide-badge slide-badge--2" style={{ marginBottom: "var(--space-3)" }}>
                OUR JOURNEY
              </span>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 900, color: "var(--color-navy)", lineHeight: 1.1, marginBottom: "var(--space-6)", textTransform: "uppercase" }}>
                TWO DECADES OF <span className="gradient-accent-1">CLINICAL RIGOR</span>
              </h2>
              <p style={{ fontSize: "var(--text-base)", color: "var(--color-gray-600)", lineHeight: "1.7", marginBottom: "var(--space-4)" }}>
                Founded in Kolkata in 2003, Marselus Pharmaceuticals began with a singular mission: bringing scientific discipline, ethical compliance, and uncompromised quality to specialized healthcare domains.
              </p>
              <p style={{ fontSize: "var(--text-base)", color: "var(--color-gray-600)", lineHeight: "1.7", marginBottom: "var(--space-8)" }}>
                By developing targeted delivery systems like our prolonged-release MMX™ mesalamine technology and clinically validated 40:1 inositol formulations, we empower physicians to deliver predictable, transformative patient outcomes.
              </p>

              {/* Floating 3D Capsule Asset */}
              <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-6)", background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(236, 253, 245, 0.8) 100%)", borderRadius: "20px" }}>
                <img src="/assets/images/atrimus-capsule.png" className="float-3d" alt="3D Capsule Render" style={{ width: "100px", height: "auto", filter: "drop-shadow(0 10px 20px rgba(16, 185, 129, 0.2))" }} />
                <div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--color-navy)", margin: 0 }}>Targeted Colonic Technology</h4>
                  <p style={{ fontSize: "12px", color: "var(--color-gray-500)", margin: "4px 0 0 0" }}>Engineered for uniform active ingredient release along mucosa.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Holographic Timeline */}
            <div className="reveal">
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
                
                {/* 2003 Timeline Item */}
                <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderLeft: "4px solid #10b981", background: "linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(236, 253, 245, 0.75) 100%)", borderRadius: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#059669" }}>2003</span>
                    <span className="slide-badge slide-badge--1">FOUNDATION</span>
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "4px" }}>Company Established in Kolkata</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-gray-600)", margin: 0 }}>Marselus Pharmaceuticals was founded with an initial focus on gastroenterology and specialized therapeutic care.</p>
                </div>

                {/* 2010 Timeline Item */}
                <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderLeft: "4px solid #3b82f6", background: "linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(239, 246, 255, 0.75) 100%)", borderRadius: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#2563eb" }}>2010</span>
                    <span className="slide-badge slide-badge--2">THERAPEUTIC EXPANSION</span>
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "4px" }}>Women&apos;s Health &amp; Pediatrics</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-gray-600)", margin: 0 }}>Expanded therapeutic footprint into Gynaecology, PCOS management, and specialized pediatric nutrition.</p>
                </div>

                {/* 2018 Timeline Item */}
                <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderLeft: "4px solid #a855f7", background: "linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(250, 245, 255, 0.75) 100%)", borderRadius: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#7c3aed" }}>2018</span>
                    <span className="slide-badge slide-badge--3">QUALITY ACCREDITATION</span>
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "4px" }}>ISO 9001:2015 Certification</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-gray-600)", margin: 0 }}>Achieved ISO 9001:2015 quality management accreditation and WHO-GMP compliance across operations.</p>
                </div>

                {/* 2024 Timeline Item */}
                <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderLeft: "4px solid #06b6d4", background: "linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(236, 254, 255, 0.75) 100%)", borderRadius: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#0284c7" }}>2024</span>
                    <span className="slide-badge slide-badge--4">HERO BRANDS LAUNCH</span>
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "4px" }}>Launch of Core Formulations</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-gray-600)", margin: 0 }}>National launch of ARTEMES 1.2g, SARANYA, IMMUNOMARS, and UV 60K hero formulations.</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 3. COLORFUL NEON CORE VALUE CARDS ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", position: "relative", zIndex: 10 }}>
        <div className="container">
          
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto var(--space-12)" }}>
            <span className="slide-badge slide-badge--3" style={{ marginBottom: "var(--space-3)" }}>
              PHILOSOPHICAL PILLARS
            </span>
            <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", fontWeight: 900, color: "var(--color-navy)", textTransform: "uppercase" }}>
              WHAT <span className="gradient-accent-3">DRIVES US</span>
            </h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-gray-600)", marginTop: "var(--space-3)" }}>
              Our values shape every clinical trial, manufacturing standard, and patient interaction.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-8)" }}>
            
            {/* Card 1: Ethics */}
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)", borderTop: "4px solid #10b981", background: "linear-gradient(180deg, rgba(236, 253, 245, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)", borderRadius: "24px" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "16px", background: "rgba(16, 185, 129, 0.15)", color: "#059669", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-6)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "28px", height: "28px" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Ethics &amp; Compliance</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", lineHeight: "1.6", margin: 0 }}>
                Unwavering adherence to international regulatory standards, WHO-GMP protocols, and transparent operations.
              </p>
            </div>

            {/* Card 2: Scientific Rigor */}
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)", borderTop: "4px solid #3b82f6", background: "linear-gradient(180deg, rgba(239, 246, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)", borderRadius: "24px" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "16px", background: "rgba(37, 99, 235, 0.15)", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-6)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "28px", height: "28px" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Scientific Rigor</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", lineHeight: "1.6", margin: 0 }}>
                Continuous investment in R&amp;D to engineer specialized combination molecules addressing high unmet clinical needs.
              </p>
            </div>

            {/* Card 3: Patient Centricity */}
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)", borderTop: "4px solid #a855f7", background: "linear-gradient(180deg, rgba(250, 245, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)", borderRadius: "24px" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "16px", background: "rgba(168, 85, 247, 0.15)", color: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-6)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "28px", height: "28px" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Patient Centricity</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", lineHeight: "1.6", margin: 0 }}>
                Designing drug delivery mechanisms that minimize dosage frequency and optimize patient comfort and compliance.
              </p>
            </div>

            {/* Card 4: Global Partnerships */}
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)", borderTop: "4px solid #06b6d4", background: "linear-gradient(180deg, rgba(236, 254, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)", borderRadius: "24px" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "16px", background: "rgba(6, 182, 212, 0.15)", color: "#0284c7", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-6)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "28px", height: "28px" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Collaborative Vision</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", lineHeight: "1.6", margin: 0 }}>
                Building lasting relationships of trust with healthcare providers, clinical institutions, and distribution networks.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 4. EXECUTIVE LEADERSHIP TEAM ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", position: "relative", zIndex: 10 }}>
        <div className="container">
          
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto var(--space-12)" }}>
            <span className="slide-badge slide-badge--4" style={{ marginBottom: "var(--space-3)" }}>
              EXECUTIVE LEADERSHIP
            </span>
            <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", fontWeight: 900, color: "var(--color-navy)", textTransform: "uppercase" }}>
              MEET OUR <span className="gradient-accent-4">LEADERSHIP TEAM</span>
            </h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-gray-600)", marginTop: "var(--space-3)" }}>
              A dedicated team of pharmaceutical pioneers driving our mission forward.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--space-8)" }}>
            
            {/* Leader 1 */}
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)", textAlign: "center", borderRadius: "24px" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "linear-gradient(135deg, #059669, #10b981)", color: "#ffffff", fontSize: "1.5rem", fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto var(--space-4)", boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)" }}>
                MP
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 900, color: "var(--color-navy)", marginBottom: "4px" }}>Managing Director</h3>
              <p style={{ fontSize: "12px", fontWeight: 800, color: "#059669", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "var(--space-3)" }}>Founder &amp; Executive Visionary</p>
              <p style={{ fontSize: "13px", color: "var(--color-gray-600)", lineHeight: "1.5", margin: 0 }}>Over 22 years of leadership in pharmaceutical manufacturing and strategic expansion.</p>
            </div>

            {/* Leader 2 */}
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)", textAlign: "center", borderRadius: "24px" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "linear-gradient(135deg, #2563eb, #3b82f6)", color: "#ffffff", fontSize: "1.5rem", fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto var(--space-4)", boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" }}>
                RD
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 900, color: "var(--color-navy)", marginBottom: "4px" }}>Head of R&amp;D</h3>
              <p style={{ fontSize: "12px", fontWeight: 800, color: "#2563eb", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "var(--space-3)" }}>Scientific Leadership</p>
              <p style={{ fontSize: "13px", color: "var(--color-gray-600)", lineHeight: "1.5", margin: 0 }}>Directs MMX™ multi-matrix polymer research and active dosage formulation.</p>
            </div>

            {/* Leader 3 */}
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)", textAlign: "center", borderRadius: "24px" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #a855f7)", color: "#ffffff", fontSize: "1.5rem", fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto var(--space-4)", boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)" }}>
                QA
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 900, color: "var(--color-navy)", marginBottom: "4px" }}>Quality Director</h3>
              <p style={{ fontSize: "12px", fontWeight: 800, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "var(--space-3)" }}>Quality Assurance</p>
              <p style={{ fontSize: "13px", color: "var(--color-gray-600)", lineHeight: "1.5", margin: 0 }}>Oversees ISO 9001:2015 audit compliance and WHO-GMP batch validation.</p>
            </div>

            {/* Leader 4 */}
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)", textAlign: "center", borderRadius: "24px" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "linear-gradient(135deg, #0284c7, #06b6d4)", color: "#ffffff", fontSize: "1.5rem", fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto var(--space-4)", boxShadow: "0 10px 25px rgba(6, 182, 212, 0.3)" }}>
                MK
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 900, color: "var(--color-navy)", marginBottom: "4px" }}>Marketing Head</h3>
              <p style={{ fontSize: "12px", fontWeight: 800, color: "#0284c7", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "var(--space-3)" }}>Brand Strategy</p>
              <p style={{ fontSize: "13px", color: "var(--color-gray-600)", lineHeight: "1.5", margin: 0 }}>Manages medical communications and national specialist outreach.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 5. BOTTOM CTA BANNER ═══ */}
      <section className="section" style={{ padding: "0 0 var(--space-12) 0", position: "relative", zIndex: 10 }}>
        <div className="container">
          <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-12)", textAlign: "center", background: "linear-gradient(135deg, rgba(244, 249, 246, 0.95) 0%, rgba(226, 239, 224, 0.5) 100%)", borderRadius: "28px" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 900, color: "var(--color-navy)", textTransform: "uppercase", marginBottom: "var(--space-4)" }}>
              PARTNER WITH <span className="gradient-accent-1">MARSELUS PHARMACEUTICALS</span>
            </h2>
            <p style={{ color: "var(--color-gray-600)", fontSize: "var(--text-lg)", marginBottom: "var(--space-8)", maxWidth: "54ch", margin: "0 auto var(--space-8)" }}>
              Explore our core formulation portfolio or contact our medical affairs team for prescribing information and inquiries.
            </p>
            <div className="btn-connected-group">
              <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary">
                Contact Medical Team →
              </Link>
              <Link href="/products" className="btn-connected-pill btn-connected-pill--secondary">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
