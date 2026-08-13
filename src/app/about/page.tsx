"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  useEffect(() => {
    import("@/lib/scroll-animations").then((mod) => mod.initScrollAnimations());
  }, []);

  return (
    <main className="page-content atrimus-white-bg">
      {/* Hero */}
      <section className="page-hero about-hero">
        <div className="container">
          <div className="breadcrumb hero-enter hero-enter--delay-1">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <span className="current">About Us</span>
          </div>
          <h1 className="page-hero__title hero-enter hero-enter--delay-2">
            About <span className="heading-dot">Marselus</span>
          </h1>
          <p className="page-hero__subtitle hero-enter hero-enter--delay-3">
            Rooted in Kolkata, driven by science — a specialist pharmaceutical company committed to improving therapeutic outcomes since 2003.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section" id="our-story">
        <div className="container">
          <div className="split">
            <div className="reveal--left reveal">
              <p className="section-subtitle">Our Story</p>
              <h2 className="heading-dot" style={{ marginBottom: "var(--space-6)" }}>Heritage of Healing</h2>
              <p>Founded in Kolkata, Marselus Pharmaceuticals began with a singular vision: to bring scientific rigour and ethical integrity to every aspect of pharmaceutical development and delivery.</p>
              <p>Over two decades, we have grown into a focused, specialist pharmaceutical company serving three core therapy areas — Gastroenterology, Women&apos;s Health, and Clinical Nutrition — with products that address real, unmet clinical needs.</p>
              <p>Our commitment extends beyond the molecules we develop. We believe in ethical compliance, teamwork-driven culture, and an unwavering focus on the patient at every step of our journey.</p>
            </div>
            <div className="reveal--right reveal">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-item__year">2003</div>
                  <div className="timeline-item__title">Foundation</div>
                  <p className="timeline-item__text">Marselus Pharmaceuticals established in Kolkata with a focus on gastroenterology and urology.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-item__year">2010</div>
                  <div className="timeline-item__title">Expanding Horizons</div>
                  <p className="timeline-item__text">Expanded into pediatrics and gynaecology, broadening our therapeutic footprint.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-item__year">2018</div>
                  <div className="timeline-item__title">Quality Certification</div>
                  <p className="timeline-item__text">Achieved ISO 9001:2015 certification, reinforcing our commitment to quality.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-item__year">2024</div>
                  <div className="timeline-item__title">Hero Brands Launch</div>
                  <p className="timeline-item__text">Launch of ARTEMES, SARANYA, IMMUNOMARS, and UV 60K — four specialist hero brands.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="section section--gray" id="vision">
        <div className="container">
          <div className="section-header section-header--center reveal">
            <p className="section-subtitle" style={{ justifyContent: "center" }}>Vision &amp; Values</p>
            <h2 className="heading-dot">What Drives Us</h2>
            <p className="section-description">Our vision is to become a trusted name in speciality pharmaceuticals by consistently delivering high-quality, evidence-based therapeutic solutions.</p>
          </div>

          <div className="values-grid reveal-stagger">
            <div className="value-item reveal">
              <div className="value-item__icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="value-item__title">Ethics &amp; Compliance</h3>
              <p className="value-item__text">Unwavering commitment to ethical business practices, regulatory compliance, and transparent operations at every level.</p>
            </div>
            <div className="value-item reveal">
              <div className="value-item__icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="value-item__title">Teamwork</h3>
              <p className="value-item__text">A collaborative culture where every team member contributes to our shared mission of improving patient outcomes.</p>
            </div>
            <div className="value-item reveal">
              <div className="value-item__icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="value-item__title">Innovation</h3>
              <p className="value-item__text">Continuously investing in research and development to bring novel, effective therapeutic solutions to underserved areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality / ISO */}
      <section className="section" id="quality">
        <div className="container">
          <div className="split">
            <div className="reveal">
              <p className="section-subtitle">Quality Assurance</p>
              <h2 className="heading-dot" style={{ marginBottom: "var(--space-6)" }}>Manufacturing Excellence</h2>
              <p>Our manufacturing facilities meet the highest international standards, ensuring every product that reaches healthcare providers and patients is safe, effective, and consistently reliable.</p>
              <div style={{ marginTop: "var(--space-6)" }}>
                <div className="iso-badge">
                  <div className="iso-badge__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <div>
                    <div className="iso-badge__text">ISO 9001:2015 Certified</div>
                    <div className="iso-badge__sub">Quality Management System</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal--right reveal">
              <ul className="content-list">
                <li>WHO-GMP compliant manufacturing facilities</li>
                <li>ISO 9001:2015 certified quality management system</li>
                <li>Stringent in-process quality checks at every stage</li>
                <li>Comprehensive stability testing and batch analysis</li>
                <li>Regulatory compliance across all operations</li>
                <li>Continuous quality improvement programmes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section section--gray" id="team">
        <div className="container">
          <div className="section-header section-header--center reveal">
            <p className="section-subtitle" style={{ justifyContent: "center" }}>Leadership</p>
            <h2 className="heading-dot">Our Team</h2>
            <p className="section-description">A dedicated team of pharmaceutical professionals driving our mission forward.</p>
          </div>

          <div className="team-grid reveal-stagger">
            <div className="team-card reveal">
              <div className="team-card__avatar">MP</div>
              <div className="team-card__name">Managing Director</div>
              <div className="team-card__role">Founder &amp; Visionary</div>
            </div>
            <div className="team-card reveal">
              <div className="team-card__avatar">RD</div>
              <div className="team-card__name">Head of R&amp;D</div>
              <div className="team-card__role">Scientific Leadership</div>
            </div>
            <div className="team-card reveal">
              <div className="team-card__avatar">QA</div>
              <div className="team-card__name">Quality Director</div>
              <div className="team-card__role">Quality Assurance</div>
            </div>
            <div className="team-card reveal">
              <div className="team-card__avatar">MK</div>
              <div className="team-card__name">Marketing Head</div>
              <div className="team-card__role">Brand Strategy</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner reveal--scale reveal">
            <h2 className="cta-banner__title heading-dot">Partner with Marselus</h2>
            <p className="cta-banner__text">Interested in learning more about our products, partnerships, or career opportunities?</p>
            <div className="cta-banner__actions">
              <Link href="/contact" className="btn btn--primary btn--lg">Get in Touch</Link>
              <Link href="/products" className="btn btn--white btn--lg">View Products</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
