"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="page-content atrimus-white-bg" style={{ paddingTop: "120px", paddingBottom: "var(--space-20)" }}>
      <div className="container">
        
        {/* Contact Hero */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto var(--space-16)" }}>
          <span className="slide-badge slide-badge--1" style={{ marginBottom: "var(--space-4)" }}>
            ✦ CLINICAL &amp; CORPORATE ENQUIRIES
          </span>
          <h1 style={{ fontSize: "clamp(2.75rem, 5vw, 4.25rem)", fontWeight: 900, color: "var(--color-navy)", lineHeight: 1.05, textTransform: "uppercase", marginBottom: "var(--space-6)" }}>
            GET IN <span className="gradient-accent-1">TOUCH</span>
          </h1>
          <p style={{ fontSize: "var(--text-xl)", color: "var(--color-gray-600)", lineHeight: "1.6" }}>
            We&apos;d love to hear from you. Reach out for product enquiries, medical information requests, partnerships, or career opportunities.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "var(--space-12)", alignItems: "start" }}>
          
          {/* Details Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            
            <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderRadius: "20px", borderLeft: "4px solid #10b981" }}>
              <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "4px" }}>Corporate Office</h4>
              <p style={{ fontSize: "14px", color: "var(--color-gray-600)", margin: 0 }}>
                Marselus Pharmaceuticals<br />
                Kolkata, West Bengal, India
              </p>
            </div>

            <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderRadius: "20px", borderLeft: "4px solid #3b82f6" }}>
              <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "8px" }}>Email Enquiries</h4>
              <p style={{ fontSize: "13px", color: "var(--color-gray-600)", margin: "0 0 6px 0" }}>
                <strong>General Enquiries:</strong><br />
                <a href="mailto:info@marseluspharma.com" style={{ color: "#2563eb", textDecoration: "none" }}>info@marseluspharma.com</a>
              </p>
              <p style={{ fontSize: "13px", color: "var(--color-gray-600)", margin: 0 }}>
                <strong>Medical Information &amp; Adverse Events:</strong><br />
                <a href="mailto:medical@marseluspharma.com" style={{ color: "#2563eb", textDecoration: "none" }}>medical@marseluspharma.com</a>
              </p>
            </div>

            {/* Medical Information Notice Box */}
            <div className="atrimus-glass-card" style={{ padding: "var(--space-6)", borderRadius: "20px", borderLeft: "4px solid #a855f7", background: "linear-gradient(135deg, rgba(250, 245, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)" }}>
              <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--color-navy)", marginBottom: "4px" }}>Medical Information Notice</h4>
              <p style={{ fontSize: "12px", color: "var(--color-gray-600)", lineHeight: "1.5", margin: 0 }}>
                For specific medical information requests, adverse event reports, or product-specific clinical queries, please email our dedicated medical team at <strong>medical@marseluspharma.com</strong>.
              </p>
            </div>

          </div>

          {/* Form Column */}
          <div className="atrimus-glass-card" style={{ padding: "var(--space-10)", borderRadius: "28px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--color-navy)", textTransform: "uppercase", marginBottom: "var(--space-6)" }}>
              SEND AN ENQUIRY
            </h2>

            {submitted ? (
              <div style={{ padding: "var(--space-6)", background: "rgba(16, 185, 129, 0.12)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: "16px", textAlign: "center" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#059669", margin: "0 0 4px 0" }}>Enquiry Sent!</h4>
                <p style={{ fontSize: "14px", color: "var(--color-gray-700)", margin: 0 }}>Thank you for contacting Marselus Pharmaceuticals. Our clinical team will respond shortly.</p>
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
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "var(--color-navy)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Enquiry Type *</label>
                  <select required style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: "1px solid rgba(10, 25, 47, 0.15)", background: "#ffffff", fontSize: "14px" }}>
                    <option value="product">Product &amp; Prescribing Guide Enquiry</option>
                    <option value="medical">Medical Information Request</option>
                    <option value="business">Business &amp; Distribution Partnership</option>
                    <option value="career">Career Opportunities</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "var(--color-navy)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Message *</label>
                  <textarea rows={4} required placeholder="Please write your inquiry details here..." style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: "1px solid rgba(10, 25, 47, 0.15)", background: "#ffffff", fontSize: "14px", resize: "vertical" }}></textarea>
                </div>

                <button type="submit" className="btn-connected-pill btn-connected-pill--primary" style={{ marginTop: "var(--space-2)", width: "100%", justifyContent: "center" }}>
                  Send Enquiry →
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </main>
  );
}
