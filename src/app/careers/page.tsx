"use client";

import { useState } from "react";
import SpineTab from "@/components/SpineTab";

export default function CareersPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      
      {/* Hero Banner with Spine Tab */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="CAREERS — JOIN MARSELUS" />

        <div className="container">
          <div style={{ maxWidth: "840px", margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow-badge" style={{ marginBottom: "var(--space-4)" }}>
              ✦ JOIN OUR TEAM
            </span>
            <h1 style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", marginBottom: "var(--space-6)" }}>
              Build Your <span className="italic-accent">Career.</span>
            </h1>
            <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-muted)", lineHeight: "1.65" }}>
              Join a team dedicated to scientific excellence, ethical integrity, and improving patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions Grid */}
      <section className="section" style={{ padding: "var(--space-12) 0", background: "var(--color-cream-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto var(--space-12)" }}>
            <span className="eyebrow-label">CURRENT OPPORTUNITIES</span>
            <h2>Open <span className="italic-accent">Positions.</span></h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-8)" }}>
            
            {/* Job 1 */}
            <div className="atrimus-glass-card career-card" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)" }}>
              <div className="career-card-spine">APPLY</div>
              <span className="slide-badge" style={{ fontSize: "11px", marginBottom: "var(--space-3)" }}>FIELD SALES</span>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "4px" }}>Medical Representative</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--color-forest)", fontWeight: 700, marginBottom: "var(--space-3)" }}>
                Kolkata, West Bengal · 1–3 years
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                Drive product awareness and build relationships with healthcare professionals across gastroenterology and women&apos;s health.
              </p>
            </div>

            {/* Job 2 */}
            <div className="atrimus-glass-card career-card" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)" }}>
              <div className="career-card-spine">APPLY</div>
              <span className="slide-badge" style={{ fontSize: "11px", marginBottom: "var(--space-3)", background: "rgba(214, 67, 140, 0.15)", color: "var(--color-saranya)" }}>BRAND MANAGEMENT</span>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "4px" }}>Product Manager</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--color-forest)", fontWeight: 700, marginBottom: "var(--space-3)" }}>
                Kolkata, West Bengal · 3–5 years
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                Lead product strategy and brand development for our hero brands.
              </p>
            </div>

            {/* Job 3 */}
            <div className="atrimus-glass-card career-card" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)" }}>
              <div className="career-card-spine">APPLY</div>
              <span className="slide-badge" style={{ fontSize: "11px", marginBottom: "var(--space-3)", background: "rgba(224, 138, 46, 0.15)", color: "var(--color-immunomars)" }}>QUALITY ASSURANCE</span>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "4px" }}>Quality Assurance Analyst</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--color-forest)", fontWeight: 700, marginBottom: "var(--space-3)" }}>
                Kolkata, West Bengal · 2–4 years
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                Ensure product quality and regulatory compliance across manufacturing and distribution.
              </p>
            </div>

            {/* Job 4 */}
            <div className="atrimus-glass-card career-card" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)" }}>
              <div className="career-card-spine">APPLY</div>
              <span className="slide-badge" style={{ fontSize: "11px", marginBottom: "var(--space-3)", background: "rgba(46, 127, 224, 0.15)", color: "var(--color-uv60k)" }}>REGULATORY AFFAIRS</span>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "4px" }}>Regulatory Affairs Executive</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--color-forest)", fontWeight: 700, marginBottom: "var(--space-3)" }}>
                Kolkata, West Bengal · 1–3 years
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                Manage regulatory submissions, registrations, and compliance documentation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Submit Application Form */}
      <section className="section" style={{ padding: "var(--space-16) 0", background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ maxWidth: "640px", margin: "0 auto", background: "#ffffff", padding: "var(--space-10)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)" }}>
            <span className="eyebrow-label">APPLICATION FORM</span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "var(--space-6)" }}>Submit Your <span className="italic-accent">Application.</span></h2>

            {formSubmitted ? (
              <div style={{ padding: "var(--space-6)", background: "var(--color-forest-soft)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-forest)" }}>
                <h3 style={{ fontSize: "1.2rem", color: "var(--color-forest)", marginBottom: "8px" }}>Application Received!</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", margin: 0 }}>
                  Thank you for submitting your CV. Our talent acquisition team will review your application and contact you if a suitable role matches your profile.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "6px" }}>Full Name *</label>
                  <input type="text" required placeholder="e.g. Dr. Ananya Sharma" style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-sm)", border: "1px solid rgba(15, 61, 40, 0.2)", background: "var(--color-cream-light)" }} />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "6px" }}>Email Address *</label>
                  <input type="email" required placeholder="name@example.com" style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-sm)", border: "1px solid rgba(15, 61, 40, 0.2)", background: "var(--color-cream-light)" }} />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "6px" }}>Phone Number *</label>
                  <input type="tel" required placeholder="+91 98765 43210" style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-sm)", border: "1px solid rgba(15, 61, 40, 0.2)", background: "var(--color-cream-light)" }} />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "6px" }}>Cover Note</label>
                  <textarea rows={3} placeholder="Briefly describe your experience and interest in Marselus..." style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-sm)", border: "1px solid rgba(15, 61, 40, 0.2)", background: "var(--color-cream-light)" }} />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "6px" }}>Upload CV (PDF format)</label>
                  <input type="file" accept=".pdf" style={{ width: "100%", padding: "8px", borderRadius: "var(--radius-sm)", border: "1px dashed rgba(15, 61, 40, 0.3)", background: "var(--color-cream-light)" }} />
                </div>

                <button type="submit" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-forest)", color: "var(--color-text-on-dark)", marginTop: "var(--space-4)", justifyContent: "center" }}>
                  Submit Application →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}
