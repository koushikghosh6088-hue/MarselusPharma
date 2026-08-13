import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link href="/" className="footer__logo">
              <span className="footer__logo-icon">M</span>
              Marselus Pharmaceuticals
            </Link>
            <p>A specialist pharmaceutical company focused on Gastroenterology, Women&apos;s Health, and Clinical Nutrition. Heritage of Healing since 2003.</p>
          </div>

          <div>
            <h3 className="footer__heading">Company</h3>
            <ul className="footer__links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about#quality">Quality &amp; ISO</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__heading">Products</h3>
            <ul className="footer__links">
              <li><Link href="/products/artemes">ARTEMES</Link></li>
              <li><Link href="/products/saranya">SARANYA</Link></li>
              <li><Link href="/products/immunomars">IMMUNOMARS</Link></li>
              <li><Link href="/products/uv60k">UV 60K</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__heading">Resources</h3>
            <ul className="footer__links">
              <li><Link href="/therapy-areas">Therapy Areas</Link></li>
              <li><Link href="/science">Scientific Resources</Link></li>
              <li><Link href="/science#monographs">Product Monographs</Link></li>
              <li><Link href="/science#downloads">Download Centre</Link></li>
            </ul>
          </div>
        </div>

        <hr className="footer__divider" />

        <div className="footer__bottom" style={{ marginBottom: "var(--space-8)" }}>
          <span>&copy; {new Date().getFullYear()} Marselus Pharmaceuticals. All rights reserved.</span>
          <div className="footer__bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
