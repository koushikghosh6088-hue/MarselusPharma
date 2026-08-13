import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Therapeutic Areas & Research Specialties | Marselus Pharmaceuticals",
  description:
    "Explore Marselus Pharmaceuticals' specialized research focus in Gastroenterology, Women's Health (PCOS), and Clinical Nutrition.",
  openGraph: {
    title: "Therapeutic Focus | Marselus Pharmaceuticals",
    description:
      "Dedicated R&D and clinical formulation development across specialized therapeutic areas.",
  },
};

const therapyAreas = [
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    tag: "IBD & GUT HEALTH",
    description:
      "Targeted prolonged-release mesalamine delivery systems designed for mucosal healing in Ulcerative Colitis and Inflammatory Bowel Disease.",
    products: ["ARTEMES 1.2g Tablets"],
    href: "/therapy-areas/gastroenterology",
    color: "var(--color-accent)",
    colorSoft: "var(--color-accent-soft)",
  },
  {
    id: "womens-health",
    title: "Women's Health",
    tag: "PCOS & ENDOCRINE EQUILIBRIUM",
    description:
      "Clinically validated 40:1 Myo-Inositol formulations addressing insulin resistance, ovulatory dysfunction, and hyperandrogenism in PCOS.",
    products: ["SARANYA Tablets"],
    href: "/therapy-areas/womens-health",
    color: "var(--color-saranya)",
    colorSoft: "var(--color-saranya-soft)",
  },
  {
    id: "clinical-nutrition",
    title: "Clinical Nutrition",
    tag: "IMMUNONUTRITION & RECOVERY",
    description:
      "Targeted amino acid therapy (L-Glutamine & L-Arginine) engineered to accelerate surgical wound healing and bolster intestinal barrier defense.",
    products: ["IMMUNOMARS Sachet", "UV 60K Softgels"],
    href: "/therapy-areas/clinical-nutrition",
    color: "var(--color-immunomars)",
    colorSoft: "var(--color-immunomars-soft)",
  },
];

export default function TherapyAreasPage() {
  return (
    <main className="page-content atrimus-white-bg" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      <section className="section" style={{ padding: "0 0 var(--space-12) 0" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <span
              style={{
                background: "rgba(12, 56, 37, 0.08)",
                color: "var(--color-navy)",
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "6px 16px",
                borderRadius: "20px",
                fontWeight: 800,
                marginBottom: "var(--space-4)",
                display: "inline-block",
              }}
            >
              Therapeutic Focus
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
              RESEARCH &amp; CLINICAL <span className="gradient-accent-1">SPECIALIZATION</span>
            </h1>
            <p style={{ color: "var(--color-gray-600)", fontSize: "var(--text-lg)", lineHeight: "1.6" }}>
              Our R&amp;D efforts are focused on specialized therapeutic domains where targeted delivery and high purity make a transformative difference to patient outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: "0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-8)" }}>
            {therapyAreas.map((area) => (
              <div
                key={area.id}
                className="atrimus-glass-card"
                style={{
                  padding: "var(--space-8)",
                  display: "flex",
                  flexDirection: "column",
                  justify: "space-between",
                  borderRadius: "24px",
                }}
              >
                <div>
                  <span
                    style={{
                      background: area.colorSoft,
                      color: area.color,
                      fontSize: "11px",
                      fontWeight: 800,
                      padding: "4px 12px",
                      borderRadius: "12px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "inline-block",
                      marginBottom: "var(--space-4)",
                    }}
                  >
                    {area.tag}
                  </span>

                  <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--color-navy)", marginBottom: "var(--space-3)" }}>
                    {area.title}
                  </h2>

                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", lineHeight: "1.6", marginBottom: "var(--space-6)" }}>
                    {area.description}
                  </p>

                  <div style={{ fontSize: "12px", color: "var(--color-navy)", fontWeight: 700, marginBottom: "var(--space-6)" }}>
                    Lead Formulations: <span style={{ color: "var(--color-gray-600)", fontWeight: 500 }}>{area.products.join(", ")}</span>
                  </div>
                </div>

                <Link
                  href={area.href}
                  className="btn-connected-pill btn-connected-pill--primary"
                  style={{ width: "100%", justifyContent: "center", display: "flex", textDecoration: "none" }}
                >
                  Explore Therapeutic Specialty →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
