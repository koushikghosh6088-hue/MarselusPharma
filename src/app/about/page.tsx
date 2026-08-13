"use client";

import { useEffect } from "react";
import Link from "next/link";
import SpineTab from "@/components/SpineTab";

export default function About() {
  useEffect(() => {
    import("@/lib/scroll-animations").then((mod) => mod.initScrollAnimations());
  }, []);

  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)", position: "relative" }}>
      
      {/* ═══ 1. HERO BANNER WITH SPINE TAB ═══ */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0", position: "relative" }}>
        <SpineTab label="ABOUT MARSELUS — OUR STORY" />

        <div className="container">
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow-badge" style={{ marginBottom: "var(--space-4)" }}>
              ✦ SPECIALIST PHARMACEUTICAL COMPANY
            </span>
            <h1 style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", marginBottom: "var(--space-6)" }}>
              About <span className="italic-accent">Marselus.</span>
            </h1>
            <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-muted)", lineHeight: "1.65" }}>
              Rooted in Kolkata, driven by science — a specialist pharmaceutical company committed to improving therapeutic outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 2. OUR STORY — HERITAGE OF HEALING & TIMELINE ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          <div className="grid-split">
            
            {/* Left: Narrative */}
            <div className="reveal">
              <span className="eyebrow-label">OUR JOURNEY</span>
              <h2 style={{ marginBottom: "var(--space-6)" }}>
                Heritage of <span className="italic-accent">Healing.</span>
              </h2>
              <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-4)" }}>
                Originating from our humble beginning in Kolkata, India, Marselus Pharmaceuticals embarked on an inspiring journey fuelled by a passion for innovation and a steadfast commitment to improving patient lives.
              </p>
              <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: "var(--space-8)" }}>
                Rooted in ethical practices, compliance, self-respect, and teamwork, we have flourished into a specialist pharmaceutical company, expanding strategically through synergistic collaborations. We are focused on gastroenterology, urology, pediatrics, and gynaecology — and continue evolving to meet the dynamic healthcare needs of the day.
              </p>
            </div>

            {/* Right: Milestone Timeline */}
            <div className="reveal">
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
                
                {/* Milestone 1 */}
                <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderLeft: "4px solid var(--color-forest)", background: "#ffffff", borderRadius: "var(--radius-md)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-forest)" }}>Foundation</span>
                    <span className="verify-tag">[VERIFY: Date]</span>
                  </div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "4px" }}>Established in Kolkata</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0 }}>
                    Marselus Pharmaceuticals established in Kolkata with an initial focus on gastroenterology and urology.
                  </p>
                </div>

                {/* Milestone 2 */}
                <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderLeft: "4px solid var(--color-gold)", background: "#ffffff", borderRadius: "var(--radius-md)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-forest)" }}>Expanding Horizons</span>
                    <span className="verify-tag">[VERIFY: Date]</span>
                  </div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "4px" }}>Therapeutic Footprint Growth</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0 }}>
                    Expanded into pediatrics and gynaecology, broadening our therapeutic footprint.
                  </p>
                </div>

                {/* Milestone 3 */}
                <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderLeft: "4px solid var(--color-artemes)", background: "#ffffff", borderRadius: "var(--radius-md)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-forest)" }}>Quality Certification</span>
                    <span className="verify-tag">[VERIFY: Date]</span>
                  </div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "4px" }}>ISO 9001:2015 Certification</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0 }}>
                    Achieved ISO 9001:2015 certification for our quality management system.
                  </p>
                </div>

                {/* Milestone 4 */}
                <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderLeft: "4px solid var(--color-uv60k)", background: "#ffffff", borderRadius: "var(--radius-md)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-forest)" }}>Hero Brands Launch</span>
                    <span className="verify-tag">[VERIFY: Date]</span>
                  </div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "4px" }}>Speciality Formulations Launch</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0 }}>
                    Launch of ARTEMES, SARANYA, IMMUNOMARS, and UV 60K.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 3. VISION (EDITORIAL SERIF PULL-QUOTE TREATMENT) ═══ */}
      <section className="section" style={{ padding: "var(--space-20) 0", background: "var(--color-cream)" }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto", padding: "var(--space-10)", borderLeft: "4px solid var(--color-gold)", background: "rgba(255, 255, 255, 0.7)", borderRadius: "0 var(--radius-lg) var(--radius-lg) 0" }}>
            <span className="eyebrow-label">OUR VISION</span>
            <blockquote style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--color-forest)", lineHeight: "1.4", margin: 0 }}>
              &ldquo;Our vision is to set a global benchmark in the pharmaceutical industry for innovation, ethical practices, and collaborative excellence — fostering a culture that values integrity, respect, and teamwork, so we can lead breakthroughs that anticipate and shape the future of health.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* ═══ 4. WHAT DRIVES US (3 CORE VALUES) ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto var(--space-12)" }}>
            <span className="eyebrow-label">OUR VALUES</span>
            <h2>What <span className="italic-accent">Drives Us.</span></h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-8)" }}>
            
            {/* Value 1 */}
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-lg)" }}>
              <span className="eyebrow-badge" style={{ marginBottom: "var(--space-4)" }}>ETHICS &amp; COMPLIANCE</span>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "var(--space-3)" }}>Ethical Practices</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                Unwavering commitment to ethical business practices, regulatory compliance, and transparent operations.
              </p>
            </div>

            {/* Value 2 */}
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-lg)" }}>
              <span className="eyebrow-badge" style={{ marginBottom: "var(--space-4)" }}>TEAMWORK</span>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "var(--space-3)" }}>Collaborative Culture</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                A collaborative culture where every team member contributes to improving patient outcomes.
              </p>
            </div>

            {/* Value 3 */}
            <div className="atrimus-glass-card reveal" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-lg)" }}>
              <span className="eyebrow-badge" style={{ marginBottom: "var(--space-4)" }}>INNOVATION</span>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "var(--space-3)" }}>Scientific Excellence</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                Continuous investment in R&amp;D to bring novel, effective therapeutic solutions to underserved areas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 5. MANUFACTURING EXCELLENCE & ISO CERTIFICATE ═══ */}
      <section className="section" style={{ padding: "var(--space-20) 0", background: "var(--color-cream)" }}>
        <div className="container">
          <div className="grid-split">
            
            <div className="reveal">
              <span className="eyebrow-label">QUALITY &amp; COMPLIANCE</span>
              <h2 style={{ marginBottom: "var(--space-6)" }}>
                Manufacturing <span className="italic-accent">Excellence.</span>
              </h2>
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
                Our manufacturing facilities meet the highest international standards, ensuring every product that reaches healthcare providers and patients is safe, effective, and consistently reliable.
              </p>

              <h4 style={{ marginBottom: "var(--space-4)" }}>ISO 9001:2015 Certified Quality Management System</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ display: "flex", gap: "10px", marginBottom: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--color-forest)", fontWeight: 800 }}>✓</span> WHO-GMP compliant manufacturing facilities
                </li>
                <li style={{ display: "flex", gap: "10px", marginBottom: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--color-forest)", fontWeight: 800 }}>✓</span> ISO 9001:2015 certified quality management system
                </li>
                <li style={{ display: "flex", gap: "10px", marginBottom: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--color-forest)", fontWeight: 800 }}>✓</span> Stringent in-process quality checks at every stage
                </li>
                <li style={{ display: "flex", gap: "10px", marginBottom: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--color-forest)", fontWeight: 800 }}>✓</span> Comprehensive stability testing and batch analysis
                </li>
                <li style={{ display: "flex", gap: "10px", marginBottom: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--color-forest)", fontWeight: 800 }}>✓</span> Regulatory compliance across all operations
                </li>
                <li style={{ display: "flex", gap: "10px", marginBottom: "12px", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--color-forest)", fontWeight: 800 }}>✓</span> Continuous quality improvement programmes
                </li>
              </ul>
            </div>

            {/* Certificate Scanner Card */}
            <div className="reveal">
              <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)", border: "1px solid rgba(15, 61, 40, 0.1)", textAlign: "center" }}>
                <div style={{ display: "inline-block", padding: "12px 24px", background: "var(--color-forest-soft)", borderRadius: "var(--radius-full)", marginBottom: "var(--space-6)" }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--color-forest)", fontSize: "1.1rem" }}>
                    ISO 9001:2015 CERTIFICATE
                  </span>
                </div>
                <div style={{ border: "2px dashed rgba(15, 61, 40, 0.2)", padding: "var(--space-8)", borderRadius: "var(--radius-md)", background: "var(--color-cream-light)" }}>
                  <img src="/assets/images/3d-shield.png" alt="ISO Quality Shield" style={{ width: "120px", margin: "0 auto var(--space-4)" }} />
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "4px" }}>Certified Quality Assurance</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                    Verified Quality Management System Accreditation
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ 6. LEADERSHIP SECTION (COMPLIANT NOTICE) ═══ */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            <span className="eyebrow-label">EXECUTIVE TEAM</span>
            <h2>Leadership at <span className="italic-accent">Marselus.</span></h2>
            <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", marginTop: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-lg)" }}>
              <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", margin: 0 }}>
                A dedicated team of pharmaceutical professionals driving our mission forward.<br />
                <span className="verify-tag" style={{ marginTop: "8px" }}>Leadership team details coming soon</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. CLOSING CTA ═══ */}
      <section className="section" style={{ padding: "var(--space-20) 0", background: "var(--color-cream)", textAlign: "center" }}>
        <div className="container">
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2>Partner with <span className="italic-accent">Marselus.</span></h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", marginBottom: "var(--space-8)" }}>
              Interested in learning more about our products, partnerships, or career opportunities?
            </p>
            <div className="btn-connected-group" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-forest)", color: "var(--color-text-on-dark)" }}>
                Get in Touch →
              </Link>
              <Link href="/products" className="btn-connected-pill btn-connected-pill--secondary" style={{ borderColor: "var(--color-forest)", color: "var(--color-forest)" }}>
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
