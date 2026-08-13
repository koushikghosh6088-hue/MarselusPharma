import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clinical Nutrition & Immunonutrition | Marselus Pharmaceuticals",
  description:
    "Marselus Pharmaceuticals Clinical Nutrition division developing targeted amino acid sachets and high-potency vitamin softgels.",
  openGraph: {
    title: "Clinical Nutrition Specialty | Marselus Pharmaceuticals",
    description: "Immunonutrition, post-surgical recovery, and severe micronutrient deficiency therapeutics.",
  },
};

export default function ClinicalNutritionPage() {
  return (
    <main className="page-content atrimus-white-bg" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      <div className="container">
        <div style={{ fontSize: "12px", color: "var(--color-gray-500)", marginBottom: "var(--space-6)" }}>
          <Link href="/" style={{ color: "var(--color-gray-500)", textDecoration: "none" }}>Home</Link> /{" "}
          <Link href="/therapy-areas" style={{ color: "var(--color-gray-500)", textDecoration: "none" }}>Therapy Areas</Link> /{" "}
          <span style={{ color: "var(--color-immunomars)", fontWeight: 700 }}>Clinical Nutrition</span>
        </div>

        <div style={{ maxWidth: "800px", marginBottom: "var(--space-12)" }}>
          <span style={{ background: "var(--color-immunomars-soft)", color: "var(--color-immunomars)", fontSize: "11px", fontWeight: 800, padding: "6px 14px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "var(--space-4)", display: "inline-block" }}>
            THERAPEUTIC SPECIALTY
          </span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "var(--color-navy)", lineHeight: 1.05, marginBottom: "var(--space-4)" }}>
            CLINICAL NUTRITION &amp; <span style={{ color: "var(--color-immunomars)" }}>IMMUNONUTRITION</span>
          </h1>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--color-gray-600)", lineHeight: 1.65 }}>
            Our Clinical Nutrition division formulates specialized enteral immunonutrition blends and fat-soluble vitamin softgels designed for accelerated post-op recovery, gut barrier maintenance, and rapid deficiency correction.
          </p>
        </div>

        {/* Lead Product Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-8)" }}>
          <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", borderRadius: "24px" }}>
            <span style={{ color: "var(--color-immunomars)", fontWeight: 800, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" }}>LEAD SACHET</span>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--color-navy)", marginTop: "8px", marginBottom: "12px" }}>IMMUNOMARS Sachet</h2>
            <p style={{ color: "var(--color-gray-600)", lineHeight: 1.6, marginBottom: "var(--space-6)" }}>
              High-potency L-Glutamine 10g + L-Arginine 5g immunonutrition blend engineered for gut mucosal repair and surgical healing.
            </p>
            <Link href="/products/immunomars" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-immunomars)", border: "none", textDecoration: "none" }}>
              Explore IMMUNOMARS →
            </Link>
          </div>

          <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", borderRadius: "24px" }}>
            <span style={{ color: "#d35400", fontWeight: 800, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" }}>LEAD SOFTGEL</span>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--color-navy)", marginTop: "8px", marginBottom: "12px" }}>UV 60K Softgels</h2>
            <p style={{ color: "var(--color-gray-600)", lineHeight: 1.6, marginBottom: "var(--space-6)" }}>
              Cholecalciferol 60,000 IU softgel capsules engineered for rapid correction of severe Vitamin D3 deficiency and bone health.
            </p>
            <Link href="/products/uv60k" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#e67e22", border: "none", textDecoration: "none" }}>
              Explore UV 60K →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
