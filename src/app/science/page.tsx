import Link from "next/link";

export default function Science() {
  return (
    <main className="page-content atrimus-white-bg" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      <div className="container">
        
        {/* Science Hero */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto var(--space-16)" }}>
          <span className="slide-badge slide-badge--2" style={{ marginBottom: "var(--space-4)" }}>
            ✦ SCIENTIFIC EVIDENCE &amp; EDUCATION
          </span>
          <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4.25rem)", fontWeight: 900, color: "var(--color-navy)", lineHeight: 1.05, textTransform: "uppercase", marginBottom: "var(--space-6)" }}>
            SCIENCE &amp; <span className="gradient-accent-2">RESOURCES</span>
          </h1>
          <p style={{ fontSize: "var(--text-xl)", color: "var(--color-gray-600)", lineHeight: "1.6" }}>
            Access product monographs, clinical evidence, therapy education, and downloadable resources for registered healthcare professionals.
          </p>
        </div>

        {/* 4 Modules Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-8)", marginBottom: "var(--space-16)" }}>
          
          {/* Module 1: Product Monographs */}
          <div id="monographs" className="atrimus-glass-card" style={{ padding: "var(--space-8)", borderRadius: "24px", borderTop: "4px solid #10b981" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(16, 185, 129, 0.15)", color: "#059669", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-4)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "24px", height: "24px" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Product Monographs</h3>
            <p style={{ fontSize: "14px", color: "var(--color-gray-600)", lineHeight: "1.6", marginBottom: "var(--space-4)" }}>
              Comprehensive product monographs for ARTEMES, SARANYA, IMMUNOMARS, and UV 60K, detailing pharmacology and prescribing data.
            </p>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#059669" }}>Monographs Available Upon Request →</span>
          </div>

          {/* Module 2: Clinical Evidence */}
          <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", borderRadius: "24px", borderTop: "4px solid #3b82f6" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(37, 99, 235, 0.15)", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-4)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "24px", height: "24px" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3" />
              </svg>
            </div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Clinical Evidence</h3>
            <p style={{ fontSize: "14px", color: "var(--color-gray-600)", lineHeight: "1.6", marginBottom: "var(--space-4)" }}>
              Peer-reviewed clinical trials supporting therapeutic efficacy across Gastroenterology, Women&apos;s Health, and Nutrition.
            </p>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#2563eb" }}>*Currently under medical review for compliance</span>
          </div>

          {/* Module 3: Therapy Education */}
          <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", borderRadius: "24px", borderTop: "4px solid #a855f7" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(168, 85, 247, 0.15)", color: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-4)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "24px", height: "24px" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 01-.491-6.347A48.627 48.627 0 0112 3c4.229 0 8.287.572 12.16 1.637-.156 2.148-.323 4.281-.49 6.347m-19.41 0a48.536 48.536 0 002.585 10.428A48.536 48.536 0 0012 21c3.96 0 7.747-.57 11.255-1.638.932-3.376 1.76-6.85 2.404-10.427m-19.41 0c1.077 3.577 2.378 7.05 3.864 10.427" />
              </svg>
            </div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Therapy Education</h3>
            <p style={{ fontSize: "14px", color: "var(--color-gray-600)", lineHeight: "1.6", marginBottom: "var(--space-4)" }}>
              Educational modules covering MMX™ prolonged-release kinetics, 40:1 inositol ratios, and immunonutrition mechanisms.
            </p>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#7c3aed" }}>Explore Educational Insights →</span>
          </div>

          {/* Module 4: Download Centre */}
          <div id="downloads" className="atrimus-glass-card" style={{ padding: "var(--space-8)", borderRadius: "24px", borderTop: "4px solid #06b6d4" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(6, 182, 212, 0.15)", color: "#0284c7", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-4)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: "24px", height: "24px" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "var(--space-2)" }}>Download Centre</h3>
            <p style={{ fontSize: "14px", color: "var(--color-gray-600)", lineHeight: "1.6", marginBottom: "var(--space-4)" }}>
              Approved product leaflets, prescribing guides, and scientific resources as versioned PDFs.
            </p>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#0284c7" }}>*Version-controlled PDFs available after sign-off</span>
          </div>

        </div>

        {/* Closing CTA */}
        <div className="atrimus-glass-card" style={{ padding: "var(--space-10)", textAlign: "center", borderRadius: "24px", background: "linear-gradient(135deg, rgba(239, 246, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--color-navy)", marginBottom: "var(--space-3)" }}>
            NEED MEDICAL INFORMATION?
          </h2>
          <p style={{ fontSize: "var(--text-base)", color: "var(--color-gray-600)", marginBottom: "var(--space-6)", maxWidth: "50ch", margin: "0 auto var(--space-6)" }}>
            For specific medical information requests, product inquiries, or to request a full product monograph, contact our medical information team.
          </p>
          <Link href="/contact" className="btn-connected-pill btn-connected-pill--primary">
            Contact Medical Info →
          </Link>
        </div>

      </div>
    </main>
  );
}
