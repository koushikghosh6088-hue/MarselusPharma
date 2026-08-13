import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Giant MARSELUS Wordmark Signature Reveal */}
      <div className="giant-wordmark-wrapper" aria-hidden="true">
        <span className="giant-wordmark-text">MARSELUS</span>
      </div>

      <footer className="footer" id="main-footer">
        <div className="container">
          <div className="footer-grid">
            
            {/* Col 1: Company */}
            <div className="footer-col">
              <div className="footer-logo">
                <span className="footer-logo-icon">M</span>
                <span className="footer-logo-text">Marselus</span>
              </div>
              <p className="footer-desc">
                A specialist pharmaceutical company focused on Gastroenterology, Women&apos;s Health, and Clinical Nutrition. Heritage of Healing.
              </p>
              <div style={{ marginTop: "var(--space-4)" }}>
                <span className="slide-badge slide-badge--1" style={{ fontSize: "10px" }}>
                  WHO-GMP &amp; ISO 9001:2015 CERTIFIED
                </span>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/about#quality">Quality &amp; ISO</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Col 3: Products */}
            <div className="footer-col">
              <h4 className="footer-heading">Products</h4>
              <ul className="footer-links">
                <li><Link href="/products/artemes"><span className="dot dot--artemes"></span> ARTEMES 1.2g</Link></li>
                <li><Link href="/products/saranya"><span className="dot dot--saranya"></span> SARANYA</Link></li>
                <li><Link href="/products/immunomars"><span className="dot dot--immunomars"></span> IMMUNOMARS</Link></li>
                <li><Link href="/products/uv60k"><span className="dot dot--uv60k"></span> UV 60K</Link></li>
              </ul>
            </div>

            {/* Col 4: Scientific Resources */}
            <div className="footer-col">
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-links">
                <li><Link href="/therapy-areas">Therapy Areas</Link></li>
                <li><Link href="/science">Scientific Resources</Link></li>
                <li><Link href="/science#monographs">Product Monographs</Link></li>
                <li><Link href="/science#downloads">Download Centre</Link></li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Marselus Pharmaceuticals. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link href="/privacy">Privacy Policy</Link>
              <span className="footer-separator">•</span>
              <Link href="/terms">Terms &amp; Disclaimer</Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
