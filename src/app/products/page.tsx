import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Specialty Formulations & Hero Brands | Marselus Pharmaceuticals",
  description:
    "Explore Marselus Pharmaceuticals' core specialty formulations including ARTEMES (Mesalamine 1.2g), SARANYA (Myo-Inositol 40:1), IMMUNOMARS, and UV 60K.",
  openGraph: {
    title: "Specialty Formulations | Marselus Pharmaceuticals",
    description:
      "Precision-engineered pharmaceutical formulations developed for superior therapeutic efficacy across Gastroenterology, Women's Health, and Clinical Nutrition.",
  },
};

const products = [
  {
    id: "artemes",
    name: "ARTEMES 1.2g",
    category: "Gastroenterology",
    tag: "PROLONGED RELEASE",
    activeIngredient: "Mesalamine 1.2g Tablets",
    technology: "MMX™ Prolonged Release Technology",
    indication: "Active Ulcerative Colitis & Colonic Mucosal Healing",
    dosage: "1 to 2 tablets daily with meals or as directed",
    color: "var(--color-accent)",
    colorSoft: "var(--color-accent-soft)",
    href: "/products/artemes",
    badgeColor: "#059669",
    description:
      "Engineered with MMX multi-matrix technology to ensure targeted, uniform delivery of mesalamine directly throughout the colon while minimizing systemic absorption.",
  },
  {
    id: "saranya",
    name: "SARANYA",
    category: "Women's Health",
    tag: "40:1 RATIO FORMULA",
    activeIngredient: "Myo-Inositol + D-Chiro Inositol",
    technology: "Physiological 40:1 Ratio Matrix",
    indication: "PCOS Management, Ovulatory Function & Metabolic Balance",
    dosage: "1 tablet twice daily or as prescribed by Gynecologist",
    color: "var(--color-saranya)",
    colorSoft: "var(--color-saranya-soft)",
    href: "/products/saranya",
    badgeColor: "#e05688",
    description:
      "Clinically validated 40:1 ratio of Myo-Inositol to D-Chiro Inositol fortified with L-Methylfolate and Vitamin D3 for holistic PCOS recovery and endocrine harmony.",
  },
  {
    id: "immunomars",
    name: "IMMUNOMARS",
    category: "Clinical Nutrition",
    tag: "CLINICAL SACHET",
    activeIngredient: "L-Glutamine + L-Arginine + Zinc",
    technology: "Mucosal Barrier Defense Formula",
    indication: "Post-Surgical Healing, Critical Care & Gut Mucosal Recovery",
    dosage: "1 sachet reconstituted in 200ml water once or twice daily",
    color: "var(--color-immunomars)",
    colorSoft: "var(--color-immunomars-soft)",
    href: "/products/immunomars",
    badgeColor: "#2e7d32",
    description:
      "High-potency immunonutrition blend supplying conditionally essential amino acids engineered to accelerate wound repair and reinforce gut barrier integrity.",
  },
  {
    id: "uv60k",
    name: "UV 60K",
    category: "Vitamin Therapy",
    tag: "SOFTGEL CAPSULES",
    activeIngredient: "Cholecalciferol 60,000 IU",
    technology: "Rapid Absorption Softgel Delivery",
    indication: "Vitamin D3 Deficiency Correction & Bone Mineralization",
    dosage: "1 softgel capsule weekly for 8 weeks or as directed",
    color: "#d35400",
    colorSoft: "rgba(230, 126, 34, 0.1)",
    href: "/products/uv60k",
    badgeColor: "#e67e22",
    description:
      "Pharmaceutical-grade Vitamin D3 softgels providing 60,000 IU cholecalciferol for fast correction of severe deficiency, calcium homeostasis, and immune resilience.",
  },
];

