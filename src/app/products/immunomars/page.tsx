import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IMMUNOMARS (Immunonutrition Sachet) | Marselus Pharmaceuticals",
  description:
    "Product monograph for IMMUNOMARS Sachet featuring L-Glutamine, L-Arginine, and Zinc for post-surgical recovery and mucosal defense.",
  openGraph: {
    title: "IMMUNOMARS | Immunonutrition Sachet Blend",
    description:
      "Targeted amino acid formulation engineered for clinical recovery, gut mucosal barrier defense, and wound healing.",
  },
};

export default function ImmunomarsProductPage() {
  return (
    <main className="page-content atrimus-white-bg" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <div style={{ fontSize: "12px", color: "var(--color-gray-500)", marginBottom: "var(--space-6)" }}>
          <Link href="/" style={{ color: "var(--color-gray-500)", textDecoration: "none" }}>Home</Link> /{" "}
          <Link href="/products" style={{ color: "var(--color-gray-500)", textDecoration: "none" }}>Products</Link> /{" "}
          <span style={{ color: "var(--color-immunomars)", fontWeight: 700 }}>IMMUNOMARS</span>
        </div>

        {/* Hero Section */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "var(--space-12)", alignItems: "center", marginBottom: "var(--space-16)" }}>
          <div>
            <span style={{ background: "var(--color-immunomars-soft)", color: "var(--color-immunomars)", fontSize: "11px", fontWeight: 800, padding: "6px 14px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "var(--space-4)", display: "inline-block" }}>
              CLINICAL NUTRITION • IMMUNONUTRITION
            </span>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "var(--color-navy)", lineHeight: 1.05, marginBottom: "var(--space-4)", letterSpacing: "-0.02em" }}>
              IMMUNOMARS <span style={{ color: "var(--color-immunomars)" }}>SACHET</span>
            </h1>
            <p style={{ fontSize: "var(--text-xl)", fontWeight: 700, color: "var(--color-immunomars)", marginBottom: "var(--space-6)" }}>
              L-Glutamine 10g + L-Arginine 5g + Zinc &amp; Micronutrients
            </p>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-gray-600)", lineHeight: 1.65, marginBottom: "var(--space-8)", maxWidth: "54ch" }}>
              IMMUNOMARS provides therapeutic dosages of conditionally essential amino acids L-Glutamine and L-Arginine. It serves as primary metabolic fuel for enterocytes and immune cells during critical illness, post-operative recovery, and mucositis.
            </p>

            <div className="btn-connected-group">
              <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-immunomars)", border: "none" }}>
                Request Prescribing Dossier
              </Link>
              <Link href="/products" className="btn-connected-pill btn-connected-pill--secondary">
                Back to Products
              </Link>
            </div>
          </div>

          {/* Product Render Card */}
          <div className="atrimus-glass-card" style={{ padding: "var(--space-10)", textAlign: "center", background: "linear-gradient(135deg, rgba(46, 125, 50, 0.08) 0%, rgba(255, 255, 255, 0.9) 100%)", borderRadius: "28px" }}>
            <img src="/assets/images/insight-3.png" alt="IMMUNOMARS Clinical Nutrition" style={{ width: "100%", maxWidth: "340px", height: "220px", objectFit: "cover", borderRadius: "18px", filter: "drop-shadow(0 15px 30px rgba(46, 125, 50, 0.15))" }} />
            <div style={{ marginTop: "var(--space-6)", fontSize: "11px", fontWeight: 800, color: "var(--color-immunomars)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              MUCOSAL INTEGRITY &amp; TISSUE REPAIR SACHET
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="atrimus-glass-card" style={{ padding: "var(--space-10)", borderRadius: "24px", marginBottom: "var(--space-16)" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight 900, color: "var(--color-navy)", marginBottom: "var(--space-8)", textTransform: "uppercase" }}>
            PRODUCT <span style={{ color: "var(--color-immunomars)" }}>SPECIFICATIONS &amp; MONOGRAPH</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-8)" }}>
            <div>
              <h3 style={{ fontSize: "var(--text-base)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Key Actives</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", margin: 0 }}>L-Glutamine 10g + L-Arginine 5g + Elemental Zinc 15mg</p>
            </div>

            <div>
              <h3 style={{ fontSize: "var(--text-base)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Therapeutic Class</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", margin: 0 }}>Clinical Immunonutrition Sachet</p>
            </div>

            <div>
              <h3 style={{ fontSize: "var(--text-base)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Indication</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", margin: 0 }}>Post-op recovery, gut mucosal barrier damage, severe burn/trauma</p>
            </div>

            <div>
              <h3 style={{ fontSize: "var(--text-base)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Formulation Standard</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", margin: 0 }}>Instantized powder sachet for easy enteral oral administration</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
