"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Science() {
  useEffect(() => {
    import("@/lib/scroll-animations").then((mod) => mod.initScrollAnimations());
  }, []);

  return (
    <main className="page-content atrimus-white-bg">
      <section className="page-hero bg-mesh-blue">
        <div className="container">
          <div className="breadcrumb hero-enter hero-enter--delay-1">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <span className="current">Science &amp; Resources</span>
          </div>
          <h1 className="page-hero__title hero-enter hero-enter--delay-2">
            Science &amp; <span className="text-gradient-blue">Resources</span>
          </h1>
          <p className="page-hero__subtitle hero-enter hero-enter--delay-3">
            Access product monographs, clinical evidence, therapy education, and downloadable resources for healthcare professionals.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split" style={{ alignItems: "flex-start", gap: "var(--space-12)" }}>
            {/* Left column: Feature Cards */}
            <div className="grid grid--2 reveal-stagger" style={{ gap: "var(--space-6)" }}>
              <div className="feature-card glass-panel glow-border reveal" id="monographs">
                <div className="feature-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3 className="feature-card__title">Product Monographs</h3>
                <p className="feature-card__text">Comprehensive product monographs for ARTEMES, SARANYA, IMMUNOMARS, and UV 60K. Detailed prescribing information, pharmacology, and clinical data.</p>
                <p style={{ marginTop: "var(--space-4)", fontSize: "var(--text-xs)", color: "var(--color-gray-500)" }}>
                  <em>Monographs will be available for download once approved by Marselus medical/regulatory team.</em>
                </p>
              </div>

              <div className="feature-card glass-panel glow-border reveal" id="evidence">
                <div className="feature-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                </div>
                <h3 className="feature-card__title">Clinical Evidence</h3>
                <p className="feature-card__text">Peer-reviewed clinical studies and evidence summaries supporting the efficacy and safety of our products across all therapy areas.</p>
                <p style={{ marginTop: "var(--space-4)", fontSize: "var(--text-xs)", color: "var(--color-gray-500)" }}>
                  <em>Clinical evidence summaries are currently under medical review for accuracy and compliance.</em>
                </p>
              </div>

              <div className="feature-card glass-panel glow-border reveal">
                <div className="feature-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                  </svg>
                </div>
                <h3 className="feature-card__title">Therapy Education</h3>
                <p className="feature-card__text">Educational materials on Gastroenterology, Women&apos;s Health, and Clinical Nutrition — designed for healthcare professionals seeking to stay current with therapeutic advances.</p>
              </div>

              <div className="feature-card glass-panel glow-border reveal" id="downloads">
                <div className="feature-card__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
                <h3 className="feature-card__title">Download Centre</h3>
                <p className="feature-card__text">Access approved product information leaflets, prescribing guides, and scientific resources as versioned PDFs.</p>
                <p style={{ marginTop: "var(--space-4)", fontSize: "var(--text-xs)", color: "var(--color-gray-500)" }}>
                  <em>Downloads will be available after regulatory approval. All documents are version-controlled.</em>
                </p>
              </div>
            </div>

            {/* Right column: Glowing 3D Molecule Model */}
            <div className="reveal--right reveal" style={{ textAlign: "center", position: "sticky", top: "120px", zIndex: 5 }}>
              <img src="/assets/images/research-labs.png" className="float-3d" alt="Molecule Drug Discovery 3D render" style={{ width: "100%", maxWidth: "420px", borderRadius: "var(--radius-2xl)", boxShadow: "0 20px 50px var(--color-accent-glow)" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner reveal--scale reveal">
            <h2 className="cta-banner__title heading-dot">Need Medical Information</h2>
            <p className="cta-banner__text">For specific medical information requests, product enquiries, or to request a product monograph, contact our medical information team.</p>
            <div className="cta-banner__actions">
              <Link href="/contact" className="btn btn--primary btn--lg">Contact Medical Info</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
