import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UV 60K (Cholecalciferol 60,000 IU Softgels) | Marselus Pharmaceuticals",
  description:
    "Product monograph for UV 60K Softgel Capsules providing high-potency Vitamin D3 (60,000 IU) for rapid correction of severe deficiency.",
  openGraph: {
    title: "UV 60K | High-Potency Vitamin D3 Softgel",
    description:
      "Pharmaceutical-grade Vitamin D3 softgels engineered for calcium homeostasis, bone mineralization, and immune resilience.",
  },
};

export default function Uv60kProductPage() {
  return (
    <main className="page-content atrimus-white-bg" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <div style={{ fontSize: "12px", color: "var(--color-gray-500)", marginBottom: "var(--space-6)" }}>
          <Link href="/" style={{ color: "var(--color-gray-500)", textDecoration: "none" }}>Home</Link> /{" "}
          <Link href="/products" style={{ color: "var(--color-gray-500)", textDecoration: "none" }}>Products</Link> /{" "}
          <span style={{ color: "#d35400", fontWeight: 700 }}>UV 60K</span>
        </div>

        {/* Hero Section */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "var(--space-12)", alignItems: "center", marginBottom: "var(--space-16)" }}>
          <div>
            <span style={{ background: "rgba(230, 126, 34, 0.1)", color: "#d35400", fontSize: "11px", fontWeight: 800, padding: "6px 14px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "var(--space-4)", display: "inline-block" }}>
              VITAMIN THERAPY • RAPID CORRECTION
            </span>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "var(--color-navy)", lineHeight: 1.05, marginBottom: "var(--space-4)", letterSpacing: "-0.02em" }}>
              UV 60K <span style={{ color: "#d35400" }}>SOFTGELS</span>
            </h1>
            <p style={{ fontSize: "var(--text-xl)", fontWeight: 700, color: "#d35400", marginBottom: "var(--space-6)" }}>
              Cholecalciferol Softgel Capsules 60,000 IU
            </p>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-gray-600)", lineHeight: 1.65, marginBottom: "var(--space-8)", maxWidth: "54ch" }}>
              UV 60K contains 60,000 IU of pharmaceutical-grade Cholecalciferol (Vitamin D3) encased in gelatin soft capsules to maximize bioavailability and ensure rapid restoration of serum 25-hydroxyvitamin D levels.
            </p>

            <div className="btn-connected-group">
              <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "#e67e22", border: "none" }}>
                Request Prescribing Dossier
              </Link>
              <Link href="/products" className="btn-connected-pill btn-connected-pill--secondary">
                Back to Products
              </Link>
            </div>
          </div>

          {/* Product Render Card */}
          <div className="atrimus-glass-card" style={{ padding: "var(--space-10)", textAlign: "center", background: "linear-gradient(135deg, rgba(230, 126, 34, 0.08) 0%, rgba(255, 255, 255, 0.9) 100%)", borderRadius: "28px" }}>
            <img src="/assets/images/atrimus-capsule.png" alt="UV 60K Softgel Render" style={{ width: "100%", maxWidth: "340px", height: "auto", filter: "drop-shadow(0 15px 30px rgba(230, 126, 34, 0.15))" }} />
            <div style={{ marginTop: "var(--space-6)", fontSize: "11px", fontWeight: 800, color: "#d35400", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              HIGH-BIOAVAILABILITY SOFTGEL DELIVERY
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="atrimus-glass-card" style={{ padding: "var(--space-10)", borderRadius: "24px", marginBottom: "var(--space-16)" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--color-navy)", marginBottom: "var(--space-8)", textTransform: "uppercase" }}>
            PRODUCT <span style={{ color: "#d35400" }}>SPECIFICATIONS &amp; MONOGRAPH</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-8)" }}>
            <div>
              <h3 style={{ fontSize: "var(--text-base)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Active Substance</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", margin: 0 }}>Cholecalciferol IP 60,000 IU (Vitamin D3)</p>
            </div>

            <div>
              <h3 style={{ fontSize: "var(--text-base)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Therapeutic Class</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", margin: 0 }}>Fat-Soluble Vitamin Supplement</p>
            </div>

            <div>
              <h3 style={{ fontSize: "var(--text-base)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Indication</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", margin: 0 }}>Severe Vitamin D deficiency, Osteomalacia, Osteoporosis adjunct</p>
            </div>

            <div>
              <h3 style={{ fontSize: "var(--text-base)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Dosing Schedule</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", margin: 0 }}>1 softgel weekly for 8 to 12 weeks or as directed</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
