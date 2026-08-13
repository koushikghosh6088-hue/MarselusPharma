"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Contact() {
  useEffect(() => {
    import("@/lib/scroll-animations").then((mod) => mod.initScrollAnimations());
    import("@/lib/forms").then((mod) => mod.initForms());
  }, []);

  return (
    <main className="page-content atrimus-white-bg">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb hero-enter hero-enter--delay-1">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <span className="current">Contact</span>
          </div>
          <h1 className="page-hero__title hero-enter hero-enter--delay-2">
            Get in <span className="heading-dot">Touch</span>
          </h1>
          <p className="page-hero__subtitle hero-enter hero-enter--delay-3">
            We&apos;d love to hear from you. Reach out for product enquiries, medical information, partnerships, or career opportunities.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--3 reveal-stagger" style={{ gap: "var(--space-6)", marginBottom: "var(--space-12)" }}>
            <div className="contact-info-card reveal">
              <div className="contact-info-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="contact-info-card__title">Corporate Office</h3>
              <p className="contact-info-card__text">
                Marselus Pharmaceuticals<br />Kolkata, West Bengal<br />India
              </p>
            </div>
            <div className="contact-info-card reveal">
              <div className="contact-info-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="contact-info-card__title">Phone</h3>
              <p className="contact-info-card__text">
                <a href="tel:+919876543210">+91 98765 43210</a><br />
                <small>Mon–Fri, 9:00 AM – 6:00 PM IST</small>
              </p>
            </div>
            <div className="contact-info-card reveal">
              <div className="contact-info-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="contact-info-card__title">Email</h3>
              <p className="contact-info-card__text">
                <a href="mailto:info@marseluspharma.com">info@marseluspharma.com</a><br />
                <a href="mailto:medical@marseluspharma.com">medical@marseluspharma.com</a>
              </p>
            </div>
          </div>

          <div className="split" style={{ gap: "var(--space-12)" }}>
            {/* General Enquiry Form */}
            <div className="reveal">
              <h2 style={{ marginBottom: "var(--space-6)" }}>General <span className="heading-dot">Enquiry</span></h2>
              <form data-validate>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Full Name *</label>
                  <input type="text" id="contact-name" className="form-input" required placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email *</label>
                  <input type="email" id="contact-email" className="form-input" required placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-phone">Phone</label>
                  <input type="tel" id="contact-phone" className="form-input" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-type">Enquiry Type</label>
                  <select id="contact-type" className="form-input form-select">
                    <option value="">Select type</option>
                    <option value="product">Product Enquiry</option>
                    <option value="medical">Medical Information</option>
                    <option value="partnership">Business / Partnership</option>
                    <option value="career">Career Enquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message *</label>
                  <textarea id="contact-message" className="form-input" required placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn btn--primary btn--lg">Send Enquiry</button>
              </form>
            </div>

            {/* Map */}
            <div className="reveal--right reveal">
              <h2 style={{ marginBottom: "var(--space-6)" }}>Find <span className="heading-dot">Us</span></h2>
              <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.70717961025!2d88.26495051547877!3d22.535564881896498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Marselus Pharmaceuticals Corporate Office Location - Kolkata"></iframe>
              </div>

              {/* Medical Info Callout */}
              <div style={{ marginTop: "var(--space-6)", background: "var(--color-accent-soft)", padding: "var(--space-6)", borderRadius: "var(--radius-xl)", border: "2px solid var(--color-accent)" }}>
                <h3 style={{ color: "var(--color-accent)", marginBottom: "var(--space-2)", fontSize: "var(--text-lg)" }}>Medical Information</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-gray-600)", margin: 0 }}>
                  For medical information requests, adverse event reports, or product-specific clinical queries, please email <a href="mailto:medical@marseluspharma.com" style={{ color: "var(--color-accent)", fontWeight: 600 }}>medical@marseluspharma.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
