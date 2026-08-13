import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ARTEMES 1.2g (Mesalamine Prolonged Release) | Marselus Pharmaceuticals",
  description:
    "Product monograph for ARTEMES 1.2g Tablets featuring MMX™ Prolonged Release Technology for active Ulcerative Colitis remission and mucosal healing.",
  openGraph: {
    title: "ARTEMES 1.2g | Mesalamine Prolonged Release MMX™",
    description:
      "Targeted colonic delivery system for active ulcerative colitis treatment and maintenance of mucosal remission.",
  },
};

export default function ArtemesProductPage() {
  return (
    <main className="page-content atrimus-white-bg" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <div style={{ fontSize: "12px", color: "var(--color-gray-500)", marginBottom: "var(--space-6)" }}>
          <Link href="/" style={{ color: "var(--color-gray-500)", textDecoration: "none" }}>Home</Link> /{" "}
          <Link href="/products" style={{ color: "var(--color-gray-500)", textDecoration: "none" }}>Products</Link> /{" "}
          <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>ARTEMES 1.2g</span>
        </div>

        {/* Hero Section */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "var(--space-12)", alignItems: "center", marginBottom: "var(--space-16)" }}>
          <div>
            <span style={{ background: "var(--color-accent-soft)", color: "var(--color-accent)", fontSize: "11px", fontWeight: 800, padding: "6px 14px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "var(--space-4)", display: "inline-block" }}>
              GASTROENTEROLOGY • MMX™ TECHNOLOGY
            </span>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "var(--color-navy)", lineHeight: 1.05, marginBottom: "var(--space-4)", letterSpacing: "-0.02em" }}>
              ARTEMES <span className="gradient-accent-1">1.2g TABLETS</span>
            </h1>
            <p style={{ fontSize: "var(--text-xl)", fontWeight: 700, color: "var(--color-accent)", marginBottom: "var(--space-6)" }}>
              Mesalamine Prolonged Release Tablets USP 1.2g
            </p>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-gray-600)", lineHeight: 1.65, marginBottom: "var(--space-8)", maxWidth: "54ch" }}>
              ARTEMES 1.2g is engineered using proprietary Multi-Matrix (MMX™) prolonged-release technology to deliver active mesalamine continuously throughout the entire length of the colon, promoting mucosal healing in active mild-to-moderate ulcerative colitis.
            </p>

            <div className="btn-connected-group">
              <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary">
                Request Prescribing Dossier
              </Link>
              <Link href="/products" className="btn-connected-pill btn-connected-pill--secondary">
                Back to Products
              </Link>
            </div>
          </div>

          {/* Product Image Render */}
          <div className="atrimus-glass-card" style={{ padding: "var(--space-10)", textAlign: "center", background: "linear-gradient(135deg, rgba(24, 154, 180, 0.08) 0%, rgba(255, 255, 255, 0.9) 100%)", borderRadius: "28px" }}>
            <img src="/assets/images/atrimus-capsule.png" alt="ARTEMES 1.2g 3D Render" style={{ width: "100%", maxWidth: "340px", height: "auto", filter: "drop-shadow(0 15px 30px rgba(12, 56, 37, 0.12))" }} />
            <div style={{ marginTop: "var(--space-6)", fontSize: "11px", fontWeight: 800, color: "var(--color-accent)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              MMX™ MULTI-MATRIX COLONIC TARGETING
            </div>
          </div>
        </div>

        {/* Monograph Specifications Table */}
        <div className="atrimus-glass-card" style={{ padding: "var(--space-10)", borderRadius: "24px", marginBottom: "var(--space-16)" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--color-navy)", marginBottom: "var(--space-8)", textTransform: "uppercase" }}>
            PRODUCT <span className="gradient-accent-1">SPECIFICATIONS &amp; MONOGRAPH</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-8)" }}>
            <div>
              <h3 style={{ fontSize: "var(--text-base)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Active Substance</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", margin: 0 }}>Mesalamine USP 1.2g (5-aminosalicylic acid / 5-ASA)</p>
            </div>

            <div>
              <h3 style={{ fontSize: "var(--text-base)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Therapeutic Class</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", margin: 0 }}>Anti-inflammatory Gastrointestinal Agent</p>
            </div>

            <div>
              <h3 style={{ fontSize: "var(--text-base)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Indication</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", margin: 0 }}>Induction and maintenance of remission in ulcerative colitis</p>
            </div>

            <div>
              <h3 style={{ fontSize: "var(--text-base)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Delivery System</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", margin: 0 }}>MMX™ Gastro-resistant &amp; Lipophilic Prolonged Release Matrix</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
