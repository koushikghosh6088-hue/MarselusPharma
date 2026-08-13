import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SARANYA (Myo-Inositol + D-Chiro 40:1 Ratio) | Marselus Pharmaceuticals",
  description:
    "Product monograph for SARANYA Tablets featuring clinically validated 40:1 ratio of Myo-Inositol to D-Chiro Inositol for PCOS and metabolic management.",
  openGraph: {
    title: "SARANYA | Myo-Inositol 40:1 Ratio Formula",
    description:
      "Targeted formulation for PCOS management, metabolic equilibrium, and restoration of ovulatory health.",
  },
};

export default function SaranyaProductPage() {
  return (
    <main className="page-content atrimus-white-bg" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <div style={{ fontSize: "12px", color: "var(--color-gray-500)", marginBottom: "var(--space-6)" }}>
          <Link href="/" style={{ color: "var(--color-gray-500)", textDecoration: "none" }}>Home</Link> /{" "}
          <Link href="/products" style={{ color: "var(--color-gray-500)", textDecoration: "none" }}>Products</Link> /{" "}
          <span style={{ color: "var(--color-saranya)", fontWeight: 700 }}>SARANYA</span>
        </div>

        {/* Hero Section */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "var(--space-12)", alignItems: "center", marginBottom: "var(--space-16)" }}>
          <div>
            <span style={{ background: "var(--color-saranya-soft)", color: "var(--color-saranya)", fontSize: "11px", fontWeight: 800, padding: "6px 14px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "var(--space-4)", display: "inline-block" }}>
              WOMEN&apos;S HEALTH • 40:1 RATIO MATRIX
            </span>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "var(--color-navy)", lineHeight: 1.05, marginBottom: "var(--space-4)", letterSpacing: "-0.02em" }}>
              SARANYA <span style={{ color: "var(--color-saranya)" }}>TABLETS</span>
            </h1>
            <p style={{ fontSize: "var(--text-xl)", fontWeight: 700, color: "var(--color-saranya)", marginBottom: "var(--space-6)" }}>
              Myo-Inositol + D-Chiro Inositol (40:1 Ratio) + L-Methylfolate + Vit D3
            </p>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-gray-600)", lineHeight: 1.65, marginBottom: "var(--space-8)", maxWidth: "54ch" }}>
              SARANYA is formulated with the physiologically optimal 40:1 ratio of Myo-Inositol to D-Chiro Inositol. It addresses the underlying insulin resistance and androgenic excess associated with Polycystic Ovary Syndrome (PCOS), aiding in regularizing menstrual cycles and restoring fertility.
            </p>

            <div className="btn-connected-group">
              <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-saranya)", border: "none" }}>
                Request Prescribing Dossier
              </Link>
              <Link href="/products" className="btn-connected-pill btn-connected-pill--secondary">
                Back to Products
              </Link>
            </div>
          </div>

          {/* Product Image Render */}
          <div className="atrimus-glass-card" style={{ padding: "var(--space-10)", textAlign: "center", background: "linear-gradient(135deg, rgba(224, 86, 136, 0.08) 0%, rgba(255, 255, 255, 0.9) 100%)", borderRadius: "28px" }}>
            <img src="/assets/images/atrimus-dna.png" alt="SARANYA 3D DNA Helix Render" style={{ width: "100%", maxWidth: "340px", height: "auto", filter: "drop-shadow(0 15px 30px rgba(224, 86, 136, 0.15))" }} />
            <div style={{ marginTop: "var(--space-6)", fontSize: "11px", fontWeight: 800, color: "var(--color-saranya)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              CLINICALLY VALIDATED 40:1 ISOMER SYNERGY
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="atrimus-glass-card" style={{ padding: "var(--space-10)", borderRadius: "24px", marginBottom: "var(--space-16)" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--color-navy)", marginBottom: "var(--space-8)", textTransform: "uppercase" }}>
            PRODUCT <span style={{ color: "var(--color-saranya)" }}>SPECIFICATIONS &amp; MONOGRAPH</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-8)" }}>
            <div>
              <h3 style={{ fontSize: "var(--text-base)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Active Ingredients</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", margin: 0 }}>Myo-Inositol 2000mg + D-Chiro Inositol 50mg (40:1)</p>
            </div>

            <div>
              <h3 style={{ fontSize: "var(--text-base)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Therapeutic Class</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", margin: 0 }}>Insulin Sensitizer &amp; Gynecological Therapeutic</p>
            </div>

            <div>
              <h3 style={{ fontSize: "var(--text-base)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Indication</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", margin: 0 }}>PCOS, Insulin Resistance, Anovulatory Infertility</p>
            </div>

            <div>
              <h3 style={{ fontSize: "var(--text-base)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Synergistic Actives</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", margin: 0 }}>L-Methylfolate 1mg + Vitamin D3 1000 IU</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
