"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Careers() {
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
            <span className="current">Careers</span>
          </div>
          <h1 className="page-hero__title hero-enter hero-enter--delay-2">
            Build Your <span className="heading-dot">Career</span>
          </h1>
          <p className="page-hero__subtitle hero-enter hero-enter--delay-3">
            Join a team dedicated to scientific excellence, ethical integrity, and improving patient outcomes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-subtitle">Open Positions</p>
            <h2 className="heading-dot">Current Openings</h2>
          </div>

          <div className="grid grid--2 reveal-stagger" style={{ gap: "var(--space-6)" }}>
            <div className="job-card reveal">
              <h3 className="job-card__title">Medical Representative</h3>
              <div className="job-card__meta">
                <span className="job-card__meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg> Kolkata, West Bengal
                </span>
                <span className="job-card__meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg> 1-3 years
                </span>
              </div>
              <p className="job-card__desc">Drive product awareness and build relationships with healthcare professionals across the gastroenterology and women&apos;s health therapy areas.</p>
              <Link href="/contact" className="btn btn--primary">Apply Now</Link>
            </div>

            <div className="job-card reveal">
              <h3 className="job-card__title">Product Manager</h3>
              <div className="job-card__meta">
                <span className="job-card__meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg> Kolkata, West Bengal
                </span>
                <span className="job-card__meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38" />
                  </svg> 3-5 years
                </span>
              </div>
              <p className="job-card__desc">Lead product strategy and brand development for our hero brands across specialist therapy areas.</p>
              <Link href="/contact" className="btn btn--primary">Apply Now</Link>
            </div>

            <div className="job-card reveal">
              <h3 className="job-card__title">Quality Assurance Analyst</h3>
              <div className="job-card__meta">
                <span className="job-card__meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg> Kolkata, West Bengal
                </span>
                <span className="job-card__meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25" />
                  </svg> 2-4 years
                </span>
              </div>
              <p className="job-card__desc">Ensure product quality and regulatory compliance across our manufacturing and distribution operations.</p>
              <Link href="/contact" className="btn btn--primary">Apply Now</Link>
            </div>

            <div className="job-card reveal">
              <h3 className="job-card__title">Regulatory Affairs Executive</h3>
              <div className="job-card__meta">
                <span className="job-card__meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg> Kolkata, West Bengal
                </span>
                <span className="job-card__meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25" />
                  </svg> 1-3 years
                </span>
              </div>
              <p className="job-card__desc">Manage regulatory submissions, product registrations, and compliance documentation for our product portfolio.</p>
              <Link href="/contact" className="btn btn--primary">Apply Now</Link>
            </div>
          </div>

          <p className="text-center text-muted reveal" style={{ marginTop: "var(--space-8)", fontSize: "var(--text-sm)" }}>
            <em>These are sample listings. Final job roles will be updated with approved content at launch.</em>
          </p>
        </div>
      </section>

      {/* CV Upload Section */}
      <section className="section section--gray">
        <div className="container" style={{ maxWidth: "700px" }}>
          <div className="section-header section-header--center reveal">
            <h2 className="heading-dot">Submit Your CV</h2>
            <p className="section-description">Can&apos;t find a suitable role? Send us your CV and we&apos;ll keep you in mind for future openings.</p>
          </div>
          <form data-validate className="reveal" style={{ background: "var(--color-white)", padding: "var(--space-8)", borderRadius: "var(--radius-xl)", border: "var(--border-light)" }}>
            <div className="form-group">
              <label className="form-label" htmlFor="cv-name">Full Name *</label>
              <input type="text" id="cv-name" className="form-input" required placeholder="Your full name" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="cv-email">Email *</label>
              <input type="email" id="cv-email" className="form-input" required placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="cv-phone">Phone</label>
              <input type="tel" id="cv-phone" className="form-input" placeholder="+91 XXXXX XXXXX" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="cv-message">Cover Note</label>
              <textarea id="cv-message" className="form-input" placeholder="Tell us about yourself and your interest in Marselus..."></textarea>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="cv-file">Upload CV (PDF)</label>
              <input type="file" id="cv-file" className="form-input" accept=".pdf,.doc,.docx" />
            </div>
            <button type="submit" className="btn btn--primary btn--lg" style={{ width: "100%" }}>Submit Application</button>
          </form>
        </div>
      </section>
    </main>
  );
}