export default function ProductsPage() {
  return (
    <main className="page-content atrimus-white-bg" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      {/* Header Banner */}
      <section className="section" style={{ padding: "0 0 var(--space-12) 0" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <span
              style={{
                background: "rgba(24, 154, 180, 0.1)",
                color: "var(--color-accent)",
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "6px 16px",
                borderRadius: "20px",
                fontWeight: 800,
                marginBottom: "var(--space-4)",
                display: "inline-block",
                border: "1px solid rgba(24, 154, 180, 0.2)",
              }}
            >
              Pharmaceutical Portfolio
            </span>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "var(--color-navy)",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                marginBottom: "var(--space-6)",
                textTransform: "uppercase",
              }}
            >
              MARSELUS <span className="gradient-accent-1">CORE FORMULATIONS</span>
            </h1>
            <p style={{ color: "var(--color-gray-600)", fontSize: "var(--text-lg)", lineHeight: "1.6" }}>
              Explore our portfolio of specialized therapeutics developed with evidence-based rigor to deliver targeted clinical efficacy and patient compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="section" style={{ padding: "0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "var(--space-8)",
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="atrimus-glass-card"
                style={{
                  padding: "var(--space-8)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "24px",
                }}
              >
                <div>
                  {/* Category & Badge Row */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "var(--space-4)",
                    }}
                  >
                    <span
                      style={{
                        background: product.colorSoft,
                        color: product.color,
                        fontSize: "11px",
                        fontWeight: 800,
                        padding: "4px 12px",
                        borderRadius: "12px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {product.category}
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 800,
                        color: product.badgeColor,
                        letterSpacing: "0.12em",
                      }}
                    >
                      {product.tag}
                    </span>
                  </div>

                  {/* Title & Active Ingredient */}
                  <h2
                    style={{
                      fontSize: "2rem",
                      fontWeight: 900,
                      color: "var(--color-navy)",
                      letterSpacing: "-0.02em",
                      marginBottom: "var(--space-2)",
                    }}
                  >
                    {product.name}
                  </h2>
                  <div
                    style={{
                      fontSize: "var(--text-sm)",
                      fontWeight: 700,
                      color: product.color,
                      marginBottom: "var(--space-4)",
                    }}
                  >
                    {product.activeIngredient}
                  </div>

                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--color-gray-600)",
                      lineHeight: "1.6",
                      marginBottom: "var(--space-6)",
                    }}
                  >
                    {product.description}
                  </p>

                  {/* Details Specs Table */}
                  <div
                    style={{
                      background: "rgba(12, 56, 37, 0.03)",
                      borderRadius: "14px",
                      padding: "var(--space-4)",
                      fontSize: "12px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      marginBottom: "var(--space-6)",
                    }}
                  >
                    <div>
                      <strong style={{ color: "var(--color-navy)" }}>Technology:</strong>{" "}
                      <span style={{ color: "var(--color-gray-600)" }}>{product.technology}</span>
                    </div>
                    <div>
                      <strong style={{ color: "var(--color-navy)" }}>Indication:</strong>{" "}
                      <span style={{ color: "var(--color-gray-600)" }}>{product.indication}</span>
                    </div>
                    <div>
                      <strong style={{ color: "var(--color-navy)" }}>Standard Dosage:</strong>{" "}
                      <span style={{ color: "var(--color-gray-600)" }}>{product.dosage}</span>
                    </div>
                  </div>
                </div>

                {/* Monograph Link CTA */}
                <Link
                  href={product.href}
                  className="btn-connected-pill btn-connected-pill--primary"
                  style={{ width: "100%", justifyContent: "center", display: "flex", textDecoration: "none" }}
                >
                  View Product Monograph →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Banner */}
      <section className="section" style={{ padding: "var(--space-20) 0 0 0" }}>
        <div className="container">
          <div
            className="atrimus-glass-card"
            style={{
              padding: "var(--space-12)",
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(244, 249, 246, 0.9) 0%, rgba(226, 239, 224, 0.4) 100%)",
            }}
          >
            <h3
              style={{
                fontSize: "1.75rem",
                fontWeight: 900,
                color: "var(--color-navy)",
                marginBottom: "var(--space-3)",
              }}
            >
              PRESCRIBING INFORMATION &amp; SAMPLES
            </h3>
            <p
              style={{
                color: "var(--color-gray-600)",
                fontSize: "var(--text-base)",
                maxWidth: "54ch",
                margin: "0 auto var(--space-6)",
              }}
            >
              Registered healthcare professionals can request clinical dossiers, prescribing information guides, and evaluation samples through our medical affairs desk.
            </p>
            <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary" style={{ textDecoration: "none" }}>
              Request Medical Dossier →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
