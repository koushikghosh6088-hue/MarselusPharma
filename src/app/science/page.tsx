"use client";

import Link from "next/link";
import SpineTab from "@/components/SpineTab";

export default function SciencePage() {
  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)", background: "var(--color-cream)" }}>
      
      {/* Hero Banner */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="SCIENCE & RESOURCES — MARSELUS" />

        <div className="container">
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow-badge" style={{ marginBottom: "var(--space-4)" }}>
              ✦ MEDICAL AFFAIRS &amp; EVIDENCE
            </span>
            <h1 style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", marginBottom: "var(--space-6)" }}>
              Science &amp; <span className="italic-accent">Resources.</span>
            </h1>
            <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-muted)", lineHeight: "1.65" }}>
              Access product monographs, clinical evidence, therapy education, and downloadable resources for healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Four Clinical Modules */}
      <section className="section" style={{ padding: "var(--space-12) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-8)" }}>
            
            {/* Module 1: Product Monographs */}
            <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)", border: "1px solid rgba(15, 61, 40, 0.1)" }}>
              <span className="eyebrow-badge" style={{ marginBottom: "var(--space-4)" }}>01 · MONOGRAPHS</span>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "var(--space-3)" }}>Product Monographs</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                Comprehensive monographs for ARTEMES, SARANYA, IMMUNOMARS, and UV 60K, including prescribing information, pharmacology, and clinical data.
              </p>
              <div style={{ padding: "8px 14px", background: "var(--color-cream-light)", borderRadius: "var(--radius-sm)" }}>
                <span className="verify-tag" style={{ margin: 0 }}>Monographs available for download once approved by medical/regulatory team</span>
              </div>
            </div>

            {/* Module 2: Clinical Evidence */}
            <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)", border: "1px solid rgba(15, 61, 40, 0.1)" }}>
              <span className="eyebrow-badge" style={{ marginBottom: "var(--space-4)" }}>02 · EVIDENCE</span>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "var(--space-3)" }}>Clinical Evidence</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                Peer-reviewed studies and evidence summaries supporting efficacy and safety across all therapy areas.
              </p>
              <div style={{ padding: "8px 14px", background: "var(--color-cream-light)", borderRadius: "var(--radius-sm)" }}>
                <span className="verify-tag" style={{ margin: 0 }}>Currently under medical review for accuracy and compliance</span>
              </div>
            </div>

            {/* Module 3: Therapy Education */}
            <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)", border: "1px solid rgba(15, 61, 40, 0.1)" }}>
              <span className="eyebrow-badge" style={{ marginBottom: "var(--space-4)" }}>03 · EDUCATION</span>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "var(--space-3)" }}>Therapy Education</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                Educational materials on Gastroenterology, Women&apos;s Health, and Clinical Nutrition for healthcare professionals.
              </p>
            </div>

            {/* Module 4: Download Centre */}
            <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)", border: "1px solid rgba(15, 61, 40, 0.1)" }}>
              <span className="eyebrow-badge" style={{ marginBottom: "var(--space-4)" }}>04 · DOWNLOADS</span>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "var(--space-3)" }}>Download Centre</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                Approved product information leaflets, prescribing guides, and scientific resources as versioned PDFs.
              </p>
              <div style={{ padding: "8px 14px", background: "var(--color-cream-light)", borderRadius: "var(--radius-sm)" }}>
                <span className="verify-tag" style={{ margin: 0 }}>Available after regulatory approval; all documents version-controlled</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "var(--color-cream-light)", textAlign: "center" }}>
        <div className="container">
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2>Need Medical <span className="italic-accent">Information?</span></h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", marginBottom: "var(--space-8)" }}>
              For specific medical information requests, product enquiries, or to request a product monograph, contact our medical information team.
            </p>
            <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-forest)", color: "var(--color-text-on-dark)", display: "inline-flex" }}>
              Contact Medical Info →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
