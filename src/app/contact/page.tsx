"use client";

import { useState } from "react";
import SpineTab from "@/components/SpineTab";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="page-content" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)", background: "var(--color-cream)" }}>
      
      {/* Hero Banner with Spine Tab */}
      <section className="section spine-tab-container" style={{ padding: "var(--space-12) 0" }}>
        <SpineTab label="CONTACT MARSELUS — GET IN TOUCH" />

        <div className="container">
          <div style={{ maxWidth: "840px", margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow-badge" style={{ marginBottom: "var(--space-4)" }}>
              ✦ CLINICAL &amp; CORPORATE INQUIRIES
            </span>
            <h1 style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", marginBottom: "var(--space-6)" }}>
              Get in <span className="italic-accent">Touch.</span>
            </h1>
            <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-muted)", lineHeight: "1.65" }}>
              We&apos;d love to hear from you. Reach out for product enquiries, medical information, partnerships, or career opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details + Form */}
      <section className="section" style={{ padding: "var(--space-12) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-12)", alignItems: "start" }}>
            
            {/* Left Column: Contact Details & Medical Note */}
            <div>
              <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)", marginBottom: "var(--space-8)" }}>
                <span className="eyebrow-label">CORPORATE OFFICE</span>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "var(--space-4)" }}>Marselus Pharmaceuticals</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                  Kolkata, West Bengal, India
                </p>

                <hr style={{ borderTop: "1px solid rgba(15, 61, 40, 0.1)", margin: "var(--space-4) 0" }} />

                <div style={{ marginBottom: "var(--space-4)" }}>
                  <strong style={{ fontSize: "0.85rem", textTransform: "uppercase" }}>General Enquiries:</strong>
                  <p style={{ fontSize: "0.95rem", color: "var(--color-forest)", fontWeight: 700, margin: "2px 0 0 0" }}>
                    info@marseluspharma.com
                  </p>
                </div>

                <div style={{ marginBottom: "var(--space-4)" }}>
                  <strong style={{ fontSize: "0.85rem", textTransform: "uppercase" }}>Medical Information:</strong>
                  <p style={{ fontSize: "0.95rem", color: "var(--color-forest)", fontWeight: 700, margin: "2px 0 0 0" }}>
                    medical@marseluspharma.com
                  </p>
                </div>

                <div>
                  <strong style={{ fontSize: "0.85rem", textTransform: "uppercase" }}>Phone:</strong>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
                    <span style={{ fontSize: "0.95rem", color: "var(--color-forest)", fontWeight: 700 }}>Contact Representative</span>
                    <span className="verify-tag">[VERIFY: Phone]</span>
                  </div>
                </div>
              </div>

              {/* Dedicated Medical Information Note */}
              <div style={{ padding: "var(--space-6)", background: "rgba(15, 61, 40, 0.05)", borderRadius: "var(--radius-lg)", borderLeft: "4px solid var(--color-forest)" }}>
                <h4 style={{ fontSize: "1rem", marginBottom: "6px" }}>Medical Information Requests</h4>
                <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0 }}>
                  For medical information requests, adverse event reports, or product-specific clinical queries, please email <strong>medical@marseluspharma.com</strong> directly.
                </p>
              </div>
            </div>

            {/* Right Column: General Enquiry Form */}
            <div className="atrimus-glass-card" style={{ padding: "var(--space-8)", background: "#ffffff", borderRadius: "var(--radius-xl)" }}>
              <span className="eyebrow-label">ONLINE ENQUIRY</span>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "var(--space-6)" }}>Send Us a Message</h3>

              {formSubmitted ? (
                <div style={{ padding: "var(--space-6)", background: "var(--color-forest-soft)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-forest)" }}>
                  <h4 style={{ fontSize: "1.1rem", color: "var(--color-forest)", marginBottom: "4px" }}>Enquiry Sent</h4>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0 }}>
                    Thank you for contacting Marselus Pharmaceuticals. Our clinical enquiry team will review your message and respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "6px" }}>Full Name *</label>
                    <input type="text" required placeholder="e.g. Dr. Rajesh Kumar" style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-sm)", border: "1px solid rgba(15, 61, 40, 0.2)", background: "var(--color-cream-light)" }} />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "6px" }}>Email Address *</label>
                    <input type="email" required placeholder="name@example.com" style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-sm)", border: "1px solid rgba(15, 61, 40, 0.2)", background: "var(--color-cream-light)" }} />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "6px" }}>Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-sm)", border: "1px solid rgba(15, 61, 40, 0.2)", background: "var(--color-cream-light)" }} />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "6px" }}>Enquiry Type *</label>
                    <select required style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-sm)", border: "1px solid rgba(15, 61, 40, 0.2)", background: "var(--color-cream-light)" }}>
                      <option value="">Select Enquiry Type...</option>
                      <option value="product">Product Monograph / Information</option>
                      <option value="medical">Medical Information Request</option>
                      <option value="business">Business &amp; Partnership Inquiry</option>
                      <option value="career">Career Opportunity</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "6px" }}>Message *</label>
                    <textarea rows={4} required placeholder="Please write your inquiry here..." style={{ width: "100%", padding: "10px 14px", borderRadius: "var(--radius-sm)", border: "1px solid rgba(15, 61, 40, 0.2)", background: "var(--color-cream-light)" }} />
                  </div>

                  <button type="submit" className="btn-connected-pill btn-connected-pill--primary" style={{ background: "var(--color-forest)", color: "var(--color-text-on-dark)", marginTop: "var(--space-2)", justifyContent: "center" }}>
                    Send Enquiry →
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
