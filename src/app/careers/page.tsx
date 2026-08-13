"use client";

import { useState, FormEvent } from "react";

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="page-content atrimus-white-bg" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      <div className="container">
        
        {/* Careers Hero */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto var(--space-16)" }}>
          <span className="slide-badge slide-badge--1" style={{ marginBottom: "var(--space-4)" }}>
            ✦ JOIN OUR TEAM
          </span>
          <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4.25rem)", fontWeight: 900, color: "var(--color-navy)", lineHeight: 1.05, textTransform: "uppercase", marginBottom: "var(--space-6)" }}>
            BUILD YOUR <span className="gradient-accent-1">CAREER</span>
          </h1>
          <p style={{ fontSize: "var(--text-xl)", color: "var(--color-gray-600)", lineHeight: "1.6" }}>
            Join a team dedicated to scientific excellence, ethical integrity, and improving patient outcomes across specialized healthcare domains.
          </p>
        </div>

        {/* Open Positions Grid */}
        <div style={{ marginBottom: "var(--space-16)" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--color-navy)", textTransform: "uppercase", marginBottom: "var(--space-8)" }}>
            OPEN POSITIONS
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-6)" }}>
            
            {/* Position 1 */}
            <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderRadius: "20px", borderLeft: "4px solid #10b981", position: "relative" }}>
              <span className="slide-badge slide-badge--1" style={{ marginBottom: "8px" }}>KOLKATA · 1–3 YEARS</span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "4px" }}>Medical Representative</h3>
              <p style={{ fontSize: "13px", color: "var(--color-gray-600)", lineHeight: "1.5", margin: 0 }}>
                Drive product awareness and build enduring relationships with healthcare professionals across gastroenterology and women&apos;s health.
              </p>
            </div>

            {/* Position 2 */}
            <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderRadius: "20px", borderLeft: "4px solid #3b82f6", position: "relative" }}>
              <span className="slide-badge slide-badge--2" style={{ marginBottom: "8px" }}>KOLKATA · 3–5 YEARS</span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "4px" }}>Product Manager</h3>
              <p style={{ fontSize: "13px", color: "var(--color-gray-600)", lineHeight: "1.5", margin: 0 }}>
                Lead product strategy, brand development, and medical affairs communication for our core hero brands.
              </p>
            </div>

            {/* Position 3 */}
            <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderRadius: "20px", borderLeft: "4px solid #a855f7", position: "relative" }}>
              <span className="slide-badge slide-badge--3" style={{ marginBottom: "8px" }}>KOLKATA · 2–4 YEARS</span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "4px" }}>Quality Assurance Analyst</h3>
              <p style={{ fontSize: "13px", color: "var(--color-gray-600)", lineHeight: "1.5", margin: 0 }}>
                Ensure product quality, stability testing, and regulatory compliance across manufacturing and distribution pipelines.
              </p>
            </div>

            {/* Position 4 */}
            <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderRadius: "20px", borderLeft: "4px solid #06b6d4", position: "relative" }}>
              <span className="slide-badge slide-badge--4" style={{ marginBottom: "8px" }}>KOLKATA · 1–3 YEARS</span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "4px" }}>Regulatory Affairs Executive</h3>
              <p style={{ fontSize: "13px", color: "var(--color-gray-600)", lineHeight: "1.5", margin: 0 }}>
                Manage regulatory submissions, product registrations, and compliance documentation with state and central authorities.
              </p>
            </div>

          </div>
        </div>

        {/* CV Submission Form */}
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div className="atrimus-glass-card" style={{ padding: "var(--space-10)", borderRadius: "28px" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--color-navy)", textTransform: "uppercase", marginBottom: "var(--space-2)", textAlign: "center" }}>
              SUBMIT YOUR CV
            </h2>
            <p style={{ fontSize: "14px", color: "var(--color-gray-600)", textAlign: "center", marginBottom: "var(--space-8)" }}>
              Send us your details and resume. Our HR team will reach out when a suitable role matches your expertise.
            </p>

            {submitted ? (
              <div style={{ padding: "var(--space-6)", background: "rgba(16, 185, 129, 0.12)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: "16px", textAlign: "center" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#059669", margin: "0 0 4px 0" }}>Application Received!</h4>
                <p style={{ fontSize: "14px", color: "var(--color-gray-700)", margin: 0 }}>Thank you for applying to Marselus Pharmaceuticals. Our HR team will review your application shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "var(--color-navy)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Full Name *</label>
                  <input type="text" required placeholder="Dr. / Mr. / Ms. Full Name" style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: "1px solid rgba(10, 25, 47, 0.15)", background: "#ffffff", fontSize: "14px" }} />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "var(--color-navy)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email *</label>
                    <input type="email" required placeholder="your.email@domain.com" style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: "1px solid rgba(10, 25, 47, 0.15)", background: "#ffffff", fontSize: "14px" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "var(--color-navy)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Phone *</label>
                    <input type="tel" required placeholder="+91 XXXXX XXXXX" style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: "1px solid rgba(10, 25, 47, 0.15)", background: "#ffffff", fontSize: "14px" }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "var(--color-navy)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Cover Note</label>
                  <textarea rows={3} placeholder="Briefly describe your experience and position interest..." style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: "1px solid rgba(10, 25, 47, 0.15)", background: "#ffffff", fontSize: "14px", resize: "vertical" }}></textarea>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "var(--color-navy)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Upload CV (PDF) *</label>
                  <input type="file" accept=".pdf,.doc,.docx" required style={{ width: "100%", padding: "8px", borderRadius: "12px", border: "1px dashed rgba(10, 25, 47, 0.2)", background: "#ffffff", fontSize: "13px" }} />
                </div>

                <button type="submit" className="btn-connected-pill btn-connected-pill--primary" style={{ marginTop: "var(--space-4)", width: "100%", justifyContent: "center" }}>
                  Submit Application →
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </main>
  );
}
