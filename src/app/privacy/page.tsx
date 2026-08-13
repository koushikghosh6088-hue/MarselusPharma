import SpineTab from "@/components/SpineTab";

export default function PrivacyPage() {
  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)", background: "var(--color-cream)" }}>
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="LEGAL — PRIVACY POLICY" />

        <div className="container" style={{ maxWidth: "800px" }}>
          <span className="eyebrow-label">LEGAL DOCUMENT</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginBottom: "var(--space-6)" }}>
            Privacy <span className="italic-accent">Policy.</span>
          </h1>

          <div style={{ padding: "12px 18px", background: "rgba(217, 164, 65, 0.15)", borderLeft: "4px solid var(--color-gold)", borderRadius: "var(--radius-sm)", marginBottom: "var(--space-8)" }}>
            <p style={{ fontSize: "0.875rem", color: "#8C6212", margin: 0, fontWeight: 600 }}>
              Notice: This document is a template structure. Final legal review by counsel is required prior to public deployment.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "var(--space-10)", borderRadius: "var(--radius-xl)", lineHeight: "1.7" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "var(--space-4)" }}>1. Data Collection &amp; Purpose</h2>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
              Marselus Pharmaceuticals collects personal information provided voluntarily through contact forms, medical enquiry portals, and career submissions. This data is processed strictly for clinical inquiries, professional communication, and regulatory compliance.
            </p>

            <h2 style={{ fontSize: "1.5rem", marginBottom: "var(--space-4)" }}>2. Use of Information</h2>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
              Information collected is used solely to respond to healthcare professional inquiries, fulfill requested product monographs, process employment applications, and ensure adverse event reporting compliance.
            </p>

            <h2 style={{ fontSize: "1.5rem", marginBottom: "var(--space-4)" }}>3. Information Sharing &amp; Security</h2>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
              We do not sell or rent personal data to third parties. Data may be shared with regulatory authorities only when required by law or pharmacovigilance regulations. Technical and organizational measures are implemented to protect your data.
            </p>

            <h2 style={{ fontSize: "1.5rem", marginBottom: "var(--space-4)" }}>4. Contact for Privacy Matters</h2>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", margin: 0 }}>
              For queries regarding your personal data or privacy rights, contact <strong>info@marseluspharma.com</strong>.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
