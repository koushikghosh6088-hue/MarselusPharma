"use client";

import Link from "next/link";
import SpineTab from "@/components/SpineTab";
import GiantWordmark from "@/components/GiantWordmark";
import AnnotationLeader from "@/components/AnnotationLeader";

export default function AboutPage() {
  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: 0, background: "var(--color-cream)" }}>
      
      {/* ═══ 1. HERO SHOWCASE ═══ */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0 var(--space-8) 0" }}>
        <SpineTab label="ABOUT MARSELUS PHARMACEUTICALS" />

        <div className="container">
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow-badge" style={{ marginBottom: "var(--space-4)" }}>
              ✦ SPECIALIST PHARMACEUTICAL COMPANY
            </span>
            <h1 style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", marginBottom: "var(--space-6)" }}>
              Rooted in Kolkata.<br />
              <span className="italic-accent">Driven by Science.</span>
            </h1>
            <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-muted)", lineHeight: "1.65" }}>
              Originating from Kolkata, Marselus Pharmaceuticals is a specialist pharmaceutical company committed to evidence-led innovation, uncompromised quality, and ethical care.
            </p>

            {/* Quick Stats Badges */}
            <div className="about-stat-row">
              <span className="about-stat-badge">
                <span style={{ color: "var(--color-artemes)", fontSize: "1rem" }}>●</span> 20+ Years Excellence
              </span>
              <span className="about-stat-badge">
                <span style={{ color: "var(--color-gold)", fontSize: "1rem" }}>●</span> WHO-GMP Compliant
              </span>
              <span className="about-stat-badge">
                <span style={{ color: "var(--color-uv60k)", fontSize: "1rem" }}>●</span> ISO 9001:2015 Certified
              </span>
              <span className="about-stat-badge">
                <span style={{ color: "var(--color-saranya)", fontSize: "1rem" }}>●</span> 4 Hero Formulations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. OUR STORY — HERITAGE OF HEALING ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="grid-split">
            
            {/* Left Narrative */}
            <div>
              <span className="eyebrow-label">OUR JOURNEY</span>
              <h2 style={{ marginBottom: "var(--space-6)", fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
                Heritage of <span className="italic-accent">Healing.</span>
              </h2>
              
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-4)" }}>
                Originating from our humble beginning in Kolkata, India, Marselus Pharmaceuticals embarked on an inspiring journey fuelled by a passion for innovation and a steadfast commitment to improving patient lives.
              </p>
              
              <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-8)" }}>
                Rooted in ethical practices, compliance, self-respect, and teamwork, we have flourished into a specialist pharmaceutical company, expanding strategically through synergistic collaborations. We focus on gastroenterology, urology, pediatrics, and gynaecology — evolving continuously to meet the dynamic healthcare needs of the day.
              </p>

              <div style={{ padding: "var(--space-4) var(--space-6)", background: "#ffffff", borderRadius: "16px", borderLeft: "4px solid var(--color-artemes)", boxShadow: "0 6px 20px rgba(15, 61, 40, 0.05)" }}>
                <span className="verify-tag" title="Verify specific founding year prior to publication">[VERIFY: Specific founding year under regulatory check]</span>
              </div>
            </div>

            {/* Right Milestone Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              
              <div className="timeline-step-card" style={{ borderLeftColor: "var(--color-artemes)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <strong style={{ fontSize: "1.1rem", color: "var(--color-forest)" }}>Kolkata Foundation</strong>
                  <span className="slide-badge" style={{ fontSize: "11px", background: "rgba(29, 158, 117, 0.15)", color: "var(--color-artemes)" }}>ESTABLISHED</span>
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", margin: 0 }}>
                  Founded with a vision to deliver reliable, high-integrity specialty formulations to patients across Eastern India.
                </p>
              </div>

              <div className="timeline-step-card" style={{ borderLeftColor: "var(--color-gold)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <strong style={{ fontSize: "1.1rem", color: "var(--color-forest)" }}>Therapy Expansion</strong>
                  <span className="slide-badge" style={{ fontSize: "11px", background: "rgba(217, 164, 65, 0.15)", color: "var(--color-forest)" }}>GROWTH</span>
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", margin: 0 }}>
                  Expanded into Gastroenterology, Women&apos;s Health, Pediatrics, and Clinical Nutrition with targeted formulations.
                </p>
              </div>

              <div className="timeline-step-card" style={{ borderLeftColor: "var(--color-uv60k)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <strong style={{ fontSize: "1.1rem", color: "var(--color-forest)" }}>Quality Certification</strong>
                  <span className="slide-badge" style={{ fontSize: "11px", background: "rgba(46, 127, 224, 0.15)", color: "var(--color-uv60k)" }}>ISO 9001:2015</span>
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", margin: 0 }}>
                  Achieved WHO-GMP manufacturing compliance and ISO 9001:2015 certified quality management systems.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═══ 3. EDITORIAL VISION & MISSION (GLASS PULL-QUOTE) ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0" }}>
        <div className="container">
          <div className="vision-card-editorial">
            
            {/* Background Ambient Glow */}
            <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "var(--color-gold)", filter: "blur(90px)", opacity: 0.15, pointerEvents: "none" }}></div>

            <span className="eyebrow-badge" style={{ background: "rgba(217, 164, 65, 0.2)", color: "var(--color-gold)", borderColor: "rgba(217, 164, 65, 0.4)", marginBottom: "var(--space-6)" }}>
              OUR GUIDING VISION
            </span>

            <blockquote style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.35rem)", fontFamily: "var(--font-heading)", fontStyle: "italic", lineHeight: "1.5", color: "#ffffff", marginBottom: "var(--space-8)" }}>
              &ldquo;To set a global benchmark in the pharmaceutical industry for innovation, ethical practices, and collaborative excellence — fostering a culture that values integrity, respect, and teamwork, so we can lead breakthroughs that anticipate and shape the future of health.&rdquo;
            </blockquote>

            <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
              <div>
                <strong style={{ display: "block", fontSize: "1.1rem", color: "var(--color-gold)" }}>Marselus Corporate Charter</strong>
                <span style={{ fontSize: "0.85rem", color: "rgba(247, 244, 236, 0.7)" }}>Specialist Pharmaceuticals Division</span>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <span className="verify-tag" style={{ background: "rgba(255, 255, 255, 0.1)", color: "var(--color-gold)", borderColor: "rgba(217, 164, 65, 0.3)" }}>
                  Verified Official Charter Statement
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 4. WHAT DRIVES US — 4 CORE VALUES ═══ */}
      <section className="section" style={{ padding: "0 0 var(--space-20) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto var(--space-12)" }}>
            <span className="eyebrow-label">OUR CORE PRINCIPLES</span>
            <h2>What <span className="italic-accent">Drives Us.</span></h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)" }}>
              Four foundational pillars shaping every formulation, partnership, and clinical interaction at Marselus.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-6)" }}>
            
            {/* Value 1 */}
            <div className="value-card-hover" style={{ borderTop: "4px solid var(--color-artemes)" }}>
              <span className="eyebrow-badge" style={{ color: "var(--color-artemes)", borderColor: "rgba(29, 158, 117, 0.3)", marginBottom: "var(--space-4)" }}>
                INTEGRITY
              </span>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "var(--space-3)", color: "var(--color-forest)" }}>Ethics &amp; Compliance</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                Unwavering adherence to WHO-GMP standards, regulatory compliance, and ethical pharmaceutical practices.
              </p>
            </div>

            {/* Value 2 */}
            <div className="value-card-hover" style={{ borderTop: "4px solid var(--color-gold)" }}>
              <span className="eyebrow-badge" style={{ color: "var(--color-gold)", borderColor: "rgba(217, 164, 65, 0.3)", marginBottom: "var(--space-4)" }}>
                CULTURE
              </span>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "var(--space-3)", color: "var(--color-forest)" }}>Collaborative Teamwork</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                Fostering an inclusive workplace where self-respect, mutual trust, and shared purpose drive daily performance.
              </p>
            </div>

            {/* Value 3 */}
            <div className="value-card-hover" style={{ borderTop: "4px solid var(--color-uv60k)" }}>
              <span className="eyebrow-badge" style={{ color: "var(--color-uv60k)", borderColor: "rgba(46, 127, 224, 0.3)", marginBottom: "var(--space-4)" }}>
                INNOVATION
              </span>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "var(--space-3)", color: "var(--color-forest)" }}>Scientific Excellence</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                Continuous investment in novel drug delivery mechanisms to solve complex therapeutic challenges.
              </p>
            </div>

            {/* Value 4 */}
            <div className="value-card-hover" style={{ borderTop: "4px solid var(--color-saranya)" }}>
              <span className="eyebrow-badge" style={{ color: "var(--color-saranya)", borderColor: "rgba(214, 67, 140, 0.3)", marginBottom: "var(--space-4)" }}>
                CARE
              </span>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "var(--space-3)", color: "var(--color-forest)" }}>Patient Centricity</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                Designing formulations that prioritize patient adherence, comfort, and long-term health outcomes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 5. MANUFACTURING EXCELLENCE & QUALITY SHIELD ═══ */}
      <section className="section" style={{ padding: "0 0 var(--space-20) 0" }}>
        <div className="container">
          <div className="grid-split">
            
            <div>
              <span className="eyebrow-label">QUALITY ASSURANCE</span>
              <h2 style={{ marginBottom: "var(--space-6)", fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
                Manufacturing <span className="italic-accent">Excellence.</span>
              </h2>
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", lineHeight: "1.65", marginBottom: "var(--space-6)" }}>
                Our manufacturing partners maintain WHO-GMP compliance and an ISO 9001:2015 certified Quality Management System, ensuring rigorous batch-to-batch consistency.
              </p>

              <AnnotationLeader title="ISO 9001:2015 Quality Management System" description="Certified processes covering raw material sourcing, in-process controls, and finished batch testing." />
              <AnnotationLeader title="WHO-GMP Manufacturing Standards" description="World Health Organization Good Manufacturing Practices for sterility, potency, and purity." />
              <AnnotationLeader title="Stability & Dissolution Testing" description="Accelerated stability and site-specific dissolution profiling for every formulation." />
            </div>

            {/* 3D Quality Shield Card */}
            <div>
              <div className="atrimus-glass-card" style={{ padding: "var(--space-10)", background: "#ffffff", borderRadius: "32px", textAlign: "center", border: "1px solid rgba(15, 61, 40, 0.1)", boxShadow: "0 20px 40px rgba(15, 61, 40, 0.08)" }}>
                <img src="/assets/images/3d-shield.png" alt="3D Quality Shield Render" style={{ width: "65%", height: "auto", margin: "0 auto var(--space-6)", filter: "drop-shadow(0 15px 30px rgba(15, 61, 40, 0.15))" }} />
                <h4 style={{ fontSize: "1.25rem", color: "var(--color-forest)", marginBottom: "6px" }}>Rigorous Quality Audits</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0 }}>
                  Every batch undergoes 100% analytical testing before clinical distribution.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 6. REGULATORY LEADERSHIP NOTICE CARD ═══ */}
      <section className="section" style={{ padding: "0 0 var(--space-16) 0" }}>
        <div className="container">
          <div style={{ background: "rgba(15, 61, 40, 0.04)", padding: "var(--space-8)", borderRadius: "24px", border: "1px dashed rgba(15, 61, 40, 0.2)", textAlign: "center" }}>
            <span className="verify-tag" style={{ marginBottom: "var(--space-3)" }}>
              REGULATORY COMPLIANCE NOTICE
            </span>
            <h4 style={{ fontSize: "1.1rem", color: "var(--color-forest)", marginBottom: "4px" }}>
              Corporate Leadership &amp; Board Directory
            </h4>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", maxWidth: "54ch", margin: "0 auto" }}>
              Detailed executive bios and medical board member profiles are currently undergoing regulatory compliance review and will be published upon approval.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 7. GIANT WORDMARK FOOTER REVEAL ═══ */}
      <GiantWordmark />

    </main>
  );
}
