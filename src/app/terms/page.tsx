import SpineTab from "@/components/SpineTab";

export default function TermsPage() {
  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)", background: "var(--color-cream)" }}>
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="LEGAL — TERMS & MEDICAL DISCLAIMER" />

        <div className="container" style={{ maxWidth: "800px" }}>
          <span className="eyebrow-label">LEGAL DOCUMENT</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginBottom: "var(--space-6)" }}>
            Terms &amp; <span className="italic-accent">Medical Disclaimer.</span>
          </h1>

          <div style={{ padding: "12px 18px", background: "rgba(217, 164, 65, 0.15)", borderLeft: "4px solid var(--color-gold)", borderRadius: "var(--radius-sm)", marginBottom: "var(--space-8)" }}>
            <p style={{ fontSize: "0.875rem", color: "#8C6212", margin: 0, fontWeight: 600 }}>
              Notice: This document is a template structure. Final legal and regulatory review by counsel is required prior to public deployment.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "var(--space-10)", borderRadius: "var(--radius-xl)", lineHeight: "1.7" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "var(--space-4)" }}>1. Healthcare Professional Information</h2>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
              The product information and clinical data on this website are intended solely for healthcare professionals and educational reference. Nothing contained herein should be interpreted as medical advice or clinical diagnosis.
            </p>

            <h2 style={{ fontSize: "1.5rem", marginBottom: "var(--space-4)" }}>2. Prescribing Information</h2>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
              Physicians and healthcare providers must consult official country-specific product packaging inserts and full prescribing monographs before administering or prescribing any formulation.
            </p>

            <h2 style={{ fontSize: "1.5rem", marginBottom: "var(--space-4)" }}>3. Intellectual Property &amp; Trademarks</h2>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
              All product names (ARTEMES, SARANYA, IMMUNOMARS, UV 60K), logos, graphics, and trade dress are proprietary property of Marselus Pharmaceuticals. Unauthorized reproduction is strictly prohibited.
            </p>

            <h2 style={{ fontSize: "1.5rem", marginBottom: "var(--space-4)" }}>4. Limitation of Liability</h2>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", margin: 0 }}>
              Marselus Pharmaceuticals makes reasonable efforts to maintain accurate information but assumes no liability for errors or reliance on site materials without direct medical consultation.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
