import Link from "next/link";

export default function Immunomars() {
  return (
    <main className="page-content atrimus-white-bg" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      <div className="container">
        
        {/* Product Hero Split */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "var(--space-12)", alignItems: "center", marginBottom: "var(--space-16)" }}>
          
          {/* Pack Artwork Column */}
          <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", textAlign: "center", borderRadius: "28px", borderTop: "4px solid #e08a2e", background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(254, 243, 199, 0.5) 100%)" }}>
            <img src="/assets/images/clinical_nutrition_research_1786571400633.png" alt="IMMUNOMARS Sachet Pack" style={{ maxWidth: "280px", height: "auto", margin: "0 auto var(--space-6)" }} />
            <span className="slide-badge slide-badge--3" style={{ background: "rgba(224, 138, 46, 0.12)", color: "#e08a2e", border: "1px solid rgba(224, 138, 46, 0.3)" }}>
              CLINICAL SACHET FORMULATION
            </span>
          </div>

          {/* Details Column */}
          <div>
            <span className="slide-badge slide-badge--3" style={{ background: "rgba(224, 138, 46, 0.12)", color: "#e08a2e", border: "1px solid rgba(224, 138, 46, 0.3)", marginBottom: "var(--space-3)" }}>
              CLINICAL NUTRITION · IMMUNONUTRITION BLEND
            </span>
            <h1 style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)", fontWeight: 900, color: "var(--color-navy)", lineHeight: 1.05, marginBottom: "var(--space-2)" }}>
              IMMUNOMARS
            </h1>
            <p style={{ fontSize: "1.25rem", fontWeight: 800, color: "#e08a2e", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "var(--space-4)" }}>
              REBUILD. PROTECT. RECOVER.
            </p>

            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-gray-600)", lineHeight: "1.6", marginBottom: "var(--space-6)" }}>
              An immunonutrition blend engineered to support clinical recovery, gut mucosal barrier defense, and tissue healing during critical recovery phases.
            </p>

            {/* Composition breakdown */}
            <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderRadius: "18px", marginBottom: "var(--space-6)" }}>
              <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "8px" }}>Active Composition:</h4>
              <p style={{ fontSize: "14px", color: "var(--color-gray-700)", lineHeight: "1.6", margin: 0 }}>
                L-Glutamine + L-Lysine + L-Arginine + Multivitamins + Zinc + Selenium + Vitamin-C Sachet.
              </p>
              <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid rgba(10, 25, 47, 0.08)" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-navy)", margin: 0 }}>Suggested Use:</p>
                <p style={{ fontSize: "13px", color: "var(--color-gray-600)", margin: "2px 0 0 0" }}>1 sachet/day mixed in 150–200 ml water or juice for 7–14 days, or as advised by physician.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="btn-connected-group">
              <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#e08a2e", border: "none" }}>
                Request Prescribing Guide →
              </Link>
              <Link href="/products" className="btn-connected-pill btn-connected-pill--secondary">
                View All Products
              </Link>
            </div>

          </div>

        </div>

        {/* Safety & Healthcare Professional Disclaimer */}
        <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", borderRadius: "24px", borderLeft: "4px solid #dc2626" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-3)" }}>
            Safety Information &amp; Prescribing Notes
          </h3>
          <p style={{ fontSize: "14px", fontWeight: 700, color: "#dc2626", marginBottom: "var(--space-2)" }}>
            Caution in renal impairment. Not for severe hepatic dysfunction unless advised.
          </p>
          <p style={{ fontSize: "12px", color: "var(--color-gray-500)", lineHeight: "1.5", margin: 0 }}>
            *This information is intended for registered medical practitioners and healthcare professionals. Please refer to full prescribing information before administration.
          </p>
        </div>

      </div>
    </main>
  );
}
