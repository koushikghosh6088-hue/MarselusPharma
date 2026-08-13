import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Women's Health & PCOS Research | Marselus Pharmaceuticals",
  description:
    "Marselus Pharmaceuticals Women's Health division dedicated to 40:1 Inositol formulations for PCOS management and ovulatory health.",
  openGraph: {
    title: "Women's Health Specialty | Marselus Pharmaceuticals",
    description: "Endocrine balance, PCOS management, and metabolic equilibrium therapeutics.",
  },
};

export default function WomensHealthPage() {
  return (
    <main className="page-content atrimus-white-bg" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      <div className="container">
        <div style={{ fontSize: "12px", color: "var(--color-gray-500)", marginBottom: "var(--space-6)" }}>
          <Link href="/" style={{ color: "var(--color-gray-500)", textDecoration: "none" }}>Home</Link> /{" "}
          <Link href="/therapy-areas" style={{ color: "var(--color-gray-500)", textDecoration: "none" }}>Therapy Areas</Link> /{" "}
          <span style={{ color: "var(--color-saranya)", fontWeight: 700 }}>Women&apos;s Health</span>
        </div>

        <div style={{ maxWidth: "800px", marginBottom: "var(--space-12)" }}>
          <span style={{ background: "var(--color-saranya-soft)", color: "var(--color-saranya)", fontSize: "11px", fontWeight: 800, padding: "6px 14px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "var(--space-4)", display: "inline-block" }}>
            THERAPEUTIC SPECIALTY
          </span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "var(--color-navy)", lineHeight: 1.05, marginBottom: "var(--space-4)" }}>
            WOMEN&apos;S HEALTH &amp; <span style={{ color: "var(--color-saranya)" }}>ENDOCRINE EQUILIBRIUM</span>
          </h1>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--color-gray-600)", lineHeight: 1.65 }}>
            Our Gynaecology &amp; Reproductive Health division focuses on evidence-based inositol isomer ratios designed to address insulin resistance, hyperandrogenism, and metabolic dysregulation in Polycystic Ovary Syndrome (PCOS).
          </p>
        </div>

        {/* Lead Product Monograph Card */}
        <div className="atrimus-glass-card" style={{ padding: "var(--space-10)", borderRadius: "24px" }}>
          <span style={{ color: "var(--color-saranya)", fontWeight: 800, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" }}>LEAD BRAND</span>
          <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--color-navy)", marginTop: "8px", marginBottom: "12px" }}>SARANYA Tablets</h2>
          <p style={{ color: "var(--color-gray-600)", lineHeight: 1.6, marginBottom: "var(--space-6)" }}>
            Clinically validated 40:1 ratio of Myo-Inositol to D-Chiro Inositol fortified with L-Methylfolate and Vitamin D3 for holistic PCOS management and fertility restoration.
          </p>
          <Link href="/products/saranya" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-saranya)", border: "none", textDecoration: "none" }}>
            Explore SARANYA Monograph →
          </Link>
        </div>
      </div>
    </main>
  );
}
