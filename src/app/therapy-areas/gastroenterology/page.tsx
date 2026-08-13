import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gastroenterology & IBD Specialty | Marselus Pharmaceuticals",
  description:
    "Marselus Pharmaceuticals Gastroenterology research division focusing on targeted mesalamine delivery and mucosal healing in Ulcerative Colitis.",
  openGraph: {
    title: "Gastroenterology Specialty | Marselus Pharmaceuticals",
    description: "Targeted prolonged release formulations for Inflammatory Bowel Disease and colonic health.",
  },
};

export default function GastroenterologyPage() {
  return (
    <main className="page-content atrimus-white-bg" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      <div className="container">
        <div style={{ fontSize: "12px", color: "var(--color-gray-500)", marginBottom: "var(--space-6)" }}>
          <Link href="/" style={{ color: "var(--color-gray-500)", textDecoration: "none" }}>Home</Link> /{" "}
          <Link href="/therapy-areas" style={{ color: "var(--color-gray-500)", textDecoration: "none" }}>Therapy Areas</Link> /{" "}
          <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>Gastroenterology</span>
        </div>

        <div style={{ maxWidth: "800px", marginBottom: "var(--space-12)" }}>
          <span style={{ background: "var(--color-accent-soft)", color: "var(--color-accent)", fontSize: "11px", fontWeight: 800, padding: "6px 14px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "var(--space-4)", display: "inline-block" }}>
            THERAPEUTIC SPECIALTY
          </span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "var(--color-navy)", lineHeight: 1.05, marginBottom: "var(--space-4)" }}>
            GASTROENTEROLOGY &amp; <span className="gradient-accent-1">COLONIC HEALING</span>
          </h1>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--color-gray-600)", lineHeight: 1.65 }}>
            Our gastroenterology division develops specialized formulations engineered for uniform, prolonged release throughout the distal colon, addressing inflammatory bowel diseases with clinical precision.
          </p>
        </div>

        {/* Lead Product Monograph Card */}
        <div className="atrimus-glass-card" style={{ padding: "var(--space-10)", borderRadius: "24px" }}>
          <span style={{ color: "var(--color-accent)", fontWeight: 800, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" }}>LEAD BRAND</span>
          <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--color-navy)", marginTop: "8px", marginBottom: "12px" }}>ARTEMES 1.2g Tablets</h2>
          <p style={{ color: "var(--color-gray-600)", lineHeight: 1.6, marginBottom: "var(--space-6)" }}>
            Utilizing MMX™ multi-matrix technology, ARTEMES 1.2g ensures controlled release of mesalamine along the entire colonic mucosa for maintenance of remission in active Ulcerative Colitis.
          </p>
          <Link href="/products/artemes" className="btn-connected-pill btn-connected-pill--primary" style={{ textDecoration: "none" }}>
            Explore ARTEMES 1.2g Monograph →
          </Link>
        </div>
      </div>
    </main>
  );
}
